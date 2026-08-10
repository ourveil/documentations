# OURVEIL Product Details — Batch 03 Handoff

## Delivered screens

- Product Details: desktop 1440 and mobile 390.
- Alternate selected color (`موكا`) with synchronized imagery, size, SKU, and price.
- Unavailable color state with disabled size choices and purchase action.
- Expanded image viewer with keyboard navigation and focus containment.
- Add-to-cart success feedback with bag-count update and no redirect.
- Mobile sticky purchase action state.
- Geometry-preserving loading skeleton and local product error/retry state.
- Related and recently viewed sections using the approved ProductCard family.

No low-stock claim is included because verified inventory data was not supplied.

## Responsive behavior

- Desktop uses the approved 1280px container. The gallery occupies the visual left side and the purchase panel remains on the right with a restrained sticky position.
- The main gallery remains 4:5, with four keyboard-operable thumbnails and optional previous/next controls.
- Mobile is intentionally reordered: breadcrumbs → full-width 4:5 gallery → identity → variants → purchase → reassurance → accordions → product discovery.
- Mobile uses 16px safe gutters, two-column related products, compact recently viewed rows, and no horizontal page overflow.
- The sticky mobile purchase bar remains hidden until the full purchase controls have entered and then left the viewport above. The dedicated state screen exposes the final bar for review.
- Safe-area padding and page bottom padding prevent the sticky action from covering content.

## Variant model

- Product: `طرحة شيفون بريميوم`.
- Material is fixed product information (`شيفون`), not a false selector.
- Colors: `بيج حريري`, `موكا`, and `أسود`.
- Sizes: `180 × 70 cm` and `200 × 75 cm`.
- `بيج حريري + 200 × 75 cm` is unavailable in the prototype dataset.
- `أسود` demonstrates a fully unavailable color. Both sizes remain visible with explicit unavailable text, and the Add to Cart action is disabled.
- Changing color recomputes available sizes, updates the image set, SKU, price, availability, quantity constraint, and sticky purchase summary.
- If a prior size is impossible for the new color, the first available size is selected and announced before purchase.
- Prices and availability are interface samples for the approved prototype, not promotional or inventory commitments.

## Motion annotations

| Interaction | Duration | Behavior |
|---|---:|---|
| Color selection | 150–220ms | Border/surface state plus gallery synchronization |
| Product image change | 220ms | Restrained opacity transition; no page movement |
| Thumbnail selection | 150ms | Border and inset selected state |
| Wishlist | 150ms | Immediate selected surface and polite announcement |
| Add to Cart | 150ms + 220ms | Pressed feedback, then compact success toast and bag update |
| Image viewer | 320ms | Context-preserving opacity transition |
| Viewer backdrop/context | 220ms | Page becomes inert while the viewer owns focus |
| Mobile purchase bar | 220ms | Controlled vertical entrance after the full controls pass above |
| Product information | native / 220ms | Tabs on desktop; restrained native disclosure on mobile |

`prefers-reduced-motion: reduce` removes skeleton shimmer and reduces transitions to effectively instantaneous behavior.

## Reusable component architecture

| Component | Responsibility |
|---|---|
| `ProductBreadcrumbs` | Product hierarchy and return path |
| `ProductGallery` | Active media, directional navigation, swipe, and zoom trigger |
| `ProductGalleryThumbnail` | Labeled, keyboard-operable image choice |
| `ProductZoomDialog` | Radix-compatible modal viewer with focus restoration |
| `ProductTitle` | Arabic product identity and fixed material context |
| `ProductPrice` | Natural-direction EGP value |
| `ProductAvailability` | Text and semantic state, never color alone |
| `VariantSelector` | Coordinates data-driven sellable combinations |
| `ColorSelector` | Visible swatch, text label, and selected state |
| `SizeSelector` | Available, selected, and explicitly unavailable values |
| `MaterialSelector` | Not rendered for this fixed-material product |
| `QuantitySelector` | Minimum 1 and maximum current variant stock |
| `AddToCartButton` | Validates selected variant before mutation |
| `WishlistButton` | Local selected feedback with accessible announcement |
| `PurchasePanel` | Identity, variants, quantity, action, and reassurance |
| `MobilePurchaseBar` | Conditional compact continuation of the primary action |
| `ProductInfoTabs` | Desktop information navigation |
| `ProductInfoAccordion` | Mobile information disclosure |
| `ShippingNotice` | Region-based shipping and manual-payment context |
| `RelatedProducts` | Approved ProductCard grid |
| `RecentlyViewed` | Compact treatment of the same ProductCard family |
| `ProductDetailSkeleton` | Stable gallery and purchase geometry |
| `ProductUnavailable` | Local recovery without disabling global navigation |

## State ownership

**Server/product data**

- Product identity and description.
- Sellable variants and variant IDs/SKUs.
- Price, stock, images, and availability for each combination.

**Local interaction state**

- Active gallery image.
- Selected color and size.
- Quantity.
- Wishlist feedback.
- Image viewer state and the element that opened it.

**Cart mutation**

- Validate the currently selected sellable variant.
- Validate quantity against the variant’s actual stock or configured rule.
- Add the variant ID—not the generic product ID.
- Keep the customer on the product page and confirm the mutation politely.

This structure maps to Next.js and `next-intl` for route/content ownership, TanStack Query for product and mutation data, Zustand for limited cross-surface cart feedback, Radix for dialog primitives, Tailwind-compatible tokens for styling, and Motion for the approved timing scale.

## Accessibility notes

- Gallery thumbnails, next/previous controls, color options, sizes, quantity, wishlist, and purchase controls meet the 44px minimum.
- Prices, sizes, SKU, and English payment names preserve their natural LTR direction.
- Variant state uses `aria-pressed`, disabled semantics, visible labels, and live status copy.
- The zoom viewer traps focus, supports Escape and arrow keys, and restores focus to the zoom trigger.
- The page shell becomes inert while the viewer or mobile navigation drawer is open.
- Add-to-cart and wishlist feedback use polite live regions.
- Every product and gallery image includes an alt-text requirement in the rendered example.

## Assumptions and boundaries

- Product text, price, SKU structure, variant matrix, and inventory availability are realistic prototype samples pending live catalog data.
- No low-stock state was shown because verified stock messaging was unavailable.
- No reviews, discounts, scarcity statements, free-shipping thresholds, delivery durations, certifications, or automatic-payment claims were added.
- Payment remains manual transfer through InstaPay or electronic wallet, followed by the existing proof-upload flow in later checkout work.
- Batch 03 stops at Product Details. Cart and Checkout are outside this delivery.
