import Link from "next/link";
import type { Post } from "@/lib/types";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <section>
      <h2 className="text-sm uppercase tracking-widest text-muted mb-6">
        Latest posts
      </h2>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group block">
              <div className="flex items-center gap-3 text-sm text-muted mb-2">
                <time dateTime={post.dateISO}>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold group-hover:text-accent transition">
                {post.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
