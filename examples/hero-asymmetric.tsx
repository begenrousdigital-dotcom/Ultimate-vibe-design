/**
 * Editorial asymmetric hero.
 *
 * Pattern: Left column carries oversized typography with one italic accent word
 * in serif display. Right column carries a single full-bleed image or product
 * screenshot. No centered CTAs, no symmetric balance — the asymmetry IS the
 * design.
 *
 * Replaces the generic "centered headline + sub + button stack" hero.
 *
 * Tokens used:
 *   --ink-primary, --ink-secondary, --surface-base
 *   --font-display (serif italic for accent), --font-sans (body)
 *   --accent (used sparingly on link arrow)
 */

export function AsymmetricHero() {
  return (
    <section
      className="relative min-h-[88vh] grid grid-cols-12 gap-6 px-6 lg:px-12 py-24"
      style={{ background: "var(--surface-base)" }}
    >
      {/* LEFT: typographic — 7 cols on desktop, full on mobile */}
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
        <div>
          {/* Tiny section label, small caps */}
          <p
            className="text-[11px] uppercase tracking-[0.08em] mb-12"
            style={{ color: "var(--ink-tertiary)" }}
          >
            Lausanne · Switzerland
          </p>

          {/* Headline. Note the italic serif word in the middle of a sans line. */}
          <h1
            className="font-normal leading-[0.95] text-[clamp(3rem,9vw,8rem)]"
            style={{
              color: "var(--ink-primary)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Built for{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              fiduciaires
            </span>{" "}
            who take Switzerland seriously.
          </h1>

          {/* Sub, restrained */}
          <p
            className="mt-8 max-w-[36ch] text-base leading-relaxed"
            style={{ color: "var(--ink-secondary)" }}
          >
            FidUp is a Swiss-native platform for client management, LBA
            compliance, legal archiving, and tax preparation.
          </p>
        </div>

        {/* Bottom row: single text link, not a button. Editorial register. */}
        <div className="mt-12 lg:mt-0 flex items-center gap-8">
          <a
            href="/demo"
            className="group inline-flex items-baseline gap-3 text-base"
            style={{ color: "var(--ink-primary)" }}
          >
            <span className="border-b border-current pb-1">
              Request a demo
            </span>
            <span
              className="transition-transform group-hover:translate-x-1"
              style={{ color: "var(--accent)" }}
            >
              →
            </span>
          </a>
          <a
            href="/pricing"
            className="text-base underline-offset-4 hover:underline"
            style={{ color: "var(--ink-secondary)" }}
          >
            Pricing
          </a>
        </div>
      </div>

      {/* RIGHT: image — 5 cols, full-bleed within column */}
      <div className="col-span-12 lg:col-span-5">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {/* Replace with your actual hero image. Avoid generic stock. */}
          <img
            src="/images/hero-product.jpg"
            alt="FidUp dashboard showing a Swiss fiduciary client portfolio"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Variants to explore by changing one thing:
 *
 * 1. Swap left/right — image left, type right. Different cadence.
 * 2. Replace image with a product video loop (muted, autoplay, 6-10s).
 * 3. Make the italic word a hover-revealed link that opens a definition.
 * 4. Add a tiny floating UI fragment over the image (badge, notification card).
 * 5. Use mix-blend-mode on type that overlaps the image edge.
 *
 * Each variant changes the register. Pick with intent.
 */
