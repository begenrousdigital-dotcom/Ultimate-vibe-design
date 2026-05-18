# Hero Paradigms

A hero section is the brand's first promise. Don't default to "centered headline + centered subhead + centered button + product screenshot." That's the AI-template hero. Below are 12 paradigms with worked code and the brief each is for.

Pick by **intent**, not by trend.

---

## 1. The Manifesto Hero

**For:** agencies, brands with attitude, manifesto-driven products.

The headline is the entire content. No product shot. No "trusted by." Just a statement set in massive type.

```tsx
<section className="min-h-screen flex flex-col justify-between p-8">
  <Header />
  <h1 className="font-display text-[clamp(56px,12vw,220px)] leading-[0.9] tracking-[-0.04em] max-w-[14ch]">
    Software that respects your time.
  </h1>
  <footer className="font-mono text-[12px] uppercase tracking-wider text-foreground-3 flex justify-between">
    <span>Available May 2026</span>
    <span>Scroll ↓</span>
  </footer>
</section>
```

**Watch-out:** the headline has to *carry the page*. If yours is "All-in-one solution for modern teams," you don't have a manifesto. Use a different hero.

---

## 2. The Asymmetric Split

**For:** SaaS with strong product UI, modern B2B.

Headline + sub on left (5–6 cols), product UI on right (6–7 cols), aligned to a real grid, never centered.

```tsx
<section className="grid grid-cols-12 gap-6 px-8 py-24 items-center min-h-[80vh]">
  <div className="col-span-12 lg:col-span-5">
    <p className="font-mono text-[12px] uppercase tracking-wider text-accent mb-6">
      New in May 2026
    </p>
    <h1 className="font-display text-[64px] leading-[1.05] tracking-[-0.03em] mb-6">
      Tax software that<br/>actually saves time.
    </h1>
    <p className="text-[18px] leading-[1.55] text-foreground-2 mb-8 max-w-[44ch]">
      FidUp automates the boring 80% of fiduciaire work so you can focus on advisory.
    </p>
    <div className="flex gap-3">
      <Button variant="primary">Book demo</Button>
      <Button variant="ghost">See pricing →</Button>
    </div>
  </div>
  <div className="col-span-12 lg:col-span-7">
    <ProductScreenshot />
  </div>
</section>
```

---

## 3. The Editorial Spread

**For:** lifestyle brands, hospitality, fashion, real estate at the luxury end.

Mimics a print magazine spread. Type and image co-exist on a shared grid. Like a book opening.

```tsx
<section className="min-h-screen grid grid-cols-12 gap-x-4 px-8 pt-12 pb-24">
  <div className="col-span-12 lg:col-span-5 lg:col-start-2 self-end pb-24">
    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground-3 mb-12">
      Issue 04 — Spring 2026
    </p>
    <h1 className="font-serif italic text-[88px] leading-[0.95] tracking-[-0.02em]">
      The Quiet<br/>Architecture<br/>of Living.
    </h1>
  </div>
  <div className="col-span-12 lg:col-span-5 lg:col-start-8">
    <img src="..." className="w-full aspect-[3/4] object-cover" />
    <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-foreground-3">
      Villa Tugendhat, Brno — Photo by Iwan Baan
    </p>
  </div>
</section>
```

---

## 4. The Type-Only Marquee

**For:** edgy brands, agencies, music labels.

Hero is just a giant rolling marquee, often broken or distorted.

```tsx
<section className="h-screen flex flex-col justify-center overflow-hidden bg-foreground text-background">
  <div className="overflow-hidden">
    <div className="flex gap-16 animate-marquee whitespace-nowrap font-display font-bold text-[20vw] leading-[0.9] uppercase">
      {Array(4).fill('Studio Annas — Lausanne — 2026').map((s, i) => (
        <span key={i}>{s}<span className="text-accent mx-8">●</span></span>
      ))}
    </div>
  </div>
  <div className="overflow-hidden">
    <div className="flex gap-16 animate-marquee-reverse whitespace-nowrap font-display italic text-[20vw] leading-[0.9]">
      {Array(4).fill('Brand · Web · Strategy').map((s, i) => <span key={i}>{s}</span>)}
    </div>
  </div>
</section>
```

---

## 5. The Single-Object Centerpiece

**For:** single-product brands, fashion drops, art pieces.

One object centered. Massive whitespace. Tiny caption.

```tsx
<section className="min-h-screen flex flex-col items-center justify-center px-8">
  <img src="/product.png" className="max-w-[480px] w-full mb-12" />
  <p className="font-display text-[24px] tracking-[-0.01em] text-center mb-2">
    Édition 04 — Le Cuir Sauvage
  </p>
  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground-3">
    Limited to 240 — €1,200 CHF
  </p>
</section>
```

---

## 6. The Interactive Demo

**For:** dev tools, AI products, anything where the product is *playable in a small surface area*.

The "hero" is a live, manipulable mini-demo of the product itself.

```tsx
<section className="min-h-screen grid grid-cols-12 gap-6 px-8 py-24 items-center">
  <div className="col-span-12 lg:col-span-4">
    <h1 className="font-display text-[56px] leading-[1.05] tracking-[-0.03em] mb-6">
      Try it right here.
    </h1>
    <p className="text-[17px] text-foreground-2 leading-[1.6]">
      No signup. No download. Type below and watch the model respond in real-time.
    </p>
  </div>
  <div className="col-span-12 lg:col-span-7 lg:col-start-6">
    <LiveDemoPlayground />
  </div>
</section>
```

---

## 7. The Vertical Stack Statement

**For:** mobile-first, story-driven, narrative brands.

Headline broken into stacked lines, each on its own. Like a poem.

