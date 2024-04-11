import { parseInline } from "./markdown";
import strftime from "strftime";

import { type CollectionEntry, getCollection } from "astro:content";

const utc = strftime.utc();
export function formatDate(date: Date): string {
  return utc("%B %-d, %Y", date);
}

export function formatConciseDate(date: Date): string {
  return utc("%Y-%m-%d", date);
}

export type Post = CollectionEntry<"blog">;

export type PostMetadata = {
  rawTitle: string;
  formattedDate: string;
  rawDescription: string;
  tagList: string[];
};

export function formatPost({ data }: Post): PostMetadata {
  return {
    rawTitle: parseInline(data.title) as string,
    formattedDate: formatDate(data.date),
    rawDescription: parseInline(data.description) as string,
    tagList: data.tags.map((tag) => tag.id),
  };
}

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => data.published);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTags() {
  const tags = await getCollection("tags");
  return tags.sort((a, b) => a.data.precedence - b.data.precedence);
}
