# Creative Arsenal

A library of patterns to break the "AI template" default. Pull from this list when a section feels generic. Most of these come from analyzing 100+ Awwwards SOTD winners. Use them as *spices*, not as a recipe — overuse and the site becomes a circus.

---

## Section transitions

### 1. Hard color inversion
A section ends in light cream, the next starts in pure black. No fade, no transition — a hard cut, like a film edit.

```css
section.dark { background: var(--foreground); color: var(--background); }
section.light + section.dark { /* no transition needed */ }
```

### 2. Sticky reveal mask
Next section's content is "behind" the current section; on scroll, current section translates up to reveal it.

```tsx
<section className="sticky top-0 h-screen z-10 bg-background">{/* content */}</section>
<section className="relative z-20 bg-foreground text-background">{/* revealed */}</section>
```

### 3. Curved divider (handled with care)
SVG curve between sections. ONLY if your brand is organic/playful. NEVER on a B2B SaaS.

### 4. Marquee separator
A thin marquee strip between sections, mono uppercase, scrolling brand info / availability / contact.

```tsx
<div className="border-y border-border py-2 overflow-hidden bg-background">
  <div className="flex gap-8 animate-marquee whitespace-nowrap font-mono text-[12px] uppercase tracking-wider">
    {/* repeating brand info */}
  </div>
</div>
```

---

## Type treatments

### 5. Mixed weight + italic mid-sentence
`<h1>We build <em className="italic font-light">unforgettable</em> experiences.</h1>` — the italic single word recasts the sentence's emotion.

### 6. Hanging punctuation
For quotes especially, use `hanging-punctuation: first last;` to pull opening quotes outside the column.

### 7. Drop-cap that breaks the column
For editorial sections, a hand-set drop cap 5+ lines tall, breaking column rules.

```css
.drop-cap::first-letter {
  initial-letter: 4 3;
  font-family: var(--font-display);
  margin-right: 0.2em;
  color: var(--accent);
}
```

### 8. Variable-font scroll-driven weight
Text's font-weight increases as you scroll past. Requires variable font.

```css
.scroll-bold {
  font-variation-settings: 'wght' var(--scroll-weight, 400);
  transition: font-variation-settings 0.3s;
}
```

### 9. Character splitting (GSAP SplitText or CSS)
Each character gets its own animation timing — wave reveals, stagger fades, character-level hover.

### 10. Tabular numbers everywhere there's a number
```css
.numbers { font-variant-numeric: tabular-nums; }
```
Pricing, stats, timestamps, version numbers — always tabular. The little detail people don't name but always notice.

### 11. Ligatures and OpenType features
```css
.editorial {
  font-feature-settings: 'liga', 'dlig', 'salt';
}
```
Enables stylistic alternates, discretionary ligatures. Pulls quality up a notch.

### 12. Asymmetric line breaks with `<br/>` or `text-wrap: balance/pretty`
Don't let lines break randomly. Force visual rhythm.

```html
<h1 className="text-balance">
  Software that<br/>respects your time.
</h1>
```

---

## Color & atmosphere

### 13. Single accent, used 3 times max per viewport
Pick one accent. Use it on: one button, one link hover, one critical word in the headline. Stop.

### 14. Two-tone duotone images
Convert photography to a 2-color treatment matching brand. Adobe-easy, Photoshop or Tailwind.

```css
.duotone {
  filter: grayscale(1) sepia(1) hue-rotate(180deg) saturate(2);
  /* OR using SVG filter for precise duotone */
}
```

### 15. Grain overlay
4–8% opacity noise PNG over the whole site. Prevents the "too clean" feel. Essential for darks.

```css
body::after {
  content: '';
  position: fixed; inset: 0;
  pointer-events: none;
  background-image: url('/grain.png');
  opacity: 0.04;
  mix-blend-mode: overlay;
  z-index: 1;
}
```

### 16. Radial accent glow
ONE radial glow per page, behind hero. Use OKLCH custom, not Tailwind gradient.

```css
.hero-glow {
  background: radial-gradient(circle at 50% 30%, oklch(0.7 0.18 270 / 0.3), transparent 50%);
}
```

### 17. Mix-blend-mode for layered legibility
For text over imagery, use `mix-blend-mode: difference` to guarantee contrast.

```tsx
<h1 className="mix-blend-difference text-white">...</h1>
```

### 18. Print-style spot color
Use a single "spot" color treated like ink — full saturation, never gradient'd, never tinted. Carries through the whole brand.

---

## Layout patterns

### 19. Asymmetric grid breaks
Most of the page on a 12-col grid; one section deliberately breaks to a 7-col offset. Signals "this matters."

### 20. Sticky side rail
Table of contents or section labels sticky on left, content scrolls.

```tsx
<aside className="sticky top-24 h-fit col-span-2">
  <nav className="font-mono text-[11px] uppercase tracking-wider space-y-2">
    {sections.map(s => <a className={s.active ? 'text-foreground' : 'text-foreground-3'}>{s.label}</a>)}
  </nav>
</aside>
```

### 21. Numbered project lists with rich metadata
Each project entry is a wide row with: number, title, year, category, location, role. Not a card grid.

### 22. The hanging caption
Captions on images placed in the margin, mono small, aligned to image baseline.

### 23. Overlapping image and type
Display type sits partly behind/in front of imagery via `z-index` + negative margins.

### 24. Pull quotes set in display serif italic
Magazine technique. Big italic serif quote inset into a body text column.

