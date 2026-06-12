# Space Tech — FTC Team #23504

Premium landing page for Space Tech, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling
- **Shadcn UI** — Accessible component primitives
- **Framer Motion** — Page transitions and scroll animations
- **GSAP** — Hero floating effects and scroll triggers
- **Lenis** — Smooth scrolling
- **Lucide Icons** — Icon system

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── ui/           # Shadcn UI primitives
│   ├── layout/       # Navbar, Footer, SmoothScroll
│   ├── sections/     # Hero, WhoWeAre, Sponsors, Marketplace
│   ├── effects/      # Starfield, Particles, PageReveal
│   └── shared/       # FadeIn, AnimatedCounter
├── hooks/            # Custom React hooks
└── lib/              # Utils and data
```

## Sections

1. **Hero** — Full-screen with animated stars, floating logo, CTAs
2. **Who We Are** — Storytelling with animated counters
3. **Sponsors** — Premium sponsor wall with CTA
4. **Marketplace** — Searchable product grid
5. **Footer** — Social links with star background

## Customization

- Brand colors in `src/app/globals.css`
- Content and data in `src/lib/data.ts`
- Logo assets in `public/images/`
