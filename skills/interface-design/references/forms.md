# Forms — The Deep Dive

Forms are where users *commit* to the product. Every input is a friction point. Designed well, they feel fluid; designed badly, they kill conversion and trust.

---

## Anatomy

```
┌────────────────────────────────────────────┐
│ Section heading                            │ ← 16-18px semibold
│ Section description (optional)             │ ← 13px foreground-3
├────────────────────────────────────────────┤
│ Field label *                              │ ← 13px font-medium, * for required
│ ┌──────────────────────────────────────┐  │
│ │ Input value                          │  │ ← 32-40px height
│ └──────────────────────────────────────┘  │
│ Help text or error message                 │ ← 12px foreground-3 / danger
│                                            │
│ Another field                              │
│ …                                          │
└────────────────────────────────────────────┘

[Cancel]                          [Save changes]  ← Sticky footer for long forms
```

---

## Label placement

**Top, always.** Beside-label forms (label on left, input on right) break on mobile, look outdated, and slow scanning. Top label is the universal correct choice in 2026.

Exception: dense settings pages where a setting is a single toggle and the description matters more. Then: label + toggle on a row, description below.

```tsx
// Standard top-aligned
<div className="space-y-1.5">
  <label className="block text-[13px] font-medium">
    Company name
    <span className="text-danger">*</span>
  </label>
  <input className="w-full h-8 px-3 …" />
  <p className="text-[12px] text-foreground-3">
    This appears on invoices and reports.
  </p>
</div>
```

---

## Input styling

### Sizes
- **Small (h-7 / 28px):** dense tables, inline filters
- **Medium (h-8 / 32px):** standard form fields — default
- **Large (h-10 / 40px):** marketing-style forms, mobile-friendly signup

### States

Every input needs all six states designed:

```tsx
const inputClasses = cn(
  'w-full px-3 rounded-md text-[13px]',
  'bg-surface-1 border border-border',
  'transition-[border-color,box-shadow,background] duration-150',
  // Hover
  'hover:border-border-strong',
  // Focus
  'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15',
  // Disabled
  'disabled:bg-surface-inset disabled:text-foreground-4 disabled:cursor-not-allowed',
  // Error (added via prop)
  hasError && 'border-danger focus:border-danger focus:ring-danger/15',
  // Read-only
  readOnly && 'bg-surface-inset border-transparent'
);
```

### Placeholders

- Use for **example values** ("e.g., Acme Corp"), not for re-labeling.
- Placeholder color: `--foreground-4`. Light enough to be clearly distinct from typed text.
- NEVER use placeholder as the only label. Accessibility failure.

---

## Validation

### Real-time vs submit-time

**Real-time (validate as user types):**
- Email format
- Password strength
- Username availability
- Numeric range
- Anything you can check client-side

