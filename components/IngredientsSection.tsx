import { INGREDIENTS } from "@/lib/data";

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-24 md:py-32 bg-parchment">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-olive font-medium">
            Sourcing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 leading-tight">
            Six ingredients we won't
            <span className="italic text-terracotta"> compromise on.</span>
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed">
            Every recipe starts with the same question: <em>where does this
            come from, and who made it?</em> Here are the answers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS.map((ing, i) => (
            <article
              key={ing.name}
              className="bg-cream rounded-2xl p-7 shadow-soft hover:shadow-lift transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-3xl text-terracotta/70 group-hover:text-terracotta transition">
                  0{i + 1}
                </span>
                <span className="text-xs uppercase tracking-widest text-ink/40">
                  Ingredient
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-2">
                {ing.name}
              </h3>
              <p className="text-sm text-olive font-medium mb-3 flex items-center gap-1">
                <span>📍</span>
                {ing.origin}
              </p>
              <p className="text-ink/70 leading-relaxed">{ing.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-ink/60 italic font-serif text-lg">
            "If we can't tell you where it came from, we don't use it."
          </p>
          <p className="text-sm text-ink/40 mt-2">— house rule, day one</p>
        </div>
      </div>
    </section>
  );
}