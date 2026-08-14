# OURVEIL Storefront — Final Cross-Storefront Audit

Date: 2026-08-14  
Scope: Batches 01–06, source-level comparison and development handoff  
Release gate: **FIX — representative visual QA required**

## Executive finding

The six approved batches form a coherent Arabic-first storefront at source level. The same brand palette, IBM Plex Sans Arabic UI typography, Lucide treatment, 1280px container, warm surfaces, restrained radii, 44px core controls, and manual-payment semantics are present across the journey. No P0 business-rule defect was found.

The release cannot be marked SHIP because representative cross-storefront rendering was not available in this audit, and Batch 06 explicitly entered with visual QA pending. Two additional implementation gates remain: the 36px Batch 05 footer-link target, and approval of production legal/operational content.

## Audited source inventory

| Batch | Launcher | Routed screens | Total HTML | Files |
|---|---:|---:|---:|---:|
| 01 Homepage | 1 | 2 | 3 | 12 |
| 02 Catalog | 1 | 10 | 11 | 25 |
| 03 Product | 1 | 9 | 10 | 13 |
| 04 Purchase | 1 | 39 | 40 | 43 |
| 05 Account | 1 | 81 | 82 | 85 |
| 06 Public / Support | 1 | 32 | 33 | 36 |
| **Total** | **6** | **173** | **179** | **214** |

## Immutability evidence

Before/after SHA-256 tree fingerprints matched exactly:

| Immutable source | Files | Verified fingerprint |
|---|---:|---|
| Batch 01 | 12 | `0C71F4B0E6459C5E6A60AE3A793B99E40E5E00D4F6F905146557B8F6B7BB6952` |
| Batch 02 | 25 | `DCE0F92233200DE0418DD0CCC976524DB56E857809D5EE025C57BC06A839D292` |
| Batch 03 | 13 | `38CCCB11D3B4284E0D784920A4E7CB9AD404AE09335655CC72A62CF772192755` |
| Batch 04 | 43 | `6EBD18B0ABF17F621DDF36A2F0249F19827BCDB727E334BA63140273819F67E8` |
| Batch 05 | 85 | `4EC5EE53F040B0982B9DB151B10A1E219BC1496A40E11A0B4E63A4A9D314E307` |
| Batch 06 | 36 | `535123C1B315CE7C73B2289B1018699C61DD5BBB019E17FAA6C54AB76441615A` |
| `brand-spec.md` | 1 | `8E8789414B211DE46F96D5112F946620819BAB686D8958283AD7216DC18BAEC4` |
| Design System | 1 | `F80FD79B6F62D7C93CE0EF45C07D64C0B9C570340E7EFAD2595D54C33CFC9B68` |

All four official asset hashes also matched: favicon, monogram, dark wordmark, and light wordmark. The pre-existing untracked Batch 06 working-tree status remained unchanged; its full tree fingerprint confirms no content mutation during Batch 07.

## Finding register

