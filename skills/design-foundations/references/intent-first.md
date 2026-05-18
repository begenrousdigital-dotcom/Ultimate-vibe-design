# Intent-First — Worked Examples

How to apply the philosophy in real cases. Worked examples that show the gap between defaulting and choosing.

---

## The principle

Most AI design failure happens at one specific moment: the agent reads a brief, recognizes a *category* ("dashboard," "landing page," "portfolio"), and reaches for the category's average template. Intent-first thinking blocks that reach by forcing a layer between category and execution.

```
DEFAULT REACH:     prompt → category template → execution
INTENT-FIRST:      prompt → intent (who/what/feel) → domain exploration → signature → execution
```

The added layer is where defaults die.

---

## Worked example 1 — the SaaS landing page

**Brief:** "Build a landing page for FidUp, a Swiss-native compliance platform for fiduciaires (small accounting firms). They handle client management, LBA compliance, archiving, tax prep."

### Defaulting (bad)

The agent reads "SaaS landing page" and produces:
- Hero: big H1 "The all-in-one platform for fiduciaires" + subhead + two CTAs centered on a soft gradient background
- Feature row: 3 cards (Client management / Compliance / Tax prep) with rounded icons
- Testimonial section: 3 quotes with circular avatars
- Pricing: 3 tiers with the middle "highlighted"
- Footer: standard

This works, technically. It's also indistinguishable from 10,000 other SaaS landings. A fiduciaire in Lausanne could replace it with the competing platform and not notice the difference.

### Intent-first (good)

**Who is this human?**
A senior partner at a 12-person fiduciaire in Lausanne, age 50, who has used the same Excel + paper LBA dossier process for 20 years. They're reading this on a Tuesday afternoon between client meetings. They distrust software; they've been burned by promises before. They speak French. They want to know: is this serious? Is it Swiss? Will it survive an OAR audit?

**What must they accomplish?**
Decide in 90 seconds whether to book a demo. The verb is *decide*, not *use*.

**What should this feel like?**
Serious. Swiss. Not consumer-friendly. The aesthetic of a Banque Cantonale Vaudoise brochure, not a Silicon Valley pitch. Cream paper, narrow serifs, generous margins, careful copy. Trust comes from restraint, not enthusiasm.

**Domain exploration:**
- Vocabulary: ZEFIX, OAR, LBA, FINMA, fiduciaire, dossier, archivage légal, ayant droit économique, registre du commerce, exercice comptable
- Color world: parchment, walnut, ink, leather binding, brass plaque, embossed seal
- Signature: a horizontal "exercise" timeline navigation showing 2020 → 2026 with current exercise indicated (every fiduciaire mentally lives in exercise-years)
- Defaults rejected: testimonial carousel → replace with one detailed case study from a real fiduciaire; pricing tier table → replace with "Tarifs sur dossier — demandez un devis"; three feature cards → replace with editorial sections, one per module

**The output then becomes:**

Hero: a single sentence in `Editorial New` italic. *"Conçu pour les fiduciaires suisses."* Left-aligned. Behind it, faint scanned texture of pre-numerated paper. CTA: "Demander une démonstration" with a small `Cal.com` indicator that an associate has time this week.

Sub-header section: a horizontal exercise navigation `2020 · 2021 · 2022 · 2023 · 2024 · 2025 · 2026 [current]` — a signature element that says *we understand your year*.

Feature sections: each module gets a full editorial section with serif headlines, body in `GT Walsheim`, generous `py-32`, supporting screenshot to one side, never centered. One per scroll.

Trust section: not testimonials. A single page that lists certifications (OAR-FCT, ASR, ZEFIX integration partner, Infomaniak Swiss hosting) with the actual logos and certificate numbers.

Footer: address in Lausanne, phone with `+41` prefix in mono.

This is no longer a SaaS landing page. It's *Greg's specific product's landing page* — and it could not be transplanted to a US SaaS without obviously breaking.

---

## Worked example 2 — the agency portfolio

**Brief:** "Build me a portfolio site for BeGenerous Digital."

### Defaulting

- Dark hero with a fullscreen video loop, "BeGenerous — We build digital experiences"
- 3-column grid of work thumbnails
- Services list (Web Design / Branding / Strategy)
- "Let's work together" CTA section

This is fine. It is also: every agency site. You could rename it to "OctoStudio" or "Pixelfox" and the design wouldn't object.

