export type Role = "system" | "user" | "assistant";

export interface Message {
  role: Role;
  content: string;
}

export interface ToolResult {
  tool: string;
  ok: boolean;
  output: string;
}
