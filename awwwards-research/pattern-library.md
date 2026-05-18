# Pattern Library — Premium Web Patterns 2026

A taxonomy of recurring patterns observed on premium sites. Use as a vocabulary for describing direction and as a reference for implementation. Not a copy-and-paste collection.

## Layout patterns

### Asymmetric hero
The dominant hero pattern on premium 2025-2026 sites. Variants:

- **Title left, image right** (60/40 or 70/30 split).
- **Title oversized, image as background bleed.**
- **Title with one word in different face/color, image as side accent.**
- **Title with floating UI fragments** (used by Linear, Notion).

Avoid: centered hero with title/subtitle/button stack (too generic).

### Bento grid
6-12 cells in asymmetric grid, each showing a different feature/aspect.

- Cell sizes: typically 2×2, 1×2, 2×1 mixed.
- Cell content variety: type, screenshot, chart, 3D, video.
- Hover: subtle (color shift, content swap, tilt).
- Spacing: 8-16px gap.

Currently aging — still works but no longer surprising.

### Alternating slabs
Full-width sections alternating left/right alignment of content vs imagery.

```
Section 1: [Heading + copy] | [Image]
Section 2: [Image]          | [Heading + copy]
Section 3: [Heading + copy] | [Image]
```

Slow, editorial. Works for product pages, services pages, case studies.

### Editorial three-column
Three columns of long-form content, magazine-style. Used by The New Yorker, Are.na, some agency content pages.

- Each column ~70 characters wide.
- Justified or left-aligned.
- Drop caps optional.
- Sparse imagery.

### Marquee text band
Horizontally scrolling text strip. Often used between sections.

- Continuous scroll, slow speed (60-90 seconds per loop).
- Massive type (200-400px on desktop).
- Color contrast with adjacent sections.
- Can be interactive (hover to slow, click to pin).

### Scroll-pinned section
A section that locks while content inside scrolls horizontally or animates.

- Tech: GSAP ScrollTrigger with pin.
- Use case: feature reveal sequence, before/after comparisons, step-by-step process.
- Risk: breaks normal scroll expectation, use sparingly.

### Full-bleed media + off-set type
Image or video fills viewport, headline overlay is intentionally off-center.

- Type position: bottom-left, bottom-right, top-right common.
- Type color: contrasts with image or uses mix-blend-mode.
- Spacing from edge: generous, often 80-120px.

### Stacked image grid
4-9 images in a grid, large, scrollable. Used on lookbook pages, portfolio overviews.

- Equal sizing, generous gap.
- Often paired with a sidebar of metadata.
- Click to expand into full-screen detail.

## Hero variations

### The single-word headline
A single oversized word, with context below.

```
DISCOVER.
[small sub: A new way to manage your fiduciary practice.]
```

- Word at 200-400px desktop.
- Sub at standard body size, restrained.
- Bold positioning bet — must be a confident word.

### The italic accent
Headline with one word in italic display, the rest in sans body.

```
A platform designed for *clarity*.
```

(Asterisks = italic.)

- The italic word is the emotional anchor.
- Often in serif italic when body is sans.
- Common with Editorial New, Instrument Serif.

### The blanks-in-headline
Hero headline with intentional gaps that get filled by rotating content.

```
The [new way / fastest way / only way] to build websites.
```

- Common in B2B SaaS.
- Risk: feels gimmicky if rotation is too fast.

### The two-stack
Two equal-weight lines, almost like a couplet.

```
Build with intent.
Ship with confidence.
```

- Used by tech brands a lot.
- Rhythm matters — second line should pay off the first.

### The manifesto
Long-form first-person statement as hero.

```
We believe most websites are noise.
We make ones that matter.
Studios in Lausanne and Paris.
```

- 3-5 lines.
- Works for agencies and opinionated brands.
- Risk: too earnest if not specific.

## Component patterns

### The "feature with screenshot" block
Standard SaaS feature explanation.

