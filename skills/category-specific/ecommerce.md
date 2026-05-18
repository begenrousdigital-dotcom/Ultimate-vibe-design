---
name: category-ecommerce
description: Design playbook for mid-market and DTC e-commerce sites — sites where conversion matters as much as brand. Use when building Shopify-style stores, DTC product brands, marketplaces. Covers the patterns that actually move conversion without looking like Amazon.
---

# E-commerce Playbook (DTC & Mid-Market)

This category sits between luxury (where conversion is secondary to brand) and Amazon (where conversion is everything). Most DTC brands need both: a recognizable brand register AND best-practice e-commerce affordances. The skill is integrating them.

## What converts vs what builds brand

E-commerce design lives in tension between two columns:

| Conversion lever | Brand cost |
|---|---|
| Urgency ("Only 3 left") | Reads cheap |
| Reviews above the fold | Tactical |
| Sale badges | Downmarket |
| Trust seals | Implies untrustworthy by default |
| Free shipping banner | Aggressive |
| Pop-up newsletter | Hostile |
| Bundle / upsell at cart | Mass-market |
| Account creation required | Friction |

The right answer for most DTC brands is: use these levers, but *quietly*. The version that converts is rarely the loudest version.

## Page taxonomy

1. **Homepage** — brand vibe + featured products + categories.
2. **Category / Collection (PLP)** — product grid with filtering.
3. **Product Detail (PDP)** — the closer.
4. **Cart** — pre-checkout review.
5. **Checkout** — payment flow.
6. **Account** — orders, saved items, addresses.
7. **Content pages** — about, FAQ, shipping, returns, blog/journal.

90% of effort goes into PDP and Homepage. PLP gets the next 5%. Everything else is small.

## Homepage anatomy for DTC

```
1. Top bar (optional)
   - Free shipping threshold, language switcher, store locator
   - Keep this short, single line
2. Nav
   - Logo center or left, primary categories, search, account, cart
3. Hero
   - One campaign, one CTA. Image or video.
4. Featured collection or bestsellers
   - 4-8 products, editorial layout
5. Value props strip (optional)
   - 3-4 short lines: "Free returns", "Ships in 24h", "Carbon neutral"
6. Story / brand section
   - Photographic, 1-2 paragraphs
7. Second collection or "shop by category"
   - 3-5 categories with hero images
8. Reviews / press / social proof
   - Quotes, ratings aggregate, or press logos
9. Newsletter
   - Single field, no popup
10. Footer
    - Comprehensive: shop links, help, company, legal, language, currency
```

## Product cards on PLP

The product card is the most repeated unit. Every detail compounds.

**Standard card:**
```
┌──────────────────────────┐
│ [Product photo, 4:5 or   │
│  1:1, lazy-loaded]       │
│                          │
├──────────────────────────┤
│ Brand (if multi-brand)   │  ← optional, small caps 11px
│ Product Name             │  ← body large, 16-18px
│ CHF 89                   │  ← price, tabular numerals
│ • • • • 4 colors         │  ← color swatches if applicable
└──────────────────────────┘
```

**Hover state (desktop):**
- Image swap to second product photo (most important hover behavior).
- Optional: quick "Add" button appearing.
- No zoom, no color shift.

**Forbidden card patterns:**
- "View product" button on every card. The card is the link.
- Heart/wishlist icon in card corner. Adds visual noise.
- Discount percentages stamped on card. Reads cheap.
- Star ratings in card. Tactical, breaks visual rhythm.

**Sale handling:**
If a product is on sale, the cleaner pattern is:
- Original price strikethrough, new price in same color (not red).
- No badge stamp on image.
- "On sale" as a category filter, not a graphic banner.

## PLP filtering

The filter UI determines whether users find products or bounce.

**Layout:**
- Desktop: left sidebar or top horizontal bar. Both work.
- Mobile: slide-up sheet triggered by "Filter" button. Stick the button at bottom.

