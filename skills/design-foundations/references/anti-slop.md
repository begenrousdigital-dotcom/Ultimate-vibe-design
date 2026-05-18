# Anti-Slop — Full Reference

The detailed version of the bans and replacements from `SKILL.md`. Read when you need code examples.

---

## 1. Typography

### Banned
```html
<style>
  body { font-family: 'Inter', system-ui, sans-serif; }
</style>
```

### Why banned
Inter is the most-used webfont on AI-generated landing pages by an order of magnitude. The moment a user sees Inter + a purple gradient, they know it's AI output. It's not that Inter is bad — Linear, Notion, and Vercel use it. The problem is it's the *default reach*, and the default reach is what makes everything look the same.

### Replacements by archetype

| Archetype | Display | Body | Mono |
|---|---|---|---|
| Premium SaaS | `Geist` | `Geist` | `Geist Mono` |
| Agency | `Aeonik`, `ABC Diatype`, `GT Walsheim` | same family | `JetBrains Mono`, `GT Pressura Mono` |
| Editorial | `Editorial New`, `PP Editorial New`, `Canela`, `Fraunces` (variable) | `GT Sectra`, `Newsreader` | `Berkeley Mono` |
| Luxury | `Cardinal Fruit`, `Domaine Display`, `PP Editorial New` italic | `Aktiv Grotesk`, `Apercu` | rarely used |
| Brutalist | `Druk`, `Archivo Black`, `Neue Haas Grotesk Black` | `Inter Tight` (one of few valid uses), `Helvetica Now` | `Space Mono`, `VT323` |
| Soft / consumer | `Cabinet Grotesk`, `Plus Jakarta Sans`, `Switzer` | same family | rarely used |
| Industrial / Telemetry | `JetBrains Mono`, `IBM Plex Mono` (everything) | same | same |
| Editorial minimalist | `Instrument Serif`, `Cormorant`, `Fraunces` italic | `Switzer`, `Geist` | `Geist Mono` |

### Defaults that always work for body
- `Geist` (free, modern, generic enough not to date but distinctive enough not to be Inter)
- `GT Walsheim` (paid, but the secret weapon — Linear / Cal.com use this)
- `Aeonik` (Awwwards favorite for agencies)

### Headline sizing — fluid

```css
/* Bad */
h1 { font-size: 96px; }

/* Good — fluid clamp with intent */
.h-hero {
  font-size: clamp(2.5rem, 5.5vw + 1rem, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}
```

Massive 96px+ on desktop only works for editorial / agency. For SaaS, max `text-5xl md:text-6xl`.

### Tracking discipline

```css
/* Tight tracking for display sizes only */
h1, h2, .display { letter-spacing: -0.02em; }
h3, h4 { letter-spacing: -0.01em; }
body, p { letter-spacing: 0; }
.eyebrow, .label, .uppercase {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;
}
```

---

## 2. Color

### Banned palette: AI Purple
```css
/* DO NOT */
background: linear-gradient(135deg, #8b5cf6, #ec4899);
box-shadow: 0 20px 50px rgba(139, 92, 246, 0.4);
```

This combo + Inter + a glassmorphism card = the universal AI tell. Run far from it.

### The mature approach: one base + one accent + semantic

```css
:root {
  /* Neutral scale (foundation) */
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0 0);

  --surface-1: oklch(1 0 0);          /* cards */
  --surface-2: oklch(0.96 0 0);       /* inset */

  --border: oklch(0.92 0 0);
  --border-strong: oklch(0.85 0 0);

  --muted-fg: oklch(0.55 0 0);
  --faint-fg: oklch(0.75 0 0);

  /* ONE accent — pick from below, don't combine */
  --accent: oklch(0.62 0.18 25);       /* rust */
  --accent-fg: oklch(0.99 0 0);

  /* Semantic */
  --success: oklch(0.68 0.15 145);
  --warning: oklch(0.78 0.16 75);
  --destructive: oklch(0.55 0.22 25);
}
```

### Accent options (pick ONE per project)

