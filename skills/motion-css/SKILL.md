---
name: motion-css
description: CSS animations, transitions, View Transitions API, Framer Motion (motion.dev), and lightweight motion patterns. Use when you need motion that doesn't require GSAP — micro-interactions, hover states, page transitions, layout animations. Always prefer the lightest tool that solves the problem. Reach for GSAP only when CSS / Framer Motion can't do it.
---

# Motion with CSS (and lightweight libraries)

Not every animation needs GSAP. Many of the best motion moments on the web are 4 lines of CSS. This skill covers the lighter end of the motion spectrum.

**Decision tree:**

| Task | Tool |
|---|---|
| Button hover, focus ring fade | CSS `transition` |
| Scroll-driven reveal (simple fade-up) | CSS animation + IntersectionObserver, or `animation-timeline: scroll()` |
| Layout animation (item rearranges) | Framer Motion (`motion.dev`) `layout` |
| Page transition between routes | View Transitions API |
| Complex sequenced timeline | GSAP |
| Scroll-pinned scrubbing through multiple states | GSAP ScrollTrigger |
| Character-by-character text reveal | GSAP + SplitText |

---

## CSS transitions — the workhorse

Every interactive element has at least one transition. Without them, the UI feels broken.

```css
.button {
  background: var(--accent);
  transition:
    background 200ms cubic-bezier(0.32, 0.72, 0, 1),
    transform 200ms cubic-bezier(0.32, 0.72, 0, 1),
    box-shadow 200ms cubic-bezier(0.32, 0.72, 0, 1);
}

.button:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px -2px rgba(0,0,0,0.1);
}

.button:active {
  transform: translateY(0);
  transition-duration: 75ms;
}
```

### Property-specific durations

Different properties want different speeds. Don't blanket `transition: all 200ms`.

```css
.card {
  transition:
    transform 300ms cubic-bezier(0.32, 0.72, 0, 1),
    box-shadow 400ms cubic-bezier(0.32, 0.72, 0, 1),
    border-color 200ms ease-out;
}
```

### Easing reference (CSS)

```css
/* House easings */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);            /* general purpose */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);             /* dramatic ease-out */
--ease-spring: cubic-bezier(0.32, 0.72, 0, 1);              /* Vercel-house */
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);        /* symmetric */
--ease-back-out: cubic-bezier(0.34, 1.56, 0.64, 1);         /* overshoot */
--ease-anticipate: cubic-bezier(0.68, -0.55, 0.27, 1.55);   /* overshoot both ends */
```

### What to avoid
- `transition: all` — accidentally animates properties you didn't intend.
- `transition-duration` > 500ms for interactive feedback. Use for hero reveals, not button hovers.
- Animating `width`/`height`. Use `transform: scale` instead.

---

## CSS keyframe animations

For self-running animations: marquees, loaders, ambient orbs.

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(8%, -5%); }
  66% { transform: translate(-5%, 6%); }
}

.orb {
  animation: orb-drift 25s ease-in-out infinite;
}
```

---

## Scroll-driven animations (modern CSS)

`animation-timeline` is widely supported in Chrome / Edge as of 2024-25, polyfillable elsewhere. No JS required.

```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: reveal linear both;
  animation-timeline: view();           /* tied to element entering viewport */
  animation-range: entry 0% cover 30%;
}
```

For broader browser support, fall back to IntersectionObserver:

```tsx
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible');
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
```

```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 700ms, transform 700ms; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```

---

## Framer Motion / motion.dev

For React projects, Framer Motion (now branded `motion.dev`) is the best tool for:
- Layout animations (FLIP technique built-in)
- Drag interactions
- Gestures (hover, tap, focus) with built-in spring physics
- Mounting / unmounting animations (`AnimatePresence`)

### Mount/unmount

```tsx
import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
    >
      …
    </motion.div>
  )}
</AnimatePresence>
```

### Layout animations (best feature)

```tsx
// List items animate when reordered, added, or removed — no extra code
<motion.ul layout>
  {items.map(item => (
    <motion.li
      key={item.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.label}
    </motion.li>
  ))}
</motion.ul>
```

### Gestures with spring

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
>
  Click me
</motion.button>
```