```tsx
<section className="min-h-screen flex flex-col justify-center px-8 max-w-4xl">
  <h1 className="font-display text-[72px] leading-[1] tracking-[-0.03em] space-y-4">
    <span className="block">We don't</span>
    <span className="block italic font-light">build features.</span>
    <span className="block">We build <span className="text-accent">muscle memory</span>.</span>
  </h1>
</section>
```

---

## 8. The Animated Wordmark

**For:** AI products, music products, design tools.

The hero is the brand's wordmark animating — letter shape morphs, gradient sweeps, characters move.

```tsx
// Animated SVG wordmark — letters shift slightly on scroll/hover
<section className="min-h-screen flex items-center justify-center">
  <svg viewBox="0 0 1200 300" className="w-full max-w-6xl">
    <text x="0" y="240" className="font-display text-[200px] fill-foreground tracking-tight">
      OR<tspan className="kinetic-letter">Y</tspan>ZO
    </text>
  </svg>
</section>
```

---

## 9. The Numbered Manifesto

**For:** agencies, manifesto-driven brands, "we believe" pages.

Hero is a numbered list of principles, set large.

```tsx
<section className="min-h-screen px-8 py-32 grid grid-cols-12 gap-4">
  <div className="col-span-12 lg:col-span-8 lg:col-start-3">
    <p className="font-mono text-[12px] uppercase tracking-wider mb-12">
      Our principles, 2026 →
    </p>
    <ol className="space-y-12">
      <li className="grid grid-cols-12 gap-4 items-baseline">
        <span className="col-span-1 font-mono text-[14px] text-foreground-3">01</span>
        <p className="col-span-11 font-display text-[40px] leading-[1.15] tracking-[-0.02em]">
          Software should make you feel <em className="italic font-light">capable</em>, not overwhelmed.
        </p>
      </li>
      {/* ...more */}
    </ol>
  </div>
</section>
```

---

## 10. The Full-Bleed Video / Loop

**For:** lifestyle, hospitality, fashion, automotive.

Looping muted video fills the viewport. Text overlays bottom-left or center.

```tsx
<section className="relative h-screen w-full overflow-hidden">
  <video
    autoPlay muted loop playsInline preload="metadata"
    poster="/poster.jpg"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero.webm" type="video/webm" />
    <source src="/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
  <div className="absolute bottom-12 left-8 max-w-2xl text-white">
    <h1 className="font-display text-[64px] leading-[1.05] tracking-[-0.02em] mb-4">
      Welcome to nowhere.
    </h1>
    <p className="text-[18px] opacity-80">
      A retreat in the Engadin, hidden from time.
    </p>
  </div>
</section>
```

**Watch-out:** video has to be <2MB, web-optimized, and have a poster fallback. Never autoplay with sound.

---

## 11. The Bento-as-Hero

**For:** multi-feature platforms, productivity tools.

The hero IS the feature grid. No separate "features" section needed below.

```tsx
<section className="min-h-screen px-8 py-24">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-12 gap-3 mb-12">
      <h1 className="col-span-12 lg:col-span-8 font-display text-[80px] leading-[0.95] tracking-[-0.03em]">
        Everything your fiduciaire needs.
      </h1>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <BentoCard className="col-span-12 md:col-span-7 row-span-2 h-[400px]" feature="LBA Compliance" />
      <BentoCard className="col-span-12 md:col-span-5 h-[195px]" feature="Tax filing" />
      <BentoCard className="col-span-12 md:col-span-5 h-[195px]" feature="Legal archiving" />
      <BentoCard className="col-span-12 md:col-span-4 h-[200px]" feature="ZEFIX sync" />
      <BentoCard className="col-span-12 md:col-span-4 h-[200px]" feature="Client portal" />
      <BentoCard className="col-span-12 md:col-span-4 h-[200px]" feature="API access" />
    </div>
  </div>
</section>
```

---

## 12. The Inverted (No Visual)

**For:** legal, financial, b2b enterprise with serious tone.

Just headline + sub + two buttons. NO product shot, NO illustration, NO gradient orb. Confidence-by-restraint.

```tsx
<section className="min-h-[80vh] flex items-center px-8">
  <div className="max-w-4xl">
    <p className="font-mono text-[12px] uppercase tracking-wider text-foreground-3 mb-8">
      Swiss real estate investment
    </p>
    <h1 className="font-display text-[64px] leading-[1.1] tracking-[-0.02em] mb-6">
      Direct investment in qualified Swiss real estate, from CHF 1,000.
    </h1>
    <p className="text-[18px] text-foreground-2 leading-[1.6] max-w-[58ch] mb-12">
      Regulated platform. Bilanz-vetted properties. Transparent fees.
    </p>
    <div className="flex gap-4">
      <Button variant="primary" size="lg">View opportunities</Button>
      <Button variant="ghost" size="lg">How it works →</Button>
    </div>
  </div>
</section>
```

---

## Anti-patterns to avoid

- **Centered hero with rounded button + screenshot below** — that's the AI template.
- **Gradient mesh background.** Use OKLCH radial gradients OR a single canvas/SVG, not a Tailwind gradient.
- **"Trusted by AMAZON GOOGLE META" with stretched fake logos.** Either real social proof or none.
- **Hero copy: "All-in-one platform for modern teams."** That sentence is meaningless. Rewrite.
- **More than 2 CTAs.** Always primary + secondary. Three CTAs = no CTA.
- **Stock photo in the hero.** Either commissioned, product UI, or no image.

---

## Selection rule

> Ask: **what is this hero's job?**
>
> - Convert visitor → asymmetric split, bento-as-hero, inverted, demo
> - Express brand → manifesto, marquee, editorial spread, vertical stack
> - Showcase craft → animated wordmark, full-bleed video, single-object
>
> Pick the smallest hero that does the job.
