import OpenAI from "openai";
import { config } from "../config/config";
import { SYSTEM_PROMPT } from "./prompt";
import { AgentAction } from "./types";

const client = new OpenAI({ apiKey: config.openaiApiKey });

export async function decideNextAction(goal: string, history: string[]): Promise<AgentAction> {
  if (!config.openaiApiKey) {
    throw new Error("OPENAI_API_KEY is missing.");
  }

  const historyText = history.join("\n") || "(none)";
  const userPrompt = `Goal: ${goal}\nHistory:\n${historyText}`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt }
    ]
  });

  const raw = completion.choices[0]?.message?.content?.trim() || "";
  let parsed: AgentAction;
  try {
    parsed = JSON.parse(raw) as AgentAction;
  } catch {
    throw new Error(`Failed to parse model output as JSON: ${raw}`);
  }

  return parsed;
}
