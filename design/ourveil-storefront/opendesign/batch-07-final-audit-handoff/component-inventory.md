# Canonical Storefront Component Inventory

The visual source column identifies the approved batch that should guide implementation. Components inherit brand tokens; they do not own independent palettes.

## Foundation

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| Container | 1280px page frame and gutters | Design System, all | default, reading, medium | 16px mobile; logical padding | semantic wrapper; CSS utility |
| Stack / Inline | Shared vertical and horizontal rhythm | Design System | spacing variants | wrap intentionally; logical gap | neutral layout primitives |
| Divider | Quiet section separation | all | full, inset | border-block / border-inline | decorative only unless it conveys grouping |
| Typography | Display, PageTitle, SectionTitle, Body, Meta | B01/B03/B06 | role variants | Arabic body; isolated English accent | semantic element chosen by caller |
| Price | Consistent EGP display | B02–B05 | current, old, total | always directionally isolated | readable label when context is absent |

## Navigation

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| AnnouncementBar | Global compact announcement | B01–B06 | default, optional link | 38px desktop / 36px mobile | landmark-neutral; avoid auto-rotation |
| StorefrontHeader | Global identity and entry points | B01–B06 | default, sticky | 78px desktop / 60px mobile | `header`, labelled navs |
| DesktopNav | Primary commerce navigation | B01/B02 | default, current, hover | RTL order; 920px collapse | `nav`, `aria-current` |
| MobileNavDrawer | Compact global navigation | B03–B06 | closed, open | enters from logical start; 380px class | Radix Dialog/Drawer, trap, Escape, restore |
| Breadcrumbs | Hierarchy and back context | B02/B03/B06 | default, current | directional chevron context-aware | `nav` with ordered list and label |
| StorefrontFooter | Support/legal/navigation map | B01–B06 | desktop groups, mobile disclosures | all links 44px minimum | `footer`, labelled nav groups, native details allowed |

## Commerce

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| ProductCard | Product discovery | B01/B02/B03/B05 | default, unavailable, saved | 4/2-column grid; 4:5 image | linked title/image; wishlist labelled button |
| CompactProductCard | Recently viewed / order context | B03/B04 | default | row on narrow screens | avoid nested interactive elements |
| StockStatus | Availability message | B03/B05 | available, low, unavailable | text plus semantic icon | live announcement only when state changes |
| VariantSelector | Build sellable combination | B03 | available, selected, unavailable, focus | logical wrapping | radio-group/pressed semantics; disabled reason visible |
| ColorSwatch | Color attribute choice | B03 | same as selector | label accompanies color | never color-only |
| QuantitySelector | Cart/PDP quantity | B03/B04 | min, max, updating, conflict | 44/48/44 geometry | labelled decrement/output/increment |
| ProductGallery | Media and zoom | B03 | selected, loading, zoom | mobile dominant image | buttons labelled; focus visible; keyboard selection |
| CartLineItem | Sellable variant line | B04 | updating, stock conflict, removed | product first; prices LTR | announce quantity errors |
| OrderSummary | Subtotal, shipping, final | B04/B05 | unresolved shipping, resolved, recalculating | sticky desktop; inline mobile | use definition list; final total explicit |
| OrderItemSnapshot | Historical purchase line | B05 | static | compact mobile row | source is order snapshot, not current PDP |

## Forms

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| FormField | Label/helper/error composition | B04–B06 | default, invalid, disabled, success | full-width mobile | RHF controller only where needed; IDs link messages |
| Input / PhoneInput | Text and technical entry | B04–B06 | focus, invalid, disabled | phone/email LTR | native input, autocomplete, inputmode |
| Select | Constrained selection | B04–B06 | placeholder, selected, invalid | native-feeling mobile | native select or Radix Select with label |
| Textarea | Longer content | B05/B06 | default, invalid | resize vertical; no fixed clipping | native textarea |
| Checkbox / Radio | Consent and exclusive choice | B03–B05 | checked, selected, disabled | 44px labelled row | native input or Radix primitive |
| UploadField | Transfer-proof selection | B04/B05 | empty, selected, invalid, submitting | 44px change/remove; mobile preview | native file input; status live region |
| FormMessage | Field/form/server feedback | B04–B06 | info, error, success | wraps naturally | `role=alert` only when interruption is needed |

