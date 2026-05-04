import { getPage } from "./browser";

export async function getTitle(): Promise<string> {
  const page = await getPage();
  return page.title();
}
