# Examples

Working code snippets demonstrating patterns from the skills. Each is a reference, not a copy-paste solution. Adapt to your project's token system and stack.

## Files

- **`hero-asymmetric.tsx`** — Editorial asymmetric hero with split layout.
- **`magnetic-button.tsx`** — Cursor-following button with React + Framer Motion.
- **`scroll-pin-section.tsx`** — Horizontal scroll-pinned section with GSAP.
- **`bento-grid.tsx`** — Bento grid with mixed cell content.

## Stack assumptions

- **React 18+** (most examples work with React Server Components, hydrated where needed).
- **Tailwind CSS v4** for styling.
- **Framer Motion** or **GSAP** for motion (specified per example).
- **Lucide React** for any icons (avoid unless necessary).

## Adapting to your project

1. Replace hardcoded colors with your token variables (`var(--ink-primary)` etc).
2. Replace hardcoded font references with your token variables (`var(--font-display)`).
3. Adjust spacing scales to match your token system.
4. Replace placeholder images and copy with project-specific content.

## What these are not

- Production-ready components (they're references).
- Fully accessibility-tested (test in your project).
- Optimized for all edge cases (single-screen reading material).

For production work, run through `pre-flight-check/SKILL.md` after adapting.
