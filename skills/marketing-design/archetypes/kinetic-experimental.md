# Archetype — Kinetic Experimental

For digital agencies, motion studios, music/film products, gaming, anything where the *site itself* is the proof of skill. The Active Theory / Resn / Lusion / makemepulse lineage.

The vibe is **a tech demo disguised as a website**. WebGL hero, custom shaders, distortion on scroll, sound design, custom cursor that does things. The visitor leaves saying "what the hell was that, I want to work with them."

**Reference winners on Awwwards using this aesthetic:**
- Floema (May 13, 2026 SOTD)
- XOX (May 12, 2026 SOTD)
- Oryzo AI by Lusion (May 13, 2026)
- Detroit Paris (Apr 27, 2026)
- Ruinart (Apr 22, 2026)
- makemepulse.com itself
- Most "Experimental" category winners on Awwwards

---

## Token preset

```css
:root {
  /* Surface — deep or off-white. Often switches mid-scroll. */
  --background: oklch(0.08 0.005 270);
  --surface-1: oklch(0.08 0.005 270);
  --surface-2: oklch(0.12 0.008 270);
  --surface-canvas: transparent;                /* WebGL behind */

  /* Foreground — high contrast */
  --foreground: oklch(0.98 0.003 270);
  --foreground-2: oklch(0.75 0.008 270);
  --foreground-3: oklch(0.5 0.01 270);

  /* Borders — used as construction lines */
  --border: oklch(0.25 0.01 270);
  --border-subtle: oklch(0.18 0.008 270);

  /* Accent — vivid, often gradient-able */
  --accent: oklch(0.75 0.22 75);                /* electric chartreuse */
  /* alternates: */
  /* --accent: oklch(0.7 0.28 25);              */ /* acid orange */
  /* --accent: oklch(0.7 0.25 320);             */ /* hot pink */
  /* --accent-gradient: linear-gradient(...);   */ /* hue rotation */

  /* Typography */
  --font-display: 'PP Editorial New', 'PP Neue Montreal', 'Druk', sans-serif;
  --font-sans: 'PP Neue Montreal', 'Founders Grotesk', 'Aeonik', sans-serif;
  --font-mono: 'PP Fraktion Mono', 'GT America Mono', monospace;
  --font-experimental: 'PP Editorial New', serif; /* italic display moments */

  /* Radius — minimal, deliberate */
  --radius-md: 0;
  --radius-lg: 0;
  --card-radius: 0;
  --btn-radius: 999px;                          /* pills as one exception */

  /* Shadow — usually none; rely on canvas lighting */
  --shadow-md: none;

  /* Section spacing — pinned sections common */
  --section-py-md: 0;                           /* often 100vh sections */
  --section-py-lg: 0;
}
```

---

## Typography rules

- **Mix display serif (italic) + bold sans for tension.** "We make *unforgettable* digital experiences."
- **Type kinetic on scroll** — characters reshape, distort, peel.
- **Hero often takes full screen with 6–8vw type.**
- **Mono used for technical metadata** — coordinates, version, frame counters, "REC ●".
- **Variable fonts where weight/width animate.**
- **Custom letterforms commissioned** — at this tier, you can afford it.

---

## Layout signatures

- **WebGL canvas full-screen behind everything,** content layered above.
- **Pinned sections with scroll-scrubbed animation** — 100vh+ scroll, content stays, visual transforms.
- **Custom cursor — large, blends, snaps to interactive elements,** changes on hover state.
- **Page transitions full-screen** — distort/peel/shatter the previous page into the next.
- **Sound design** — subtle UI hover sounds, ambient bed, scroll-driven audio. Toggleable.
- **Loader screen with personality** — number counter, distorted logo, custom typography moment.
- **Cursor-following 3D elements** — meshes that lerp toward mouse position.

---

## Motion language

