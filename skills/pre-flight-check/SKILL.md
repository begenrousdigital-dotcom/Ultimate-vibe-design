---
name: pre-flight-check
description: Final design QA before shipping. Use BEFORE marking any frontend work complete, or when the user asks to "review", "audit", "check", "QA", or "validate" a built UI. This is the mandatory anti-slop gate — five tests that catch generic AI design output before it ships. Apply to any production-bound page, component, or artifact.
---

# Pre-Flight Check — The Anti-Slop Gate

Before any frontend deliverable goes to a client or to production, run this matrix. The goal is to catch the specific patterns that signal "AI default" before the human eye does, and to verify the work clears the intent-first bar set by the rest of these skills.

This skill is a *forcing function*. Don't skip steps. Don't grade on a curve.

## The Five Tests

### Test 1 — The Identification Test
**Question:** Can a designer identify which archetype, brand, or competitor this site is referencing?

A good site reads as *intentional*. You should be able to say "this is going for Linear's register, dialed warmer" or "this is heritage Hermès calibrated for a Swiss audience." If the answer is "it looks like a generic professional website", you've shipped slop.

**Pass criteria:**
- The intent archetype (from marketing-design/archetypes/) is identifiable within 5 seconds of looking at the homepage.
- Visual references to specific brands or movements are present and consistent.
- The site does NOT read as "modern minimalist clean professional" (the default AI bucket).

**Common failure modes:**
- The site is technically fine but unmemorable.
- Multiple archetypes are blended (editorial luxury + brutalist + corporate) — reads as confused.
- The "personality" is supposed to come from one accent color and a single illustration. Not enough.

### Test 2 — The Anti-Default Test
**Question:** Are there at least three intentional deviations from AI-default choices?

Run this checklist. Each "no" is a flag.

