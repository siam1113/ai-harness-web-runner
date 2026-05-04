import { decideNextAction } from "../agent/agent";
import { closeBrowser } from "../tools/browser";
import { tools } from "../tools";
import { logStep } from "./logger";
import { createState } from "./state";
import { verifyAction } from "./verifier";

export async function runHarness(goal: string): Promise<void> {
  const state = createState(goal);

  for (let i = 0; i < 10 && !state.done; i += 1) {
    const action = await decideNextAction(goal, state.history);
    logStep(`Action: ${action.type} (${action.reason})`);

    const verification = verifyAction(action, state);
    if (!verification.ok) {
      state.history.push(`Verification failed: ${verification.reason}`);
      logStep(`Verification failed: ${verification.reason}`);
      continue;
    }

    if (action.type === "openUrl") {
      const result = await tools.openUrl(action.input as string);
      state.currentUrl = action.input;
      state.history.push(result);
      continue;
    }

    if (action.type === "getTitle") {
      const title = await tools.getTitle();
      state.title = title;
      state.history.push(`Title: ${title}`);
      logStep(`Title extracted: ${title}`);
      continue;
    }

    if (action.type === "finish") {
      state.done = true;
      logStep(`Done. Final title: ${state.title || "(none)"}`);
    }
  }

  await closeBrowser();
}
