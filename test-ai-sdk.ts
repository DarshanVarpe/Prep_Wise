import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

async function test() {
  console.log("Testing gemini-2.5-flash via AI SDK...");
  try {
    const result = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: "Say hello simply.",
    });
    console.log("SUCCESS:", result.text);
  } catch (error) {
    console.error("FAILED:", error);
  }
}

test();
