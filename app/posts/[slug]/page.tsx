import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      <Link
        href="/#recipes"
        className="text-sm text-ink/50 hover:text-terracotta transition"
      >
        ← Back to recipes
      </Link>

      <header className="mt-8 mb-12">
        <div className="flex items-center gap-3 text-sm text-ink/50 mb-4">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight">
          {post.title}
        </h1>
        <p className="mt-6 text-xl text-ink/65 leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      <div className="space-y-5 text-lg text-ink/80 leading-relaxed [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-terracotta [&_a]:underline">
        {post.content.map((block, i) => {
          switch (block.type) {
            case "p":
              return <p key={i}>{block.text}</p>;
            case "h2":
              return <h2 key={i}>{block.text}</h2>;
            case "h3":
              return <h3 key={i}>{block.text}</h3>;
            case "ul":
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
          }
        })}
      </div>
    </article>
  );
}