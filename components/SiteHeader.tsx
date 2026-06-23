import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight"
        >
          {SITE_NAME}
          <span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/"
            className="hover:text-ink dark:hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-ink dark:hover:text-white transition"
          >
            About
          </Link>
          <a href="#" className="text-accent hover:opacity-80 font-medium">
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
