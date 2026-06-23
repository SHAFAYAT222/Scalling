import type { Post } from "@/lib/types";

export const writingIsThinking: Post = {
  slug: "writing-is-thinking",
  title: "Writing is thinking, not reporting",
  excerpt:
    "You don't write to share what you know. You write to find out what you think.",
  date: "June 4, 2026",
  dateISO: "2026-06-04",
  readTime: "3 min read",
  content: [
    {
      type: "p",
      text: "I used to think writing was about clarity — taking a thought that already existed somewhere in my head and rendering it down into words other people could read.",
    },
    { type: "h2", text: "The myth of the finished thought" },
    {
      type: "p",
      text: "But that model assumes the thought existed in the first place. Most of the time, it didn't. The thought shows up while I'm writing it.",
    },
    {
      type: "p",
      text: "Half my drafts are wrong on page one and right on page five. The right version isn't hiding underneath the wrong one — it gets created by the act of writing the wrong one.",
    },
    { type: "h3", text: "A practical implication" },
    {
      type: "p",
      text: "If writing is how you think, then writer's block isn't a failure of discipline. It's a sign you're trying to report a thought you don't actually have yet.",
    },
  ],
};
