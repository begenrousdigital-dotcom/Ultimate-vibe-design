---
name: category-real-estate
description: Design playbook for real estate, proptech, crowdfunding, and property valuation interfaces. Use when building sites or apps in the property domain — listings, investment platforms, valuation tools, marketplaces, brokerage agencies. Applies to Swiss/European market specifically (registries, regulatory framing, multilingual UX).
---

# Real Estate & PropTech Playbook

This category sits at the intersection of **trust** (regulated, large amounts of money), **emotion** (people buy homes with their gut), and **data density** (m², yields, comparables, legal status). The design has to hold all three simultaneously. Most real estate sites fail at one of them: trust sites look like banks (cold, dead), emotion sites look like Pinterest (no data), data sites look like Excel (no soul).

## Sub-categories and their tensions

| Sub-type | Primary tension | Archetype lean |
|---|---|---|
| **Property listings (B2C)** | Emotion vs filtering | Editorial Luxury + Soft Structuralism |
| **Crowdfunding / investment** | Trust vs aspirational return | Minimalist Editorial + dense interface zones |
| **Valuation / estimation** | Magic moment vs scientific credibility | Soft Structuralism + clear data viz |
| **Marketplace (artisans/services)** | Two-sided trust vs speed of match | Soft Structuralism, low-chroma |
| **Brokerage agency site** | Personal brand vs portfolio | Editorial Luxury + photographic |
| **Fiduciaire / property management SaaS** | Density vs approachability | Interface-design rules (see that skill) |

## The trust stack — non-negotiable for Swiss/EU real estate

Real estate in Switzerland is regulated (FINMA for crowdfunding, OAR for compliance, ZEFIX for entities, LBA for AML). Visual trust signals matter more than in other categories because the legal weight is real.

**Above the fold or in the footer, at minimum:**
1. **Entity identity** — full legal name, RC number, address. Not just a logo.
2. **Regulatory status** — FINMA / OAR-G / ARIF / FINSOM mention if applicable. Linked, not just stated.
3. **Real humans** — named team with photos, not stock. "Notre équipe" is the most under-used trust page in Swiss real estate.
4. **Physical address** — preferably with photo of the office. Romandie clients drive past offices; presence is currency.
5. **Last-updated dates** — on listings, on documents, on valuations. Real estate data goes stale; showing freshness is trust.
6. **Language switcher** — FR/DE/IT/EN at minimum for national reach, FR/EN minimum for Romandie.

**Forbidden in this category:**
- Stock photos of generic "successful business people" shaking hands.
- "Trusted by" logo strips of media outlets unless you actually have press coverage.
- Vague yield claims ("up to 8% returns!") without disclosure.
- Auto-playing video over hero text.

## Typography — the Swiss real estate calibration

The Romandie/Suisse market has a specific aesthetic register. It's more conservative than Berlin, more refined than Paris commercial, less corporate than Zurich finance. The closest reference is the design vocabulary of **EPFL communications, Wüest Partner reports, and high-end Geneva private banks** — quiet, precise, slightly editorial.

**Recommended pairings:**

| Use case | Display | Body |
|---|---|---|
| Crowdfunding / investment platform | **GT Sectra** or **Söhne Breit** | **Söhne** or **Inter** |
| Property listings (premium) | **Editorial New** or **GT Super** | **Aeonik** or **Suisse Int'l** |
| Property listings (mid-market) | **Geist Sans** with weight contrast | **Geist Sans** |
| Fiduciaire / property management | **Geist Sans** semibold | **Geist Sans** |
| Brokerage personal brand | **Canela** italic for accent | **Söhne** or **Aeonik** |

**Numbers are display.** In real estate, m², CHF, %, year-built — these read more often than headlines. Tabular numerals (`font-variant-numeric: tabular-nums`) are mandatory on any number that appears in a column. Set them once globally.

## Color — restraint over chroma

Real estate trust = low chroma. The temptation is to brand with warm "home" colors. Resist for serious products. The brands that read most premium use desaturated neutrals with one accent color that appears <5% of the surface.

**Token presets for real estate sub-types:**