### Intent-first

**Who is this human?**
A founder of a 10-50 person Swiss SME who saw BeGenerous mentioned in a LinkedIn comment by a peer. They're at their desk on a Wednesday morning. They have a vague problem ("our website looks dated") and a fuzzy budget. They will spend 4-7 minutes here before deciding whether to send the contact form.

**What must they accomplish?**
Believe BeGenerous is serious enough to handle their thing, and different enough from their last bad agency experience. The verb is *believe*.

**What should this feel like?**
Confidently weird. Not corporate. Not bro-startup. Like an architect's monograph, not a sales deck. The brand identity Greg already built — `Ignition` gradient, `Ink` base, `Instrument Serif italic` + `Geist Sans` — works because it's already not the default.

**Domain exploration:**
- Vocabulary: ignite, ignition, becoming, generosity, craft, signal, frame, build
- Color world: hot exhaust gradient (#FFB800 → #FF2D00 → #FF0080), oil-black, white-cool
- Signature: gradient dot logo signature appears as a navigation element, scrolls, anchors — it's an active member of the layout
- Defaults rejected: hero video → replace with a long-form opening essay; 3-col work grid → replace with editorial case-study scroller; services list → replace with "What we'd build for you" interactive selector

The output: an asymmetric editorial site that opens with a single sentence and reveals work through scrolling case studies, not a grid. The Ignition gradient appears only on the logo dot and on one interactive element per page — never as a hero background (which would be the default).

---

## Worked example 3 — the dashboard

**Brief:** "Build the admin dashboard for Edirex matching artisans with clients."

### Defaulting

- Sidebar with icons
- Topbar with search + avatar
- Grid of stat cards (Active jobs / Pending quotes / Revenue / etc.)
- Recent activity feed
- Charts

This is Linear's dashboard. Or Stripe's. Or Vercel's. It is also: not Edirex's. Edirex isn't a generic SaaS — it's a marketplace for construction professionals in Suisse romande. Hands-dirty, French-speaking, 50-year-old artisans on phones in vans, not designers in cafés.

### Intent-first

**Who is this human?**
The Edirex admin (Haris) reviewing pending matches at his desk in Montreux. He needs to verify artisan credentials, monitor matching quality, and intervene when matches stall. He's between client calls.

**What must they accomplish?**
Triage pending matches and intervene where needed. The verb is *triage*, not *monitor*.

**What should this feel like?**
Operational. Like a dispatcher's screen, not a marketing dashboard. Dense where data lives, breathing where decisions live.

**Domain exploration:**
- Vocabulary: dossier, devis, chantier, artisan, raccord, sur-mesure, commission, créneau
- Color world: chantier orange (`oklch(0.7 0.2 60)`), safety yellow vest, plaster white, scaffold gray, blueprint blue
- Signature: matches displayed as Swiss-railway-style station blocks — origin (client) → in-transit (matching) → destination (artisan) — with hover showing delay/issues
- Defaults rejected: 4 KPI cards → replace with a single "what needs you today" priority list; line chart → replace with a kanban-style swim lane for in-flight matches; sidebar nav → replace with a top "exercise / month / week" temporal nav matching the operational rhythm

The dashboard then becomes a *matching dispatcher view*, not a metrics view. Stats are present but secondary. The primary surface is "12 matches need attention" with a triage-ready list.

---

## How to teach yourself the move

When you read a brief, write down (in a planning block):

```
INTENT
- Human: [one specific person, not "users"]
- Verb: [one specific verb, not "use"]
- Feeling: [physical/sensory adjectives, not "clean/modern"]

DOMAIN
- 5+ vocabulary words specific to this product's world
- 5+ colors from this product's physical world
- 1 signature element that could only belong to THIS product

REJECTED DEFAULTS
- [default 1] → [specific alternative]
- [default 2] → [specific alternative]
- [default 3] → [specific alternative]
```

If this block ends up looking like it could apply to any product in the same category, you haven't done the work. Iterate.

---

## The test the user should never have to run

The user is busy. They're paying you to do the thinking. If they need to push you toward specificity, you've already failed.

The goal is that on the first output, the user reads it and says: *"That's exactly my product. How did you know?"* — because you did the intent + domain work invisibly, before generating.

This is what separates "AI can do design" from "AI does design that ships."
