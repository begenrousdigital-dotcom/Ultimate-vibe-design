---
name: marketing-design
description: Build landing pages, agency sites, promotional/campaign pages, portfolios, and any other public-facing marketing surface. Use whenever the work is meant to convince, sell, or showcase — NOT for dashboards or app UI (use interface-design for that). Covers hero paradigms, section rhythm, archetype selection, premium component patterns, and the creative arsenal (50+ specific advanced patterns).
---

# Marketing Design

For everything public-facing: landing pages, agency sites, portfolios, campaign pages, brand sites. The work has to seduce, convince, and stay memorable. If the work is meant to be *used* daily (dashboard, admin, app), switch to `interface-design`.

This skill assumes you've read `design-foundations`. The intent-first thinking and anti-slop rules apply unchanged. This skill adds the marketing-specific moves.

---

## 1. First — pick an archetype

Before generating, commit to ONE aesthetic archetype. The mistake is timid middle-ground — neither minimal nor maximalist, neither editorial nor industrial. The middle is the average. The average is invisible.

Read the archetype files in `archetypes/` and pick one. If you can't decide between two, ask the user. Don't blend.

### Available archetypes

| File | Use for | Vibe |
|---|---|---|
| `archetypes/editorial-luxury.md` | Lifestyle brands, real estate, agencies with strong identity, hospitality | Serif headlines, generous whitespace, slow motion, oxblood/cream palette |
| `archetypes/ethereal-glass.md` | AI products, premium SaaS, dev tools (Vercel-tier) | Dark OLED, radial mesh gradients, glass cards, geometric grotesks |
| `archetypes/soft-structuralism.md` | Consumer products, health, personal portfolios | Off-white, soft shadows, friendly weights, comfortable spacing |
| `archetypes/brutalist-industrial.md` | Editorial publications, archives, data tools, art/architecture | Swiss grid, hazard red, uppercase, no radius, exposed structure |
| `archetypes/minimalist-editorial.md` | Documentation, knowledge bases, notebook-style products | Warm monochrome, serif accent, bento, muted pastels, near-zero shadows |
| `archetypes/kinetic-experimental.md` | Agencies, promotional, music/events, experiences | GSAP-heavy, WebGL backgrounds, scroll storytelling, custom navigation |

---

## 2. Section rhythm — the macro structure

A premium marketing page is NOT a stack of equal-weight sections. It has rhythm — moments of breath, moments of density, moments of surprise. Default to this rhythm:

```
[Hero — full attention]
  ↓ ample whitespace (py-32)
[Trust signal — quick scan]
  ↓ moderate (py-24)
[Feature 1 — focused deep-dive]
  ↓ moderate
[Feature 2 — different layout treatment]
  ↓ moderate
[Visual moment — image / video / interactive]
  ↓ ample
[Feature 3]
  ↓ moderate
[Social proof / case study]
  ↓ ample
[Pricing or final CTA]
  ↓ ample
[Footer]
```

Rules:
- **No two adjacent sections share the same layout treatment.** If section 2 is image-left, section 3 must be image-right or full-bleed or grid.
- **Macro-whitespace doubles your instinct.** Where you'd add `py-16`, use `py-24`. Where you'd add `py-24`, use `py-32` for premium feel.
- **Insert one visual breather every 3 sections.** Full-width image, video, marquee, or interactive — gives the eye a rest.
- **Section transitions matter.** Subtle background color shifts between sections (e.g. `bg-background → bg-surface-inset → bg-background`) create rhythm without dividers.

---

## 3. Hero paradigms

Three patterns to pick from. NONE of them is "centered text on a dark image."

### Hero 1 — Asymmetric editorial

Text occupies 5-7 of 12 columns. Image / demo / video occupies the remainder. Eyebrow label up top, large display headline, supporting paragraph, two CTAs. Image bleeds slightly off-canvas on one side.

```html
<section class="min-h-[100dvh] grid grid-cols-12 gap-8 px-8 pt-32 pb-16">
  <div class="col-span-12 lg:col-span-7 flex flex-col justify-end gap-8">
    <span class="text-xs uppercase tracking-eyebrow text-foreground-3">
      Vol. 04 · 2026
    </span>
    <h1 class="text-5xl md:text-7xl tracking-tight leading-tight">
      The work that <em class="font-serif italic font-normal">becomes</em><br />
      the studio.
    </h1>
    <p class="text-foreground-2 text-lg max-w-md leading-relaxed">
      Brand systems and digital products for ambitious teams in Switzerland and beyond.
    </p>
    <div class="flex gap-3">
      <a class="px-6 py-3 rounded-btn bg-foreground text-background tactile">View work</a>
      <a class="px-6 py-3 rounded-btn border border-border tactile">About</a>
    </div>
  </div>
  <div class="col-span-12 lg:col-span-5 lg:-mr-16">
    <div class="aspect-[3/4] rounded-3xl bg-surface-inset"></div>
  </div>
</section>
```

