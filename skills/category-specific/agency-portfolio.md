---
name: category-agency-portfolio
description: Design playbook for agency, studio, and individual creative portfolio sites. Use when building sites where the work itself is the product — design studios, dev shops, freelancer portfolios, photography sites, architecture practices.
---

# Agency & Portfolio Playbook

The portfolio site is paradoxical: the work is supposed to be the hero, but if the site is mediocre, nobody believes in the work. The site itself is the strongest project in the portfolio. Most agency sites underperform because they apply SaaS-marketing thinking (CTAs, social proof, value props) to a category that has different rules.

## What an agency site is actually for

Three primary jobs, in order of importance:
1. **Filter** — the wrong clients self-eliminate. The site should make it clear who you are *not* for.
2. **Credibility** — quality of execution proves quality of execution.
3. **Pipeline** — capture qualified leads.

Note that "pipeline" is third. The temptation is to optimize for conversions. Agency conversions are largely decided before the lead form by social and visual signals.

## Archetype leaning

Agency sites almost always pull from one of three archetypes:

- **Editorial Luxury** — slow, type-driven, photographic. The agency-of-record vibe (Pentagram, Mother, MetaLab classic era, Locomotive, Active Theory text pages).
- **Kinetic Experimental** — WebGL, custom cursor, scroll-jacked. (Active Theory, Resn, Studio Mesh, North Kingdom.)
- **Minimalist Editorial** — Swiss restraint, monospace, almost-no-design design. (Basic Agency, Bureau Cool, Mast.)

The choice signals positioning. If you do high-end brand work, editorial luxury. If you're a digital production studio, kinetic. If you're strategic / consulting / dev-leaning, minimalist editorial.

**Pick one. Pick consciously. Do not blend.** Agencies that try to be all three look uncertain.

## Page structure — the agency canon

```
1. Nav (often just logo + 2-3 links: Work, Studio/About, Contact)
2. Hero
3. Featured projects (3-6, hero treatment per project)
4. Capabilities / services (brief)
5. Selected clients (logo grid or named list)
6. About / studio philosophy
7. Recognition / press / awards (if applicable)
8. Contact / inquiry
9. Footer
```

The work occupies 60-80% of the visual budget. Everything else is supporting. A common mistake is to give equal real estate to services, about, and process — that pattern reads as small agency or freelancer looking insecure.

## Hero strategies for agencies

### The "name and what you do" hero
- Studio name as massive typography.
- One sentence positioning, often in italic or accent face.
- Example: "Mesh. A design studio working at the edge of brand, product, and motion."
- No CTA, no product, no image.
- Works when: confidence in the wordmark. Best for studios with strong typographic identity.

### The "show, don't tell" hero
- Full-bleed video or image montage of recent work.
- Studio name tucked into the corner.
- Auto-rotating or scroll-triggered transitions.
- Works when: portfolio quality justifies it. Risk: looks generic if work isn't strong.

### The "manifesto" hero
- A statement or paragraph as type, scrollable.
- Sometimes split into clauses that reveal on scroll.
- Used by Mother, Wieden+Kennedy in some eras, opinion-led studios.
- Works when: the studio has a distinct philosophy and the writing is sharp.

### The "project marquee" hero
- One current project takes the entire viewport.
- Treated like a magazine cover.
- Studio name and nav minimal overlay.
- Works when: you have a recent project worth that real estate. Updated regularly.

## The work index — most important page

The page listing all projects is where prospects spend the most time. Three formats:

### Format A: Grid (most common)
- 2-3 column grid of project cards.
- Each card: hero image + project name + client + one-line description.
- Hover reveals a second image, color shift, or motion.
- Best when: 10-30 projects, mostly visual.

### Format B: List (editorial)
- Horizontal rows. Each row: year, client, project title, services, with an image revealing on hover or to one side.
- Used by Basic Agency, many architecture studios.
- Best when: <15 projects, you want to emphasize range over volume.

