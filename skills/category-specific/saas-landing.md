---
name: category-saas-landing
description: Design playbook for SaaS marketing sites and product landing pages. Use when building B2B or B2C software marketing sites — homepages, feature pages, pricing, comparison, integrations. Covers the canonical SaaS structure and how to avoid the "every SaaS site looks the same" problem.
---

# SaaS Landing Page Playbook

The SaaS site is the most templated category on the internet. The risk isn't ugly — it's invisible. Stripe, Linear, Vercel, Cal, Resend, Raycast, Arc — they all use a recognizable structure, but they're distinctive because of *editorial restraint* and *one signature element* each carries through the site.

## The "Linear effect"

Linear's marketing site set the dominant grammar for premium B2B SaaS post-2022:
- Dark, near-black surface with subtle gradient washes.
- Geist or similar geometric sans, never serif.
- High-contrast spotlight typography.
- Bento grid for features (mid-2020s standard).
- Product screenshots with subtle 3D tilt or perspective.
- Subtle scroll-triggered animations (GSAP or Framer Motion).
- Pricing page with a single highlighted tier.

This is now a cliché. Every YC-backed B2B startup ships some version of it. If you want premium and distinctive in 2026, you have to *deviate consciously* from this grammar in at least one dimension. The cheapest distinctive moves:

1. **Light surface instead of dark** (Cal.com, Resend, Plain).
2. **Serif typography for the display** (Posthog used Editorial New, several recent launches use GT Sectra).
3. **Editorial / photographic hero** instead of product screenshot (Arc, Anthropic).
4. **Hand-drawn or illustrated accents** (Plain, Tella, some Vercel sub-products).
5. **WebGL or Three.js signature element** (Vercel homepage globe, Cal new homepage).

Pick one. Don't try all five.

## Canonical SaaS page structure

```
1. Nav (sticky, minimal — logo, 3-5 links, CTA)
2. Hero
   - Headline (the value prop in one sentence)
   - Sub (clarifier, 1-2 lines max)
   - Primary CTA + secondary CTA
   - Product visual (screenshot, video, illustration, or 3D)
3. Social proof bar (logos OR named testimonial OR metric)
4. Feature section 1 — primary differentiation
5. Feature section 2 — second differentiation
6. Feature section 3 — third (often bento)
7. Use cases or personas (if multi-segment)
8. Integration / ecosystem (if relevant)
9. Detailed testimonial / case study
10. Pricing teaser or pricing
11. FAQ
12. Final CTA section
13. Footer
```

The order is flexible, but the *number* of sections matters: aim for 8-11. Less feels thin, more reads as a list of features without a story.

## Headline patterns that actually work

The hero headline is the most-edited element on any SaaS site. Patterns by type of product:

| Product type | Pattern | Example template |
|---|---|---|
| Developer tool | Function + adjective | "Ship faster. Without breaking things." |
| Productivity app | Outcome verb | "Run your business from anywhere." |
| AI / new category | Define the category | "The AI engineer for your codebase." |
| Replacement product | Versus | "Stripe Atlas, but for [region]." |
| Platform | Inversion | "Your customers are your best growth channel." |

**Forbidden patterns:**
- "The all-in-one [category] platform" — generic, signals me-too.
- "Empower your team to..." — corporate, dated.
- "Revolutionary AI-powered..." — anything with "revolutionary" or "powered by AI" reads as 2023 vintage now.
- Two-line headlines with the second line as a gradient. Cliché since 2022.

**The signature move:** Linear's "Linear is a purpose-built tool for planning and building products" is 13 words and works because it's specific about *who* and *what*. Most teams write 6-8 word vague headlines because they're afraid of narrowing. The narrower the headline, the stronger the site.

## Hero visual — pick exactly one strategy

The hero visual is the single biggest design decision. Strategies and when to pick each:

### Strategy A: Product screenshot (refined)
**When:** Your product UI is distinctive and screenshottable. (Linear, Notion, Airtable, Pitch.)
**How:** Crop tight, show one moment of the product doing its core job. Add a subtle drop shadow and a faint reflection. Annotate with floating labels only if it clarifies; usually don't.
**Avoid:** The "browser chrome with three traffic-light dots" frame is overdone. Borderless or custom-framed reads more 2026.

### Strategy B: Looping product video
**When:** Your product is dynamic (animation tool, video editor, automation builder). (Framer, Tella, Loom.)
**How:** 6-10 second loop. No audio. Captions burned in if narrative. File size <2MB.
**Avoid:** Long videos that demand attention. The hero loop is decoration with intent, not a demo.

### Strategy C: Editorial photograph or illustration
**When:** Your product is conceptual, abstract, or category-creating. (Arc, Anthropic, Stripe Press, Linear blog.)
**How:** Commission the visual. Stock won't work. A single strong image with editorial scale.
**Avoid:** Generic SaaS people-with-laptops stock.

