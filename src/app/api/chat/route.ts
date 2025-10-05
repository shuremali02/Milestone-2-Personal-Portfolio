import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalData, project } from "@/data";

// Gemini init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json(); 
    // messages = [{ role: "user", content: "Hello" }, { role: "assistant", content: "Hi!" }, ...]

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const projectInfo = project
      .map(p => `${p.title}: ${p.description} (Link: ${p.route})`)
      .join("\n");

    // system-style instructions
    const systemPrompt = `
You are a professional portfolio chatbot representing Syed Shurem Ali — a skilled Front-End Developer with 2.5+ years of experience in React.js, Next.js, TypeScript, and Agentic AI. 
You speak confidently, professionally, and concisely. 
Your goal is to guide visitors through Syed’s portfolio, projects, and expertise, and help them connect with him.
Tone: Friendly, professional, and clear.

Personal Data:
${JSON.stringify(personalData)}

Projects:
${projectInfo}
`;

    // convert history into a conversation text
    const conversation = messages
      .map((m: { role: string; content: string; }) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    const prompt = `${systemPrompt}\n\nConversation so far:\n${conversation}\n\nNow continue the conversation naturally.`;

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
