# OURVEIL Homepage — Batch 01 Handoff

## Senior review refinement

- Removed visible prototype annotations from campaign imagery so the storefront reads as a finished customer experience; replacement guidance remains in this handoff only.
- Consolidated repeated-item reveals at grid level to keep motion calm and prevent cascading animation fatigue.
- Replaced the repeated hero image in the brand story with a distinct approved-palette editorial crop.
- Added a clear desktop cart backdrop, explicit dialog relationships, off-canvas focus isolation, and focus restoration.
- Raised mobile product and supporting metadata sizes, preserved 44px controls, restored page zoom, and added explicit focus treatment for footer disclosures.
- Made English eyebrows, email addresses, prices, and copyright values directionally isolated while retaining Arabic-first alignment.
- Added visible newsletter labels and retained accessible status feedback.

## Artboards

- `homepage-desktop.html`: primary 1440px composition; content container capped at 1280px with 40px outer gutters.
- `homepage-mobile.html`: dedicated 390px composition; 16px safe gutters and 44px minimum interactive controls.
- `index.html`: lightweight launcher for the two deliverables.

## Responsive behavior

- The desktop hero uses an asymmetric copy/image split. Mobile leads with a deliberately cropped 455px image, then places concise copy and actions below it.
- Category discovery moves from a three-column staggered editorial layout to one dominant scarf image followed by a two-up bonnet/accessory pair.
- New arrivals remain a four-item grid on desktop and become a legible two-column grid on mobile. Product photography retains the required 4:5 ratio.
- Best sellers deliberately uses a featured-product composition plus compact supporting products, distinct from New Arrivals on both targets.
- Materials move from a four-column staggered sequence to a 2×2 mobile texture grid. The trust strip follows the same 4-to-2×2 adaptation.
- Desktop footer groups remain visible; mobile groups become native disclosure sections to reduce page length while retaining keyboard access.
- Mobile avoids horizontal discovery rails. All primary content remains available in the vertical document flow.

## Motion annotations

| Interaction | Duration | Intended implementation |
|---|---:|---|
| Header surface and border after scroll | 220ms | Motion value or CSS state transition; no layout shift |
| Hero text and image reveal | 320ms | Opacity + 10–14px vertical offset; one-time entrance |
| Section reveal | 320ms | One-time opacity + small vertical movement via in-view observer |
| Product imagery | 220ms | Maximum 1.8% restrained image scale; card itself remains fixed |
| Wishlist pressed feedback | 150ms | Immediate filled surface and accessible `aria-pressed` state |
| Category/material image hover | 320ms | Maximum 2.5% controlled zoom |
| Navigation, search and cart drawers | 320ms | Logical inline entrance, backdrop and focus containment |
| Add-to-cart feedback | 150ms pressed / 220ms toast | Immediate control response followed by status feedback |
| Text-link underline | 220ms | Inline-start reveal; direction follows document direction |

All motion is disabled to effectively instantaneous behavior under `prefers-reduced-motion: reduce`.

## Reusable component map

| Design component | Suggested implementation boundary |
|---|---|
| `AnnouncementBar` | Localized server-rendered message, optional visibility configuration |
| `StoreHeader` | Responsive shell with Radix-compatible `Dialog`/`Sheet` primitives for mobile navigation, search and cart |
| `HeroEditorial` | Media, eyebrow, heading, supporting copy and a single primary action |
| `CategoryFeature` | Content-driven image and label primitive with layout variants: lead, supporting, desktop stagger |
| `ProductGrid` | Responsive grid wrapper receiving product query data from TanStack Query |
| `ProductCard` | Immutable design-system card; wishlist state may live in Zustand and server mutations in TanStack Query |
| `ColorDiscovery` | Accessible single-select group with text labels and `aria-pressed` state |
| `MaterialFeature` | Image-led taxonomy link with controlled crop position |
| `EditorialStory` | Reusable image/story split with optional Cormorant English accent |
| `TrustStrip` | Localized configuration blocks; claims remain CMS-controlled and unembellished |
| `NewsletterSection` | React Hook Form + Zod email validation and accessible status feedback |
| `StoreFooter` | Shared navigation data; mobile uses disclosure groups, desktop uses visible columns |

Use Tailwind logical properties or direction-aware utilities rather than fixed left/right declarations. Radix primitives should own focus trapping, Escape handling and restoration in production; the prototype demonstrates the expected behavior. Lucide remains the sole general-purpose icon family at 1.75px stroke. `next-intl` owns Arabic-first strings and later English mirroring.

## Interaction-state specimens included

- Primary, outline, ghost, icon and text-link hover/focus/pressed states.
- Product wishlist toggle with `aria-pressed` and text-label updates.
- Color choice selection with visible ring and semantic label.
- Mobile navigation, search and bag drawers with backdrop, Escape close, focus loop and focus restoration.
- Add-to-bag pressed response plus polite status toast.
- Newsletter success feedback without replacing the persistent input label.

## Image manifest

All campaign imagery is local and intentionally marked as replaceable before production. The official OURVEIL logo is referenced directly from the existing approved asset set and is not duplicated or altered.

| File | Role | Generation method |
|---|---|---|
| `assets/homepage-hero-editorial.png` | Homepage hero and brand-story crop | Built-in image generation |
| `assets/category-triptych.png` | Scarves, bonnets and accessories discovery zones | Built-in image generation |
| `assets/new-arrivals-cream-mocha.png` | Cream chiffon and mocha modal product crops | Built-in image generation |
| `assets/new-arrivals-stone-satin.png` | Stone cotton and espresso satin product crops | Built-in image generation |
| `assets/material-story.png` | Material story, textures and editorial modules | Built-in image generation |

Prompt direction: premium modest-fashion editorial photography; adult Middle Eastern subject; warm neutral OURVEIL palette; soft directional studio light; natural fabric texture; restrained styling; no text, trademarks or visible logos; image-safe negative space and product-led composition. Individual prompts varied the subject, crop and material while keeping this common art direction.

## Scope and assumptions

- Prices are realistic interface samples in EGP, not offers or commercial commitments.
- No delivery speed, free-shipping threshold, return window, manufacturing origin, certification or sustainability claim has been added.
- The reviews module is intentionally empty and labeled in-product until verified customer content is supplied.
- Generated images are composition placeholders for the high-fidelity prototype and must be replaced or formally approved before production use.
- Batch 01 stops at the homepage. Shop, PDP, cart and checkout screens are outside this delivery.
