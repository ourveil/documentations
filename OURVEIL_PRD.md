# Product Requirements Document — OURVEIL

> **Document Type:** Product Requirements Document (PRD)  
> **Version:** 0.1  
> **Status:** Draft  
> **Last Updated:** September 2026  
> **Product Owner:** TBD  
> **Contributors / Reviewers:** TBD  
> **Related BRD Version:** TBD  
> **Primary Source:** `OURVEIL_Professional_Proposal_AR_RTL_Fixed.pdf`

> **Document status:** This PRD is a draft derived from the current OURVEIL proposal. Business decisions that are not formally confirmed are marked **TBD**, **Assumption**, or **Open Decision**. The final product baseline must be validated against the approved BRD.

---

## 1. Document Control

| Field | Value |
|---|---|
| Product name | OURVEIL |
| Document | Product Requirements Document |
| Version | 0.1 |
| Status | Draft |
| Product owner | TBD |
| Contributors / reviewers | TBD |
| Last updated | September 2026 |
| Related BRD version | TBD |
| Primary source | `OURVEIL_Professional_Proposal_AR_RTL_Fixed.pdf` |

---

## 2. Product Summary

### 2.1 One-Sentence Product Definition

OURVEIL is an e-commerce platform for selling modest-fashion products, initially focused on hijabs, inner bonnets, and accessories. It consists of a customer storefront and an internal operational management system.

The proposal describes the product as providing a digital sales channel together with centralized management of products, inventory, orders, payments, shipping, permissions, and reporting.

### 2.2 Problem Solved

OURVEIL is intended to provide a structured digital purchasing and operational process instead of relying on fragmented communication and manual operational handling.

The product is intended to:

- Provide customers with a clear online shopping journey.
- Centralize product and inventory information.
- Centralize order and payment status.
- Provide controlled operational access for staff.
- Provide visibility into shipping and operational/financial information.

The proposal identifies **organized operations**, **reliable inventory**, and **controlled permissions** as core product goals.

### 2.3 Primary Users

| User | Main capabilities |
|---|---|
| Guest customer | Browse, search/filter, add products to cart, checkout without an account, submit payment proof, track an order using order number and phone number |
| Registered customer | Shopping, persistent cart, saved addresses, wishlist, order history, order tracking |
| Operations team | Manage products, inventory, orders, payments, customers, shipping, employees/permissions, and reports according to permissions |

### 2.4 Core Value Proposition

OURVEIL should provide:

- A clear and convenient online shopping experience.
- Accurate product and inventory information.
- Controlled payment verification.
- Transparent order tracking.
- Centralized business operations.
- Role-based access to sensitive information.

---

## 3. Product Goals and Non-Goals

### 3.1 Goals

| ID | Product Goal | Business Trace | Priority |
|---|---|---|---|
| PG-001 | Enable customers to discover and purchase OURVEIL products online. | BO-001 / BR-001 | Must |
| PG-002 | Provide a complete customer order journey from product discovery through delivery tracking. | BO-001 / BR-002 | Must |
| PG-003 | Provide reliable product, variant, and inventory management. | BO-002 / BR-003 | Must |
| PG-004 | Provide controlled manual payment verification for the initial release. | BO-003 / BR-004 | Must |
| PG-005 | Provide operational order and shipping management. | BO-004 / BR-005 | Must |
| PG-006 | Protect sensitive business information through role-based access. | BO-005 / BR-006 | Must |
| PG-007 | Provide operational and financial reporting required by the business. | BO-006 / BR-007 | Should |
| PG-008 | Provide a product foundation that can support future payment, shipping, language, and mobile capabilities. | BO-007 / BR-008 | Should |

> **Traceability note:** BO-### / BR-### identifiers are placeholders until the approved BRD establishes the final business-objective and business-requirement IDs.

### 3.2 Non-Goals

The initial product does not include:

- A standalone mobile application.
- A multi-vendor marketplace.
- A large enterprise ERP/accounting system.
- A complete enterprise resource planning solution.
- Marketing/advertising execution.
- Professional product photography.
- Large-scale catalog data entry as a development responsibility.
- Complete payment-gateway integration in the initial release.
- Automatic shipping-company integration in the initial release.

---

## 4. Users, Personas, and Roles

