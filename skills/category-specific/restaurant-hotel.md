---
name: category-restaurant-hotel
description: Design playbook for restaurants, hotels, bars, hospitality venues. Use when building sites for physical hospitality businesses. Photography-first, reservation-focused, atmosphere-driven.
---

# Restaurant & Hotel Playbook

Hospitality sites have one job that competing categories don't share: they have to make someone want to physically go somewhere. The aesthetic register is closer to fashion luxury than SaaS, but with very concrete commerce needs (reservation, room booking, menu, location).

## Hospitality tiers

| Tier | Examples | Site register |
|---|---|---|
| Casual / neighborhood | Local café, bistro | Friendly, fast, mobile-first |
| Mid-market | Wine bar, brasserie, boutique hotel | Editorial, photographic |
| Fine dining / luxury hotel | Michelin restaurant, palace hotel | Heritage, slow, image-first |
| Trendy / hype | Speakeasy, design hotel | Distinctive aesthetic, often experimental |

The site has to match the physical experience. A neighborhood pizzeria with a Locomotive-style WebGL site is dissonant; a 3-Michelin restaurant with a SquareSpace template is malpractice.

## What the user is actually doing

Restaurant site visits are highly transactional. The data:
- 40-60% are looking for reservation.
- 20-30% are looking for menu.
- 10-15% are looking for hours and location.
- 5-10% are browsing for atmosphere (deciding whether to come).
- Almost nobody is reading the chef's manifesto.

This means: **reservation, menu, hours, address must be findable in under 2 seconds**, even when the design is luxury.

## Page structure for restaurants

```
1. Nav (minimal: Menu, Reservations, About, Contact, Language)
2. Hero
   - Atmospheric photo or video
   - Restaurant name (often logotype)
   - Short tagline or location
   - "Book a table" CTA
3. Mood / atmosphere section
   - Editorial photography of interior, food, staff
4. Menu section or link
   - Sample of menu OR direct link to full menu PDF/page
5. Story / chef / philosophy
6. Location & hours
   - Address, map, hours by day
7. Press / awards (if applicable)
8. Footer
   - Address, hours, phone, social, language, legal
```

## The reservation flow

The single biggest UX decision: native form, third-party widget, or hybrid.

**Third-party widgets (default):**
- OpenTable, Resy, SevenRooms — most common in US/UK.
- The Fork, Bookatable — Europe.
- Tock — for fine dining with deposits/prepayment.
- Lunchgate — Switzerland-specific.

**Pros of third-party:**
- Reservation management, table allocation handled.
- Built-in marketing reach (Resy users discover restaurants).
- SMS reminders, no-show handling.

**Cons:**
- Branding broken inside the widget.
- Customer relationship owned by platform.
- Commission per cover.

**Pattern that works for premium:**
- Custom "Reserve" button in nav and hero.
- Click opens slide-over or modal with embedded widget OR custom form.
- Custom form for parties >6 or special events, widget for standard.
- "Concierge" or "Private events" as a separate contact.

## Menu — display patterns

Menus are content-heavy. Patterns:

### Pattern A: PDF download
- Simple. Works for casual.
- SEO terrible. Looks dated for premium.
- Acceptable for: family restaurants, casual bistros.

### Pattern B: HTML menu, full page
- Each section (starters, mains, desserts) as a section.
- Item name, description, price (or no price for premium).
- Searchable in browser, SEO-friendly.
- Best for: most mid-market and premium.

### Pattern C: Visual menu with photography
- Each dish with a photo.
- Used by Asian restaurants commonly, some upscale brunch places.
- Works for: casual to mid-market. Not for fine dining (photography of fine dining looks dated).

### Pattern D: Tasting menu, narrative
- Editorial layout, course-by-course, often with chef notes.
- Used by Michelin-tier restaurants.
- Often presented as a "current menu" with seasonal note.

**Menu typography:**
- Item names: display weight, often serif or italic.
- Descriptions: body, italic, or smaller weight.
- Prices: tabular numerals, right-aligned in a column, often without currency symbol on luxury menus (assumed).
- Section headers: small caps or distinctive treatment.

**Allergens and dietary:**
- Symbols (V for vegetarian, GF for gluten-free) as legend at bottom.
- "Please inform staff of allergies" line as standard.

## Photography for hospitality

Like luxury, hospitality lives or dies on photography. Three essential photo types:

1. **Atmosphere shots** — interior, ambiance, lighting. Tell people what the room feels like.
2. **Food shots** — top-down or 3/4 angle, natural light preferred over flash, in-context.
3. **Detail shots** — hands, table settings, glassware, plating details.