```
[Heading]              [Product
[Sub heading]           screenshot]
[Body paragraph]
[Optional link →]
```

Variations:
- Screenshot has subtle 3D tilt (rotateY 5deg).
- Screenshot is a video loop.
- Screenshot has callout annotations.
- Screenshot has parallax on scroll.

### The metric block
Number + label, used for social proof.

```
10,000 +
teams using daily

47 M
tasks completed

99.99 %
uptime SLA
```

- Number at display size, label small.
- Tabular numerals.
- Sometimes animated counter on scroll (use sparingly).

### The testimonial card
Quote + person + role + company logo.

```
"This is the first tool that
actually adapts to how we work."

[Photo] Jamie Chen
        Head of Engineering, Acme

        [Acme logo]
```

- Photo: real headshot, not stock.
- Quote: 1-2 sentences, specific.
- Often paired in 2 or 3 across.

### The pricing card
Tier, price, features list, CTA.

```
┌─────────────────┐
│ STARTER         │
│                 │
│ CHF 9 /month    │
│                 │
│ ✓ Feature       │
│ ✓ Feature       │
│ ✓ Feature       │
│ — Feature       │
│                 │
│ [Get started]   │
└─────────────────┘
```

Variations:
- "Most popular" highlight on one tier.
- Annual/monthly toggle above.
- Enterprise tier with "Contact us" instead of price.

### The FAQ accordion
Question + collapsible answer.

```
┌─────────────────────────┐
│ Can I export my data? + │
└─────────────────────────┘

Click expands:
┌─────────────────────────┐
│ Can I export my data? − │
│                         │
│ Yes, at any time.       │
│ See our export docs.    │
└─────────────────────────┘
```

- One open at a time (vs. multiple) is a UX decision; one-at-a-time is calmer.
- Plus/minus icons preferred over arrows.
- Inline link to deeper docs.

### The "trusted by" logo strip
Customer logos, monochrome, single line.

```
[logo] [logo] [logo] [logo] [logo] [logo] [logo]
```

- Monochrome (gray or single-color tint).
- Evenly sized.
- 6-10 logos max.
- Often labeled "Trusted by teams at" or similar (cliché but functional).

Better alternative: name a single customer with a specific quote.

## Interaction patterns

### Magnetic button
Button that subtly follows cursor proximity.

- Range: 20-40px from button center.
- Translation: 4-8px max.
- Easing: smooth, non-bouncy.
- Tech: GSAP, vanilla JS, or Framer Motion.

```js
useEffect(() => {
  const button = ref.current;
  const handleMove = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  // ...
}, []);
```

### Custom cursor
Replace default cursor with custom shape, often expanding on hoverable elements.

- Variants: dot, ring, blob, text "click", arrow.
- Always provide a fallback (no cursor on touch devices).
- Often paired with magnetic buttons.

Use sparingly — only on portfolio/agency sites where it's part of the identity.

### Scroll-driven reveal
Elements fade/slide in as they enter viewport.

- Trigger: typically when element is 20-30% in view.
- Animation: opacity 0→1, translate 20-40px → 0.
- Duration: 600-1000ms.
- Easing: ease-out or custom cubic-bezier.
- Stagger: 80-150ms between siblings.

Pattern is now AI-default — use restraint, vary the animations across the page.

### Image hover with reveal
Hovering an image reveals second image, color, or caption.

Variants:
- Image swap to second photo (most common).
- Image color shift (grayscale → color, or vice versa).
- Image scale-up subtly (1.0 → 1.03).
- Caption overlay slides in from bottom.
- Cursor changes to "View" text.

### Marquee on hover pause
Auto-scrolling text band that slows or pauses on hover.

- Speed change: instant or eased over 300ms.
- Effect: lets users read passing text.

### Scroll-driven horizontal pin
Section pins vertically while content scrolls horizontally inside.

- Tech: GSAP ScrollTrigger with `pin: true` and `scrub: true`.
- Use for: process steps, image galleries, before/after.

