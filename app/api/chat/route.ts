import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { personalInfo, skills, experiences } from "@/lib/data";

export const runtime = "edge";

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
    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    // Return streaming response
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("AI Chat error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Failed to process chat",
      }),
      { status: 500 }
    );
  }
}
