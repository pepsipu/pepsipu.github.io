import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkSmartypants from "remark-smartypants";

// https://astro.build/config
export default defineConfig({
  site: "https://pepsipu.com",
  integrations: [tailwind(), svelte(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath, [remarkSmartypants, { dashes: "oldschool" }]],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },
  prefetch: {
    prefetchAll: true,
  },
});
