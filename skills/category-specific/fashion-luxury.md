---
name: category-fashion-luxury
description: Design playbook for fashion, luxury goods, beauty, and lifestyle brand sites. Use when building DTC fashion brands, luxury houses, beauty brands, perfumeries, watchmakers, jewelers. Editorial-first thinking with commerce as secondary affordance.
---

# Fashion & Luxury Playbook

Luxury web design is the inverse of SaaS web design. SaaS optimizes for clarity and conversion. Luxury optimizes for *desire* and *restraint*. The two grammars are fundamentally incompatible. When luxury brands hire SaaS-trained designers, the result is a site that "converts well" but kills brand equity. When SaaS brands try to look luxury, they look pretentious.

This playbook is about getting the luxury register right.

## The four luxury registers

Not all luxury looks the same. Four distinct dialects:

### 1. Heritage luxury (Hermès, Loro Piana, Patek Philippe)
- Editorial, photographic, often serif typography.
- Long lead times, slow pacing, rarely on sale.
- Color: cream, ink, oxblood, gold accents.
- The product is craft.

### 2. Modern luxury (Bottega Veneta, The Row, Aesop)
- Restraint pushed to extreme. Sometimes almost art-magazine.
- Sans-serif typography, often custom.
- Black on cream, off-white on charcoal.
- The product is design.

### 3. Maximalist luxury (Gucci, Balenciaga, Schiaparelli)
- Bold typography, statement photography, sometimes anti-design.
- Strong color blocks, sometimes garish on purpose.
- Cultural relevance over restraint.
- The product is provocation.

### 4. Contemporary DTC luxury (Khaite, Studio Nicholson, COS, Toteme)
- The newest dialect. Editorial restraint with e-commerce affordances.
- Often serif logotype + clean sans body.
- Off-white surface, ink type, occasional editorial photography.
- The product is curation.

**Identify the register before designing.** Most "luxury" briefs you receive are actually "contemporary DTC luxury" — not Hermès, but Khaite. The aesthetic vocabulary is different.

## What makes a site read luxury

Specific, learnable signals:

1. **Generous whitespace.** Margins 2-3× what SaaS uses. Vertical rhythm twice as breathy.
2. **Long type measure.** Body copy 70-85 characters per line, not 50-60.
3. **Photographic dominance.** Photography occupies majority of visual real estate.
4. **Serif or custom display type.** Geometric sans alone reads neutral, not luxury.
5. **Slow pacing.** Page transitions, image loads, hover states all slowed 1.5-2× normal.
6. **Restraint on color.** Maximum 3 colors total, including ink and surface.
7. **No urgency.** No "Only 3 left!", no countdown timers, no sale banners on luxury tier.
8. **Hidden prices.** Some heritage brands hide prices entirely (Hermès for some items). Most modern luxury shows them, but quietly.
9. **Edited product range.** 12-40 visible products on landing, not 400.
10. **One signature ritual.** Each luxury brand has one distinctive web ritual: a custom cursor, a particular scroll behavior, a recurring graphic element.

## Forbidden in luxury

- **Sale badges** on tier-1 product. Reads downmarket. Outlet sites are separate.
- **Countdown timers, popups, scarcity prompts.** Mass-market growth-hacking moves.
- **"As seen in" with celebrity press.** Heritage doesn't beg.
- **Animated GIF banners** of any kind.
- **Trust badges** ("Secure checkout!"). Implied.
- **Free shipping above $X** in the header. Move to checkout.
- **Sign up for 10% off** modals. Kills the register instantly.
- **Stock photography** of anything.
- **More than two product images per row** on landing. Three columns is e-commerce, not luxury.

## Typography for luxury

The single highest-leverage decision.

| Register | Display | Body | Logotype |
|---|---|---|---|
| Heritage | Caslon, Garamond, Hoefler Text, Didot | Serif body face | Often custom |
| Modern | Custom sans, or GT Sectra, ABC Diatype | Söhne, ABC Diatype | Wordmark, often custom |
| Maximalist | Anything — heavy slab, condensed, anti-design | Variable | Distinctive |
| Contemporary DTC | Editorial New, Canela, GT Super, Söhne italic | Söhne, Aeonik | Serif, often italic |

Type scale should be more dramatic than in SaaS. H1 at 96-160px on desktop is normal. Body at 16-18px. The gap between sizes is the rhythm.

**Italic accents are a luxury signal.** Words mid-sentence in italic display face read editorial in a way no other treatment does.

**Numerals matter.** Oldstyle figures (1234567890 with varying x-height) read more editorial than tabular. Use them for prices in heritage and contemporary DTC. Tabular only when prices need to align in a column.

## Color palettes

```css
/* Heritage luxury */
--surface-base: oklch(96% 0.018 75);       /* warm cream */
--surface-elevated: oklch(98% 0.015 75);
--ink-primary: oklch(18% 0.012 30);         /* warm near-black, slightly red */
--ink-secondary: oklch(40% 0.01 30);
--accent: oklch(35% 0.10 30);               /* deep oxblood */
--gold: oklch(70% 0.08 80);                 /* used sparingly */

/* Modern luxury */
--surface-base: oklch(97% 0.003 0);         /* near-white, neutral */
--ink-primary: oklch(12% 0 0);              /* near-black, neutral */
--ink-secondary: oklch(45% 0 0);
--rule: oklch(85% 0 0);
/* no accent — monochrome */

/* Contemporary DTC */
--surface-base: oklch(95% 0.008 75);        /* paper */
--ink-primary: oklch(15% 0.005 75);
--accent: oklch(40% 0.05 60);               /* taupe / clay */
--rule: oklch(85% 0.005 75);

/* Maximalist (variable, but example) */
--surface-base: oklch(98% 0 0);
--ink-primary: oklch(10% 0 0);
--accent-1: oklch(60% 0.25 25);              /* hot red */
--accent-2: oklch(75% 0.20 100);             /* yellow */
/* blocks of pure color used compositionally */
```

