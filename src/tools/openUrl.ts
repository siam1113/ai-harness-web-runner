import { getPage } from "./browser";

export async function openUrl(url: string): Promise<string> {
  const page = await getPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  return `Opened ${url}`;
}
