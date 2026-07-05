import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });



async function list() {
  // @google/generative-ai version doesn't export listModels easily, 
  // Let's use fetch instead.
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_GENERATIVE_AI_API_KEY}`);
  const data = await response.json();
  console.log(data.models.map(m => m.name).join('\n'));
}

list();
