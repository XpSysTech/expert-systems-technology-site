# Domain Layer Guide

## Scope and dependency boundary

These rules apply to `XpSys.PublicWebsite.Domain/**` and refine `backend/AGENTS.md`. Domain is the innermost layer and contains the business model and invariants.

Domain must not depend on ASP.NET Core, Entity Framework Core, a database provider, HTTP/serialization, authentication implementations, Infrastructure, API composition, Angular, networking, or deployment/runtime frameworks. Do not weaken the model or add a framework dependency merely to simplify persistence or transport.

## Domain modelling

- Use business language for entities, aggregate roots, value objects, domain services, events, policies, typed identifiers, and lifecycle state.
- Keep invalid states difficult to construct. Protect aggregate invariants through intention-revealing methods instead of public setters or generic mutation methods.
- Do not expose mutable internal collections. Persistence convenience does not justify bypassing invariants.
- Use value objects when value equality, repeated validation, or stronger type safety materially improves the model; do not wrap primitives without a concrete benefit.
- Use domain services only for genuine domain behavior that does not naturally belong to one entity/value object.
- Name domain events as facts that occurred. Events describe domain outcomes and never send messages, publish HTTP/realtime data, or call external infrastructure directly.
- Keep protocol formatting, DTO shape, query parsing, UI validation, and persistence mapping outside Domain.
- Use UTC for cross-system/system timestamps unless the domain explicitly defines local-time semantics. Use an injectable/established time abstraction when deterministic behavior matters.
- Follow one established result/error style; do not introduce a parallel exception hierarchy or use exceptions as ordinary control flow without a concrete need.

## Verification

Domain tests should demonstrate valid transitions, rejected invalid transitions, invariant preservation, value-object equality/validation, and domain-event emission where relevant. Do not test framework details here.

Before completion, verify no outer-layer dependency was introduced, mutation surfaces remain intentional, terminology reflects the business, and relevant Domain and architecture tests pass.
