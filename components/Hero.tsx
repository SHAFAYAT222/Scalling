import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient — drop a real photo in /public/hero.jpg later */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-parchment to-cream" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,theme(colors.terracotta/0.15),transparent_50%),radial-gradient(circle_at_80%_70%,theme(colors.olive/0.15),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-terracotta/10 text-terracotta text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Est. {BUSINESS.foundedYear} · Portland, OR
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-ink">
            Slow food,
            <br />
            <span className="italic text-terracotta">honestly made.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/70 leading-relaxed max-w-lg">
            {BUSINESS.tagline} Every loaf, every jar, every plate is a small
            promise kept — to the farms we work with, and to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="bg-terracotta text-cream px-6 py-3 rounded-full font-medium hover:bg-ember transition shadow-soft"
            >
              See what we're baking →
            </a>
            <Link
              href="/posts/the-slow-web"
              className="px-6 py-3 rounded-full font-medium border border-ink/20 hover:border-ink/50 transition"
            >
              Read our story
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4 max-w-md">
            {BUSINESS.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-terracotta">
                  {s.value}
                </div>
                <div className="text-xs text-ink/60 uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual — replace with <Image src="/hero.jpg" /> when you have a photo */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lift bg-gradient-to-br from-terracotta/30 via-gold/40 to-olive/40 flex items-center justify-center">
          <div className="text-center text-ink/70">
            <div className="text-8xl mb-4">🥖</div>
            <div className="font-display text-lg italic">
              {BUSINESS.name}
            </div>
            <div className="text-xs uppercase tracking-widest mt-1 text-ink/50">
              Photo placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}