# OURVEIL — Business Requirements Document (BRD)

**Version:** 0.2  
**Status:** Draft / In Review  
**Last Updated:** September 2026  
**Primary Source:** OURVEIL Professional Proposal  
**Working Source:** Current OURVEIL Business Requirements Document  
**Document Purpose:** Establish the approved business baseline for the OURVEIL e-commerce initiative and provide the business foundation for subsequent product and technical documentation.

> **Important business journey clarification:** A guest customer may discover products, view product details, select variants, add items to the cart, and review the cart. **Checkout/purchase requires the customer to register or log in to an account.** Registered customers can complete the purchase journey and access account-based capabilities.

---

## 1. Document Control

| Field | Value |
|---|---|
| Product / Initiative | OURVEIL |
| Document | Business Requirements Document (BRD) |
| Version | 0.2 |
| Status | Draft / In Review |
| Owner | TBD |
| Reviewers / Approvers | TBD |
| Last Updated | September 2026 |
| Primary Source | OURVEIL Professional Proposal |
| Related PRD | OURVEIL_PRD.md |
| Related Product Design | TBD |
| Related Technical Design | DESIGN.md / TBD |

---

## 2. Executive Summary

OURVEIL is a modest-fashion e-commerce initiative initially focused on products such as hijabs, inner bonnets, and accessories. The initiative is intended to establish a structured digital sales channel supported by centralized business operations for products, inventory, orders, payments, shipping, customers, permissions, and reporting.

The customer journey is intentionally divided into two stages:

1. **Guest discovery:** a visitor can browse, search, filter, view product details, select variants, add products to a cart, and review the cart.
2. **Registered purchase:** before checkout and completion of a purchase, the customer must register or log in. The registered customer can then provide delivery information, review the order, proceed with the approved payment process, and track the order.

The business value is to provide a clear customer shopping experience while improving operational control, inventory accuracy, payment verification, order visibility, shipping management, and protection of sensitive business information.

The initial payment process is manual/external. The customer is directed to the approved payment-verification channel (currently WhatsApp in the working requirement), and authorized operations staff verify the payment before approval. Additional payment methods and integrations may be introduced later subject to business approval.

---

## 3. Business Context

### 3.1 Current State

The initiative addresses the need for a structured online purchasing and operational process rather than fragmented customer communication and manual business handling.

The business requires:
- a centralized product catalog and product variants;
- reliable inventory visibility;
- a controlled order lifecycle;
- payment verification by authorized staff;
- defined shipping regions and pricing;
- controlled access to sensitive operational and financial information;
- operational and financial reporting.

### 3.2 Problem / Opportunity Statement

Without a centralized business process, product availability, customer orders, payment verification, shipping information, and operational responsibilities can become difficult to control and audit.

OURVEIL provides an opportunity to establish one consistent business journey from product discovery through order fulfilment and delivery tracking.

### 3.3 Why Now

The initiative is intended to create the business foundation for digital commerce while keeping the initial release focused on the core storefront and operational needs. More advanced payment, shipping, communication, mobile, country, and language capabilities can be introduced later.

### 3.4 Strategic Alignment

The initiative supports:
- organized business operations;
- reliable inventory management;
- controlled payment verification;
- transparent order tracking;
- role-based access to sensitive information;
- a scalable foundation for future business expansion.

### 3.5 Existing Alternatives / Process

The current business need is to move away from fragmented or heavily manual handling toward a centralized customer and operational process.

---

## 4. Business Goals and Objectives

| ID | Objective | Measure / KPI | Target | Priority |
|---|---|---|---|---|
| BO-001 | Establish a clear digital customer journey from product discovery to purchase and delivery tracking. | Successful registered purchase journeys | TBD | Must |
| BO-002 | Maintain reliable product, variant, and inventory information. | Inventory accuracy / stock discrepancies | TBD | Must |
| BO-003 | Establish controlled payment verification for the initial release. | Verified payment decisions / verification turnaround | TBD | Must |
| BO-004 | Provide centralized order and shipping operations. | Orders progressing through defined lifecycle | TBD | Must |
| BO-005 | Protect sensitive business information through role-based access. | Unauthorized access incidents | 0 target | Must |
| BO-006 | Provide operational and financial visibility for the business. | Required reports available | TBD | Must |
| BO-007 | Establish a business foundation that can support future payment, shipping, communication, language, country, and mobile capabilities. | Approved future expansion readiness | TBD | Later |

---

## 5. Stakeholders