### Strategy D: WebGL / 3D signature
**When:** You have engineering budget, your brand earns the cost. (Vercel homepage, Cal.com 2025 redesign, Resend's signature gradient.)
**How:** Spline, React Three Fiber, or a hand-crafted Three.js scene. Should respond to mouse or scroll. Must perform on mobile.
**Avoid:** If it crashes on a mid-tier iPhone, kill it.

### Strategy E: Bold typographic hero (no visual)
**When:** You're confident in your typography and value prop is the story. (Vercel's old "develop. preview. ship." era, Linear's text-only marketing posts.)
**How:** Massive type, careful kerning, one detail (rule line, accent word in another weight or italic).
**Avoid:** Looking thin. This only works with extreme typographic precision.

## Feature sections — the bento problem

Around 2023 the "bento grid" became the default for SaaS feature sections. It's a 6-12 cell asymmetric grid where each cell shows a feature. Linear, Apple, Vercel, every fintech.

It still works, but it's now expected. To stand out within the bento idiom:
- Vary cell content radically: one cell is type, one is a screenshot, one is a chart, one is a 3D object. Visual texture is what makes bentos sing.
- Mix sizes more aggressively than the default 2×2 / 1×2 grid. Include one full-width cell.
- Subtle hover states on each cell. Tilt, glow, or content swap.
- Captions in each cell should be one short sentence, not a list of bullets.

**Alternative formats to bento:**

### The alternating slabs
Each feature is a full-width section. Headline left, product screenshot right. Then headline right, screenshot left. Used by Stripe, Notion in some eras. Slower to scan but reads more editorial.

### The product-first scroll
One huge screenshot or video that progressively reveals as you scroll. Used by Framer, Apple product pages. Hard to build, high-impact.

### The story arc
Three numbered steps as a sequence. "Connect. Configure. Ship." Each with its own section. Good for products with a clear linear use case.

### The grid of micro-features
6-12 small cards in a uniform grid, each with an icon, title, one line. Best for products with many small capabilities where breadth is the point. Risk: feels like a feature dump.

## Social proof — beyond the logo strip

The logo strip is the cheapest social proof and the most templated. Variants that read fresher:

1. **Named quote, single column** — one testimonial, full quote, named person with role, photo and company logo. Slack pioneered this. More credible than 12 logos.
2. **Metric headline** — "10,000 teams. 47M tasks. 0 breakage." Numbers as type, large scale.
3. **Customer story preview** — image, title, "How [Company] reduced X by Y%" — links to a real case study page.
4. **Press / podcast logos** — if you've been covered by recognizable outlets, this reads more credible than customer logos.
5. **Founder-credibility line** — "Built by alumni from Stripe, Linear, and Figma." Risky but distinctive.

**The logo strip itself**, if you do it: monochrome (single color, not full-color logos), evenly sized, no more than 8, in a single row that may auto-scroll on mobile.

## Pricing page — the single hardest page

Pricing pages are where users decide. Get them wrong, the rest of the site is wasted.

**Three-tier layout (default):**
- Tier 1: low-commitment (Free / Starter)
- Tier 2: highlighted "most popular" (your target tier)
- Tier 3: enterprise / power user

**The highlighted tier should be visually different** — colored border, background tint, slight elevation, or a "Most popular" pill. Don't be subtle.

**Feature lists:**
- Lead with what's *included*, not what's missing.
- Group features by category if you have >8 per tier.
- Show what changes per tier in bold. Common features can be gray.
- Avoid checkmarks for everything; use ✓ for included, em-dash (—) for not included, never an X (reads negative).

**Annual toggle:**
- Default to annual selected (it's higher revenue).
- Show savings as "Save 20%" or "2 months free", not "−20%".

**Enterprise tier:**
- No price. "Talk to us." or "Custom."
- CTA: "Book a call", not "Get a quote".
- 1-2 sentences on what makes enterprise different (SSO, dedicated support, custom limits).

**Below the pricing tiers:**
- FAQ (5-10 questions, accordion).
- Trust badges (SOC 2, GDPR, etc.) if you have them.
- Comparison table to competitors (only if you're confident you win).

## The FAQ — actually useful

Most SaaS FAQs are useless because they answer questions no one asks. Real FAQ:

- "Can I migrate from [main competitor]?"
- "Do you have a free trial?"
- "What happens if I exceed my plan limits?"
- "Is my data encrypted?"
- "How is this different from [competitor]?"
- "Do you offer [specific feature]?"

Look at customer support tickets. The top 10 questions tickets cover are your FAQ.

## Footer — the often-forgotten signature

A premium SaaS footer:
- Multi-column: Product, Resources, Company, Legal.
- Compliance badges, status page link, ToS, Privacy.
- Language switcher if multi-region.
- Newsletter signup (single field, no modal).
- One signature element — a hand-drawn signature, an oversized wordmark, a small ASCII art, a quote. This is where personality leaks through on serious sites.

## Performance budgets — non-negotiable

A SaaS landing page should hit:
- **LCP < 2.5s** on 4G.
- **CLS < 0.1**.
- **Total page weight < 1MB** above the fold (excluding video).
- **First load JS < 200KB** if Next.js / Astro / similar.

Heavy WebGL hero? Lazy-load it. Show a static fallback first frame, hydrate the canvas after LCP. Heavy product video? Use a poster image, preload="metadata".

## SaaS-specific watch-outs

- **"Trusted by"** as section header is overused. Try "Built with" or "Used at" or just the logos without label.
- **AI badges everywhere** (sparkle icons, "AI-powered" pills) in 2026 read as a 2024 vintage now. Use sparingly.
- **Floating "Get started" buttons** that follow scroll are aggressive. The CTA in the nav is enough.
- **Cookie banners**: if you must (EU), make them quiet — small bottom-corner card, not full-screen modal. And don't put "Accept all" in the brand color while "Reject" is gray — that's a regulatory risk now.
- **Comparing yourself to ChatGPT / Stripe / Notion** in headlines is risky. You'll look small. Compare in detailed pages, not on the homepage.

## Greg-specific notes

**FidUp** as a SaaS marketing site: positioning is "Swiss-native for fiduciaires". The credibility play is the Swiss-specific feature set (ZEFIX, LBA, legal archiving). The hero should not look like a generic American B2B SaaS — lean editorial, French-first, screenshot with Swiss data in it (CHF amounts, ZEFIX entity, Helvetic context). Avoid the dark Linear-clone aesthetic. Light surface, Söhne or GT Sectra, one accent color in a confident blue or institutional dark green.

**BeGenerous.digital** as an agency site: see agency-portfolio.md.
