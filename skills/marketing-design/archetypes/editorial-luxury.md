# Archetype — Editorial Luxury

For lifestyle brands, real estate, agencies with strong identity, hospitality, art galleries, hospitality, premium consumer.

The vibe is **an architect's monograph, not a website**. Print-magazine sensibility translated to scroll. Slow, deliberate, generous. The reader feels privileged to be there.

**Reference winners on Awwwards using this aesthetic:**
- Floema (May 13, 2026 SOTD) — agency portfolio with editorial scroll
- Marvell Tile & Stone (May 7, 2026 SOTD) — luxury materials, by Humaan
- Detroit Paris (Apr 27, 2026 SOTD) — design agency, classic editorial
- Silent House (Apr 28, 2026 SOTD) — architecture firm
- The Renaissance Edition (Feb 2026 SOTM) — luxury publication
- Don Molinico (Apr 25, 2026 SOTD) — premium hospitality

---

## Token preset

```css
:root {
  /* Surface — parchment warmth */
  --background: oklch(0.97 0.005 80);          /* warm cream */
  --surface-1: oklch(0.97 0.005 80);
  --surface-2: oklch(0.99 0.003 80);           /* card lift */
  --surface-inset: oklch(0.94 0.008 80);

  /* Foreground — warm ink, not pure black */
  --foreground: oklch(0.18 0.015 30);          /* coffee black */
  --foreground-2: oklch(0.35 0.012 30);
  --foreground-3: oklch(0.5 0.008 30);
  --foreground-4: oklch(0.7 0.005 30);

  /* Borders — hairline, warm */
  --border: oklch(0.88 0.008 80);
  --border-subtle: oklch(0.93 0.005 80);

  /* Accent — pick ONE */
  --accent: oklch(0.42 0.13 25);                /* oxblood (most common) */
  /* alternates: */
  /* --accent: oklch(0.45 0.06 95);             */ /* mustard */
  /* --accent: oklch(0.4 0.06 145);             */ /* deep sage */
  /* --accent: oklch(0.32 0.08 240);            */ /* navy */

  /* Typography */
  --font-display: 'Editorial New', 'PP Editorial New', 'Canela', 'Cardinal Fruit', serif;
  --font-sans: 'GT Sectra', 'Newsreader', 'Cardo', 'EB Garamond', serif;
  --font-mono: 'GT Pressura Mono', 'Berkeley Mono', monospace;

  /* Radius — sharp, almost zero */
  --radius-md: 2px;
  --radius-lg: 4px;
  --card-radius: 4px;
  --btn-radius: 0;       /* square buttons — radical confidence */

  /* Shadow — barely there */
  --shadow-md: 0 1px 2px rgba(60, 30, 0, 0.04);
  --card-shadow: none;   /* rely on hairline borders */

  /* Section spacing — luxurious */
  --section-py-md: 8rem;
  --section-py-lg: 12rem;
  --section-py-xl: 16rem;
}
```

---

## Typography rules

- Hero H1: `var(--text-display)`, italic serif, `tracking-tight`, `leading-[0.95]`. Often with one italic word mixed in: *"The work that **becomes** the studio."*
- Body: `var(--text-lg)`, serif, `leading-relaxed` (1.7), `max-w-[65ch]`.
- Eyebrows: tiny uppercase `text-[10px]` mono with `tracking-[0.25em]`.
- Numbers: always mono, with `tabular-nums`. Often used as section markers: `01.`, `02.`, `03.`
- Roman numerals (`Vol. IV — Autumn 2026`) for editorial flavor.

---

## Layout signatures

### Indented eyebrow → headline → metadata grid
```html
<div class="ml-[20%]">
  <span class="text-[10px] uppercase tracking-[0.25em] text-foreground-3">
    Vol. IV — 2026
  </span>
</div>
<h1 class="text-[clamp(4rem,12vw,12rem)] font-serif italic tracking-tight leading-[0.9] mt-8">
  Becoming.
</h1>
<div class="grid grid-cols-12 mt-24 gap-4">
  <div class="col-start-7 col-span-3">
    <span class="eyebrow">Practice</span>
    <p class="mt-2 font-serif">Architecture & Interiors</p>
  </div>
  <div class="col-start-10 col-span-3">
    <span class="eyebrow">Location</span>
    <p class="mt-2 font-serif">Lausanne, CH</p>
  </div>
</div>
```

