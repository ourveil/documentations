# OURVEIL Batch 06 — Public Content, Support, Trust & Legal

Batch 06 extends the approved storefront into brand storytelling, support, policy, legal, public tracking, newsletter feedback, and storefront-level system states. All user-facing content is Arabic-first and retains the approved OURVEIL chrome, tokens, controls, typography, motion, and RTL behavior.

## Screen inventory

### Brand

- `about.html`
- `about-mobile.html`

### Support

- `contact.html`
- `contact-mobile.html`
- `contact-validation.html`
- `contact-submitting.html`
- `contact-success.html`
- `contact-error.html`
- `faq.html`
- `faq-mobile.html`
- `faq-search.html`
- `faq-no-results.html`

### Policies

- `shipping.html`
- `shipping-mobile.html`
- `returns.html`
- `returns-mobile.html`

### Legal

- `privacy.html`
- `privacy-mobile.html`
- `terms.html`
- `terms-mobile.html`

### Tracking

- `track-order.html`
- `track-order-mobile.html`

### System states

- `404.html`
- `404-mobile.html`
- `500.html`
- `500-mobile.html`
- `service-unavailable.html`
- `service-unavailable-mobile.html`
- `offline.html`
- `offline-mobile.html`

### Newsletter utility

- `newsletter-success.html`
- `newsletter-error.html`

`index.html` is the review launcher. It links once to every routed HTML file.

## Suggested production routes

- `/about`
- `/contact`
- `/faq`
- `/shipping`
- `/returns`
- `/privacy`
- `/terms`
- `/track-order`

Localized routing remains unresolved. Treat these as stable conceptual slugs, not a final `next-intl` route decision.

## Reusable UI patterns

- `StoreHeader` / `StoreFooter`
- `PublicPageHeader`
- `Breadcrumbs`
- `EditorialSplit`
- `PrototypeContentNotice`
- `SupportContactForm`
- `SupportChannelPlaceholder`
- `FAQSearch`
- `FAQCategoryFilter`
- `FAQAccordionItem`
- `PolicySectionList`
- `LegalTableOfContents`
- `LegalReadingLayout`
- `PublicTrackingEntry`
- `StorefrontSystemState`
- `NewsletterFeedback`
- `MobileNavigationDrawer`

These are conceptual component boundaries. The prototype does not include production React.

## Content-width strategy

- About uses the full editorial canvas and a 1280px content container for image-led storytelling.
- Contact uses a balanced two-column composition: support context beside a focused form.
- FAQ, Shipping, and Returns use a 980px medium reading width.
- Privacy and Terms use a 720px legal reading column with a restrained 220px desktop contents rail.
- System states use a centered 620px message measure.
- Mobile uses 16px gutters and a single-column reading order; tablet layouts collapse progressively near 920px.

## Editorial imagery

The About prototype reuses three approved Batch 01 images by relative reference:

- `homepage-hero-editorial.png` — large introductory image;
- `material-story.png` — portrait material detail;
- `category-triptych.png` — product perspective.

Production may replace them with final approved editorial photography. Recommended needs are one primary portrait/wide hero, one distinct 4:5 material detail, and one distinct wide collection image. Do not repeat one crop to simulate a photoshoot.

## FAQ architecture

- Native buttons expose `aria-expanded` and a visible text state in addition to the chevron.
- Search filters question text locally in the prototype.
- Category controls use `aria-pressed` and do not depend on color alone.
- Production FAQ content may be static or server-managed. Avoid remote loading unless an actual CMS requires it.
- Unknown durations, fees, eligibility windows, and refund promises are intentionally absent.

## Policy architecture

Shipping copy preserves the Batch 04 rule: the backend-selected area determines shipping availability and price, and the final amount must be known before manual-transfer instructions appear. Unsupported areas receive no fabricated price.

Returns and exchanges are represented as a clear content structure. Eligibility, time limits, fees, refund mechanics, and shipping responsibility remain pending policy approval.

