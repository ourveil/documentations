# OURVEIL Catalog — Batch 02 Handoff

## Delivered screens

- Shop All: desktop 1440 and mobile 390.
- Category listing (`الطرح`): desktop 1440 and mobile 390.
- Search results (`شيفون`): desktop 1440 and mobile 390.
- Desktop expanded filtering with active filters.
- Mobile filter drawer in its open state.
- No-results, loading/skeleton, error/retry, and controlled pagination states.

## Responsive behavior

- Desktop uses the approved 1280px content container and 40px gutters. The 248px filter rail leaves three generous product columns rather than squeezing four narrow cards.
- Mobile uses 16px safe gutters and a deliberate two-column product grid. Product names remain 15px with relaxed Arabic line height; EGP values remain isolated LTR.
- The compact listing header replaces a marketing hero. Category imagery is limited to a shallow desktop band and removed on mobile so products enter the viewport earlier.
- Desktop filters remain visible and progressively disclosed. Mobile uses a near-full-width sheet with a persistent apply action and shared state.
- Active filters wrap without horizontal scrolling. Pagination remains explicit for SEO, browser navigation, accessibility, and return-position recovery.

## Motion annotations

| Interaction | Duration | Behavior |
|---|---:|---|
| Filter chip select/remove | 150ms | Border and quiet-surface feedback; result text updates without grid choreography |
| Sort control | 150–220ms | Native control response plus polite status feedback |
| Product image hover | 220ms | Maximum 1.8% image-only scale; card geometry does not move |
| Wishlist | 150ms | Immediate selected surface and `aria-pressed` update |
| Mobile filter drawer | 320ms | Logical inline entrance with focus containment |
| Drawer backdrop | 220ms | Opacity only; background becomes inert |
| Catalog skeleton | restrained loop | Geometry-preserving shimmer; removed under reduced motion |

`prefers-reduced-motion: reduce` reduces transitions to effectively instantaneous behavior and removes skeleton shimmer.

## Shared component architecture

| Prototype component | Intended boundary |
|---|---|
| `ShopHeader` | Breadcrumbs, compact title, optional category introduction |
| `CatalogToolbar` | `ResultCount`, `SortControl`, and mobile filter trigger |
| `FilterSidebar` | Desktop progressive-disclosure groups |
| `FilterDrawer` | Radix-compatible modal sheet with focus trap and persistent actions |
| `FilterGroup` | Native disclosure plus checkbox or labeled color controls |
| `ActiveFilterList` | Removable `FilterChip` collection and clear-all action |
| `ProductGrid` | Stable responsive geometry fed by TanStack Query results |
| `ProductCard` | Approved Batch 01 card with media link and independent wishlist control |
| `Pagination` | URL-backed previous, numbered, and next navigation |
| `CatalogSkeleton` | Product-sized loading placeholders that prevent layout shift |
| `EmptyResults` | Search/filter recovery actions without invented recommendations |
| `CatalogError` | Local retry state that preserves global store navigation |

## Filter and URL model

Filter state is represented conceptually as URL search parameters:

```text
/shop
/shop?category=scarves
/shop?material=chiffon
/shop?color=beige
/shop?availability=in-stock
/shop?sort=newest
/shop?page=2
/shop?category=scarves&material=chiffon&color=beige&sort=newest
```

- Desktop and mobile manipulate the same filter model.
- URLs remain shareable and stable across reload.
- Browser Back/Forward should restore filter, sorting, page, and scroll position.
- Next.js search params own the URL state; TanStack Query keys derive from normalized params.
- `next-intl` owns labels and RTL/LTR direction. Radix primitives should own production focus containment and restoration.
- Product-card wishlist state may use Zustand for immediate local feedback and TanStack Query for server synchronization.

## State and content notes

- Result totals are clearly scoped as prototype catalog samples and must be replaced by live query totals in production.
- Product prices are realistic EGP interface samples, not discounts or promotional commitments.
- No ratings, review-derived sorting, scarcity claims, delivery promises, or recommendation results were invented.
- The out-of-stock card uses explicit text in addition to its badge.
- Accessory-specific listing implementations should omit scarf-only size and material filters rather than reusing every group blindly.
- Batch 02 stops at catalog discovery. Product Details, Cart, and Checkout remain outside this delivery.

## Verification note

- Static verification passed for JavaScript syntax, local references, token parity, semantic states, RTL/LTR handling, focus containment, and reduced-motion rules.
- The runtime image export could not run because the current session did not expose an explicit export workspace context; no browser-based fallback was used.

## Senior UX refinement

- Removed the redundant category filter from the `الطرح` listing and reduced the default desktop disclosure density while keeping the filter state meaningful.
- Replaced the repeated category heading with a functional material-discovery subheading.
- Made product color previews explicitly available to assistive technology without turning the swatches into false interactive controls.
- Preserved search terms, filters, sorting, category context, and pagination in shareable URLs; browser Back/Forward now restores the prior URL-backed state.
- Corrected no-results recovery copy and behavior, added a full-size focus target for product-title links, and reinforced the visible media-link focus treatment.
