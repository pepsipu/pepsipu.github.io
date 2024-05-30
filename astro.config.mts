import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkSmartypants from "remark-smartypants";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://pepsipu.com",
  integrations: [tailwind(), mdx(), svelte()],
  markdown: {
    remarkPlugins: [remarkMath, [remarkSmartypants, { dashes: "oldschool" }]],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    contentCollectionCache: true,
  },
});
