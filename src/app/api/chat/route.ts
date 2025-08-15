import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalData } from "@/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a personal AI assistant for Syed Shurem Ali.
    Only answer based on the provided personal data below, and respond in a friendly, professional tone.
    
    Personal Data:
    ${JSON.stringify(personalData)}
    
    User question: ${message}`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
