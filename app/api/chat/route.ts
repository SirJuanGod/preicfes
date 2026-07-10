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

    // Variable para capturar la recomendación final cuando el tool sea invocado
    let capturedRecommendation: string | null = null;

    const result = streamText({
        model: google('gemini-flash-latest'),
        messages: coreMessages,
        system: `Eres un orientador experto encargado de realizar una Prueba de Aptitud Vocacional. 
Tu objetivo es evaluar las afinidades del usuario basándote en un banco de preguntas predefinido. 

EL BANCO DE PREGUNTAS DISPONIBLE (en formato JSON) ES EL SIGUIENTE (se ha seleccionado una muestra aleatoria para ti):
${JSON.stringify(randomQuestions, null, 2)}

REGLA ABSOLUTA DE FORMATO: NUNCA uses símbolos de markdown en ningún mensaje. Esto incluye: **, ##, ###, ####, *, ***, ---, >, _. El chat no renderiza markdown y se verían como caracteres extraños. Usa SOLO texto plano, emojis y saltos de línea para estructurar tus respuestas.

Instrucciones:
1. PREGUNTAS GENERALES: Si el usuario te saluda, pide información o pregunta cómo funciona la prueba, respóndele de manera MUY CONCISA y pregúntale si está listo para empezar. ¡NO empieces a hacer preguntas del banco hasta que el usuario acepte empezar o lo pida explícitamente!
2. DESARROLLO DEL TEST: Solo cuando el usuario quiera empezar o continuar el test, hazle UNA sola pregunta a la vez escogida del banco de preguntas provisto. Varía las competencias.
3. FORMATO DE PREGUNTAS DEL TEST:
   - Si la pregunta tiene opciones definidas, preséntalas SIEMPRE en una lista en líneas separadas usando letras o números al inicio (ej: a) Opción uno).
   - Si la pregunta es abierta, simplemente formula la pregunta.
4. ANÁLISIS DE RESPUESTAS: Cuando el usuario responda a una pregunta del test, analiza MUY BREVEMENTE (máximo 1 o 2 oraciones cortas) lo que su respuesta dice sobre sus aptitudes, y luego hazle inmediatamente la siguiente pregunta.
5. REGLA DE ORO: Mantén un tono amigable y profesional, pero SÉ MUY CONCISO. Evita dar explicaciones largas o introducciones innecesarias.
6. FINALIZACIÓN DEL TEST: Cuando hayas hecho suficientes preguntas para tener un perfil claro (ej. 5 a 7 preguntas evaluadas) y el usuario haya dado su última respuesta:
   - PASO 1: Escribe PRIMERO el mensaje completo al usuario con su perfil vocacional. Usa este formato de texto plano con emojis (sin ningún símbolo markdown):

   Tu Perfil Vocacional

[párrafo breve describiendo el perfil]

   Tus Fortalezas:
   1. [fortaleza uno]
   2. [fortaleza dos]
   3. [fortaleza tres]

   Carreras Recomendadas:
   1. [Carrera] - [breve descripción]
   2. [Carrera] - [breve descripción]
   3. [Carrera] - [breve descripción]

   ¿Te gustaría saber más sobre alguna de estas carreras? Puedo recomendarte universidades colombianas donde estudiarla. 😊

   - PASO 2: Solo DESPUÉS de haber escrito ese mensaje, llama a la herramienta 'finish_test' pasando un resumen de la recomendación.
7. RECOMENDACIÓN DE UNIVERSIDADES: Si el usuario menciona o elige alguna de las carreras recomendadas, respóndele con una lista de universidades colombianas que ofrecen esa carrera. Incluye públicas y privadas, menciona la ciudad y un rasgo distintivo de cada una. Usa texto plano con emojis, sin markdown.`,
        tools: {
            finish_test: tool({
                description: 'Llamar ÚNICAMENTE después de haber escrito el mensaje de perfil vocacional al usuario. Registra los resultados en la base de datos en segundo plano.',
                parameters: z.object({
                    final_recommendation: z.string().describe('Resumen de la conclusión o perfil vocacional basándote en las respuestas del usuario.'),
                }),
                execute: async ({ final_recommendation }) => {
                    // Capturamos la recomendación para guardarla en onFinish
                    capturedRecommendation = (final_recommendation ?? '').trim()
                        || 'El usuario finalizó el test, pero el modelo no generó una recomendación explícita.';

                    // No retornamos texto para que el modelo no genere contenido adicional innecesario
                    return '';
                }
            })
        },
        maxSteps: 15,
        onFinish: async () => {
            // Guardamos en la base de datos SOLO cuando el stream ya terminó completamente.
            // En este punto el usuario ya recibió toda la predicción en pantalla.
            if (capturedRecommendation !== null) {
                const dataset = JSON.stringify(rawMessages);
                sql`
                    INSERT INTO ai_training_dataset (messages_dataset, final_recommendation)
                    VALUES (${dataset}::jsonb, ${capturedRecommendation})
                `.catch((e: any) => {
                    console.error('Error guardando en base de datos:', e.message);
                });
            }
        },
    });

    return result.toUIMessageStreamResponse({
        headers: corsHeaders
    });
}