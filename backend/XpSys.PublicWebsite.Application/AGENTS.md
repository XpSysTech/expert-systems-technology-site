# Application Layer Guide

## Scope and dependency boundary

These rules apply to `XpSys.PublicWebsite.Application/**` and refine `backend/AGENTS.md`. Application coordinates use cases and depends only on Domain plus deliberately shared contracts if such a project is introduced.

Application must not depend on ASP.NET/HTTP context, concrete EF Core or database-provider implementations, Infrastructure, API composition, or runtime/deployment concerns. Consume persistence and external capabilities through meaningful interfaces that describe application needs rather than mirroring an implementation API.

## Use cases

- Give each use case one focused responsibility and make caller, input, authorization, target resource, domain action, side effects, and result explicit.
- Keep domain invariants in Domain. Application owns orchestration, use-case validation, resource lookup, transaction boundaries, permission checks requiring application context, and mapping across boundaries.
- Never treat a client-supplied user or ownership identifier as authority. Resolve identity from trusted server context and evaluate ownership/resource permission explicitly.
- Avoid generic repositories that merely reproduce `DbSet`/LINQ. Expose the minimum query or persistence capability the use case needs.
- Define transactions around genuine consistency requirements. Consider failure, idempotency, retries, and duplicate side effects when database changes and external actions are combined.
- Use asynchronous I/O, propagate `CancellationToken`, and never block with `.Result`, `.Wait()`, or equivalent patterns.
- Map validation, not-found, forbidden, conflict, domain-rule, and infrastructure failures deliberately without leaking provider exceptions outward.
- Review audit requirements for security- or business-significant workflows; diagnostic logs are not an audit trail.

## Verification

Use Application tests for orchestration, validation, permission mapping, result/error behavior, cancellation, and interactions through inner-layer interfaces. Use integration tests when correctness depends on database translation, transaction semantics, authentication middleware, HTTP wiring, or a real adapter.

Before completion, verify no outer implementation details leaked inward, authorization is explicit, domain invariants stayed in Domain, retry/idempotency behavior is safe, and relevant tests pass.
