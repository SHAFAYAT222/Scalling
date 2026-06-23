# Inkwell — A minimal blog MVP

A clean, minimal blog built with **Next.js 14 (App Router) + TypeScript + Tailwind**.

---

## 🚀 How to run it

**Open a terminal in this folder, then run ONE of these:**

```bash
npm run dev      # standard Next.js dev server
npm start        # the same, but auto-cleans any old process on port 3000
```

Then open your browser to:

> **http://localhost:3000**

That's it. To stop the server, press `Ctrl + C` in the terminal.

---

## 📁 Project structure

```
blog-mvp/
├── app/                    # Next.js pages (App Router)
│   ├── layout.tsx         # Root layout (header + footer wrapper)
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── about/
│   │   └── page.tsx       # /about
│   └── posts/
│       └── [slug]/
│           └── page.tsx   # /posts/:slug (one route for every post)
│
├── components/            # Reusable UI bits
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── Hero.tsx
│   ├── PostList.tsx
│   └── Prose.tsx
│
├── lib/                   # Helpers + data
│   ├── types.ts           # TypeScript types
│   ├── constants.ts       # Site name, tagline
│   └── posts.ts           # Post loader
│
├── content/
│   └── posts/             # One file per blog post
│       ├── the-slow-web.ts
│       ├── writing-is-thinking.ts
│       └── minimum-viable-blog.ts
│
├── styles/
│   └── globals.css        # Tailwind + base styles
│
├── scripts/
│   └── start.sh           # Smart starter (kills old server first)
│
├── public/                # Static files (images, favicon…)
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## ✏️ How to add a new blog post

1. Create a new file in `content/posts/`, e.g. `my-new-post.ts`
2. Copy the structure of any existing post file
3. Add an import + entry in `lib/posts.ts`
4. Save. The dev server hot-reloads.

---

## 🛠 Common commands

| Command        | What it does                                   |
|----------------|------------------------------------------------|
| `npm run dev`  | Start the dev server on http://localhost:3000  |
| `npm start`    | Same as dev, but auto-cleans port 3000         |
| `npm run build`| Build for production                           |
| `npm run serve`| Run the production build                       |
