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

    // Guardamos el historial original para el dataset de entrenamiento
    const rawMessages = Array.isArray(messages) ? messages : [];

    // Mapear los mensajes al formato que espera streamText (role + content string)
    // Filtramos mensajes de sistema y normalizamos el contenido de parts
    const coreMessages = rawMessages
        .filter((msg: any) => msg.role === 'user' || msg.role === 'assistant')
        .map((msg: any) => ({
            role: msg.role as 'user' | 'assistant',
            content: typeof msg.content === 'string'
                ? msg.content
                : Array.isArray(msg.parts)
                    ? msg.parts.map((p: any) => p.text ?? '').join('')
                    : ''
        }))
        .filter((msg: any) => msg.content.trim().length > 0);

    // Seleccionar aleatoriamente 15 preguntas del banco para no saturar el contexto del modelo
    const randomQuestions = [...PREGUNTAS]
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);

    const result = streamText({
        model: google('gemini-flash-latest'),
        messages: coreMessages,
        system: `Eres un orientador experto encargado de realizar una Prueba de Aptitud Vocacional. 
Tu objetivo es evaluar las afinidades del usuario basándote en un banco de preguntas predefinido. 

EL BANCO DE PREGUNTAS DISPONIBLE (en formato JSON) ES EL SIGUIENTE (se ha seleccionado una muestra aleatoria para ti):
${JSON.stringify(randomQuestions, null, 2)}

Instrucciones:
1. PREGUNTAS GENERALES: Si el usuario te saluda, pide información o pregunta cómo funciona la prueba, respóndele de manera MUY CONCISA y pregúntale si está listo para empezar. **¡NO empieces a hacer preguntas del banco hasta que el usuario acepte empezar o lo pida explícitamente!**
2. DESARROLLO DEL TEST: Solo cuando el usuario quiera empezar o continuar el test, hazle UNA sola pregunta a la vez escogida del banco de preguntas provisto. Varía las competencias.
3. FORMATO DE PREGUNTAS DEL TEST: 
   - Si la pregunta tiene opciones definidas, preséntalas SIEMPRE en una lista en líneas separadas usando letras o números al inicio (ej: a) Opción uno).
   - Si la pregunta es abierta, simplemente formula la pregunta.
4. ANÁLISIS DE RESPUESTAS: Cuando el usuario responda a una pregunta del test, analiza MUY BREVEMENTE (máximo 1 o 2 oraciones cortas) lo que su respuesta dice sobre sus aptitudes usando **negritas** para resaltar palabras clave, y luego hazle inmediatamente la siguiente pregunta.
5. REGLA DE ORO: Mantén un tono amigable y profesional, pero SÉ MUY CONCISO. Evita dar explicaciones largas o introducciones innecesarias. Usa la mitad del texto que usarías normalmente.
6. FINALIZACIÓN DEL TEST: Cuando hayas hecho suficientes preguntas para tener un perfil claro (ej. 5 a 7 preguntas evaluadas) y el usuario haya dado su última respuesta:
   - PASO 1: Llama a la herramienta 'finish_test' con la recomendación vocacional completa.
   - PASO 2: OBLIGATORIAMENTE, después de que la herramienta retorne, escribe un mensaje de texto completo al usuario con su perfil vocacional, sus fortalezas detectadas y las carreras recomendadas. NO termines sin escribir este mensaje.`,
        tools: {
            finish_test: tool({
                description: 'Llamar cuando el test vocacional haya finalizado para guardar los resultados del usuario en la base de datos.',
                parameters: z.object({
                    final_recommendation: z.string().describe('La conclusión o perfil vocacional que le das al usuario basándote en sus respuestas.'),
                }),
                execute: async ({ final_recommendation }) => {
                    // 1. Asignar el fallback
                    const safeRecommendation = (final_recommendation ?? "").trim() || "El usuario finalizó el test, pero el modelo no generó una recomendación explícita.";
                    // Serializar el historial original (limpio, sin artefactos del modelo)
                    const dataset = JSON.stringify(rawMessages);

                    // 2. Ejecutar la base de datos en segundo plano (Fire and Forget) sin 'await'
                    // Esto hace que el proceso sea completamente asíncrono y no bloquee el chat del usuario.
                    sql`
                        INSERT INTO ai_training_dataset (messages_dataset, final_recommendation)
                        VALUES (${dataset}::jsonb, ${safeRecommendation})
                    `.catch((e: any) => {
                        console.error("Error asíncrono guardando en base de datos:", e.message);
                    });

                    // 3. Retornar inmediatamente para que el modelo imprima el resultado al instante
                    return "ÉXITO: Resultados guardados. AHORA genera un mensaje directo para el usuario entregándole su perfil vocacional basado en todo el análisis previo. ¡Debes escribir el mensaje final ahora mismo!";
                }
            })
        },
        maxSteps: 15,
    });

    return result.toUIMessageStreamResponse({
        headers: corsHeaders
    });
}