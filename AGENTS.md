# Full-Stack Engineering Constitution & AI Agent Rules

> **Recommended filename:** `AGENTS.md`
>
> **Purpose:** A living engineering constitution for humans and AI coding agents.
>
> **Last reviewed:** 2026-08-03
>
> **Primary style:** Clean, explicit, modular, feature-oriented, secure, testable, and easy to change.
>
> **Status:** Opinionated defaults. Project requirements, business rules, security constraints, and existing architecture take precedence.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [How to Interpret These Rules](#2-how-to-interpret-these-rules)
3. [Instruction Priority](#3-instruction-priority)
4. [2026 Production Baseline](#4-2026-production-baseline)
5. [Non-Negotiable Engineering Principles](#5-non-negotiable-engineering-principles)
6. [Required Agent Workflow](#6-required-agent-workflow)
7. [Architecture Decision Rules](#7-architecture-decision-rules)
8. [Clean Code Rules](#8-clean-code-rules)
9. [Naming and File Rules](#9-naming-and-file-rules)
10. [JavaScript Rules](#10-javascript-rules)
11. [TypeScript Rules](#11-typescript-rules)
12. [Data Structures and Algorithm Rules](#12-data-structures-and-algorithm-rules)
13. [Frontend Architecture](#13-frontend-architecture)
14. [Preferred Frontend Folder Structure](#14-preferred-frontend-folder-structure)
15. [Component Design Rules](#15-component-design-rules)
16. [Forms Architecture](#16-forms-architecture)
17. [React Rules](#17-react-rules)
18. [Next.js Rules](#18-nextjs-rules)
19. [TanStack Query Pattern](#19-tanstack-query-pattern)
20. [Frontend State Management](#20-frontend-state-management)
21. [Frontend Library Rules](#21-frontend-library-rules)
22. [Styling and Design-System Rules](#22-styling-and-design-system-rules)
23. [Frontend Performance](#23-frontend-performance)
24. [Frontend Accessibility](#24-frontend-accessibility)
25. [Frontend Testing](#25-frontend-testing)
26. [Backend Architecture](#26-backend-architecture)
27. [Preferred Backend Folder Structure](#27-preferred-backend-folder-structure)
28. [Node.js Runtime Rules](#28-nodejs-runtime-rules)
29. [Express Rules](#29-express-rules)
30. [Fastify Rules](#30-fastify-rules)
31. [PHP Rules](#31-php-rules)
32. [Laravel Rules](#32-laravel-rules)
33. [Backend Library Rules](#33-backend-library-rules)
34. [API Design Rules](#34-api-design-rules)
35. [Authentication and Authorization](#35-authentication-and-authorization)
36. [Application Security](#36-application-security)
37. [Database Selection](#37-database-selection)
38. [Relational Database Rules](#38-relational-database-rules)
39. [PostgreSQL Rules](#39-postgresql-rules)
40. [MySQL Rules](#40-mysql-rules)
41. [Non-Relational Database Rules](#41-non-relational-database-rules)
42. [MongoDB Rules](#42-mongodb-rules)
43. [Redis and Cache Rules](#43-redis-and-cache-rules)
44. [ORM and Query Builder Rules](#44-orm-and-query-builder-rules)
45. [Prisma Rules](#45-prisma-rules)
46. [Drizzle Rules](#46-drizzle-rules)
47. [Eloquent Rules](#47-eloquent-rules)
48. [Transactions and Concurrency](#48-transactions-and-concurrency)
49. [Migrations and Seed Data](#49-migrations-and-seed-data)
50. [Background Jobs and Queues](#50-background-jobs-and-queues)
51. [Caching Strategy](#51-caching-strategy)
52. [Logging, Monitoring, and Observability](#52-logging-monitoring-and-observability)
53. [Error Handling](#53-error-handling)
54. [Configuration and Secrets](#54-configuration-and-secrets)
55. [Testing Strategy](#55-testing-strategy)
56. [CI/CD and Quality Gates](#56-cicd-and-quality-gates)
57. [Performance Engineering](#57-performance-engineering)
58. [Git and Change Management](#58-git-and-change-management)
59. [Documentation Rules](#59-documentation-rules)
60. [Definition of Done](#60-definition-of-done)
61. [Forbidden Agent Behavior](#61-forbidden-agent-behavior)
62. [Technology Evaluation Checklist](#62-technology-evaluation-checklist)
63. [Maintenance and Update Policy](#63-maintenance-and-update-policy)
64. [Official Source Register](#64-official-source-register)
65. [Project-Specific Overrides](#65-project-specific-overrides)

---

## 1. Purpose and Scope

This file defines default engineering rules for projects that may use:

- JavaScript and TypeScript.
- React applications.
- Next.js applications using the App Router.
- Frontend libraries such as React Hook Form, Zod, TanStack Query, TanStack Table, Redux Toolkit, Zustand, and component libraries.
- Node.js backends.
- Express and Fastify.
- PHP and Laravel.
- REST APIs, background workers, and event-driven integrations.
- Relational databases such as PostgreSQL and MySQL.
- Non-relational databases such as MongoDB and Redis.
- ORMs and query builders such as Prisma, Drizzle, and Eloquent.
- Unit, integration, component, and end-to-end testing.
- AI-assisted implementation by Codex, Claude, Copilot, or another coding agent.

This document is intentionally broad, but it does **not** claim that one tool or one folder structure is best for every project. The correct solution depends on:

- The actual business problem.
- Existing project conventions.
- Runtime and deployment constraints.
- Team experience.
- Data consistency requirements.
- Expected scale and failure modes.
- Security and compliance requirements.

When a technology is not explicitly covered, the agent MUST apply the principles and evaluation checklist in this file rather than inventing an inconsistent pattern.

---

## 2. How to Interpret These Rules

The following words are normative:

- **MUST / MUST NOT**: Mandatory unless a higher-priority instruction overrides it.
- **SHOULD / SHOULD NOT**: Strong default. A deviation requires a concrete reason.
- **MAY**: Optional and context-dependent.

A rule is not satisfied by creating more files, abstractions, interfaces, or layers. It is satisfied when the code becomes easier to understand, test, secure, operate, and change.

### 2.1 Core interpretation rule

> Prefer the smallest architecture that preserves clear boundaries and can safely support the expected change.

### 2.2 Existing-project rule

An agent MUST improve the codebase without unexpectedly rewriting its architecture. It MUST follow existing valid conventions unless the task explicitly requests a migration or the existing convention creates a correctness, security, or maintainability problem.

---

## 3. Instruction Priority

When instructions conflict, follow this order:

1. Explicit task requirements and acceptance criteria.
2. Security, privacy, legal, and data-integrity requirements.
3. Existing business behavior and domain rules.
4. Existing public API and compatibility guarantees.
5. Existing project architecture and documented conventions.
6. Version-matched official documentation.
7. This file.
8. General community conventions.
9. Personal preference or agent assumptions.

The agent MUST identify conflicts instead of silently choosing whichever rule is easiest.

---

## 4. 2026 Production Baseline

This table is a review snapshot for **new projects**. Existing projects MUST use the versions declared by their manifests, lockfiles, containers, and deployment platform unless an upgrade is explicitly requested.

| Technology | 2026 default guidance |
|---|---|
| React | React 19.2 stable, latest compatible security patch |
| Next.js | Latest security-patched 16.2.x Active LTS; do not use canary/preview in production by default |
| Node.js | Node.js 24 LTS for production; Current releases are for evaluation unless approved |
| TypeScript | TypeScript 6.0 when ecosystem compatibility is verified; otherwise the project-compatible supported version |
| Express | Express 5 |
| Fastify | Fastify 5.x stable |
| PHP | PHP 8.5 for new compatible projects; respect Laravel/package requirements |
| Laravel | Laravel 13 for new compatible projects |
| PostgreSQL | PostgreSQL 18 when supported by the provider |
| MySQL | MySQL 8.4 LTS unless another supported version is required |
| MongoDB | A supported stable release; no preview release in production |
| Redis | A supported stable release provided by the chosen platform |
| Prisma / Drizzle | Stable project-compatible release from the lockfile; no automatic RC/beta adoption |

### 4.1 Version rules

- MUST use supported stable or LTS releases in production.
- MUST inspect `package.json`, `composer.json`, lockfiles, container images, CI, and deployment runtime before changing a version.
- MUST NOT silently change the package manager.
- MUST NOT mix feature work with a major framework upgrade unless explicitly required.
- MUST review migration guides before every major upgrade.
- MUST run tests, type checking, linting, builds, and relevant migration checks after an upgrade.
- SHOULD pin runtime versions in `.nvmrc`, `.node-version`, `mise.toml`, Docker images, or the equivalent project mechanism.
- SHOULD schedule security patch reviews independently from feature delivery.

---

## 5. Non-Negotiable Engineering Principles

### 5.1 Correctness before cleverness

- Code MUST produce correct behavior for normal, boundary, invalid, concurrent, and failure cases.
- A shorter implementation is not better when it hides important behavior.
- A sophisticated algorithm is not better when a simple linear pass is sufficient.

### 5.2 Explicit boundaries

Separate concerns by responsibility, not by arbitrary file count:

- Presentation.
- State orchestration.
- Validation.
- Domain rules.
- Data access.
- External integrations.
- Infrastructure.

### 5.3 High cohesion, low coupling

- Code that changes for the same reason SHOULD live together.
- Modules SHOULD expose small, intentional public APIs.
- Internal implementation details SHOULD remain private to the feature.

### 5.4 Prefer composition

- Prefer composable functions and components over inheritance.
- Prefer dependency injection at module boundaries over hidden global dependencies.
- Prefer framework adapters around domain logic rather than framework types inside domain logic.

### 5.5 Pragmatic principles

- **YAGNI:** Do not build future flexibility without a current requirement.
- **DRY:** Remove duplicated knowledge, not every visually similar line.
- **AHA:** Avoid hasty abstraction. Wait until the shared concept is understood.
- **KISS:** Keep control flow and data flow obvious.
- **SOLID:** Apply where it improves changeability; do not create interfaces only to claim compliance.

### 5.6 Security is part of design

- Authentication is not authorization.
- Client validation is not trusted validation.
- Hidden UI is not access control.
- Type safety is not runtime validation.
- ORM use is not automatic protection from data leaks or authorization mistakes.

### 5.7 Measure before optimization

- Performance work MUST start with evidence or a known algorithmic problem.
- Memoization, caching, indexing, parallelism, and denormalization MUST have an explicit reason.
- Every cache MUST define ownership, key, TTL or invalidation, and stale-data behavior.

---

## 6. Required Agent Workflow

Every AI agent MUST follow this workflow for non-trivial tasks.

### 6.1 Before editing

1. Read this file and any closer `AGENTS.md` or project instruction files.
2. Read the task and acceptance criteria completely.
3. Inspect relevant manifests, lockfiles, runtime configuration, aliases, lint rules, and test setup.
4. Search the codebase for existing patterns before inventing a new one.
5. Identify the affected data flow from entry point to persistence or UI output.
6. Identify security, authorization, migration, compatibility, and error-handling implications.
7. For Next.js, read the version-matched documentation bundled with the installed package when available.
8. Write a short implementation plan for multi-file or architecture-sensitive changes.

### 6.2 During implementation

- Keep the diff focused.
- Preserve public behavior unless the task requests a change.
- Reuse project abstractions when they are valid.
- Add a new abstraction only when it has a clear responsibility and multiple meaningful callers or a strong boundary reason.
- Validate external input at the boundary.
- Keep business logic independent from UI and HTTP where practical.
- Add or update tests with the behavior change.
- Do not hide errors with empty catches, unsafe casts, disabled lint rules, or broad `try/catch` blocks.

### 6.3 Before completion

Run the repository-equivalent checks:

```bash
# JavaScript / TypeScript projects
pnpm lint
pnpm typecheck
pnpm test
pnpm build

# PHP / Laravel projects
composer validate
php artisan test
vendor/bin/pint --test
vendor/bin/phpstan analyse
```

Use the actual scripts in the repository. Do not invent commands that do not exist.

### 6.4 Final report

The agent MUST report:

- What changed.
- Why the design was chosen.
- Important assumptions.
- Tests and checks run.
- Any migration, environment, security, or deployment action required.
- Anything not verified.

---

## 7. Architecture Decision Rules

### 7.1 Default architecture

For most business systems, start with a **modular monolith**:

- One deployable backend unless independent scaling or ownership is proven.
- Feature or domain modules with clear boundaries.
- One database may serve multiple modules, but cross-module writes MUST be intentional.
- Background workers may be separate processes while sharing application code.

Do not start with microservices because a system may become large. Introduce a service boundary when there is evidence such as:

- Independent deployment requirements.
- Different scaling characteristics.
- Strong data or security isolation.
- Separate team ownership.
- A stable integration contract.
- Failure isolation that cannot be achieved inside the monolith.

### 7.2 Horizontal versus vertical organization

- Global infrastructure MAY be organized horizontally: `config`, `db`, `logging`, `auth`.
- Business code SHOULD be organized vertically by feature or domain.
- Avoid one enormous global `controllers`, `services`, or `utils` directory in large applications.

### 7.3 Dependency direction

A preferred dependency direction is:

```text
UI / HTTP / Jobs
        ↓
Application use cases
        ↓
Domain rules
        ↓
Ports / repository contracts
        ↓
Infrastructure implementations
```

Framework, database, and transport details SHOULD point inward through adapters. Domain code SHOULD NOT depend directly on Express requests, Fastify requests, Next.js cookies, Eloquent HTTP resources, or Prisma-generated types unless the project deliberately accepts that coupling.

### 7.4 Abstraction test

Before creating a new abstraction, answer:

1. What responsibility does it own?
2. What knowledge does it hide?
3. Which callers benefit?
4. What change becomes easier?
5. Is the concept stable enough to name?
6. Is duplication currently harmful, or merely similar?

If these answers are weak, keep the implementation local.

---

## 8. Clean Code Rules

### 8.1 Functions

- A function SHOULD do one coherent job.
- Prefer early returns to deeply nested conditionals.
- Keep parameters small and meaningful.
- Replace boolean argument ambiguity with an options object or separate functions.
- Avoid functions that both query and mutate unless the operation is explicitly transactional.
- Pure functions SHOULD be used for calculations and transformations where practical.
- Side effects SHOULD occur at clear orchestration boundaries.

Bad:

```ts
processOrder(order, true, false, true);
```

Better:

```ts
processOrder(order, {
  sendReceipt: true,
  reserveInventory: false,
  notifyWarehouse: true,
});
```

### 8.2 Control flow

- Use guard clauses for invalid or terminal states.
- Prefer exhaustive handling of finite states.
- Avoid hidden fallthrough.
- Avoid nested ternaries.
- Extract complex conditions into named predicates.

```ts
const canCancelOrder =
  order.status === "pending" &&
  order.paymentStatus !== "refunded" &&
  actor.permissions.includes("orders.cancel");
```

### 8.3 Comments

Comments SHOULD explain:

- Why a non-obvious decision exists.
- A business constraint.
- A workaround and its removal condition.
- A security or concurrency invariant.

Comments SHOULD NOT repeat obvious syntax.

### 8.4 Constants and magic values

- Domain values MUST have names.
- Environment-dependent values belong in validated configuration.
- User-facing text SHOULD use the project localization strategy.
- Time durations SHOULD include units in the name.

```ts
const PASSWORD_RESET_TTL_MINUTES = 30;
const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;
```

### 8.5 Error handling

- Do not catch an error unless you can add context, recover, translate, retry, compensate, or clean up.
- Preserve causes when wrapping errors.
- Do not return internal stack traces to clients.
- Do not convert every failure into `null` or `false`.

### 8.6 Duplication

Duplicate code may remain temporarily when the underlying concepts are not yet proven to be the same. Duplicate business rules MUST be consolidated because divergence creates correctness bugs.

### 8.7 File size

There is no universal line limit. Split a file when it contains multiple responsibilities, changes for unrelated reasons, or cannot be understood without excessive scrolling. Do not split a cohesive 200-line module into ten meaningless files.

---

## 9. Naming and File Rules

### 9.1 Naming

- Components, classes, and exported types: `PascalCase`.
- Functions, variables, hooks, and instances: `camelCase`.
- Constants: use `SCREAMING_SNAKE_CASE` for true global constants; otherwise use descriptive `camelCase`.
- Boolean names SHOULD start with `is`, `has`, `can`, `should`, or `was`.
- Collections SHOULD use plural nouns.
- Event handlers SHOULD describe the event or intention: `handleSubmit`, `handlePriceChange`.
- Avoid vague names: `data`, `info`, `item`, `helper`, `manager`, `common`, `misc`, `temp`.

### 9.2 File naming

Choose one project convention and keep it consistent. Preferred defaults:

```text
product-form.tsx
use-product-form.ts
product-form.schema.ts
products.api.ts
products.queries.ts
products.mutations.ts
order.service.ts
order.repository.ts
```

### 9.3 Barrel files

- Use `index.ts` only to define an intentional public API.
- Do not create barrels for every directory.
- Avoid circular dependencies caused by broad barrels.
- Internal modules SHOULD import directly from nearby files when clearer.

### 9.4 Imports

Preferred order:

1. Runtime/framework imports.
2. Third-party libraries.
3. Project aliases.
4. Relative parent imports.
5. Relative sibling imports.
6. Type-only imports where configured.
7. Styles/assets.

Do not reorganize imports manually when the repository has a formatter or lint plugin that owns the order.

---

## 10. JavaScript Rules

### 10.1 Language defaults

- Prefer `const`; use `let` only for reassignment.
- Never use `var` in new code.
- Prefer strict equality.
- Use optional chaining and nullish coalescing intentionally.
- Do not use `||` when valid falsy values such as `0`, `false`, or `""` must be preserved.
- Prefer template literals for interpolation.
- Prefer immutable transformations when they improve reasoning; do not clone large data structures without need.

### 10.2 Async code

- Prefer `async`/`await` for orchestration.
- Always handle rejected promises at a meaningful boundary.
- Do not use `forEach(async () => ...)`.
- Use sequential loops when ordering or rate limits matter.
- Use bounded concurrency for large independent workloads.
- Do not use unbounded `Promise.all` over user-controlled or large collections.

```ts
for (const job of jobs) {
  await processJob(job);
}
```

For safe bounded parallelism, use a project-approved limiter rather than implementing an ad hoc scheduler in every feature.

### 10.3 Equality and coercion

- Avoid implicit numeric coercion from external input.
- Parse and validate dates, booleans, and numbers at boundaries.
- Never trust `Number(value)` alone as validation.
- Handle `NaN`, `Infinity`, and empty strings deliberately.

### 10.4 Dates and time

- Store timestamps in UTC.
- Preserve the business timezone separately where it affects dates, cutoffs, or reporting.
- Avoid parsing ambiguous date strings.
- Use ISO 8601 at API boundaries unless a contract specifies otherwise.
- Use a date library only when native APIs are insufficient and the dependency is justified.

### 10.5 Collections

- Use `Map` for dynamic keyed collections where keys are not naturally JSON object properties or frequent updates/iteration matter.
- Use `Set` for membership and deduplication.
- Use arrays for ordered collections.
- Do not use an array with repeated `.find()` inside another loop when a `Map` can reduce O(n × m) work to O(n + m).

---

## 11. TypeScript Rules

### 11.1 Strictness

New projects SHOULD enable strict TypeScript settings. Recommended baseline:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true,
    "useUnknownInCatchVariables": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noEmit": true
  }
}
```

Apply settings compatible with the selected runtime, bundler, and framework. Do not copy this block without checking project compatibility.

### 11.2 `any`, `unknown`, and assertions

- `any` MUST NOT be used as an escape hatch.
- External or uncertain values SHOULD start as `unknown` and be narrowed or validated.
- Type assertions SHOULD be rare and documented by an invariant.
- Double assertions such as `value as unknown as T` are prohibited unless bridging a proven third-party typing defect with a comment and test.
- `@ts-ignore` is prohibited in new code. Use `@ts-expect-error` only for an expected, tested type error with an explanation.

### 11.3 Runtime validation

Types disappear at runtime. Validate:

- HTTP bodies, params, query strings, and headers.
- Environment variables.
- Database JSON fields.
- Queue payloads.
- Webhook payloads.
- Local storage data.
- Third-party API responses when correctness matters.

### 11.4 Domain types

Prefer types that make invalid states difficult to represent.

```ts
type PaymentState =
  | { status: "pending" }
  | { status: "paid"; paidAt: string; transactionId: string }
  | { status: "failed"; reason: string };
```

Use branded or opaque identifiers only when they materially prevent identifier mixing.

### 11.5 Interfaces versus type aliases

- Use either consistently.
- Prefer `type` for unions, intersections, mapped types, and function signatures.
- Prefer `interface` for extensible object contracts where declaration merging is intentionally useful.
- Do not create both an interface and a type for the same concept.

### 11.6 Generics

- A generic MUST express a real relationship between inputs and outputs.
- Use descriptive generic names for complex APIs.
- Avoid generic abstractions with one caller.
- Constrain generics as narrowly as necessary.

### 11.7 Exhaustiveness

Use discriminated unions and exhaustive switches for finite states.

```ts
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
```

### 11.8 Generated types

- Generated ORM or API types SHOULD remain at infrastructure boundaries.
- Do not expose huge database row types directly to UI clients.
- Map data to purpose-specific DTOs or view models.

---

## 12. Data Structures and Algorithm Rules

### 12.1 Selection principle

Choose the data structure based on required operations, not habit.

| Need | Preferred starting point | Typical complexity |
|---|---|---|
| Ordered iteration | Array | O(n) scan |
| Fast key lookup | Map / object | Average O(1) |
| Membership / deduplication | Set | Average O(1) |
| FIFO processing | Queue / deque | O(1) enqueue/dequeue |
| LIFO processing | Stack / array | O(1) push/pop |
| Repeated min/max extraction | Heap / priority queue | O(log n) update |
| Prefix lookup | Trie, indexed search, or database search | Depends on implementation |
| Hierarchical data | Tree | Depends on traversal |
| General relationships | Graph | O(V + E) traversal |
| Recently used cache | LRU map | Average O(1) operations |

### 12.2 Complexity expectations

- The agent MUST identify obvious O(n²) behavior over potentially large data.
- The agent SHOULD include complexity notes for custom algorithms in critical paths.
- Do not optimize tiny bounded arrays without evidence.
- Database round trips, serialization, and network latency often matter more than CPU complexity.

### 12.3 Lookup and join pattern

Bad for large collections:

```ts
const result = orders.map((order) => ({
  ...order,
  customer: customers.find((customer) => customer.id === order.customerId),
}));
```

Better:

```ts
const customersById = new Map(
  customers.map((customer) => [customer.id, customer]),
);

const result = orders.map((order) => ({
  ...order,
  customer: customersById.get(order.customerId),
}));
```

### 12.4 Sorting

- Do not sort data repeatedly during every render.
- Copy an array before sorting if immutability is required.
- Use stable, deterministic tie breakers.
- Prefer database sorting for paginated server data.
- Do not load an entire dataset only to sort and return one page.

### 12.5 Search

- Use linear search for small or one-time unsorted collections.
- Use a `Map` or index for repeated exact lookup.
- Use binary search only on correctly sorted data.
- Use database full-text search or a search engine for linguistic, fuzzy, ranked, or large-scale search.
- Do not implement regex-based “search engines” over production-sized datasets.

### 12.6 Top-K and ranking

- Sorting all values is acceptable for small datasets.
- Use a bounded heap or database `ORDER BY ... LIMIT` when only the top K values are needed at scale.
- Ranking rules MUST define tie behavior.

### 12.7 Pagination

- Offset pagination is acceptable for small admin lists and stable datasets.
- Cursor/keyset pagination SHOULD be used for large or frequently changing datasets.
- Cursor order MUST be deterministic and include a unique tie breaker.
- Never trust a client-provided cursor without validation.

### 12.8 Graph traversal

- Use BFS for shortest path in an unweighted graph.
- Use DFS for traversal, cycle detection, and dependency exploration when recursion depth is safe.
- Use Dijkstra for non-negative weighted shortest paths.
- Do not use Dijkstra with negative weights.
- Detect cycles in dependency or hierarchy data when cycles are invalid.

### 12.9 Dynamic programming

Use dynamic programming only when the problem has overlapping subproblems and optimal substructure. Do not introduce DP for ordinary validation, mapping, or CRUD.

### 12.10 Debounce and throttle

- Debounce delayed search input or validation when only the final pause matters.
- Throttle high-frequency scroll, resize, or pointer events when periodic updates matter.
- Always clean up timers and pending requests.
- Prefer abortable requests to ignoring stale responses.

### 12.11 Retry algorithms

- Retry only transient failures.
- Use exponential backoff with jitter.
- Set a maximum attempt count and total deadline.
- Respect `Retry-After` where applicable.
- Do not retry validation, authorization, or deterministic business-rule failures.
- Retried write operations MUST be idempotent or protected by an idempotency mechanism.

### 12.12 Rate limiting algorithms

Choose based on the requirement:

- Fixed window: simplest, but boundary bursts are possible.
- Sliding window: more accurate over a moving interval.
- Token bucket: supports controlled bursts.
- Leaky bucket: smooths processing rate.

Rate-limit keys SHOULD consider authenticated user, tenant, API key, route, and trusted client IP strategy.

### 12.13 Frontend-specific algorithm rules

- Virtualize very large lists instead of rendering every row.
- Filter and sort large remote datasets on the server.
- Use normalized entity state only when repeated cross-list updates justify it.
- Use optimistic updates only with rollback or reconciliation behavior.
- Avoid expensive derived calculations in render; compute near the data source or memoize after measuring.
- Keep React keys stable and identity-based; never use array indexes for reorderable lists.

### 12.14 Backend-specific algorithm rules

- Prevent N+1 database access through joins, eager loading, batching, or data loaders.
- Use bulk inserts/updates where supported.
- Stream or paginate large exports rather than loading all rows into memory.
- Apply bounded concurrency to external API calls.
- Use queues for long-running or retryable work.
- Avoid application-side joins when the relational database can perform them efficiently.
- Avoid distributed locks unless simpler database constraints or atomic operations cannot solve the problem.

---

## 13. Frontend Architecture

### 13.1 Frontend layers

A practical frontend feature may contain:

1. Route/page composition.
2. Feature components.
3. Form or interaction orchestration hooks.
4. Runtime schemas.
5. Query and mutation definitions.
6. API client functions.
7. Pure utilities.
8. Shared UI primitives.

Not every feature needs every layer.

### 13.2 Locality rule

- Feature-specific code MUST remain inside the feature.
- Global `components`, `hooks`, `utils`, `constants`, and `lib` directories are for genuinely reused code.
- Do not move code to a global folder after the first use.
- Promote code to shared scope only when its contract is stable and multiple unrelated features need it.

### 13.3 Dependency rule

Preferred frontend dependency direction:

```text
Routes / pages
    ↓
Feature composition
    ↓
Feature hooks + feature UI
    ↓
Queries / mutations / schemas
    ↓
API clients + shared infrastructure
```

Presentational components MUST NOT know database entities or backend implementation details.

---

## 14. Preferred Frontend Folder Structure

This is the preferred default for a medium or large Next.js application:

```text
src/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── features/
│   ├── products/
│   │   ├── api/
│   │   ├── components/
│   │   ├── forms/
│   │   ├── hooks/
│   │   ├── queries/
│   │   ├── mutations/
│   │   ├── schemas/
│   │   ├── constants/
│   │   ├── types/
│   │   ├── utils/
│   │   └── index.ts
│   └── orders/
├── hooks/
├── lib/
│   ├── auth/
│   ├── api/
│   ├── query/
│   ├── validation/
│   └── observability/
├── constants/
├── utils/
├── providers/
├── styles/
├── types/
└── tests/
```

### 14.1 Meaning of preferred folders

- `app`: routing, layouts, route-level loading/error boundaries, metadata, and composition.
- `components/ui`: low-level reusable UI primitives.
- `components/layout`: navigation, shell, headers, sidebars, and structural UI.
- `components/shared`: reusable business-neutral compositions.
- `features`: business-capability code.
- `hooks`: only cross-feature hooks.
- `lib`: configured clients, framework integrations, adapters, and infrastructure.
- `utils`: small pure cross-feature functions.
- `constants`: stable cross-feature constants.
- `providers`: client provider composition.
- `types`: only truly global types; feature types remain local.

### 14.2 Folder anti-patterns

Do not create:

```text
components/   # containing hundreds of unrelated business components
utils/        # containing API calls, business rules, and random helpers
services/     # containing every kind of logic
types/        # containing all domain types in one file
common/       # unclear ownership
misc/         # prohibited
```

### 14.3 Small-project exception

A small project MAY begin with fewer folders. Do not create empty architecture. Introduce feature folders when the application has multiple business capabilities or files begin to lose ownership clarity.

---

## 15. Component Design Rules

### 15.1 Component responsibilities

A component SHOULD primarily do one of these:

- Render UI from props.
- Compose child components.
- Connect a feature hook to presentation.
- Own a small, local interaction.

A component SHOULD NOT simultaneously:

- Fetch remote data.
- Normalize multiple API shapes.
- contain a large validation schema.
- Orchestrate multiple mutations.
- Render a complex form.
- Implement permissions.
- Format every domain value.

### 15.2 Container and presentation split

Use this split when it improves clarity:

```text
product-list-container.tsx  # query, state, orchestration
product-list.tsx            # rendering
product-card.tsx            # reusable item UI
```

Do not force this split for tiny components.

### 15.3 Props

- Pass the minimum data and callbacks a child needs.
- Prefer explicit props over passing a huge feature object.
- Do not pass state setters across many layers when a domain callback communicates intent better.
- Avoid prop drilling only when it is actually harmful; do not introduce global state for two levels of props.

Better:

```tsx
<PriceField
  currency={currency}
  value={price}
  onChange={handlePriceChange}
  error={errors.price?.message}
/>
```

### 15.4 Complex children

When an input or UI section has complex behavior, extract it into a focused component and pass only what it needs. The parent form remains responsible for overall composition, while the child owns its UI-specific interaction.

### 15.5 Render purity

- Render MUST remain pure.
- Do not mutate props, state, query cache, or external values during render.
- Do not start network requests manually during render.
- Do not generate unstable identifiers during render when hydration consistency matters.

---

## 16. Forms Architecture

The preferred form pattern separates rendering, validation, orchestration, complex fields, and persistence while keeping the connection obvious.

### 16.1 Preferred form structure

```text
features/products/forms/product-form/
├── product-form.tsx
├── fields/
│   ├── product-price-field.tsx
│   ├── product-images-field.tsx
│   └── product-variants-field.tsx
├── hooks/
│   └── use-product-form.ts
├── schemas/
│   └── product-form.schema.ts
├── product-form.constants.ts
├── product-form.types.ts
└── index.ts
```

For a simpler feature, this may be flattened:

```text
forms/
├── product-form.tsx
├── use-product-form.ts
├── product-form.schema.ts
└── product-form.types.ts
```

### 16.2 Responsibility split

#### `product-form.tsx`

MUST:

- Render the form layout.
- Render simple inputs.
- Compose complex field components.
- Connect submit/loading/error state from the form hook.
- Keep business and transport logic minimal.

MUST NOT:

- Contain the full Zod schema.
- Directly call arbitrary API endpoints.
- Contain complex transformation and mutation logic.
- Reimplement validation messages already owned by the schema.

#### Complex field component

MUST:

- Own complex UI interaction for that field.
- Receive only the field value, callbacks, errors, disabled state, and required contextual data.
- Remain reusable within the feature when practical.

SHOULD NOT:

- Submit the entire form.
- Know unrelated form fields.
- Call unrelated mutations.

#### `use-product-form.ts`

MUST:

- Configure React Hook Form.
- Connect the resolver to the schema.
- Define defaults and reset behavior.
- Orchestrate submission.
- Transform form values to an application command when necessary.
- Expose a small API to the form component.

MAY:

- Integrate a feature mutation hook.
- Expose derived states such as `isSubmitting` or `canSubmit`.

MUST NOT:

- Render JSX.
- Own backend-only authorization rules.
- become a generic “everything hook” for the whole feature.

#### Schema file

MUST:

- Define runtime validation and normalization for form input.
- Produce the form input/output types where supported.
- Remain independent from React rendering.

MUST NOT:

- Call APIs.
- Access browser globals.
- contain mutation side effects.

### 16.3 Example

```ts
// product-form.schema.ts
import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  price: z.coerce.number().positive(),
  currency: z.enum(["EGP", "USD", "EUR"]),
});

export type ProductFormInput = z.input<typeof productFormSchema>;
export type ProductFormValues = z.output<typeof productFormSchema>;
```

```ts
// use-product-form.ts
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  productFormSchema,
  type ProductFormInput,
  type ProductFormValues,
} from "../schemas/product-form.schema";

export function useProductForm(
  onSubmit: (values: ProductFormValues) => Promise<void>,
) {
  const form = useForm<ProductFormInput, unknown, ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      currency: "EGP",
    },
  });

  return {
    form,
    submit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
}
```

```tsx
// product-form.tsx
export function ProductForm({ onSubmit }: ProductFormProps) {
  const { form, submit, isSubmitting } = useProductForm(onSubmit);

  return (
    <FormProvider {...form}>
      <form onSubmit={submit} noValidate>
        <ProductNameField />
        <ProductPriceField currencyOptions={currencyOptions} />
        <SubmitButton disabled={isSubmitting} />
      </form>
    </FormProvider>
  );
}
```

### 16.4 Validation rules

- Client validation improves UX; server validation is authoritative.
- Reuse the same schema across client and server only when the trust boundary and runtime allow it.
- Never expose server-only refinements, secrets, or database access to the client bundle.
- Validate file type, size, and content server-side.
- Async uniqueness checks SHOULD be debounced and MUST be verified again during submission.

### 16.5 Form state rules

- Form state belongs to the form library, not a global store, unless the form is a deliberate multi-page persisted workflow.
- Do not mirror every field into component state.
- Use controlled fields only when the UI component requires them.
- Reset forms explicitly after successful create operations or when editing a new entity.
- Handle dirty-state navigation intentionally for important forms.

---

## 17. React Rules

### 17.1 Purity and immutability

- Components and hooks MUST be pure during render.
- Props and state MUST be treated as immutable snapshots.
- Side effects belong in event handlers, effects, server operations, or external-store integrations.

### 17.2 State placement

Use the narrowest correct state owner:

1. Derived value: compute it; do not store it.
2. Local interaction: component state.
3. Shared subtree state: lift state or use context.
4. URL-relevant state: search params or route state.
5. Server state: query/cache library or framework data layer.
6. Cross-feature client state: Zustand or Redux Toolkit only when justified.

### 17.3 Effects

Use an effect only to synchronize with an external system, such as:

- Browser APIs.
- Timers.
- Subscriptions.
- Third-party widgets.
- Imperative network behavior not handled by framework/query tools.

Do not use effects for:

- Deriving state from props.
- Responding to a click that can be handled in the event.
- Chaining state updates that can be computed together.
- Fetching data when Next.js server data or TanStack Query is the established pattern.

Every effect MUST have correct dependencies and cleanup where needed.

### 17.4 Hooks

- Hooks MUST follow the Rules of Hooks.
- Custom hooks SHOULD express reusable behavior, not merely move lines out of a component.
- A hook SHOULD expose a small semantic API.
- Avoid hooks that return dozens of unrelated fields.
- Never conditionally call a hook.

### 17.5 Memoization

- Do not add `useMemo`, `useCallback`, or `memo` automatically.
- Use them when profiling, stable identity contracts, or expensive calculations justify them.
- React Compiler support SHOULD be considered before widespread manual memoization.
- Correctness MUST never depend on memoization.

### 17.6 Context

- Keep context values focused.
- Split frequently changing and stable values when rerenders matter.
- Memoize provider values only when necessary.
- Do not use one global “app context” for unrelated state.

### 17.7 Error and loading UI

- Every asynchronous feature SHOULD define loading, empty, error, and success states.
- Do not treat “no data” as a generic error.
- Errors SHOULD offer a meaningful recovery action when possible.
- Suspense boundaries SHOULD be placed around coherent loading regions.

---

## 18. Next.js Rules

### 18.1 App Router default

New Next.js applications MUST use the App Router unless a project constraint requires the Pages Router.

### 18.2 Server-first rendering

- Pages and layouts are Server Components by default.
- Add `"use client"` only at the smallest boundary that needs state, effects, event handlers, browser APIs, or client-only libraries.
- Do not mark an entire page client-side because one button is interactive.

### 18.3 Recommended structure

```text
src/app/
├── (marketing)/
│   ├── page.tsx
│   └── layout.tsx
├── (dashboard)/
│   ├── layout.tsx
│   └── products/
│       ├── page.tsx
│       ├── loading.tsx
│       ├── error.tsx
│       └── [productId]/page.tsx
├── api/
├── layout.tsx
├── global-error.tsx
└── not-found.tsx
```

Route groups SHOULD express layout or access boundaries, not random categorization.

### 18.4 Data access

Preferred order:

1. Server Components may call the application/data layer directly when appropriate.
2. Client Components use an API, Server Action, or hydrated query pattern.
3. External clients use documented HTTP APIs.

Do not make a Server Component call the same application's Route Handler over HTTP when it can call the underlying service directly.

### 18.5 Data Access Layer

For applications with sensitive data or non-trivial authorization:

- Create a server-only data access or application layer.
- Mark server-only modules appropriately.
- Perform authentication and authorization close to data access.
- Return narrow DTOs rather than whole database records.
- Do not pass secrets, password hashes, internal flags, or unnecessary columns to Client Components.

### 18.6 Server Actions

Treat every Server Action as a public server endpoint:

- Validate input.
- Authenticate the user.
- Authorize the exact operation and resource.
- Perform the mutation through an application service.
- Revalidate or update the relevant cache.
- Return a serializable, safe result.
- Do not rely on a hidden button for security.

### 18.7 Route Handlers

Use Route Handlers for:

- Public or external APIs.
- Webhooks.
- Client-side requests requiring an HTTP boundary.
- File responses.
- BFF endpoints.

Route Handlers SHOULD remain thin and delegate domain behavior.

### 18.8 Caching

- Caching MUST be explicit.
- Define whether data is static, request-time, user-specific, tenant-specific, or revalidated.
- Never cache authorization-sensitive output under a shared key.
- Use tags or path revalidation narrowly.
- Do not add `use cache` without understanding data freshness and invalidation.
- Verify current version-matched caching behavior because Next.js caching semantics evolve.

### 18.9 Authentication

- Prefer a maintained authentication library when appropriate.
- Keep session verification and authorization in a server-only DAL or service.
- Middleware MAY perform optimistic routing checks, but authoritative authorization belongs near the protected operation.
- Cookies MUST use secure attributes appropriate to the environment.

### 18.10 Metadata and assets

- Use the Metadata API for route metadata.
- Use `next/image` when it provides value and remote sources are configured safely.
- Use `next/font` or the project font strategy to avoid layout shifts.
- Avoid shipping large client-side icon or utility bundles for a few symbols.

### 18.11 Error boundaries

- Use route-level `error.tsx` for recoverable segment failures.
- Use `notFound()` for missing resources.
- Do not leak internal errors into rendered messages.
- Log server errors with request context and correlation identifiers.

### 18.12 AI-agent documentation rule

Before changing Next.js behavior, the agent SHOULD read the installed, version-matched Next.js documentation from the package when available, because local documentation matches the exact framework version better than remembered behavior.

### 18.13 BFF boundary

Next.js MAY act as a Backend for Frontend when:

- It aggregates APIs for the web client.
- It owns web session behavior.
- It performs web-specific transformations.
- It proxies with security and observability controls.

It SHOULD NOT become the accidental owner of all enterprise domain logic when a dedicated backend already exists.

---

## 19. TanStack Query Pattern

TanStack Query owns **server state**, not arbitrary local UI state.

### 19.1 Preferred feature structure

```text
features/products/
├── api/
│   └── products.api.ts
├── queries/
│   ├── products.keys.ts
│   ├── products.options.ts
│   └── use-products.ts
├── mutations/
│   ├── use-create-product.ts
│   └── use-update-product.ts
└── types/
    └── product.types.ts
```

A smaller feature MAY combine the query files while preserving responsibilities.

### 19.2 API functions

API functions SHOULD:

- Accept explicit typed parameters.
- Perform one transport operation.
- Validate or normalize responses where necessary.
- Throw structured application errors on failure.
- Remain independent from React hooks.

```ts
export async function getProducts(
  filters: ProductFilters,
  signal?: AbortSignal,
): Promise<ProductListResponse> {
  return apiClient.get("/products", { filters, signal });
}
```

### 19.3 Query keys

- Use a query-key factory.
- Include every variable used by the query function.
- Keep keys serializable and deterministic.
- Use hierarchical keys for targeted invalidation.

```ts
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters: ProductFilters) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};
```

### 19.4 Query options

Use shared query options when server prefetching, client hooks, and invalidation need the same contract.

```ts
export function productsQueryOptions(filters: ProductFilters) {
  return queryOptions({
    queryKey: productKeys.list(filters),
    queryFn: ({ signal }) => getProducts(filters, signal),
    staleTime: 30_000,
  });
}
```

### 19.5 Defaults must be intentional

TanStack Query data is stale by default and may refetch on common lifecycle events. Every significant query SHOULD deliberately decide:

- `staleTime`.
- Garbage-collection behavior when relevant.
- Retry behavior.
- Refetch-on-focus/reconnect behavior.
- Placeholder or initial data behavior.

Do not copy one global `staleTime` to every domain.

### 19.6 Mutations

- Mutation hooks SHOULD own cache updates, invalidation, and optimistic rollback.
- Invalidate the narrowest correct key.
- Avoid invalidating the entire application cache.
- Optimistic updates MUST define rollback and server reconciliation.
- Disable duplicate submissions where appropriate, but backend idempotency remains required for critical writes.

### 19.7 Presentational components

Presentational components SHOULD NOT call arbitrary query hooks internally when that makes reuse or testing difficult. Prefer a feature container or hook that supplies explicit data and callbacks.

---

## 20. Frontend State Management

### 20.1 Decision order

Use this order before introducing a store:

1. Derived value.
2. Component state.
3. Form state library.
4. URL state.
5. Server-state library.
6. Context for a focused subtree.
7. Zustand or Redux Toolkit for genuinely shared client state.

### 20.2 Redux Toolkit

Use Redux Toolkit when the application needs:

- Complex shared client workflows.
- Event-like state transitions across many features.
- Strong debugging, middleware, or normalized entity tooling.
- Existing Redux architecture.

Do not write legacy Redux boilerplate manually.

### 20.3 Zustand

Use Zustand for focused shared client state with a small API. Rules:

- Keep stores domain-focused.
- Expose actions, not arbitrary setter access.
- Use selectors to reduce rerenders.
- Do not store server cache that TanStack Query already owns.
- Do not create one global store for all application state.

### 20.4 URL state

Filters, sorting, selected tabs, and pagination SHOULD use URL state when users must share, bookmark, reload, or navigate back to the same view.

---

## 21. Frontend Library Rules

### 21.1 Library selection order

1. Native platform or framework feature.
2. Existing project dependency.
3. Small maintained library with clear value.
4. Custom implementation only when requirements are simple and security risk is low.

### 21.2 Recommended roles

| Need | Preferred default |
|---|---|
| Forms | React Hook Form |
| Runtime schemas | Zod 4 or existing project schema library |
| Server state | TanStack Query when client caching is needed |
| Complex client state | Redux Toolkit or Zustand after justification |
| Data tables | TanStack Table for complex behavior; semantic HTML for simple tables |
| Unit/component tests | Vitest or project test runner + Testing Library |
| End-to-end tests | Playwright |
| Accessible primitives | Existing design system, Radix-based components, or another maintained accessible library |
| HTTP | Native `fetch` or configured project client; Axios only when its capabilities or existing usage justify it |

### 21.3 Dependency admission checklist

Before adding a library, verify:

- It solves a current problem.
- Existing dependencies cannot solve it adequately.
- It is actively maintained.
- It supports the project runtime and framework versions.
- Bundle/runtime cost is acceptable.
- License is acceptable.
- Security history is acceptable.
- API is stable.
- SSR/RSC compatibility is understood.
- Exit/migration cost is acceptable.

### 21.4 Dependency restrictions

- MUST NOT install multiple libraries for the same responsibility without a migration plan.
- MUST NOT add a package for a trivial helper that can be implemented safely in a few tested lines.
- MUST NOT introduce a beta/RC dependency in production without explicit approval.
- MUST NOT import an entire utility or icon library when tree-shakable imports exist.

---

## 22. Styling and Design-System Rules

- Follow the existing styling strategy.
- Use design tokens for colors, spacing, typography, radii, shadows, and breakpoints.
- Do not hardcode repeated brand values across components.
- Build reusable primitives before copying markup across features.
- Keep business logic out of style files.
- Ensure interactive states: hover, focus, active, disabled, loading, error.
- Use semantic variants rather than one-off color props.
- Avoid deeply nested CSS selectors and fragile DOM coupling.
- Responsive behavior MUST be tested at representative widths.
- Dark mode MUST use tokens rather than duplicated component styles.

---

## 23. Frontend Performance

### 23.1 Priorities

1. Reduce unnecessary client JavaScript.
2. Keep server/client boundaries small.
3. Avoid waterfalls.
4. Optimize images, fonts, and third-party scripts.
5. Virtualize large lists.
6. Cache only with a clear freshness model.
7. Profile rerenders before manual memoization.

### 23.2 Network behavior

- Cancel obsolete requests where supported.
- Debounce remote search.
- Prefetch only high-probability navigation.
- Avoid duplicate fetching across route and query layers.
- Paginate or stream large datasets.
- Compress and shape payloads for the consumer.

### 23.3 Bundle behavior

- Keep heavy browser-only libraries behind client boundaries.
- Dynamically import large optional experiences.
- Review bundle analysis before adding a large dependency.
- Avoid exporting server-only code from mixed barrels imported by clients.

### 23.4 Rendering behavior

- Use stable keys.
- Avoid generating new large objects in hot render paths when it causes measurable rerenders.
- Do not store derived collections in state.
- Prefer CSS for simple visual effects over JavaScript event loops.

---

## 24. Frontend Accessibility

Accessibility is mandatory.

- Use semantic HTML before ARIA.
- Every input MUST have an accessible label.
- Errors MUST be associated with their fields.
- Keyboard users MUST reach and operate every interactive control.
- Focus MUST be visible.
- Dialogs, menus, and popovers MUST manage focus correctly.
- Do not use color alone to communicate status.
- Images MUST have appropriate alternative text or be marked decorative.
- Dynamic updates SHOULD use appropriate live regions when needed.
- Respect reduced-motion preferences.
- Touch targets SHOULD be usable on mobile.
- Test with keyboard navigation and automated accessibility checks; automation does not replace manual testing.

---

## 25. Frontend Testing

### 25.1 Testing priorities

- Test observable behavior, not implementation details.
- Prefer role, label, and visible-text queries.
- Avoid selecting elements by class names or internal structure.
- Mock network boundaries, not every internal function.
- Keep tests deterministic and independent.

### 25.2 Test layers

- Pure utilities: unit tests.
- Hooks with important behavior: focused hook/component tests.
- Components: user-focused Testing Library tests.
- Query and mutation flows: integration tests with a realistic request mock or test server.
- Critical journeys: Playwright end-to-end tests.

### 25.3 Form tests

Test:

- Required and invalid values.
- Complex field behavior.
- Submission payload transformation.
- Server validation errors.
- Loading and duplicate-submit behavior.
- Reset/edit mode.
- Keyboard interaction.

### 25.4 Playwright rules

- Test user-visible behavior.
- Use isolated test data.
- Prefer role-based locators.
- Use web-first assertions.
- Avoid fixed sleeps.
- Capture traces for failures in CI.

---

## 26. Backend Architecture

### 26.1 Responsibilities

A backend feature typically contains:

- Transport adapter: HTTP, queue, CLI, or scheduled job.
- Runtime validation.
- Authorization policy.
- Application use case.
- Domain rules.
- Repository or gateway boundary.
- Infrastructure implementation.
- Serializer or resource mapper.

Not every CRUD endpoint needs a formal class for every layer. Preserve the boundary without ceremonial boilerplate.

### 26.2 Thin controllers

Controllers or route handlers SHOULD:

1. Read validated request input.
2. Read authenticated actor/context.
3. Call one application use case or focused service.
4. Map the result to an HTTP response.

They SHOULD NOT contain long transactions, direct multi-table orchestration, or duplicated business rules.

### 26.3 Application services/use cases

Application code SHOULD:

- Coordinate domain behavior.
- Enforce operation-level authorization when appropriate.
- Open transactions through an abstraction.
- Call repositories and external gateways.
- Emit events after durable state changes.
- Remain testable without HTTP.

### 26.4 Repositories

Repositories SHOULD:

- Encapsulate persistence operations meaningful to the domain.
- Avoid leaking transport concerns.
- Return purpose-specific data.
- Expose transactional variants when required.

Do not create a generic repository abstraction that reduces every database to `findAll`, `findOne`, and `save` if the domain needs richer queries.

---

## 27. Preferred Backend Folder Structure

### 27.1 Node.js / TypeScript modular structure

```text
src/
├── app/
│   ├── create-app.ts
│   ├── routes.ts
│   └── server.ts
├── modules/
│   ├── orders/
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   ├── http/
│   │   ├── schemas/
│   │   ├── mappers/
│   │   └── index.ts
│   └── users/
├── shared/
│   ├── errors/
│   ├── auth/
│   ├── validation/
│   └── types/
├── config/
├── db/
│   ├── client.ts
│   ├── schema/
│   └── migrations/
├── jobs/
├── integrations/
├── observability/
└── tests/
```

### 27.2 Simpler feature structure

```text
src/modules/orders/
├── order.routes.ts
├── order.controller.ts
├── order.service.ts
├── order.repository.ts
├── order.schema.ts
├── order.mapper.ts
└── order.types.ts
```

Use the simpler structure until domain complexity justifies deeper layers.

### 27.3 Laravel structure

Use Laravel conventions first, then organize domain complexity without fighting the framework:

```text
app/
├── Actions/
│   └── Orders/
├── Data/
├── Domain/
│   └── Orders/
├── Events/
├── Exceptions/
├── Http/
│   ├── Controllers/
│   ├── Requests/
│   └── Resources/
├── Jobs/
├── Models/
├── Policies/
├── Services/
└── Support/
```

Do not create directories only because they appear here. Use them when they represent real responsibilities.

---

## 28. Node.js Runtime Rules

### 28.1 Runtime

- Use a supported LTS runtime in production.
- Prefer ESM for new projects when framework/tooling support is complete.
- Do not mix ESM and CommonJS casually.
- Keep CPU-intensive work off the request event loop.
- Use worker threads or a separate service for genuinely CPU-bound tasks.
- Stream large files and exports.

### 28.2 Process lifecycle

- Handle `SIGTERM` and `SIGINT`.
- Stop accepting new traffic.
- Finish or cancel in-flight work within a deadline.
- Close database, queue, and telemetry connections.
- Exit non-zero on unrecoverable startup failure.
- Let a process manager or orchestrator restart crashed processes.

### 28.3 Configuration

- Validate environment variables at startup.
- Fail fast on missing or invalid required configuration.
- Do not read raw `process.env` throughout business modules.
- Separate public configuration from secrets.

### 28.4 Async safety

- Handle unhandled promise rejections as defects.
- Add timeouts to outbound calls.
- Use abort signals when supported.
- Bound concurrency.
- Do not block the event loop with synchronous filesystem or crypto operations in request paths.

---

## 29. Express Rules

### 29.1 Express 5 baseline

- Use Express 5 semantics.
- Async route errors SHOULD flow to centralized error middleware.
- Error middleware MUST use the four-argument signature.
- Validate route params, query, body, and headers before controllers use them.

### 29.2 Application setup

Recommended sequence:

1. Trust-proxy configuration when required by deployment.
2. Request/correlation identifier.
3. Security headers.
4. CORS policy.
5. Body size limits and parsers.
6. Structured request logging.
7. Authentication context.
8. Routes.
9. Not-found handler.
10. Central error handler.

### 29.3 Express controller example

```ts
export async function createOrderController(
  req: Request,
  res: Response,
): Promise<void> {
  const actor = requireActor(req);
  const input = req.validated.body;

  const order = await createOrder({ actor, input });

  res.status(201).json({ data: toOrderResource(order) });
}
```

### 29.4 Express restrictions

- Do not attach untyped arbitrary properties to `req` without module augmentation or a typed request context.
- Do not expose static dotfiles accidentally.
- Do not use default error output in production.
- Do not place database queries directly in route registration files.
- Do not depend on middleware order that is undocumented or untested.

---

## 30. Fastify Rules

### 30.1 When to choose Fastify

Fastify is a strong choice when the project benefits from:

- Schema-driven validation and serialization.
- Plugin encapsulation.
- High-throughput JSON APIs.
- A typed route ecosystem.
- Fast injection-based testing.

Do not migrate from Express solely for benchmark claims without a real operational need.

### 30.2 Plugin architecture

- Register capabilities as focused plugins.
- Use encapsulation deliberately.
- Decorate the Fastify instance/request only with typed, documented values.
- Avoid one giant plugin that registers the entire application.

### 30.3 Schemas

- Define request and response schemas.
- Response schemas SHOULD limit accidental data exposure and improve serialization.
- Treat schemas as application code; never accept user-provided schemas.
- Do not perform database access during initial schema validation.
- Complex async business validation belongs in hooks or the application layer after structural validation.

### 30.4 Lifecycle hooks

Choose hooks based on responsibility:

- `onRequest`: earliest request context.
- `preParsing`: raw payload handling.
- `preValidation`: contextual preparation.
- `preHandler`: authentication/authorization orchestration.
- `onSend`: safe response transformation.
- `onResponse`: metrics/cleanup after response.

Do not place the same business rule in multiple hooks.

### 30.5 Testing

Use `app.inject()` for fast route integration tests without opening a network port. Test plugin encapsulation and route schemas where relevant.

---

## 31. PHP Rules

### 31.1 Language baseline

- Use a supported PHP release compatible with the framework and dependencies.
- New PHP files SHOULD use `declare(strict_types=1);` where project conventions permit.
- Follow PSR-12 coding style and PSR-4 autoloading.
- Use typed properties, parameters, and return types.
- Prefer enums for finite domain values where appropriate.
- Prefer immutable value objects for money, identifiers, and other invariant-rich values when justified.

### 31.2 PHP code rules

- Do not use dynamic properties.
- Avoid loose comparisons for domain logic.
- Avoid arrays as unstructured bags for complex domain data; use DTOs or value objects.
- Do not suppress errors with `@`.
- Do not catch `Throwable` broadly unless at an application boundary.
- Use constructor property promotion when it improves clarity.
- Keep framework facades out of domain logic when testability matters.

### 31.3 Static analysis and formatting

New projects SHOULD use:

- Laravel Pint or an equivalent formatter.
- PHPStan/Larastan at a meaningful strictness level.
- PHPUnit or Pest according to project conventions.

Do not reduce static-analysis level to silence new defects.

---

## 32. Laravel Rules

### 32.1 Framework conventions first

Use Laravel's routing, container, middleware, validation, policies, resources, queues, events, and testing facilities before inventing custom infrastructure.

### 32.2 Controllers

Controllers SHOULD be thin:

```php
public function store(StoreOrderRequest $request, CreateOrder $action): OrderResource
{
    $order = $action->handle(
        actor: $request->user(),
        data: CreateOrderData::from($request->validated()),
    );

    return new OrderResource($order);
}
```

### 32.3 Form Requests

Use Form Requests for non-trivial request validation and request-level authorization.

- `rules()` owns structural validation.
- `authorize()` may perform request-level permission checks.
- Domain invariants still belong in the application/domain layer.
- Never trust `$request->all()` for mass assignment.

### 32.4 Actions/services

Use focused action classes or services for business operations that exceed trivial CRUD.

- Prefer names such as `CreateOrder`, `CancelOrder`, `RecordPayment`.
- One action SHOULD represent one use case.
- Do not create a giant `OrderService` with every operation.

### 32.5 Models and Eloquent

- Protect mass assignment using `$fillable` or carefully controlled `$guarded` strategy.
- Prevent N+1 queries with eager loading.
- Consider preventing lazy loading outside production to catch accidental N+1 behavior.
- Keep expensive accessors out of large list queries.
- Use casts for clear data conversion.
- Do not place all business logic in Eloquent models; keep models cohesive.

### 32.6 Policies and authorization

- Use policies or gates for resource authorization.
- Authorize the specific resource, not only the route role.
- Apply tenant scopes consistently.
- Do not rely on frontend visibility.

### 32.7 API Resources

- Use API Resources to control response shape.
- Do not return entire models blindly.
- Load required relationships deliberately.
- Avoid accidental lazy loading during serialization.

### 32.8 Queues

Use queued jobs for slow or retryable tasks:

- Email.
- Imports/exports.
- Image or document processing.
- External synchronization.
- Notifications.

Jobs SHOULD define timeout, retry/backoff, failure behavior, and idempotency. Use unique jobs only when the uniqueness contract matches the business need.

### 32.9 Database transactions

Use `DB::transaction()` for atomic multi-write operations. External API calls SHOULD generally occur outside the database transaction. Use after-commit dispatch where an event/job must not run before persistence commits.

### 32.10 Testing

- Feature tests provide the highest confidence for most Laravel behavior.
- Unit-test pure domain logic.
- Use factories intentionally.
- Avoid making every test depend on enormous seeders.
- Test policies, validation, API resources, queue dispatch, and database effects.

### 32.11 Deployment

- Cache configuration, routes, and views where appropriate.
- Run migrations as a controlled deployment step.
- Restart long-running queue workers after deployment.
- Expose health checks.
- Ensure writable storage and correct trusted-proxy configuration.

---

## 33. Backend Library Rules

### 33.1 Node.js preferred options

| Need | Preferred choices |
|---|---|
| HTTP framework | Express 5 or Fastify 5 based on project requirements |
| Validation | Zod, TypeBox/JSON Schema, or existing validated project library |
| Logging | Pino or established structured logger |
| ORM/query builder | Prisma or Drizzle based on control and workflow needs |
| PostgreSQL driver | Project-compatible maintained driver |
| Queue | BullMQ or platform-native queue when Redis/managed queue is appropriate |
| Metrics/tracing | OpenTelemetry-compatible tooling |
| Tests | Vitest, Node test runner, Supertest, or Fastify inject |

### 33.2 PHP/Laravel preferred options

Prefer Laravel core capabilities first. Common additions MAY include:

- Pest or PHPUnit.
- Pint.
- PHPStan/Larastan.
- A maintained permission package when policy/role complexity justifies it.
- Horizon for Redis queue operations when appropriate.

### 33.3 Library ownership

Every library MUST have:

- A defined responsibility.
- A configured adapter in `lib`, `infrastructure`, or framework configuration.
- A version policy.
- Tests around critical behavior.
- No direct use scattered across the entire codebase when an adapter is useful.

---

## 34. API Design Rules

### 34.1 Contract design

- APIs MUST be consistent, predictable, and versioned when compatibility requires it.
- Use nouns for resources and HTTP methods for operations where REST fits.
- Use command endpoints for domain actions that do not map cleanly to CRUD.
- Validate path, query, header, and body independently.
- Return stable error codes separate from human-readable messages.

### 34.2 Status codes

Typical defaults:

- `200` successful read/update.
- `201` resource created.
- `202` accepted for asynchronous processing.
- `204` successful operation with no body.
- `400` malformed input.
- `401` unauthenticated.
- `403` authenticated but forbidden.
- `404` missing or intentionally hidden resource.
- `409` state conflict.
- `422` semantically invalid input where the API convention uses it.
- `429` rate limited.
- `500` unexpected server failure.

Use the project's established error contract consistently.

### 34.3 Response shape

A common shape MAY be:

```json
{
  "data": {},
  "meta": {},
  "error": null
}
```

Do not wrap responses mechanically if the existing API has another clear contract.

### 34.4 Pagination

- Set maximum page sizes.
- Use deterministic ordering.
- Include pagination metadata or cursors.
- Never allow clients to request unbounded records.

### 34.5 Filtering and sorting

- Allowlist filter and sort fields.
- Parameterize all values.
- Avoid exposing raw SQL-like expressions.
- Define case sensitivity and timezone behavior.

### 34.6 Idempotency

Critical create/payment/booking operations SHOULD accept an idempotency key or equivalent business identifier.

- Scope the key to actor/tenant and operation.
- Store the request fingerprint and result.
- Reject conflicting reuse.
- Expire keys according to business requirements.

### 34.7 Webhooks

- Verify signatures using the raw body where required.
- Protect against replay with timestamps/event IDs.
- Persist receipt before asynchronous processing where reliability matters.
- Make handlers idempotent.
- Return quickly and process long work asynchronously.

---

## 35. Authentication and Authorization

### 35.1 Authentication

- Use a maintained solution unless custom authentication is a documented requirement.
- Passwords MUST use a current password hashing algorithm with appropriate parameters.
- Tokens and sessions MUST have rotation, expiration, revocation, and secure storage behavior.
- Never log passwords, secrets, full tokens, or sensitive recovery data.

### 35.2 Authorization

Every protected operation MUST verify:

1. The actor is authenticated.
2. The actor has permission for the operation.
3. The actor can access the specific resource.
4. The resource belongs to the correct tenant/account where relevant.
5. Sensitive fields are authorized individually.

### 35.3 BOLA prevention

Never fetch a resource by client-supplied ID and assume access is allowed.

Bad:

```ts
const order = await db.order.findUnique({ where: { id } });
```

Better conceptually:

```ts
const order = await orderRepository.findAccessibleById({
  orderId: id,
  actorId: actor.id,
  tenantId: actor.tenantId,
});
```

Or fetch and run an explicit policy before returning or mutating it.

### 35.4 Roles and permissions

- Roles group permissions; code SHOULD authorize capabilities rather than scattered role-name comparisons.
- Super-admin bypasses MUST be explicit, auditable, and rare.
- Permission changes SHOULD invalidate relevant sessions or authorization caches when required.

---

## 36. Application Security

### 36.1 Input handling

- Validate all untrusted input.
- Enforce body, file, field, and collection size limits.
- Reject unknown fields for sensitive operations when practical.
- Prevent mass assignment.
- Normalize only after validation rules are clear.

### 36.2 Output handling

- Return allowlisted fields through DTOs/resources.
- Encode output in the appropriate context.
- Do not expose stack traces, SQL, secrets, internal IDs, or infrastructure details unnecessarily.

### 36.3 SQL and NoSQL injection

- Use parameterized queries or ORM APIs.
- Do not concatenate untrusted values into SQL.
- Do not pass arbitrary MongoDB operators from request objects.
- Allowlist dynamic column names and sort directions.

### 36.4 CSRF

Cookie-authenticated state-changing requests MUST have appropriate CSRF protection. SameSite cookies alone may not cover every architecture.

### 36.5 CORS

- Define explicit allowed origins.
- Do not combine wildcard origins with credentials.
- Limit methods and headers.
- Treat CORS as a browser policy, not authentication.

### 36.6 SSRF

For server-side URL fetching:

- Allowlist protocols and destinations when possible.
- Block private/link-local metadata ranges unless explicitly required.
- Resolve and re-check redirects.
- Apply timeouts and response-size limits.
- Do not expose arbitrary internal fetch capability.

### 36.7 File uploads

- Validate size, extension, MIME, and actual content where appropriate.
- Generate server-side storage names.
- Store outside executable/public paths unless intentionally public.
- Scan high-risk files when required.
- Serve with safe content headers.
- Apply authorization to download access.

### 36.8 Rate limits and abuse

- Rate-limit authentication, recovery, search, expensive reports, uploads, and public APIs.
- Add business-level limits in addition to IP limits.
- Use queues and quotas for expensive operations.

### 36.9 Dependencies

- Commit lockfiles.
- Review supply-chain changes.
- Remove unused packages.
- Apply security patches promptly.
- Do not run unknown install scripts blindly.
- Pin CI actions and container images according to project policy.

---

## 37. Database Selection

Choose by data model and access patterns.

| Requirement | Default consideration |
|---|---|
| Transactions, joins, constraints, reporting | PostgreSQL or MySQL |
| Flexible aggregate documents with bounded relationships | MongoDB |
| Cache, session, counters, ephemeral coordination | Redis |
| Full-text/fuzzy ranked search | Database full-text first, dedicated search engine when needed |
| Time-series analytics | PostgreSQL extension or dedicated time-series store when justified |
| Complex graph traversal | Relational model first for modest needs; graph DB for proven graph-heavy workloads |
| Large analytical scans | OLAP/columnar platform when operational DB is insufficient |

### 37.1 Selection rules

- Use one primary database unless a second data store solves a proven distinct need.
- Do not choose NoSQL merely to avoid schema design.
- Do not choose SQL merely because every relation must be normalized.
- Data consistency and query patterns matter more than trend popularity.

---

## 38. Relational Database Rules

### 38.1 Schema correctness

- Use primary keys.
- Use foreign keys where the database owns referential integrity.
- Use `NOT NULL` when absence is invalid.
- Use unique constraints for business uniqueness.
- Use check constraints for stable row-level invariants.
- Use appropriate numeric precision for money.
- Avoid storing comma-separated lists in text columns.

### 38.2 Money

- Use integer minor units or an exact decimal type.
- Never use binary floating point for financial amounts.
- Store currency explicitly when multiple currencies are possible.
- Define rounding at the business boundary.

### 38.3 Indexing

Create indexes from real access patterns:

- Filter predicates.
- Join columns.
- Sort order.
- Uniqueness.
- Foreign-key access where needed.

Every index increases storage and write cost. Review query plans for critical queries.

### 38.4 Query rules

- Select only required columns.
- Avoid N+1 queries.
- Use joins for relational queries rather than repeated application round trips.
- Use `EXPLAIN`/query plans for slow queries.
- Set statement timeouts where appropriate.
- Paginate large results.

### 38.5 Connection pooling

- Configure pool size for runtime concurrency and database limits.
- Serverless environments MUST use an appropriate pooler or serverless driver.
- Do not create a new connection per request.
- Monitor pool wait time and saturation.

---

## 39. PostgreSQL Rules

- Use native constraints and transaction semantics.
- Use `jsonb` only for data that is genuinely semi-structured; do not hide a relational model inside JSON.
- Use partial indexes for selective predicates where useful.
- Use expression indexes only when query patterns justify them.
- Use `timestamptz` for absolute timestamps.
- Use row-level locking carefully and in consistent order.
- Consider `SKIP LOCKED` for queue-like worker claiming where appropriate.
- Use database-generated UUIDs/identifiers according to project policy.
- Review vacuum, analyze, and table growth behavior for high-write systems.
- Use row-level security only with a fully understood session/tenant model and tests; application authorization is still required.

---

## 40. MySQL Rules

- Use InnoDB for transactional workloads.
- Use `utf8mb4` and an appropriate collation.
- Understand composite-index leftmost-prefix behavior.
- Match index column order to equality filters, ranges, and sorting.
- Use strict SQL modes.
- Avoid silent truncation and implicit conversion.
- Review transaction isolation and locking behavior for concurrent writes.
- Use generated columns/indexes only when they improve a measured query pattern.
- Treat zero dates and timezone conversion explicitly.

---

## 41. Non-Relational Database Rules

- Model around access patterns and aggregate boundaries.
- Define ownership of duplicated data.
- Define update and repair strategy for denormalized values.
- Enforce validation in the database and application where supported.
- Do not allow unbounded document, array, key, or cache growth.
- Define consistency expectations for every cross-document operation.

---

## 42. MongoDB Rules

### 42.1 Document design

Embed when:

- Data is owned by one aggregate.
- It is read together.
- Child count is bounded.
- Atomic document updates are valuable.

Reference when:

- Data is shared across aggregates.
- Relationship size is unbounded.
- Entities change independently.
- Many-to-many access is common.

### 42.2 Indexes

- Build indexes from common query shapes.
- Compound index order MUST match filter and sort behavior.
- Use unique indexes for true uniqueness.
- Remove unused indexes after evidence and safe review.
- Avoid excessive indexes on write-heavy collections.

### 42.3 Query safety

- Never pass raw request objects into filters or updates.
- Allowlist fields and operators.
- Use projections to limit returned data.
- Avoid unbounded regex queries.
- Paginate large collections with stable keys.

### 42.4 Transactions

MongoDB transactions are available but have cost. They SHOULD NOT compensate for a poor document model. Prefer single-document atomicity when the aggregate can be modeled safely that way.

### 42.5 Mongoose or ODMs

- Keep schemas and model registration centralized.
- Avoid middleware hooks that hide critical cross-system side effects.
- Use lean queries for read-only data when appropriate and understood.
- Do not expose ODM documents directly to API clients.

---

## 43. Redis and Cache Rules

Redis MAY be used for:

- Cache entries.
- Sessions.
- Rate limits.
- Distributed counters.
- Short-lived coordination.
- Queue infrastructure.

Rules:

- Redis is not automatically a durable primary database.
- Every key MUST have a naming convention and tenant scope where relevant.
- Ephemeral keys SHOULD have TTLs.
- Avoid unbounded sets, lists, and streams.
- Use atomic commands or Lua/server-side functions for multi-step invariants when appropriate.
- Distributed locks MUST have expiration, ownership tokens, and safe release semantics.
- Cache failures SHOULD degrade according to an explicit strategy.

---

## 44. ORM and Query Builder Rules

### 44.1 General rules

- The database schema and constraints remain authoritative.
- Understand generated SQL.
- Avoid loading entire relation graphs.
- Select required fields.
- Detect N+1 behavior.
- Use transactions for atomic operations.
- Keep migration history committed.
- Do not expose ORM records directly across trust boundaries.
- Use raw SQL when the ORM cannot express a correct or efficient query, but parameterize and test it.

### 44.2 ORM choice

Choose Prisma when the team values:

- Generated client workflow.
- Strong schema-driven developer experience.
- Broad query abstraction.
- Prisma migration and tooling conventions.

Choose Drizzle when the team values:

- SQL-like control.
- Lightweight typed query building.
- Schema definitions close to SQL semantics.
- Flexible migration workflows.

Use Eloquent in Laravel unless a strong project requirement justifies another approach.

Do not use two primary ORMs for the same database without a migration boundary and explicit ownership.

---

## 45. Prisma Rules

- Treat `schema.prisma` and migration history as reviewed source code.
- Commit the migrations directory.
- Review generated SQL before production deployment.
- Never use development migration commands directly against production.
- Use `select` to return only needed fields.
- Use relation loading deliberately to avoid N+1 or oversized payloads.
- Use nested writes, batch transactions, or interactive transactions according to atomicity needs.
- Keep interactive transactions short; avoid network calls inside them.
- Map Prisma errors to application errors at the infrastructure boundary.
- Do not leak Prisma model types into frontend contracts by default.
- Configure one reusable client per process/runtime pattern; avoid connection storms.

---

## 46. Drizzle Rules

- Keep schema files organized by domain or bounded context.
- Use database foreign keys for integrity where appropriate.
- Understand that Drizzle relation metadata and database foreign-key constraints solve different problems.
- Commit generated or custom migrations according to the selected workflow.
- Review migration SQL.
- Use typed transactions for atomic workflows.
- Select explicit columns for sensitive or large tables.
- Keep query helpers close to the feature or repository that owns them.
- Avoid adopting beta/RC query APIs automatically; stable project compatibility wins.
- Do not turn the Drizzle schema directory into a single enormous file.

Suggested structure:

```text
src/db/
├── client.ts
├── schema/
│   ├── users.ts
│   ├── products.ts
│   ├── orders.ts
│   └── relations.ts
└── migrations/
```

---

## 47. Eloquent Rules

- Use `$fillable` or a safe explicit assignment strategy.
- Use casts for dates, enums, encrypted values, and structured fields as appropriate.
- Eager-load known relationships.
- Use `withCount`, aggregates, or subqueries instead of loading collections only to count them.
- Use query scopes for stable reusable query semantics, not arbitrary presentation filters.
- Keep observers small; avoid hidden critical side effects.
- Use model events only when their ordering and transaction behavior are understood.
- Prefer API Resources or DTOs over returning models directly.
- Use chunking/cursors for large processing, understanding ordering and mutation behavior.
- Use database transactions for multi-model invariants.

---

## 48. Transactions and Concurrency

### 48.1 Transaction rules

Use a transaction when multiple writes must succeed or fail together.

- Keep transactions short.
- Do not wait for user input or slow external services inside a transaction.
- Read and write in a consistent order to reduce deadlocks.
- Retry deadlock/serialization failures only with a bounded policy.
- Emit external side effects after commit, or use an outbox pattern.

### 48.2 Concurrency controls

Choose the simplest correct method:

- Unique constraint for duplicate prevention.
- Atomic conditional update for state transitions.
- Optimistic concurrency/version column for concurrent edits.
- Row lock for short critical sections.
- Idempotency key for repeated commands.
- Distributed lock only when the resource spans systems and alternatives are insufficient.

### 48.3 Inventory/payment example

A stock decrement SHOULD be atomic:

```sql
UPDATE products
SET stock = stock - :quantity
WHERE id = :id
  AND stock >= :quantity;
```

The application MUST verify that a row was updated. A prior “check stock” query alone is race-prone.

### 48.4 Outbox pattern

Use an outbox when a database write and message/event publication must be reliable together:

1. Write domain state and outbox row in one transaction.
2. A worker publishes the outbox event.
3. Mark it delivered with retry-safe behavior.
4. Consumers remain idempotent.

---

## 49. Migrations and Seed Data

- Every schema change MUST have a migration.
- Migrations MUST be reviewed like application code.
- Production migrations SHOULD be backward compatible for rolling deployments.
- Large table changes MUST consider locks, rewrite cost, and deployment timing.
- Data backfills SHOULD be resumable and observable.
- Destructive changes SHOULD use expand-and-contract deployment.
- Seed data MUST be deterministic.
- Development seeds MUST NOT contain real personal or secret data.
- Tests SHOULD use factories/builders for scenario-specific data.

### 49.1 Expand-and-contract example

1. Add the new nullable column/table.
2. Deploy code that writes old and new formats when necessary.
3. Backfill.
4. Switch reads.
5. Enforce constraints.
6. Remove old schema in a later deployment.

---

## 50. Background Jobs and Queues

Use a queue when work is:

- Slow.
- Retryable.
- Burst-prone.
- Independently scalable.
- Not required to complete the HTTP response.

Every job MUST define:

- Payload schema and version.
- Idempotency behavior.
- Timeout.
- Retry policy.
- Backoff and jitter.
- Failure/dead-letter behavior.
- Observability fields.
- Tenant/user context when necessary.

Do not place huge binary payloads in queue messages. Store the object and pass an identifier.

Workers MUST handle graceful shutdown and avoid claiming more work than they can finish safely.

---

## 51. Caching Strategy

### 51.1 Cache decision

Before adding a cache, define:

- The expensive source operation.
- Cache key.
- Scope: global, tenant, user, locale, permissions.
- TTL.
- Invalidation trigger.
- Stale tolerance.
- Failure fallback.
- Stampede protection.

### 51.2 Patterns

- Cache-aside: common default for reads.
- Write-through: useful when cache consistency must follow writes.
- Stale-while-revalidate: useful when slightly stale reads are acceptable.
- Request memoization: prevents duplicate work inside one request.

### 51.3 Restrictions

- Never cache sensitive user-specific data under a shared key.
- Do not cache authorization decisions longer than permission-change requirements allow.
- Do not treat cache as the source of truth unless designed as one.
- Avoid caching cheap operations without evidence.
- Prevent cache stampedes with locks, single-flight, or probabilistic early refresh where needed.

---

## 52. Logging, Monitoring, and Observability

### 52.1 Structured logs

Logs SHOULD be structured and include:

- Timestamp.
- Severity.
- Service and environment.
- Request/trace/correlation ID.
- Route or operation.
- Actor and tenant identifiers where safe.
- Error code and stack for internal logs.
- Duration and outcome.

Never log passwords, raw tokens, payment secrets, or unnecessary personal data.

### 52.2 Metrics

Track at least:

- Request rate.
- Error rate.
- Latency percentiles.
- Database query latency and pool saturation.
- Queue depth, age, retries, and failures.
- Cache hit ratio where relevant.
- External dependency latency/errors.
- Business-critical counters.

### 52.3 Tracing

Distributed tracing SHOULD be used when requests cross multiple services or external dependencies and debugging cannot be performed reliably from logs alone.

### 52.4 Health checks

- Liveness: process is running.
- Readiness: process can serve traffic.
- Dependency checks SHOULD be bounded and not overload dependencies.
- Health endpoints MUST not expose sensitive configuration.

---

## 53. Error Handling

### 53.1 Error categories

Use intentional categories such as:

- Validation error.
- Authentication error.
- Authorization error.
- Not found.
- Conflict.
- Rate limit.
- External dependency error.
- Unexpected internal error.

### 53.2 Error contract

A safe API error may include:

```json
{
  "error": {
    "code": "ORDER_STATE_CONFLICT",
    "message": "The order cannot be cancelled in its current state.",
    "details": null,
    "requestId": "req_..."
  }
}
```

- Machine codes SHOULD be stable.
- Messages SHOULD be safe and useful.
- Field errors SHOULD identify valid field paths.
- Internal causes belong in logs, not client responses.

### 53.3 External errors

Translate third-party errors at the integration boundary. Preserve original context internally while exposing stable application-level behavior.

---

## 54. Configuration and Secrets

- Validate configuration once at startup.
- Use a typed configuration module.
- Keep secrets out of source control, frontend bundles, logs, and error messages.
- Separate configuration by environment without copying business logic.
- Rotate secrets and support dual-key periods where required.
- Do not make production behavior depend on an undocumented environment variable.
- Public Next.js variables MUST be treated as publicly visible.
- Test defaults MUST be safe and explicit.

---

## 55. Testing Strategy

### 55.1 Test pyramid with risk focus

Use a balanced portfolio:

- Many fast tests for pure rules.
- Integration tests for database and application boundaries.
- API/component tests for contracts.
- Fewer high-value end-to-end tests for critical journeys.

The exact ratio depends on risk. Do not maximize unit-test count while leaving real integrations untested.

### 55.2 What must be tested

- Business invariants.
- Authorization and tenant isolation.
- Validation boundaries.
- Transactions and concurrency-sensitive operations.
- Error mapping.
- Serialization/DTO field exposure.
- Critical UI behavior.
- Migrations where practical.
- Queue retry/idempotency behavior.

### 55.3 Test quality

- One test SHOULD describe one behavior.
- Use Arrange–Act–Assert or another consistent structure.
- Avoid testing private implementation details.
- Keep fixtures minimal and readable.
- Tests MUST be deterministic.
- Do not use arbitrary sleeps.
- Reset or isolate state between tests.

### 55.4 Contract tests

Use contract tests when multiple clients or services depend on a stable API. Schema generation alone is not enough; behavior and authorization still require tests.

### 55.5 Test database

- Use a real compatible database for important integration tests.
- Do not assume an in-memory substitute matches production semantics.
- Apply migrations to test databases.
- Isolate parallel tests safely.

---

## 56. CI/CD and Quality Gates

A pull request SHOULD pass:

1. Dependency installation from the committed lockfile.
2. Formatting check.
3. Linting.
4. Type checking/static analysis.
5. Unit and integration tests.
6. Production build.
7. Migration validation.
8. Security/dependency checks according to project policy.
9. End-to-end tests for critical changes.

### 56.1 CI rules

- CI MUST use the same runtime family as production.
- Cache dependencies safely using lockfile keys.
- Do not hide failures with `continue-on-error` unless explicitly informational.
- Upload useful failure artifacts such as Playwright traces.
- Protect deployment environments.
- Separate build artifacts from deployment when reproducibility matters.

### 56.2 Deployment rules

- Deploy immutable artifacts.
- Run migrations in a controlled sequence.
- Support rollback or forward-fix strategy.
- Verify health after deployment.
- Use feature flags for high-risk incremental rollout when justified.
- Monitor key metrics during and after release.

---

## 57. Performance Engineering

### 57.1 Process

1. Define the user or system symptom.
2. Capture a baseline.
3. Identify the bottleneck.
4. Change one relevant factor.
5. Measure again.
6. Add regression protection where valuable.

### 57.2 Backend priorities

- Eliminate N+1 queries.
- Add correct indexes.
- Reduce payload size.
- Batch work.
- Bound concurrency.
- Move long tasks to queues.
- Use caching after query/application optimization.
- Stream large responses.

### 57.3 Frontend priorities

- Reduce client JavaScript.
- Remove waterfalls.
- Optimize critical images/fonts.
- Avoid unnecessary client rendering.
- Virtualize large lists.
- Defer non-critical third-party scripts.
- Measure Core Web Vitals and route-specific user experience.

### 57.4 Performance budgets

Projects SHOULD define budgets appropriate to their users and infrastructure, such as:

- Maximum API p95 latency for critical operations.
- Maximum bundle size per route.
- Maximum database query count for common endpoints.
- Maximum export memory footprint.
- Queue processing time and age targets.

---

## 58. Git and Change Management

- Make focused commits with meaningful messages.
- Do not mix formatting the entire repository with a small feature change.
- Preserve unrelated local changes.
- Never force-push or rewrite shared history without explicit authorization.
- Database migrations and code changes MUST be ordered for safe deployment.
- Breaking API changes require migration and communication.
- Generated files SHOULD be committed only when project policy requires them.
- Lockfile changes MUST correspond to intentional dependency changes.

---

## 59. Documentation Rules

Document:

- Architecture boundaries.
- Environment setup.
- Commands.
- Required services.
- API contracts.
- Migration/deployment steps.
- Non-obvious business invariants.
- Security assumptions.
- Operational runbooks.

Code comments and documentation MUST remain synchronized with behavior. Remove stale comments rather than preserving misleading history.

Every major architectural decision SHOULD have a concise ADR containing:

- Context.
- Decision.
- Alternatives.
- Consequences.
- Review trigger.

---

## 60. Definition of Done

A task is done only when applicable items are satisfied:

### Behavior

- Acceptance criteria pass.
- Boundary and failure cases are handled.
- Existing behavior is preserved where required.

### Architecture

- Code is in the correct feature/module.
- Responsibilities are separated without unnecessary layers.
- Public APIs are minimal.

### Frontend

- Loading, empty, error, and success states exist.
- Accessibility is verified.
- Responsive behavior is verified.
- Forms separate schema, orchestration, and complex fields where needed.

### Backend

- Input is validated.
- Authentication and resource-level authorization are enforced.
- Transactions and idempotency are correct.
- Errors use the standard contract.

### Data

- Constraints and indexes are appropriate.
- Migration is safe.
- Sensitive fields are not over-fetched or exposed.

### Quality

- Tests added/updated.
- Lint, type/static analysis, tests, and build pass.
- No unexplained warnings.
- Documentation updated.

### Operations

- Logs and metrics are sufficient.
- Environment changes are documented.
- Deployment/rollback considerations are stated.

---

## 61. Forbidden Agent Behavior

An AI agent MUST NOT:

- Change architecture without explaining and justifying it.
- Install dependencies before checking existing capabilities.
- Upgrade major versions during unrelated feature work.
- Replace the package manager or lockfile format.
- Add `any`, unsafe casts, ignored errors, or disabled lint rules to make checks pass.
- Remove tests because they fail after a change.
- weaken authorization or validation.
- Trust client-provided tenant/user identifiers without server verification.
- Return full database records when a narrow DTO is required.
- Put secrets in client code or source control.
- Execute destructive database or Git commands without explicit authorization.
- Create speculative abstractions, microservices, event buses, or repositories without a current need.
- Use unbounded loops, pagination, memory loading, request sizes, or concurrency.
- Claim verification when checks were not run.
- Rewrite unrelated code for style preference.
- Introduce preview/canary software into production by default.

---

## 62. Technology Evaluation Checklist

When adding or replacing a framework, database, ORM, library, or pattern, record:

### Problem

- What concrete problem exists?
- How often does it occur?
- What is the cost of leaving it unchanged?

### Fit

- Does the tool solve the actual requirement?
- Is it compatible with current runtime/framework versions?
- Does it work with SSR, RSC, serverless, workers, or edge runtime as required?

### Quality

- Maintenance activity.
- Documentation quality.
- Stable release policy.
- Security posture.
- License.
- Type support.
- Testing strategy.

### Cost

- Bundle/runtime cost.
- Operational complexity.
- Learning curve.
- Migration and exit cost.
- Hosting/vendor lock-in.

### Decision

- Chosen option.
- Rejected alternatives.
- Constraints.
- Review date or trigger.

No technology is approved merely because it is popular or appears in this file.

---

## 63. Maintenance and Update Policy

This is a living document.

Review it when:

- React, Next.js, Node.js, TypeScript, PHP, Laravel, Express, or Fastify ships a major release.
- A security release changes required behavior.
- An ORM or database introduces a major migration.
- The team repeatedly encounters the same code-review issue.
- A pattern proves too complex or insufficient.
- Deployment architecture changes.

### 63.1 Update process

1. Read official release notes and migration guides.
2. Verify stable/LTS status.
3. Test the change in a representative project.
4. Update the baseline and affected rules.
5. Add a changelog entry.
6. Communicate breaking rule changes.

### 63.2 Changelog

| Date | Change |
|---|---|
| 2026-08-03 | Rebuilt as a full engineering constitution covering frontend, backend, algorithms, React, Next.js, Node.js, Express, Fastify, PHP, Laravel, SQL/NoSQL databases, Prisma, Drizzle, Eloquent, testing, security, and agent workflow. |

---

## 64. Official Source Register

Agents SHOULD prefer version-matched official documentation and primary standards. Core sources for this document include:

### Frontend

- React documentation and React version/release pages.
- Next.js App Router, Server/Client Components, data security, authentication, caching, production, BFF, and AI-agent documentation.
- TypeScript Handbook and current release notes.
- TanStack Query documentation for query keys, defaults, and query options.
- React Hook Form documentation.
- Zod documentation.
- Redux Toolkit documentation.
- Zustand documentation.
- Testing Library principles.
- Playwright best practices.
- Vitest documentation.

### Backend

- Node.js release and security documentation.
- Express 5 documentation and migration guide.
- Fastify validation, serialization, plugins, lifecycle, and testing documentation.
- PHP supported versions and PHP language documentation.
- PSR-4 and PSR-12 standards.
- Laravel 13 validation, authorization, Eloquent, queues, testing, and deployment documentation.

### Data and security

- PostgreSQL current documentation.
- MySQL 8.4 documentation.
- MongoDB schema, indexing, and transaction documentation.
- Redis documentation.
- Prisma migration and transaction documentation.
- Drizzle schema, migration, relation, and transaction documentation.
- OWASP API Security Top 10.

### Source rule

Blog posts, tutorials, and AI-generated summaries MAY provide examples, but they MUST NOT override official documentation, standards, security advisories, or measured project behavior.

---

## 65. Project-Specific Overrides

Complete this section for each repository.

### 65.1 Project identity

```text
Project name:
Business domain:
Primary users:
Critical workflows:
```

### 65.2 Selected stack

```text
Frontend:
Backend:
Database:
ORM/query builder:
Authentication:
Queue:
Cache:
Hosting:
Package manager:
Runtime versions:
```

### 65.3 Architecture decisions

```text
Repository strategy:
Module boundaries:
API style:
Tenant model:
Authorization model:
Error contract:
Observability platform:
```

### 65.4 Folder overrides

Document only deliberate differences from this file.

### 65.5 Commands

```bash
# Install

# Development

# Lint

# Type/static analysis

# Unit/integration tests

# End-to-end tests

# Build

# Database migration
```

### 65.6 Additional project rules

Add business-specific invariants, naming, compliance, deployment, and testing rules here.

---

# Final Agent Instruction

Before implementing any task:

1. Understand the requested behavior.
2. Inspect the existing project and version-matched documentation.
3. Choose the smallest correct pattern.
4. Keep UI, orchestration, validation, domain behavior, and persistence clearly separated.
5. Follow feature locality and the preferred form/query structures in this file.
6. Protect every trust boundary.
7. Select data structures and algorithms based on actual operations and scale.
8. Test the behavior and report what was verified.

> Clean architecture is not the number of folders. It is how clearly a change can be understood, implemented, tested, secured, and operated without unexpected effects elsewhere.