| Stakeholder / Group | Role / Interest | Needs / Impact | Decision Authority |
|---|---|---|---|
| Business Owner / Sponsor | Owns business direction | Business value, scope, priorities, approvals | Final business decisions |
| Customer / Buyer | Purchases OURVEIL products | Clear discovery, purchase, payment, delivery experience | Own purchase decision |
| Guest Customer | Discovers products before account creation | Product discovery and cart access without immediate registration | No purchase authority until registered |
| Registered Customer | Completes purchases and manages account | Checkout, saved information, payment verification, order history, tracking | Own account/order information |
| Operations Team | Runs day-to-day operations | Products, inventory, orders, payments, shipping, customers | According to assigned permissions |
| Manager | Supervises operational activities | Operational control and staff management | According to granted permissions |
| Senior Manager / Administrator | Oversees the full operation | Sensitive business and administrative control | Highest operational authority |
| Product / Inventory Operator | Maintains product and stock information | Accurate catalog and inventory | Assigned modules/actions |
| Customer Support | Supports customer communication | Order/customer visibility and response | Assigned modules/actions |
| Finance / Payment Stakeholders | Payment and financial visibility | Payment verification and financial reporting | Subject to approved permissions |
| Legal / Compliance | Business policy and data obligations | Privacy, retention, policy requirements | TBD |

---

## 6. Customer / User Context

### 6.1 Guest Customer

The guest customer can:
- browse products;
- search and filter products;
- open product pages;
- review product details;
- select product variants;
- add products to the cart;
- review the cart.

**Business boundary:** the guest customer cannot complete checkout or purchase the product as a guest. To proceed with checkout, the customer must register or log in.

### 6.2 Registered Customer

The registered customer can:
- perform all major guest shopping activities;
- maintain a persistent cart;
- save address and phone information;
- manage a wishlist;
- review an order before purchase;
- complete checkout;
- use the approved payment-verification process;
- view order history;
- track orders;
- manage their customer account.

### 6.3 Operations Users

Operations users are responsible for business activities according to their permissions, including:
- product management;
- inventory management;
- order management;
- payment verification;
- customer management;
- shipping management;
- employee management;
- reporting;
- audit review.

---

## 7. Scope and Boundaries

### 7.1 In Scope

- E-commerce storefront
- Product catalog, categories, attributes, and variants
- Guest product discovery and cart
- Customer registration and login required for checkout
- Registered customer account
- Cart and checkout
- Shipping regions and prices
- Manual/external payment verification
- WhatsApp payment-verification flow for the current release
- Orders and order history
- Order tracking
- Inventory management and reservation
- Customer management
- Employee management
- Roles and permissions
- Reporting
- Settings
- Audit history
- Required policy/information pages
- Arabic/English and RTL/LTR readiness

### 7.2 Out of Scope for v1

- Standalone mobile application
- Multi-vendor marketplace
- Enterprise ERP/accounting system
- Large-scale marketing execution
- Professional product photography
- Bulk catalog entry as a development responsibility
- Direct payment-gateway integration
- Automatic shipping-provider integration

### 7.3 Future Considerations

The business may later introduce:
- additional payment methods and payment gateways/cards;
- shipping-company integrations;
- additional customer communication channels such as SMS/WhatsApp automation;
- mobile applications;
- additional countries;
- additional languages.

These are future considerations unless separately approved for a release.

---

## 8. Business Requirements

