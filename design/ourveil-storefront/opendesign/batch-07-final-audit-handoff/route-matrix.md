# Storefront Route and State Matrix

These are recommended logical routes derived from the approved designs. English static prototype filenames are not a localization decision. Locale prefixing and final URL policy remain unresolved.

| Route | Purpose | Source | Access | Major states | Required backend data | Primary components | SEO | Auth / params | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Homepage and discovery entry | B01 | Public | default, newsletter feedback | curated collections, content, navigation | Header, Hero, ProductCard, Newsletter, Footer | Indexable | none | Editorial content is CMS-ready, not fabricated |
| `/shop` | All products | B02 | Public | loading, error, empty, filtered | products, facets, counts, prices, availability | FilterDrawer, ProductGrid, ProductCard, Pagination | Indexable | query: sort, page, filters | URL is source of truth for shareable discovery state |
| `/category/[slug]` | Category listing | B02 | Public | loading, error, empty | category, products, facets, SEO | same as `/shop` | Indexable | slug + filters | Resolve invalid slug to not-found |
| `/search` | Search results | B02 | Public | suggestions, results, no results, error | query results, facets, counts | SearchOverlay, ProductGrid, EmptyState | Conditional | query: `q`, filters, page | Avoid indexing internal result combinations by default |
| `/product/[slug]` | Product details and variant selection | B03 | Public | loading, error, invalid combination, added, zoom | product, media, attributes, sellable variants, inventory, SEO | ProductGallery, VariantSelector, Price, QuantitySelector | Indexable | slug; optional shareable attribute params | Add-to-cart submits sellable `variantId` |
| `/cart` | Full cart | B04 | Public | populated, empty, quantity conflict | validated cart lines, prices, stock | CartLineItem, QuantitySelector, CartSummary | Noindex | session/cart identity | Drawer is a shell overlay, not a separate route |
| `/checkout/information` | Customer information | B04 | Guest + account | default, validation, loading | existing customer defaults if signed in | CheckoutLayout, FormField, OrderSummary | Noindex | checkout session | Guest must not be forced to authenticate |
| `/checkout/address` | Delivery address | B04 | Guest + account | direct entry, saved address, validation | saved addresses when authorized | AddressForm, SavedAddressSelector | Noindex | checkout session | Selection does not carry fixed shipping cost |
| `/checkout/shipping` | Resolve delivery area and cost | B04 | Guest + account | supported, unsupported, recalculating | area availability, current shipping price, totals | ShippingAreaSelector, ShippingSummary | Noindex | checkout session | Blocks payment when total unresolved |
| `/checkout/payment` | Select manual payment method | B04 | Guest + account | InstaPay, wallet, unavailable method | enabled methods | PaymentMethodCard | Noindex | checkout session | No card or COD in initial release |
| `/checkout/review` | Final review and create order | B04 | Guest + account | ready, inventory/price conflict, submitting, error | revalidated cart, shipping, totals | CheckoutReview, CreateOrderButton | Noindex | idempotency key | Duplicate order submission must be blocked server-side and in UI |
| `/orders/[orderNumber]/payment` | Order created; payment required | B04/B05 | Verified guest or account | instructions, proof required | order, final amount, chosen method, destination | PaymentInstructions, CopyPaymentValue | Noindex | order authorization | Order exists; payment is not accepted |
| `/orders/[orderNumber]/proof` | Submit or replace transfer proof | B04/B05 | Verified guest or account | empty, selected, validation, submitting, submitted | order authorization, amount, proof policy | PaymentProofUploader, Preview | Noindex | order authorization | Re-upload mutates existing payment process |
| `/orders/[orderNumber]/confirmation` | Post-submission status and next step | B04/B05 | Verified guest or account | submitted, under review, accepted, new proof required | separate payment and order status | StatusPair, OrderSummary | Noindex | order authorization | Never infer acceptance from upload |
| `/auth/sign-in` | Authenticate | B05 | Signed out | validation, loading, incorrect credentials, server error | auth capabilities | AuthForm | Noindex | return URL | Preserve destination after session expiry |
| `/auth/create-account` | Optional registration | B05 | Signed out | validation, duplicate, loading | auth capabilities, Google availability | AuthForm | Noindex | return URL | Not required for guest checkout |
| `/auth/forgot-password` | Request reset | B05 | Signed out | submitting, submitted, error | reset capability | AuthForm, Notice | Noindex | none | Confirmation must not reveal account existence |
| `/auth/reset-password` | Set new password | B05 | Reset token | validation, success, expired | reset-token validity | AuthForm, StatePage | Noindex | token | Do not expose token in analytics or UI |
| `/account` | Account overview | B05 | Account | loading, error, session expired | profile summary, recent order, wishlist/address summaries | AccountShell, AccountNav | Noindex | auth required | Not a KPI dashboard |
| `/account/profile` | Personal information | B05 | Account | view, edit, validation, saving, success, error | authorized customer record | ProfileForm | Noindex | auth required | Phone remains LTR |
| `/account/addresses` | Saved addresses | B05 | Account | list, empty, add/edit, delete, validation, error | authorized addresses | AddressCard, AddressForm, Dialog | Noindex | auth required | Shipping support/price revalidated at checkout |
| `/account/wishlist` | Persistent wishlist | B05 | Account | loading, empty, error | saved products/variants, current availability | WishlistGrid, ProductCard | Noindex | auth required | Direct cart action only with current valid sellable variant |
| `/account/orders` | Order history | B05 | Account | loading, empty, error | authorized order summaries | OrderCard, StatusPair | Noindex | auth required; pagination | Order/payment status remain separate |
| `/account/orders/[orderNumber]` | Order details | B05 | Account | loading, error, payment recovery | order snapshot, totals, address snapshot, statuses, timeline | OrderDetails, OrderItemSnapshot, OrderTimeline | Noindex | auth required | Historical content comes from order snapshot |
| `/track-order` | Public guest tracking entry | B05; linked by B06 | Public verified | validation, found, not found, request error | matching order by number + phone | TrackingForm, OrderTracking | Noindex | order number + phone form | Reveal only authorized result; OTP is unresolved |
| `/about` | Brand story | B06 | Public | default | approved editorial copy and media | EditorialLayout | Indexable | none | Prototype copy must be replaced |
| `/contact` | Support contact | B06 | Public | validation, submitting, success, error | categories, submission endpoint, production contacts | ContactForm, FormMessage | Indexable | optional subject | No response-time promise |
| `/faq` | Common support answers | B06 | Public | filtered, no results, request error if remote | approved FAQ content | FAQAccordion, SearchField | Indexable | query: optional search/category | Unknown policy answers remain unpublished |
| `/shipping` | Shipping explanation | B06 | Public | default | approved zones/rules content | PolicySection | Indexable | none | Must match shipping-before-transfer rule |
| `/returns` | Returns and exchanges | B06 | Public | default | approved policy content | PolicySection, NumberedSteps | Indexable | none | No invented eligibility window or refund timing |
| `/privacy` | Privacy policy | B06 | Public | default | counsel-approved policy, version | LegalContents, LegalSection | Indexable | anchor hash | Stable canonical URL; readable measure |
| `/terms` | Terms and conditions | B06 | Public | default | counsel-approved terms, version | LegalContents, LegalSection | Indexable | anchor hash | Stable canonical URL |
| `not-found` | Invalid route | B06 | Public | 404 | route context only | SystemState | Noindex | none | Home and shop recovery |
| `error boundary` | Recoverable server/render error | B06 | Public | 500, retrying | safe error correlation only | SystemState | Noindex | none | Never expose stack trace |
| `service unavailable` | Temporary platform unavailability | B06 | Public | unavailable, retry | service state if known | SystemState | Noindex | none | No restoration-time promise |
| `offline` | Client connectivity problem | B06 | Public | offline, retry | browser connection state | SystemState | Noindex | none | Distinct from order or server failure |

## State ownership

- URL/query: search term, sort, filters, pagination, stable legal anchors.
- Local UI: open drawer/dialog, selected gallery image, local upload preview, uncommitted form fields.
- Server/backend: authentication, authorization, products, variants, stock, cart validation, shipping availability/price, totals, orders, payment instructions, proof state, order/payment statuses, account data, wishlist persistence.
- Persisted client convenience must never override server truth.

## Cross-route redirects and recovery

- Expired protected session → sign-in with safe return URL.
- Unsupported shipping → stay in shipping step with contact/recovery route; never continue to payment.
- Invalid product combination → remain on PDP and explain the attribute to change.
- Payment proof rejected/new proof required → existing order proof route.
- 404 → homepage and shop; 500/offline → retry plus stable route.
