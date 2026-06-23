import type { Post } from "@/lib/types";

export const minimumViableBlog: Post = {
  slug: "minimum-viable-blog",
  title: "The minimum viable blog",
  excerpt:
    "You don't need a CMS, a newsletter, or a design system. You need a place to put words.",
  date: "May 22, 2026",
  dateISO: "2026-05-22",
  readTime: "4 min read",
  content: [
    { type: "p", text: "The hardest part of having a blog isn't writing. It's launching." },
    { type: "h2", text: "The stack of avoidance" },
    {
      type: "p",
      text: "I've watched this happen a dozen times: someone decides to start a blog, picks a stack, picks a theme, picks a hosting provider, picks a domain name, picks a newsletter tool, picks a CMS, picks fonts, picks a color palette — and never writes a post.",
    },
    { type: "h2", text: "What works" },
    {
      type: "ul",
      items: [
        "A folder of post files",
        "A static site generator",
        "One CTA at the bottom of each post",
        "Done",
      ],
    },
    {
      type: "p",
      text: "The minimum viable blog is just a place where words live. Everything else is decoration.",
    },
  ],
};
