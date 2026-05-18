# Archetype — Ethereal Glass

For AI products, fintech, futuristic SaaS, music tech, creator tools, anything pitching "the future." High-tech, slightly dreamy, light-saturated.

The vibe is **liquid glass over a synth-pop sunset**. Heavy blur, subtle gradients, glow. Apple's visionOS aesthetic crossed with Linear's restraint. NOT crypto-bro neon.

**Reference winners on Awwwards using this aesthetic:**
- Oryzo AI (May 13, 2026 SOTD) — by Lusion, AI product
- XOX (May 12, 2026 SOTD) — music/audio product
- T11 / The Eleventh (Apr 30, 2026 SOTD) — modern product
- Resemble AI (Apr 23, 2026 SOTD) — AI voice product
- AmpleHarvest (Mar 2026) — tech-forward NGO
- Linear, Vercel, Arc (the canonical reference set)

---

## Token preset

```css
:root {
  /* Surface — deep, slightly tinted */
  --background: oklch(0.14 0.015 270);          /* near-black with violet hint */
  --surface-1: oklch(0.14 0.015 270);
  --surface-2: oklch(0.18 0.018 270);           /* card */
  --surface-glass: oklch(0.22 0.02 270 / 0.5);  /* glass surface */
  --surface-inset: oklch(0.11 0.012 270);

  /* Foreground */
  --foreground: oklch(0.98 0.003 270);          /* slightly cool white */
  --foreground-2: oklch(0.78 0.01 270);
  --foreground-3: oklch(0.58 0.012 270);
  --foreground-4: oklch(0.4 0.012 270);

  /* Borders — luminous edges */
  --border: oklch(0.3 0.015 270 / 0.6);
  --border-subtle: oklch(0.25 0.012 270 / 0.4);
  --border-glow: oklch(0.7 0.15 270 / 0.3);

  /* Accent — pick ONE direction, support with one analogous */
  --accent: oklch(0.7 0.18 270);                /* violet primary */
  --accent-2: oklch(0.75 0.16 310);             /* magenta-violet support */
  /* alternates: */
  /* --accent: oklch(0.72 0.17 220);            */ /* electric blue */
  /* --accent: oklch(0.78 0.16 180);            */ /* cyan */

  /* Typography */
  --font-display: 'Geist', 'Inter Display', 'PP Neue Montreal', sans-serif;
  --font-sans: 'Geist', 'Inter', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', 'Berkeley Mono', monospace;

  /* Radius — soft but precise */
  --radius-md: 12px;
  --radius-lg: 20px;
  --card-radius: 16px;
  --btn-radius: 10px;
  --pill-radius: 999px;

  /* Shadow — glow, not drop */
  --shadow-md: 0 0 0 1px var(--border), 0 4px 24px -8px oklch(0.7 0.15 270 / 0.2);
  --shadow-lg: 0 0 0 1px var(--border), 0 16px 64px -16px oklch(0.7 0.15 270 / 0.3);
  --shadow-glow: 0 0 80px -10px oklch(0.7 0.18 270 / 0.4);

  /* Backdrop blur strengths */
  --blur-glass: 24px;
  --blur-heavy: 64px;

  /* Section spacing */
  --section-py-md: 6rem;
  --section-py-lg: 8rem;
}
```

---

## Typography rules

- **Sans-only.** No serifs anywhere. Geist is the modern default; Inter Display works.
- **Tight tracking on display.** `tracking-tight` or `letter-spacing: -0.04em` on big text.
- **Gradient text used sparingly** — once per page max, on the main wordmark or single hero word. Not on every heading.
- **Numbers in mono** — version numbers, stats, code, prices. Geist Mono.
- **Line height tight on display (1.05–1.1), generous on body (1.55–1.65).**

---

## Layout signatures

- **Centered hero with single radial glow behind** — gradient orb in `position: absolute` with heavy blur, low opacity. Not a `bg-gradient-to-br purple to pink` rectangle.
- **Frosted glass cards** floating over the background glow. `backdrop-filter: blur(24px)` + 1px luminous border.
- **Animated grids/dots** as background texture, subtle (opacity 0.04–0.08).
- **Product UI showcased in 3D-tilted frames** with parallax on scroll.
- **Bento grid for features** with glass cards of varying span.
- **Floating nav pill** — `position: fixed`, glass, centered horizontally.

---

## Motion language

- **Smooth, eased, never bouncy.** `cubic-bezier(0.22, 1, 0.36, 1)` is the house easing.
- **Gradient orbs drift slowly** — 20–40s loops, very subtle position changes.
- **Hover states glow before they move** — box-shadow and brightness ramp first.
- **Mouse-following highlight on cards** (CSS custom prop + radial-gradient mask).
- **Scroll-driven blur** on the hero background as you scroll past.
- **Fade-up reveals at 24–32px translation,** 600–800ms duration, 80ms stagger.
- **Reduced motion: kill all orb drift, all parallax, replace with fade only.**

---

## Components spec

### Button
```tsx
// Primary — glass-glow
<button className="
  group relative inline-flex items-center gap-2 px-5 py-2.5
  rounded-[10px] bg-white/10 backdrop-blur-xl
  border border-white/15
  text-[15px] font-medium text-white
  shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_32px_-8px_oklch(0.7_0.18_270/0.4)]
  transition-[transform,box-shadow,background] duration-300
  hover:bg-white/15 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-8px_oklch(0.7_0.18_270/0.55)]
  active:scale-[0.98]
">
  Get started
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
</button>
```

### Card (glass)
```tsx
<div className="
  relative rounded-2xl p-6
  bg-white/[0.04] backdrop-blur-2xl
  border border-white/10
  shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_-30px_rgba(0,0,0,0.5)]
">
  {/* radial highlight on hover */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
       style={{ background: 'radial-gradient(400px circle at var(--mx) var(--my), oklch(0.7 0.18 270 / 0.15), transparent 40%)' }} />
  {children}
</div>
```

### Hero orb background
```tsx
<div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
  {/* Main orb */}
  <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
                  w-[800px] h-[800px] rounded-full
                  bg-[radial-gradient(circle,oklch(0.7_0.18_270/0.35),transparent_60%)]
                  blur-3xl animate-orb-drift" />
  {/* Support orb */}
  <div className="absolute right-1/4 bottom-1/4
                  w-[500px] h-[500px] rounded-full
                  bg-[radial-gradient(circle,oklch(0.75_0.16_310/0.25),transparent_60%)]
                  blur-3xl animate-orb-drift-slow" />
  {/* Grain to prevent banding */}
  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
       style={{ backgroundImage: "url('/grain.png')" }} />
</div>
```

---

## Watch-outs

- **Don't use generic Tailwind `bg-gradient-to-br from-purple-500 to-pink-500`.** That's the AI-template tell. Use OKLCH custom colors or radial gradients only.
- **Don't blur everything.** Glass needs contrast. There must be sharp text and crisp UI inside the blur.
- **Don't use Inter as display.** Inter as body is fine. For display use Geist or PP Neue Montreal.
- **Don't make every card glass.** One glass layer is luxe; everything-glass is a hall of mirrors.
- **Never neon-bright greens or yellows.** Stay in the violet→blue→cyan corridor, or rose→magenta. One axis only.

---

## When NOT to use this archetype

- Local services (plumber, restaurant, retail) — feels alien
- Children's products — too cold
- Anything earnest/handmade — feels corporate
- Heavy-text editorial content — blur fights legibility
- Print-cross-over brands — needs warmth this lacks
