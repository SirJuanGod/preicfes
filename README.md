# Chatbot Vocacional - PreICFES

Este proyecto es una aplicación web y API de chatbot diseñada para realizar una Prueba de Aptitud Vocacional. Está construido con tecnologías modernas y se conecta a servicios de Inteligencia Artificial y bases de datos en la nube.

## Sistemas y Tecnologías Utilizadas

El proyecto está desarrollado utilizando el siguiente stack tecnológico:

- **Framework Frontend/Backend:** [Next.js](https://nextjs.org/) (versión 16 con React 19)
- **Estilos y Componentes:** [Tailwind CSS](https://tailwindcss.com/) y [shadcn/ui](https://ui.shadcn.com/)
- **IA y Streaming:** [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`, `@ai-sdk/react`)

## Conexiones e Integraciones

El sistema está conectado a los siguientes servicios externos:

1. **Google Generative AI (Gemini):** Utiliza el modelo `gemini-flash-latest` a través del paquete `@ai-sdk/google` para procesar el lenguaje natural, actuar como orientador vocacional y analizar las respuestas del usuario basándose en un banco de preguntas interno (`lib/questions-bank.ts`).
2. **Vercel Postgres Database:** Se conecta a una base de datos PostgreSQL (`@vercel/postgres`) al finalizar el test. Utiliza la herramienta `finish_test` para guardar los resultados finales (recomendación vocacional) y el historial completo de la conversación (dataset) para futuros entrenamientos o análisis.
3. **Frontend Externo (vía CORS):** La API (`/api/chat`) está configurada específicamente con políticas CORS para permitir que sea consumida desde el dominio externo.

## Implementación en Otra Web

Para implementar y conectar este chatbot en otra web, puedes utilizar el hook `useChat` del SDK de Vercel AI, apuntando a la URL donde esté desplegada esta API.

A continuación, se muestra el código específico para implementarlo en una aplicación React (del lado del cliente):

```tsx
import React from 'react';
// Asegúrate de instalar el paquete: npm install ai
import { useChat } from 'ai/react';

export default function ChatbotComponent() {
  // REEMPLAZA esta URL por el dominio real donde esté desplegado tu proyecto Next.js backend
  const API_URL = 'https://tu-backend-desplegado.vercel.app/api/chat';

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: API_URL,
  });

  return (
    <div className="w-full max-w-md p-4 mx-auto border rounded-lg shadow-lg bg-white font-sans">
      <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded flex flex-col gap-3">
        {messages.length === 0 && (
          <div className="text-gray-500 text-center mt-4">
            Hola, soy tu orientador vocacional. ¿Estás listo para empezar la prueba?
          </div>
        )}
        
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span className={`inline-block p-3 rounded-lg max-w-[85%] ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-gray-200 text-gray-800 rounded-bl-none'
            }`}>
              {/* Renderiza el texto. En un entorno real podrías usar react-markdown para procesar las negritas */}
              {m.content}
            </span>
          </div>
        ))}
        {isLoading && <div className="text-gray-400 text-sm italic">El orientador está pensando...</div>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={input}
          placeholder="Escribe tu respuesta..."
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors disabled:bg-gray-400"
          disabled={isLoading || !input.trim()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
```

### Notas de Configuración para el Frontend Externo

1. **Dependencias:** En el proyecto web externo donde pegues el código anterior, necesitarás instalar las dependencias base de la IA:

   ```bash
   npx install ai
   ```

2. **CORS:** Si decides incrustar el chatbot en un dominio diferente a `https://www.preicfesgratuito.com`, debes ir al backend (`app/api/chat/route.ts`) y modificar la variable `corsHeaders` para agregar o reemplazar tu nuevo dominio.
3. **Variables de Entorno:** El backend desplegado necesita tener acceso a las variables `GOOGLE_GENERATIVE_AI_API_KEY` y las variables de conexión a `POSTGRES_URL`.
