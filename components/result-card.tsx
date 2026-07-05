import { GraduationCap, Sparkles, TrendingUp } from "lucide-react"
import type { Recommendation } from "@/app/api/recommend/route"

export function ResultCard({
  recommendation,
  confidence,
}: {
  recommendation: Recommendation
  confidence: number
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="size-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold">Tu recomendación vocacional</h2>
          <p className="text-xs text-muted-foreground">
            Índice de confianza: {confidence}%
          </p>
        </div>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-foreground text-pretty">
        {recommendation.resumen}
      </p>

      <div className="mb-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <TrendingUp className="size-3.5" />
          <span>Tus fortalezas principales</span>
        </div>
        <ul className="flex flex-col gap-2">
          {recommendation.fortalezas.map((f) => (
            <li key={f.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{f.label}</span>
                <span className="tabular-nums text-muted-foreground">
                  {f.score}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${f.score}%` }}
                  role="progressbar"
                  aria-valuenow={f.score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={f.label}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <GraduationCap className="size-3.5" />
          <span>Áreas profesionales sugeridas</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {recommendation.areas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {recommendation.fuente === "stub" && (
        <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
          Resultado generado con reglas de respaldo. Conecta tu modelo entrenado
          (variable{" "}
          <code className="rounded bg-muted px-1 py-0.5">MODEL_ENDPOINT_URL</code>
          ) para respuestas personalizadas.
        </p>
      )}
    </div>
  )
}