### Format C: Cinematic full-screen
- Each project takes the full viewport.
- Scroll between them with smooth snap or pin.
- Most expensive to build. Used by Active Theory, Resn.
- Best when: 5-8 hero projects, motion is part of the work.

## Project detail page anatomy

The project case study is where credibility is built or lost. Structure:

1. **Cover** — full-bleed hero image or video. Title, client, year, services tagged.
2. **Brief / context** — 1-2 paragraphs. What was the problem.
3. **Approach** — how you tackled it. Optional process artifacts (sketches, wireframes, references).
4. **Solution / outcome** — large images, video, scrollable mockups. The bulk of the page.
5. **Results** — metrics if available, quotes if not.
6. **Credits** — team, collaborators, role honestly stated.
7. **Next project** — sticky or large link to the next case study.

**Writing rules for case studies:**
- Past tense, third person about the client, first person about the studio is fine.
- "We" not "I" unless you're a true solo studio.
- Be specific about your role. "I led design" vs "Our team designed" matters for legal honesty and for prospects evaluating fit.
- No metrics you can't defend. "Increased conversion 312%" without context kills credibility.

## Typography for agencies

Agency sites are the most type-driven category. Your typography literally is the work.

**Recommended pairings by archetype:**

| Studio type | Display | Body | Accent |
|---|---|---|---|
| Brand-led, editorial | GT Sectra, Editorial New, Canela | Söhne, Aeonik | Italic or contrasting weight |
| Digital production | Aeonik Mono, IBM Plex Mono | Aeonik, Inter | Variable font in motion |
| Strategy / consulting | Söhne, GT America | Söhne | None |
| Experimental / motion | Custom display + Geist Mono | Geist Sans | Variable font animation |
| Architecture / industrial | GT Sectra, ABC Diatype | ABC Diatype | Small caps |

Custom typography is the single highest-leverage move. A custom logotype or one custom display face will lift the entire site above 80% of competitors instantly. Budget for it.

## Color for agencies

Most premium agency sites are near-monochromatic. Black on cream, off-white on charcoal, or single color with one accent. The work brings the color.

**Common palettes:**

```css
/* Editorial cream */
--surface-base: oklch(96% 0.012 80);      /* warm cream */
--ink-primary: oklch(15% 0.005 80);       /* warm near-black */
--accent: none or one project-driven color

/* Charcoal premium */
--surface-base: oklch(15% 0.005 240);     /* cool near-black */
--ink-primary: oklch(95% 0.005 240);
--rule: oklch(30% 0.005 240);

/* Pure paper */
--surface-base: oklch(99% 0 0);
--ink-primary: oklch(8% 0 0);
--accent: oklch(50% 0.18 var(--project-hue));
```

The accent color changing per project page is a signature move (Hello Monday, Active Theory). The shell stays neutral; each project owns its hue.

## Motion language

Agency sites are expected to move. Motion proves capability. But the *type* of motion signals positioning.

- **Restrained editorial** (Pentagram, Mast): subtle reveals on scroll, custom cursor maybe, almost no transitions on hover. Motion is invisible until needed.
- **Premium kinetic** (Locomotive, Studio Active Theory): smooth scroll (Lenis), magnetic buttons, scroll-pinned sections, GSAP timelines. Motion is the texture.
- **Experimental / WebGL** (Resn, Active Theory hero): full Three.js scenes, shader effects, GPU-level animations. Motion is the message.

**Don't mix tiers.** A site with Lenis smooth-scroll AND a full WebGL hero AND custom cursor AND magnetic buttons AND a marquee feels exhausting. Pick a motion language and execute it consistently.

## About / Studio page

After Work, this is the most-visited page. Structure:

1. **Studio thesis** — what you believe. 1-2 paragraphs, opinionated.
2. **Team** — photos, names, roles. Real photos, not avatars. Bonus: photos shot in consistent style.
3. **Location** — actual address, studio photos. Geographic identity matters.
4. **Process** (optional) — only if your process is genuinely distinctive. Generic "discover / design / develop" diagrams are filler.
5. **Recognition** — awards, press, talks, books written. Selective, not exhaustive.
6. **Clients** — full named list, often with sectors tagged.

