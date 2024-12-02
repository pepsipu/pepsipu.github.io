import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import remarkMath from "remark-math";
import remarkSmartypants from "remark-smartypants";
import remarkGfm from "remark-gfm";
import remarkAlerts from "remark-alerts";

import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://pepsipu.com",
  integrations: [tailwind(), mdx(), svelte()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkAlerts,
      [remarkSmartypants, { dashes: "oldschool" }],
    ],
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
