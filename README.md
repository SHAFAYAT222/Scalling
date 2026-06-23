# 🍞 Hearth & Crumb — Kitchen Business MVP

A complete, production-quality landing page for a kitchen / food business.
Built with **Next.js 14 (App Router) + TypeScript + Tailwind**.

Designed to build **trust** with visitors through:
clear story, ingredient transparency, product showcase, social proof, FAQ, and easy contact.

---

## 🚀 How to run it

Open a terminal in this folder and run **one** of these:

```bash
npm run dev      # standard Next.js dev server
npm start        # same, but auto-cleans port 3000 first
```

Then open your browser to:

> **http://localhost:3000**

To stop: `Ctrl + C` in the terminal.

---

## 📁 Project structure

```
blog-mvp/
├── app/                          # Pages (Next.js App Router)
│   ├── layout.tsx               # Root layout (header + footer wrapper)
│   ├── page.tsx                 # Home — composes all sections
│   ├── not-found.tsx            # 404 page
│   ├── about/page.tsx           # About page
│   └── posts/[slug]/page.tsx    # Recipe / journal post detail
│
├── components/                  # One component per section
│   ├── SiteHeader.tsx           # Sticky nav + mobile menu
│   ├── SiteFooter.tsx           # Contact + hours + social
│   ├── Hero.tsx                 # Above-the-fold hero + stats
│   ├── AboutSection.tsx         # "Our story" trust block
│   ├── IngredientsSection.tsx   # Sourcing transparency
│   ├── ProductsSection.tsx      # Weekly lineup cards
│   ├── TestimonialsSection.tsx  # Social proof
│   ├── FAQSection.tsx           # Common questions (collapsible)
│   ├── NewsletterSection.tsx    # Email capture
│   └── VisitSection.tsx         # Address, hours, contact, map
│
├── lib/                         # Data + helpers
│   ├── types.ts                 # TypeScript types
│   ├── constants.ts             # Brand, contact, hours, stats
│   ├── data.ts                  # Ingredients, products, testimonials, FAQs
│   └── posts.ts                 # Blog/recipe loader
│
├── content/posts/               # One file per recipe / journal post
│   ├── the-slow-web.ts
│   ├── writing-is-thinking.ts
│   └── minimum-viable-blog.ts
│
├── styles/
│   └── globals.css              # Tailwind + Google Fonts (Fraunces, Cormorant)
│
├── scripts/
│   └── start.sh                 # Smart starter (kills old port 3000)
│
├── public/                      # Drop images, favicon here
│
├── tailwind.config.js           # Warm food-brand palette
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## ✏️ How to customize for YOUR client

All client-editable content lives in **two files**:

| File | What to edit |
|------|--------------|
| `lib/constants.ts` | Brand name, tagline, address, hours, phone, email, social links, stats |
| `lib/data.ts` | Ingredients list, products, testimonials, FAQs |

Add a new recipe / journal post:
1. Create `content/posts/my-new-post.ts`
2. Copy any existing post file as a template
3. Add an import + entry in `lib/posts.ts`

Drop real photos into `public/` and replace the emoji placeholders
in components with `<Image src="/your-photo.jpg" ... />`.

---

## 🎨 Design system

- **Palette:** cream / terracotta / olive / gold / ink (warm, food-friendly)
- **Type:** Fraunces (display, italic-friendly) + Cormorant Garamond (serif body) + system sans
- **Tone:** Honest, unfussy, human

Change colors in `tailwind.config.js` under `theme.extend.colors`.

---

## 🛠 Commands

| Command        | What it does                                   |
|----------------|------------------------------------------------|
| `npm run dev`  | Start dev server on http://localhost:3000      |
| `npm start`    | Same as dev, but auto-cleans port 3000         |
| `npm run build`| Build for production                           |
| `npm run serve`| Run the production build                       |