### Hero 2 — Massive type + label grid

A single word or phrase in `clamp(5rem, 18vw, 18rem)` dominates. Below, a 3-4 column micro-grid of labels: location, practice areas, index number, year. Confidence via restraint.

### Hero 3 — Split screen with vertical type

Two equal halves. Left half is dark with the headline and one vertical eyebrow `[writing-mode:vertical-rl]`. Right half is the image or product moment.

### When in doubt — never default to centered hero on dark image with single button

That's the AI hero. Pick one of the above instead.

---

## 4. The premium component patterns

Beyond hero, here are the proven moves for marketing surfaces. Apply them where appropriate to the archetype.

### The Bento Grid (asymmetric, NOT 3-col)

```html
<section class="py-24">
  <div class="grid grid-cols-12 gap-4">
    <article class="col-span-12 md:col-span-8 row-span-2 rounded-3xl border border-border p-10 bg-surface-1">
      [primary feature]
    </article>
    <article class="col-span-12 md:col-span-4 rounded-3xl border border-border p-8 bg-surface-1">
      [secondary]
    </article>
    <article class="col-span-12 md:col-span-4 rounded-3xl border border-border p-8 bg-surface-1">
      [secondary]
    </article>
    <article class="col-span-6 md:col-span-3 rounded-3xl border border-border p-6 bg-surface-1">
      [tertiary]
    </article>
    <article class="col-span-6 md:col-span-3 rounded-3xl border border-border p-6 bg-surface-1">
      [tertiary]
    </article>
    <article class="col-span-12 md:col-span-6 rounded-3xl border border-border p-8 bg-surface-1">
      [wide-format]
    </article>
  </div>
</section>
```

Each card has a different content treatment internally — one shows code, one shows a chart, one shows a quote. Surface treatment is identical (same border, radius, shadow). Diversity in content, consistency in form.

### The Zig-Zag Feature Stack

Each feature gets a full editorial section. Image side alternates left/right. Generous `py-32` between. One feature per scroll-screen.

### The Eyebrow + Headline + Description pattern

EVERY major heading on the page has this structure:

```html
<div class="space-y-4">
  <span class="text-xs uppercase tracking-eyebrow text-foreground-3">
    01 · Performance
  </span>
  <h2 class="text-4xl md:text-6xl tracking-tight leading-tight">
    Render 60 fps regardless of scale
  </h2>
  <p class="text-foreground-2 text-lg max-w-prose">
    Edge-cached SSR with WebGL fallback — your work stays fluid.
  </p>
</div>
```

The eyebrow gives the page its rhythm (01 · 02 · 03), establishes density, and feels editorial.

### The "Island" Button with Trailing Icon

Premium CTAs are pill-shaped with a nested circular icon inside, flush to the right padding:

```html
<a class="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-foreground text-background tactile">
  <span class="font-medium">View case study</span>
  <span class="size-8 rounded-full bg-foreground-2/30 inline-flex items-center justify-center transition group-hover:translate-x-1">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </span>
</a>
```

This single pattern, applied consistently, instantly upgrades any landing page.

### The Marquee (kinetic banner)

For brand logos, customer names, or just kinetic energy. Endless horizontal scroll, hand-tuned speed, pauses on hover.

```html
<section class="py-16 border-y border-border overflow-hidden">
  <div class="flex gap-16 animate-marquee">
    <span class="text-2xl font-serif italic shrink-0">Stripe</span>
    <span class="text-2xl font-serif italic shrink-0">·</span>
    <span class="text-2xl font-serif italic shrink-0">Linear</span>
    [...]
  </div>
</section>
```

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

### Featured Case Study scroller (instead of grid)

Vertical scroll-snap section where each project gets the full viewport for 1 scroll-page. Project name big, image large, three metadata pieces in a row below.

### Pricing — radical alternative to 3-tier table

Marketing default: 3 pricing cards, middle "highlighted." Instead:

