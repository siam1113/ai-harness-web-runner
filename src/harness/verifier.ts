import { AgentAction } from "../agent/types";
import { HarnessState } from "./state";

export function verifyAction(action: AgentAction, state: HarnessState): { ok: boolean; reason?: string } {
  if (action.type === "openUrl" && !action.input) {
    return { ok: false, reason: "openUrl requires a URL input." };
  }

  if (action.type === "getTitle" && !state.currentUrl) {
    return { ok: false, reason: "Cannot get title before opening a URL." };
  }

  return { ok: true };
}