| ID | Business Requirement | Rationale | Source / Stakeholder | Priority | Success Evidence |
|---|---|---|---|---|---|
| BR-001 | Provide customers with a structured product-discovery journey including categories, search, filtering, product details, variants, and cart review. | Enable customers to discover and evaluate products before purchase. | Proposal / Business | Must | Customer can discover products and review a cart. |
| BR-002 | Require a customer to register or log in before completing checkout and purchasing products. | Establish an identified customer record for the purchase journey. | Current BRD decision | Must | Guest can reach cart but cannot complete checkout without authentication. |
| BR-003 | Provide registered customers with account-based purchasing and customer-management capabilities. | Support repeat purchasing and customer continuity. | Proposal / Business | Must | Registered customer can complete checkout and access account/order history. |
| BR-004 | Maintain reliable product, variant, and inventory information. | Prevent incorrect availability and overselling. | Proposal | Must | Business can identify and control available quantities. |
| BR-005 | Reserve inventory for created orders and release/deduct quantities according to approved business rules. | Protect inventory accuracy during the order lifecycle. | Proposal / Business | Must | Inventory movements match order outcomes. |
| BR-006 | Provide a controlled payment-verification process for the initial release. | Ensure payment is actually received before approval. | Proposal / Business | Must | Authorized staff can verify, approve, reject, or request new evidence. |
| BR-007 | Provide the approved WhatsApp payment-verification journey for the current release. | Provide the agreed initial external payment-verification channel. | Current BRD decision | Must | Registered customer can be redirected to the approved WhatsApp verification flow. |
| BR-008 | Support an extensible payment model that can accommodate additional approved payment methods later. | Allow business expansion without redefining the overall customer purchase journey. | Business direction | Later | Future payment methods can be introduced through approved change scope. |
| BR-009 | Provide centralized order management with clear order lifecycle status and order history. | Give operations and customers visibility into order progress. | Proposal / Business | Must | Orders can be monitored from creation through delivery or closure. |
| BR-010 | Provide shipping-region and shipping-price management and show applicable shipping information before payment. | Give customers and operations predictable delivery costs. | Proposal / Business | Must | Applicable shipping cost is known before payment. |
| BR-011 | Protect customer, payment, financial, and operational information through role-based access. | Reduce unauthorized access and protect sensitive business information. | Proposal | Must | Restricted information is accessible only to authorized roles. |
| BR-012 | Record material operational and administrative actions for auditability. | Support accountability and investigation of sensitive changes. | Proposal / Business | Must | Payment, inventory, order-status, and permission changes are traceable. |
| BR-013 | Provide operational and financial reporting required by the business. | Support management visibility and decision-making. | Proposal / Business | Must | Required reports are available to authorized users. |
| BR-014 | Support Arabic/English and RTL/LTR business presentation. | Support the intended customer and business markets. | Proposal | Must | Key journeys operate in both supported language directions. |
| BR-015 | Provide a business foundation for future countries, languages, payment, shipping, communication, and mobile capabilities. | Support future growth without making future scope part of v1. | Proposal / Business | Later | Future expansion can be planned as controlled subsequent releases. |

---

## 9. Business Rules and Policies

### BRULE-001 — Checkout Requires an Account
A guest customer may discover products and manage a cart, but must register or log in before completing checkout and purchasing a product.

### BRULE-002 — Payment Verification
For payment methods requiring manual verification, payment evidence submitted by the customer is not by itself sufficient to approve payment. Authorized operations staff must verify actual receipt.

### BRULE-003 — Payment Status
Each order shall have an associated payment status reflecting the current payment condition, such as Pending, Under Review, Approved, Rejected, or Refunded where applicable.

### BRULE-004 — Order Status
Each order shall have an order status representing its fulfilment stage, such as Pending, Confirmed, Preparing, Ready for Shipping, Shipped, Out for Delivery, or Delivered.

### BRULE-005 — Order History
Completed or previously processed orders shall remain available in Order History for authorized review.

### BRULE-006 — Inventory Availability
Customers shall not be allowed to purchase quantities greater than the available quantity of the selected variant.

### BRULE-007 — Inventory Reservation
Required inventory shall be reserved when an order is created, according to the approved order and payment rules.

### BRULE-008 — Inventory Release
Reserved inventory shall be released when an order is cancelled, rejected, or expires according to the approved business policy.

### BRULE-009 — Inventory Deduction
Inventory shall be deducted according to the approved payment and fulfilment rules after payment approval.

### BRULE-010 — Sensitive Information
Financial, customer, payment, and other sensitive operational information shall only be accessible to authorized roles.

### BRULE-011 — Role-Based Access
Users shall only perform operations permitted by their assigned roles and permissions and shall not grant permissions beyond their authorized level.

### BRULE-012 — Auditability
Material business actions, including payment decisions, inventory adjustments, order-status changes, and permission changes, shall be recorded with sufficient information to identify what changed, when, and by whom.

---

## 10. Business Process / Current-to-Future Change

### 10.1 Customer Purchase Journey

**Guest discovery**

`Browse → Search/Filter → Product Page → Select Variant → Add to Cart → Review Cart`

**Account boundary**

`Register / Login required`

**Registered purchase**

`Review Order → Delivery Information → Shipping Cost → Confirm Order → WhatsApp Payment Verification → Business Payment Review → Order Fulfilment → Tracking → Delivery`

### 10.2 Payment Verification Journey

`Customer submits payment information → Operations receives verification request → Authorized employee verifies actual payment receipt → Approve / Reject / Request New Evidence → Record Decision → Continue or hold order`