| ID | Severity | Batch | Screen / component | Issue | Evidence | Recommended correction | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| QA-001 | P1 | 01–06 | Representative customer journey | Cross-storefront pixel-level QA is not available in this run; Batch 06 visual QA was already pending. | Source and geometry can be inspected, but focus clipping, real Arabic wrapping, overlay collision, and browser contrast require rendering. | Run the matrix in `qa-checklist.md` at 1440, 768, 390, and 360px. Do not close until Batch 06 carryover and journey paths pass. | QA + Design | Open — release blocker |
| A11Y-001 | P1 | 05 | Global footer links | Footer navigation links declare `min-height:36px`, below the approved 44px target. | `batch-05-account/assets/account.css`, `.footer nav a`. Other interaction families use 44px or more. | In implementation, set footer links to `min-block-size:44px`, align content vertically, and verify mobile accordion links and focus rings. | Frontend | Open |
| CONTENT-001 | P1 | 06 / global | Legal, shipping, returns, contact | Final production content and operational data are unresolved. Prototype text correctly avoids claims, but cannot ship as approved policy. | Batch 06 labels copy as prototype/legal-review-required and lists missing operational data. | Obtain legal, support, shipping, returns, and contact approvals; preserve the existing page architecture and replace only marked content. | Product + Legal + Operations | Open |
| DS-001 | P2 | 01–06 | Responsive system | Structural breakpoints drift: Batch 01 uses 1000px; Batches 02–05 use 920px; Batch 05 adds 520px; Batch 06 adds 620px. | Media-query inventory across shared CSS. | Canonicalize to semantic component breakpoints: 920px structural collapse, 620px narrow-content refinement; use container queries for isolated components. | Design System + Frontend | Open |
| DS-002 | P2 | 01–06 | Heading hierarchy | Page-title sizes vary from fixed 44/48px to `clamp()` ranges without shared semantic names. | Batch CSS heading inventory. Hero, page, and legal contexts are visually valid but not tokenized consistently. | Implement named styles: Display, PageTitle, SectionTitle, CardTitle, Body, Meta. Map each existing usage by role, not by raw size. | Design System | Open |
| DS-003 | P2 | 01–06 | Drawer / dialog primitives | Overlay geometry is repeated across batch CSS, with drawer maxima from 370–430px and separate dialog code. | Batches 03–06 duplicate backdrop, drawer, transition, and focus behavior. | Build one Drawer primitive with `navigation`, `filter`, and `cart` size variants; one Dialog primitive; share focus trap, Escape, scroll lock, and restoration. | Frontend | Open |
| DOC-001 | P3 | Global | Localized routes | Arabic-first behavior is clear, but localized production slug strategy is not settled. | Existing prototypes use English static filenames; Batch 06 notes routing localization is unresolved. | Decide whether locale lives in a prefix, domain, or negotiation layer before sitemap/canonical implementation. | Product + Frontend + SEO | Open |

**Counts:** P0 0 · P1 3 · P2 3 · P3 1.

## Workstream conclusions

### 01. Global chrome

- The storefront header is strongly aligned: 78px desktop, 60px mobile, 156px desktop wordmark, and 112px mobile wordmark across the core batches.
- Announcement bars use the same Espresso / Cream pairing and 36–38px range. Implement one canonical 38px desktop / 36px mobile primitive.
- Navigation, account, wishlist, cart, and search affordances use Lucide at 1.75px.
- Footer architecture is consistent in intent: dark Espresso surface, logo, grouped links, policy links, and mobile disclosure groups. The Batch 05 36px link target is the sole confirmed target-size failure.
- Canonical recommendation: one StorefrontHeader and StorefrontFooter owned by the application shell; page batches supply content only.

### 02. Typography

- IBM Plex Sans Arabic is consistently the UI/body face. Cormorant Garamond is limited to English editorial accents.
- Use semantic styles instead of batch-local raw values: Display 56–72, PageTitle 40–56, SectionTitle 28–40, Subheading 20–24, Body 16/1.75, Small 14, Meta 12.
- Prices, SKUs, phone numbers, order IDs, emails, dimensions, and payment destinations must use isolation (`bdi` or `dir="ltr"`) and tabular numerals.
- Legal copy correctly narrows to about 720px with a 220px desktop contents rail.

### 03. Spacing and layout

- Canonical container: 1280px; gutter: `clamp(16px,3vw,40px)`; mobile gutter: 16px.
- Repeated spacing is anchored to the approved 4px scale. Product grids and editorial sections intentionally differ by content role.
- Standardize structural collapse at 920px and reserve 620px for compact reading/navigation refinements.

### 04. Buttons and action hierarchy

- Primary, outline, ghost, link, icon, loading, and disabled states are represented consistently.
- Canonical button: minimum 44px, 4px radius, 9px/18px padding, 8px icon gap, 150ms feedback.
- No source-level screen was found that semantically requires two competing primary actions. Mobile sticky actions remain scoped to purchase/form completion.

### 05. Forms

- Persistent labels, adjacent errors, `aria-invalid`, described errors, LTR phone/email, and 48px transaction/account/support fields are present.
- Canonical FormField contract: label, required marker in accessible name, control, optional helper, field error, form-level summary, and server error slot.
- Submission state must disable duplicate mutation and retain entered data on recoverable errors.

