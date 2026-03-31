'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoogleGenAI } from "@google/genai";

interface GeminiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export default function GeminiImage({ prompt, alt, className, aspectRatio = "1:1" }: GeminiImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function generate() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio,
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            setLoading(false);
            return;
          }
        }
        throw new Error("No image generated");
      } catch (err) {
        console.error("Gemini Image Generation Error:", err);
        setError(true);
        setLoading(false);
      }
    }

    generate();
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`bg-green-dk/20 animate-pulse flex items-center justify-center ${className}`}>
        <span className="text-green/40 text-xs">جاري توليد الصورة...</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-red-500/10 flex items-center justify-center ${className}`}>
        <span className="text-red-500/40 text-xs">فشل تحميل الصورة</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