### 10.3 Inventory Journey

`Available Stock → Order Created → Inventory Reserved → Payment/Order Outcome → Deduct OR Release → Record Inventory Movement`

### 10.4 Manual vs Automated Boundary

The initial release intentionally keeps payment verification and shipping operations under controlled business processes rather than requiring direct payment-gateway or automatic shipping-provider integrations.

---

## 11. Assumptions

| ID | Assumption | Status / Validation |
|---|---|---|
| AS-001 | Egypt/Cairo is the initial launch geography. | Confirm with business |
| AS-002 | Manual/external payment verification is the initial payment model. | Confirm with business |
| AS-003 | WhatsApp is the approved payment-verification channel for the current release. | Confirm with business |
| AS-004 | Customers must register or log in before checkout. | Current working requirement |
| AS-005 | Additional payment methods will be introduced later rather than being required for v1. | Confirm with business |
| AS-006 | The business will provide required product information, images, policies, payment information, and shipping information. | Proposal |
| AS-007 | Exact KPI targets will be agreed separately. | TBD |

---

## 12. Constraints

- v1 should remain focused on the core e-commerce and operational business journey.
- Direct payment-gateway integration is not part of v1.
- Automatic shipping-provider integration is not part of v1.
- The initial payment process depends on external/manual verification.
- Access to sensitive business information must follow approved role permissions.
- Launch geography, shipping zones, and prices must be defined by the business before release.
- Arabic and English, including RTL/LTR presentation, are required business considerations.

---

## 13. Dependencies

| Dependency | Business Impact |
|---|---|
| Business-provided product data and media | Required for the storefront catalog |
| Shipping regions and prices | Required to calculate customer delivery cost |
| Payment account / payment instructions | Required for the initial payment process |
| WhatsApp payment-verification channel | Required for the current payment-verification journey |
| Business policies | Required for cancellation, refund, return, and exchange decisions |
| Stakeholder approvals | Required to establish the approved business baseline |
| Hosting / infrastructure | Required to operate the service |
| Authentication provider, if used | Supports customer sign-in |

---

## 14. Risks

| Risk | Impact | Likelihood | Mitigation / Response | Owner |
|---|---|---|---|---|
| Manual payment verification delays orders | High | Medium | Define verification process and SLA | Operations |
| Incorrect inventory information | High | Medium | Inventory controls, reservation rules, and audit trail | Operations |
| Unauthorized access to financial/customer data | High | Medium | Role-based access, least privilege, auditability | Business / Technical |
| Shipping zones or prices are not finalized | High | Medium | Confirm launch geography and pricing before release | Business Owner |
| Customer drop-off at account-registration boundary | Medium | TBD | Monitor checkout conversion and confirm business acceptance of account requirement | Product Owner |
| External WhatsApp/payment-verification dependency | Medium | TBD | Define fallback process and ownership | Operations |
| Unclear cancellation/refund/return policy | High | Medium | Confirm business policies before launch | Business Owner |
| Undefined KPI targets | High | High | Agree measurable success criteria before approval | Business Owner |

---

## 15. Cost / Benefit / Value Model

### Expected Business Value

- Establish a structured digital sales channel.
- Improve customer visibility from discovery through fulfilment.
- Improve inventory reliability and reduce overselling risk.
- Improve payment-control and verification processes.
- Centralize operational information.
- Improve accountability through role-based access and audit history.
- Establish a foundation for future payment, shipping, communication, country, language, and mobile expansion.

### Cost Drivers

The business should consider:
- product/catalog preparation;
- payment-verification operations;
- shipping operations;
- hosting/infrastructure;
- external communication/payment services;
- ongoing operational support;
- future integrations.

No financial figures are asserted until the business provides approved budget and cost assumptions.

---

## 16. Success Metrics

| Metric Area | Measure | Baseline | Target |
|---|---|---|---|
| Customer | Guest-to-registration / checkout conversion | TBD | TBD |
| Customer | Completed registered purchases | TBD | TBD |
| Orders | Total orders and orders by status | TBD | TBD |
| Orders | Delivered orders | TBD | TBD |
| Payments | Approved / rejected / pending payments | TBD | TBD |
| Payments | Payment verification turnaround | TBD | TBD |
| Inventory | Inventory discrepancies | TBD | TBD |
| Customers | New customers | TBD | TBD |
| Customers | Repeat customers | TBD | TBD |
| Customers | Average order value | TBD | TBD |
| Products | Best-selling / slow-moving products | TBD | TBD |
| Shipping | Orders by region and shipping fees | TBD | TBD |