**Don't include:**
- "Our values" word clouds.
- Stock office photos.
- Animated stat counters ("500+ projects delivered").
- "Why us" sections — let the work do that.

## Contact page

For agencies, the contact page is qualification, not capture.

**Pattern A: Direct email + filter questions.**
- Email address (real, monitored).
- Optional fields: project type, budget range, timeline, link to brief.
- "We respond within 2 business days. Currently booking [season] [year]."

**Pattern B: Calendar / form.**
- Embedded Cal.com or similar.
- 3-5 qualifying questions.
- Auto-rejection or routing based on budget tier.

**Budget range field is critical.** It filters tire-kickers. Common ranges:
- < CHF 10k
- CHF 10-30k
- CHF 30-75k
- CHF 75-200k
- CHF 200k+

If you don't show budget, you'll get pitched on €5k branding projects when you're trying to book €80k engagements.

## Forbidden patterns

- "We are storytellers / craftsmen / dreamers" — every agency claims this.
- "Award-winning agency" as opener — let awards speak in their section.
- "Founded in [year]" if the year is recent. (Doesn't apply if you have heritage.)
- "Trusted by" with consumer brand logos when your work is B2B (and vice versa).
- Animated counter stats. Always.
- Hand-drawn arrows pointing to CTAs. 2014.
- Testimonial pages with 47 quotes. 3-5 strong quotes beat 50 generic ones.
- "We don't follow trends, we set them." (You can imagine the rest.)

## Pricing transparency

Most agencies hide pricing. The newer school (Basic Agency, some indie studios) publishes starting prices or even productized packages.

Pros of transparency:
- Filters early. No 30-minute calls with €3k budget prospects.
- Signals confidence.
- Search/SEO advantage ("agency design price Switzerland").

Cons:
- Limits anchoring upward in negotiation.
- Competitors can undercut explicitly.

Default: don't show full pricing, but show *floor* ("Projects start at CHF 15k") and budget brackets in the contact form.

## Greg-specific notes for BeGenerous.digital

**Positioning:** Lausanne digital agency, vibe-coding led, Claude Code expertise. The differentiation is the *velocity* of the AI-directed workflow and the *premium aesthetic standard*. Position against template-shops (Wix-style) and against premium digital studios (Locomotive, Antinomy) — you're in between: premium quality at faster velocity.

**Archetype:** Minimalist Editorial with one Kinetic signature element. The brand identity (Ignition gradient, Instrument Serif italic + Geist) is already established. The gradient is the signature; the rest should be restrained.

**Concrete site structure:**
1. Hero — "BeGenerous Digital. [One-sentence positioning in French, italic Instrument Serif accent on one word]." The Ignition gradient as a dot or wordmark detail, not a full background.
2. Selected work — 4-6 projects: Edirex, BrickInvest, RealEstimate, FidUp (when public), CREA, Duo Guardians, AresFord.
3. Approach — one paragraph on the vibe-coding methodology. Honest about being AI-directed.
4. Services — three tiers or three offers. Productize if possible (e.g., "Brand site refresh, CHF 12k, 3 weeks").
5. About — Greg's photo, Lausanne address, short bio. No team page unless you grow.
6. Contact — Cal.com embed at meet.begenerous.ch. Budget filter included.
7. Footer — Ignition signature, Lausanne address, RC, language switcher (FR/EN).

**Visual rules specific to BeGenerous:**
- Body: Geist Sans. Display: Instrument Serif italic for accents only.
- Ignition gradient: never on backgrounds, only on the logo dot, one underline accent per page max, or a single hero gradient sweep.
- Surface: ink #09090F or off-white #FAFAF7. Pick one as primary site mode; the other for secondary pages.
- One Lenis smooth-scroll for editorial pacing. No magnetic cursor.
- Project cards: large, image-led, two-column max.
