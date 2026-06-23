import type { Post } from "@/lib/types";

export const theSlowWeb: Post = {
  slug: "the-slow-web",
  title: "In praise of the slow web",
  excerpt:
    "The best sites on the internet are the ones that don't try to grab your attention — they reward it.",
  date: "June 18, 2026",
  dateISO: "2026-06-18",
  readTime: "5 min read",
  content: [
    {
      type: "p",
      text: "There's a particular kind of website that feels rare now. It loads fast. It has no popups. It doesn't follow you around the internet. It just... says what it means to say.",
    },
    { type: "h2", text: "What we lost" },
    {
      type: "p",
      text: "For most of the 2010s, the metric that mattered was engagement. Time on site. Click-through. Conversion. Every page was a funnel.",
    },
    {
      type: "p",
      text: "But the sites I remember from my teens — the personal blogs, the tiny zines, the weird essay archives — weren't funnels. They were rooms. You walked in, you looked around, and you left when you were done.",
    },
    { type: "h2", text: "What we can build" },
    {
      type: "p",
      text: "The tools to make the slow web are better than they've ever been. A static site. A few hundred lines of CSS. A handful of posts you actually want to write.",
    },
    { type: "p", text: "That's enough." },
  ],
};
