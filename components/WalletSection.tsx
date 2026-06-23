"use client";

import { AddCashDisclosure } from "@/components/ui/add-cash-disclosure";

/**
 * Demo wrapper around the watermelon's AddCashDisclosure shadcn component.
 *
 * Adapted from:
 *   https://registry.watermelon.sh/r/add-cash-disclosure.json
 *
 * Used here as a "wallet / gift card" UI for the kitchen brand —
 * lets regulars preload their account, send gift balances, or
 * pre-fund a catering order.
 */
export function WalletSection() {
  // Static demo cards. In production, fetch from your payments provider
  // (Stripe, etc.) and pass real customer cards.
  const demoCards = [
    { id: "card_1", last4: "4242", brand: "VISA" as const, isDefault: true },
    { id: "card_2", last4: "1881", brand: "MASTERCARD" as const },
  ];

  async function handleConfirm(amount: number) {
    // Simulate payment processing — wire this to Stripe / Razorpay etc.
    await new Promise((r) => setTimeout(r, 1500));
    console.log(`Top-up confirmed: $${amount}`);
  }

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-terracotta font-medium">
            Wallet &amp; gift cards
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 leading-tight">
            Pre-load your
            <br />
            <span className="italic text-terracotta">bread money.</span>
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-6">
            Regulars can pre-load their wallet and skip the line at pickup.
            Gift cards available too — none of that expires-for-no-reason
            nonsense.
          </p>

          <ul className="space-y-3 text-ink/75">
            <li className="flex gap-3">
              <span className="text-terracotta">→</span>
              <span>Top up $25, $50, $100, or custom amount</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta">→</span>
              <span>Spend on bread, pastry, or pantry items</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta">→</span>
              <span>Send a gift card to anyone, instantly</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta">→</span>
              <span>Never expires, no fees, refundable any time</span>
            </li>
          </ul>
        </div>

        {/* The interactive AddCashDisclosure card */}
        <div className="flex items-center justify-center bg-gradient-to-br from-parchment via-stone-100 to-stone-50 rounded-3xl p-8 md:p-12 shadow-soft border border-stone-200">
          <AddCashDisclosure
            initialBalance={127.5}
            cards={demoCards}
            presets={[25, 50, 100]}
            onConfirm={handleConfirm}
          />
        </div>
      </div>

      <p className="text-center text-ink/40 text-xs mt-10 italic">
        UI adapted from{" "}
        <a
          href="https://registry.watermelon.sh/r/add-cash-disclosure.json"
          target="_blank"
          rel="noreferrer"
          className="text-terracotta hover:underline"
        >
          watermelon's add-cash-disclosure
        </a>{" "}
        · shadcn registry
      </p>
    </section>
  );
}