import { GoogleGenAI } from "@google/genai";

async function generateImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
  
  console.log("Generating luxury car interior...");
  const interiorResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: 'High-end luxury car interior, premium leather seats, modern digital dashboard, elegant ambient lighting, professional photography, cinematic lighting, 4k resolution' }],
    },
    config: {
      imageConfig: {
        aspectRatio: "3:4",
      },
    },
  });

  let interiorBase64 = "";
  for (const part of (interiorResponse.candidates?.[0]?.content?.parts ?? [])) {
    if (part.inlineData) {
      interiorBase64 = part.inlineData.data ?? "";
    }
  }

  console.log("Generating luxury car exterior...");
  const exteriorResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: 'Sleek luxury sports car parked in front of a modern architectural building at sunset, metallic finish, professional car photography, cinematic lighting, 4k resolution' }],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  let exteriorBase64 = "";
  for (const part of (exteriorResponse.candidates?.[0]?.content?.parts ?? [])) {
    if (part.inlineData) {
      exteriorBase64 = part.inlineData.data ?? "";
    }
  }

  return { interiorBase64, exteriorBase64 };
}
