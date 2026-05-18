---
name: design-tokens
description: Three-layer design token architecture (primitive → semantic → component). Use when setting up a new design system, auditing an existing one, or building tokens.css and tailwind.config.ts files. Covers OKLCH color, fluid type scales, spacing rhythm, elevation, radius scales, and dark mode strategy. Pairs with design-foundations.
---

# Design Tokens

The foundation of any non-generic design system. Tokens are not "CSS variables" — they are **design decisions encoded as code**. The naming, the structure, and the granularity all signal whether you wrote a real system or grabbed defaults.

---

## Three-layer architecture

Every color, size, and value flows through three layers:

```
Primitive (raw values)
       ↓
Semantic (purpose aliases)
       ↓
Component (component-specific)
```

### Layer 1 — Primitives

Raw, neutral values. The shared vocabulary. Generic enough to be reused, specific enough to be picked deliberately.

```css
:root {
  /* Color scales — neutral */
  --zinc-50: oklch(0.985 0 0);
  --zinc-100: oklch(0.97 0 0);
  --zinc-200: oklch(0.92 0 0);
  --zinc-300: oklch(0.87 0 0);
  --zinc-400: oklch(0.71 0 0);
  --zinc-500: oklch(0.55 0 0);
  --zinc-600: oklch(0.44 0 0);
  --zinc-700: oklch(0.37 0 0);
  --zinc-800: oklch(0.27 0 0);
  --zinc-900: oklch(0.18 0 0);
  --zinc-950: oklch(0.11 0 0);

  /* Color scales — single accent (pick one) */
  --rust-50:  oklch(0.97 0.02 30);
  --rust-100: oklch(0.92 0.04 30);
  --rust-500: oklch(0.62 0.18 25);
  --rust-700: oklch(0.45 0.15 25);

  /* Spacing — base 4px */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Type — fluid clamp */
  --text-xs:    clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem);
  --text-sm:    clamp(0.875rem, 0.8rem + 0.25vw, 0.9375rem);
  --text-base:  clamp(1rem, 0.9rem + 0.3vw, 1.0625rem);
  --text-lg:    clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --text-xl:    clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem);
  --text-2xl:   clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  --text-3xl:   clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem);
  --text-4xl:   clamp(2.25rem, 1.8rem + 2vw, 3.5rem);
  --text-5xl:   clamp(3rem, 2.2rem + 3vw, 4.5rem);
  --text-6xl:   clamp(3.75rem, 2.5rem + 5vw, 6rem);
  --text-7xl:   clamp(4.5rem, 2.8rem + 7vw, 8rem);
  --text-display: clamp(5rem, 3rem + 10vw, 12rem);

  /* Radius — sharp to rounded */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
  --radius-full: 9999px;

  /* Easing — 9 named curves */
  --ease-linear:       linear;
  --ease-standard:     cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate:   cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate:   cubic-bezier(0.4, 0, 1, 1);
  --ease-emphasized:   cubic-bezier(0.2, 0, 0, 1);
  --ease-expo:         cubic-bezier(0.16, 1, 0.3, 1);  /* "the good one" — most premium */
  --ease-bounce:       cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-spring:       cubic-bezier(0.5, 1.5, 0.5, 1);
  --ease-anticipate:   cubic-bezier(0.7, -0.4, 0.4, 1.4);

  /* Duration */
  --duration-instant: 100ms;
  --duration-fast:    200ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
  --duration-cinema:  800ms;

  /* Shadow primitives — layered */
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
  --shadow-xl:
    0 0 0 0.5px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.04),
    0 32px 64px rgba(0, 0, 0, 0.06);
}
```

### Layer 2 — Semantic

Aliases that describe *purpose*, not value. This is the layer your components read from. Swapping a brand or going dark = changing this layer, not your components.

