# Infrastructure Layer Guide

## Scope and role

These rules apply to `XpSys.PublicWebsite.Infrastructure/**` and refine `backend/AGENTS.md`. Infrastructure implements persistence and external-system abstractions owned by inner layers. Business policy belongs in Domain/Application, not adapters.

Infrastructure may contain persistence contexts/configuration, migrations, repositories and queries, transaction implementations, identity/external-service adapters, auditing persistence, background integration code, and typed configuration bindings.

## Persistence and queries

- Express real invariants with primary/foreign keys, required columns, uniqueness, indexes, and justified checks without contradicting valid domain states.
- Keep filtering, ordering, pagination, projection, and aggregation in the database where practical. Avoid N+1 queries, full-table materialization, unbounded results, accidental cartesian expansion, broad `Include` graphs, and database round trips inside loops.
- Use no-tracking reads where appropriate and project only required data. Inspect translated/generated queries when performance is material.
- Use the configured relational provider's real semantics for provider-sensitive behavior; an in-memory provider is not proof of relational correctness.
- Scope reads and writes to authorized ownership/resource context. Do not trust caller-provided ownership IDs or fetch sensitive data broadly before authorization when the query can be safely scoped.

## Migrations, transactions, and adapters

- Use committed, reviewed migrations for schema changes; never substitute manual production edits or `EnsureCreated`.
- Do not rewrite a migration that may have been applied elsewhere without explicit authorization and a safe plan. Review drops, rename-as-drop/add, nullability/default/type changes, cascade behavior, data conversion/backfill, constraints, and index changes for data-loss risk.
- Keep transactions limited to genuine atomic consistency boundaries and avoid holding them across slow network calls. Choose concurrency behavior deliberately.
- External adapters use typed configuration, explicit timeouts, cancellation, bounded retry policy, and idempotency where duplicates are possible. Translate provider exceptions at the boundary.
- Never hard-code credentials, API keys, production URLs, connection strings, or hostnames. Validate critical options at startup where appropriate.
- Keep audit storage append-oriented according to the established design and exclude credentials, tokens, and unnecessary sensitive payloads.

## Verification

Use realistic integration tests for relational constraints, query translation, provider-specific types/functions, transactions, migrations, concurrency, and adapter behavior. Before completion, review query bounds/performance, migration destructiveness, data isolation, secret handling, audit impact, and relevant integration-test results.
