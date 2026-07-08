"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Compass, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMessage } from "@/components/chat-message"
import { ResultCard } from "@/components/result-card"
import type { Recommendation } from "@/app/api/recommend/route"
import {
    ANSWER_OPTIONS,
    buildProfile,
    isComplete,
    progressPercent,
    selectNextQuestion,
    TARGET_CONFIDENCE,
    type Answer,
    type AnswerValue,
} from "@/lib/vocational-engine"
import type { Pregunta } from "@/lib/questions-bank"

type Phase = "intro" | "asking" | "loading" | "done"

interface Turn {
    id: string
    role: "bot" | "user"
    text: string
}

export function VocationalChat() {
    const [phase, setPhase] = useState<Phase>("intro")
    const [turns, setTurns] = useState<Turn[]>([
        {
            id: "welcome",
            role: "bot",
            text: "Hola, soy tu orientador vocacional. Te haré una serie de preguntas sobre tus gustos y aptitudes. Responde con sinceridad usando las opciones que aparecen. Iré preguntando hasta tener suficiente certeza para recomendarte áreas de estudio o carrera.",
        },
    ])
    const [answers, setAnswers] = useState<Answer[]>([])
    const [current, setCurrent] = useState<Pregunta | null>(null)
    const [recommendation, setRecommendation] = useState<Recommendation | null>(
        null,
    )
    const [error, setError] = useState<string | null>(null)

    const scrollRef = useRef<HTMLDivElement>(null)

    const profile = useMemo(() => buildProfile(answers), [answers])
    const progress = phase === "done" ? 100 : progressPercent(profile)

    // Auto-scroll al fondo cuando cambian los turnos o la fase.
    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        })
    }, [turns, phase, recommendation])

    const askNext = useCallback((currentAnswers: Answer[]) => {
        const next = selectNextQuestion(currentAnswers)
        if (!next) return null
        setCurrent(next)
        setTurns((t) => [
            ...t,
            { id: `q-${next.id}`, role: "bot", text: next.texto },
        ])
        return next
    }, [])

    const fetchRecommendation = useCallback(async (finalAnswers: Answer[]) => {
        setPhase("loading")
        const finalProfile = buildProfile(finalAnswers)
        try {
            const res = await fetch("/api/recommend", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    scores: finalProfile.scores,
                    confidence: finalProfile.confidence,
                    answeredCount: finalProfile.answeredCount,
                }),
            })
            if (!res.ok) throw new Error("No se pudo obtener la recomendación")
            const data = (await res.json()) as Recommendation
            setRecommendation(data)
            setTurns((t) => [
                ...t,
                {
                    id: "result-intro",
                    role: "bot",
                    text: "Ya tengo suficiente información. Aquí está tu perfil y mis recomendaciones:",
                },
            ])
            setPhase("done")
        } catch (err) {
            setError((err as Error).message)
            setPhase("asking")
        }
    }, [])

    const start = useCallback(() => {
        setPhase("asking")
        askNext([])
    }, [askNext])

    const handleAnswer = useCallback(
        (value: AnswerValue, label: string) => {
            if (!current) return
            const answer: Answer = { questionId: current.id, value }
            const nextAnswers = [...answers, answer]

            setAnswers(nextAnswers)
            setTurns((t) => [
                ...t,
                { id: `a-${current.id}`, role: "user", text: label },
            ])
            setCurrent(null)
            setError(null)

            const nextProfile = buildProfile(nextAnswers)
            if (isComplete(nextProfile)) {
                void fetchRecommendation(nextAnswers)
            } else {
                // pequeña pausa para simular el "pensar" del orientador
                setTimeout(() => askNext(nextAnswers), 350)
            }
        },
        [current, answers, askNext, fetchRecommendation],
    )

    const reset = useCallback(() => {
        setAnswers([])
        setCurrent(null)
        setRecommendation(null)
        setError(null)
        setPhase("intro")
        setTurns([
            {
                id: "welcome",
                role: "bot",
                text: "Empecemos de nuevo. Responde con sinceridad y te daré una nueva recomendación.",
            },
        ])
    }, [])

    return (
        <div className="flex h-[100dvh] flex-col bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card/50 backdrop-blur">
                <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Compass className="size-5" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-sm font-semibold leading-tight">
                            Orientador Vocacional
                        </h1>
                        <p className="text-xs text-muted-foreground">
                            {phase === "done"
                                ? "Test completado"
                                : `Confianza ${profile.confidence}% / objetivo ${TARGET_CONFIDENCE}%`}
                        </p>
                    </div>
                    {phase !== "intro" && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={reset}
                            className="gap-1.5"
                        >
                            <RotateCcw className="size-3.5" />
                            Reiniciar
                        </Button>
                    )}
                </div>
                {/* Barra de progreso */}
                <div className="h-1 w-full bg-muted">
                    <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Progreso del test"
                    />
                </div>
            </header>

            {/* Mensajes */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
                <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 py-6">
                    {turns.map((turn) => (
                        <ChatMessage key={turn.id} role={turn.role}>
                            {turn.text}
                        </ChatMessage>
                    ))}

                    {phase === "loading" && (
                        <div className="flex items-center gap-1.5 pl-11 text-muted-foreground">
                            <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                            <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                            <span className="size-2 animate-bounce rounded-full bg-current" />
                        </div>
                    )}

                    {phase === "done" && recommendation && (
                        <ResultCard
                            recommendation={recommendation}
                            confidence={profile.confidence}
                        />
                    )}

                    {error && (
                        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                            {error}
                        </p>
                    )}
                </div>
            </div>

            {/* Zona de interacción */}
            <footer className="border-t border-border bg-card/50 backdrop-blur">
                <div className="mx-auto w-full max-w-2xl px-4 py-4">
                    {phase === "intro" && (
                        <Button onClick={start} className="w-full" size="lg">
                            Comenzar test vocacional
                        </Button>
                    )}

                    {phase === "asking" && current && (
                        <div className="flex flex-col gap-2">
                            <p className="px-1 text-xs text-muted-foreground">
                                Elige la opción que mejor te describe:
                            </p>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
                                {ANSWER_OPTIONS.map((opt) => (
                                    <Button
                                        key={opt.value}
                                        variant="outline"
                                        onClick={() => handleAnswer(opt.value, opt.label)}
                                        className="h-auto whitespace-normal py-2 text-xs leading-snug"
                                    >
                                        {opt.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {(phase === "asking" && !current) || phase === "loading" ? (
                        <p className="text-center text-sm text-muted-foreground">
                            Analizando tu respuesta...
                        </p>
                    ) : null}

                    {phase === "done" && (
                        <Button
                            onClick={reset}
                            variant="outline"
                            className="w-full gap-1.5"
                            size="lg"
                        >
                            <RotateCcw className="size-4" />
                            Hacer el test de nuevo
                        </Button>
                    )}
                </div>
            </footer>
        </div>
    )
}