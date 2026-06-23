import { BUSINESS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-olive/30 via-parchment to-gold/30 flex items-center justify-center shadow-soft">
            <div className="text-center">
              <div className="text-9xl">👩‍🍳</div>
              <div className="font-display italic text-ink/60 mt-2">
                since 2019
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-medium">
            Our story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 leading-tight">
            A kitchen that treats ingredients
            <span className="italic text-terracotta"> like they matter.</span>
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed text-lg">
            <p>
              We started {BUSINESS.name} because we got tired of bread that
              tasted like packaging. We wanted loaves that took 72 hours.
              Butter that was actually cultured. Honey that wasn't blended
              with cheaper stuff.
            </p>
            <p>
              Six years later, we're still small on purpose. We bake at night,
              we source within 50 miles where we can, and we know every
              farmer who grows for us by first name.
            </p>
            <p>
              If that sounds like a lot of fuss — it is. And we'd rather fuss
              than take shortcuts.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-ink/10" />
            <span className="font-display italic text-ink/60">— Mara, founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}