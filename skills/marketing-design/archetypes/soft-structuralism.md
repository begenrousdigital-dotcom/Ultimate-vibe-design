# Archetype — Soft Structuralism

For modern SaaS, productivity tools, B2B platforms with personality, design systems, dev tools that want to feel human. The Linear/Vercel/Stripe/Cal.com lineage.

The vibe is **engineered restraint with warmth**. Strong grid, generous whitespace, careful color, considered motion. Confident, calm, premium-but-accessible.

**Reference winners on Awwwards using this aesthetic:**
- Linear, Vercel, Stripe (canonical references)
- Cal.com, Raycast, Resend (the tier below)
- Humaan agency site
- Many Awwwards "Technology" and "Startup" category winners

---

## Token preset

```css
:root {
  /* Surface — near-white, slightly warm */
  --background: oklch(0.99 0.002 250);
  --surface-1: oklch(0.99 0.002 250);
  --surface-2: oklch(1 0 0);                    /* pure white cards on warm bg */
  --surface-inset: oklch(0.97 0.003 250);

  /* Foreground — true neutrals, not pure black */
  --foreground: oklch(0.18 0.01 250);
  --foreground-2: oklch(0.38 0.012 250);
  --foreground-3: oklch(0.56 0.01 250);
  --foreground-4: oklch(0.72 0.008 250);

  /* Borders — defined but soft */
  --border: oklch(0.91 0.005 250);
  --border-subtle: oklch(0.95 0.003 250);
  --border-strong: oklch(0.85 0.008 250);

  /* Accent — pick ONE, deeply saturated */
  --accent: oklch(0.5 0.18 260);                /* indigo (Linear-ish) */
  /* alternates: */
  /* --accent: oklch(0.55 0.18 25);             */ /* red-orange */
  /* --accent: oklch(0.6 0.17 145);             */ /* emerald */
  /* --accent: oklch(0.5 0.18 285);             */ /* violet */

  /* Status (if SaaS) */
  --success: oklch(0.6 0.15 145);
  --warning: oklch(0.7 0.15 75);
  --danger: oklch(0.55 0.2 25);

  /* Typography */
  --font-display: 'Inter Display', 'Geist', 'PP Neue Montreal', sans-serif;
  --font-sans: 'Inter', 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', 'IBM Plex Mono', monospace;

  /* Radius — consistent system, not random */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --card-radius: 12px;
  --btn-radius: 8px;

  /* Shadow — believable physics */
  --shadow-xs: 0 1px 2px oklch(0.2 0.02 250 / 0.04);
  --shadow-sm: 0 1px 2px oklch(0.2 0.02 250 / 0.05), 0 1px 1px oklch(0.2 0.02 250 / 0.03);
  --shadow-md: 0 4px 6px -1px oklch(0.2 0.02 250 / 0.06), 0 2px 4px -2px oklch(0.2 0.02 250 / 0.04);
  --shadow-lg: 0 10px 15px -3px oklch(0.2 0.02 250 / 0.06), 0 4px 6px -4px oklch(0.2 0.02 250 / 0.04);
  --shadow-xl: 0 20px 25px -5px oklch(0.2 0.02 250 / 0.06), 0 8px 10px -6px oklch(0.2 0.02 250 / 0.04);

  /* Section spacing */
  --section-py-md: 5rem;
  --section-py-lg: 7rem;
}
```

---

## Typography rules

- **Inter or Geist throughout.** Display weight: 600–700 with tight tracking (-0.02 to -0.04em).
- **No serifs.** Soft Structuralism is a sans-serif aesthetic.
- **Mono used semantically** — version numbers, code, CLI hints, API endpoints, technical metadata. Not as decoration.
- **Body 16–17px,** generous leading (1.6).
- **Display sizes step in clear ratios** — 1.25x or 1.333x scale, not random.

---

## Layout signatures

