---
name: motion-gsap
description: Patterns and recipes for using GSAP (GreenSock Animation Platform) in React/Next.js projects, covering ScrollTrigger, Timeline, useGSAP cleanup, SplitText, ScrollSmoother (Lenis alternative), and performance patterns. Use when building scroll-driven sites, pinned sections, hero animations, magnetic buttons, character-level text reveals, or any complex motion sequence. GSAP 3.13+ is now free for commercial use including all official plugins.
---

# Motion with GSAP

GSAP became fully free in April 2024 — all plugins (ScrollTrigger, ScrollSmoother, SplitText, MorphSVG, Draggable, MotionPath) are now MIT-licensed for commercial use. This unlocks the toolset behind 90% of Awwwards-tier motion work.

This skill assumes you're building in **React / Next.js with TypeScript**. The patterns below work in plain JS too, but the cleanup hooks (`useGSAP`) are React-specific.

---

## Setup

### Install
```bash
npm install gsap @gsap/react
```

### Register plugins where used
```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
```

Only register the plugins you actually use. Each one adds bundle weight.

---

## The cardinal rule: useGSAP

**Always use `useGSAP` from `@gsap/react`. Never write GSAP inside `useEffect`.**

It handles cleanup, dependency tracking, and StrictMode double-mounting correctly. Manually-written `useEffect` GSAP code leaks animations and breaks dev mode.

```tsx
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-title', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <h1 className="hero-title">Hello</h1>
    </div>
  );
}
```

The `scope` makes selectors safe — `.hero-title` only matches inside `container`, not the whole document.

---

## Timeline basics

A timeline is a sequence. Each animation runs at a *position*, default end-of-previous.

```ts
const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

tl.from('.kicker', { y: 20, opacity: 0 })
  .from('.headline', { y: 40, opacity: 0 }, '-=0.4')   // overlap by 0.4s
  .from('.subhead', { y: 20, opacity: 0 }, '-=0.5')
  .from('.cta', { y: 16, opacity: 0, scale: 0.96 }, '-=0.4');
```

### Position parameters
- `'+=0.5'` — 0.5s after previous ends
- `'-=0.5'` — overlap with previous by 0.5s
- `'<'` — start at the *same time* as previous
- `'<0.3'` — 0.3s after previous *started*
- `2.5` — at absolute time 2.5s
- `'mylabel'` — at named label (use `.addLabel('mylabel')`)

---

## ScrollTrigger essentials

```ts
useGSAP(() => {
  gsap.from('.fade-up', {
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.fade-up',
      start: 'top 80%',         // when top of element is at 80% of viewport (20% from bottom)
      end: 'top 20%',
      toggleActions: 'play none none none',  // play | pause | resume | reverse | restart | reset | complete | none
      // markers: true,         // dev only — shows start/end lines
    }
  });
}, { scope: container });
```

### `toggleActions` — the most-missed parameter

Four states: `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`. Use cases:

