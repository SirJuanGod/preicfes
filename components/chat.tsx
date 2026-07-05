"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useEffect, useRef, useState } from "react"
import { ArrowUp, Bot, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMessage } from "@/components/chat-message"

const SUGGESTIONS = [
  "Estoy listo para la prueba vocacional",
  "Quiero descubrir mis aptitudes",
  "¿Cómo funciona esta prueba?",
  "Empecemos con la evaluación",
]

export function Chat() {
  const { messages, sendMessage, status, stop, error, regenerate } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const isBusy = status === "submitted" || status === "streaming"
  const isEmpty = messages.length === 0

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, status])

  function submit(text: string) {
    const value = text.trim()
    if (!value || isBusy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
      <header className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Bot className="size-4" />
        </div>
        <div>
          <h1 className="text-sm font-semibold leading-none">Test Vocacional</h1>
          <p className="text-xs text-muted-foreground">Potenciado por IA · Preicfes Gratuito</p>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6"
        role="log"
        aria-live="polite"
      >
        {isEmpty ? (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <Bot className="size-7" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-balance">
                Test de Aptitud Vocacional
              </h2>
              <p className="text-sm text-muted-foreground text-pretty">
                Descubre tus fortalezas y las carreras que mejor se adaptan a ti. ¡Empieza ahora!
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-xl border border-border px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {messages.map((message, idx) => {
              const text = message.content || (message.parts ? message.parts.map((p: any) => p.text).join('') : '')
              const isLastBot = message.role === "assistant" && idx === messages.length - 1

              // Extraer opciones tipo "a)", "A.", "1.", "1)" de la última respuesta del bot
              let quickReplies: string[] = []
              if (isLastBot && !isBusy) {
                const optionRegex = /^[\s]*(?:[a-dA-D1-4][.)]\s*)(.*)/gm
                let match
                while ((match = optionRegex.exec(text)) !== null) {
                  const option = match[1].trim()
                  if (option.length > 2 && option.length < 200) {
                    quickReplies.push(match[0].trim())
                  }
                }
              }

              return (
                <div key={message.id}>
                  <ChatMessage role={message.role === "user" ? "user" : "bot"}>
                    {text}
                  </ChatMessage>
                  {quickReplies.length >= 2 && (
                    <div className="mt-2 ml-11 flex flex-wrap gap-2">
                      {quickReplies.map((qr) => (
                        <button
                          key={qr}
                          type="button"
                          onClick={() => submit(qr)}
                          className="quick-reply-btn rounded-xl border border-border bg-card px-3 py-2 text-left text-xs text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md active:scale-95"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            {status === "submitted" && (
              <div className="flex items-center gap-1.5 pl-11 text-muted-foreground">
                <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                <span className="size-2 animate-bounce rounded-full bg-current" />
              </div>
            )}
            {error && (
              <div className="flex flex-col gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                <p className="font-medium text-destructive">
                  Algo salió mal
                </p>
                <p className="text-muted-foreground">
                  El asistente no pudo responder. Verifica tu conexión
                  e inténtalo de nuevo.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => regenerate()}
                  className="w-fit"
                >
                  Reintentar
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit(input)
          }}
          className="flex items-end gap-2 rounded-2xl border border-border bg-card p-2 focus-within:ring-2 focus-within:ring-ring"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey &&
                !e.nativeEvent.isComposing &&
                e.keyCode !== 229
              ) {
                e.preventDefault()
                submit(input)
              }
            }}
            rows={1}
            placeholder="Escribe tu respuesta..."
            aria-label="Message"
            className="max-h-40 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {isBusy ? (
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={stop}
              aria-label="Stop generating"
              className="size-9 shrink-0 rounded-xl"
            >
              <Square className="size-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim()}
              aria-label="Send message"
              className="size-9 shrink-0 rounded-xl"
            >
              <ArrowUp className="size-4" />
            </Button>
          )}
        </form>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Preicfes Gratuito · Prueba de Aptitud Vocacional
        </p>
      </div>
    </div>
  )
}
