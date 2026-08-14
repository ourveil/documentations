# Canonical Storefront Business Rules

## 1. Sellable variants

- A product is not a sellable cart line by identity alone.
- Every required attribute combination resolves to a backend-known sellable `variantId`.
- Cart mutations accept `variantId` plus quantity; backend returns validated price, availability, and display snapshot.
- Wishlist does not bypass variant selection. If no exact valid variant is saved, the action opens PDP selection.
- Current availability is revalidated even when an exact variant was previously saved.

## 2. Price, stock, and reconciliation

- Backend is authoritative for price, stock, variant validity, promotions if later introduced, shipping, and totals.
- Revalidate on add-to-cart, quantity change, checkout review, and order creation.
- Never silently change a customer-visible total. Show a calm reconciliation message and require acknowledgement/action.
- Prevent invalid quantity and explain the available maximum without blaming the customer.

## 3. Shipping before transfer

- Shipping availability and price are resolved from the current configured delivery area.
- The customer sees product subtotal, shipping, and final payable total before order creation and manual transfer instructions.
- Unsupported or unconfigured areas do not receive fabricated fees or delivery estimates.
- Unresolved shipping blocks payment instructions and order readiness for transfer.

## 4. Payment methods

- Initial production methods: InstaPay and electronic wallet only.
- Transfer occurs outside the storefront; the storefront then accepts proof.
- Do not add cards, payment gateway semantics, or cash on delivery without a separately approved release.
- Payment destination data, enabled methods, and required amount come from backend configuration.

## 5. Order and payment state machines

They are separate and must be rendered as separately labelled statuses.

Payment examples:

`لم يرسل` → `تم الإرسال` → `قيد المراجعة` → `مقبول`

Alternative payment outcomes: `مرفوض`, `مطلوب إثبات جديد`, `مسترد`.

Order examples:

`بانتظار الدفع` → `بانتظار المراجعة` → `مؤكد` → `قيد التجهيز` → `جاهز للشحن` → `تم الشحن` → `خرج للتسليم` → `تم التسليم`.

Alternative order outcomes: `ملغي / مرفوض`.

- Order created does not mean payment complete.
- Proof uploaded/submitted does not mean payment accepted.
- Operational order stages that depend on verified payment must not appear before acceptance.

## 6. Proof review and recovery

- Proof is private order-related data; it is not a public asset.
- Client validation may check allowed type, size, missing file, and optional reference format; server revalidates.
- Submitted proof transitions to review, not success/paid.
- Rejected or new-proof-required shows a supplied customer-safe reason when available.
- Re-upload updates the existing order/payment process; it never creates a new order.

## 7. Guest checkout and tracking

- Guest checkout completes end-to-end without account creation.
- Account creation may be offered non-coercively after purchase.
- Historical guest-order claiming is not assumed until the product rule is approved.
- Guest tracking uses order number plus phone in the current design. Backend authorizes the match and reveals only that order.
- OTP and rate-limiting strategy are security implementation decisions, not simulated prototype facts.

## 8. Registered account

- Backend authorizes profile, addresses, wishlist, cart, and order history for the authenticated customer.
- Session expiry retains safe visible context and returns through authentication where possible.
- Google authentication entry is optional and depends on production OAuth configuration.

## 9. Saved addresses

- A saved address stores delivery identity/location details only.
- It does not guarantee current serviceability and does not own a permanent shipping price.
- Checkout rechecks supported area and current price.
- The order preserves the address and shipping-price snapshot used at purchase.

## 10. Historical order snapshots

- Order detail renders purchase-time product name, variant attributes, SKU, quantity, item price, subtotal, shipping, total, delivery address, and payment method snapshot.
- Later catalog edits never rewrite historical order presentation.
- Current product links may be supplemental but cannot replace the snapshot.

## 11. Duplicate submission and idempotency

- Final create-order action has an obvious pending/disabled state.
- Client guards prevent repeated taps, but backend idempotency is mandatory.
- Navigation retry or network replay must not create a second order.

## 12. Content and claims

- No fabricated shipping time, shipping rate, return window, refund timing, contact data, guarantee, review count, certification, or legal commitment.
- Prototype values are labelled and replaced before production.
- Final legal and operational content requires accountable approval.

## Design-required data vs backend decision

| Domain | Design-required data | Backend implementation decision |
|---|---|---|
| Product | identity, media, attributes, sellable variants, price, availability, content, SEO | storage, indexing, cache, DTO shape |
| Variant | variant ID, SKU, values, price, inventory state, optional media | inventory provider and reservation model |
| Cart | validated lines, quantities, display snapshot, reconciliation result | cart identity, persistence, concurrency |
| Shipping | availability, selected area, current price, final total | zone engine, carriers, configuration source |
| Order | number, purchase snapshots, totals, statuses, timeline | database model and event orchestration |
| Payment | method, instructions, required amount, proof/review state | storage, verification workflow, admin tooling |
| Account | authorized profile, addresses, wishlist, orders | identity provider, linking, retention |

The frontend must not invent or infer the backend implementation column.