**Don't:**
- Stock photography. Period.
- Phone shots from openings.
- Heavy filters or Instagram aesthetics.
- Lifestyle stock of happy diners.

**Do:**
- Commission a hospitality photographer for opening and seasonally.
- Ask for usage rights for web + social.
- Update photography seasonally if menu changes seasonally.

## Hours and location — the most visited info

Make hours and location impossible to miss.

**Hours display patterns:**
- Full week table on dedicated page.
- "Open now / Closed" indicator on homepage (real-time logic).
- Special hours called out (closed Mondays, holiday hours, summer hours).

**Location:**
- Address in clickable format (opens maps).
- Embedded map on contact page (Mapbox/Google).
- "Get directions" button.
- Public transport mention if relevant.
- Parking note.

## Hotel-specific patterns

Hotels share DNA with restaurants but add room booking complexity.

### Hotel homepage structure

```
1. Nav (Rooms, Dining, Spa, Experiences, Location, Book)
2. Hero
   - Cinematic video or large photo
   - Hotel name, location, brief
   - "Check availability" date picker prominent
3. Rooms preview
   - 3-5 room types, image-led
4. Dining
   - Featured restaurant(s) within hotel
5. Experiences / services
   - Spa, pool, activities
6. Location
   - Neighborhood, attractions, transport
7. Story / heritage
8. Press / awards
9. Newsletter
10. Footer
```

### Room booking flow

**Critical:** Date picker visible on every page, often persistent.

1. Select dates + guests (often: rooms, adults, children).
2. Available rooms list with prices.
3. Select room type.
4. Add-ons (breakfast, spa, late checkout).
5. Guest details.
6. Payment.
7. Confirmation.

Most luxury hotels use a booking engine (Cendyn, SynXis, Travelclick) that handles this in a widget. The challenge: making the widget feel native.

### Room detail patterns

- Hero gallery (10-15 images, room photography is the entire decision).
- Room type name, size in m², bed configuration, view.
- Amenities list.
- Floor plan (premium).
- Price per night.
- "Reserve" CTA.

## Map and location pages

For both restaurants and hotels, the location page often gets more visits than the homepage on mobile.

**Premium pattern:**
- Custom-styled map (Mapbox), desaturated.
- Single pin for the venue, styled distinctively.
- Surrounding context: nearby landmarks, neighborhoods marked.
- Address in multiple formats (street, GPS coords for hotels in remote locations).
- Transport: walking distance to metro/train, parking info, valet.
- Photo of the building exterior at entrance (helps recognition on arrival).

## Multilingual

For Swiss venues, FR/DE/EN at minimum. For Lausanne specifically, FR primary with EN secondary is the most common.

**Patterns:**
- Language switcher in nav.
- Persist selection in cookie.
- Translate everything including menu (allergens especially).

## Performance and SEO

Restaurants get high "near me" mobile traffic.

- Local SEO critical: Google Business Profile, schema.org Restaurant markup.
- Reviews schema (aggregated from Google/TripAdvisor) helps rich snippets.
- Open hours in schema markup.
- Menu in schema markup.
- LCP < 2s on mobile.

## Motion and atmosphere

This is one of the few categories where heavy atmospheric video works.

- Hero loop: 6-12 seconds, no audio, autoplay (with `muted`, `playsinline`).
- Scroll-driven photography reveals.
- Slow image transitions (no quick fades).

But: not on mobile data, not above critical info. Lazy-load video.

## Trendy / hype restaurants

A subcategory where intentional anti-design works. Speakeasies, conceptual bars, pop-ups.

- Minimal info on purpose. "Reservations only via Instagram DM." Cultivates exclusivity.
- One-page site, brutalist or photographic.
- Sometimes invitation-only or password-protected pages.
- The site is part of the experience.

This is intentional and only works for brands that can afford the friction. Don't apply it to a neighborhood bistro that needs covers.

## Watch-outs

- **Auto-playing video with audio.** Always muted.
- **Heavy WebGL on hotel sites** — eats LCP, hotels need fast mobile.
- **Splash screens / "Are you 18+?" gates.** Use for alcohol-only brands legally required; never for general restaurants.
- **Animated counter "X happy guests".** Cringe.
- **Reservation modal that breaks back-button.** Common bug, kills conversion.
- **Menu PDF that opens in a new tab without a fallback.** SEO and UX disaster.
- **Photography of empty restaurants.** Photograph at service, full and warm.

## Greg-specific note

This category isn't directly in Greg's client portfolio currently. But the patterns transfer:
- Map/location patterns useful for Edirex artisan profiles.
- Atmospheric photography patterns useful for BrickInvest property dossiers.
- Reservation widget integration patterns useful for any service-business client (DUO GUARDIANS scheduling, for instance).