**Filter types by priority:**
1. **Category** — top-level taxonomy.
2. **Size** — critical for fashion. Out-of-stock sizes greyed but still shown.
3. **Color** — visual swatches, not labels.
4. **Price range** — slider or bracket selector.
5. **Brand** — if multi-brand.
6. **Material / feature** — sub-attributes.
7. **In stock** — toggle.

**Patterns that work:**
- Show applied filters as removable chips above the grid.
- Show count of products matching ("142 results").
- Update grid instantly on filter change (no "Apply" button on desktop).
- On mobile, "Apply" button at bottom of filter sheet for batch updates.

**Patterns that don't:**
- Hiding the filter count (users want to see options narrow).
- Loading spinners on every filter change (jarring).
- Filters that re-arrange the grid order (lost place).

## Product Detail Page — the closer

PDP design determines conversion more than any other page. Anatomy:

### Above the fold
```
[Image gallery]         [Product info]
- 4-6 images            - Brand / category breadcrumb
- One product video     - Product name
- Vertical scroll on    - Price
  desktop, swipe mobile - Color selector
- Zoom on hover         - Size selector
                        - Quantity
                        - Add to cart (primary CTA)
                        - Wishlist / save (secondary)
                        - Short description (1-2 lines)
                        - Trust signals (subtle):
                          shipping time, return policy
```

### Below the fold
```
- Full description / details (paragraphs)
- Materials / specifications (table or list)
- Size guide (modal or in-page)
- Reviews (with photos, sorted by helpfulness)
- Q&A (if user-generated)
- Recently viewed
- "Complete the look" / related products
- Brand story (optional, for DTC)
```

### Critical PDP rules

1. **One primary CTA.** "Add to cart" is the only primary action. Wishlist, share, etc. are secondary.
2. **Sticky add-to-cart on mobile.** Bottom bar with product name + price + CTA when scrolled past it.
3. **Size selector before add-to-cart.** Don't let users click "Add" without selecting size, then error.
4. **Out-of-stock handling.** Don't hide sizes. Show them disabled with "Notify me when back" option.
5. **Price visible at all times.** Sticky if needed. Don't make users scroll up to remember.

## Image gallery patterns

The gallery is 50% of the PDP experience.

**Desktop layouts:**

- **Vertical scroll** (Aritzia, COS) — all images stacked, scrollable independently or with page. Editorial feel.
- **Thumbnail strip + main image** — classic e-commerce. 4-8 thumbnails left, main image right. Click or hover to swap.
- **Single image, scroll between** — minimalist. Used by Ssense, Mr Porter.
- **Grid (2-column)** — all images at once. Used by some DTC. Risk: chaotic.

**Mobile:**
- Horizontal swipe with page indicator dots.
- Pinch-to-zoom on tap.

**Image requirements:**
- First image: product on neutral or styled context.
- Second image: detail or alternate angle.
- Third image: lifestyle / in use.
- Fourth image: scale reference (model wearing, or hand for size).
- Fifth+: details, packaging, swatches.

## Cart and checkout

### Cart page

A clean cart converts. Bad carts cause abandonment.

- List items with image, name, color/size, quantity selector, line price, remove.
- Subtotal, shipping estimate, total clearly separated.
- Promo code field: collapsed by default, expandable.
- Cross-sells: maximum 2-3, optional, as "You may also like" — not aggressive.
- Primary CTA: "Checkout" — single, prominent, full-width on mobile.
- Alternative payments above the fold: Apple Pay, Google Pay, PayPal as one-tap.

### Checkout

The single most-optimized page in e-commerce.

**Single-page checkout** is the modern standard:
1. Express checkout buttons (Apple Pay, Google Pay, Shop Pay) at top.
2. Email (or login).
3. Shipping address.
4. Shipping method.
5. Payment.
6. Order summary, sticky on desktop.
7. Place order button.

**Critical rules:**
- Guest checkout default. Account creation prompted *after* purchase.
- Address autocomplete (Google Places API or similar).
- Inline validation, not error pages.
- Payment errors shown immediately, in context, not on a new page.
- Order summary visible throughout.
- Trust signals quiet but present: SSL indicator (browser handles), accepted cards.

