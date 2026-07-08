import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ChatMessageProps {
    role: "bot" | "user"
    children: React.ReactNode
}

/**
 * Convierte markdown básico a HTML:
 * **negrita**, *cursiva*, saltos de línea, listas numeradas y con viñetas.
 */
function parseMarkdown(text: string): string {
    let html = text
        // Escapar HTML peligroso
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // Negrita: **texto** o __texto__
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/__(.*?)__/g, "<strong>$1</strong>")
        // Cursiva: *texto* o _texto_
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/_(.*?)_/g, "<em>$1</em>")
        // Saltos de línea dobles -> párrafos
        .replace(/\n\n/g, "</p><p>")
        // Saltos de línea simples -> <br>
        .replace(/\n/g, "<br/>")

    return `<p>${html}</p>`
}

export function ChatMessage({ role, children }: ChatMessageProps) {
    const isBot = role === "bot"
    const text = typeof children === "string" ? children : ""

    return (
        <div
            className={cn(
                "flex items-start gap-3",
                isBot ? "justify-start" : "flex-row-reverse",
            )}
        >
            <div
                className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full",
                    isBot
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground",
                )}
                aria-hidden="true"
            >
                {isBot ? <Bot className="size-4" /> : <User className="size-4" />}
            </div>
            <div
                className={cn(
                    "chat-bubble max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    isBot
                        ? "rounded-tl-sm bg-card text-card-foreground shadow-sm"
                        : "rounded-tr-sm bg-primary text-primary-foreground",
                )}
            >
                {typeof children === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }} />
                ) : (
                    children
                )}
            </div>
        </div>
    )
}