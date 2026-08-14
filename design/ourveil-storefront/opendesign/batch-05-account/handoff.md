# OURVEIL Batch 05 — Customer Account Handoff

Batch 05 extends the approved storefront into customer authentication, account details, saved addresses, wishlist, order history, payment recovery, and guest order tracking. It does not replace guest checkout and does not introduce admin UI.

## Entry point and structure

- `index.html` is the manual-review launcher.
- Routed HTML files declare `data-screen` and `data-device` and load shared `assets/account.css` and `assets/account.js`.
- Desktop references target 1440px, mobile references target 390px, and the shared breakpoint collapses account and order layouts around 920px for tablet.
- Global header, footer, product imagery, buttons, inputs, statuses, motion, and overlays follow Batches 01–04.

## Screen inventory

### Authentication

- Sign in desktop/mobile, validation, incorrect-credentials/server error, and loading.
- Create account desktop/mobile, validation, and duplicate-email recovery.
- Forgot-password form and safe generic submitted state.
- Reset-password form, success, and invalid/expired-link states.
- Google authentication is a visible optional entry but remains disconnected prototype behavior.

### Account and profile

- Overview desktop/mobile, loading, and account-data error.
- Profile desktop/mobile, edit, validation, save success, and save error.
- Account navigation is horizontal on desktop and a focus-trapped section drawer on mobile.

### Addresses

- Address list desktop/mobile, empty, loading, add desktop/mobile, edit desktop/mobile, validation, delete confirmation, and save error.
- Default address is labeled with text; changing it does not communicate by color alone.
- A saved address stores delivery details only. It never stores a fixed shipping cost or guarantees that the delivery area remains supported.

### Wishlist

- Wishlist desktop/mobile, empty, loading, and error.
- Product presentation reuses the approved flat ProductCard language and 4:5 imagery.
- Wishlist stores a product reference or supported saved-variant reference. It does not bypass Product Details when a valid sellable variant is still required.
- Current price and availability must be revalidated before any cart mutation.

### Orders

- Order history desktop/mobile, empty, loading, and error.
- Order details desktop/mobile and error.
- Logged-in order tracking desktop/mobile.
- Items are historical order snapshots: product name, SKU, variant attributes, quantity, and price at purchase time.
- Current product data must never rewrite historical order content.

### Payment recovery

- Payment required, new proof required, upload, selected file, validation error, resubmission, and administrative review; each has desktop and mobile wrappers.
- The uploader preserves Batch 04 file rules: JPG, PNG, or WEBP up to 5 MB.
- Resubmitting proof updates proof/payment-review state on the same order. It does not create a new order and does not mean payment is accepted.
- Payment destinations and amounts shown here are prototype examples and must come from the authoritative order/payment API in production.

### Guest and session states

- Guest tracking form, validation, found, and not-found states with desktop/mobile wrappers.
- Guest tracking requires order number and phone and reveals only the matched order.
- Session expired and sign-out states have desktop/mobile wrappers.
- Session expiration should preserve return context after successful re-authentication when safe.

## Account information architecture

Primary customer areas are Overview, Orders, Wishlist, Addresses, Personal Information, and Sign Out. Desktop uses a restrained local navigation line. Mobile uses a compact trigger and drawer rather than compressing a desktop sidebar.

## Authentication expectations

- Guests can browse, cart, checkout, create orders, transfer manually, upload proof, and track orders without registering.
- Registered customers may receive server-persisted cart, wishlist, addresses, and order history.
- Authentication, authorization, session handling, password reset, and Google OAuth are backend concerns. The prototype demonstrates interface states, not token behavior.
- Authentication failures use calm, specific recovery copy without exposing whether an account exists in forgot-password responses.

## Order and payment state mapping

Order and payment statuses remain separate fields.

Payment states may include: `لم يرسل`, `تم الإرسال`, `قيد المراجعة`, `مقبول`, `مرفوض`, `مطلوب إثبات جديد`, `مسترد`.

Order states may include: `بانتظار الدفع`, `بانتظار المراجعة`, `مؤكد`, `قيد التجهيز`, `جاهز للشحن`, `تم الشحن`, `خرج للتسليم`, `تم التسليم`, `ملغي / مرفوض`.

The interface must never infer payment acceptance from proof submission or show a fulfillment stage that requires accepted payment before acceptance actually occurs.

## Backend source of truth

Backend authorization and data remain authoritative for:

- customer identity and session;
- address ownership;
- wishlist persistence and product availability;
- server-persisted cart;
- order history and immutable order-item snapshots;
- payment status and order status;
- payment instructions and destinations;
- order, shipping, and final totals;
- proof-review state and supplied rejection reason.

Client state is limited to current UI section, form draft before submission, password visibility, overlay state, selected local upload preview, and temporary feedback.

## Security and privacy

- Account routes assume authenticated backend authorization on every request.
- Do not expose staff notes, internal audit data, another customer’s records, permissions, or raw internal identifiers.
- Guest tracking returns only a matching order after required verification inputs.
- Uploaded proof previews are local and private; production storage must use authenticated upload and retrieval controls.

## Accessibility

- Arabic-first `dir="rtl"` shells with explicit LTR isolation for email, phone, order IDs, SKUs, dates, dimensions, payment destinations, and EGP values.
- Persistent labels, field-specific errors, error summaries, visible focus, and minimum 44×44px controls.
- Account navigation exposes `aria-current`; dialogs and drawers use modal semantics, inert background, focus containment, Escape close, and focus restoration.
- Status meanings always include text and never rely on color alone.
- Toasts use polite live announcements; errors use alerts when immediate attention is needed.
- Reduced-motion mode removes decorative motion and skeleton shimmer.

## Responsive behavior

- Desktop content uses the shared 1280px maximum and product-led whitespace.
- Tablet collapses overview/order-detail columns while keeping navigation readable.
- Mobile uses 16px gutters, single-column forms, 2-column wishlist products, compact order rows, safe-area-aware sticky form actions, and a dedicated account navigation drawer.
- Long IDs and technical values use isolated LTR direction and may wrap only at safe boundaries.

## Reusable primitives

`AccountShell`, `AccountNavigation`, `AuthForm`, `AddressCard`, `AddressForm`, `WishlistProduct`, `OrderCard`, `OrderStatusBadge`, `PaymentStatusBadge`, `OrderTimeline`, `OrderItemSnapshot`, `AccountEmptyState`, `AccountErrorState`, `AccountSkeleton`, `PaymentRecoveryPanel`, `ProofUploader`, and shared storefront `Header` / `Footer`.

## Prototype assumptions

- `مريم أحمد`, `OV-1048`, sample address data, sample dates, and EGP totals are interface examples.
- No production customer, payment destination, shipping coverage, shipping price, delivery estimate, carrier number, or OAuth identity is represented.
- The sample order uses a stored snapshot and the same manual-payment semantics approved in Batch 04.

## Unresolved product decisions

- Account deletion, legal retention, and identity-verification policy.
- Whether and how historic guest orders may be claimed by a later account.
- Eligibility and timing rules for customer-initiated order cancellation.
- OTP or another privacy enhancement for guest tracking.
- Production Google OAuth configuration, consent, account linking, and conflict handling.
- Whether wishlist stores only products or may store an exact variant reference.
- Session-expiration return-context rules for sensitive pages.

These items require product, legal, security, or backend decisions and are intentionally not fabricated in the prototype.
