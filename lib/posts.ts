import type { Post } from "./types";
import { theSlowWeb } from "@/content/posts/the-slow-web";
import { writingIsThinking } from "@/content/posts/writing-is-thinking";
import { minimumViableBlog } from "@/content/posts/minimum-viable-blog";

const posts: Post[] = [
  theSlowWeb,
  writingIsThinking,
  minimumViableBlog,
].sort(
  (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
);

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
