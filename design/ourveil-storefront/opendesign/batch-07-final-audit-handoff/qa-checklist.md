# OURVEIL Storefront — Implementation QA Checklist

Use this checklist against the real Next.js storefront. A P0 or P1 failure blocks release.

## 1. Integrity and routes

- [ ] Every route in `route-matrix.md` resolves or intentionally redirects.
- [ ] Protected account routes enforce backend authorization.
- [ ] Guest checkout works without sign-in.
- [ ] Invalid product/category slugs resolve to correct not-found semantics.
- [ ] Error boundaries never expose stack traces or sensitive data.
- [ ] Indexable pages have unique title, description, canonical, and headings.
- [ ] Cart, checkout, account, tracking results, and error states are noindex.

## 2. Global chrome

- [ ] One shared announcement/header/footer implementation is used.
- [ ] Desktop header is visually consistent at 1440 and 1024.
- [ ] Mobile header remains uncrowded at 390 and 360.
- [ ] Footer grouping, policy links, newsletter state, and copyright are coherent.
- [ ] All footer links meet 44×44px, including the Batch 05 correction.
- [ ] Logo assets are used without recolor, crop, redraw, or text replacement.

## 3. Customer journeys

- [ ] Guest: home → catalog → PDP → valid variant → cart → checkout → shipping → payment → order → proof → tracking.
- [ ] Account: sign-in → wishlist → PDP → cart → saved address → order → history → tracking.
- [ ] Recovery: existing order → new proof required → re-upload → under review.
- [ ] Support: FAQ → shipping/returns → contact.
- [ ] Failure: 404/500/unavailable/offline → appropriate recovery.
- [ ] Browser back preserves valid checkout data where appropriate.

## 4. Product, variant, cart

- [ ] Add-to-cart sends a sellable `variantId`, never only product ID.
- [ ] Unavailable combinations are explained without opacity alone.
- [ ] Wishlist never bypasses required variant selection.
- [ ] Price and inventory revalidate at mutation boundaries.
- [ ] Quantity cannot exceed server-validated availability.
- [ ] Cart reconciliation announces price/stock changes; totals never change silently.

## 5. Shipping and checkout

- [ ] Shipping support and cost resolve before payment instructions.
- [ ] Unsupported area blocks transfer and provides recovery.
- [ ] Subtotal, shipping, and final total are separately labelled.
- [ ] Create-order uses an idempotency key and disables repeated submission.
- [ ] No card or COD appears unless a later approved release enables it.
- [ ] InstaPay/wallet destinations and amounts come from backend configuration.

## 6. Payment and order semantics

- [ ] Order status and payment status are separate everywhere.
- [ ] Order created does not read as paid.
- [ ] Proof submitted does not read as payment accepted.
- [ ] Proof under review is neutral/informational, not green success.
- [ ] New proof required shows a safe supplied reason and recovery action.
- [ ] Re-upload updates the existing order; it cannot create another order.
- [ ] Fulfillment stages that require payment do not appear before acceptance.

## 7. Account and historical data

- [ ] Order details use purchase-time product, variant, address, shipping, and total snapshots.
- [ ] Saved addresses do not store immutable shipping prices.
- [ ] Account data is scoped to the authenticated customer.
- [ ] Guest tracking reveals only the matched authorized order.
- [ ] Session expiry preserves a safe return path and visible context.

## 8. Forms and feedback

- [ ] Labels remain visible; placeholders are supplementary only.
- [ ] Errors link to controls and appear in a useful summary where needed.
- [ ] First invalid field is reachable and focus movement is deliberate.
- [ ] Pending states disable duplicate mutations and remain readable.
- [ ] Network errors preserve entered data and provide retry.
- [ ] Upload validates type/size on client and server.
- [ ] Copy/upload/save feedback is announced without blocking the task.

## 9. RTL and bidi

- [ ] Arabic locale sets root RTL and uses logical CSS properties.
- [ ] EGP, phone, email, SKU, order ID, payment destination, dimensions, and references remain LTR-isolated.
- [ ] Breadcrumbs, pagination, timeline, carousel, drawer, and directional chevrons are context-correct.
- [ ] Neutral icons are not mirrored.
- [ ] Mixed punctuation remains readable at 360px.

## 10. Accessibility

- [ ] Semantic landmarks and heading order are correct.
- [ ] Every interactive target is at least 44×44px.
- [ ] `:focus-visible` is obvious and not clipped.
- [ ] Dialogs/drawers trap focus, close with Escape, lock body scroll, hide background, and restore focus.
- [ ] Accordions expose expansion state and support keyboard interaction.
- [ ] Tabs/selectors expose selected/current/pressed semantics.
- [ ] Status is communicated by text/icon as well as color.
- [ ] Live regions are polite unless immediate interruption is necessary.
- [ ] Alt text matches image purpose; decorative media is ignored.
- [ ] At 200% zoom, core flows remain usable without two-dimensional scrolling.
- [ ] Reduced motion removes nonessential animation and shimmer.

## 11. Responsive visual matrix

| Width | Representative routes | Required checks |
|---:|---|---|
| 1440 | Homepage, catalog, PDP, cart, checkout review, payment, account, order detail, About, FAQ, Privacy | hierarchy, grid density, sticky panels, readable measures, footer |
| 768 | Homepage, catalog filter, PDP, checkout, account, About, FAQ, Privacy, tracking | collapse timing, nav, forms, summaries, legal TOC |
| 390 | PDP, cart, checkout, payment instructions, proof, account orders, contact, FAQ, returns, privacy, 500 | gutters, long Arabic, sticky actions, upload, safe area |
| 360 | Home/header, PDP, checkout stepper, account statuses, About, contact validation, FAQ no results, offline | overflow, target size, wrap, focus clipping |

Also verify 430, 600, 820, 1024, 1366, and 1920px for interpolation.

## 12. Content and legal

- [ ] Final About story is approved.
- [ ] Production contact data and hours, if shown, are approved.
- [ ] Shipping zones/prices/estimates are sourced from operations/backend.
- [ ] Returns/exchanges/refunds/cancellation text is approved.
- [ ] Privacy and Terms are approved by legal owners and versioned.
- [ ] No fake review, count, founder history, certification, sustainability claim, guarantee, discount, or service-level promise appears.

## Release sign-off

- [ ] Product / business-rule owner
- [ ] Design
- [ ] Frontend engineering
- [ ] Backend engineering
- [ ] Accessibility QA
- [ ] Responsive/browser QA
- [ ] Legal/content/operations where applicable
