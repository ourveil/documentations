# Real Unresolved Decisions

These are intentionally unanswered. The UI must not invent them.

| ID | Decision | Needed from | Implementation impact | Safe current behavior |
|---|---|---|---|---|
| U-01 | Final About story and approved editorial photography | Brand / Content | `/about`, homepage continuity, metadata | Keep prototype labels; do not publish claims |
| U-02 | Production contact email, phone/WhatsApp, address, and working hours | Operations | Contact page, footer, transactional support links | Neutral form/placeholder; no response-time promise |
| U-03 | Final shipping zones, rates, estimates, carrier, and tracking integration | Operations + Backend | Checkout shipping, policy, totals, tracking | Resolve configured area/price only; no fabricated duration |
| U-04 | Returns/exchanges eligibility, windows, fees, exclusions, and responsibility | Product + Legal + Operations | Policy and support actions | Structure only; no hard policy claims |
| U-05 | Refund method, timing, and status transitions | Finance + Legal + Backend | Order/payment statuses and policy | Show `مسترد` only when backend confirms |
| U-06 | Cancellation eligibility and stock restoration | Product + Operations + Backend | Order detail actions | Do not expose self-cancel by default |
| U-07 | Final Privacy Policy, Terms, jurisdiction, retention, rights workflow | Legal | Legal routes, consent, metadata/versioning | Legal-review-required content architecture only |
| U-08 | Guest-tracking OTP and rate-limiting policy | Security + Product | `/track-order` verification | Order number + phone prototype; backend authorization required |
| U-09 | Historical guest-order claiming after account creation | Product + Backend | Account order history | Do not promise automatic linking |
| U-10 | Production Google OAuth configuration and account-linking behavior | Product + Security | Authentication | Optional entry only when enabled; no fabricated account data |
| U-11 | Wishlist exact-product vs exact-variant persistence model | Product + Backend | Wishlist actions and direct add-to-cart | Navigate to PDP unless a current valid sellable variant is known |
| U-12 | Newsletter consent, double opt-in, frequency, and operational content | Marketing + Legal | Homepage/footer newsletter states | Record request only; no discount/frequency promise |
| U-13 | Locale URL strategy and canonical/hreflang policy | SEO + Product + Frontend | route structure, metadata, sitemap | Treat current English prototype filenames as non-production |
| U-14 | Contact spam protection provider and retention | Security + Legal | Contact mutation UX | No fake CAPTCHA; implement server-side protection later |
| U-15 | Payment destination production data and administrative review workflow | Finance + Backend | instructions, proof, account recovery | Backend-configured sample-labelled values only |

## Decision discipline

- Every decision receives an accountable owner and approval record.
- Copy and business configuration should be replaceable without changing component geometry.
- Decisions that affect money, eligibility, privacy, or authorization require backend enforcement, not UI-only flags.
