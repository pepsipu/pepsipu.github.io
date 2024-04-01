<script lang="ts">
  import PostEntry from "./PostEntry.svelte";
  import { type PostInfo, getClassForTag } from "../lib/post";
  import { fly } from "svelte/transition";
  import { sineIn } from "svelte/easing";

  export let tags: string[];
  export let posts: PostInfo[];

  let activeTags = new Set<string>();
  $: filteredPosts = posts.filter((post: PostInfo) => {
    // default is everything unfiltered besides notes
    if (!activeTags.size && !post.tags.includes("notes")) {
      return true;
    }
    return post.tags.some((tag: string) => activeTags.has(tag));
  });

  // TODO: this is SO JANK
  let currentTarget: HTMLElement;
  const introStart = ({ target }: any) => {
    target.style.maxHeight = "0";
    currentTarget = target;
  };
  const outroEnd = () => {
    currentTarget.style.maxHeight = "none";
  };
</script>

<section class="transition py-12">
  <div class="flex justify-between mb-1">
    <div class="flex text-lg">Blog Posts</div>
    <div class="flex gap-2">
      {#each tags as tag}
        <button
          class={"px-2 py-1 text-sm rounded " +
            getClassForTag(tag, activeTags.has(tag))}
          on:click={() => {
            activeTags.has(tag) ? activeTags.delete(tag) : activeTags.add(tag);
            activeTags = activeTags;
          }}
        >
          {tag}
        </button>
      {/each}
    </div>
  </div>

  {#key filteredPosts}
    <div
      class="grid gap-y-3"
      in:fly={{ x: -5, duration: 350, delay: 350 }}
      out:fly={{ y: 5, duration: 350 }}
      on:introstart={introStart}
      on:outroend={outroEnd}
    >
      {#each filteredPosts as post (post.slug)}
        <PostEntry {post} />
      {/each}
    </div>
  {/key}
</section>
