# OURVEIL Purchase Flow — Batch 04 Handoff

## Delivered flow

`Cart → Customer information → Address → Shipping area → Payment method → Final review → Order created → Manual transfer instructions → Transfer proof → Administrative payment review → Order tracking`

The flow supports guest checkout without account creation. Registered customers may reuse saved identity and address data, while guests enter the same information directly.

## Business-state separation

Order creation, transfer-proof submission, payment review, and payment acceptance are separate events.

### Payment status

- `not_submitted` — لم يرسل
- `submitted` — تم الإرسال
- `under_review` — قيد المراجعة
- `accepted` — مقبول
- `rejected` — مرفوض
- `new_proof_required` — مطلوب إثبات جديد
- `refunded` — مسترد

### Order status

- `awaiting_payment` — بانتظار الدفع
- `awaiting_review` — بانتظار المراجعة
- `confirmed` — مؤكد
- `processing` — قيد التجهيز
- `ready_to_ship` — جاهز للشحن
- `shipped` — تم الشحن
- `out_for_delivery` — خرج للتسليم
- `delivered` — تم التسليم
- `cancelled_or_rejected` — ملغي / مرفوض

These must remain separate fields in data, UI, analytics, and notifications. Uploading proof never sets payment to accepted and never produces “تم الدفع بنجاح”.

## Amount and shipping rules

- Product subtotal is shown in Cart.
- Shipping remains “يُحسب بعد تحديد المنطقة” until a supported region is selected.
- The final payable total is shown only after the backend supplies the shipping fee.
- Unsupported regions cannot proceed to payment or order creation.
- Before order creation, revalidate variant, stock, unit price, shipping availability, shipping price, and final totals.
- Never silently reconcile a changed total. Present `CheckoutInventoryConflict` with the reason and a customer decision.
- All values in the prototype (`EGP 680`, `EGP 75`, `EGP 755`, and `OV-1048`) are interface samples pending live backend data.

## Manual payment

- Supported methods in this release: InstaPay and electronic wallet only.
- Transfer occurs outside OURVEIL.
- Payment destination, holder name, and final amount are supplied by backend configuration after order creation.
- The visible InstaPay address and wallet number are explicitly marked sample data and are not real payment destinations.
- No QR code is shown because no verified QR payload was supplied.
- Transfer proof is private order evidence. Do not expose it through a public object URL.

## Responsive behavior

- Desktop uses the approved 1280px container with a flexible form column and a 380–400px sticky order summary.
- Mobile uses 16px gutters, a single-column sequence, compact five-step progress, and a sticky next-step action only on active form screens.
- Mobile summaries follow the primary content rather than preceding or dominating it.
- Cart imagery remains 4:5 and variant metadata stays adjacent to the selected product.
- All minimum controls are 44px; form controls are 48px for comfortable mobile keyboard use.
- Prices, phone numbers, order numbers, wallet numbers, InstaPay addresses, dimensions, and SKUs preserve natural LTR direction.

## Motion annotations

| Interaction | Duration | Behavior |
|---|---:|---|
| Cart drawer | 320ms | Logical-side entrance with focus isolation |
| Drawer backdrop | 220ms | Restrained opacity |
| Quantity feedback | 150ms | Immediate count and subtotal update |
| Checkout selection | 150ms | Border/surface feedback only |
| Validation | 150ms | Field/error state without page movement |
| Proof preview | 220ms | Local preview replacement without layout jump |
| Toast | 220ms | Compact contextual feedback |
| Create order | 150ms press | Disabled/aria-busy state prevents duplicate submission |

`prefers-reduced-motion: reduce` suppresses shimmer and reduces transitions to effectively instantaneous behavior.

## Reusable component architecture

