import { defineCollection, z, reference } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(reference("tags")),
    published: z.boolean(), // posts that are unpublished should never appear
    unlisted: z.optional(z.boolean()), // unlisted posts aren't on blog/index.astro (but show up on tag pages, and can be accessed directly)
  }),
});

const tags = defineCollection({
  type: "data",
  schema: z.object({
    precedence: z.number(),
    classes: z.optional(z.string()),
    unlisted: z.optional(z.boolean()), // unlisted tags aren't on blog/index.astro (but can be accessed directly)
  }),
});

export const collections = { blog, tags };
