# Awwwards Research — Cross-Category Calibration

This folder contains research distilled from Awwwards Sites of the Day, Site of the Month, and Honors over Q4 2025 — Q2 2026. The goal is to give Claude a calibrated reference for "what currently reads as premium on the web" so it can match or deviate from current standards with intent.

This is not a list to copy. It's a baseline to be aware of.

## Files

- **`sotd-2026.md`** — Curated list of recent Site of the Day winners with notes on what makes each distinctive.
- **`font-pairings.md`** — Typeface combinations observed across premium sites in 2025-2026.
- **`pattern-library.md`** — Recurring layout patterns, motion idioms, and interaction details from current premium work.

## How Claude should use this research

1. **For calibration, not imitation.** Knowing that 60% of recent Awwwards winners use heavy WebGL helps you decide whether to use WebGL for a given client — not to default to it.
2. **To recognize when a brief is dated.** If a client asks for something that was the trend in 2022 (purple gradient mesh, glassmorphism), this research helps you say "here's what currently reads premium".
3. **To inform deviation.** If you know what's "expected" in 2026, you can deviate from it with intent.

## Recurring observations (May 2026)

**Tech stack convergence:**
- Next.js 14/15 + React Server Components is the dominant framework.
- Three.js / React Three Fiber for WebGL.
- GSAP with ScrollTrigger for motion (with rare exceptions using Framer Motion).
- Lenis for smooth scroll.
- Tailwind for styling (in 70%+ of cases).
- Vercel for hosting (>50%).

**Typography stack:**
- Geist Sans (Vercel) has become a default for tech/SaaS.
- Aeonik remains the premium agency default for body.
- Editorial New, GT Sectra, Canela, ABC Diatype Mono are recurring display faces.
- Custom typefaces remain the differentiator — most SOTM winners commission or license bespoke type.

**Color trends:**
- Cream / warm white / paper surfaces have replaced pure white on premium sites.
- Near-black warm inks (slightly red, oklch 12-18% chroma 0.005-0.015) replace pure black.
- One bold accent color per project, often saturated and confident.
- Gradient meshes are out (peaked 2022-2023).
- Solid color blocks and color-as-typography are in.

**Motion language:**
- Smooth scroll (Lenis) is ubiquitous.
- Magnetic cursor / magnetic buttons on agency sites.
- Scroll-pinned sections with horizontal scroll inside.
- WebGL distortion shaders on text and images.
- Subtle 3D tilt on cards (rotateX 5-8deg max).

**Layout patterns:**
- Asymmetric heroes dominate.
- Bento grids ubiquitous but starting to age.
- Editorial layouts with large measure and breathing room.
- Marquee scrolling text bands.
- Full-bleed media with off-set type.

**Anti-patterns currently aging out:**
- Three-column feature sections with icon + heading + paragraph.
- Centered hero with title/subtitle/button stack.
- Gradient hero backgrounds.
- Glassmorphism as primary decoration.
- "Trusted by" logo strips.

## Source attribution

Awwwards (awwwards.com) is the primary source. Sites referenced are publicly visible Site of the Day, Site of the Month, and Honors winners. This research summarizes observable patterns and does not reproduce design assets.

The research is a snapshot. The web design field moves quickly; revisit and update quarterly.
