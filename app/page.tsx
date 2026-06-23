import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/Hero";
import { PostList } from "@/components/PostList";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <PostList posts={posts} />
    </>
  );
}