| Role / Persona | Primary goal | Key responsibilities / permissions | Priority |
|---|---|---|---|
| Guest Customer | Discover and purchase products | Browse, search, filter, cart, checkout, payment proof, tracking | Must |
| Registered Customer | Purchase and manage account | Shopping, saved addresses, wishlist, order history, tracking | Must |
| Employee | Perform assigned operational tasks | Access only assigned modules/actions | Must |
| Manager | Manage operational activities | Products, inventory, orders, staff according to permissions | Must |
| Senior Manager / Administrator | Manage the entire operation | Full administrative capabilities including sensitive financial areas | Must |
| Product / Inventory Operator | Maintain catalog and inventory | Product and inventory operations according to permissions | Should |
| Customer Support Operator | Handle customer communications | View orders/messages and respond according to permissions | Should |

The proposal defines a hierarchy in which the senior manager can manage managers and employees, while managers can manage employees within their granted permissions. It also requires least-privilege access and prohibits privilege escalation.

---

## 5. User / Stakeholder Requirements

### 5.1 Customer Requirements

| ID | User / stakeholder need | Source | Business trace | Priority |
|---|---|---|---|---|
| UR-001 | Customers need to browse available products. | Proposal | BR-001 | Must |
| UR-002 | Customers need to find products using search/filtering. | Proposal | BR-001 | Must |
| UR-003 | Customers need to select a specific product variant before purchase. | Proposal | BR-001 | Must |
| UR-004 | Customers need to review cart contents before checkout. | Proposal | BR-001 | Must |
| UR-005 | Customers need to know shipping cost before payment. | Proposal | BR-001 | Must |
| UR-006 | Customers need to submit payment evidence for manual payment. | Proposal | BR-004 | Must |
| UR-007 | Customers need to track order and payment status. | Proposal | BR-002 | Must |
| UR-008 | Registered customers need access to order history and saved addresses. | Proposal | BR-001 | Should |

---

## 6. Product Scope and Release Definition

### 6.1 MVP / v1

The initial product should include:

#### Customer Storefront

- Product discovery.
- Categories.
- Search.
- Filtering.
- Product details.
- Product variants.
- Cart.
- Checkout.
- Shipping calculation.
- Manual payment instructions.
- Payment proof upload.
- Order tracking.
- Customer account.
- Order history.
- Saved addresses.
- Wishlist.
- Required policy/information pages.

#### Operations

- Product management.
- Category/attribute management.
- Variant management.
- Inventory management.
- Order management.
- Payment verification.
- Customer management.
- Employee management.
- Roles and permissions.
- Shipping management.
- Reports.
- Settings.
- Audit history.

### 6.2 In Scope

- E-commerce storefront.
- Customer accounts.
- Guest checkout.
- Product catalog.
- Product variants.
- Inventory.
- Cart.
- Orders.
- Manual payments.
- Payment verification.
- Shipping regions and prices.
- Order tracking.
- Customer communications.
- Administration.
- Reporting.
- Role-based permissions.
- Audit history.

### 6.3 Out of Scope

- Standalone mobile application.
- Enterprise ERP/accounting system.
- Multi-vendor marketplace.
- Large-scale marketing execution.
- Product photography.
- Bulk catalog entry.
- Automatic payment-gateway integration for v1.
- Automatic shipping-provider integration for v1.

### 6.4 Future / Later

The proposal identifies future possibilities including:

- Payment gateways/cards.
- Shipping-company integrations.
- SMS/WhatsApp.
- Mobile application.
- Additional countries.
- Additional languages.

---

## 7. Core User Journeys / Use Cases

### 7.1 Guest Purchase

**Actor:** Guest customer

**Trigger:** Customer wants to purchase a product.

**Preconditions:**

- Product is available.
- Delivery area is supported.
- Product has a valid price.

**Main flow:**

1. Customer opens the storefront.
2. Customer browses/searches products.
3. Customer selects a product.
4. Customer selects the required variant.
5. Customer adds the variant to the cart.
6. Customer reviews the cart.
7. Customer enters delivery information.
8. The product determines shipping cost based on the selected area.
9. Customer selects an available payment method.
10. The product displays payment instructions.
11. Customer creates the order.
12. The product generates a unique order number.
13. Customer performs the payment externally.
14. Customer uploads payment evidence.
15. Operations reviews the payment.
16. Payment is approved, rejected, or additional evidence is requested.
17. Approved order moves to confirmation/preparation.
18. Order progresses through shipping.
19. Customer tracks the order.

