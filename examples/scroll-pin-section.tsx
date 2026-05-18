/**
 * Scroll-pinned horizontal section.
 *
 * As the user scrolls vertically, this section pins to the viewport and content
 * inside scrolls horizontally. Premium pattern used on agency case studies,
 * product process steps, and before/after comparisons.
 *
 * Tech: GSAP with ScrollTrigger plugin (requires gsap@3.x).
 *
 * Pre-flight considerations:
 *  - Pin scroll breaks user expectation. Use sparingly — once per page max.
 *  - Test on slow scroll devices (trackpad with momentum, mouse wheel).
 *  - Ensure content isn't critical to non-scrollers (provide alternative path).
 *  - Disable or fall back to standard scroll on mobile (it gets ugly fast).
 *  - Total horizontal scroll should equal section height * 0.8 max — too long
 *    and users feel trapped.
 */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollPinSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    // Skip on mobile / touch devices.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    const track = trackRef.current;
    const container = containerRef.current;

    const ctx = gsap.context(() => {
      const scrollDistance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1, // tie to scroll position with slight smoothing
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ background: "var(--surface-base)" }}
    >
      {/* Section label (stays in place while content scrolls horizontally) */}
      <div className="absolute top-12 left-12 z-10">
        <p
          className="text-[11px] uppercase tracking-[0.08em]"
          style={{ color: "var(--ink-tertiary)" }}
        >
          Our process · 04 steps
        </p>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-12 pl-12 pr-24"
        style={{ willChange: "transform" }}
      >
        {[
          {
            num: "01",
            title: "Discovery",
            body: "We sit with you for a half-day to map the territory.",
          },
          {
            num: "02",
            title: "Direction",
            body: "Three distinct directions, presented honestly with trade-offs.",
          },
          {
            num: "03",
            title: "Production",
            body: "Design and build in parallel, with weekly check-ins.",
          },
          {
            num: "04",
            title: "Launch",
            body: "Ship, measure, iterate. The launch is the start, not the end.",
          },
        ].map((step) => (
          <article
            key={step.num}
            className="flex-none w-[80vw] max-w-[720px] h-[70vh] p-12 flex flex-col justify-between"
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--rule)",
            }}
          >
            <p
              className="font-normal"
              style={{
                color: "var(--ink-tertiary)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontStyle: "italic",
              }}
            >
              {step.num}
            </p>

            <div>
              <h3
                className="font-normal leading-tight mb-6"
                style={{
                  color: "var(--ink-primary)",
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-base leading-relaxed max-w-md"
                style={{ color: "var(--ink-secondary)" }}
              >
                {step.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * Variants:
 *
 * 1. Replace cards with full-bleed images for a portfolio carousel.
 * 2. Add a progress indicator (small bar at bottom showing position).
 * 3. Use snap behavior (each card snaps to viewport) — feels different from scrub.
 * 4. Make it a video reveal: as user scrolls, a single video plays frame-by-frame.
 *
 * Mobile fallback: the effect is disabled below 1024px. Provide a stacked vertical
 * version in CSS that takes over automatically (use `lg:` Tailwind prefix on the
 * horizontal layout, default to flex-col on mobile).
 */