### 25. Bento grid for features (uneven)
1 large + 2 medium + 2 small. NEVER a uniform 3x2 of identical cards.

### 26. Image-as-text mask
SVG `<text>` with `mask` or `clip-path` filled with image content.

---

## Motion & interaction

### 27. Magnetic buttons
Buttons that lerp toward cursor when nearby. Subtle — max 8px movement.

```tsx
// Custom hook
const magneticRef = useMagnetic({ strength: 0.3, radius: 100 });
<button ref={magneticRef}>Hover me</button>
```

### 28. Hover that reveals state in 3 stages
Stage 1: background tint at 50ms. Stage 2: text/icon move at 150ms. Stage 3: border or shadow ramp at 250ms.

### 29. Scroll-velocity-aware animations
The faster the user scrolls, the more the visual reacts. Implemented with Lenis + GSAP.

### 30. Mouse-following spotlight on cards
CSS custom properties + radial gradient. Cheap, always works.

```css
.spotlight-card {
  background:
    radial-gradient(circle at var(--mx, 50%) var(--my, 50%),
      rgba(255,255,255,0.06), transparent 30%),
    var(--surface-2);
}
```

```tsx
onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}}
```

### 31. Text reveal via clip-path wipe
Not fade-up. Mask-wipe from one side, like ink filling in.

```css
@keyframes wipe-in {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
```

### 32. Custom cursor that morphs by state
Default: small ring. Over button: larger circle. Over image: "VIEW" text. Over video: play icon.

### 33. Scroll-pinned section that animates through
GSAP ScrollTrigger pins for 2-3 viewports while content transforms (sequence reveal, zoom, color shift).

### 34. Inertia drag (horizontal galleries)
Drag with momentum, snap to children. Embla Carousel + free-scroll, or custom GSAP Draggable.

### 35. Letter-by-letter stagger on hero
GSAP SplitText, each character animates in. Max 80ms stagger or it feels slow.

### 36. Number counter for stats
Animate from 0 to target value as the stat enters viewport.

### 37. Cursor-trailing tooltip
Tooltip floats next to cursor, not anchored to element. Used on Awwwards-style portfolios over images.

### 38. Sound design hooks (toggleable)
Subtle UI sounds: hover ping, click thunk, page transition whoosh. Always default-off, toggle prominent.

### 39. Loading screen with personality
Number counter, glitched wordmark, percent loaded. 2–3 seconds max.

### 40. Page transition: distortion shader
Previous page warps/pixelates/peels as new one slides in. WebGL only.

---

## Imagery & media

### 41. Single hero image, full-bleed, slightly desaturated
One strong image. Not a slideshow. Not a video. Not a gradient.

### 42. Image distortion on scroll (Curtains.js / shader)
Image stretches or warps as it enters/exits viewport.

### 43. Cursor-driven image reveal
Hover reveals image through a circular cutout where the cursor is.

### 44. Sequential image flip on hover
Hover a project: a sequence of frames plays at low fps, like a flipbook.

### 45. Video looped at 4-second cut
Hero video edited to a 4-second loop, perfectly seamless, no obvious cut. Highly compressed.

### 46. SVG illustration that animates
Hand-drawn-feeling SVG that strokes in on scroll. Pair with editorial luxury or minimalist editorial.

---

## Microcopy treatments

### 47. Mono-prefixed labels
"`/* 01 — Strategy */`" or "`→ Available May 2026`" — code-like prefixes give technical confidence.

### 48. Numbered captions
"Fig. 03", "Edition 04", "Plate I" — print conventions translate.

### 49. Date stamps everywhere
Footer: "Last updated 12.05.2026 / 14:23 CET". Mono. Establishes "alive" feeling.

### 50. Pronouns and warmth strategically
"We don't build features. We build muscle memory." — Personal pronouns when humanizing, removed when authoritative.

### 51. Counter-intuitive metadata
"Reading time: 4 min — Coffee strength required: medium." Personality through data.

---

## Backgrounds

### 52. Animated SVG noise / dot grid (subtle)
Background dot grid drifts slowly. Opacity 0.05.

### 53. Static SVG cross-hatch
Tighter, more architectural feel. Editorial luxury archetype.

### 54. Animated mesh (Three.js / Curtains.js)
Liquid mesh shader. Kinetic experimental archetype only.

### 55. Paper texture for editorial archetypes
Subtle paper grain (PNG, 4-6% opacity, multiply blend).

---

## Footer creativity

### 56. Footer as big type
Footer is just `LET'S TALK` at 30vw size. Email link the only CTA.

### 57. Footer as long mono list
Sitemap, contact, social, credits — all set in mono small, multiple columns. Looks like a colophon.

### 58. Footer with live data
Current time in studio's timezone, weather, current sketch by founder. Personality.

```tsx
<div className="font-mono text-[11px] uppercase tracking-wider">
  Lausanne, CH — {currentTime} — Currently {weather}°
</div>
```

### 59. Footer with availability status
"● Available for projects starting Aug 2026" with a live green dot.

### 60. Footer = next project preview
Don't have a CTA-festival footer. Have a "next chapter" cliffhanger linking to the next page.

---

## The selection rule

> Don't reach into this arsenal until you have an *aesthetic direction* and an *intent*.
>
> Wrong: "Let's add a marquee + magnetic buttons + cursor follow because they look cool."
> Right: "The brand is loud, defiant. The marquee carries that. Magnetic buttons fit because they reward exploration. Custom cursor fits because the entire site is built to feel inhabited."
>
> Each spice you add must answer: *why this, and not absence?*
