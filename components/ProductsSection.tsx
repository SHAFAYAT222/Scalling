import { PRODUCTS } from "@/lib/data";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-terracotta font-medium">
              What we make
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
              The weekly <span className="italic">lineup.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-md text-lg">
            Menu changes with the seasons. Pre-orders open Wednesday. When
            it's gone, it's gone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group bg-parchment rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition"
            >
              {/* Product visual — replace with <Image> when you have product photos */}
              <div className="aspect-[4/3] bg-gradient-to-br from-terracotta/20 via-gold/30 to-olive/20 flex items-center justify-center relative">
                {p.badge && (
                  <span className="absolute top-3 right-3 bg-ink text-cream text-xs font-medium px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <span className="text-7xl">
                  {p.category === "Bread"
                    ? "🍞"
                    : p.category === "Pastry"
                    ? "🥐"
                    : p.category === "Seasonal"
                    ? "🥧"
                    : p.category === "Morning"
                    ? "🥯"
                    : "🫙"}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl font-medium">
                    {p.name}
                  </h3>
                  <span className="font-display text-xl text-terracotta">
                    {p.price}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
                  {p.category}
                </p>
                <p className="text-ink/70 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}