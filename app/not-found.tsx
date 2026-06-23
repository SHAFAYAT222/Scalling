import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <div className="text-8xl mb-6">🥐</div>
      <h1 className="font-display text-6xl font-medium mb-4">404</h1>
      <p className="text-ink/60 text-lg mb-8">
        That page is out of the oven. Try the front door.
      </p>
      <Link
        href="/"
        className="inline-block bg-terracotta text-cream px-6 py-3 rounded-full font-medium hover:bg-ember transition"
      >
        ← Back home
      </Link>
    </div>
  );
}