- **One-time reveal (most common):** `'play none none none'`
- **Reveal forward, reverse backward:** `'play none none reverse'`
- **Loop on every scroll-in:** `'restart pause restart pause'`
- **Pin/scrub (don't use toggleActions, use `scrub`):** see below

### Scrub — scroll-controlled animation

```ts
gsap.to('.hero-bg', {
  scale: 1.5,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,                  // 1 = smooth catch-up. true = instant. number = damping.
  }
});
```

### Pinning

```ts
ScrollTrigger.create({
  trigger: '.pinned-section',
  start: 'top top',
  end: '+=200%',                // pin for 2 viewport heights of scroll
  pin: true,
  pinSpacing: true,             // default true — adds padding to compensate
  scrub: 1,
  // onUpdate: (self) => { /* self.progress is 0→1 */ }
});
```

---

## Common recipes

### 1. Fade-up reveal stagger

```ts
useGSAP(() => {
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}, { scope: container });
```

### 2. Headline character reveal (with SplitText)

```ts
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

useGSAP(() => {
  const split = new SplitText('.headline', { type: 'chars,words,lines' });

  gsap.from(split.chars, {
    y: 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.02,
  });

  return () => split.revert();   // restore original HTML on cleanup
}, { scope: container });
```

### 3. Magnetic button

```tsx
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export function MagneticButton({ children }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    return () => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  });

  return <button ref={btnRef} className="…">{children}</button>;
}
```

### 4. Pinned section with scroll progression

```ts
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.pin-section',
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: 1,
    }
  });

  tl.to('.layer-1', { yPercent: -50 })
    .to('.layer-2', { opacity: 0, scale: 0.8 }, 0)         // simultaneous
    .from('.layer-3', { opacity: 0, y: 100 }, 0.5)         // halfway through
    .to('.layer-4', { rotation: 360 }, '>');
}, { scope: container });
```

### 5. Parallax (gentle)

```ts
useGSAP(() => {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.3');
    gsap.fromTo(el,
      { yPercent: 0 },
      {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  });
}, { scope: container });
```

### 6. Image clip-path reveal

```ts
useGSAP(() => {
  gsap.from('.image-reveal', {
    clipPath: 'inset(100% 0 0 0)',
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: { trigger: '.image-reveal', start: 'top 80%' },
  });
}, { scope: container });
```

### 7. Number counter

```ts
useGSAP(() => {
  gsap.from('.counter', {
    textContent: 0,
    duration: 2,
    ease: 'power1.out',
    snap: { textContent: 1 },
    scrollTrigger: { trigger: '.counter', start: 'top 80%' },
  });
}, { scope: container });
```

### 8. Marquee (infinite scroll)

```ts
useGSAP(() => {
  gsap.to('.marquee-track', {
    xPercent: -50,
    duration: 20,
    ease: 'none',
    repeat: -1,
  });
}, { scope: container });
```

Pair with `<div class="marquee-track">{content + content}</div>` (duplicate content).

### 9. Cursor follower with lerp

```tsx
useGSAP(() => {
  const cursor = cursorRef.current;
  if (!cursor) return;

  const pos = { x: 0, y: 0 };
  const mouse = { x: 0, y: 0 };

  const onMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  window.addEventListener('mousemove', onMove);

  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;
    gsap.set(cursor, { x: pos.x, y: pos.y });
  });

  return () => window.removeEventListener('mousemove', onMove);
});
```

### 10. Page transition (Next.js)

```tsx
// On route change: fade out, wait, navigate
const handleNavigate = async (href: string) => {
  await gsap.to(mainRef.current, { opacity: 0, y: 20, duration: 0.4, ease: 'power3.in' });
  router.push(href);
};

// On mount of new page: fade in
useGSAP(() => {
  gsap.from(mainRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' });
}, []);
```

---

## Performance

### Use `gsap.set` for initial state
Don't animate from 0 to start state. Set the start state synchronously and animate to end.

```ts
gsap.set('.hero-title', { y: 40, opacity: 0 });
gsap.to('.hero-title', { y: 0, opacity: 1, duration: 0.8 });
```

### Animate transforms, not layout
- `x, y, scale, rotation` → GPU-accelerated, smooth.
- `width, height, top, left` → triggers layout, janky.
- `opacity` → cheap.
- `filter: blur()` → expensive at high values.

### Force GPU layer for big elements
```css
.heavy { will-change: transform; }
```
Use sparingly — too many `will-change` actually hurts performance.

### Throttle scroll handlers (use ScrollTrigger, don't write your own)
ScrollTrigger uses the most efficient scroll listener available. If you find yourself writing `window.addEventListener('scroll', …)` for animations, use ScrollTrigger instead.

### Refresh ScrollTrigger after layout changes
If content loads asynchronously and layout shifts:
```ts
ScrollTrigger.refresh();
```

---

## ScrollSmoother (GSAP's smooth-scroll, now free)

Alternative to Lenis. Free since GSAP 3.13.

```ts
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollSmoother);

useGSAP(() => {
  ScrollSmoother.create({
    smooth: 1.2,
    effects: true,
    smoothTouch: 0.1,            // 0 = disabled on touch, recommended
  });
}, []);
```

HTML structure:
```html
<div id="smooth-wrapper">
  <div id="smooth-content">
    <!-- All your page content -->
  </div>
</div>
```

**Don't combine with Lenis.** Pick one.

---

## Reduced motion

ALWAYS respect `prefers-reduced-motion`. The user has asked for less motion. Honor that.

```ts
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  // Skip all the fancy stuff. Just show content instantly.
  gsap.set('.fade-up', { y: 0, opacity: 1 });
} else {
  // Full motion experience.
  gsap.from('.fade-up', { y: 24, opacity: 0, …  });
}
```

Or globally:
```ts
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  // All your animation code here — only runs when motion is OK
});
```

---

## Common mistakes

- **Forgetting `useGSAP` scope.** Leads to selectors hitting unrelated elements on subsequent pages.
- **Using `useEffect` instead of `useGSAP`.** Animations leak, fail in StrictMode.
- **Animating `width` / `height` instead of `scale`.** Janky on mobile.
- **Pinning without `pinSpacing`** considerations. Layout jumps.
- **Triggering ScrollTrigger on elements that don't exist yet.** Use `ScrollTrigger.refresh()` after async content.
- **Using GSAP for a 200ms button hover.** Overkill — use CSS transition.

---

## Easing cheatsheet

GSAP's named easings, in order of common use:

- `'power1.out'` → mild ease-out
- `'power2.out'` → moderate
- `'power3.out'` → strong (the house default for most reveals)
- `'power4.out'` → near-instant start, slow end
- `'expo.out'` → similar to power4
- `'circ.out'` → smooth, comes to a soft stop
- `'back.out(1.5)'` → overshoots slightly (use sparingly)
- `'elastic.out(1, 0.4)'` → bouncy (magnetic returns only)
- `'sine.inOut'` → gentle, used for loops
- `'none'` (or `'linear'`) → for scrubbed scroll, marquees

---

## See also

- `references/scrolltrigger-recipes.md` — extended ScrollTrigger patterns
- `references/timeline-patterns.md` — complex sequencing
- `references/react-cleanup.md` — deep dive on useGSAP gotchas
- `../motion-css/SKILL.md` — for simpler CSS-based motion (don't reach for GSAP for everything)