| Name | OKLCH | Hex approx | Vibe |
|---|---|---|---|
| Rust | `oklch(0.62 0.18 25)` | `#C8521E` | Earthy, premium, agency |
| Emerald | `oklch(0.62 0.16 145)` | `#1A7F4F` | Confident, fintech-safe |
| Electric blue | `oklch(0.55 0.22 250)` | `#1656FF` | Stripe / Linear adjacent |
| Deep rose | `oklch(0.58 0.16 5)` | `#B43855` | Warm, editorial |
| Sage | `oklch(0.72 0.07 145)` | `#9BB39A` | Calm, organic, wellness |
| Hazard red | `oklch(0.58 0.23 30)` | `#E61919` | Swiss brutalist (use sparingly) |
| Mustard | `oklch(0.78 0.14 85)` | `#D9A431` | Warm, retro, editorial |
| Cobalt | `oklch(0.45 0.18 260)` | `#2444C7` | Industrial, archival |

### Saturation discipline

```css
/* Too saturated (AI tell) */
--accent: hsl(280 100% 60%);

/* Calibrated */
--accent: hsl(280 60% 50%);  /* desaturate to 60-70% */
```

In OKLCH, keep chroma between `0.12` and `0.22` for accents. Above 0.25 = neon.

### Dark mode — the same hue, inverted lightness

Don't introduce a new palette for dark mode. Use the same hue, just shift lightness:

```css
.dark {
  --background: oklch(0.12 0 0);
  --foreground: oklch(0.95 0 0);
  --surface-1: oklch(0.16 0 0);
  --surface-2: oklch(0.19 0 0);
  --border: oklch(0.22 0 0);
  --accent: oklch(0.68 0.18 25);  /* slightly lighter in dark */
}
```

---

## 3. Layout

### The banned default: 3-column feature row

```html
<!-- DO NOT -->
<section class="py-16">
  <h2 class="text-center text-3xl">Why choose us</h2>
  <div class="grid grid-cols-3 gap-8 mt-12">
    <div class="rounded-lg border p-6">
      <div class="w-12 h-12 rounded-full bg-purple-100 mb-4">
        <Icon class="w-6 h-6 text-purple-600" />
      </div>
      <h3>Fast</h3>
      <p>Our platform is incredibly fast.</p>
    </div>
    <!-- × 3 -->
  </div>
</section>
```

### Replacement 1: Bento grid (asymmetric)

```html
<section class="py-24">
  <div class="grid grid-cols-12 gap-4">
    <!-- Big feature -->
    <article class="col-span-12 md:col-span-8 row-span-2 rounded-3xl border border-zinc-200/60 p-10 bg-white">
      <div class="text-xs uppercase tracking-[0.2em] text-zinc-500">01 · Speed</div>
      <h3 class="text-3xl md:text-5xl mt-4 tracking-tight">Render 60 fps regardless of scale</h3>
      <p class="mt-6 text-zinc-600 max-w-lg">Edge-cached SSR with WebGL fallback.</p>
    </article>

    <!-- Stacked smaller -->
    <article class="col-span-12 md:col-span-4 rounded-3xl border border-zinc-200/60 p-8 bg-white">
      <div class="text-xs uppercase tracking-[0.2em] text-zinc-500">02</div>
      <h3 class="text-2xl mt-4 tracking-tight">Privacy first</h3>
    </article>

    <article class="col-span-12 md:col-span-4 rounded-3xl border border-zinc-200/60 p-8 bg-white">
      <div class="text-xs uppercase tracking-[0.2em] text-zinc-500">03</div>
      <h3 class="text-2xl mt-4 tracking-tight">Built for teams</h3>
    </article>
  </div>
</section>
```

### Replacement 2: Zig-zag editorial

