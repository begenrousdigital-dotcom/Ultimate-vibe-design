# Contributing

Thanks for considering a contribution. This repository is opinionated about design philosophy, so contributions are welcomed but evaluated against a clear bar.

## What we accept

### High-value contributions

- **New category playbooks** — if you have deep expertise in a category not yet covered (healthcare, fintech, government, gaming, podcasts, news, education, nonprofit, etc.) and can write a playbook that meets the quality bar of the existing six.
- **New archetype documentation** — if you can identify a coherent visual archetype currently missing from the six-archetype taxonomy and document it with the same structure (when to use, when not to, real-world references, token preset, typography pairings, motion language).
- **Awwwards research updates** — the SOTD list ages fast. Quarterly updates that observe what's currently winning, what's aging out, and what's emerging are valuable.
- **Pre-flight check refinements** — if you find an AI-default pattern not covered by the existing five tests, propose adding it. The bar is: this failure mode must be observable across multiple AI-generated outputs, not just one.
- **Working examples** — additional `.tsx` or `.html` examples that demonstrate a specific pattern with comments explaining why each decision was made.
- **Translations** — the SKILL.md files are in English by design (universal tooling standard), but README and CREDITS could be translated to French, German, Spanish, Japanese, etc.

### Lower-value but accepted

- Typo fixes, broken link fixes, formatting cleanup.
- Adding missing alt text or accessibility notes.
- Updating outdated tool references (when a library deprecates, when a typeface goes premium, etc.).

## What we don't accept

- **"More is better" contributions** — adding 20 more archetypes, 50 more patterns, 100 more "tips". Density is not the goal; signal-to-noise is.
- **AI-generated bulk content** — if your PR reads like ChatGPT wrote it on its own, it will be rejected. Skills must reflect informed human judgment.
- **Tool-specific framework guides** — this is a design philosophy repo, not a Tailwind/Next.js/React tutorial. If your contribution is mostly "how to do X in Tailwind", it's out of scope.
- **Personal style preferences as universal rules** — "I prefer green, so green should be in the token palette." No. Recommendations must be justified by widespread observed practice or specific use cases.
- **Promotional content** — links to your agency, products, courses, or paid resources within skill files.

## How to propose a change

### For small fixes (typos, broken links, minor refinements)

1. Fork the repo.
2. Make your change on a feature branch.
3. Open a PR with a clear title (`fix: typo in real-estate.md`).
4. No issue needed for small fixes.

### For substantive changes (new content, new sections, restructuring)

1. **Open an issue first.** Describe what you want to add and why. We'll discuss scope before you invest time writing.
2. Once aligned, fork and create a feature branch.
3. Write the contribution following the existing patterns:
   - Skill files use YAML frontmatter with `name` and `description`.
   - Skill files use a consistent voice (direct, opinionated, specific).
   - Examples should be runnable or near-runnable, with comments.
4. Open a PR referencing the issue.

## Voice and style guide

The SKILL.md files use a specific voice. Match it:

- **Direct.** "Avoid X." Not "It might be worth considering avoiding X in some situations."
- **Specific.** Name brands, name typefaces, name patterns. Generic = useless.
- **Opinionated.** Take a stance. Acknowledge trade-offs but commit to a recommendation.
- **Concrete.** Show, don't tell. Show CSS, show the actual pattern, show real references.
- **Honest about limits.** If a pattern is taste-dependent or context-dependent, say so.
- **No hype.** No "game-changing", "revolutionary", "next-generation". This is design, not marketing copy for your own repo.

## File format conventions

### SKILL.md files

```markdown
---
name: skill-name-kebab-case
description: One-sentence description starting with a verb. Use this when... 
---

# Skill Name

Brief intro paragraph.

## Main sections

Body content.
```

### Reference files (non-SKILL .md)

```markdown
# Reference Title

Body content. No frontmatter required.
```

### Code examples

```tsx
/**
 * Brief description of what this demonstrates.
 *
 * Pattern: explain in one paragraph what makes this distinctive.
 *
 * Tokens used:
 *   list the CSS variables it references
 *
 * Pre-flight considerations:
 *   - bullets of caveats
 */

// the code with inline comments where decisions were made
```

## Review process

PRs are reviewed against:

1. **Quality bar** — does it meet the standard of existing content?
2. **Voice match** — does it sound like the rest of the repo?
3. **Specificity** — does it name actual things, or hand-wave?
4. **Non-redundancy** — does it cover ground not already covered?
5. **Honesty** — does it acknowledge trade-offs?

Expect feedback. Substantial revisions are normal. The bar is high because the value of this repo is its curation, not its size.

## Maintainer

This project is maintained by [Greg Annas](https://begenerous.digital) at BeGenerous Digital Sàrl, Lausanne, Switzerland.

Issues and PRs are typically reviewed within 2 weeks. If you don't hear back in that timeframe, feel free to ping the issue.

## License

By contributing, you agree that your contributions will be licensed under the same MIT license that covers the project (see LICENSE).
