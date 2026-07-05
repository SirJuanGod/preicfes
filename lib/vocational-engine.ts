import {
  PREGUNTAS,
  COMPETENCIA_LABELS,
  type CompetenciaId,
  type Pregunta,
} from "./questions-bank"

// ---------------------------------------------------------------------------
// Escala de respuesta (Likert de 5 puntos).
// Sirve tanto para preguntas de "sí/no" como de intensidad, y se pondera
// con el campo `peso` de cada pregunta.
// ---------------------------------------------------------------------------
export type AnswerValue = "si" | "mas_si" | "neutral" | "mas_no" | "no"

export interface AnswerOption {
  value: AnswerValue
  label: string
  score: number // valor normalizado 0..1
}

export const ANSWER_OPTIONS: AnswerOption[] = [
  { value: "si", label: "Sí, totalmente", score: 1 },
  { value: "mas_si", label: "Más bien sí", score: 0.75 },
  { value: "neutral", label: "Neutral", score: 0.5 },
  { value: "mas_no", label: "Más bien no", score: 0.25 },
  { value: "no", label: "No, para nada", score: 0 },
]

const SCORE_BY_VALUE: Record<AnswerValue, number> = ANSWER_OPTIONS.reduce(
  (acc, o) => {
    acc[o.value] = o.score
    return acc
  },
  {} as Record<AnswerValue, number>,
)

// ---------------------------------------------------------------------------
// Parámetros del test adaptativo.
// ---------------------------------------------------------------------------
export const MIN_QUESTIONS = 10 // mínimo antes de poder concluir
export const MAX_QUESTIONS = 30 // tope duro de preguntas
export const TARGET_CONFIDENCE = 80 // índice de confianza objetivo (0-100)
const BASELINE_PER_COMPETENCIA = 2 // respuestas mínimas por competencia en la fase de exploración

export interface Answer {
  questionId: string
  value: AnswerValue
}

const COMPETENCIAS = Object.keys(COMPETENCIA_LABELS) as CompetenciaId[]
const QUESTION_BY_ID = new Map(PREGUNTAS.map((q) => [q.id, q]))

export interface CompetenciaScore {
  competencia: CompetenciaId
  label: string
  score: number // 0..100
  answered: number
  evidence: number // suma de pesos respondidos
}

export interface Profile {
  scores: CompetenciaScore[] // ordenado de mayor a menor score
  top: CompetenciaScore[] // top 3
  answeredCount: number
  confidence: number // 0..100
}

