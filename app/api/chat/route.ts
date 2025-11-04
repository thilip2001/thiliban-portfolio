import OpenAI from "openai";
import { personalInfo, skills, experiences } from "@/lib/data";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // System prompt with your portfolio information
    const systemPrompt = `You are an AI assistant for Thiliban Ravichandran's portfolio website. 
You help visitors learn about Thiliban's experience, skills, and projects.

About Thiliban:
- Name: ${personalInfo.name}
- Role: ${personalInfo.role}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}

Bio: ${personalInfo.bio}

Skills:
${Object.entries(skills)
  .map(([category, items]) => `${category}: ${items.join(", ")}`)
  .join("\n")}

Work Experience:
${experiences
  .map(
    (exp) =>
      `${exp.company} - ${exp.role} (${exp.duration})\n${exp.description}\nHighlights: ${exp.highlights.join("; ")}`
  )
  .join("\n\n")}

Instructions:
- Be friendly, professional, and helpful
- Answer questions about Thiliban's experience, skills, and projects
- If asked about availability for work, mention that visitors can use the contact form
- If you don't know something, say so honestly
- Keep responses concise but informative
- Encourage visitors to check out the blog and contact form`;

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({
          error:
            "AI Chat is not configured. Please add OPENAI_API_KEY to environment variables.",
        }),
        { status: 503 }
      );
    }

    // Call OpenAI API with streaming
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.7,
      stream: true,
    });

    // Create a readable stream from OpenAI response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const text = chunk.choices[0]?.delta?.content || "";
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      },
    });

    // Return as a standard Response with streaming
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("AI Chat error:", error);
    
    // Handle OpenAI quota exceeded error
    if (error?.status === 429 || error?.message?.includes("quota")) {
      return new Response(
        "I apologize, but the AI service is currently unavailable due to quota limits. Please try again later or use the contact form to reach out directly.",
        { 
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        }
      );
    }
    
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Failed to process chat",
      }),
      { status: 500 }
    );
  }
}