```html
<section class="py-32 max-w-4xl mx-auto px-8">
  <div class="space-y-12">
    <h2 class="text-5xl tracking-tight">Pricing on application.</h2>
    <p class="text-foreground-2 text-lg max-w-prose leading-relaxed">
      We don't have plans. Each engagement is priced after a 30-min discovery call —
      most projects land between CHF 25k and CHF 85k.
    </p>
    <a class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background tactile">
      Book a discovery call
    </a>
  </div>
</section>
```

For agencies and high-touch B2B. Refuses the SaaS pricing-table convention entirely.

---

## 5. The creative arsenal — advanced patterns

When the brief allows for it (especially `kinetic-experimental` or `editorial-luxury` archetypes), pull from this library. Source: `references/creative-arsenal.md`.

### Layout & Grids
- **Bento Grid** — asymmetric tile composition
- **Masonry** — staggered grid without fixed row heights
- **Split Scroll** — two halves moving in opposite directions
- **Curtain Reveal** — hero parts in the middle on scroll
- **Horizontal Scroll Hijack** — vertical scroll → horizontal pan

### Cards & Containers
- **Parallax Tilt Card** — 3D-tilts with mouse
- **Spotlight Border Card** — borders illuminate under cursor
- **Holographic Foil Card** — iridescent reflections on hover
- **Magnetic Hover** — pulls toward cursor (use Framer Motion `useMotionValue`, NEVER React state)

### Scroll Animations
- **Sticky Scroll Stack** — cards stick & physically stack
- **Locomotive Sequence** — video framerate tied to scrollbar
- **Zoom Parallax** — background zooms as you scroll
- **Scroll Progress Path** — SVG line that draws itself as you scroll
- **Pin + Scrub** — GSAP ScrollTrigger pin with timeline scrubbed to scroll progress (see `motion-gsap`)

### Typography
- **Kinetic Marquee** — endless text bands, reverses on scroll
- **Text Mask Reveal** — typography as transparent window to video below
- **Text Scramble** — characters decode Matrix-style on entry
- **Gradient Stroke** — outlined text with running gradient
- **Variable Font Animation** — `font-variation-settings` animated for weight/width

### Micro-interactions
- **Skeleton Shimmer** — light reflection sweeping placeholder
- **Magnetic Button** — pull toward cursor
- **Directional Hover** — fill enters from the side the mouse entered
- **Custom Cursor Indicator** — small dot that grows on hover (NOT a custom cursor replacement)
- **Mesh Gradient Background** — organic lava-lamp blobs

---

## 6. Mobile collapse — non-optional

Every asymmetric / overlapping / column-broken pattern above MUST gracefully collapse below `768px`:

- `grid-cols-12` → `grid-cols-1`
- All `col-span-*` overrides at `md:` only — base is full-width
- Remove all `rotation` and negative margins below `md:`
- `h-screen` → `min-h-[100dvh]` everywhere
- Section padding: `py-16` on mobile, `py-24` on tablet, `py-32` on desktop
- `gap-32` desktop → `gap-12` mobile
- Horizontal scroll sections should support touch swipe with `snap-x snap-mandatory`
- Disable scroll-jacking and magnetic hover below `lg:` (touch devices)

---

## 7. Performance guardrails

- **Never animate `top`, `left`, `width`, `height`.** Use `transform` and `opacity`.
- **Grain / noise overlays** must be on `fixed`, `pointer-events: none` elements. Never on scrolling containers.
- **`backdrop-blur`** only on fixed/sticky elements (nav, modals). Never on scrolling sections.
- **`useState` for cursor / hover position** is banned. Use `useMotionValue` (Framer) or refs.
- **Scroll listeners** never via `addEventListener('scroll')`. Use `IntersectionObserver` or GSAP ScrollTrigger.
- **WebGL backgrounds** must respect `prefers-reduced-motion` and degrade to a static gradient.

---

## 8. References

- `archetypes/*.md` — one file per direction, with full token preset, key components, motion language
- `references/hero-paradigms.md` — every hero pattern with full code
- `references/creative-arsenal.md` — the full 50+ advanced patterns library
- `references/awwwards-patterns.md` — what's actually winning right now (calibrated from `awwwards-research/`)

## Companion skills

- `design-foundations` — read first, always applies
- `design-tokens` — set up before building
- `motion-gsap` — for scroll-driven and timeline animation
- `motion-css` — for everything else
- `pre-flight-check` — run before showing the user
