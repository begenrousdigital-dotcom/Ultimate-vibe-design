# Data Tables — The Deep Dive

The data table is the single most important pattern in B2B SaaS. Greg's products (FidUp, BrickInvest, RealEstimate, Edirex) all live on tables. Get this right and the product feels capable; get it wrong and the product feels like a 2014 admin theme.

---

## Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│ Toolbar: search + filters + bulk actions + add new              │ ← Sticky
├─────────────────────────────────────────────────────────────────┤
│ ☐ Name                Email           Status    Created    [⋮] │ ← Sticky header
├─────────────────────────────────────────────────────────────────┤
│ ☐ Sarah Chen          sarah@…         Active    12 May     [⋮] │ ← Row hover bg
│ ☑ Marcus Webb         marcus@…        Pending   11 May     [⋮] │ ← Row selected
│ ☐ Léa Dupont          lea@…           Active    10 May     [⋮] │
│ …                                                                │
├─────────────────────────────────────────────────────────────────┤
│ 1–25 of 247                          [< 1 2 3 4 5 … 10 >]      │ ← Sticky footer
└─────────────────────────────────────────────────────────────────┘
```

---

## Density

**Row height: 36–40px in dense mode, 48–52px in comfortable.** Let the user pick.

```tsx
<table className="text-[13px]">
  <tbody>
    <tr className="h-9 hover:bg-surface-hover transition-colors">
      <td className="px-3 align-middle">…</td>
    </tr>
  </tbody>
</table>
```

NEVER 56–72px row heights. That's the "Material Design dashboard" mistake — feels like a 2017 admin theme.

---

## Column rules

### Required columns

- **Checkbox column** (40px wide) for selection, even if you don't have bulk actions yet.
- **Primary identifier column** (Name/Title) — sticky on horizontal scroll, often clickable to open detail panel.
- **Action column** (⋮ menu, 40px wide) — sticky right.

### Column widths

- **Don't auto-size everything.** Set explicit widths for known columns.
- Use `table-layout: fixed` plus `<col>` definitions for predictable widths.
- Allow user to resize columns (grab the right edge of header). Persist widths in localStorage / user prefs.

### Column visibility

Any table with > 6 columns must support hiding columns.
- Toolbar action: "Columns" button opens dropdown with checkboxes for each.
- Hidden columns persist in user preferences.

### Sorting

- Click header to sort. Click again to reverse. Click third time to clear.
- Visual indicator: ↑↓ icon (very subtle, foreground-3) on hover; bold direction icon on active sort.
- Only ONE column sortable at a time (most apps). Multi-column sort is power-user only and adds complexity.

```tsx
<th onClick={() => toggleSort('name')} className="cursor-pointer select-none">
  <div className="flex items-center gap-1.5">
    Name
    <ChevronIcon className={cn(
      'w-3 h-3 transition-opacity',
      sortKey === 'name' ? 'opacity-100' : 'opacity-30',
      sortKey === 'name' && sortDir === 'desc' && 'rotate-180'
    )} />
  </div>
</th>
```

---

## Cell content

### Text cells
- Truncate with ellipsis if overflow. Tooltip on hover shows full text.
- Numbers right-aligned. Dates right-aligned. Text left-aligned.

```tsx
<td className="px-3 truncate max-w-0">
  <span title={fullValue}>{value}</span>
</td>
```

### Status badges
```tsx
const statusStyles = {
  active: 'bg-success-bg text-success border-success/20',
  pending: 'bg-warning-bg text-warning border-warning/20',
  archived: 'bg-foreground-4/10 text-foreground-3 border-border',
};

<span className={cn(
  'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium border',
  statusStyles[status]
)}>
  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
  {label}
</span>
```

### Avatars + text
```tsx
<td className="px-3">
  <div className="flex items-center gap-2.5">
    <Avatar src={user.avatar} fallback={user.initials} size="sm" />
    <div className="min-w-0">
      <div className="font-medium truncate">{user.name}</div>
      <div className="text-[11px] text-foreground-3 truncate">{user.email}</div>
    </div>
  </div>
