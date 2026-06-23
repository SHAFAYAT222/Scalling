"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type StickyCard = {
  title: string;
  subtitle: string;
  description: string;
  /** Tailwind gradient class for the card face */
  gradient: string;
  /** Emoji shown in the card */
  emoji: string;
};

type Props = {
  cards: StickyCard[];
};

/**
 * Sticky card stack scroll effect.
 *
 * Pattern adapted from the open-source Skiper UI skiper16 component
 * (https://skiper-ui.com/v1/skiper16) — interactive sticky card stack
 * with smooth scroll-based scaling animations.
 *
 * Each card pins to the viewport, then the next card scales up and
 * slides into place as you scroll. Creates a "card reveal" feel.
 */
export function StickyScrollCards({ cards }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-gold font-medium">
          The process
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-cream mt-3 leading-tight">
          How a loaf
          <span className="italic text-terracotta"> becomes bread.</span>
        </h2>
        <p className="text-cream/70 text-lg mt-4 max-w-xl mx-auto">
          Three days. Four steps. Zero shortcuts. Scroll to see how it
          comes together.
        </p>
      </div>

      <main
        ref={container}
        className="relative flex w-full flex-col items-center pb-[40vh]"
      >
        {cards.map((card, i) => {
          // Each card behind the front one shrinks slightly as it gets
          // pushed back in the stack
          const targetScale = Math.max(
            0.7,
            1 - (cards.length - i - 1) * 0.08,
          );

          return (
            <StickyCardItem
              key={card.title}
              i={i}
              card={card}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              totalCards={cards.length}
            />
          );
        })}
      </main>

      <p className="text-center text-cream/40 text-xs mt-8 italic">
        Scroll effect adapted from{" "}
        <a
          href="https://skiper-ui.com/v1/skiper16"
          target="_blank"
          rel="noreferrer"
          className="text-gold hover:underline"
        >
          Skiper UI
        </a>{" "}
        · open source
      </p>
    </section>
  );
}

type ItemProps = {
  i: number;
  card: StickyCard;
  progress: any;
  range: [number, number];
  targetScale: number;
  totalCards: number;
};

function StickyCardItem({
  i,
  card,
  progress,
  range,
  targetScale,
  totalCards,
}: ItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // The image (card face) scales down as the next card comes in
  const scale = useTransform(progress, range, [1, targetScale]);
  // Slight upward translation gives a "settling" feel
  const y = useTransform(progress, range, [0, -40]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex items-center justify-center w-full"
      style={{ height: "100vh" }}
    >
      <motion.div
        style={{ scale, y }}
        className={`
          relative flex flex-col md:flex-row items-center
          w-[88vw] md:w-[80vw] max-w-5xl aspect-[16/10]
          rounded-3xl overflow-hidden shadow-lift
          bg-gradient-to-br ${card.gradient}
          border border-cream/10
        `}
      >
        {/* Big emoji / visual side */}
        <div className="flex-1 flex items-center justify-center h-full text-[18vw] md:text-[10vw] leading-none">
          {card.emoji}
        </div>

        {/* Text side */}
        <div className="flex-1 h-full flex flex-col justify-center px-8 md:px-14 py-10 bg-ink/40 backdrop-blur-sm text-cream">
          <span className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Step {String(i + 1).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-medium leading-tight">
            {card.title}
          </h3>
          <p className="text-cream/70 text-sm uppercase tracking-widest mt-2">
            {card.subtitle}
          </p>
          <p className="text-cream/85 text-base md:text-lg mt-4 leading-relaxed">
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}