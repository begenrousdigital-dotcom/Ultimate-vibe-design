/**
 * Magnetic button — cursor proximity translation.
 *
 * The button subtly translates toward the cursor when within a defined range.
 * Used on premium agency and portfolio sites. Should NOT be used on B2B SaaS
 * unless the brand genuinely earns it.
 *
 * Pattern requirements:
 *  - Range: ~80px (button radius + margin)
 *  - Max translate: 8-12px in any direction
 *  - Easing: smooth, no bounce/spring (luxury register, not playful)
 *  - Snap back to origin on mouse leave
 *  - Touch devices: no magnetic effect (pointer: coarse)
 *
 * This implementation uses Framer Motion for spring physics. For luxury register
 * with stiffer feel, swap to GSAP or vanilla rAF with custom easing.
 */

"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  strength?: number; // 0.2 default, 0.4 max for restrained register
}

export function MagneticButton({
  children,
  onClick,
  href,
  className = "",
  strength = 0.2,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring config tuned for restrained, non-bouncy feel.
  // Higher stiffness, low damping ratio kept >1 to avoid overshoot.
  const springConfig = { stiffness: 200, damping: 25, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    // Skip on touch devices.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref: ref as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    className: `inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border transition-colors ${className}`,
    style: {
      x: springX,
      y: springY,
      background: "var(--ink-primary)",
      color: "var(--surface-base)",
      borderColor: "var(--ink-primary)",
    },
  };

  if (href) {
    return (
      <motion.a {...sharedProps} href={href}>
        {children}
      </motion.a>
    );
  }

  return <motion.button {...sharedProps}>{children}</motion.button>;
}

/**
 * Usage:
 *
 *   <MagneticButton href="/contact">Get in touch</MagneticButton>
 *
 * Variants by changing one thing:
 *
 * 1. Lower strength (0.1) — more subtle, premium feel.
 * 2. Higher stiffness (400) — snappier, more responsive.
 * 3. Add inner element that follows cursor slightly faster than outer:
 *    creates a "magnetism in two layers" effect (Active Theory pattern).
 * 4. Disable on screen widths < 1024px for cleaner mobile.
 *
 * Pre-flight check:
 *  - Does the button still look fine on hover without cursor? (Don't lose
 *    affordance.)
 *  - Does keyboard focus state work? (Magnetic shouldn't break :focus-visible.)
 *  - Does it animate smoothly at 60fps on a mid-tier laptop? (Test.)
 */
