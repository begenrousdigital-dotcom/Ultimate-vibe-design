# Credits & Attribution

This repository is a synthesis. It exists because of the work of others who published their design intelligence openly. Crediting them is both ethical and practical: if you find a pattern here interesting, the original sources often go deeper.

## Source repositories

The following public repositories were studied, synthesized, and adapted into this collection. Where specific patterns derive from a source, attribution is provided inline within the relevant skill file.

### 1. [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
**What it contributed:** The "engineered anti-bias" methodology — explicit ban lists (Inter as default, purple gradients, h-screen centered heroes) paired with prescribed replacements. The conceptual framing that AI design slop is a statistical convergence problem, not a taste problem.

**Where it lives in this repo:** `skills/design-foundations/references/anti-slop.md` and the ban-list portions of `skills/marketing-design/SKILL.md`.

### 2. [greensock/gsap-skills](https://github.com/greensock/gsap-skills)
**What it contributed:** The motion methodology — when to reach for GSAP vs CSS, the ScrollTrigger patterns, the "motion language" idea (consistent eases, durations, and stagger rhythm across a project).

**Where it lives in this repo:** `skills/motion-gsap/SKILL.md` and parts of `skills/motion-css/SKILL.md`. The escalation rule (CSS → Framer Motion → GSAP) is adapted from this source.

### 3. [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
**What it contributed:** The marketing-design vs interface-design distinction, hero paradigm taxonomy, and the "creative arsenal" of specific layout tactics that go beyond the canonical marketing site structure.

**Where it lives in this repo:** `skills/marketing-design/SKILL.md`, `skills/marketing-design/references/hero-paradigms.md`, and `skills/marketing-design/references/creative-arsenal.md`.

### 4. [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
**What it contributed:** The three-layer token architecture (primitive → semantic → component), the OKLCH color space rationale, and the comprehensive UI/UX heuristics for interface work.

**Where it lives in this repo:** `skills/design-tokens/SKILL.md` and the token templates in `skills/design-tokens/templates/`.

### 5. [anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)
**What it contributed:** The official Anthropic frontend-design plugin — the foundational structure for Claude Code skill plugins, the SKILL.md format conventions, and the baseline patterns Anthropic recommends.

**Where it lives in this repo:** Throughout the `.claude-plugin/plugin.json` structure and the general SKILL.md conventions. Some baseline patterns in `skills/interface-design/SKILL.md` are adapted from the official plugin.

### 6. [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design)
**What it contributed:** The intent-first philosophy — the idea that the agent must articulate *who is this for, what is it for, what should it feel like* before generating. The dense-table and form patterns for interface work.

**Where it lives in this repo:** `skills/design-foundations/references/intent-first.md` and the structural patterns in `skills/interface-design/references/tables.md` and `forms.md`.

## Original contributions

The following are original work by the maintainers of this repository:

- **The six-archetype taxonomy** (Editorial Luxury, Ethereal Glass, Soft Structuralism, Brutalist Industrial, Minimalist Editorial, Kinetic Experimental) and the specific calibration for each.
- **The six-category playbooks** (real estate, SaaS, agency, fashion/luxury, e-commerce, restaurant/hotel).
- **The Awwwards 2025-2026 research** — curation of SOTD winners, font pairings observed, recurring pattern taxonomy.
- **The pre-flight check methodology** — the five-test anti-slop gate (Identification, Anti-Default, Specificity, Friction, Coherence).
- **The Swiss/Romandie calibration** — typography, color, and pattern recommendations specific to the Suisse romande market context.
- **The synthesis** itself — the structural decisions about how the skills fit together, what to include and what to omit, and the philosophical framing.

## Awwwards research

Pattern observations in `awwwards-research/` derive from public Awwwards.com Site of the Day, Site of the Month, and Honors winners between December 2025 and May 2026. No design assets are reproduced. Studio and brand names referenced (Floema, Active Theory, Locomotive, Pentagram, Linear, Cal.com, Resend, Aesop, Khaite, Hermès, Loro Piana, etc.) are mentioned as public reference points only — no affiliation or endorsement is implied.

## Typeface references

Typefaces named in this repository (Geist, Söhne, Aeonik, Editorial New, GT Sectra, Instrument Serif, ABC Diatype, IBM Plex, Inter, etc.) are property of their respective foundries (Vercel, Klim Type Foundry, CoType, Pangram Pangram, Grilli Type, Instrument, Dinamo, IBM, Rasmus Andersson, et al.). They are referenced as recommendations only — licensing is the user's responsibility.

## How to credit derivative work

If you fork or extend this repository, you are not required by the MIT license to preserve credits, but doing so is appreciated. The minimum acknowledgment we'd ask for:

> Built on [claude-design-skills](https://github.com/begenrousdigital-dotcom/Ultimate-vibe-design) by BeGenerous Digital, which synthesizes the work of multiple public design-skill repositories.

If you find a pattern here that you trace to one of the source repositories, credit them directly — they did the original work.

## Reporting missing attribution

If you authored content that is reflected in this repository and you feel attribution is missing or inadequate, please open an issue. We will correct attribution promptly. The goal is honesty about lineage, not credit-hoarding.