```html
<section class="py-32 space-y-32">
  <div class="grid grid-cols-12 gap-12 items-center">
    <div class="col-span-12 md:col-span-5">
      <span class="text-xs uppercase tracking-[0.2em]">Speed</span>
      <h3 class="text-4xl md:text-6xl tracking-tight mt-4">Render 60 fps regardless of scale</h3>
      <p class="mt-8 text-zinc-600 text-lg max-w-md leading-relaxed">
        Edge-cached SSR with WebGL fallback — your dashboard stays fluid even with 50k rows in view.
      </p>
    </div>
    <div class="col-span-12 md:col-span-7 md:col-start-7">
      <!-- image / demo -->
    </div>
  </div>

  <!-- Next feature: image LEFT, text RIGHT -->
  <div class="grid grid-cols-12 gap-12 items-center">
    <div class="col-span-12 md:col-span-7">
      <!-- image / demo -->
    </div>
    <div class="col-span-12 md:col-span-5">
      <span class="text-xs uppercase tracking-[0.2em]">Privacy</span>
      <h3 class="text-4xl md:text-6xl tracking-tight mt-4">Your data stays your data</h3>
    </div>
  </div>
</section>
```

### Replacement 3: Horizontal scroll feature gallery

```html
<section class="py-24">
  <div class="px-8 mb-12">
    <h2 class="text-4xl tracking-tight">What's inside</h2>
  </div>
  <div class="flex gap-6 overflow-x-auto px-8 snap-x snap-mandatory pb-8">
    <article class="snap-start shrink-0 w-[80vw] md:w-[28rem] rounded-3xl bg-zinc-100 p-10 aspect-[4/5]">
      <h3 class="text-2xl">Feature one</h3>
    </article>
    <!-- repeat -->
  </div>
</section>
```

---

## 4. Hero patterns

### Banned: centered text over dark image with a centered CTA below

This is the most common AI hero. Replace it.

### Replacement 1: Asymmetric editorial

```html
<section class="min-h-[100dvh] grid grid-cols-12 gap-8 px-8 pt-32 pb-16">
  <div class="col-span-12 md:col-span-7 flex flex-col justify-end">
    <span class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Vol. 04 · 2026</span>
    <h1 class="text-5xl md:text-8xl tracking-tight leading-[0.95]">
      The work that<br />
      <em class="font-normal italic font-serif">becomes</em><br />
      the studio.
    </h1>
    <p class="mt-12 max-w-md text-zinc-600 text-lg">
      We design brand systems and digital products for ambitious teams in Switzerland and beyond.
    </p>
    <div class="mt-12 flex gap-4">
      <a class="px-6 py-3 rounded-full bg-zinc-950 text-white">View work</a>
      <a class="px-6 py-3 rounded-full border border-zinc-300">About</a>
    </div>
  </div>
  <div class="col-span-12 md:col-span-5">
    <div class="aspect-[3/4] bg-zinc-100 rounded-3xl"><!-- image / video --></div>
  </div>
</section>
```

### Replacement 2: Massive single-word + label grid

```html
<section class="min-h-[100dvh] grid grid-cols-12 gap-4 px-8 pt-40 pb-16">
  <div class="col-span-12">
    <h1 class="font-serif italic text-[clamp(5rem,18vw,18rem)] leading-[0.85] tracking-tighter">
      Becoming.
    </h1>
  </div>
  <div class="col-span-12 md:col-span-3 mt-12">
    <span class="text-xs uppercase tracking-[0.2em]">Studio</span>
    <p class="mt-2">Geneva · Zurich</p>
  </div>
  <div class="col-span-12 md:col-span-3 mt-12">
    <span class="text-xs uppercase tracking-[0.2em]">Practice</span>
    <p class="mt-2">Brand · Web · Print</p>
  </div>
  <div class="col-span-12 md:col-span-3 md:col-start-10 mt-12">
    <span class="text-xs uppercase tracking-[0.2em]">Index</span>
    <p class="mt-2">01 / 24</p>
  </div>
</section>
```

### Replacement 3: Split screen with vertical type

```html
<section class="min-h-[100dvh] grid grid-cols-2 gap-0">
  <div class="bg-zinc-950 text-white p-16 flex flex-col justify-between">
    <span class="text-xs uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 self-start">
      Edirex — 2026
    </span>
    <h1 class="text-5xl md:text-7xl tracking-tight">Find the right artisan in 48h.</h1>
  </div>
  <div class="bg-amber-50">
    <!-- image -->
  </div>
</section>
```

---

## 5. Shadows & elevation

### Banned
```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);  /* too dark */
box-shadow: 0 0 60px rgba(168, 85, 247, 0.5); /* neon glow */
```

