import { BUSINESS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/80 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🍞</span>
            <span className="font-display text-2xl font-semibold text-cream">
              {BUSINESS.name}
            </span>
          </div>
          <p className="max-w-sm text-cream/70 leading-relaxed">
            {BUSINESS.description}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3">
            Visit
          </h4>
          <p className="text-cream/70 leading-relaxed">
            {BUSINESS.address}
          </p>
          <p className="text-cream/70 mt-2">{BUSINESS.hours.weekdays}</p>
          <p className="text-cream/70">{BUSINESS.hours.weekend}</p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3">
            Reach us
          </h4>
          <p>
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-terracotta">
              {BUSINESS.email}
            </a>
          </p>
          <p className="mt-2">{BUSINESS.phone}</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href={BUSINESS.social.instagram} aria-label="Instagram">📷</a>
            <a href={BUSINESS.social.youtube} aria-label="YouTube">▶️</a>
            <a href={BUSINESS.social.tiktok} aria-label="TikTok">🎵</a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-cream/50 flex flex-col md:flex-row gap-2 items-center justify-between">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. Baked with care.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}