The proposal explicitly states that payment occurs outside the website in the initial release.

**Failure / exception paths:**

- Product becomes unavailable.
- Price changes before order creation.
- Requested shipping area is unsupported.
- Payment evidence is missing.
- Payment evidence is unclear.
- Payment cannot be verified.
- Payment amount differs from expected amount.
- Payment is rejected.
- Order expires/cancels.
- Customer requests a refund.

### 7.2 Registered Customer Purchase

The registered-customer journey follows the purchase journey above and additionally supports:

- Persistent cart.
- Saved addresses.
- Wishlist.
- Order history.
- Account-based order tracking.

### 7.3 Payment Verification

**Actor:** Authorized operations employee

**Trigger:** Customer submits payment evidence.

**Main flow:**

1. Payment evidence enters the review queue.
2. Authorized employee opens payment information.
3. Employee verifies actual receipt of payment.
4. Employee approves or rejects payment.
5. Employee may request new evidence.
6. The product records the decision.
7. Order state is updated accordingly.

The proposal specifically states that administration must verify actual receipt rather than relying only on the uploaded image.

### 7.4 Inventory Management

**Actor:** Authorized operations employee

**Main flow:**

1. Employee views product variants.
2. Employee views available quantities.
3. Product variant stock is reserved when an order is created.
4. Payment approval causes the required inventory deduction.
5. Expired reservations are released.
6. Inventory changes are recorded.
7. Low-stock conditions are surfaced.

---

## 8. Feature / Capability Overview

| Capability | Purpose / user value | Related requirements | Priority |
|---|---|---|---|
| Product Catalog | Allow customers to discover products | UR-001, UR-002 | Must |
| Product Variants | Allow selection of exact purchasable configuration | UR-003 | Must |
| Cart | Allow customers to manage intended purchases | UR-004 | Must |
| Checkout | Collect customer/delivery information | UR-004 | Must |
| Manual Payment | Support initial payment model | UR-006 | Must |
| Payment Verification | Confirm received payments | UR-006 | Must |
| Inventory | Prevent inaccurate stock availability | UR-003 | Must |
| Orders | Manage purchase lifecycle | UR-007 | Must |
| Shipping | Calculate and manage delivery | UR-005 | Must |
| Order Tracking | Give customers visibility into progress | UR-007 | Must |
| Customer Accounts | Provide persistent customer functionality | UR-008 | Should |
| Administration | Operate the business | BR-xxx | Must |
| Reporting | Support operational/financial visibility | BR-xxx | Should |
| Permissions | Protect sensitive operations/data | BR-xxx | Must |
| Audit | Record sensitive actions | BR-xxx | Must |

---

## 9. Functional Requirements

### 9.1 Product Catalog

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-001 | The product shall allow customers to browse published products by category. | UR-001 | Must | Demonstration |
| FR-002 | The product shall allow customers to search and filter products using supported product attributes. | UR-002 | Must | Test |
| FR-003 | The product shall display the available variants of a product. | UR-003 | Must | Test |
| FR-004 | The product shall display the current availability status of a purchasable variant. | UR-003 | Must | Test |
| FR-005 | The product shall allow authorized staff to create and update product information. | BR-003 | Must | Test |
| FR-006 | The product shall allow authorized staff to manage product categories and attributes. | BR-003 | Must | Test |

### 9.2 Cart and Checkout

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-007 | The product shall allow customers to add available variants to a cart. | UR-003 | Must | Test |
| FR-008 | The product shall allow customers to modify cart quantities. | UR-004 | Must | Test |
| FR-009 | The product shall allow customers to remove cart items. | UR-004 | Must | Test |
| FR-010 | The product shall revalidate price, availability, and quantity before creating an order. | UR-004 | Must | Test |
| FR-011 | The product shall calculate shipping based on the selected supported delivery area. | UR-005 | Must | Test |
| FR-012 | The product shall display the final payable amount before the customer proceeds with payment. | UR-005 | Must | Test |
| FR-013 | The product shall generate a unique order identifier when an order is created. | UR-007 | Must | Test |

