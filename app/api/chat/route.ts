import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
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
1. Saluda al usuario y dile que estás a punto de iniciar su prueba de aptitud vocacional para descubrir sus fortalezas.
2. Hazle UNA sola pregunta a la vez escogida del banco de preguntas provisto. Procura variar las competencias (análisis cuantitativo, comunicación, liderazgo, etc.).
3. FORMATO DE PREGUNTAS: 
   - Si la pregunta tiene opciones definidas, preséntalas SIEMPRE en una lista en líneas separadas usando letras o números al inicio, por ejemplo:
     a) Opción uno
     b) Opción dos
     c) Opción tres
   - Si la pregunta es abierta y requiere que el usuario escriba, simplemente formula la pregunta sin dar opciones.
4. Espera su respuesta. Como son preguntas vocacionales, no hay respuestas "correctas" o "incorrectas". Simplemente analiza brevemente lo que su respuesta dice sobre sus aptitudes usando **negritas** para resaltar palabras clave y luego hazle la siguiente pregunta.
5. Mantén un tono amigable, profesional y alentador.
Empieza saludando y lanzando la primera pregunta.`,
  });

  return result.toUIMessageStreamResponse({
    headers: corsHeaders
  });
}
