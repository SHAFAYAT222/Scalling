"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍞</span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {BUSINESS.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-terracotta transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="bg-terracotta text-cream px-4 py-2 rounded-full hover:bg-ember transition shadow-soft"
          >
            Visit us
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-stone-200 bg-cream px-6 py-4 space-y-3 text-ink">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-1 hover:text-terracotta"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}