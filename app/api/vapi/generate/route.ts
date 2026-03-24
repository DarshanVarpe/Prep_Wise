import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { revalidatePath } from "next/cache";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json();

  let role = body.role;
  let type = body.type;
  let level = body.level;
  let techstack = body.techstack;
  let amount = body.amount;
  let userid = body.userid || 
               body.message?.call?.assistantOverrides?.variableValues?.userid || 
               body.message?.assistant?.variableValues?.userid || 
               body.message?.call?.userid;

  let callId = body.message?.call?.id;

  try {
    const toolCallList = body.message?.toolWithToolCallList || body.message?.toolCalls;
    if (toolCallList && toolCallList.length > 0) {
      const toolCall = toolCallList[0].toolCall || toolCallList[0];
      let args = toolCall?.function?.arguments;
      if (typeof args === "string") {
        args = JSON.parse(args);
      }
      if (args) {
        role = role || args.role;
        type = type || args.type;
        level = level || args.level;
        techstack = techstack || args.techstack;
        amount = amount || args.amount;
      }
    }
  } catch (err) {
    console.error("Parsing Vapi JSON failed:", err);
  }

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        
        CRITICAL RULES:
        1. Keep each question EXTREMELY short and direct. Maximum 1 or 2 sentences per question.
        2. Do not include detailed scenarios, keep it straight to the point.
        3. Do not use "/" or "*" or any other special characters which might break the voice assistant.
        
        Please return only the questions, without any additional text.
        Return the questions formatted strictly like this JSON array:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `,
    });

    let cleanQuestions = questions;
    if (questions.includes("```")) {
      cleanQuestions = questions.replace(/```json/g, "").replace(/```/g, "").trim();
    }

    const interview = {
      role: role,
      type: type,
      level: level,
      techstack: (techstack || "").split(","),
      questions: JSON.parse(cleanQuestions || "[]"),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    if (callId) {
      // Use set() with the call.id to prevent saving 2 interviews if Vapi accidentally sends 2 webhooks for the same generation call
      await db.collection("interviews").doc(callId).set(interview);
    } else {
      await db.collection("interviews").add(interview);
    }

    // Revalidate the cache so the interview appears instantly on the home screen
    revalidatePath("/");

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
