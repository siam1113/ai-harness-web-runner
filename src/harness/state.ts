export interface HarnessState {
  goal: string;
  done: boolean;
  history: string[];
  currentUrl?: string;
  title?: string;
}

export function createState(goal: string): HarnessState {
  return { goal, done: false, history: [] };
}
