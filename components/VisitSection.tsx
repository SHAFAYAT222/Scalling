import { BUSINESS } from "@/lib/constants";

export function VisitSection() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-parchment">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs uppercase tracking-widest text-terracotta font-medium">
            Come by
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 leading-tight">
            Visit the <span className="italic">kitchen.</span>
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            We're small, so there's often a line. It's worth it. Bring a
            book, say hi, stay a minute.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-ink/40 mb-2">
                Address
              </h3>
              <p className="text-lg">{BUSINESS.address}</p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-ink/40 mb-2">
                Hours
              </h3>
              <p className="text-lg">{BUSINESS.hours.weekdays}</p>
              <p className="text-lg">{BUSINESS.hours.weekend}</p>
              <p className="text-ink/50 mt-1 italic">{BUSINESS.hours.closed}</p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-ink/40 mb-2">
                Contact
              </h3>
              <p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-lg hover:text-terracotta"
                >
                  {BUSINESS.email}
                </a>
              </p>
              <p className="text-lg">{BUSINESS.phone}</p>
            </div>
          </div>
        </div>

        {/* Map placeholder — drop in a real Google Maps embed here */}
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-olive/20 via-cream to-terracotta/20 flex items-center justify-center shadow-soft">
          <div className="text-center">
            <div className="text-7xl mb-3">🗺️</div>
            <p className="font-display italic text-ink/60">128 Linden St</p>
            <p className="text-sm text-ink/40 mt-1">Portland, OR</p>
          </div>
        </div>
      </div>
    </section>
  );
}