**Submit-time (validate on blur or submit):**
- Anything requiring a server call
- Cross-field rules (passwords match, end date after start date)
- Business rules (this email isn't already registered)

### Error display

Replace the help text with error text in the same position. Don't both.

```tsx
{error ? (
  <p className="text-[12px] text-danger flex items-center gap-1.5">
    <AlertIcon className="w-3 h-3 shrink-0" />
    {error}
  </p>
) : (
  <p className="text-[12px] text-foreground-3">{helpText}</p>
)}
```

### Error messages that don't suck

Bad: "Invalid email."
Good: "Add an @ and a domain — like name@company.com."

Bad: "Field is required."
Good: "Company name is required to generate invoices."

Bad: "Server error."
Good: "We couldn't save your changes. Check your connection and try again."

---

## Smart defaults

The single biggest UX improvement most forms can make.

- **Country:** detect from IP, pre-select.
- **Currency:** match country.
- **Timezone:** match browser.
- **Language:** match browser locale.
- **Username:** suggest from email prefix.
- **Display name:** suggest from email or social profile.
- **Date today:** pre-fill for "starts on" fields.
- **Common values:** if user has done this before, remember last-used.

---

## Field types — specifics

### Text input
- Use `autocomplete` attribute properly (`name`, `email`, `tel`, etc.).
- Use `inputmode` for mobile (`numeric`, `tel`, `email`).
- Use `spellcheck="false"` for IDs, usernames, technical fields.

### Email
- `type="email"` for keyboard hint and basic validation.
- Trim whitespace and lowercase before submit.

### Password
- Show/hide toggle (eye icon).
- Show requirements *next to* field, not below as error after submit:
  ```
  Use 8+ characters, with a number and a symbol.
  ✓ 8+ characters
  ✓ Has a number
  ✗ Has a symbol
  ```
- Strength meter (5 levels): weak / fair / good / strong / excellent.

### Numeric
- Right-align the input.
- Use thousands separators for display (€1,234.56), strip on submit.
- `inputmode="decimal"` or `inputmode="numeric"`.
- Show currency / unit suffix or prefix (€, %, kg) inside the input.

### Phone
- International picker: country code dropdown with flag + dial code, then number input.
- Format as user types (libphonenumber-js).

### Date
- Native `<input type="date">` for simple cases (good mobile experience).
- Custom datepicker for ranges, special calendars, or when you need a polished feel.
- Always show the date in user's local format (DD/MM/YYYY in CH/FR/UK, MM/DD/YYYY in US).
- For Swiss locale: DD.MM.YYYY.

### Select / Dropdown
- Native `<select>` if list is short (< 10 items) and not searchable.
- Combobox (search-as-you-type) if list is long or contains entity references.
- Group related options with `<optgroup>` or section headers.

### Checkbox / Radio
- Don't restyle native checkboxes from scratch unless you're sure your version handles all states. Use Radix UI / Headless UI / Reka UI primitives.
- Label is clickable (wrap input in label or use `htmlFor`).

### Switch / Toggle
- Use for **immediate** binary state (notifications on/off, dark mode).
- Don't use for "I agree to terms" — that's a checkbox.
- Animate the knob smoothly (200–300ms).

### File upload
- Drag-and-drop zone + click-to-browse.
- Show progress per file.
- Allow cancel and remove during upload.
- Preview images, show filename + size + type for others.

```tsx
<div className="relative border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-border-strong transition-colors">
  <UploadIcon className="w-8 h-8 mx-auto mb-3 text-foreground-3" />
  <p className="text-[14px] font-medium">Drop files here</p>
  <p className="text-[12px] text-foreground-3 mt-1">or click to browse — max 10MB</p>
  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
</div>
```

---

## Form-level patterns

### Single-screen short form
- < 6 fields
- Submit button bottom, full-width on mobile, auto-width on desktop
- Cancel link or button on the side / below

### Long form
- Group fields into logical sections with headings
- Section dividers with `border-t` and `pt-8`
- **Sticky submit footer** always visible:

```tsx
<div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex items-center justify-end gap-3">
  <Button variant="ghost">Cancel</Button>
  <Button>Save changes</Button>
</div>
```

### Multi-step wizard
- For genuinely long flows (onboarding, complex setup)
- Stepper at top: "Step 2 of 4 — Company details"
- Allow backward navigation, persist field values
- Show progress as filled bar OR numbered dots
- Final step is always "Review & confirm"

### Inline edit
- Click value → becomes input → blur or Enter saves → Esc cancels
- See `tables.md` for table-specific inline edit

---

## Unsaved changes warning

If user has modified fields and tries to navigate away:
```tsx
useEffect(() => {
  if (!isDirty) return;
  const handler = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };
  window.addEventListener('beforeunload', handler);
  return () => window.removeEventListener('beforeunload', handler);
}, [isDirty]);
```

For internal navigation (Next.js router), intercept route changes and show confirm dialog.

---

## Submit button states

- **Idle:** "Save changes"
- **Loading:** spinner + "Saving…" — disabled
- **Success (transient, 2s):** ✓ + "Saved" — disabled
- **Error:** restored to "Save changes," error toast appears

NEVER leave submit looking active during request. NEVER allow double-submit.

```tsx
<button disabled={isSubmitting} className="…">
  {isSubmitting ? (
    <><Spinner className="w-3.5 h-3.5" /> Saving…</>
  ) : justSaved ? (
    <><CheckIcon className="w-3.5 h-3.5" /> Saved</>
  ) : (
    'Save changes'
  )}
</button>
```

---

## Keyboard expectations

- **Tab** moves through fields in DOM order. Skip read-only / disabled.
- **Enter** in a single-line input submits the form.
- **Enter** in a textarea inserts newline (correct).
- **Esc** in a modal/drawer form cancels.
- **⌘ + Enter** (Mac) / **Ctrl + Enter** anywhere submits.

---

## Accessibility checklist

- [ ] Every input has an associated `<label>` (via wrapping or `htmlFor`)
- [ ] Required fields marked with `aria-required="true"` AND visual indicator
- [ ] Errors announced to screen readers (`aria-describedby` pointing to error element, `aria-invalid="true"`)
- [ ] Help text linked via `aria-describedby`
- [ ] Field groups wrapped in `<fieldset>` with `<legend>`
- [ ] Focus visible (don't `outline: none` without replacing with focus ring)
- [ ] Form errors summarized at top on submit failure (with anchor links to fields)
- [ ] Autocomplete attributes set correctly for common fields

---

## The 10-second test

Open the form. Without filling anything, ask:
1. Can I tell what each field is asking for, without hovering or clicking?
2. Are required fields visually distinct from optional?
3. Is the submit action obviously the primary action?
4. Is there a clear way to cancel / go back?
5. On error, would I know exactly which field to fix?

If any answer is "no," redesign.