| Component | Responsibility |
|---|---|
| `CartDrawer` | Radix-compatible overlay with focus trap, Escape close, and focus restoration |
| `CartLineItem` | Selected variant, quantity, price, stock constraint, and remove action |
| `CartPage` | Full cart review and route to checkout |
| `CartSummary` / `OrderSummary` | Subtotal, shipping, and final total hierarchy |
| `CheckoutLayout` | Main transactional content plus desktop sticky summary |
| `CheckoutStepper` | Five-step semantic progress model |
| `CustomerInformationForm` | Guest/registered identity input with persistent labels |
| `AddressForm` | Egypt-first direct address entry |
| `SavedAddressSelector` | Optional registered-customer address reuse |
| `ShippingAreaSelector` | Backend-configured availability and cost |
| `ShippingSummary` | Selected region, cost, and final payable amount |
| `PaymentMethodSelector` / `PaymentMethodCard` | InstaPay and wallet selection using one shared pattern |
| `CheckoutReview` | Exact products, variants, customer, address, shipping, method, and totals |
| `CreateOrderButton` | Revalidation, duplicate-submit prevention, and success transition |
| `PaymentInstructions` | Shared manual-transfer layout for InstaPay and wallet |
| `CopyPaymentValue` | Copy feedback through a polite live region |
| `TransferProofUploader` | Native file input with type/size validation |
| `TransferProofPreview` | Private local preview, file metadata, change, and remove |
| `PaymentSubmissionStatus` | Proof-submitted state without payment approval language |
| `PaymentReviewStatus` | Administrative-review status and next-step guidance |
| `OrderCreated` | Order success while payment remains required |
| `CheckoutSkeleton` | Stable form/summary geometry |
| `CheckoutError` | Retry without discarding valid local form state |
| `CheckoutInventoryConflict` | Explicit stock/price reconciliation before order creation |

## State ownership

### Server / backend source of truth

- Product price and variant ID
- Sellable stock
- Shipping availability and shipping price
- Enabled payment methods
- Payment destination data
- Product subtotal, shipping total, and final total
- Order number
- Payment status
- Order status

### Client form state

- Current checkout step
- Entered customer data before submission
- Selected saved address
- Selected payment method
- Local upload preview

Frontend totals are display values only and must never be authoritative.

## Navigation and resilience

- Back navigation preserves valid customer, address, and payment choices.
- The prototype stores a limited checkout draft in `localStorage` to demonstrate continuity; production ownership belongs in the chosen form/store architecture.
- Browser Back/Forward should retain the active checkout step and valid draft data.
- Final order creation is an idempotent server mutation. Disable repeated taps, include an idempotency key, and reconcile the returned authoritative order.
- TanStack Query owns remote loading/mutation state; React Hook Form and Zod own field validation; Zustand is reserved for limited cross-surface cart continuity; `next-intl` owns Arabic-first copy and Bidi formatting.

## Accessibility

- Persistent labels; placeholders are hints only.
- Native inputs, selects, textarea, radio-like selectors, and file input semantics.
- Error summary links to invalid fields and specific field messages.
- Drawer uses modal semantics, page inertness, focus containment, Escape close, and focus restoration.
- Upload, copy, quantity, retry, and submission results use polite live feedback.
- Status meaning is always stated in text, not color alone.
- Mobile targets meet or exceed 44px and sticky actions include safe-area padding.

## Final quality-audit refinements

- Compact checkout uses a visible “step X of 5” summary while retaining the semantic ordered stepper.
- Mobile final review repeats the authoritative prototype total immediately before the Create Order action; the full order summary remains available below without becoming the primary page surface.
- Order-created states explicitly retain the chosen manual payment method alongside separate order and payment statuses.
- Transfer instructions give the exact amount a stronger typographic hierarchy while keeping all destination data visibly marked as sample data.
- Quantity and proof-upload controls keep their focus indication inside clipped or transparent interaction surfaces.

## Assumptions and boundaries

- Cairo / Nasr City and `EGP 75` are clearly labeled prototype shipping examples, not released coverage or pricing.
- Payment destination data is visibly marked sample data.
- No delivery duration, free-shipping threshold, card gateway, cash on delivery, automatic payment approval, review duration, or account requirement is claimed.
- Account screens, administrative payment review tooling, Cart implementation, and Checkout backend code are outside this design batch.
