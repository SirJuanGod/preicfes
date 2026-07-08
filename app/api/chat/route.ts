import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { PREGUNTAS } from '@/lib/questions-bank';

// Permitir respuestas de streaming hasta de 30 segundos
export const maxDuration = 30;

// Configuración CORS para el frontend externo
const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://www.preicfesgratuito.com',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
    return new Response(null, { status: 200, headers: corsHeaders });
}

export async function POST(req: Request) {
    const { messages } = await req.json();

    // Map messages to ensure they match the expected format (content as string)
    const coreMessages = messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content || (msg.parts ? msg.parts.map((p: any) => p.text || '').join('') : '')
    }));

    const result = streamText({
        model: google('gemini-flash-latest'),
        messages: coreMessages,
        system: `Eres un orientador experto encargado de realizar una Prueba de Aptitud Vocacional. 
Tu objetivo es evaluar las afinidades del usuario basándote en un banco de preguntas predefinido. 

EL BANCO DE PREGUNTAS DISPONIBLE (en formato JSON) ES EL SIGUIENTE:
${JSON.stringify(PREGUNTAS)}

Instrucciones:
1. PREGUNTAS GENERALES: Si el usuario te saluda, pide información o pregunta cómo funciona la prueba, respóndele de manera MUY CONCISA y pregúntale si está listo para empezar. **¡NO empieces a hacer preguntas del banco hasta que el usuario acepte empezar o lo pida explícitamente!**
2. DESARROLLO DEL TEST: Solo cuando el usuario quiera empezar o continuar el test, hazle UNA sola pregunta a la vez escogida del banco de preguntas provisto. Varía las competencias.
3. FORMATO DE PREGUNTAS DEL TEST: 
   - Si la pregunta tiene opciones definidas, preséntalas SIEMPRE en una lista en líneas separadas usando letras o números al inicio (ej: a) Opción uno).
   - Si la pregunta es abierta, simplemente formula la pregunta.
4. ANÁLISIS DE RESPUESTAS: Cuando el usuario responda a una pregunta del test, analiza MUY BREVEMENTE (máximo 1 o 2 oraciones cortas) lo que su respuesta dice sobre sus aptitudes usando **negritas** para resaltar palabras clave, y luego hazle inmediatamente la siguiente pregunta.
5. REGLA DE ORO: Mantén un tono amigable y profesional, pero SÉ MUY CONCISO. Evita dar explicaciones largas o introducciones innecesarias. Usa la mitad del texto que usarías normalmente.
6. FINALIZACIÓN DEL TEST: Cuando hayas hecho suficientes preguntas para tener un perfil claro (ej. 5 a 7 preguntas evaluadas) y el usuario haya dado su última respuesta, DEBES llamar a la herramienta 'finish_test' para guardar los resultados y darle su conclusión vocacional. Llama a la herramienta e indícale al usuario su perfil.`,
        tools: {
            finish_test: tool({
                description: 'Llamar cuando el test vocacional haya finalizado para guardar los resultados del usuario en la base de datos.',
                parameters: z.object({
                    final_recommendation: z.string().describe('La conclusión o perfil vocacional que le das al usuario basándote en sus respuestas.'),
                }),
                execute: async ({ final_recommendation }) => {
                    try {
                        // Guardar en formato Dataset JSONL (roles y contenidos purificados)
                        const dataset = JSON.stringify(coreMessages);
                        await sql`
                            INSERT INTO ai_training_dataset (messages_dataset, final_recommendation)
                            VALUES (${dataset}::jsonb, ${final_recommendation})
                        `;
                        return "Resultados y dataset guardados exitosamente en la base de datos. Despídete del usuario indicando su recomendación final.";
                    } catch (e: any) {
                        console.error("Database save error:", e);
                        return "Hubo un error guardando en la base de datos: " + e.message;
                    }
                }
            })
        },
        maxSteps: 5,
    });

    return result.toUIMessageStreamResponse({
        headers: corsHeaders
    });
}