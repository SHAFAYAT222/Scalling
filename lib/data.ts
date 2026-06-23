export type Ingredient = {
  name: string;
  origin: string;
  note: string;
};

export const INGREDIENTS: Ingredient[] = [
  {
    name: "Heirloom wheat",
    origin: "Camas Country Mill · 38 miles away",
    note: "Stone-milled to order each Tuesday so it stays alive.",
  },
  {
    name: "Cold-pressed olive oil",
    origin: "Apollo Olive Farm · California",
    note: "Pressed within 24 hours of harvest. One varietal per batch.",
  },
  {
    name: "Cultured butter",
    origin: "Stony Pond Farm · Vermont",
    note: "Slow-cultured over 21 days. Higher fat, deeper flavor.",
  },
  {
    name: "Pasture-raised eggs",
    origin: "Flock & Field · 12 miles away",
    note: "From hens that actually see sunlight. Yes, it matters.",
  },
  {
    name: "Wildflower honey",
    origin: "Three Bees Apiary · our own rooftop",
    note: "Harvested twice a year. Never blended, never heated.",
  },
  {
    name: "Sea salt",
    origin: "Jacobsen Salt Co. · Oregon coast",
    note: "Hand-harvested from netted salt ponds. Finishes flaky.",
  },
];

export type Product = {
  name: string;
  category: string;
  description: string;
  price: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Country Sourdough",
    category: "Bread",
    description:
      "72-hour cold ferment. Crackling crust, custard crumb, slightly sweet finish.",
    price: "$9",
    badge: "Most loved",
  },
  {
    name: "Brown Butter Tart",
    category: "Pastry",
    description:
      "Caramelized Valrhona, malted shortbread, finished with flaky salt.",
    price: "$7",
  },
  {
    name: "Heirloom Tomato Galette",
    category: "Seasonal",
    description:
      "Peak-summer tomatoes, ricotta from down the road, basil picked that morning.",
    price: "$14",
    badge: "Limited",
  },
  {
    name: "Salted Honey Cardamom Bun",
    category: "Morning",
    description:
      "Laminated overnight, baked at dawn. Best eaten warm with coffee.",
    price: "$6",
  },
  {
    name: "Stone-Ground Granola",
    category: "Pantry",
    description:
      "Oats, hazelnuts, sour cherries, our own honey. No oil, no fillers.",
    price: "$12",
  },
  {
    name: "Roasted Tomato Jam",
    category: "Pantry",
    description:
      "Slow-roasted for six hours. Puts itself on everything.",
    price: "$10",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I haven't bought bread anywhere else in three years. It tastes like it was made by someone who actually cares.",
    author: "Maya R.",
    context: "Saturday regular since 2022",
  },
  {
    quote:
      "They remember my order. They remember my kid's name. That's not marketing — that's just what the place is.",
    author: "Daniel K.",
    context: "Neighborhood of 9 years",
  },
  {
    quote:
      "I worked in restaurants for 12 years and this is the first time I've eaten at a bakery where nothing tastes like a shortcut.",
    author: "Chef Ana P.",
    context: "Visiting from Seattle",
  },
];

export type FAQ = {
  q: string;
  a: string;
};

export const FAQS: FAQ[] = [
  {
    q: "Do you use any preservatives or additives?",
    a: "No. We don't use preservatives, dough conditioners, artificial flavors, or seed oils. Our ingredient list is short because every item is real.",
  },
  {
    q: "Can I pre-order for the weekend?",
    a: "Yes — orders open Wednesday morning and close Friday at noon. Reserve through our contact page or DM us on Instagram.",
  },
  {
    q: "Do you ship?",
    a: "Currently, breads ship anywhere in the US (2-day, packed same-day). Pastries are pickup only — they don't survive the trip.",
  },
  {
    q: "Are you hiring?",
    a: "We're a small team and we hire slowly. Send a short note about yourself and why you want to bake for a living to hello@hearthandcrumb.example.",
  },
];