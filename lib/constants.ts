export const SITE_NAME = "Hearth & Crumb";
export const SITE_TAGLINE =
  "Real ingredients. Honest cooking. A kitchen built on trust.";
export const SITE_URL = "http://localhost:3000";

export const BUSINESS = {
  name: "Hearth & Crumb",
  tagline: "A neighborhood kitchen that treats ingredients like they matter.",
  description:
    "We bake slow, source close, and never cut corners. Every loaf, every jar, every plate is a small promise kept.",
  foundedYear: 2019,
  email: "hello@hearthandcrumb.example",
  phone: "+1 (555) 234-5678",
  address: "128 Linden Street, Portland, OR",
  hours: {
    weekdays: "Tue – Fri · 8am – 6pm",
    weekend: "Sat – Sun · 9am – 4pm",
    closed: "Closed Mondays",
  },
  social: {
    instagram: "#",
    youtube: "#",
    tiktok: "#",
  },
  stats: [
    { value: "6+", label: "Years baking" },
    { value: "47", label: "Local farms" },
    { value: "12k", label: "Happy regulars" },
    { value: "0", label: "Artificial anything" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "Our story" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#products", label: "What we make" },
  { href: "#recipes", label: "Recipes" },
  { href: "#visit", label: "Visit us" },
] as const;