### 9.3 Manual Payment

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-014 | The product shall display the payment methods enabled by authorized staff. | UR-006 | Must | Test |
| FR-015 | The product shall display payment instructions and the required amount. | UR-006 | Must | Test |
| FR-016 | The product shall allow a customer to submit payment evidence. | UR-006 | Must | Test |
| FR-017 | The product shall allow authorized staff to review submitted payment evidence. | BR-004 | Must | Test |
| FR-018 | The product shall allow authorized staff to approve or reject a payment. | BR-004 | Must | Test |
| FR-019 | The product shall allow authorized staff to request replacement payment evidence. | BR-004 | Must | Test |
| FR-020 | The product shall record payment status changes and the responsible user. | BR-004 | Must | Inspection / Test |

### 9.4 Orders

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-021 | The product shall maintain a separate order status from payment status. | BR-005 | Must | Test |
| FR-022 | The product shall support the defined order lifecycle states. | BR-005 | Must | Test |
| FR-023 | The product shall allow authorized staff to update order status. | BR-005 | Must | Test |
| FR-024 | The product shall record order status history. | BR-005 | Must | Inspection |
| FR-025 | The product shall allow customers to view their order status. | UR-007 | Must | Test |

### 9.5 Inventory

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-026 | The product shall maintain inventory at the purchasable variant level. | BR-003 | Must | Test |
| FR-027 | The product shall reserve inventory when an order is created. | BR-003 | Must | Test |
| FR-028 | The product shall release expired inventory reservations. | BR-003 | Must | Test |
| FR-029 | The product shall prevent customers from purchasing unavailable quantities. | BR-003 | Must | Test |
| FR-030 | The product shall record inventory additions, deductions, returns, cancellations, and manual adjustments. | BR-003 | Must | Inspection |
| FR-031 | The product shall record the user, date, and reason for manual inventory adjustments. | BR-003 | Must | Inspection |
| FR-032 | The product shall indicate low-stock conditions to authorized staff. | BR-003 | Should | Test |

### 9.6 Shipping

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-033 | The product shall allow authorized staff to manage supported delivery areas. | BR-005 | Must | Test |
| FR-034 | The product shall associate shipping prices with supported delivery areas. | BR-005 | Must | Test |
| FR-035 | The product shall display the estimated delivery period before order submission. | UR-005 | Must | Test |
| FR-036 | The product shall prevent customers from completing payment before an unsupported delivery area has a final shipping amount. | BR-005 | Must | Test |
| FR-037 | The product shall allow authorized staff to update shipping prices and estimated delivery periods. | BR-005 | Must | Test |

> The proposal states that the initial geography is Egypt, beginning with Cairo, with additional areas added later. This remains subject to confirmation.

### 9.7 Roles and Permissions

| ID | Functional requirement | Trace | Priority | Verification |
|---|---|---|---|---|
| FR-038 | The product shall restrict administrative capabilities according to assigned permissions. | BR-006 | Must | Security Test |
| FR-039 | The product shall enforce sensitive authorization decisions on the server side. | BR-006 | Must | Security Test |
| FR-040 | The product shall prevent a user from granting permissions they do not possess. | BR-006 | Must | Security Test |
| FR-041 | The product shall apply least-privilege access to employee accounts. | BR-006 | Must | Security Test |
| FR-042 | The product shall record permission changes in the audit history. | BR-006 | Must | Inspection |
| FR-043 | The product shall restrict financial information to authorized roles. | BR-006 | Must | Security Test |

---

## 10. Business Rules

| ID | Business rule | Source |
|---|---|---|
| BRULE-001 | A payment shall not be considered approved solely because a customer uploaded an image. Authorized operations staff must verify actual receipt of the payment. | Proposal |
| BRULE-002 | The product shall not allow the sale of quantities that are unavailable. | Proposal |
| BRULE-003 | Order status and payment status shall be maintained separately. | Proposal |
| BRULE-004 | Financial and other sensitive operational information shall only be accessible to authorized roles. | Proposal |
| BRULE-005 | Sensitive changes such as permission changes, payment approvals, inventory adjustments, and status changes shall be recorded. | Proposal |

---

## 11. Roles and Permissions

