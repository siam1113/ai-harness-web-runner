export type AgentActionType = "openUrl" | "getTitle" | "finish";

export interface AgentAction {
  type: AgentActionType;
  input?: string;
  reason: string;
}