## Search

Site search is the highest-converting feature most DTC sites under-invest in.

**Patterns:**
- Search bar in nav, always visible on desktop.
- On mobile: icon that expands to full-width input.
- Auto-suggestions on type (product names, categories, recent searches).
- Visual search results: product thumbnails in dropdown.
- "No results" page: show top sellers, popular searches, customer service link.

**Search bar UX:**
- Prominent placeholder ("Search products, categories, materials...").
- Cmd+K shortcut for power users.
- Recent searches saved (with clear button).

## Reviews

The single most-asked-for feature, the most often poorly executed.

**Display rules:**
- Show aggregate rating ("4.7 ★ from 234 reviews") near the price.
- Sort: most helpful by default, with options for recent, low, high.
- Show photos and videos from customers, highlighted.
- Show verified purchase badge (filter for it).
- Highlight 2-3 representative reviews at top.
- Negative reviews visible too. Hiding low ratings destroys trust.

**Review collection:**
- Email 14 days post-delivery, not immediately.
- Single-question form: "How are you finding [product]?"
- Photos optional, encouraged with small incentive.

## Mobile-first e-commerce

70%+ of DTC traffic is mobile. Mobile UX determines revenue.

**Mobile-specific patterns:**
- Bottom nav bar with primary actions (home, search, cart, account) on app-like brands.
- Sticky add-to-cart at bottom of PDP.
- Filters as slide-up sheet.
- Cart as slide-out drawer, not full-page navigation.
- One-handed reach: primary actions in lower 50% of screen.

**Performance:**
- LCP < 2.5s on 4G.
- Image lazy loading aggressive (only first 2-3 images eager).
- Use `<picture>` with multiple sizes.
- Total above-fold weight < 1MB.

## Multi-currency, multi-language

For Swiss/European DTC:

- Language switcher visible (top bar or footer).
- Currency switcher separate from language.
- Auto-detect on first visit, but allow manual change.
- Prices update everywhere on currency change.
- VAT handling clear: "CHF 89 (incl. 8.1% TVA)" or "CHF 89 (excl. TVA)".

## Returns and shipping

For mid-market DTC, returns and shipping are conversion variables.

**Pages that matter:**
- Shipping page with table: country / time / cost / carrier.
- Returns page with timeline ("30 days to return"), conditions, process.
- FAQ with the 20 most common questions.

**Surface in PDP:**
- "Free shipping over CHF 100" — small, near price.
- "Free returns" — small, near CTA.
- Delivery estimate based on stock and address: "Delivered Tuesday, May 24" — real-time if possible.

## Forbidden patterns

- **Newsletter pop-up on first visit.** Use exit-intent only or never.
- **Discount wheel of fortune.** 2018 conversion hack, kills brand.
- **"X people are viewing this"** scarcity. Trust-destroying.
- **Countdown timers on PDPs.** Same.
- **Auto-playing video with sound.** Always.
- **Carousel hero with 5 slides.** Users see only the first. Pick the most important and commit.
- **Trust badges in cart** ("SSL Secure!"). Implied. Browser handles it.
- **Pop-up upsells at cart.** "Add this for $5 more!" Use cart drawer cross-sells instead.

## DTC vs marketplace

DTC sites and marketplaces have different rules.

**DTC** (single brand, like Allbirds, Aesop):
- Brand-led, editorial.
- Fewer products, deeper PDPs.
- More homepage real estate to story.

**Marketplace** (multi-vendor, like Mr Porter, Farfetch):
- Search-led, denser grids.
- Brand pages within site.
- Filtering more complex.
- Smaller PDPs by necessity (many products).

If you're building both within one site (DTC with a small marketplace), pick the dominant pattern and don't compromise.

## Greg-specific note

Edirex isn't an e-commerce site, but the artisan listing patterns share DNA with PLP/PDP. The Edirex profile page benefits from the PDP gallery + info structure: images, reviews, services, contact. See category-real-estate.md for the marketplace-specific notes.