| AI default | Did we deviate? |
|---|---|
| Body font is Inter? | If yes, was this a conscious choice, or did Claude reach for it because it was default? |
| Primary surface is pure white (#FFFFFF)? | Or a deliberate near-white with warmth/cool? |
| Primary accent is blue (around #3B82F6 / oklch(60% 0.2 250))? | Or a chosen color tied to brand? |
| Border radius is 8-12px on everything? | Or varied / minimal / sharp by component? |
| Section padding is uniform `py-16` or `py-20`? | Or varied with editorial intent? |
| Buttons are rounded rectangles with subtle shadow? | Or distinctive button language? |
| Hero is centered, "Title / Subtitle / Button"? | Or asymmetric / editorial / typographic? |
| Headings use `font-bold` (700)? | Or display weight differentiation? |
| Cards have white background with light gray border? | Or specific surface treatment? |
| Icons from lucide-react default set, untransformed? | Or curated / custom / no icons? |
| Three feature columns with icon + heading + paragraph? | Or another structure entirely? |
| Gradient text that goes purple-to-pink? | Or no gradient, or a brand-specific one? |

**Pass criteria:**
- At least 3 of these defaults have been consciously broken with intent.
- The breaks are *coherent* with each other (don't read as random).

### Test 3 — The Specificity Test
**Question:** Does every element on the page have a *reason* to exist there?

Walk through the page top to bottom. For each element:
- Why is this here?
- Why this specific phrasing / image / layout?
- What would be lost if it were removed?

**Pass criteria:**
- Every section answers these questions specifically, not vaguely.
- Copy is not "lorem ipsum equivalent" — generic SaaS phrases like "empower your team", "transform your workflow", "the platform built for X".
- Images are specific to this brand/product, not generic stock or AI-generated filler.
- Sections that fail the question have been removed or replaced.

**Red flags:**
- "We're here to help" or any variant of generic value props.
- "Innovation meets simplicity" / "Where X meets Y" headlines.
- "Trusted by thousands" without naming who.
- Filler sections to make the page "feel substantial".

### Test 4 — The Friction Test
**Question:** Have we removed every conversion-killing or experience-degrading micro-friction?

Click through the primary user flow. Note every moment of friction.

**Friction checklist:**
- [ ] Above-the-fold loads in <2.5s on 4G (test with throttling).
- [ ] No layout shift after load (CLS < 0.1).
- [ ] First interaction works within 100ms.
- [ ] No modal pop-ups within the first 30s on first visit.
- [ ] Cookie banner is minimal and dismissible quickly (EU contexts).
- [ ] All form fields have visible labels (not placeholder-as-label).
- [ ] Form validation is inline and immediate, not at submit.
- [ ] No "Click to enable JavaScript" or similar blockers.
- [ ] Touch targets ≥ 44×44 on mobile.
- [ ] Keyboard navigation works (tab order is logical, focus visible).
- [ ] No content trapped in carousels without keyboard access.
- [ ] Search bar (if present) responds within 100ms.
- [ ] Primary CTA is visible above the fold AND in nav.
- [ ] Currency/language switcher works without page reload.
- [ ] Back button doesn't lose state in flows.

**Pass criteria:** All boxes checked. Each unchecked box is a release blocker for premium work.

### Test 5 — The Coherence Test
**Question:** Does every page feel like it belongs to the same site, made with intent?

Open 3-5 different pages side by side: homepage, listing, detail, contact, about.

**Coherence checks:**
- [ ] Typography scale consistent across pages (same H1, H2, H3, body sizes).
- [ ] Color usage consistent — same accent appears in same contexts.
- [ ] Spacing rhythm consistent — section padding, content widths.
- [ ] Component reuse — buttons, cards, forms look identical across pages.
- [ ] Motion language consistent — same easings, same durations.
- [ ] Photography style consistent — same color grade, same crop logic.
- [ ] Voice and tone consistent in copy.
- [ ] Navigation behavior identical on every page.
- [ ] Footer identical on every page.
- [ ] Mobile responsive logic identical across pages.

**Pass criteria:** All checks pass. Inconsistencies are the most common shippable bug.

## The Slop Detector — Specific Patterns to Hunt

Independent of the five tests, scan for these AI-default patterns and remove them:

### Visual slop
- Card grids with identical shadow, identical radius, identical hover (lift + shadow expand).
- Gradient mesh hero backgrounds with no relation to brand.
- Glassmorphism (frosted backdrop-blur) applied as decoration with no functional purpose.
- Geometric shapes (circles, squares) in background with no compositional reason.
- Three.js spheres or torus shapes used as "modern decoration".
- Particle effects (canvas dots that move with mouse) on serious B2B sites.
- "Wavy" SVG section dividers.

### Copy slop
- "Welcome to [Brand]" — never use.
- "We are passionate about..." — generic.
- "Our mission is to..." — corporate template.
- "Empowering / transforming / revolutionizing / disrupting" — buzzword stack.
- "Lorem ipsum" surviving to production (yes, it happens).
- Generic CTAs: "Get started" / "Learn more" / "Click here".
- Numbers without context: "10K+ users" without specifying period or product.

### Component slop
- Testimonial cards with stock avatar, fake name, generic quote.
- "Trusted by" logo strips with logos in different colors and sizes.
- Newsletter signup card with "Join 50,000+ readers" (made up number).
- Pricing tables with checkmarks for everything and "Most popular" badge that wasn't chosen with reason.
- FAQ accordion with 3 questions that should be on the homepage.
- Footer with 4 columns of identical-looking links.
- Cookie banner that covers the bottom half of the screen.

### Motion slop
- Everything fades in on scroll, with identical 0.3s duration, identical 50px translate.
- "Bounce" or spring easings on enterprise/luxury sites.
- Custom cursor on a B2B SaaS site that doesn't earn it.
- Smooth scroll (Lenis) on a site with simple content where it makes scroll feel laggy.
- Parallax on hero image, lazily, with no creative direction.

## The Verdict

After all five tests:

- **5 of 5 pass:** Ship.
- **4 of 5 pass:** Address the failing test, re-run that test, then ship.
- **3 or fewer pass:** Stop. The work isn't ready. Identify which tests failed and which slop patterns are present, then return to the relevant skill (design-foundations, marketing-design, interface-design, etc.) and re-do the failing section.

## Anti-pattern: Grading on a curve

The temptation is to say "well, it's pretty good for the time we had". This is the single largest source of slop in production. The pre-flight check is binary per test. There is no "mostly passed Test 2."

If a test fails, the work returns to design. The five tests exist precisely to override the human bias toward "ship and iterate".

## Anti-pattern: Performing the check without acting

If you run this skill and find five issues, fix five issues. Don't run it and ship anyway. The check is the gate, not the report.

## When to invoke

- Before any "I'm done" moment on frontend work.
- When the user asks for review, audit, QA, validation, or "what do you think".
- Before deploying to production from staging.
- When a draft is being prepared for client review.
- Before sending design files for developer handoff.

## What to do if the user pushes back

If the user wants to ship despite failed tests:
- State clearly which tests failed.
- Explain what the failures will look like to the end user / client.
- Defer to the user's decision, but make it informed.
- Note: it's the user's call, not yours, to ship slop. Your job is to surface the cost.
