# Archetype — Brutalist Industrial

For agencies with attitude, music labels, fashion drops, art collectives, anything pitching "raw" or "real," skate/streetwear, underground tech. The Bloomberg/Balenciaga/Are.na/Cash App lineage.

The vibe is **typewriter manifesto stapled to a concrete wall**. Heavy weights, exposed grid, ugly-but-intentional, system-default aesthetic pushed to ideology. Confidence to the point of confrontation.

**Reference winners on Awwwards using this aesthetic:**
- Obys Agency (regular SOTD winner)
- KVS Studio (Apr 26, 2026 SOTD)
- Bürocratik (regular SOTD winner)
- studio375 (May 11, 2026 SOTD)
- Many "Design Agency" category winners

---

## Token preset

```css
:root {
  /* Surface — true white or paper-stock */
  --background: oklch(0.98 0 0);                /* near-pure white, or */
  /* --background: oklch(0.92 0.005 80); */     /* paper-stock cream */
  --surface-1: oklch(0.98 0 0);
  --surface-2: oklch(0.96 0 0);
  --surface-inset: oklch(0.94 0 0);
  --surface-inverse: oklch(0.1 0 0);            /* black blocks */

  /* Foreground — full black, no apology */
  --foreground: oklch(0.1 0 0);                 /* near-pure black */
  --foreground-2: oklch(0.25 0 0);
  --foreground-3: oklch(0.5 0 0);
  --foreground-on-inverse: oklch(0.98 0 0);

  /* Borders — thick black rules */
  --border: oklch(0.1 0 0);
  --border-thin: oklch(0.1 0 0);
  --border-thick-width: 2px;                    /* lean into thickness */
  --border-very-thick-width: 4px;

  /* Accent — ONE highlighter color, used sparingly */
  --accent: oklch(0.85 0.25 95);                /* highlighter yellow */
  /* alternates: */
  /* --accent: oklch(0.65 0.28 25);             */ /* hazard orange */
  /* --accent: oklch(0.7 0.3 145);              */ /* poison green */
  /* --accent: oklch(0.65 0.3 0);               */ /* warning red */
  /* --accent: oklch(0.7 0.25 270);             */ /* electric purple */

  /* Typography */
  --font-display: 'Druk', 'PP Right Grotesk Compact', 'Helvetica Neue', sans-serif;
  --font-sans: 'Helvetica Neue', 'Arial', 'Inter', sans-serif;
  --font-mono: 'GT Pressura Mono', 'IBM Plex Mono', 'Courier New', monospace;
  --font-serif: 'Times New Roman', 'Times', serif;  /* used as anti-aesthetic statement */

  /* Radius — zero. There is no radius. */
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --card-radius: 0;
  --btn-radius: 0;

  /* Shadow — none, or hard offset */
  --shadow-md: none;
  --shadow-hard: 4px 4px 0 var(--foreground);   /* hard offset stamp */

  /* Section spacing — uneven, intentional rhythm */
  --section-py-md: 6rem;
  --section-py-lg: 10rem;

  /* Custom grid */
  --grid-gutter: 1px;                            /* the grid IS visible */
}
```

---

## Typography rules

- **Type as the hero, period.** Hero headlines fill 80–95% of viewport width.
- **Set in extra-bold compressed sans (Druk, PP Right Grotesk Compact)** for impact, OR **set in Helvetica/system-default** with no decoration as ideology.
- **Tight tracking (-0.04 to -0.06em) on display.** Hero text touches.
- **Mix weights and sizes within the same line** — `<h1>WE BUILD <em class="font-light italic">things</em> THAT MATTER</h1>`.
- **Mono for metadata, intentionally weird captions, "system" UI.**
- **Times New Roman / Times** can appear as deliberate anti-design statement (used by Are.na, Cash App).
- **All-caps for nav and labels** — uppercase, mono, small.
- **Body type left-aligned, ragged right.** Never justified.

---

## Layout signatures

