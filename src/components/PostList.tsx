import { type Component, createSignal, createMemo } from "solid-js";
import type { PostInfo } from "../lib/post";

import TagList from "./TagList.tsx";
import PostEntry from "./PostEntry.tsx";

type PostListProps = {
  tags: string[];
  posts: PostInfo[];
};

const PostList: Component<PostListProps> = ({ tags, posts }) => {
  const [activeTag, setActiveTag] = createSignal("");

  const handleTagClick = (tag: string) =>
    setActiveTag(activeTag() !== tag ? tag : "");

  const isTagActive = (tag: string) => {
    return activeTag() === tag;
  };

  const filteredPosts = createMemo(() => {
    if (!activeTag()) return posts;

    console.log("Filtering posts by tag:", activeTag());
    return posts.filter((post) => post.tags.includes(activeTag()));
  });

  return (
    <section class="transition py-12">
      <div class="flex justify-between mb-1">
        <div class="flex text-lg">Blog Posts</div>
        <TagList
          tags={tags}
          handleTagClick={handleTagClick}
          isTagActive={isTagActive}
        />
      </div>
      <div class="grid gap-y-3">
        {filteredPosts().map((post) => (
          <PostEntry post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