## Legal reading model

- Desktop uses a restrained anchored contents rail, not an account/dashboard sidebar.
- Mobile replaces the rail with an “On this page” disclosure.
- Each section has a stable anchor and scroll offset.
- Prototype text is visibly marked as a draft requiring legal review.
- Privacy and Terms need stable canonical URLs when implemented.
- Error pages should return correct HTTP status behavior and should not be indexed; the prototype includes `noindex` metadata but does not simulate HTTP headers.

## Contact form model

- Persistent labels cover name, email, optional phone, subject, and message.
- Validation uses field-linked messages and a summary.
- Submitting disables the primary action and exposes a busy state.
- Success means the system received the message; it does not promise a response time or resolution.
- Server failure keeps the draft visible in the prototype.
- Spam protection is an implementation concern. No CAPTCHA provider or branding is fabricated.

## Public tracking ownership

Batch 05 remains the owner of guest tracking. Batch 06 provides a support-facing entry using the same order-number-plus-phone model and routes the prototype result into the Batch 05 found state. It does not add alternate identifiers, reveal unrelated customer data, or simulate OTP.

## Accessibility

- Arabic RTL document roots and logical CSS properties.
- 44px minimum interactive targets.
- Visible `:focus-visible` treatment.
- Semantic headings, landmarks, forms, and status messaging.
- FAQ buttons expose expanded state and remain keyboard operable.
- Form errors use `aria-invalid` and `aria-describedby`.
- Drawer focus is isolated; Escape closes and focus returns to the trigger.
- Legal anchors have a sticky-header scroll offset.
- Reduced motion removes nonessential transitions and chevron rotation.
- Status meaning is expressed in text, not color alone.

## Bidi handling

Use `dir="ltr"` or `<bdi dir="ltr">` for email, phone, order numbers, URLs, legal version identifiers, and technical values. Arabic remains the document direction. Production localization should use logical spacing and inset utilities.

## SEO implementation expectations

Each indexable page should receive:

- a unique localized title and meta description;
- a stable localized canonical URL;
- Open Graph title, description, and approved image;
- one clear H1 and structured subsequent headings;
- internal links between related support pages;
- server-rendered Arabic content where possible.

Production 404, 500, unavailable, and offline routes require correct platform behavior rather than only their prototype HTML presentation.

## Prototype and missing production content

The following are deliberately not represented as production truth:

- final About story and brand promises;
- production contact email, phone, WhatsApp, address, hours, and social links;
- shipping zones, prices, delivery estimates, courier, and tracking integration;
- return and exchange eligibility periods;
- refund timing and method;
- return-shipping responsibility and fees;
- cancellation rules;
- approved privacy policy and terms;
- legal jurisdiction and data-retention schedules;
- service providers and cookie/session inventory;
- newsletter cadence and operational behavior.

The sample order identifier shown in the tracking field is a prototype example. No production customer or payment destination data is included.

## Unresolved product and policy decisions

1. Final Arabic and English brand-story copy.
2. Approved support channels and operating hours.
3. Final shipping coverage, pricing, carriers, and delivery messaging.
4. Returns, exchanges, cancellation, and refund policy.
5. Privacy, Terms, jurisdiction, retention, and customer-rights process.
6. Localized route strategy and canonical mapping.
7. Whether FAQ content is code-managed or CMS-managed.
8. Guest-tracking OTP or another privacy enhancement.
9. Newsletter consent record, cadence, unsubscribe model, and backend failure behavior.
10. Contact-form spam protection and operational routing.

These decisions require brand, operations, legal, security, or backend approval and are intentionally not fabricated.

## Motion

- Fast 150ms: buttons, FAQ/filter feedback.
- Standard 220ms: chevrons, toast, backdrop.
- Emphasized 320ms: mobile navigation drawer.
- No autoplay, staggered page entry, bouncing actions, or continuous animation.
- `prefers-reduced-motion` reduces transitions to effectively immediate feedback.
