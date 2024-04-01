import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
// import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkSmartypants from "remark-smartypants";
// import critters from "astro-critters";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://pepsipu.com",
  integrations: [
    tailwind(),
    svelte(),
    mdx(),
    purgecss(),
    // critters(),
    robotsTxt(),
    compress(),
    // sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [
        remarkSmartypants,
        {
          dashes: "oldschool",
        },
      ],
    ],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },
  prefetch: {
    prefetchAll: true,
  },
});