| Resource / Action | Guest | Customer | Employee | Manager | Senior Manager |
|---|---:|---:|---:|---:|---:|
| Browse products | ✓ | ✓ | — | — | — |
| Purchase | ✓ | ✓ | — | — | — |
| View own orders | — | ✓ | — | — | — |
| Manage products | — | — | According to permission | According to permission | ✓ |
| Manage inventory | — | — | According to permission | According to permission | ✓ |
| Review payments | — | — | According to permission | According to permission | ✓ |
| View financial reports | — | — | Restricted | Restricted | ✓ |
| Manage employees | — | — | — | According to permission | ✓ |
| Manage permissions | — | — | — | According to permission | ✓ |
| View audit records | — | — | Restricted | According to permission | ✓ |

> Exact role-to-permission mapping remains subject to stakeholder confirmation where the BRD has not formally established the final authorization matrix.

---

## 12. Data Requirements

### 12.1 Core Product Data

The product must support:

- Products.
- Categories.
- Product images.
- Attributes.
- Attribute values.
- Product variants.
- Prices.
- Quantities.
- Availability.

### 12.2 Customer Data

The product must support:

- Customer identity.
- Contact information.
- Addresses.
- Sessions/accounts.
- Order history.

### 12.3 Order Data

Each order should preserve the information applicable at the time of purchase, including:

- Customer information.
- Delivery address.
- Delivery area.
- Shipping cost.
- Purchased product information.
- Variant information.
- Quantity.
- Price.
- Totals.
- Order status history.

This historical snapshot prevents later product changes from altering historical orders.

### 12.4 Payment Data

The product should preserve:

- Payment method.
- Payment evidence.
- Submitted amount.
- Reference number where available.
- Payment review history.
- Approval/rejection status.
- Refunds.

### 12.5 Audit Data

Sensitive actions should preserve:

- Action.
- Previous state.
- New state.
- Timestamp.
- Responsible user.
- Reason/notes where applicable.

---

## 13. Integration Requirements

| ID | Integration | Product purpose | Release | Failure / fallback |
|---|---|---|---|---|
| IR-001 | Image/media service | Store product/payment images | v1 | Upload failure must be communicated to the user |
| IR-002 | Email service | Send relevant order/payment/account notifications | v1 | Failure must not silently lose the underlying transaction |
| IR-003 | Google authentication | Optional customer sign-in | v1 | Customer should retain an alternative authentication path |
| IR-004 | Payment gateway | Direct electronic payment | Future | Manual payment remains available |
| IR-005 | Shipping provider | Automated tracking/status updates | Future | Manual operational updates remain available |
| IR-006 | SMS/WhatsApp provider | Customer communications | Future | Existing communication mechanisms remain available |

---

## 14. Non-Functional Requirements

### 14.1 Performance

| ID | Requirement |
|---|---|
| NFR-001 | The storefront should provide responsive browsing and product discovery suitable for mobile and desktop users. |
| NFR-002 | Product images should be optimized to reduce unnecessary page-loading overhead. |
| NFR-003 | Large product/order/report result sets should support pagination. |

The proposal identifies image optimization, caching, pagination, and query monitoring as performance considerations.

**Exact latency targets:** TBD pending stakeholder/product confirmation.

### 14.2 Security

| ID | Requirement |
|---|---|
| NFR-004 | The product shall require authentication for protected customer and administrative functions. |
| NFR-005 | The product shall enforce authorization for sensitive actions. |
| NFR-006 | The product shall protect passwords and authentication credentials. |
| NFR-007 | The product shall validate uploaded files and restrict unsafe file types. |
| NFR-008 | The product shall record sensitive administrative actions. |
| NFR-009 | The product shall prevent unauthorized access to sensitive financial information. |

### 14.3 Privacy

- The product shall restrict access to customer and operational data according to authorization.
- Customer analytics/reporting shall respect privacy and access permissions.
- Specific retention, deletion, consent, and data-residency requirements are **TBD** and require stakeholder/legal confirmation.

### 14.4 Accessibility

The product should support:

- Readable text.
- Adequate contrast.
- Keyboard navigation.
- Accessible image alternatives.
- Comfortable touch targets.

**Formal accessibility standard/target:** TBD.

### 14.5 Compatibility

The product shall support:

- Mobile devices.
- Desktop devices.
- Tablet-sized screens.
- Arabic.
- English.
- RTL.
- LTR.
- Agreed major browsers.

**Exact browser/version support matrix:** TBD.

### 14.6 Localization

