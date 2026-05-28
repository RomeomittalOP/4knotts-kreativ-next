# 4 Knotts Kreativ — Portfolio

Premium creative agency portfolio built with Next.js 15, TypeScript, Tailwind, Framer Motion, and GSAP.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom design tokens)
- Framer Motion + GSAP
- Lenis smooth scrolling
- Custom cursor, scroll progress, magnetic buttons, animated particles

## Run

```bash
npm install
npm run dev
# build
npm run build && npm start
```

## Structure

```
src/
  app/
    layout.tsx        # root layout, fonts, metadata, providers
    page.tsx          # home — composes all sections
    globals.css       # tailwind + tokens + utilities
    not-found.tsx
    projects/[slug]/  # dynamic project detail pages
  components/
    ui/               # Cursor, Loader, Navbar, Particles, etc.
    sections/         # Hero, WhoWeAre, Projects, Process, …
  lib/
    data.ts           # projects, socials, testimonials, stats
    cn.ts             # className helper
```

Edit `src/lib/data.ts` to change projects, social links, stats, or testimonials.

<!-- Vercel redeploy trigger: Thu May 28 22:26:45 IST 2026 -->
