import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="font-serif text-5xl font-bold mb-4">404</h1>
      <p className="text-muted mb-8">
        That page doesn&apos;t exist — at least not yet.
      </p>
      <Link href="/" className="text-accent hover:underline">
        ← Back home
      </Link>
    </div>
  );
}
