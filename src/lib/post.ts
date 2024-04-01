import { slugify } from "./utils";
import { parseInline } from "./markdown";
import { formatDate } from "./utils";

export type PostInfo = {
  title: string;
  date: string;
  slug: string;
  description: string;
  tags: string[];
};

export const getPostInfo = ({ data }: any): PostInfo => ({
  tags: data.tags,
  date: formatDate(data.date),
  slug: slugify(data.title),
  title: parseInline(data.title) as string,
  description: parseInline(data.description) as string,
});

export const tagClasses: any = {
  default: {
    inactive: "cursor-pointer hover:bg-gray-300 text-gray-700 bg-gray-200",
    active: "cursor-pointer bg-gray-300 text-gray-700",
  },
  notes: {
    inactive: "cursor-help transition hover:bg-yellow-400 text-white",
    active: "cursor-help bg-yellow-400 text-white",
  },
};

export const getClassForTag = (tag: string, active: boolean): string => {
  return tagClasses[tagClasses[tag] ? tag : "default"][
    active ? "active" : "inactive"
  ];
};
