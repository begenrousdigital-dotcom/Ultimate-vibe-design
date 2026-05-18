# The Five Checks — Full Protocol

Run these before showing the user. Each takes 60 seconds. Skipping them is why output reverts to slop.

---

## Check 1 — The Swap Test

**Question:** If I swapped my typeface for Inter, would anyone notice the design is worse?

**Procedure:**
1. Mentally open `globals.css` and change the body font family to `Inter`.
2. Walk through your hero, your nav, your cards, your buttons.
3. For each section, ask: does the design *depend* on the font I picked, or is the font ornamental?

**Pass:** The font is doing structural work. The display sizes, the tracking, the italic accents — they all read worse with Inter substituted.

**Fail:** It looks the same. Your typography was decorative, not foundational.

**Same test for layout:**
- Swap your layout for a generic 3-col Tailwind dashboard template. Different?
- Swap your color accent for Tailwind's default blue-500. Different?
- Swap your spacing scale to defaults (`gap-4` everywhere). Different?

Every place where swapping wouldn't matter is a place you defaulted.

---

## Check 2 — The Squint Test

**Question:** When I defocus my eyes, can I still see hierarchy?

**Procedure:**
1. Lean back. Cross your eyes slightly until everything is blurry.
2. Look at the screen for 5 seconds.
3. Ask: what jumps out? What recedes? Where does my eye land first, second, third?

**Pass:** A clear primary element (hero headline, primary CTA, main content) catches the eye. A secondary tier (subheads, secondary CTAs) is visible but doesn't fight. Tertiary (metadata, captions) recedes into the background.

**Fail #1 — flat:** Everything is the same visual weight. No clear primary. The eye doesn't know where to go.

**Fail #2 — chaos:** Multiple things compete for primary. The eye jumps around. Often caused by too many accent-color elements, too many shadows, too many sizes.

**Fail #3 — fragile:** One element dominates by accident (a too-saturated icon, a too-large badge). The visual hierarchy is driven by an irrelevant thing.

**Common fixes:**
- Add weight to the primary (font-weight 600+).
- Remove color from non-essential elements.
- Increase scale of headlines, not bodies.
- Bring secondary text *closer* to the background (lighter, smaller).

---

## Check 3 — The Signature Test

**Question:** Can I point to five specific elements where my chosen aesthetic direction shows up?

**Procedure:**
1. Restate your stated direction in one phrase. Example: *"Warm editorial — like a notebook, not a dashboard."*
2. Walk the page top to bottom and list every element where this direction is visible *in a specific design decision*.

**Pass:** Five or more findings. Example for "warm editorial":
1. Body text in `GT Sectra` regular at `text-[17px]/[1.7]` — serif body for reading rhythm.
2. Section dividers are hairline 0.5px borders in `stone-200`, not bold black.
3. Buttons are 6px radius, not 12px — sharper feels more deliberate.
4. The blockquote uses a hanging quotation mark in the gutter, like a print magazine.
5. Numbers in the data sidebar are in `GT Pressura Mono` with `tabular-nums`.

**Fail:** "It feels warm" with no findings to back it up. The direction lives in your prose but not in the code.

**Common cause:** You wrote the intent, then defaulted on execution. The fix is to retrofit at least 5 specific decisions that wouldn't make sense for a different direction.

---

## Check 4 — The Token Test

**Question:** If someone read only my CSS variables out loud, could they guess what this product is for?

**Procedure:**
1. Open your `tokens.css` or theme file.
2. Read the variable names aloud (or scroll past them).
3. Ask: do they describe *generic UI* (`--gray-700`, `--surface-2`, `--primary`) or *this product's world* (`--ink`, `--parchment`, `--field`, `--exercise`)?

**Pass:** Token names evoke the product's domain. A reader could squint at `--ink`, `--cellar`, `--vintage` and guess "wine app."

**Acceptable middle ground:** Tokens are generic but the semantic layer maps them to product-specific names:
```css
--primary: var(--zinc-950);
--ink: var(--primary);  /* product alias */
```

**Fail:** Every token is `--gray-*` or `--blue-500`. The system has no point of view.

**Why this matters:** Token names are design decisions. The most overlooked surface for craft. Fixing them costs nothing and immediately makes the project feel more authored.

---

## Check 5 — The Sameness Test

**Question:** If a competitor's AI was given the same brief, would it produce substantially the same thing?

**Procedure:**
1. Imagine the brief verbatim handed to a different generation. Plot the most likely output.
2. Compare. How different is yours, on a 1-10 scale?

**1-3:** Your output is a generic template. Start over.

**4-6:** Your output has surface-level differences (color, font) but the underlying structure and choices are predictable. Push harder on at least one of: layout, navigation pattern, or content rhythm.

**7-9:** Your output makes choices that wouldn't show up in a competing generation. The site has *a point of view*. Good.

**10:** Your output is so specific to this product that another product in the same category would have to break the design to use it. Excellent.

**Why this matters:** The biggest enemy is convergence — every AI output looking like every other AI output. Sameness is the failure mode.

---

## What to do when a check fails

Don't try to fix all five at once. Pick the worst one and fix that first.

**Order of operations when something fails:**

1. **Swap test fails** → typography or color isn't doing structural work. Replace with chosen-from-intent values, not defaults.
2. **Squint test fails (flat)** → increase contrast between primary/secondary/tertiary. Usually a font-weight + scale fix.
3. **Squint test fails (chaos)** → remove accent uses from non-essential elements. Keep one accent moment per screen.
4. **Signature test fails** → retrofit at least 5 decisions that match the intent. Token names, button radius, divider style, microcopy tone, animation curve.
5. **Token test fails** → rename semantic layer to product domain. 10 minutes work, large payoff.
6. **Sameness test fails** → change one structural thing: replace nav, replace hero, replace section rhythm. Not a color tweak — a structural move.

---

## After-build critique mode

Once you've passed all five checks on your own, consider showing the output and asking the user this specific question:

> *"What would feel off if you used this every day?"*

Their answer is the surface where craft is missing. The thing they name first is the thing you defaulted on.

This question outperforms "what do you think?" because it forces them past politeness and into specificity.

---

## The mandate, restated

Your first output is probably generic. That's normal. The work is catching it before the user has to.

These five checks are how you catch it. Run them every time.