The product foundation should support:

- Arabic.
- English.
- RTL.
- LTR.
- Region-specific shipping information.

The proposal requires bilingual/bi-directional readiness from the beginning.

---

## 15. States, Edge Cases, and Error Behavior

### 15.1 Product / Inventory

The product must handle:

- Unavailable product.
- Insufficient quantity.
- Expired reservation.
- Manual inventory adjustment.
- Cancellation.
- Return.
- Concurrent purchase attempts.

### 15.2 Payment

The product must handle:

- Payment not submitted.
- Payment evidence submitted.
- Payment under review.
- Payment rejected.
- Request for new evidence.
- Payment amount mismatch.
- Refund.

### 15.3 Order Lifecycle

The proposal defines the following primary order progression:

```text
Pending Payment
      ↓
Pending Review
      ↓
Confirmed
      ↓
Preparing
      ↓
Ready for Shipping
      ↓
Shipped
      ↓
Out for Delivery
      ↓
Delivered
```

The product must also support cancellation/rejection where applicable.

---

## 16. Notifications and Communications

The product should support notifications for relevant events including:

- Order creation.
- Payment submission.
- Payment approval.
- Payment rejection / request for new evidence.
- Order status changes.
- Password reset.

The proposal identifies email notifications for order creation, payment approval, status changes, and password reset.

Future channels may include SMS or WhatsApp when an approved provider and operating budget are available.

---

## 17. Analytics and Telemetry

The product should provide business-relevant measurements including:

### Orders

- Total orders.
- Orders by status.
- Delivered orders.
- Cancelled orders.

### Payments

- Submitted payments.
- Approved payments.
- Rejected payments.
- Refunds.
- Payment differences.

### Inventory

- Low-stock products.
- Reserved quantities.
- Inventory movements.

### Customers

- New customers.
- Repeat customers.
- Average order value.

### Products

- Best-selling products.
- Slow-moving products.
- Sales by category.
- Sales by color/material.

### Shipping

- Orders by region.
- Shipping fees collected.
- Recorded actual shipping costs.

**Exact KPI targets:** TBD.

---

## 18. Acceptance Criteria / Product Acceptance

The initial product should not be considered ready until the following areas are verified.

### Customer Journey

- [ ] Customer can browse products.
- [ ] Customer can select a valid variant.
- [ ] Customer can add/remove/update cart items.
- [ ] Customer can complete checkout.
- [ ] Shipping cost is calculated before payment.
- [ ] Customer can submit payment evidence.
- [ ] Customer can view order status.

### Payment

- [ ] Authorized staff can review payment evidence.
- [ ] Payment can be approved.
- [ ] Payment can be rejected.
- [ ] New evidence can be requested.
- [ ] Payment state is recorded.

### Inventory

- [ ] Available inventory is correctly represented.
- [ ] Inventory is reserved appropriately.
- [ ] Unavailable quantities cannot be purchased.
- [ ] Inventory changes are auditable.

### Permissions

- [ ] Unauthorized users cannot access restricted functions.
- [ ] Financial information is restricted.
- [ ] Permission changes are auditable.
- [ ] Privilege escalation is prevented.

### Design / Compatibility

- [ ] Mobile experience works.
- [ ] Desktop experience works.
- [ ] Arabic RTL layout works.
- [ ] English LTR layout works.
- [ ] Required browser/device matrix passes.

---

## 19. Prioritization

### Must

- Product catalog.
- Product variants.
- Search/filter.
- Cart.
- Checkout.
- Shipping calculation.
- Manual payment.
- Payment proof.
- Payment verification.
- Orders.
- Inventory.
- Order tracking.
- Core administration.
- Roles/permissions.
- Audit history.

### Should

- Customer wishlist.
- Detailed operational reports.
- Customer messaging.
- Google sign-in.
- Enhanced reporting.

### Could

- Additional communication channels.
- Advanced shipping capabilities.
- Additional operational analytics.

### Won't for v1

- Standalone mobile app.
- Direct payment gateway.
- Automated shipping-provider integration.
- Multi-vendor marketplace.
- Enterprise ERP/accounting system.

---

## 20. Dependencies, Assumptions, and Risks

### 20.1 Dependencies

- Business-provided product information.
- Product images.
- Shipping regions/prices.
- Payment account information.
- Business policies.
- External media service.
- Email service.
- Required hosting/infrastructure.
- Stakeholder approvals.