- **Strong 12-column grid** — visible on hover when designing. Hero stays in 8 cols centered.
- **Bento for features** — uneven grid, 1 large + 3 medium + 2 small. Linear's homepage is the template.
- **Asymmetric hero allowed** — headline left (5–6 cols), product visual right (6–7 cols), but always aligned to grid lines.
- **Logo cloud as social proof** — grayscale, lockup carousel or static grid of 6–10 logos. Not "trusted by AMAZON GOOGLE NETFLIX" stretched fake list.
- **Product UI screenshots in browser chrome** with subtle gradient backdrop. Tilted slightly or straight-on.
- **Pricing table with one "Popular" highlighted** card — accent border, slight scale-up, subtle accent bg.

---

## Motion language

- **Eased, never bouncy.** `cubic-bezier(0.32, 0.72, 0, 1)` (Vercel's house easing) or `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Short durations** — 150–300ms for micro, 400–600ms for entrances.
- **Hover: lift card 2–4px** with shadow bloom. Not "scale-110."
- **Buttons: bg darken + tiny scale (0.98 on press).** No bounce.
- **Scroll reveals fade-up 16–24px.** Stagger by 60–100ms.
- **Skeuomorphic delight in micro-details** — checkbox checks animate, toggles spring slightly, drag handles get grippy on hover. (One area where a tiny spring is allowed.)
- **Cursor follow on interactive cards** via CSS custom properties.

---

## Components spec

### Button (primary)
```tsx
<button className="
  inline-flex items-center gap-2 px-4 py-2
  rounded-lg bg-foreground text-background
  text-[14px] font-medium
  shadow-[0_1px_2px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.04)]
  ring-1 ring-foreground/10
  transition-[transform,box-shadow,background] duration-200
  hover:brightness-110 hover:-translate-y-px hover:shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]
  active:translate-y-0 active:brightness-95
">
  Start free trial
</button>
```

### Card
```tsx
<div className="
  group relative rounded-xl border border-border bg-surface-2 p-6
  shadow-[0_1px_2px_rgba(0,0,0,0.04)]
  transition-[transform,box-shadow,border-color] duration-300
  hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:border-border-strong
">
  <div className="flex items-center gap-2 text-foreground-3 text-[13px] font-medium mb-3">
    <Icon className="w-4 h-4" />
    <span>Feature label</span>
  </div>
  <h3 className="text-[20px] font-semibold tracking-tight mb-2">{title}</h3>
  <p className="text-[15px] leading-[1.6] text-foreground-2">{description}</p>
</div>
```

### Code/CLI demo block
```tsx
<div className="rounded-xl border border-border bg-foreground p-6 font-mono text-[13px]">
  <div className="flex items-center gap-1.5 mb-3 opacity-50">
    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
  </div>
  <div className="text-background/60">$ <span className="text-background">npx your-cli init</span></div>
  <div className="text-background/40 mt-2">✓ Project created in 1.2s</div>
</div>
```

### Bento grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="md:col-span-2 md:row-span-2 rounded-xl border border-border bg-surface-2 p-8">
    {/* hero feature */}
  </div>
  <div className="rounded-xl border border-border bg-surface-2 p-6">{/* medium */}</div>
  <div className="rounded-xl border border-border bg-surface-2 p-6">{/* medium */}</div>
  <div className="md:col-span-2 rounded-xl border border-border bg-surface-2 p-6">
    {/* wide */}
  </div>
</div>
```

---

## Watch-outs

- **Don't use Inter unmodified at default tracking.** Always tighten display. The default Inter look IS the AI template.
- **No `from-blue-500 to-purple-500` gradients.** Use a single OKLCH accent with subtle tints.
- **Don't over-bento.** 5–8 cells max. More than that becomes noise.
- **Don't use stock product UI screenshots.** Show your actual product. If you don't have one, design a believable one (don't fake one with "Lorem Ipsum" placeholder data).
- **Resist "feature card grid of 6 with icons."** That's the most templated pattern in SaaS. Either break the grid asymmetrically OR use a different metaphor (timeline, comparison, before/after).

---

## When NOT to use this archetype

- Luxury hospitality or fashion (too sterile)
- Children's brands (too restrained)
- Artistic portfolios (too neutral)
- Print-cross-over magazines (no serif soul)
- Local services that need warmth/personality (feels remote)
