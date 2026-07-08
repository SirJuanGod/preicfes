import { NextResponse } from "next/server"

interface IncomingScore {
    competencia: string
    label: string
    score: number
    answered: number
}

interface RecommendRequest {
    scores: IncomingScore[]
    confidence: number
    answeredCount: number
}

export interface Recommendation {
    resumen: string
    areas: string[]
    fortalezas: { label: string; score: number }[]
    fuente: "modelo" | "stub"
}


const AREAS_POR_COMPETENCIA: Record<string, string[]> = {
    "análisis_cuantitativo": [
        "Ciencia de Datos",
        "Ingeniería",
        "Finanzas Cuantitativas",
        "Actuaría",
    ],
    "comunicación": ["Periodismo", "Derecho", "Docencia", "Marketing"],
    "pensamiento_crítico": [
        "Investigación",
        "Ingeniería de Sistemas",
        "Consultoría",
        "Filosofía",
    ],
    "liderazgo": [
        "Administración de Empresas",
        "Gestión de Proyectos",
        "Emprendimiento",
        "Ciencias Políticas",
    ],
    "creatividad": ["Diseño", "Publicidad", "Arquitectura", "Artes"],
    "atención_detalle": [
        "Contabilidad",
        "Control de Calidad",
        "Programación",
        "Medicina",
    ],
    "visualización_espacial": [
        "Arquitectura",
        "Ingeniería Mecánica",
        "Diseño 3D",
        "Geología",
    ],
    "estabilidad_emocional": [
        "Psicología",
        "Ciencias de la Salud",
        "Recursos Humanos",
        "Mediación",
    ],
}

async function callTrainedModel(
    payload: RecommendRequest,
): Promise<Recommendation | null> {
    const endpoint = process.env.MODEL_ENDPOINT_URL
    if (!endpoint) return null

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(process.env.MODEL_API_KEY
                ? { Authorization: `Bearer ${process.env.MODEL_API_KEY}` }
                : {}),
        },
        body: JSON.stringify(payload),
    })

    if (!res.ok) {
        throw new Error(`El modelo respondió con estado ${res.status}`)
    }

    const data = await res.json()
    return {
        resumen: data.resumen ?? data.summary ?? "",
        areas: data.areas ?? data.careers ?? [],
        fortalezas: payload.scores
            .slice(0, 3)
            .map((s) => ({ label: s.label, score: Math.round(s.score) })),
        fuente: "modelo",
    }
}

function buildStubRecommendation(payload: RecommendRequest): Recommendation {
    const top = [...payload.scores]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)

    const areas = new Set<string>()
    for (const t of top.slice(0, 2)) {
        for (const area of AREAS_POR_COMPETENCIA[t.competencia] ?? []) {
            areas.add(area)
        }
    }

    const [first, second] = top
    const resumen =
        `Tu perfil destaca en ${first.label.toLowerCase()}` +
        (second ? ` y ${second.label.toLowerCase()}` : "") +
        `. Con un índice de confianza del ${payload.confidence}%, estas son las ` +
        `competencias donde muestras mayor afinidad y las áreas profesionales ` +
        `que mejor encajan con ellas.`

    return {
        resumen,
        areas: Array.from(areas).slice(0, 6),
        fortalezas: top.map((t) => ({ label: t.label, score: Math.round(t.score) })),
        fuente: "stub",
    }
}

export async function POST(req: Request) {
    let payload: RecommendRequest
    try {
        payload = (await req.json()) as RecommendRequest
    } catch {
        return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
    }

    if (!payload?.scores?.length) {
        return NextResponse.json(
            { error: "Faltan puntuaciones del perfil" },
            { status: 400 },
        )
    }

    try {
        const fromModel = await callTrainedModel(payload)
        const recommendation = fromModel ?? buildStubRecommendation(payload)
        return NextResponse.json(recommendation)
    } catch (err) {
        console.log("Error al llamar al modelo:", (err as Error).message)
        return NextResponse.json(buildStubRecommendation(payload))
    }
}