```css
:root {
  /* Backgrounds — surface elevation system */
  --background:    var(--zinc-50);        /* canvas */
  --surface-1:     var(--zinc-50);        /* same as canvas (cards on canvas) */
  --surface-2:     white;                  /* elevated (popovers, modals) */
  --surface-3:     white;                  /* highest (nested) */
  --surface-inset: var(--zinc-100);       /* recessed (empty states, code) */

  /* Foregrounds — 4-level hierarchy */
  --foreground:    var(--zinc-950);       /* primary text */
  --foreground-2:  var(--zinc-700);       /* secondary */
  --foreground-3:  var(--zinc-500);       /* tertiary / metadata */
  --foreground-4:  var(--zinc-400);       /* muted / placeholder / disabled */

  /* Borders — 4-level emphasis */
  --border:        var(--zinc-200);
  --border-subtle: var(--zinc-100);
  --border-strong: var(--zinc-300);
  --border-focus:  var(--zinc-950);       /* focus ring uses accent in colored themes */

  /* Brand & accent — ONE accent only */
  --accent:        var(--rust-500);
  --accent-fg:     white;
  --accent-hover:  var(--rust-700);
  --accent-muted:  var(--rust-100);
  --accent-subtle: var(--rust-50);

  /* Semantic — functional colors */
  --success:       oklch(0.62 0.16 145);
  --warning:       oklch(0.78 0.16 75);
  --destructive:   oklch(0.55 0.22 25);
  --info:          oklch(0.55 0.18 240);

  /* Control tokens — for form elements */
  --control-bg:    white;
  --control-border: var(--zinc-300);
  --control-border-hover: var(--zinc-400);
  --control-border-focus: var(--zinc-950);
  --control-fg:    var(--zinc-950);
  --control-placeholder: var(--zinc-400);
}

/* Dark mode — same hues, inverted lightness */
.dark {
  --background:    var(--zinc-950);
  --surface-1:     var(--zinc-950);
  --surface-2:     oklch(0.16 0 0);
  --surface-3:     oklch(0.19 0 0);
  --surface-inset: oklch(0.14 0 0);

  --foreground:    var(--zinc-50);
  --foreground-2:  var(--zinc-300);
  --foreground-3:  var(--zinc-400);
  --foreground-4:  var(--zinc-500);

  --border:        oklch(0.22 0 0);
  --border-subtle: oklch(0.18 0 0);
  --border-strong: oklch(0.3 0 0);

  --accent:        oklch(0.68 0.18 25);  /* slightly lighter in dark */
  --accent-hover:  oklch(0.74 0.18 25);

  --control-bg:    oklch(0.16 0 0);
  --control-border: oklch(0.26 0 0);

  /* Shadows are less visible on dark — shift to borders */
  --shadow-md: 0 0 0 1px rgba(255, 255, 255, 0.06);
  --shadow-lg:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.4);
}
```

### Layer 3 — Component

Component-specific tokens for tuning interactive elements independently.

```css
:root {
  /* Button */
  --btn-primary-bg:     var(--foreground);
  --btn-primary-fg:     var(--background);
  --btn-primary-hover:  var(--foreground-2);
  --btn-secondary-bg:   var(--surface-2);
  --btn-secondary-fg:   var(--foreground);
  --btn-secondary-border: var(--border);
  --btn-radius:         var(--radius-full);   /* pill by default */
  --btn-padding-x:      1.5rem;
  --btn-padding-y:      0.75rem;
  --btn-height:         2.75rem;              /* 44px touch target */

  /* Card */
  --card-bg:            var(--surface-1);
  --card-border:        var(--border);
  --card-radius:        var(--radius-2xl);
  --card-padding:       2rem;
  --card-shadow:        var(--shadow-md);

  /* Input */
  --input-bg:           var(--control-bg);
  --input-border:       var(--control-border);
  --input-fg:           var(--control-fg);
  --input-placeholder:  var(--control-placeholder);
  --input-radius:       var(--radius-md);
  --input-height:       2.75rem;
  --input-padding-x:    0.875rem;

  /* Layout containers */
  --container-max:      80rem;                /* 1280px */
  --container-padding:  1rem;
  --container-padding-md: 2rem;
  --container-padding-lg: 4rem;

  /* Section spacing — for marketing */
  --section-py-sm:      var(--space-16);      /* 64px */
  --section-py-md:      var(--space-24);      /* 96px */
  --section-py-lg:      var(--space-32);      /* 128px */
  --section-py-xl:      10rem;                /* 160px — luxury */
}
```

---

## The discipline

### Use semantic tokens in components, not primitives

```css
/* Bad */
.card {
  background: var(--zinc-50);
  color: var(--zinc-950);
}

/* Good */
.card {
  background: var(--card-bg);
  color: var(--foreground);
}
```

This is what lets you re-skin the whole project by editing only the semantic layer.

### Don't invent new colors at the component level

If a component needs a color the system doesn't provide, the system has a gap. Add to the semantic layer, don't hardcode.

### Use OKLCH, not HSL or hex

OKLCH is perceptually uniform — `oklch(0.5 X X)` always looks the same brightness regardless of hue. HSL doesn't — `hsl(60 100% 50%)` (yellow) looks much brighter than `hsl(240 100% 50%)` (blue) at the same "lightness."

