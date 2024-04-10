import type { Component } from "solid-js";
import { getClassForTag } from "../lib/post";

type TagListProps = {
  tags: string[];
  handleTagClick: (tag: string) => void;
  isTagActive: (tag: string) => boolean;
};

const TagList: Component<TagListProps> = ({
  tags,
  handleTagClick,
  isTagActive,
}) => {
  return (
    <div class="flex gap-2">
      {tags.map((tag) => (
        <button
          class={
            "px-2 py-1 text-sm rounded " + getClassForTag(tag, isTagActive(tag))
          }
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
