import type { Config } from 'tailwindcss'

/**
 * Tailwind v3 config bridged to the design tokens defined in tokens.css
 *
 * This config reads from CSS custom properties so a single edit to tokens.css
 * propagates everywhere. Tokens live in CSS, Tailwind is just the API.
 *
 * Usage:
 * - bg-background, bg-surface-1, bg-surface-2
 * - text-foreground, text-foreground-2, text-foreground-3, text-foreground-4
 * - border-border, border-border-subtle, border-border-strong
 * - bg-accent, text-accent-fg, hover:bg-accent-hover
 * - shadow-card, shadow-md (uses layered token shadows)
 * - rounded-card, rounded-btn (component radii)
 * - font-display, font-sans, font-mono, font-serif
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './app/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Semantic layer — components should use these
        background: 'var(--background)',
        foreground: {
          DEFAULT: 'var(--foreground)',
          2: 'var(--foreground-2)',
          3: 'var(--foreground-3)',
          4: 'var(--foreground-4)',
        },
        surface: {
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
          inset: 'var(--surface-inset)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
          focus: 'var(--border-focus)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          fg: 'var(--accent-fg)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
          subtle: 'var(--accent-subtle)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        destructive: 'var(--destructive)',
        info: 'var(--info)',
        control: {
          bg: 'var(--control-bg)',
          border: 'var(--control-border)',
          fg: 'var(--control-fg)',
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        mono: 'var(--font-mono)',
        display: 'var(--font-display)',
      },

      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
        display: 'var(--text-display)',
      },

      letterSpacing: {
        display: 'var(--tracking-display)',
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
        eyebrow: 'var(--tracking-eyebrow)',
      },

      lineHeight: {
        display: 'var(--leading-display)',
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },

      borderRadius: {
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        full: 'var(--radius-full)',
        // Component radii
        card: 'var(--card-radius)',
        btn: 'var(--btn-radius)',
        input: 'var(--input-radius)',
      },

      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        card: 'var(--card-shadow)',
        // Inner highlight presets
        'inset-light': 'inset 0 1px 0 rgba(255,255,255,0.6)',
        'inset-dark': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },

      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
        decelerate: 'var(--ease-decelerate)',
        accelerate: 'var(--ease-accelerate)',
        emphasized: 'var(--ease-emphasized)',
        expo: 'var(--ease-expo)',
        bounce: 'var(--ease-bounce)',
        spring: 'var(--ease-spring)',
        anticipate: 'var(--ease-anticipate)',
      },

      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        cinema: 'var(--duration-cinema)',
      },

      maxWidth: {
        container: 'var(--container-max)',
      },

      padding: {
        section: 'var(--section-py-md)',
        'section-lg': 'var(--section-py-lg)',
        'section-xl': 'var(--section-py-xl)',
      },
    },
  },
  plugins: [],
}

export default config