### Drop cap paragraph opening
```html
<p class="font-serif text-lg leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
  We design brand systems and digital products for ambitious teams.
</p>
```

### Column layout for long-form
```html
<article class="columns-1 md:columns-2 gap-12 max-w-5xl mx-auto">
  <p>Lorem ipsum... (will flow as 2-column print layout)</p>
</article>
```

### Footnotes
Side notes pulled into the gutter using floating asides on wide screens:
```html
<div class="relative">
  <p class="text-lg">Main text continues here…</p>
  <aside class="hidden lg:block absolute -right-48 top-0 w-40 text-xs italic text-foreground-3 leading-relaxed">
    ¹ The studio was founded in 2018 with three principles in mind.
  </aside>
</div>
```

---

## Motion language

- **Slow.** Default duration: `var(--duration-cinema)` (800ms).
- **Easing:** exclusively `var(--ease-expo)` — `cubic-bezier(0.16, 1, 0.3, 1)` — the most cinematic.
- **Entrance:** elements rise from `translate-y-12 opacity-0 blur-md` over 1s. Staggered by 100-150ms.
- **Hover:** subtle. Image zoom 1.03 max. Text underline animate from `width:0` to `100%`.
- **Page transitions:** consider a viewport curtain wipe (covers the whole screen for 300ms during route change). Use `next/transitions` or `viewTransition` API.

---

## What to NEVER do in this archetype

- ❌ Bright colors
- ❌ Rounded buttons (use square / hairline borders)
- ❌ Multiple accents
- ❌ Bento grids (too casual for the formality)
- ❌ Sans-serif headlines
- ❌ Quick / bouncy / spring motion
- ❌ "Get started" or "Sign up" CTAs (use "View" / "Read" / "Inquire" / "Visit")

---

## Component-by-component spec

### CTA — restraint
```html
<a class="inline-block border-b border-foreground pb-1 hover:border-accent transition-colors duration-slow">
  View the project →
</a>
```
That's it. No background fill. Just an underline. Confidence through restraint.

### Navigation — pill or vertical
```html
<nav class="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-surface-2 border border-border backdrop-blur-md">
  <ul class="flex gap-8 text-sm font-serif italic">
    <li>Work</li>
    <li>Practice</li>
    <li>Journal</li>
    <li>Contact</li>
  </ul>
</nav>
```

### Image treatment
Always with hairline border + slight overlay tint to harmonize with cream surface:
```html
<figure class="relative">
  <img class="aspect-[4/5] object-cover border border-border" src="..." />
  <div class="absolute inset-0 bg-foreground/[0.02] pointer-events-none mix-blend-multiply" />
  <figcaption class="mt-3 text-xs italic text-foreground-3">
    Fig. 01 — Detail of the entrance, photographed in October.
  </figcaption>
</figure>
```

### Footer — newspaper masthead style
```html
<footer class="py-32 border-t border-border">
  <div class="grid grid-cols-12 gap-8 mb-24">
    <h2 class="col-span-12 text-[clamp(3rem,8vw,8rem)] font-serif italic tracking-tight leading-none">
      Let's begin.
    </h2>
  </div>
  <div class="grid grid-cols-12 gap-8 text-sm">
    <div class="col-span-3">
      <span class="eyebrow">Studio</span>
      <p class="mt-2 font-serif">Rue du Lac 12<br/>1003 Lausanne</p>
    </div>
    <!-- … -->
    <div class="col-span-12 mt-24 pt-8 border-t border-border-subtle text-xs italic text-foreground-3">
      © Studio Name — MMXXVI · All rights reserved.
    </div>
  </div>
</footer>
```
