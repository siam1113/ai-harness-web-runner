import { runHarness } from "./harness/loop";

async function main(): Promise<void> {
  const goal = "Open https://example.com and get the page title";
  await runHarness(goal);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
