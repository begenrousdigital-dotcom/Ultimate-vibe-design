/**
 * Bento grid — asymmetric feature layout.
 *
 * 6-8 cells in a varied grid. Each cell has different content type to provide
 * visual texture: type, screenshot, chart, 3D, video.
 *
 * Pattern is now standard (used everywhere from Apple to YC startups). To stand
 * out within the idiom:
 *  - Vary cell content radically — not 8 identical "icon + heading + paragraph".
 *  - Mix sizes (2×2, 1×2, 2×1) more aggressively than the default uniform grid.
 *  - Include at least one cell that breaks the pattern (full bleed, no padding).
 *  - Subtle hover states per cell (tilt, glow, content swap).
 */

export function BentoGrid() {
  return (
    <section className="px-6 lg:px-12 py-24" style={{ background: "var(--surface-base)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-[11px] uppercase tracking-[0.08em] mb-4"
            style={{ color: "var(--ink-tertiary)" }}
          >
            Capabilities
          </p>
          <h2
            className="font-normal leading-[1.05]"
            style={{
              color: "var(--ink-primary)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Everything a Swiss fiduciary needs, in{" "}
            <span style={{ fontFamily: "var(--font-display)" }} className="italic">
              one
            </span>{" "}
            platform.
          </h2>
        </div>

        {/* Bento grid: 4 cols on desktop, asymmetric row heights via grid-row-span */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {/* Cell 1: large hero cell — 2×2, type-led */}
          <BentoCell className="md:col-span-2 lg:row-span-2 p-10 flex flex-col justify-between">
            <p
              className="text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "var(--ink-tertiary)" }}
            >
              Client management
            </p>
            <div>
              <h3
                className="font-normal leading-tight mb-4"
                style={{
                  color: "var(--ink-primary)",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                Every client file, organized as it should be.
              </h3>
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{ color: "var(--ink-secondary)" }}
              >
                ZEFIX integration, automatic document linking, and a UI
                designed for fiduciary workflow.
              </p>
            </div>
          </BentoCell>

          {/* Cell 2: small — screenshot/visual */}
          <BentoCell className="p-0 overflow-hidden">
            <img
              src="/images/feature-dashboard.jpg"
              alt="FidUp dashboard view"
              className="w-full h-full object-cover"
            />
          </BentoCell>

          {/* Cell 3: small — single metric */}
          <BentoCell className="p-8 flex flex-col justify-end">
            <p
              className="font-normal mb-2"
              style={{
                color: "var(--ink-primary)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                lineHeight: 0.9,
              }}
            >
              10 yrs
            </p>
            <p className="text-sm" style={{ color: "var(--ink-secondary)" }}>
              Legal archive retention, built in.
            </p>
          </BentoCell>

          {/* Cell 4: small — feature with icon-ish accent */}
          <BentoCell className="p-8 flex flex-col justify-between">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent-soft)" }}
            >
              <span style={{ color: "var(--accent)" }}>✓</span>
            </div>
            <div>
              <p
                className="font-medium mb-1"
                style={{ color: "var(--ink-primary)" }}
              >
                LBA compliance
              </p>
              <p className="text-sm" style={{ color: "var(--ink-secondary)" }}>
                Built into every workflow, not bolted on.
              </p>
            </div>
          </BentoCell>

          {/* Cell 5: wide — quote or testimonial */}
          <BentoCell className="md:col-span-2 p-10 flex flex-col justify-between">
            <p
              className="text-lg leading-relaxed italic"
              style={{
                color: "var(--ink-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              "It's the first platform that actually understands how a Swiss
              fiduciaire works day to day."
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-gray-200"
                aria-hidden
              />
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--ink-primary)" }}
                >
                  Karine Dubois
                </p>
                <p className="text-xs" style={{ color: "var(--ink-tertiary)" }}>
                  Fondatrice, Dubois Fiduciaire Sàrl
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Cell 6: small — secondary feature */}
          <BentoCell className="p-8 flex flex-col justify-between">
            <p
              className="text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "var(--ink-tertiary)" }}
            >
              Native
            </p>
            <p
              className="font-medium"
              style={{ color: "var(--ink-primary)" }}
            >
              ZEFIX integration for instant entity lookup.
            </p>
          </BentoCell>

          {/* Cell 7: small — final feature */}
          <BentoCell className="p-8 flex flex-col justify-between">
            <p
              className="text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "var(--ink-tertiary)" }}
            >
              Tax season
            </p>
            <p
              className="font-medium"
              style={{ color: "var(--ink-primary)" }}
            >
              Prepare and file in half the clicks.
            </p>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}

function BentoCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-500 hover:translate-y-[-2px] ${className}`}
      style={{
        background: "var(--surface-elevated)",
        border: "1px solid var(--rule)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Pre-flight: each cell content type is different (type, image, metric, icon,
 * quote, label-led). This is what makes a bento sing vs feel uniform.
 *
 * Avoid: 6 identical cells with "icon + h3 + p". That's not a bento, it's a
 * feature grid in disguise.
 */