## Photography direction

Luxury sites are 70% photography. The photography direction is the brand.

**Heritage:**
- Studio lighting, controlled, even.
- Product on neutral ground or in heritage context (workshop, archive).
- Models when used: classic poses, no aggressive cropping.
- Color grade: warm, slightly desaturated, film-like.

**Modern:**
- Architectural, often empty space dominant.
- Product as sculptural object.
- Models cropped editorially, almost abstract.
- Color grade: neutral, slightly cool, digital but refined.

**Contemporary DTC:**
- Lifestyle but staged. Real-but-not-real.
- Natural light, often outdoor.
- Models in motion, candid feel.
- Color grade: warm, film-emulation.

**Maximalist:**
- Editorial fashion editorial. High concept, often surreal.
- Product secondary to mood.
- Style of cinematographer or photographer is the signature.

**Don't compromise on photography.** A €50k photo shoot lifts the entire brand more than €50k of redesign.

## Page structure for luxury commerce

### Landing page
1. **Editorial hero** — usually a single image or short film. Sometimes typographic. Rarely a product grid.
2. **Featured story / collection** — current campaign or seasonal drop, treated like a magazine spread.
3. **Curated category** — 4-8 products in an editorial layout (not a uniform grid).
4. **Second story / craft** — house heritage, atelier, craftspeople.
5. **Newsletter / private invitations** — quiet, single field, no incentive.
6. **Footer** — boutiques, services, journal, legal.

### Product listing (PLP)
- 2-column grid on desktop, 1-column on mobile. (3-column reads commercial.)
- Product image dominates. Name, price, color count below.
- No "Add to cart" on hover. Click into the product.
- Filters: minimal, often in a slide-over panel. Categories: minimal too.
- Sort options: hidden or as a small dropdown.

### Product detail (PDP)
1. **Image gallery** — 4-8 images, often editorial in addition to studio shots. Vertical scroll on desktop, swipe on mobile.
2. **Product name, price, brief description** — right side on desktop, below on mobile.
3. **Color / size selectors** — generous tap targets, no chips with codes, real swatches.
4. **Add to cart** — single primary action, often as a long button or full-width.
5. **Editorial description** — paragraphs, not bullet lists. Materials, origin, craft notes.
6. **Care / details** — accordion or expanded.
7. **Styling suggestions** — related products as editorial pairs, not "you might also like" grid.
8. **Heritage / story** — at the bottom, optional.

## Checkout — quiet, fast, no friction

Luxury checkout should be the most refined part of the site. Counterintuitively, this is also where conversion matters most.

- One-page checkout where possible.
- Guest checkout default. Account creation post-purchase.
- Apple Pay / Google Pay prominent. Saves time, signals modern.
- No upsells, no add-ons, no "Complete your order" cross-sells.
- Order confirmation: editorial. Personalized. "Your order is now with our atelier."

## Motion in luxury

**Sparse and slow.** Motion in luxury should feel like the rustle of a magazine page, not the flash of a billboard.

- Image lazy-loads with a long fade (400-600ms).
- Hover states: subtle. Image swap, never zoom or color shift.
- Scroll-triggered reveals: 30-50% slower than SaaS norms (1200-1600ms vs 600-800ms).
- Page transitions: optional. If used, full-page fade or controlled image-led transition.
- No bounces, no springs, no playful eases. Use `cubic-bezier(0.2, 0.6, 0.2, 1)` or simple `ease-out`.

## The journal / editorial section

Most luxury brands maintain a journal — fashion magazine content adjacent to commerce. This is the brand's voice asset. Treat it like a print publication.

- Issue-based or article-based structure.
- Long-form, high editorial standard.
- Photography commissioned for the journal, not stock.
- Linked subtly to commerce (a story about Italian leather links to the leather bag).

## Mobile considerations

Luxury increasingly converts on mobile. But the aesthetic standards don't drop on mobile.

- Hero typography: 64-96px H1 still works on mobile, just edited.
- Photography: vertical compositions for mobile-first, not just cropped horizontal.
- Navigation: hamburger menus are fine in luxury, even preferred (hidden until needed).
- Sticky add-to-cart on PDP: yes, but quiet — bottom bar with name + price + CTA.

## Watch-outs

- **Don't use Instagram aesthetics for luxury web.** Square crops, oversaturated, hashtag-driven captions belong on Instagram. The web brand should be more controlled.
- **Reviews displayed prominently** read mass-market. Either hide or display in a "press" / "journal" frame.
- **"Built by [agency]" footer credits** are taste-dependent — fine for small contemporary brands, never for heritage.
- **AI-generated imagery** is currently a luxury-destroyer. The market reads it as cheap. Avoid entirely for high-end brands until the perception shifts.
- **Modal pop-ups of any kind.** Even location/language. Use bottom bars or top strips instead.

## When luxury and accessibility tension

Luxury aesthetic tendencies (low contrast, small type, slow loading) can conflict with WCAG. The resolution is *not* to abandon the aesthetic, but to find the version that meets both:

- 4.5:1 contrast minimum on body text. Many luxury sites violate this. You can hit it with dark warm grays on cream without losing register.
- Tap targets 44×44 minimum on mobile. Doesn't conflict with luxury.
- Alt text on photography: write editorially, not technically. "A model walks through a Tuscan field at golden hour wearing the Aria coat" reads better than "model wearing coat".
- Focus states: subtle but visible. A 1px underline or a small inset ring works.

Luxury without accessibility is exclusion as aesthetic. Modern luxury brands do not endorse that. Meet WCAG and keep the register.