### Calibrated layered shadows
```css
/* Light mode */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
--shadow-md:
  0 0 0 0.5px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.03),
  0 4px 8px rgba(0, 0, 0, 0.02);
--shadow-lg:
  0 0 0 0.5px rgba(0, 0, 0, 0.04),
  0 4px 8px rgba(0, 0, 0, 0.03),
  0 16px 32px rgba(0, 0, 0, 0.04);

/* Dark mode — shift to border-driven */
.dark {
  --shadow-md: 0 0 0 1px rgba(255, 255, 255, 0.06);
  --shadow-lg:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.4);
}
```

### Inner highlight (the secret sauce)

For "premium" feeling buttons and cards:

```css
.premium-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  box-shadow:
    var(--shadow-md),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);  /* top inner highlight */
}

/* On dark, the highlight is subtle */
.dark .premium-card {
  box-shadow:
    var(--shadow-md),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
```

---

## 6. Forms

### Banned native styling
```html
<select class="border rounded-lg p-2">...</select>
```

Native `<select>` renders OS-styled dropdowns. Can't be styled. Build custom popover-driven controls (use Radix UI as primitives).

### Mandatory form structure

```html
<div class="space-y-2">
  <label for="email" class="text-sm font-medium text-zinc-700">
    Email address
  </label>
  <input
    id="email"
    type="email"
    class="w-full h-11 px-3 rounded-lg border border-zinc-300
           focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10
           outline-none transition"
  />
  <p class="text-xs text-zinc-500">We'll only use this to confirm your account.</p>
</div>
```

Rules:
- Label **above** input. Never inside (placeholders aren't labels).
- Helper text below input, optional.
- Error text replaces helper, in `text-rose-600`.
- Inputs are `h-11` (44px) minimum for touch targets.
- Focus ring is `ring-2` with low opacity, color matches the foreground.

---

## 7. Interactive states — all four required

Every interactive element ships with: `default`, `hover`, `active` (pressed), `focus-visible`, `disabled`.

```css
.btn {
  /* default */
  background: var(--zinc-950);
  color: white;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.btn:hover {
  background: var(--zinc-800);
}

.btn:active {
  transform: scale(0.98) translateY(1px);  /* tactile feedback */
}

.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

---

## 8. Data states — also all four required

Every list, table, or chart needs:

1. **Loading** — skeleton matching final layout shape (NOT generic spinners)
2. **Empty** — beautifully composed state with CTA to populate
3. **Error** — clear inline error, retry CTA
4. **Success / populated** — the main state

```html
<!-- Loading skeleton -->
<div class="space-y-3 animate-pulse">
  <div class="h-4 w-3/4 bg-zinc-200 rounded" />
  <div class="h-4 w-1/2 bg-zinc-200 rounded" />
  <div class="h-4 w-2/3 bg-zinc-200 rounded" />
</div>

<!-- Empty state -->
<div class="flex flex-col items-center text-center py-24">
  <div class="size-12 rounded-full bg-zinc-100 mb-6">
    <Icon class="size-6 text-zinc-400 m-3" />
  </div>
  <h3 class="text-lg font-medium">No projects yet</h3>
  <p class="text-zinc-500 mt-2 max-w-sm">
    Create your first project to see it here.
  </p>
  <button class="mt-6 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm">
    New project
  </button>
</div>
```

---

## 9. Tactile motion (when in doubt)

The cheapest upgrade you can apply to any UI: tactile press feedback on every clickable thing.

```css
.tactile {
  transition: transform 100ms cubic-bezier(0.16, 1, 0.3, 1);
}
.tactile:active {
  transform: scale(0.98) translateY(1px);
}
```

It makes everything feel like native iOS. Costs nothing. Apply broadly.

---

## Reference

- All hex values in this file can be re-expressed in OKLCH for wider gamut.
- Tracking values are tested across `Geist`, `Aeonik`, `Cabinet Grotesk`. Adjust ±0.005em for other fonts.
- The shadow values are calibrated for white / off-white backgrounds. On colored backgrounds, tint the shadow's RGBA to the background hue (`rgba(60, 30, 0, 0.06)` for amber/warm backgrounds).
