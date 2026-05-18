# Claude Design Skills

> A complete design intelligence system for Claude Code and other AI coding agents.
> Stops the AI from producing generic, template-shaped output. Teaches it what *good* actually looks like — grounded in real award-winning work, not theory.

This is a synthesis of the strongest public design-skill repositories, distilled into a coherent system and grounded in a curated study of Awwwards Sites of the Day across categories. Most "design skills" stack rules without philosophy; this one starts with the **why** (intent), then enforces the **how** (rules), then proves it with **what** (real examples).

---

## Why this exists

LLMs produce "AI slop" frontend by default — purple gradients on white, Inter everywhere, 3-column card layouts, generic Linear-clone dashboards. The root cause is not lack of taste. It's **statistical convergence**: the model averages the training data, and the average of every landing page is mid.

This skill set fights that convergence on three fronts:

1. **Intent-first thinking** — forces the agent to articulate *who, what for, what feel* before generating. Adapted from [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design).
2. **Engineered anti-bias rules** — explicit bans (Inter, purple, h-screen) + replacements (Geist, Emerald, min-h-[100dvh]). Adapted from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill).
3. **Real-world calibration** — a research file with actual Awwwards SOTD winners (May 2026 ← Dec 2025), the studios behind them, fonts they actually use, and patterns they actually deploy. Not opinions, signal.

Combined with the official [anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) frontend-design plugin, the [greensock/gsap-skills](https://github.com/greensock/gsap-skills) animation engine, the [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) marketing-side context, and the [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) token architecture.

---

## Architecture

```
claude-design-skills/
├── skills/
│   ├── design-foundations/       ← ALWAYS-ON. Philosophy + anti-slop core.
│   ├── design-tokens/            ← Three-layer token system (primitive → semantic → component)
│   ├── marketing-design/         ← Landing pages, agency, promo, portfolio
│   │   └── archetypes/           ← 6 named aesthetic directions to pick from
│   ├── interface-design/         ← Dashboards, SaaS apps, admin (NOT marketing)
│   ├── motion-gsap/              ← Scroll-driven, timeline, pin, advanced choreography
│   ├── motion-css/               ← CSS animations, Framer Motion, micro-interactions
│   ├── category-specific/        ← Per-domain guidance (real estate, e-commerce, etc.)
│   └── pre-flight-check/         ← Final QA matrix before output
├── awwwards-research/            ← Curated SOTD data: studios, sites, fonts, patterns
└── examples/                     ← Working code excerpts
```

**Each `SKILL.md` has a YAML frontmatter with `name` and `description`** — that's the Claude Code skill discovery contract. Drop the `skills/` folder into your `.claude/skills/` directory (project or global) and they auto-load on relevant prompts.

---

## How to use

### Option 1 — Project install (recommended)

```bash
cd your-project
git clone https://github.com/YOUR-USERNAME/claude-design-skills.git temp-clone
mkdir -p .claude/skills
cp -r temp-clone/skills/* .claude/skills/
rm -rf temp-clone
```

Then in `CLAUDE.md` at your project root, add:

```md
## Design

For any frontend or visual work, use the skills in `.claude/skills/`:
- design-foundations is always relevant
- design-tokens when setting up or auditing the visual system
- marketing-design for landing/promo/agency/portfolio work
- interface-design for dashboards, admin, SaaS app surfaces
- motion-gsap for scroll-driven animation, motion-css for everything else
```

### Option 2 — Global install (works across all your projects)

```bash
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

### Option 3 — As a Claude Code plugin

The repo includes `.claude-plugin/plugin.json`. From any Claude Code session:

```
/plugin add github.com/YOUR-USERNAME/claude-design-skills
```

### Option 4 — As context for other AI coders

Each `SKILL.md` is a self-contained markdown file. Paste the relevant ones (or attach them) to Cursor, Windsurf, GPT, etc. The rules are framework-agnostic.

---

## Reading order if you want to learn from it

1. `skills/design-foundations/SKILL.md` — the philosophy. Read once, never forget.
2. `awwwards-research/README.md` — calibration. What real award-winning work looks like in 2026.
3. `skills/design-tokens/SKILL.md` — the token architecture every project needs.
4. `skills/marketing-design/SKILL.md` + browse the archetypes.
5. `skills/interface-design/SKILL.md` if you build SaaS.
6. `skills/motion-gsap/SKILL.md` when you want scroll-driven animation.
7. `skills/pre-flight-check/SKILL.md` — the final filter.

---

## What this is NOT

- Not a component library (use shadcn/ui, Radix, Park UI).
- Not a UI kit (use Geist or Linear's component patterns as inspiration, build your own).
- Not a "make my site beautiful in one click" — it's an agent-instruction system, not a generator.
- Not a guarantee of award-winning output. It raises the floor from "AI slop" to "competent intentional craft." Going past that requires the human in the loop.

---

## Credits & lineage

This repo synthesizes and re-organizes ideas from:

| Source | What was taken |
|---|---|
| [anthropics/claude-code frontend-design](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) | Core "avoid AI aesthetics" principle, design thinking framework |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Anti-bias engineering rules, dial system, AI tells list, archetype variance engine |
| [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design) | Intent-first philosophy, the mandate, swap/squint/signature tests, craft principles |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Three-layer token architecture, design system structure |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | ScrollTrigger / Timeline / React integration patterns |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Site architecture per category, content patterns |
| [awwwards.com](https://www.awwwards.com) | The empirical calibration — real winning work as ground truth |

All credit to the original authors. This repo restructures their work into a single coherent system and adds the Awwwards calibration layer.

License: MIT (compatible with all source licenses where stated).