- **Everything moves, but with intention.** Not "everything has a scroll animation," but "every element has a *reason* it moves."
- **Easing: custom curves per element.** Soft for ambient, sharp for impact.
- **Spring physics for cursor and draggables** (real spring math, not bouncy CSS).
- **Scroll velocity affects everything** — fast scroll causes more distortion, slow scroll = subtle drift.
- **GSAP + ScrollTrigger + ScrollSmoother + custom shaders.**
- **Three.js / OGL / Lygia** for shader work.
- **Lenis** for smooth scroll baseline.
- **Reduced motion: replace with static screenshots of canvas snapshots, fade-only.**

---

## Components spec

### Hero with canvas backdrop
```tsx
<section className="relative h-screen w-full overflow-hidden bg-background">
  {/* WebGL canvas */}
  <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

  {/* Grid overlay (subtle) */}
  <div aria-hidden className="absolute inset-0 pointer-events-none
                              [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                              [background-size:80px_80px]" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-between p-8">
    <header className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-wider text-foreground-3">
      <span>● Studio / 2026</span>
      <span>Frame 0124 / 0240</span>
    </header>

    <h1 className="font-display text-[clamp(48px,11vw,200px)] leading-[0.9] tracking-[-0.04em] mix-blend-difference">
      We make <em className="font-experimental italic">unforgettable</em><br/>
      digital experiences.
    </h1>

    <footer className="flex items-end justify-between font-mono text-[11px] uppercase tracking-wider text-foreground-3">
      <span>Scroll ↓</span>
      <span>Sound on</span>
    </footer>
  </div>
</section>
```

### Custom cursor
```tsx
// Spring-followed cursor with state-based morph
<div
  ref={cursorRef}
  className="
    pointer-events-none fixed top-0 left-0 z-[100]
    w-8 h-8 -ml-4 -mt-4 rounded-full
    border border-foreground bg-foreground/5 backdrop-blur-md
    transition-[width,height,margin,background] duration-300
    data-[state=hover]:w-24 data-[state=hover]:h-24 data-[state=hover]:-ml-12 data-[state=hover]:-mt-12
    data-[state=hover]:bg-foreground data-[state=hover]:border-foreground
    mix-blend-difference
  "
/>
```

### Pinned scroll section
```tsx
// Trigger pinning with GSAP ScrollTrigger
useGSAP(() => {
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      // Drive canvas/transform via self.progress (0→1)
    }
  });
}, []);
```

---

## Watch-outs

- **Don't add WebGL for the sake of WebGL.** If the shader doesn't reinforce the brand, cut it. Visitors should remember the *idea*, not "that cool 3D blob."
- **Performance is the brief.** This aesthetic on a site that drops to 30fps is worse than no motion. Budget: 60fps on mid-range mobile.
- **Don't pin every section.** Two or three pinned moments per page is the max. Beyond that it's exhausting.
- **Don't loop ambient sound without a clear toggle.** Always default-off, prominent enable.
- **Custom cursor breaks accessibility unless done right.** Native cursor visible, custom layered. Disable on touch.
- **Don't use Three.js if a Canvas2D or CSS gradient would do.** The cost of the canvas/shader has to be earned.
- **Mobile fallbacks are non-negotiable.** WebGL hero on desktop → static image hero on mobile. No exception.

---

## Required tech

- **GSAP** (with ScrollTrigger, ScrollSmoother) — license to use SmoothScroller is now free under GSAP 3.13+
- **Three.js** OR **OGL** (smaller, often preferred for tight builds) OR **Curtains.js** (for image distortion specifically)
- **Lenis** for smooth scroll
- **Lygia** for shader utilities (or raw GLSL)
- **Tone.js** if sound design is involved

---

## When NOT to use this archetype

- B2B SaaS conversion landing pages (kills conversion)
- Anything where users need to find info fast
- Government, healthcare, finance
- Local services
- Real estate (Greg — never use this on RealEstimate, BrickInvest, or Edirex)

---

## When this IS the right call

- Agency portfolio when motion design IS the service
- Album launch site
- Film festival site
- Gaming product or studio
- Single-purpose art piece commissioned by a brand
- Awwwards-worthy showcase for the agency itself