</td>
```

### Numbers & money
- Tabular figures: `font-variant-numeric: tabular-nums;`
- Right-aligned.
- Currency: align by decimal where possible.

### Dates
- **Relative for recent** ("2h ago", "yesterday"), absolute for old (">7 days").
- Tooltip on hover shows full timestamp.
- Right-aligned, tabular numbers.

---

## Selection & bulk actions

### Checkbox column header has a tri-state checkbox
- Empty if no rows selected.
- Indeterminate (–) if some rows selected.
- Checked (✓) if all visible rows selected.
- Click cycles: → all → none → all.

### Bulk action bar (sticky top, appears on selection)
```tsx
{selectedCount > 0 && (
  <div className="sticky top-0 z-10 px-4 py-2 bg-accent-subtle border-b border-accent/20 flex items-center justify-between">
    <span className="text-[13px] font-medium">
      {selectedCount} selected
    </span>
    <div className="flex items-center gap-2">
      <Button size="sm" variant="ghost" onClick={…}>Export</Button>
      <Button size="sm" variant="ghost" onClick={…}>Tag</Button>
      <Button size="sm" variant="destructive" onClick={…}>Delete</Button>
      <Button size="sm" variant="ghost" onClick={clearSelection}>Cancel</Button>
    </div>
  </div>
)}
```

Don't show this bar as a modal or floating popover. Sticky banner at the top of the table is correct.

### "Select all matching filter" affordance
When user selects all visible rows but the filter matches more:
> "All 25 on this page are selected. Select all 247 matching this filter?"

---

## Inline editing

For high-frequency edits (renaming, status changes, tagging), use inline edit, not modals.

```tsx
// Click cell → becomes input. Esc cancels, Enter saves, blur saves.
<td className="px-3 group" onClick={() => setEditing(true)}>
  {editing ? (
    <input
      autoFocus
      defaultValue={value}
      onBlur={(e) => save(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
        if (e.key === 'Escape') setEditing(false);
      }}
      className="w-full px-1 -mx-1 bg-transparent border border-accent rounded outline-none"
    />
  ) : (
    <span className="cursor-text group-hover:bg-surface-hover px-1 -mx-1 rounded">
      {value}
    </span>
  )}
</td>
```

---

## Empty states

### Empty (no data yet)
```tsx
<div className="flex flex-col items-center justify-center py-24 px-4 text-center">
  <Icon className="w-12 h-12 text-foreground-4 mb-4" />
  <h3 className="text-[16px] font-semibold mb-1">No clients yet</h3>
  <p className="text-[13px] text-foreground-3 mb-6 max-w-sm">
    Add your first client to start managing their files, deadlines, and tax filings.
  </p>
  <Button onClick={…}>Add your first client</Button>
</div>
```

### Empty (filtered)
```tsx
<div className="flex flex-col items-center justify-center py-16 px-4 text-center">
  <h3 className="text-[14px] font-medium mb-2">No results match your filters</h3>
  <Button variant="ghost" size="sm" onClick={clearFilters}>Clear filters</Button>
</div>
```

---

## Loading states

### Initial load: skeleton rows
```tsx
{loading && Array(8).fill(null).map((_, i) => (
  <tr key={i} className="h-9 border-b border-border">
    <td className="px-3"><Skeleton className="w-4 h-4 rounded" /></td>
    <td className="px-3"><Skeleton className="w-32 h-3.5 rounded" /></td>
    <td className="px-3"><Skeleton className="w-40 h-3.5 rounded" /></td>
    <td className="px-3"><Skeleton className="w-16 h-5 rounded" /></td>
  </tr>
))}
```

### Re-fetch / pagination: keep old data, dim slightly
- Don't blank out the table.
- Add `opacity-50` while fetching.
- Show a thin progress bar at the top of the table.

---

## Pagination patterns

### Page numbers (best for fixed datasets)
- "1–25 of 247" + page buttons.
- Persist page in URL (`?page=3`).

### Cursor-based "Load more"
- Better for infinite-scroll tables (activity feeds, logs).
- Avoid combining with page numbers.

### True infinite scroll
- Only for "feed" patterns. Bad for "I need to find that one entry from 3 months ago."

### Avoid: jumpy reflowing pagination
When you change page, table jumps to top. Confusing. Either keep scroll position or scroll-to-top deliberately.

---

## Mobile pattern

Tables don't translate to mobile. On mobile, transform table → cards.

```tsx
// On md+: <table>
// On mobile: render same data as stacked cards

<div className="md:hidden space-y-2">
  {rows.map(row => (
    <article className="rounded-lg border border-border p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium text-[14px]">{row.name}</h3>
          <p className="text-[12px] text-foreground-3">{row.email}</p>
        </div>
        <StatusBadge status={row.status} />
      </div>
      <div className="flex items-center justify-between text-[11px] text-foreground-3">
        <span>{formatDate(row.created)}</span>
        <DropdownMenu>⋮</DropdownMenu>
      </div>
    </article>
  ))}
</div>
```

---

## Accessibility checklist

- [ ] `<table>` element used (not div soup) for tabular data
- [ ] `<th>` with `scope="col"` for column headers
- [ ] `<caption>` describing the table (sr-only)
- [ ] Sort buttons announce sort state (aria-sort)
- [ ] Selection checkbox has aria-label ("Select row Sarah Chen")
- [ ] Bulk action bar announces count to screen readers
- [ ] Keyboard nav: Tab moves through actionable cells, arrow keys for cell-to-cell (in spreadsheet-style apps)
- [ ] Focus visible everywhere (proper ring)
- [ ] Color is never the only signal of status (always icon or text too)
