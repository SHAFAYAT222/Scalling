import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StickyScrollCards } from "@/components/StickyScrollCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { VisitSection } from "@/components/VisitSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <AboutSection />
      <IngredientsSection />
      <ProductsSection />

      {/* Sticky card-stack scroll (skiper66-style) — process storytelling */}
      <StickyScrollCards
        cards={[
          {
            title: "The mill runs at dawn.",
            subtitle: "Tuesday · 5:30 AM",
            description:
              "We get the wheat from Camas Country, 38 miles west. It's milled the same day we use it — flour that's still alive, still smelling like the field.",
            gradient: "from-amber-200/40 via-orange-300/30 to-yellow-200/40",
            emoji: "🌾",
          },
          {
            title: "The dough rests for three days.",
            subtitle: "Tuesday → Friday · 72 hours",
            description:
              "Slow fermentation, cold and patient. This is where flavor builds — where the wheat becomes something you can't fake with shortcuts or speed.",
            gradient: "from-stone-300/40 via-amber-200/30 to-stone-400/40",
            emoji: "🥖",
          },
          {
            title: "The oven gets angry.",
            subtitle: "Friday · 4:00 AM",
            description:
              "500°F with steam. The crust cracks. The crumb sets. Twenty minutes later, the bread comes out singing — and we know if it's right by the sound.",
            gradient: "from-orange-400/40 via-red-400/30 to-amber-500/40",
            emoji: "🔥",
          },
          {
            title: "You eat it warm.",
            subtitle: "Saturday · 8:00 AM",
            description:
              "That's the part that matters. We do all of this so that, on Saturday morning, you tear into a loaf that's still a little warm. Nothing fancy. Just real.",
            gradient: "from-yellow-200/40 via-amber-100/30 to-stone-200/40",
            emoji: "☕",
          },
        ]}
      />

      {/* Recipes / Journal teaser */}
      <section id="recipes" className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-olive font-medium">
                The journal
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
                Recipes &amp; <span className="italic">notes.</span>
              </h2>
            </div>
            <p className="text-ink/60 max-w-md text-lg">
              We write about what we're baking, why, and what we've learned
              the hard way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block bg-parchment rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gold/30 via-terracotta/20 to-olive/20 flex items-center justify-center text-7xl">
                  📖
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-ink/50 mb-2">
                    <time dateTime={post.dateISO}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium group-hover:text-terracotta transition">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-ink/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <VisitSection />
    </>
  );
}