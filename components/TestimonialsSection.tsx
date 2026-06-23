import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-medium">
            What people say
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Why regulars <span className="italic text-terracotta">come back.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-cream/5 backdrop-blur rounded-2xl p-8 border border-cream/10 hover:border-terracotta/50 transition"
            >
              <div className="text-terracotta text-5xl font-display leading-none mb-3">
                "
              </div>
              <blockquote className="font-serif text-lg leading-relaxed text-cream/90 mb-6">
                {t.quote}
              </blockquote>
              <figcaption>
                <div className="font-medium">{t.author}</div>
                <div className="text-sm text-cream/50 mt-1">{t.context}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}