```css
/* Crowdfunding / investment — institutional confidence */
--surface-base: oklch(99% 0.003 60);       /* warm white */
--surface-elevated: oklch(97% 0.005 60);
--ink-primary: oklch(15% 0.01 60);          /* near-black, warm */
--ink-secondary: oklch(40% 0.01 60);
--ink-tertiary: oklch(58% 0.01 60);
--accent: oklch(45% 0.08 240);              /* deep blue, restrained */
--positive: oklch(55% 0.12 145);            /* yield green, but muted */
--negative: oklch(55% 0.18 25);

/* Property listings premium — editorial warmth */
--surface-base: oklch(98% 0.005 70);        /* paper */
--ink-primary: oklch(12% 0.005 70);
--accent: oklch(35% 0.04 60);               /* aged brass */
--rule: oklch(85% 0.005 70);                /* hairline color */

/* Fiduciaire / property management SaaS — clinical clarity */
--surface-base: oklch(99% 0 0);
--surface-elevated: oklch(98% 0 0);
--ink-primary: oklch(18% 0 0);
--accent: oklch(50% 0.12 250);
--rule: oklch(90% 0 0);
```

## Listing card patterns

The listing card is the most repeated unit in the entire category. Get it right once, it carries the product.

**Three formats by intent:**

### 1. Investment card (crowdfunding / BrickInvest pattern)
Goal: communicate financial parameters at glance, hide the rest until tap.

```
┌────────────────────────────────────┐
│ [Photo, 16:10, lazy-loaded]        │
│                                    │
│ ── status pill: "Ouvert" ──────── │
├────────────────────────────────────┤
│ Rue des Oliviers 1–3, Lausanne     │  ← address, body large
│                                    │
│ CHF 827,250                        │  ← raise target, display M
│ ──────────────── 67% souscrit      │  ← progress bar, low chroma
│                                    │
│ Rendement cible      4.8%/an       │  ← key metric pair
│ Durée estimée        7 ans         │
│ Ticket minimum       CHF 1,000     │
│                                    │
│ [Voir le dossier →]                │
└────────────────────────────────────┘
```

Rules:
- Numbers right-aligned in their column. Tabular numerals.
- Status pill is the only colored element above the divider.
- Progress bar height: 2-4px, not the chunky 12px of consumer apps.
- "Souscrit" / "rendement" / "ticket" — these are display, not labels. Use small caps or uppercase 11px with letter-spacing 0.05em.

### 2. Listing card (sale/rent — RealEstimate pattern)
Goal: emotion-first, data-second.

```
┌────────────────────────────────────┐
│                                    │
│   [Hero photo, 4:3 or 3:2,         │
│    full-bleed in card, no padding] │
│                                    │
├────────────────────────────────────┤
│ CHF 1,890,000                      │  ← price as headline
│ 4.5 pièces · 142 m² · Pully        │  ← inline meta, separator ·
│                                    │
│ Villa contemporaine avec vue        │  ← editorial subhead
│ panoramique sur le lac.            │
└────────────────────────────────────┘
```

Rules:
- Photo is the card's hero — full bleed, no internal padding.
- Price is the typographic anchor. Larger than the description.
- Meta line uses `·` separator, not pipes or commas, for a quieter rhythm.
- No "BUY NOW" buttons. The card itself is the link.

### 3. Compact data row (search results, dense view)
Goal: scan 30+ properties without scrolling fatigue.

Use the interface-design tables.md patterns: row height 56-64px, single photo thumbnail 80×60, numbers right-aligned, sticky header, no zebra stripes.

## The map question

Every real estate product faces it: list view, map view, or split?

- **List-only**: faster to ship, works on mobile, fine for <100 results.
- **Map-only**: only when geography is the primary filter (vacation rentals, retail leases).
- **Split (map + list)**: default for >100 results, but expensive — needs sync, viewport-bound filtering, clustering. Don't ship split unless you have engineering budget for it.

**Map styling for premium products:**
- Use Mapbox or MapTiler with a custom style. Default Google Maps reads cheap.
- Desaturate to ~30% chroma. The map is context, not content.
- Markers: single shape, single color, scale by importance, not multi-color category jungle.
- No POI labels (restaurants, gas stations) unless they're contextually relevant.