// Acumuladores por competencia a partir de las respuestas dadas.
function accumulate(answers: Answer[]) {
  const acc: Record<
    string,
    { weightedSum: number; weightTotal: number; answered: number }
  > = {}
  for (const c of COMPETENCIAS) {
    acc[c] = { weightedSum: 0, weightTotal: 0, answered: 0 }
  }
  for (const a of answers) {
    const q = QUESTION_BY_ID.get(a.questionId)
    if (!q) continue
    const v = SCORE_BY_VALUE[a.value]
    acc[q.competencia].weightedSum += v * q.peso
    acc[q.competencia].weightTotal += q.peso
    acc[q.competencia].answered += 1
  }
  return acc
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

// Construye el perfil actual (puntuaciones + confianza) a partir de respuestas.
export function buildProfile(answers: Answer[]): Profile {
  const acc = accumulate(answers)

  const scores: CompetenciaScore[] = COMPETENCIAS.map((c) => {
    const { weightedSum, weightTotal, answered } = acc[c]
    const score = weightTotal > 0 ? (weightedSum / weightTotal) * 100 : 0
    return {
      competencia: c,
      label: COMPETENCIA_LABELS[c],
      score,
      answered,
      evidence: weightTotal,
    }
  }).sort((a, b) => b.score - a.score)

  const answeredCount = answers.length
  const confidence = computeConfidence(scores, answeredCount)

  return {
    scores,
    top: scores.slice(0, 3),
    answeredCount,
    confidence,
  }
}

// Índice de confianza: combina cantidad de evidencia con separación entre
// la competencia líder y el resto. Una señal clara y suficiente evidencia
// producen alta confianza.
function computeConfidence(
  scores: CompetenciaScore[],
  answeredCount: number,
): number {
  const scored = scores.filter((s) => s.answered > 0)
  if (scored.length < 2 || answeredCount === 0) return 0

  // Evidencia: proporción de preguntas respondidas hacia un objetivo de ~18.
  const evidenceScore = clamp01(answeredCount / 18)

  // Separación: distancia del líder respecto al promedio de los demás.
  const top = scored[0].score
  const rest = scored.slice(1)
  const meanRest = rest.reduce((s, r) => s + r.score, 0) / rest.length
  const separationScore = clamp01((top - meanRest) / 35)

  const raw = 100 * (0.55 * evidenceScore + 0.45 * separationScore)
  return Math.round(clamp01(raw / 100) * 100)
}

export function isComplete(profile: Profile): boolean {
  if (profile.answeredCount >= MAX_QUESTIONS) return true
  return (
    profile.answeredCount >= MIN_QUESTIONS &&
    profile.confidence >= TARGET_CONFIDENCE
  )
}

// Barra de progreso mostrada al usuario: el mayor entre avance de confianza
// y avance sobre el mínimo de preguntas, para que nunca se sienta estancada.
export function progressPercent(profile: Profile): number {
  const byConfidence = (profile.confidence / TARGET_CONFIDENCE) * 100
  const byCount = (profile.answeredCount / MIN_QUESTIONS) * 100
  return Math.min(100, Math.round(Math.max(byConfidence, byCount)))
}

const NIVEL_ORDER: Record<Pregunta["nivel"], number> = {
  basica: 0,
  intermedia: 1,
  avanzada: 2,
}

// Selección adaptativa de la siguiente pregunta:
//  1. Fase de exploración: cubrir todas las competencias con un mínimo de
//     respuestas, empezando por las menos exploradas y de menor nivel.
//  2. Fase de refinamiento: enfocar las competencias líderes / más cercanas
//     para aumentar la separación, con preguntas de mayor peso y nivel.
export function selectNextQuestion(answers: Answer[]): Pregunta | null {
  const answeredIds = new Set(answers.map((a) => a.questionId))
  const remaining = PREGUNTAS.filter((q) => !answeredIds.has(q.id))
  if (remaining.length === 0) return null

  const acc = accumulate(answers)
  const answeredByComp = (c: CompetenciaId) => acc[c].answered

  // ¿Hay competencias por debajo del baseline de exploración?
  const underExplored = COMPETENCIAS.filter(
    (c) => answeredByComp(c) < BASELINE_PER_COMPETENCIA,
  )

  let targetComps: CompetenciaId[]
  let ascendingLevel: boolean

  if (underExplored.length > 0) {
    // Explorar: la competencia con menos respuestas primero.
    const minAnswered = Math.min(...underExplored.map(answeredByComp))
    targetComps = underExplored.filter((c) => answeredByComp(c) === minAnswered)
    ascendingLevel = true // preguntas más simples primero
  } else {
    // Refinar: enfocar las dos competencias mejor puntuadas para consolidar
    // la separación con preguntas más discriminantes.
    const profile = buildProfile(answers)
    targetComps = profile.scores.slice(0, 2).map((s) => s.competencia)
    ascendingLevel = false // preguntas más avanzadas / de mayor peso
  }

  const pool = remaining.filter((q) => targetComps.includes(q.competencia))
  const candidates = pool.length > 0 ? pool : remaining

  candidates.sort((a, b) => {
    const lvl = ascendingLevel
      ? NIVEL_ORDER[a.nivel] - NIVEL_ORDER[b.nivel]
      : NIVEL_ORDER[b.nivel] - NIVEL_ORDER[a.nivel]
    if (lvl !== 0) return lvl
    return b.peso - a.peso // desempate por mayor poder discriminante
  })

  return candidates[0]
}
