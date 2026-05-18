# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-05-18

Initial public release.

### Added

**Core skills (8 modules):**
- `design-foundations` — intent-first philosophy, anti-slop ban list, quality checks
- `design-tokens` — three-layer OKLCH token system with templates (tokens.css, tailwind.config.ts, globals-v4.css)
- `marketing-design` — high-impact marketing site philosophy + 6 archetype documents
- `interface-design` — dense UI patterns (tables, forms) for SaaS dashboards and admin interfaces
- `motion-gsap` — GSAP and ScrollTrigger recipes with escalation methodology
- `motion-css` — CSS-only motion patterns for performance-critical contexts
- `category-specific` — 6 category playbooks (real estate, SaaS, agency, fashion/luxury, e-commerce, restaurant/hotel)
- `pre-flight-check` — 5-test anti-slop QA gate (Identification, Anti-Default, Specificity, Friction, Coherence)

**Six archetypes documented:**
- Editorial Luxury
- Ethereal Glass
- Soft Structuralism
- Brutalist Industrial
- Minimalist Editorial
- Kinetic Experimental

**Awwwards research:**
- Curated SOTD 2026 reference list across all major archetypes
- Font pairings observed in premium 2025-2026 web design
- Pattern library — recurring layout, interaction, and motion idioms

**Working examples:**
- `hero-asymmetric.tsx` — editorial asymmetric hero
- `magnetic-button.tsx` — cursor-following button with Framer Motion
- `scroll-pin-section.tsx` — horizontal scroll-pinned section with GSAP
- `bento-grid.tsx` — bento feature grid with varied cell content

**Governance:**
- MIT License
- CREDITS.md — full attribution to source repositories
- CONTRIBUTING.md — contribution guidelines and voice guide
- Issue and PR templates
- .gitignore — standard exclusions for macOS, Windows, Linux, Node, Claude Code

### Synthesis sources

This release synthesizes content from six public repositories:
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
- [greensock/gsap-skills](https://github.com/greensock/gsap-skills)
- [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
- [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)
- [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design)

See CREDITS.md for detailed attribution.

### Known limitations

- Awwwards research is a snapshot dated May 2026. Web design moves quickly; expect quarterly updates.
- Skill files are in English by design (universal tooling standard). Translations may follow.
- Category playbooks reflect the maintainer's geographic context (Suisse romande / European market). North American and Asian market specifics are noted where relevant but not exhaustively covered.

---

## Unreleased

Future ideas tracked here. Open an issue to discuss any of these:

- Additional category playbooks: fintech, healthcare, gaming, news/media, education, government.
- Additional archetypes if new coherent visual languages emerge.
- More working examples (form patterns, data viz, navigation idioms).
- Localization of CREDITS and README to FR/DE/ES/JA.
- Integration with Claude Code's marketplace once available.
