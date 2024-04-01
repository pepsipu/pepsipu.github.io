import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { markedSmartypants } from "marked-smartypants";

marked.use(
  markedKatex({
    throwOnError: false,
  }),
);
marked.use(markedSmartypants());

export const parseInline = marked.parseInline;
