# Design Tokens and Visual-System Audit

## Canonical palette

| Token | Hex | Role |
|---|---|---|
| Warm Ivory | `#EEE0D1` | quiet band / secondary surface |
| Soft Cream | `#F7F0E8` | muted surface / dark-surface foreground |
| Silk Beige | `#D3C1AD` | border and supporting surface |
| Warm Taupe | `#AC947A` | stronger border / secondary detail |
| Brand Brown | `#6A5741` | primary action and accent |
| Espresso | `#584733` | foreground and dark brand surface |

The approved semantic state colors remain owned by the Design System. Feature code must consume semantic variables, not introduce new feature palettes.

## Typography mapping

| Role | Family | Recommended implementation range | Usage |
|---|---|---|---|
| Display | IBM Plex Sans Arabic | 56–72px desktop, 40–48px mobile | homepage/about hero only |
| PageTitle | IBM Plex Sans Arabic | 40–56px desktop, 34–40px mobile | catalog, PDP, account, support |
| SectionTitle | IBM Plex Sans Arabic | 28–40px | major content sections |
| Subheading | IBM Plex Sans Arabic | 20–24px | grouped content |
| Body | IBM Plex Sans Arabic | 16px / 1.75 | customer-facing UI and reading |
| Small | IBM Plex Sans Arabic | 14px / 1.65 | labels and supporting metadata |
| Meta | IBM Plex Sans Arabic or mono for technical tokens | 12px minimum | noncritical metadata |
| Editorial English | Cormorant Garamond | restrained, context-specific | English accents only |

Observed drift: raw page-title sizes vary among batches. The hierarchy is visually plausible but should be implemented with named roles rather than copied per batch.

## Spacing

Canonical scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.

- Core content container: 1280px.
- Desktop gutter: fluid to 40px.
- Mobile gutter: 16px.
- Legal reading measure: about 720px, plus 220px contents rail.
- Medium support/form measure: approximately 780–980px according to content type.

## Radius, borders, shadows

- Radius: 2 / 4 / 8 / 12px maximum.
- Controls: usually 4px.
- Cards/surfaces: usually flat or 4–8px; status chips may be compact but not oversized pills.
- Borders: 1px Silk Beige / semantic border, primarily block separators.
- Shadows: soft/floating only for overlays and elevated icon controls. No shadow-led card system.

## Motion

- Fast 150ms: selector, quantity, validation, pressed feedback.
- Standard 220ms: backdrop, toast, preview, quiet state transitions.
- Emphasized 320ms: drawer and meaningful overlay entrance.
- `prefers-reduced-motion` must remove nonessential transforms, smooth scrolling, and skeleton shimmer.

## Icon system

- Lucide only, 1.75px stroke.
- Standard sizes: 16 / 20 / 24px.
- Icon-only buttons: 44×44px.
- Neutral icons are not mirrored; directional icons follow the interface context.

## Responsive recommendations

| Role | Recommendation | Evidence / note |
|---|---|---|
| Wide desktop | 1280px content within 1440+ viewport | common across all batches |
| Structural collapse | 920px | common in B02–B06 |
| Narrow refinement | 620px | useful in B06 reading/support layouts |
| Mobile artboard | 390px, also verify 360px | approved test widths |
| Intermediate | 768px | tablet requirement |

Observed drift: Batch 01 uses 1000px, Batch 05 also has 520px, and Batch 06 has 620px. Preserve current designs; consolidate during implementation with semantic breakpoints or container queries.

## Global chrome specimen

- Header: 78px desktop / 60px mobile.
- Logo: 156px desktop / 112px mobile.
- Announcement: recommended 38px desktop / 36px mobile.
- Footer: Espresso surface; desktop grouped nav, mobile disclosures; every link 44px minimum.

## Confirmed drift register

1. **P1:** Batch 05 footer nav link `min-height:36px`; implementation must use 44px minimum.
2. **P2:** breakpoint values are duplicated and not named semantically.
3. **P2:** heading sizes are role-consistent but token-name inconsistent.
4. **P2:** drawers/dialogs repeat batch-local geometry and behavior; consolidate as size variants.

No unexpected brand color family or unauthorized font family was identified in the approved batch CSS.