## Photography direction

Real estate photography is the product. Bad photos kill premium positioning faster than any typography mistake.

**Standard:**
- 16:10 or 3:2 ratio. Never square (Instagram aesthetic, wrong here).
- Daylight, even exposure, no HDR halos.
- Wide lens but not fish-eye (24mm full-frame equivalent max).
- Empty rooms unless luxury staged; never visible occupant clutter.
- Exterior shot always first.

**Premium tier:**
- Twilight exterior shot ("blue hour") for hero.
- One detail shot (door handle, parquet, view through window) for editorial accent.
- Drone aerial only if the building/site benefits from context.

If the client provides phone photos, **say no** to the project or budget a photographer. There's no design solution to bad real estate photography.

## Valuation tools — the magic moment

Estimation widgets (RealEstimate, IAZI, RealAdvisor) all live or die on the *moment between submit and result*. This is where credibility is built or lost.

**Anti-pattern: instant result.**
A number appears in 200ms — feels arbitrary, no perceived effort, user distrusts it.

**Pattern: 2-4 second choreographed calculation.**
- Step 1 (300ms): "Recherche des comparables…" (fade in)
- Step 2 (800ms): "Analyse de 47 transactions à 800m" (with a small map of dots appearing)
- Step 3 (600ms): "Calcul de la fourchette…"
- Step 4: Result appears with a confidence range, not a single number.

The trick is that the actual computation can be instant — you're choreographing trust, not waiting. Make this feel like real work happened.

**The result screen:**
- Range, not point. "CHF 1.6M – 1.9M" reads more credible than "CHF 1,748,000".
- Methodology link visible. "Comment ce chiffre est calculé →"
- One CTA only: "Recevoir le rapport détaillé" (lead capture). Multiple CTAs scatter intent.

## Property dossier / detail page anatomy

The detail page is the closer. Below the photo gallery and price, the structure that works:

1. **Hero gallery** — full-width, swipeable, 6-12 images.
2. **Address + price + key meta** — sticky on scroll on desktop.
3. **Editorial description** — 2-3 paragraphs, written like a magazine, not a database dump. "L'appartement occupe le dernier étage d'une résidence de 1962…"
4. **Key facts** in a 2-column table — surface, year built, energy class, lot size, taxes.
5. **Floor plan** — clickable to expand. Critical for serious buyers.
6. **Map with neighborhood context** — schools, transport, with the property pin styled distinctly.
7. **Mortgage simulator** (if for sale) — collapsible.
8. **Agent / contact** — named human with photo, phone, email, response time SLA.
9. **Similar properties** — 3-4 cards, not a carousel.
10. **Legal mentions** — agency RC, mandate type, last update date.

## Forbidden patterns in this category

- "Sign up to see prices" — Swiss market expects prices visible. Hiding them = downmarket signal.
- Auto-rotating photo carousels — let users control pace.
- Floating chat widgets (Intercom-style) on premium listings — kills the editorial feel.
- "X people viewing this property" — Booking.com pressure tactics don't translate.
- Mortgage calculators that demand email before showing result.
- Newsletter modal pop-ups on first scroll.
- Gradient hero backgrounds. Property *is* the hero; don't compete with it.

## Greg-specific notes

**BrickInvest** (crowdfunding, FINMA non-action letter in progress): lean institutional. Token preset 1 above. Editorial New or GT Sectra display, Söhne body. Photography must be twilight tier. NAV methodology page is a trust asset — design it like a research paper.

**RealEstimate** (estimation, Next.js 15): the magic moment is everything. Spend the design budget there. Map view secondary to the estimation flow.

**FidUp** (fiduciaire SaaS) and **Edirex** (artisan marketplace): closer to interface-design domain. See that skill. Token preset 3.

**The cross-product visual signature** for Suite Up / Myappix: consider a shared display face (Söhne or GT Sectra) and shared neutral system, with each product owning one distinct accent color. This is how Stripe + Atlas + Press kit feel like a family without being identical.