## Feedback

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| Alert | Persistent semantic notice | Design System/B04 | neutral, info, warning, error, success | icon at logical start | text/icon plus color; role chosen by urgency |
| Toast | Quiet transient confirmation | B03–B06 | open, dismissed | mobile inset 16px | Radix Toast; live announcement; no critical-only content |
| EmptyState | Purposeful recovery | B02/B04–B06 | domain-specific | one primary action | heading, message, meaningful link |
| ErrorState | Recoverable failure | B02/B04–B06 | retry, return | centered but not oversized | focus moves to heading on navigation error |
| Skeleton | Geometry reservation | B02–B05 | loading | match final layout | `aria-busy`; reduced motion disables shimmer |
| StatusChip / StatusPair | Compact named state | B04/B05 | domain states | wrap; values isolated | text label required; never color-only |

## Overlays

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| Dialog | Confirmation and constrained task | B05 | closed, open | 480px max, 16px mobile inset | Radix Dialog; trap/Escape/restore |
| Drawer | Navigation, filter, cart | B02/B04–B06 | closed, open, long content | semantic size variants; logical entry edge | Radix Dialog adapted as drawer |
| Popover / Dropdown | Short anchored choice | Design System | open, selected | collision-aware | Radix Popover/DropdownMenu |
| Lightbox | Product media inspection | B03 | open, next, previous | full viewport mobile | Dialog primitive; labelled controls |

## Checkout and payment

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| CheckoutStepper | Location in five-step checkout | B04 | complete, current, future | compact current label mobile | ordered list, `aria-current=step` |
| ShippingSummary | Area, price, final total | B04 | unresolved, supported, unsupported | inline mobile | server-owned values; live recalculation status |
| PaymentMethodCard | Manual method selection | B04 | available, selected, unavailable | shared InstaPay/wallet system | radio semantics; explains external transfer |
| PaymentInstructions | Destination and amount | B04/B05 | method variants, loading | values LTR and copyable | sample badge in prototype; backend values in production |
| CopyPaymentValue | Copy technical value | B04/B05 | idle, copied, failed | 44px icon/text action | clipboard result announced |
| PaymentProofUploader | Submit proof for review | B04/B05 | empty, preview, invalid, uploading, submitted | accessible mobile preview | file validation client+server; private object access |

## Account

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| AccountShell / AccountNav | Storefront-local account IA | B05 | current section, mobile disclosure | no squeezed sidebar | nav with `aria-current` |
| AddressCard | Saved delivery details | B05 | default, current default | stacks actions mobile | clear default text; no stored shipping price |
| WishlistGrid | Saved discovery list | B05/B02 | loading, empty, error | ProductCard grid | current availability announced |
| OrderCard | Compact history entry | B05 | status combinations | stacks on mobile | order and payment statuses separately labelled |
| OrderDetails | Snapshot, totals, actions | B05 | payment required/review/accepted | column collapse at 920px | definition lists and semantic sections |
| OrderTimeline | Supported progression | B05 | complete, current, future omitted | RTL rail via logical border | ordered list; current state explicit |

## Support and legal

| Component | Purpose | Visual source | Primary states | Responsive / RTL | Accessibility / implementation primitive |
|---|---|---|---|---|---|
| FAQAccordion | Scan support answers | B06 | collapsed, expanded, filtered | full width; comfortable wrapping | native details or Radix Accordion, `aria-expanded` |
| ContactForm | Submit support message | B06 | validation, submitting, success, error | single column mobile | RHF + Zod; no sensitive fields |
| LegalContents | Long-document navigation | B06 | sticky desktop, disclosure mobile | 220px rail + 720px reading measure | anchor nav, skip usability, current section optional |
| PolicySection | Structured policy reading | B06 | default, pending copy note | medium reading width | headings in order; no card-per-clause |

## Ownership rule

Feature modules own data and business behavior. Shared components own visual and accessibility contracts. A shared component must not infer payment acceptance, shipping eligibility, variant validity, or authorization from client-only state.