### Shared layout transitions (between routes / components)

```tsx
<motion.div layoutId="hero-image">…</motion.div>
// On another page:
<motion.div layoutId="hero-image">…</motion.div>
// Element will animate smoothly between positions.
```

---

## View Transitions API

The browser-native way to animate between page states or routes. Especially powerful in Next.js App Router with View Transitions enabled.

### Same-document transition

```ts
if (document.startViewTransition) {
  document.startViewTransition(() => {
    // Mutate the DOM here — e.g. change route, swap content
    setFilter('archived');
  });
}
```

### Cross-document (Chrome 126+)

In Next.js, opt-in via experimental flag, or use the `next-view-transitions` library.

### Style transitions

```css
::view-transition-old(root) { animation: fade-out 300ms ease-out forwards; }
::view-transition-new(root) { animation: fade-in 300ms ease-out forwards; }

::view-transition-old(hero-image),
::view-transition-new(hero-image) {
  animation-duration: 500ms;
  animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}

.hero-image { view-transition-name: hero-image; }
```

Browsers without support gracefully degrade to instant transitions.

---

## Reduced motion

Honor `prefers-reduced-motion` always:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This blanket rule is a strong start. For specific cases, you can override:

```css
.essential-feedback {
  /* Even in reduced motion, keep this short transition */
  transition: opacity 100ms !important;
}
```

In JS (Framer Motion):
```tsx
import { useReducedMotion } from 'motion/react';
const shouldReduce = useReducedMotion();
const transition = shouldReduce ? { duration: 0 } : { duration: 0.4 };
```

---

## Pattern library (CSS-only)

### 1. Hover lift card
```css
.card {
  transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1),
              box-shadow 350ms cubic-bezier(0.32, 0.72, 0, 1);
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px rgba(0,0,0,0.12);
}
```

### 2. Underline grow on link
```css
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  inset: auto 0 -2px 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 400ms cubic-bezier(0.32, 0.72, 0, 1);
}
.link:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}
```

### 3. Pulse loading indicator
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.skeleton { animation: pulse 1.5s ease-in-out infinite; }
```

### 4. Spotlight follow (cursor-based)
```css
.spotlight {
  position: relative;
  background: var(--surface-2);
  overflow: hidden;
}
.spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    400px circle at var(--mx, 50%) var(--my, 50%),
    rgba(255,255,255,0.08),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 300ms;
}
.spotlight:hover::before { opacity: 1; }
```
```tsx
onMouseMove={(e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}}
```

### 5. Marquee with pause-on-hover
```css
.marquee:hover .marquee-track { animation-play-state: paused; }
```

### 6. Stagger animation with custom property delays
```tsx
{items.map((item, i) => (
  <li key={item.id} style={{ '--i': i } as React.CSSProperties} className="reveal">{item}</li>
))}
```
```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: reveal 600ms cubic-bezier(0.32, 0.72, 0, 1) both;
  animation-delay: calc(var(--i, 0) * 80ms);
}
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}
```

---

## Performance

- **Animate `transform` and `opacity` only** for 60fps.
- **Avoid animating shadow, filter, border-radius** at full property — they trigger paint.
- **Use `will-change` sparingly**, remove after animation completes.
- **Reduce animation count on mobile** — check viewport size.
- **Use `content-visibility: auto`** for off-screen sections.

---

## Decision: when CSS vs Framer Motion vs GSAP

| Case | Pick |
|---|---|
| Static hover/focus on buttons, links | CSS transition |
| Simple fade-up scroll reveal | CSS + IntersectionObserver, or `animation-timeline` |
| Modal/popover enter/exit | Framer Motion `AnimatePresence` |
| List reorder, drag-and-drop animations | Framer Motion `layout` |
| Page transition (same site) | View Transitions API |
| Hero with character reveal + scroll-pin + scrub | GSAP + ScrollTrigger + SplitText |
| Complex synchronized timeline | GSAP Timeline |
| Marquee, loader, ambient loop | CSS keyframes |

**Heuristic:** start with CSS. Reach for Framer Motion when CSS can't express it cleanly. Reach for GSAP only when Framer Motion can't either.
