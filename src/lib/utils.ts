import strftime from "strftime"; // as ekzhang says, yaml assumes utc
import { default as createSlug } from "slug";
createSlug.defaults.mode = "pretty";

const utc = strftime.utc();

export const slugify = createSlug;
export function formatDate(date: Date): string {
  return utc("%B %-d, %Y", date);
}
