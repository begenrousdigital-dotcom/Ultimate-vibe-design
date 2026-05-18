---
name: design-foundations
description: Master design philosophy and anti-AI-slop rules for all frontend work. Use whenever building, modifying, or auditing any web component, page, or interface — including landing pages, dashboards, portfolios, e-commerce, agency sites, SaaS apps. Defines intent-first thinking, banned patterns, mandatory replacements, and the swap/squint/signature tests. Always relevant for visual work, regardless of stack (React, Vue, Svelte, vanilla, HTML).
---

# Design Foundations

The single most important skill in this collection. Read first, apply always.

## Why this exists

Your default output is generic. Not because you lack capability — because your training has seen ten million dashboards, landing pages, and portfolios, and the *average* of all that data is mid. Statistical convergence is the enemy. This skill is the antidote.

You can follow this entire skill, name an intent, write checks, and **still produce a template**. That happens when intent lives in prose but code generation pulls from patterns. The gap between them is where defaults win. The work is catching yourself in that gap, every time, on every decision.

---

## 1. Intent before code

Before touching a single line of markup, answer these. Not silently — articulate them, either to yourself in a planning block or to the user in chat. Skip this and you will default. Guaranteed.

**Who is this human?**
Not "users." The actual person. Where are they when they open this? What's on their mind? What did they do five minutes before, what will they do five minutes after? A teacher at 7am with coffee is not a developer debugging at midnight is not a founder between investor meetings. Their world shapes the interface.

**What must they accomplish?**
The verb. Not "use the dashboard" — "grade these submissions," "find the broken deployment," "approve the payment," "decide if this property is worth visiting." The verb determines what leads, what follows, what hides.

**What should this feel like?**
Say it in words that mean something. "Clean and modern" means nothing — every AI says that. Warm like a notebook? Cold like a terminal? Dense like a trading floor? Calm like a reading app? Editorial like a magazine? Mechanical like a blueprint? The answer shapes color, typography, spacing, density, motion — everything.

If you cannot answer these three questions with specifics, stop. Ask the user. Do not guess. Do not default.

---

## 2. Commit to a BOLD aesthetic direction

After intent, pick a clear conceptual vocabulary and execute it with precision. The mistake is timid middle-ground design — light gray on white, Inter, rounded-md, shadow-sm, three centered cards. That's the average. The average is invisible.

Choose an extreme that fits the intent:

- **Brutally minimal** (Linear, Vercel, Notion) — borders not shadows, mono for data, monochrome
- **Maximalist editorial** (Floema, Obys, Apple events) — massive serif, image-led, kinetic
- **Retro-futuristic** (Replicate, Vercel /ai) — terminal greens, mono, ascii art
- **Organic / natural** (Patagonia, food brands) — warm earth tones, photography, generous space
- **Luxury / refined** (Hermès, Bottega) — Editorial New / Canela, slow motion, restraint
- **Playful / toy-like** (Linear's marketing, Stripe's docs) — bright accents, bouncy springs (sparingly)
- **Editorial / magazine** (NYTimes T Brand, MIT Technology Review) — column grid, drop caps, serif body
- **Brutalist / raw** (CASH App, Off-White) — Swiss type, hazard red, exposed grid lines
- **Industrial / utilitarian** (Linear's app, Splice) — telemetry numbers, mono everywhere, tight density
- **Soft pastel** (Notion, Substack) — washed colors, generous whitespace, friendly serif

Bold maximalism and refined minimalism both work. The key is **intentionality**, not intensity.

**Anti-rule:** never converge on the same direction across generations. If your last three sites were "Soft Structuralism with Geist," this one must be something else.

---

## 3. Hard bans — non-negotiable

These are the AI tells. If your output includes any of them unprompted, the design fails. No exceptions.

### Typography bans
- **NO `Inter` font.** Replace with: `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, `GT Walsheim`, `Aeonik`, `ABC Diatype`, `Founders Grotesk`, `Plus Jakarta Sans`. Pick based on archetype.
- **NO `Roboto`, `Arial`, `Helvetica`, `Open Sans`, `system-ui`.**
- **NO serif fonts on dashboards / software UIs.** Serif is for editorial, marketing, lifestyle, agency work only.
- **NO oversized H1s.** A 96px H1 is not premium, it's loud. Control hierarchy through weight + color + spacing, not just scale.

### Color bans
- **NO purple gradients.** No `from-purple-500 to-pink-500`, no `from-violet-600 to-fuchsia-600`. This is the single most common AI tell. Period.
- **NO neon glows.** No `shadow-[0_0_60px_rgba(168,85,247,0.5)]` halos under buttons.
- **NO pure black (`#000000`).** Use `#050505`, `zinc-950`, `oklch(0.15 0 0)` — off-black has substance.
- **NO oversaturated accents.** Saturation > 80% is a tell. Desaturate to 60-75% for elegance.
- **NO multi-color rainbow gradients on text** for hero headlines.

### Layout bans
- **NO 3-equal-column "feature card" rows.** Use zig-zag asymmetric, bento, masonry, or horizontal scroll instead.
- **NO `h-screen` for hero.** Use `min-h-[100dvh]` to avoid iOS Safari jumping.
- **NO complex flexbox percentage math** (`w-[calc(33%-1rem)]`). Use CSS Grid.
- **NO centered hero text over a dark image** by default. Try asymmetric (text left or right, image bleed).
- **NO sticky navbar glued edge-to-edge.** Float it, pill it, detach it from the top with `mt-6`.

### Effects bans
- **NO `shadow-md`, `shadow-lg`, `shadow-xl` defaults.** Shadows must be hand-tuned, low-opacity, tinted to background hue.
- **NO custom mouse cursors.** They break accessibility and feel dated.
- **NO scroll-jacking that breaks browser back/forward.**
- **NO emojis in UI text or buttons.** Use proper icons (Phosphor, Radix, Lucide). Even product page emojis in copy are out unless the brand is explicitly playful.

### Content bans (the "Jane Doe effect")
- **NO `John Doe`, `Jane Doe`, `Sarah Chan`, `Jack Su`, `Acme`, `Nexus`, `SmartFlow`, `Lorem Ipsum`.**
- **NO predictable fake numbers** (`99.99%`, `1234567`, `+1 555 0123`). Use organic data: `47.2%`, `+1 (312) 847-1928`, `8,432 / 12,000`.
- **NO `Unsplash` URLs that 404.** Use `https://picsum.photos/seed/{random}/{w}/{h}` or `https://ui-avatars.com/api/?name=...`.
- **NO AI copywriting clichés:** `Elevate`, `Seamless`, `Unleash`, `Next-Gen`, `Game-changer`, `Delve`, `Leverage`, `Empower`, `Revolutionize`, `Cutting-edge`. Write concrete verbs.

---

## 4. Mandatory replacements

When you would have defaulted, do this instead.

| Default | Replacement |
|---|---|
| `font-family: Inter` | `Geist` (technical), `Cabinet Grotesk` (premium), `Aeonik` (agency), `Editorial New` (luxury) |
| `bg-purple-500 → bg-pink-500` gradient | One dominant neutral (`zinc-950`) + one calibrated accent (`emerald-600`, `oklch(0.6 0.2 25)` rust) |
| `<div class="grid grid-cols-3">` (feature row) | Bento with `grid-cols-12` and `col-span-{8,4,5,7}` asymmetric children |
| `<h1 class="text-6xl text-center">` over `<img>` | `<h1 class="text-5xl md:text-7xl tracking-tight">` left-aligned, image to the right with `aspect-[4/5]` |
| `shadow-lg` on a card | `border border-zinc-200/60` + `shadow-[0_1px_2px_rgba(0,0,0,0.04)]` tinted |
| Generic `<button class="bg-blue-500 rounded-lg">` | Black pill (`bg-zinc-950 rounded-full px-6 py-3`) with inset highlight + magnetic hover |
| `<input>` and `<select>` native | Custom popover-driven controls (Radix UI base) |
| `useState` for hover position | Framer Motion `useMotionValue` + `useTransform` (no React re-render) |
| `h-screen` hero | `min-h-[100dvh]` |
| 3 columns of icon + heading + paragraph | One feature per row, zig-zag image alternation, generous `py-32` between |

---

## 5. The mandatory tests — before you ship

Before showing the user, look at what you made. Ask: *"If they said this lacks craft, what would they mean?"* That thing — fix it first.

### The Swap Test
Mentally swap your typeface for Inter. Would anyone notice the design is worse? Swap your layout for a generic Tailwind dashboard template — does it feel meaningfully different? The places where swapping wouldn't matter are the places you defaulted.

### The Squint Test
Defocus your eyes. Can you still perceive hierarchy? Or does everything mush into the same visual weight? Good craft has clear primary / secondary / tertiary at any scale. If everything jumps out, hierarchy failed. If nothing jumps out, you're invisible.

### The Signature Test
Can you point to five specific elements where your aesthetic direction shows up? Not "the overall feel" — actual components: this header treatment, this button shape, this section divider, this empty state, this microcopy tone. A signature you can't locate doesn't exist.

### The Token Test
Read your CSS variables out loud. Do they sound like they belong to this product's world — `--ink`, `--parchment`, `--rust`, `--field` — or could they belong to any project — `--gray-700`, `--surface-2`, `--primary`? Token names are design decisions.

### The Sameness Test
If another AI, given the same prompt, would produce substantially the same output, you have failed. Not "different for its own sake" — different because *this specific product's world* should shape *this specific design*.

If any test fails, iterate before showing.

---

## 6. Make every choice a choice

For every decision, you must be able to explain WHY.

- Why this layout and not another?
- Why this color temperature?
- Why this typeface?
- Why this spacing scale?
- Why this information hierarchy?
- Why this motion curve?

If the answer is "it's common" or "it's clean" or "it works" — you haven't chosen. You've defaulted. Defaults are invisible. Invisible choices compound into generic output.

When you take an action, you should usually be able to defend it in one sentence that mentions the *intent*: *"Tight tracking on the H1 because the product is precise / industrial / editorial."* Not: *"Tight tracking because it looks better."*

---

## 7. Intent must be systemic

Saying "warm" and using cold colors is not following through. Intent is a constraint that shapes every decision.

- If the intent is **warm**: surfaces, text, borders, accents, semantic colors, typography — all warm. Stone palette, oranges/ambers as accents, friendly weights (500), comfortable line-height.
- If the intent is **dense**: spacing, type size, information architecture — all dense. Mono numbers, tight `gap-2`, no decorative whitespace, sidebar always visible.
- If the intent is **calm**: motion, contrast, color saturation, density — all calm. Slow easing, desaturated palette, generous `py-32`, max-w-prose constraints.

After building, check your output against your stated intent. Does every token reinforce it? Or did you state an intent and then default anyway?

---

## 8. When in doubt — explore the product's domain

Generic output: Task type → Visual template → Theme.
Crafted output: Task type → Product domain → Signature → Structure + Expression.

Before proposing any direction, produce all four:

**Domain:** Concepts, metaphors, vocabulary from this product's world. Not features — *territory*. Minimum 5 nouns.
*Example for a wine cellar app: bottle, vintage, decant, terroir, cellar, oxidation, sommelier, label, cork, finish.*

**Color world:** What colors exist naturally in this product's domain? Not "warm" or "cool" — go to the actual physical world. If this product were a physical space, what would you see? List 5+ colors.
*Example for wine: deep oxblood, sediment ochre, parchment label, lead foil, cork tan, oxidized copper.*

**Signature:** One element — visual, structural, or interactional — that could only exist for THIS product.
*Example for wine: a horizontal "decant" loader that pours from full to empty during async actions.*

**Defaults:** 3 obvious choices for this interface type — what would a lazy template do? Name them so you can avoid them.

---

## 9. Communication mode

When you work, **be invisible**. Don't announce modes. Don't say "Let me check the design-foundations skill..." Don't narrate the process. Just jump into work and state suggestions with reasoning.

When you suggest, lead with exploration and recommendation, then confirm:

```
Domain: [5+ concepts from the product's world]
Color world: [5+ colors that exist in this domain]
Signature: [one element unique to this product]
Rejecting: [default 1] → [alternative], [default 2] → [alternative]

Direction: [approach that connects to the above]
```

Then ask: *"Does that direction feel right?"*

---

## Deep dives

- `references/anti-slop.md` — the full banned-pattern list with replacements and code examples
- `references/intent-first.md` — extended philosophy and worked examples of intent → output
- `references/checks.md` — extended versions of the five tests with worked examples

## Companion skills

- `design-tokens` — the three-layer token system every project needs
- `marketing-design` — landing pages, agency, promo, portfolio
- `interface-design` — dashboards, admin, SaaS app surfaces
- `motion-gsap` / `motion-css` — animation patterns
- `pre-flight-check` — the final QA before output

---

## One final thing

Claude is capable of extraordinary creative work. The reason output is usually generic isn't capability — it's the default reach for the average. This skill is permission to take risks, commit to a direction, and execute it with precision. Don't hold back. Show what can be created when thinking outside the box and committing fully to a distinctive vision.