---

## 17. Transition Requirements

- Confirm the final customer account and checkout policy before release.
- Confirm launch geography and shipping zones/prices.
- Confirm v1 payment methods and WhatsApp verification process.
- Confirm cancellation, refund, return, and exchange policies.
- Define staff roles and the final permission matrix.
- Provide product catalog data and required media.
- Provide customer-facing policies and required information pages.
- Confirm KPI baselines and targets.
- Prepare operational staff for payment, inventory, order, and customer-management responsibilities.

---

## 18. Open Questions and Decisions

| ID | Question / Decision | Impact | Owner | Status |
|---|---|---|---|---|
| OQ-001 | Confirm the final approved business objectives and BRD identifiers. | High | Business Owner | Open |
| OQ-002 | Confirm exact KPI definitions and target values. | High | Business Owner | Open |
| OQ-003 | Confirm the required payment-verification SLA. | High | Operations | Open |
| OQ-004 | Confirm the final v1 payment methods and whether WhatsApp is the sole verification channel. | High | Business Owner | Open |
| OQ-005 | Confirm the account requirement before checkout as the final customer policy. | High | Business Owner | Open |
| OQ-006 | Confirm cancellation and refund policy. | High | Business Owner | Open |
| OQ-007 | Confirm return/exchange policy. | High | Business Owner | Open |
| OQ-008 | Confirm launch shipping zones, prices, and delivery periods. | High | Operations | Open |
| OQ-009 | Confirm the final role and permission matrix. | High | Business Owner | Open |
| OQ-010 | Confirm supported browser/device versions. | Medium | Product / Technical | Open |
| OQ-011 | Confirm accessibility standard/target. | Medium | Product Owner | Open |
| OQ-012 | Confirm data retention and deletion requirements. | High | Business / Legal | Open |
| OQ-013 | Confirm whether Google sign-in is required or optional for v1. | Medium | Product Owner | Open |
| OQ-014 | Confirm mandatory notification channels at launch. | Medium | Product Owner | Open |
| OQ-015 | Confirm rules for expired unpaid orders and inventory reservations. | High | Operations | Open |

---

## 19. Approval / Acceptance

This BRD becomes the business baseline when the designated business owner and required stakeholders approve:

- the business objectives;
- customer and stakeholder definitions;
- the guest-to-registered customer boundary;
- business requirements;
- business rules;
- scope and exclusions;
- payment and shipping approach;
- roles and permissions;
- success measures;
- unresolved decisions that must be closed before release.

Approval of this BRD does not constitute approval of UI design, technical architecture, implementation details, or API/database design. Those artifacts must trace back to the approved business requirements.

---

## Appendix A — Business Journey Summary

### Guest Customer

`Discover → Search/Filter → Product Page → Select Variant → Add to Cart → Review Cart → Register/Login`

### Registered Customer

`Login → Browse/Search → Product Page → Select Variant → Cart → Review Order → Delivery Information → Shipping Cost → Confirm Order → WhatsApp Payment Verification → Order Processing → Tracking → Delivery`

### Operations

`Manage Catalog → Manage Inventory → Receive Orders → Verify Payment → Confirm/Reject → Prepare → Ship → Update Status → Complete`

---

## Appendix B — BRD to PRD Handoff

The approved BRD establishes the business baseline. The PRD should translate these business requirements into product behavior without changing the approved business scope.

Key handoff areas:
- Guest discovery vs. registered checkout boundary;
- customer account requirements;
- payment-verification journey;
- inventory reservation and release rules;
- order lifecycle;
- shipping rules;
- roles and permissions;
- auditability;
- success metrics;
- unresolved decisions.

---

## Appendix C — Related Artifacts

- **BRD:** `OURVEIL_BRD.md`
- **PRD:** `OURVEIL_PRD.md`
- **Source Proposal:** `OURVEIL_Professional_Proposal_AR_RTL_Fixed.pdf`
- **UX / Research:** TBD
- **Design System:** TBD
- **Technical Architecture:** `DESIGN.md` / TBD
- **ADRs:** TBD
- **API Contracts:** TBD
- **Data Model:** TBD
- **Security / Threat Model:** TBD
- **Delivery Roadmap / Backlog:** TBD

---

**Document Status:** Draft — requires stakeholder review and approval.
