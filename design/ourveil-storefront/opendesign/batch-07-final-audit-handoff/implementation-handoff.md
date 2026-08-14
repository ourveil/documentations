# Frontend Implementation Handoff

## Implementation posture

Build one storefront application with shared chrome and primitives, not six batch-shaped silos. Approved prototypes define intent and state coverage; the backend remains authoritative for commerce, identity, and payment facts.

Target direction: Next.js, TypeScript, Tailwind CSS, Radix primitives where useful, React Hook Form, Zod, TanStack Query, narrowly scoped Zustand, and next-intl.

## Recommended ownership

```text
src/
  app/                         route composition, metadata, layouts, boundaries
  components/
    foundation/                Container, Stack, typography, Divider
    navigation/                Header, Footer, Breadcrumbs
    commerce/                  ProductCard, Price, VariantSelector, CartLineItem
    forms/                     FormField and controls
    feedback/                  Alert, Toast, EmptyState, Skeleton, StatusChip
    overlays/                  Drawer, Dialog, Lightbox
  features/
    catalog/                   filters, search, queries
    product/                   variant resolution and gallery behavior
    cart/                      server cart and quantity reconciliation
    checkout/                  staged forms, shipping, review, create order
    payment/                   instructions, proof submission, review states
    account/                   profile, addresses, wishlist
    orders/                    history, snapshots, tracking, recovery
    support/                   FAQ and contact
  lib/                         API client, query client, i18n, telemetry policy
  schemas/                     shared Zod contracts when cross-feature
  types/                       stable domain types, not raw API leakage
  utils/                       bidi, money/date formatters, invariant helpers
```

Feature-local files should remain colocated when ownership is clearer:

```text
features/checkout/
  components/CheckoutForm.tsx
  hooks/useCheckoutForm.ts
  checkout.schema.ts
  checkout.api.ts
  checkout.queries.ts
  checkout.types.ts
  checkout.constants.ts
```

## Separation of concerns

- UI components render received state and emit intent.
- Hooks orchestrate form, URL, or interaction behavior.
- Query modules own reads, invalidation, and cache keys.
- API modules own DTO transport, not presentation state.
- Schemas validate user input and parse boundary data.
- Domain types represent valid storefront concepts.
- Formatters own currency, date, phone, and bidi-safe output.
- Do not create giant components that fetch, validate, mutate, render, and announce every state.

## Server and client boundaries

- Prefer server rendering for indexable content: homepage, catalog shells, PDP, About, FAQ, policy, and legal.
- Use client components only for interactive filters, selectors, drawers, forms, gallery controls, upload preview, copy feedback, and live status updates.
- Never expose payment-proof object URLs publicly. Use authorized upload and retrieval paths with short-lived access where necessary.
- Treat product price, variant validity, stock, shipping, totals, order/payment transitions, and permissions as backend facts.

## Form architecture

1. Define a Zod schema for client feedback and shared validation intent.
2. Bind persistent labels and stable IDs through `FormField`.
3. Use React Hook Form for entered state and dirty-field preservation.
4. Map server field errors back to controls and place non-field errors in a summary.
5. Move focus to the error summary after failed submission without clearing valid input.
6. Use pending mutation state to disable duplicate submission; require server idempotency for create-order.
7. Keep phone/email/reference values LTR while labels remain RTL.

## Query and mutation architecture

- TanStack Query owns server data, caching, background refresh, and invalidation.
- Query keys must include locale and relevant URL filters.
- Cart mutations reconcile returned authoritative cart data; never patch totals optimistically without server confirmation.
- Create order uses an idempotency key and a single mutation state machine.
- Proof submission updates the existing order payment query; it never creates an order.
- Status polling or subscription strategy is a backend/product decision; the UI supports received state without promising timing.
- Zustand is appropriate only for transient cross-route UI such as cart-drawer state or a checkout draft identifier. Do not duplicate query cache or form state in a global store.

## Product and variant resolution

- Represent the product's available attributes separately from sellable variants.
- Resolve a unique valid `variantId` only after every required attribute has a valid combination.
- Unavailable choices need a text/shape cue in addition to opacity.
- Submit `variantId` and quantity to cart; render the server-returned variant snapshot.
- Revalidate price and stock at add, cart change, checkout review, and order creation boundaries.

## Checkout and payment

- Preserve valid form data when moving backward.
- Resolve shipping availability and price before payment method and order creation.
- Block order creation if final total is unresolved.
- Payment methods are limited to backend-enabled InstaPay and electronic wallet in the initial release.
- Order creation success transitions to payment-required, not paid.
- Proof lifecycle: not sent → submitted → under review → accepted/rejected/new proof required.
- Order lifecycle remains a separate state machine.

## Route, metadata, and localization

- Use the logical matrix in `route-matrix.md`; final locale URL strategy remains open.
- Each indexable route needs unique title, description, canonical URL, Open Graph metadata, and structured headings.
- Cart, checkout, auth, account, tracking results, and system states are noindex.
- 404 and error boundaries must return correct framework semantics; the prototype is visual only.
- next-intl owns localized copy. Do not assemble Arabic sentences from directional fragments where punctuation may reorder.

## Responsive contract

- Base gutters: 16px at 360/390; fluid to 40px by desktop.
- Canonical structural breakpoint recommendation: 920px.
- Narrow refinement recommendation: 620px.
- Desktop content max: 1280px; legal reading measure: about 720px.
- Test at 360, 390, 768, 1440; additionally 430, 600, 820, 1024, 1366, and 1920 during implementation regression.
- Sticky actions reserve safe-area padding and must never cover final content.

## RTL and bidi contract

- Root locale controls `dir`; use logical CSS properties exclusively for layout edges.
- Use `bdi dir="ltr"` or an equivalent typed formatter for EGP amounts, phone numbers, emails, SKUs, order IDs, destinations, reference numbers, and dimensions.
- Directional icons are context-aware; neutral icons are never mirrored.
- Test timeline, carousel, pagination, breadcrumbs, drawers, and focus order in both directions.

## Accessibility contract

- 44×44px minimum interactive target; correct A11Y-001 in the shared footer.
- Visible `:focus-visible` ring with no clipping.
- Dialog/drawer focus trap, Escape, body lock, inert background, and focus restoration.
- Status changes include text and an appropriate live announcement; no color-only meaning.
- Accordion triggers expose expansion state and remain keyboard operable.
- Upload uses a native file input and announces selection, validation, submission, and review semantics.
- Reduced motion disables smooth scrolling, transforms, and shimmer.
- Headings follow document structure; visual size does not dictate heading level.

## Observability and privacy

- Never log proof image contents, full payment destinations, passwords, reset tokens, or unnecessary PII.
- Redact phone/email/order details from analytics payloads.
- Error UI receives a safe correlation identifier only when operationally approved.
- Guest tracking returns only the verified order; rate limiting and optional OTP are backend/security decisions.

## Definition of ready

Frontend implementation is ready for release only when the QA checklist passes, P1 findings are closed, production content is approved, and representative visual QA passes. Source validity alone is insufficient.
