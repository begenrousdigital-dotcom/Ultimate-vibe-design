---
name: interface-design
description: Design philosophy and patterns for SaaS application interfaces, dashboards, settings screens, data tables, and product UI. This is NOT marketing-design — this is the interface a user sees AFTER they sign up and is working inside the product. Use whenever building authenticated app screens (dashboards, lists, forms, settings, admin panels, charts, data visualization).
---

# Interface Design

**This skill is for product UI, not marketing.** If the page is meant to convert visitors → users, use `marketing-design`. If the page is for users who have already signed in and need to *do work*, this is the right skill.

Different rules govern the two domains:
- **Marketing wants attention.** Interface wants invisibility.
- **Marketing rewards drama.** Interface rewards predictability.
- **Marketing measures conversion.** Interface measures task completion.

A great app interface gets out of the way. The user notices the *work*, not the *UI*.

---

## The Three Acts

Every interface goes through three phases. Design each one explicitly.

### 1. First contact (onboarding)
The user is brand new. The interface must teach without lecturing.

- Empty states aren't bugs — they're product onboarding.
- Default to **showing**, not telling. A populated example > a tutorial.
- Tooltips for one-off discoverability, not for instruction.

### 2. The hot path (daily use)
The user is fluent. They do the same 3–5 tasks every day. Optimize ruthlessly.

- The hot path takes ≤ 2 clicks to start.
- Keyboard shortcuts for the top 5 actions. Show them in tooltips.
- Recent items / smart defaults / last-used filters all surfaced.
- *Latency is the UI.* 200ms feels different from 800ms.

### 3. The edge case (mastery / power use)
The user is doing something unusual: bulk action, advanced filter, integration setup.

- Power-user controls are *findable*, not always-visible.
- Bulk actions should feel like an upgrade, not an obstacle course.
- Advanced settings live in a Settings page; not 14 toggles on the main screen.

---

## Core principles

### Information density is a feature
Linear, Notion, Figma, Cursor — every great product UI has *higher* density than its competitors. Whitespace is for marketing pages. Apps need to show information.

- Aim for 13–14px body type in interface contexts (not 16px).
- Compact rows are correct. 32–40px row heights for tables, not 56px.
- Avoid Material Design-style giant cards.
- Use small but well-typeset labels (11–12px uppercase mono can work).

### Hierarchy is contrast, not size
- Section labels: small + mono + uppercase + foreground-3 color.
- Section content: regular + sans + foreground.
- Critical action: same size, just heavier weight + accent color.

The eye scans by *contrast*, not by font size escalation.

### Latency design
Every interaction needs immediate visual confirmation:
- Click button → button presses (≤ 50ms feedback) → loading state appears (≤ 200ms) → result.
- Never wait for the server to acknowledge before updating UI optimistically.
- Have skeleton states for any content fetch >150ms.

### Color in interfaces
Different rules than marketing:
- **Neutrals carry 90% of the page.** Background, surface, border, foreground at 4-5 tiers.
- **One accent only**, used for: primary CTA, current selection, focus rings, links.
- **Status colors** (success/warning/danger) reserved for status. Never decoration.
- **Charts get their own palette** — 6–8 distinguishable hues. Use OKLCH for perceptually-even spacing.

---

## Layout patterns

### App shell
Three-zone layout almost always works:
- **Left rail** (sidebar): nav, workspace switcher, account.
- **Top bar:** breadcrumbs / page context, global search, profile menu, notifications.
- **Main content:** the actual work surface.

Width: sidebar 240–280px on desktop, collapsible. Top bar 48–56px.

### Data table

The single most important pattern in B2B SaaS.

- **Sticky header row.**
- **Sticky first column** (often, contains entity name + checkbox).
- **Column resize / reorder / hide** for any table > 5 columns.
- **Row hover state** (subtle bg tint), **row selection state** (accent left border + bg tint).
- **Inline edit** for common fields — don't open a modal for changing a name.
- **Pagination OR infinite scroll** — not both, never "load more" buttons.
- **Empty state with actionable CTA** ("Create your first invoice →").
- **Bulk actions appear in a sticky bar at top** when rows selected. Don't reflow the table.

