# Archetype — Minimalist Editorial

For high-end personal portfolios, photographers, creative directors, single-product brands, art books, museum-quality content. The Susan Kare / Massimo Vignelli / Standard Procedure lineage.

The vibe is **a Swiss design book left open on a marble table**. Tiny type, vast whitespace, perfect grid, zero ornament. Restraint as luxury. Confidence to leave 80% of the page empty.

**Reference winners on Awwwards using this aesthetic:**
- Standard Procedure (May 9, 2026 SOTD)
- Many photographer portfolios (Photography category)
- Detroit Paris (Apr 27, 2026)
- Most Awwwards "Site of the Month" winners that aren't WebGL

---

## Token preset

```css
:root {
  /* Surface — paper white */
  --background: oklch(0.99 0 0);                /* or oklch(0.97 0.005 80) for warmth */
  --surface-1: oklch(0.99 0 0);
  --surface-2: oklch(0.99 0 0);                 /* no card differentiation */
  --surface-inset: oklch(0.97 0 0);

  /* Foreground — soft black, never pure */
  --foreground: oklch(0.2 0.005 250);
  --foreground-2: oklch(0.45 0.005 250);
  --foreground-3: oklch(0.65 0.005 250);
  --foreground-4: oklch(0.78 0.003 250);

  /* Borders — hairline, almost invisible */
  --border: oklch(0.92 0.003 250);
  --border-subtle: oklch(0.95 0.003 250);

  /* Accent — almost none. One hue, low saturation. */
  --accent: oklch(0.55 0.08 25);                /* muted terracotta */
  /* alternates: */
  /* --accent: oklch(0.4 0.06 250);             */ /* dusty navy */
  /* --accent: oklch(0.5 0.05 145);             */ /* sage */
  /* OR: no accent at all, just black/white */

  /* Typography */
  --font-display: 'GT Sectra', 'Newsreader', 'EB Garamond', serif;
  --font-sans: 'Aeonik', 'Suisse Int\'l', 'Neue Haas Grotesk', sans-serif;
  --font-serif-body: 'Newsreader', 'EB Garamond', 'Cardo', serif;
  --font-mono: 'GT America Mono', 'Berkeley Mono', monospace;

  /* Radius — zero or minimal */
  --radius-sm: 0;
  --radius-md: 0;
  --card-radius: 0;
  --btn-radius: 0;

  /* Shadow — none */
  --shadow-md: none;
  --card-shadow: none;

  /* Section spacing — abundant */
  --section-py-md: 8rem;
  --section-py-lg: 14rem;
  --section-py-xl: 20rem;
}
```

---

## Typography rules

- **Tiny body type — 14–15px max.** Generous leading (1.7–1.8). Confidence to make people lean in.
- **Display type is small too.** Hero headline often just 32–48px, not 100px. The size is in the *space around* the type, not the type itself.
- **Mix serif display + sans body** OR **sans throughout in a single weight**. Don't decorate.
- **All-caps used for labels at 11px** with wide tracking (0.15em).
- **Numbers preserved with tabular figures.**
- **Hyphenation enabled, justified text optional** (in long-form editorial sections).
- **Line length controlled** — max 60–65ch for body text, 45ch for poetry/quotes.

---

## Layout signatures

- **12-column grid, content in 4–6 cols.** Pages feel like book spreads.
- **Generous top/bottom padding** on every section — at least `12rem` between sections on desktop.
- **Numbered project list with discrete metadata** — "01 / Project Name / 2024 / Brand Identity."
- **Single image per "spread"** — full-bleed or in 6-column box, with caption in 2-col mono.
- **Image captions matter** — small mono text under every image, like a museum placard.
- **Sticky table of contents** in a side rail, mono, accent-color current item.
- **Footer is a long mono list,** not a CTA festival.

---

## Motion language

- **Almost no motion.** Static is the point.
- **Page transitions: simple cross-fade** at 300ms.
- **Scroll reveals: fade-in only (no translate),** 600ms ease-out.
- **Hover on links: opacity-60 transition only,** 200ms.
- **Optional: subtle Lenis smooth-scroll.**
- **Magnetic cursor effects — NO.** That's a different aesthetic.
- **WebGL — NO.** This is not that archetype.

---

## Components spec

### Link / Button
```tsx
// All buttons are styled links here
<a href="..." className="
  inline-flex items-center gap-3
  text-[14px] tracking-[-0.01em]
  border-b border-foreground/30
  pb-0.5
  transition-[border-color,opacity] duration-200
  hover:border-foreground hover:opacity-70
">
  Read project
  <span className="font-mono text-[11px] opacity-50">→</span>
</a>
```

### Image with caption
```tsx
<figure className="my-32">
  <img src="..." alt="..." className="w-full" />
  <figcaption className="mt-3 grid grid-cols-12 gap-4 font-mono text-[11px] uppercase tracking-wider text-foreground-3">
    <span className="col-span-2">Fig. 04</span>
    <span className="col-span-7">Photographed at the Bauhaus archive, 2025</span>
    <span className="col-span-3 text-right">© Studio Annas</span>
  </figcaption>
</figure>
```

### Project entry (numbered list)
```tsx
<a href="..." className="
  group grid grid-cols-12 gap-4 items-baseline py-8
  border-b border-border
  transition-colors duration-200 hover:border-foreground
">
  <span className="col-span-1 font-mono text-[11px] uppercase tracking-wider text-foreground-3">
    01
  </span>
  <h3 className="col-span-6 font-display text-[28px] tracking-[-0.02em] leading-[1.1]
                 transition-opacity duration-200 group-hover:opacity-60">
    Project Name
  </h3>
  <span className="col-span-3 font-mono text-[11px] uppercase tracking-wider text-foreground-3">
    Brand Identity
  </span>
  <span className="col-span-2 font-mono text-[11px] uppercase tracking-wider text-foreground-3 text-right">
    2025
  </span>
</a>
```

### Long-form editorial paragraph
```tsx
<div className="grid grid-cols-12 gap-4">
  <div className="col-start-3 col-span-7 font-serif-body text-[17px] leading-[1.75] text-foreground-2">
    <p className="mb-6">
      Lead paragraph with slightly more weight, set in serif body, no drop cap…
    </p>
    <p>Subsequent paragraphs flow naturally with proper indents on the first line if desired.</p>
  </div>
</div>
```

---

## Watch-outs

- **Don't add motion to feel "modern."** This aesthetic IS modern. Adding GSAP scroll-triggers cheapens it.
- **Don't add color "to liven it up."** The restraint is the value. Adding accent everywhere kills the aesthetic.
- **Don't make the type bigger to feel impactful.** The impact comes from *what surrounds the small type*. Hero at 36px in 1400px column = far more powerful than 120px hero.
- **Don't use Aeonik or GT America at default tracking.** They need to be tightened on display (-0.02 to -0.03em).
- **Avoid rounded buttons. Avoid drop shadows. Avoid icons in general** — text-only links are correct.
- **Don't use stock photography.** Commissioned only, or a single hero illustration, or no images.

---

## When NOT to use this archetype

- Conversion-heavy SaaS landing pages (too restrained for sales)
- E-commerce (people need product info dense, not airy)
- Local business websites (feels remote, intimidating)
- Anything that needs to convert mass-market traffic
- Real estate listings (Greg — wrong call for RealEstimate)
- Children's brands

---

## When this IS the right call

- Personal portfolio for a creative director
- Photographer's site
- Architect's monograph
- Limited-edition art book
- Single-product premium brand (one perfume, one bag)
- Museum or gallery
- Standard Procedure / Studio Sans Nom kind of brand
