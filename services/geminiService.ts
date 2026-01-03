
import { GoogleGenAI } from "@google/genai";

export async function generateContentAdvice(topic: string, context: string) {
  const ai = new GoogleGenAI({ apiKey: (process.env.API_KEY as string) });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional business copywriter for a construction company. 
      Topic: ${topic}
      Context: ${context}
      Provide a concise, professional, and SEO-friendly description (max 100 words) for a construction website.`,
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate suggestions at this time.";
  }
}