This matters because OKLCH lets you generate scales algorithmically without manual eyeballing.

```js
// Generate a 12-step accent scale automatically
const accent = (h) => Array.from({length: 12}).map((_, i) => {
  const l = 0.96 - (i * 0.075);  // 0.96 → 0.135
  const c = i < 2 ? 0.04 : i < 6 ? 0.15 : 0.18;
  return `oklch(${l.toFixed(3)} ${c} ${h})`;
});
```

### Wide-gamut display

If your target audience is on modern macOS / iOS, use `oklch()` and serve `image-rendering: -webkit-optimize-contrast` for crisper edges. P3 displays render OKLCH colors that sRGB hex can't.

---

## Token naming rules

| Rule | Example |
|---|---|
| Foreground hierarchy uses numbers | `--foreground`, `--foreground-2`, `--foreground-3`, `--foreground-4` |
| Background elevation uses numbers | `--surface-1`, `--surface-2`, `--surface-3` |
| Border emphasis uses descriptive words | `--border`, `--border-subtle`, `--border-strong` |
| Brand uses domain words (semantic level only) | `--ink` (alias of `--foreground`), `--field` (alias of `--surface-1`) |
| Components are namespaced | `--btn-*`, `--card-*`, `--input-*` |
| Never use color names in semantic | `--zinc-950` is primitive, `--foreground` is semantic |

---

## Per-archetype token presets

Below are starter values per archetype. Drop in, tune from there.

### Premium SaaS (Linear / Vercel / Stripe adjacent)
```css
--background: oklch(0.98 0 0);
--foreground: oklch(0.15 0 0);
--accent: oklch(0.55 0.22 250);  /* electric blue */
--font-sans: 'Geist', system-ui;
--font-mono: 'Geist Mono', monospace;
--radius-md: 8px;
--card-radius: 12px;
--btn-radius: 8px;
--shadow-md: 0 1px 3px rgba(0,0,0,0.06);
```

### Editorial luxury (Floema / Editorial sites)
```css
--background: oklch(0.97 0.005 80);  /* parchment */
--foreground: oklch(0.18 0.02 30);   /* warm ink */
--accent: oklch(0.45 0.12 25);        /* oxblood */
--font-display: 'Editorial New', 'PP Editorial New', serif;
--font-sans: 'GT Sectra', 'Newsreader', serif;
--radius-md: 4px;       /* sharper for editorial */
--card-radius: 4px;
--btn-radius: 0;         /* square buttons */
--section-py-lg: 12rem;  /* very generous */
```

### Soft consumer (Notion / Substack)
```css
--background: oklch(0.99 0.005 80);
--foreground: oklch(0.2 0 0);
--accent: oklch(0.65 0.12 35);  /* warm coral */
--font-sans: 'Cabinet Grotesk', 'Plus Jakarta Sans';
--radius-md: 12px;
--card-radius: 16px;
--btn-radius: 9999px;
```

### Brutalist (Swiss telemetry)
```css
--background: oklch(0.95 0.005 90);  /* newsprint */
--foreground: oklch(0.1 0 0);
--accent: oklch(0.58 0.23 30);        /* hazard red */
--font-sans: 'Neue Haas Grotesk', 'Inter Tight';
--font-mono: 'Space Mono', 'JetBrains Mono';
--radius-md: 0;
--card-radius: 0;
--btn-radius: 0;
--shadow-md: none;
```

### Industrial telemetry (dark / mono)
```css
--background: oklch(0.11 0 0);
--foreground: oklch(0.95 0 0);
--accent: oklch(0.58 0.23 30);  /* aviation red */
--font-sans: 'JetBrains Mono', monospace;
--font-mono: 'JetBrains Mono', monospace;
--radius-md: 0;
--card-radius: 0;
```

---

## What's in `templates/`

- `tokens.css` — Full primitive + semantic CSS to drop into any project
- `tailwind.config.ts` — Tailwind v3 config that consumes the tokens
- `globals-v4.css` — Tailwind v4 native syntax version
- `tokens.json` — Same data as JSON for generators / Figma sync

---

## Companion references

- `references/color-systems.md` — OKLCH math, palette generation, contrast checking
- `references/typography-scales.md` — fluid clamp math, optical sizing, pairing rules
- `references/spacing-rhythm.md` — base unit choice, modular scales, when to break them
- `references/elevation-depth.md` — borders vs shadows vs surface shifts
