import { FAQS } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-olive font-medium">
            Common questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 leading-tight">
            Things people <span className="italic">often ask.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group bg-parchment rounded-2xl px-6 py-5 open:shadow-soft transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-display text-lg font-medium">
                  {f.q}
                </span>
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}