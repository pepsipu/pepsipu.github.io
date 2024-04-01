<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import type { PostInfo } from "../lib/post";
  export let post: PostInfo;
</script>

<a
  href={`/blog/${post.slug}`}
  class="block -mx-3 px-3 py-2 hover:bg-neutral-100"
>
  <div class="mb-0">
    <div class="text-lg text-black">
      {@html post.title}
      <ArrowUpRight size={18} class="inline text-neutral-400" />
    </div>
  </div>

  <div class="flex justify-between items-start">
    <div class="text-sm text-black">
      {post.date}
    </div>
    <div class="text-sm text-black">
      {post.tags.join(", ")}
    </div>
  </div>

  <div class="text-md leading-snug text-neutral-500">
    {@html post.description}
  </div>
</a>
