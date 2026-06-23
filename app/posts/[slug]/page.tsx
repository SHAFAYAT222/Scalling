import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Prose } from "@/components/Prose";

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
    <article>
      <Link
        href="/"
        className="text-sm text-muted hover:text-accent transition"
      >
        ← Back to all posts
      </Link>

      <header className="mt-8 mb-10">
        <div className="flex items-center gap-3 text-sm text-muted mb-4">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
      </header>

      <Prose>
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
      </Prose>
    </article>
  );
}
