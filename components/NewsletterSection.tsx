"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — wire this up to your email service (Mailchimp, Resend, etc.)
    setDone(true);
    setEmail("");
  }

  return (
    <section className="py-24 md:py-32 bg-terracotta text-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-widest text-cream/70 font-medium">
          Stay close
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-4 leading-tight">
          One letter a week.
          <br />
          <span className="italic">No noise.</span>
        </h2>
        <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Saturday morning menu, what's almost sold out, the occasional
          recipe. That's it. Unsubscribe in one click.
        </p>

        {done ? (
          <div className="bg-cream/10 border border-cream/20 rounded-full px-6 py-4 inline-block">
            ✓ Thanks — check your inbox to confirm.
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-full bg-cream text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-ink text-cream px-6 py-3 rounded-full font-medium hover:bg-moss transition"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-cream/50 text-sm mt-4">
          Joined by 1,200+ locals. No spam, ever.
        </p>
      </div>
    </section>
  );
}