- **Visible grid lines** — hairline borders showing the column structure.
- **Asymmetric layouts that break the grid** — content hangs off, columns vary width.
- **Massive type taking full pages** — hero is just text, no image, on first scroll.
- **Hard transitions** — black blocks, sudden inversions (black section then white section).
- **Marquee/ticker tape rows** — scrolling text with mixed content.
- **Image treatments: high-contrast B&W, duotone, harsh halftone, or raw photo.** Never "lifestyle stock."
- **Numbered lists everywhere** — "01 / Identity," "02 / Strategy," numbers prominent in display weight.
- **Tables for content** — yes, actual `<table>` tags, with borders visible.

---

## Motion language

- **Hard cuts, no easing softness.** Linear easing or step-functions allowed.
- **Marquees loop infinitely** at constant speed.
- **Text reveals via mask wipe** (clip-path) — not fade-up.
- **Hover: invert colors instantly** — `:hover { background: var(--foreground); color: var(--background); }`.
- **Cursor: oversize circle or square that inverts content under it.**
- **Page transitions: full-screen black slide** in/out.
- **Scroll: heavy pinned sections,** content scrubs through fixed background.
- **Sparse motion overall** — half the page should be static blocks.

---

## Components spec

### Button
```tsx
<button className="
  inline-flex items-center gap-3 px-6 py-4
  bg-foreground text-background
  font-mono text-[12px] uppercase tracking-[0.1em]
  border-2 border-foreground
  transition-colors duration-150
  hover:bg-background hover:text-foreground
">
  <span>→</span>
  <span>Get in touch</span>
</button>
```

### Card (information block)
```tsx
<div className="border-2 border-foreground p-6 bg-background">
  <div className="flex items-baseline justify-between mb-6 font-mono text-[11px] uppercase tracking-wider">
    <span>01 / Service</span>
    <span>2026</span>
  </div>
  <h3 className="font-display text-[40px] leading-[0.9] font-bold uppercase tracking-tight mb-4">
    Brand<br/>Identity
  </h3>
  <p className="text-[14px] leading-[1.5] mb-6">{description}</p>
  <div className="border-t-2 border-foreground pt-4 flex items-center justify-between font-mono text-[11px] uppercase">
    <span>Learn more</span>
    <span>→</span>
  </div>
</div>
```

### Marquee
```tsx
<div className="border-y-2 border-foreground py-4 overflow-hidden bg-background">
  <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-[80px] font-bold leading-none uppercase">
    {Array(6).fill(null).map((_, i) => (
      <span key={i} className="flex items-center gap-12">
        Available for new projects
        <span className="text-accent">●</span>
      </span>
    ))}
  </div>
</div>
```

### Cursor invert
```tsx
// Global cursor element
<div className="
  pointer-events-none fixed top-0 left-0 w-12 h-12 -ml-6 -mt-6
  bg-foreground rounded-full mix-blend-difference z-50
  transition-transform duration-100
" style={{ transform: `translate(${cursorX}px, ${cursorY}px)` }} />
```

---

## Watch-outs

- **Don't make it "rounded brutalism."** That's a contradiction. Zero radius means zero radius.
- **Don't apply this aesthetic to a real-estate listing or restaurant menu.** Brutalism is a *worldview*. It only works for brands that genuinely have attitude.
- **Don't soften the type.** If you're scared of the headline being too big, you're not doing brutalism, you're doing minimalism with extra steps.
- **Don't use lifestyle stock photo.** Either commissioned/raw photography, or zero photography.
- **One accent color, used as accent.** Highlighter yellow on everything = ransom note, not design.
- **No drop shadows. No gradients (except as deliberate anti-aesthetic statement).**

---

## When NOT to use this archetype

- Banking, healthcare, anything trust-critical (feels hostile)
- Family/children's brands
- Wellness, mindfulness (the opposite vibe)
- Most real estate (Greg's domain — would be a wrong call)
- Anything where the buyer needs to feel safe