### Forms

The other most-important pattern.

- **Label above input.** Never beside on desktop (translate poorly to mobile).
- **Help text below input** in foreground-3 color, small (12px).
- **Error text replaces help text** in danger color when invalid.
- **Required indicators on the label**, not on the input.
- **Real-time validation** for things you can check live (email format, password strength). Submit-time only for things you can't.
- **Sticky submit footer** for long forms. Never hide submit at the bottom of a 1500px form.
- **Smart defaults everywhere.** Country pre-selected from IP. Currency from locale. Username from email.

### Settings pages

- **Section per concern.** General, Notifications, Billing, Team, Integrations, Danger Zone.
- **Each setting is a row:** label + description + control on the right.
- **Save bar appears when changes are made** (sticky bottom), with "Discard" and "Save."
- **Danger Zone last,** red border, requires re-confirmation.

### Modals & dialogs

- **For confirmations and short flows only.** If a flow needs >2 inputs, use a side panel or a full page.
- **Modal max width 480–640px.** Anything wider = wrong pattern.
- **Always have a Cancel button** in addition to X close.
- **Esc closes. Click outside closes** (unless destructive).
- **Focus traps to the modal,** focus returns to trigger on close.

### Side panels (drawers)

Better than modals for:
- Detail views (clicking a table row opens a side panel with that row's detail).
- Multi-step flows.
- Anything where the user might want to see the underlying content while interacting.

---

## Token discipline (interface flavor)

Interfaces want a *different* token system than marketing pages. Higher density, smaller radius, more border use, less shadow.

```css
:root {
  /* Surface — high contrast separation */
  --background: oklch(0.99 0.002 250);
  --surface-1: oklch(0.99 0.002 250);
  --surface-2: oklch(1 0 0);                    /* cards lift slightly */
  --surface-inset: oklch(0.97 0.003 250);       /* code blocks, inputs */
  --surface-hover: oklch(0.96 0.005 250);       /* row hover */
  --surface-selected: oklch(0.94 0.02 260);     /* row selected */

  /* Foreground — 4 tiers */
  --foreground: oklch(0.18 0.01 250);
  --foreground-2: oklch(0.38 0.012 250);
  --foreground-3: oklch(0.56 0.01 250);
  --foreground-4: oklch(0.72 0.008 250);        /* placeholder / disabled */

  /* Border — multi-tier */
  --border: oklch(0.91 0.005 250);
  --border-subtle: oklch(0.95 0.003 250);
  --border-strong: oklch(0.85 0.008 250);
  --border-focus: var(--accent);

  /* Accent — one, semantically used */
  --accent: oklch(0.5 0.18 260);
  --accent-hover: oklch(0.45 0.19 260);
  --accent-subtle: oklch(0.96 0.04 260);

  /* Status */
  --success: oklch(0.55 0.15 145);
  --success-bg: oklch(0.96 0.04 145);
  --warning: oklch(0.65 0.15 75);
  --warning-bg: oklch(0.97 0.04 75);
  --danger: oklch(0.55 0.2 25);
  --danger-bg: oklch(0.96 0.04 25);

  /* Radius — tight, consistent */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Shadow — minimal */
  --shadow-xs: 0 1px 1px rgba(0,0,0,0.03);
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.02);
  --shadow-md: 0 4px 8px -2px rgba(0,0,0,0.04), 0 2px 4px -2px rgba(0,0,0,0.03);
  --shadow-popover: 0 10px 30px -10px rgba(0,0,0,0.15), 0 0 0 1px var(--border);
  --shadow-modal: 0 25px 60px -20px rgba(0,0,0,0.25), 0 0 0 1px var(--border);

  /* Type scale — denser */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 13px;
  --text-md: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 22px;
  --text-3xl: 28px;

  /* Spacing — denser */
  --space-px: 1px;
  --space-0-5: 2px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;

  /* Component constants */
  --row-height: 36px;
  --input-height: 32px;
  --button-height-sm: 28px;
  --button-height-md: 32px;
  --button-height-lg: 40px;
  --sidebar-width: 264px;
  --topbar-height: 52px;
}
```

---

## Component checklist (the canonical set)

Any non-trivial SaaS app needs custom-built versions of these. Don't ship raw shadcn defaults.

- [ ] Button (primary, secondary, ghost, destructive) — small/medium/large
- [ ] Input (text, email, number, password) — with label, help, error states
- [ ] Textarea — with character count, auto-resize
- [ ] Select / Combobox — keyboard nav, search-on-type
- [ ] Checkbox + Radio + Switch
- [ ] DatePicker / DateRangePicker
- [ ] Table — sortable, resizable, with row selection
- [ ] Modal / Dialog
- [ ] Drawer / Side Panel
- [ ] Tabs
- [ ] Tooltip
- [ ] Popover
- [ ] DropdownMenu / ContextMenu
- [ ] CommandPalette (⌘K) — table-stakes for modern SaaS
- [ ] Toast / Notification
- [ ] Banner (system-wide announcements)
- [ ] Avatar + AvatarStack
- [ ] Badge / Tag / Pill / Chip
- [ ] Skeleton (loading placeholder)
- [ ] EmptyState (illustrated or text-based)
- [ ] Pagination
- [ ] Breadcrumbs
- [ ] Stepper / Progress
- [ ] FileUpload / Dropzone
- [ ] Search (with autocomplete)
- [ ] Charts (Line, Bar, Pie, Area, Sparkline)

For each, document: variants, states (default/hover/active/disabled/focus/error), sizes, and accessibility (aria-* attributes, keyboard interactions).

---

## Specific patterns worth nailing

### Command Palette (⌘K)
Cursor, Linear, Raycast, Notion all have this. It's the power-user backbone.
- Triggered by ⌘K / Ctrl+K
- Fuzzy search across: pages, actions, recent items
- Grouped results
- Keyboard nav (↑↓ to select, ↵ to invoke)
- Action chips (e.g., "Press Tab to filter to Documents")

### Notification system
- Toasts for transient action results (saved, copied, deleted).
- Banners for system-wide states (subscription expired, maintenance soon).
- In-app inbox for persistent notifications (new comment, mention, assigned task).

### Empty states
- **First-run empty** (you haven't done X yet): show illustration + CTA to create the first item.
- **Filtered empty** (no results match): suggest broadening filter.
- **Permission empty** (you can't see this): explain why + who to ask.

### Loading states
- Skeleton for content shapes ≤ 2s wait.
- Spinner for actions ≤ 1s wait (button shows spinner).
- Progress bar for known-duration tasks.
- Nothing for ≤ 200ms (don't flash a loader).

### Error states
- **Inline errors** for form fields.
- **Page-level error** with retry button for failed fetches.
- **Toast errors** for action failures.
- Always include: what failed + why (in plain language) + what the user can do.

---

## What "Linear-quality" actually means

People say "I want it like Linear." What they mean:

- **Tight token system, no Tailwind defaults bleeding through.**
- **Custom-built components, not shadcn copy-paste.**
- **Excellent keyboard support.** Every action has a shortcut.
- **Optimistic UI updates.** Click → state changes instantly, sync in background.
- **Command Palette (⌘K) front and center.**
- **Subtle but pervasive motion.** Hovers, transitions, micro-feedback everywhere.
- **Dense information, perfectly typeset.**
- **Dark mode that's actually dark** (true neutrals, not "dark blue mode").

It's not a style. It's a level of obsessive craft applied uniformly.

---

## When this skill applies

- Building a dashboard, admin panel, or product UI
- Building data-heavy interfaces (tables, lists, settings)
- Building authenticated app screens
- Building internal tools

## When marketing-design applies instead

- Building a landing page, homepage, /pricing, /about
- Building a marketing campaign page
- Building anything pre-signup

---

## See also

- `references/dashboards.md` — patterns for analytics dashboards specifically
- `references/forms.md` — form design deep dive
- `references/tables.md` — data table patterns and edge cases
- `references/states.md` — loading, empty, error states catalog