```js
gsap.to(".horizontalScroll", {
  x: () => -(scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".section",
    pin: true,
    scrub: 1,
    end: () => `+=${scrollWidth - innerWidth}`,
  },
});
```

### Sticky element on scroll
Element pins to side as content scrolls past.

- Common for: sidebar in PDP, table of contents in long articles.
- Sticky behavior should release at end of parent section.
- Use CSS `position: sticky` first, JS only if needed.

## Motion patterns

### The "first impression" timeline
A choreographed sequence on initial page load.

- Logo or wordmark fades in (300ms).
- Nav items fade in with stagger (50ms each).
- Hero headline reveals (clip-path or character-by-character).
- Hero image/video fades in.
- Total duration: 1.5-2.5 seconds.

Used on premium agency and editorial sites. Tech: GSAP timeline.

### Page transitions
Smooth transitions between routes instead of hard reload.

- Common in Next.js with Framer Motion or GSAP.
- Patterns: fade through black, full-page wipe, content blur.
- Duration: 400-800ms.

### Letter-by-letter reveal
Headline characters animate in one by one.

```js
// Split text into chars, animate each:
gsap.from(".char", {
  opacity: 0,
  y: 20,
  stagger: 0.02,
  duration: 0.6,
  ease: "power2.out",
});
```

Use sparingly — once per page max.

### Shader text distortion
WebGL distortion on text on hover.

- Tech: react-three-fiber with custom shader.
- Effect: ripple, displace, waver.
- Required: shader engineer or pre-built library (drei, etc).

Premium agency signature — overkill for most projects.

### Mouse-follow gradient
Background gradient that follows cursor position.

```css
.hero {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    var(--accent),
    transparent
  );
}
```

Subtle, fast to implement, adds liveness without weight.

## Texture and detail patterns

### Grain noise overlay
SVG or PNG grain texture over surfaces.

- Opacity: 0.02-0.06.
- Blend mode: overlay or soft-light.
- Adds film-grain quality, breaks digital sterility.

```css
.surface::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/grain.svg');
  opacity: 0.03;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Hairline rules
1px lines separating content sections.

- Color: low-chroma, slightly visible against surface.
- Length: full width, or contained to content measure.
- Used heavily in editorial designs.

### Letter-spacing in small caps
Section labels in small caps with positive letter-spacing.

```css
.section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--ink-tertiary);
}
```

Used to label small caps section markers above headlines.

### The drop cap
First letter of a paragraph at oversized size.

```css
.editorial p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 5rem;
  line-height: 0.8;
  float: left;
  margin: 0.1rem 0.5rem 0 0;
  color: var(--accent);
}
```

Editorial signature — use on long-form, not on short copy.

## Anti-patterns currently aging out

- **Centered text-only hero with three-button CTA stack.** Generic SaaS template.
- **Three-column "Why us" with icon + heading + paragraph.** SaaS default.
- **"Trusted by 10,000+ teams" without naming any.** Empty claim.
- **Gradient mesh hero with purple-pink-blue.** 2022 peak.
- **Floating chat widget on luxury or editorial sites.** Kills register.
- **Cookie banner covering bottom 30% of viewport.** Aggressive.
- **Newsletter modal on first page load.** Hostile.
- **Scrolling stat counters ("1,000+ projects").** Cringe.
- **Custom cursor on a corporate B2B site.** Doesn't earn it.
- **Lenis smooth scroll on a 3-section landing page.** Adds nothing.
- **Bento grid as default feature layout.** Now expected, no longer differentiating.

## Patterns to watch (emerging in 2026)

- **CSS scroll-driven animations** replacing some GSAP use cases.
- **View transitions API** for page-to-page transitions.
- **Container queries** enabling more responsive component design.
- **CSS color-mix() and color-contrast()** for dynamic theming.
- **3D CSS transforms** for tilt and depth without WebGL.
- **AI-generated imagery** — still cheap-feeling for premium, but maturing fast.

Revisit this list quarterly. Web design moves fast.