The proposal states that the client provides branding, images, product data, policies, payment methods, and shipping areas.

### 20.2 Assumptions

| ID | Assumption | Status |
|---|---|---|
| AS-001 | Egypt/Cairo is the initial launch geography. | Confirm |
| AS-002 | Manual payment is the initial payment model. | Confirm |
| AS-003 | Additional countries will be introduced later rather than in v1. | Confirm |
| AS-004 | Business will provide required product data and media. | Proposal |
| AS-005 | Exact KPI targets will be defined separately. | TBD |

### 20.3 Risks

| Risk | Impact | Response / status |
|---|---|---|
| Manual payment verification delays orders | High | Define verification process/SLA |
| Incorrect inventory information | High | Inventory controls and audit trail |
| Unauthorized access to financial data | High | Role-based access and authorization |
| Shipping areas/prices not defined | High | Confirm launch geography and pricing rules |
| External service limitations | Medium | Monitor provider limits and define fallback |
| Unclear success metrics | High | Confirm measurable KPIs |

---

## 21. Open Questions / TBDs

| ID | Open question | Impact | Owner | Status |
|---|---|---|---|---|
| OQ-001 | What are the final approved business objectives and BRD IDs? | High | Product Owner | Open |
| OQ-002 | What exact KPIs define product success after launch? | High | Product Owner | Open |
| OQ-003 | What are the exact target values for the KPIs? | High | Product Owner | Open |
| OQ-004 | What is the required payment-verification SLA? | High | Operations | Open |
| OQ-005 | What are the final payment methods for v1? | High | Business Owner | Open |
| OQ-006 | What is the exact cancellation/refund policy? | High | Business Owner | Open |
| OQ-007 | What is the final return/exchange policy? | High | Business Owner | Open |
| OQ-008 | What are the exact shipping zones and prices at launch? | High | Operations | Open |
| OQ-009 | What is the final role/permission matrix? | High | Business Owner | Open |
| OQ-010 | What are the supported browser/device versions? | Medium | Product/Technical | Open |
| OQ-011 | What accessibility standard should be followed? | Medium | Product Owner | Open |
| OQ-012 | What are the data retention/deletion requirements? | High | Business/Legal | Open |
| OQ-013 | Is Google sign-in mandatory or optional for v1? | Medium | Product Owner | Open |
| OQ-014 | What notification channels are mandatory at launch? | Medium | Product Owner | Open |
| OQ-015 | What are the exact rules for expired unpaid orders and inventory reservations? | High | Operations | Open |

---

## 22. Traceability Matrix

This matrix will be finalized after the BRD is approved.

| Product requirement | User need | Business requirement / objective | Verification |
|---|---|---|---|
| FR-001 | UR-001 | BR-001 / BO-001 | Test / Demonstration |
| FR-007 | UR-004 | BR-001 / BO-001 | Test |
| FR-010 | UR-004 | BR-001 / BO-001 | Test |
| FR-014 | UR-006 | BR-004 / BO-003 | Test |
| FR-018 | UR-006 | BR-004 / BO-003 | Test |
| FR-021 | UR-007 | BR-005 / BO-004 | Test |
| FR-026 | UR-003 | BR-003 / BO-002 | Test |
| FR-029 | UR-003 | BR-003 / BO-002 | Test |
| FR-038 | — | BR-006 / BO-005 | Security Test |
| FR-043 | — | BR-006 / BO-005 | Security Test |

---

## 23. Related Artifacts

- **BRD:** `OURVEIL_BRD.md`
- **Source Proposal:** `OURVEIL_Professional_Proposal_AR_RTL_Fixed.pdf`
- **UX / Design:** TBD
- **Design System:** TBD
- **Technical Architecture:** `DESIGN.md` / TBD
- **ADRs:** TBD
- **API Contracts:** TBD
- **Data Model:** TBD
- **Security / Threat Model:** TBD
- **Delivery Roadmap / Backlog:** TBD

---

## Document Status and Next Step

**Current status:** Draft

This PRD should **not** be treated as the final approved product baseline until the related BRD has been confirmed and the high-impact open product decisions have been resolved.

**Next step:** Validate the product requirements against the approved BRD and stakeholder decisions.