### 06. Commerce components

- ProductCard remains product-led with 4:5 media, restrained metadata, price isolation, and a wishlist icon control.
- CartLineItem requires a sellable variant snapshot, never a generic product alone.
- OrderItemSnapshot is historical and must not rehydrate from current catalog content.
- Wishlist may navigate to PDP when a valid sellable variant is not stored; direct add-to-cart requires backend revalidation.

### 07. Drawers, dialogs, overlays

- Existing overlay semantics cover backdrop, side drawer, dialog, zoom, and toast.
- Canonical behavior: portal to document root, `role="dialog"`, label, focus trap, Escape close, body scroll lock, focus restoration, and hidden background where supported.
- Motion: backdrop 220ms, drawer 320ms, direct control feedback 150ms; reduced motion removes transforms and smooth scrolling.

### 08. Status semantics

| Domain | Neutral / info | Warning / action | Success | Error / destructive |
|---|---|---|---|---|
| Payment | لم يرسل، تم الإرسال، قيد المراجعة | مطلوب إثبات جديد | مقبول، مسترد when final | مرفوض |
| Order | بانتظار الدفع، بانتظار المراجعة، قيد التجهيز | readiness-dependent states | مؤكد، تم التسليم | ملغي / مرفوض |
| Inventory | available context | low / changed quantity | selected valid variant | unavailable combination |
| Form | helper / submitting | validation attention | saved / submitted | request failed |
| System | loading / offline guidance | unavailable / maintenance | recovered | 404 / 500 with recovery |

Every status requires text or icon plus color. Proof submitted is informational, never payment success.

### 09. RTL / LTR

- Pages default to `dir="rtl"`; CSS largely uses logical properties.
- Technical values use `dir="ltr"`, `bdi`, or numeric classes.
- Directional chevrons, timeline rails, drawers, carousels, and pagination must be tested in the real router and browser. Neutral icons must not be mirrored.

### 10. Responsive consistency

- Mobile experiences are intentionally composed, not merely squeezed; forms stack, product grids become two columns, summaries reorder, and long-form navigation becomes a disclosure.
- Source-level no-overflow patterns include `minmax(0,1fr)`, logical gutters, isolated numeric values, and mobile-specific wrappers.
- Pixel-level confirmation at 1440/768/390/360 remains open under QA-001.

### 11. Accessibility

- All shared CSS bundles expose `:focus-visible` and `prefers-reduced-motion` rules.
- Forms, accordions, selectors, dialogs, drawers, uploaders, toasts, and status regions include baseline semantics.
- A11Y-001 is the only confirmed source-level 44px defect. Rendered-only checks remain grouped under QA-001.

### 12. Customer journeys

- Guest purchase: coherent from discovery through valid variant, cart, checkout, resolved shipping, manual transfer, proof review, and tracking.
- Registered journey: sign-in, wishlist, PDP variant resolution, cart, saved address revalidation, account orders, and tracking remain distinct.
- Payment recovery: re-upload operates on the existing order/payment process.
- Support: FAQ links to shipping/returns/contact; system states provide stable recovery actions.
- No semantic dead end was found at source level.

### 13–16. Routes, components, implementation, data

See `route-matrix.md`, `component-inventory.md`, `implementation-handoff.md`, and `business-rules.md`. The matrices reconcile route ownership, component ownership, access, state, and backend authority without prescribing unapproved APIs.

### 17. Unsupported business claims

No unqualified production claim was found in the audited source. Sample values—such as demonstration customer details, shipping figures, and editorial copy—are labelled as prototype data in the relevant handoffs or UI. Homepage testimonials remain explicitly blocked pending real customer content. Batch 06 avoids fixed shipping time, return window, refund time, contact details, and legal commitments.

## Release gate

Source integrity and business semantics pass. Release status remains **FIX** until QA-001, A11Y-001, and CONTENT-001 are closed. Batch 06 must not be silently upgraded from visual QA pending.
