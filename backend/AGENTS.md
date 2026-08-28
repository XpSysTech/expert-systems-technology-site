# Backend Guide

## Architecture and dependency direction

The backend targets .NET 10 and follows a Clean Architecture project split:

- `XpSys.PublicWebsite.Domain` — entities, value objects, domain rules, events, and domain exceptions; no dependencies on other solution projects or infrastructure frameworks.
- `XpSys.PublicWebsite.Application` — use cases, commands/queries, interfaces, DTO mapping, and validation; depends on Domain.
- `XpSys.PublicWebsite.Infrastructure` — persistence and external-service implementations; depends on Application and Domain.
- `XpSys.PublicWebsite.Api` — HTTP endpoints, request/response contracts, middleware, composition, and dependency injection; depends on Application and Infrastructure.
- `tests/` — one test project corresponding to each production project.

Keep dependencies pointing inward. Domain and Application must not reference Api or Infrastructure. Define external capabilities as Application interfaces and implement them in Infrastructure.

## Implementation conventions

- Enable and respect nullable reference types and implicit usings. Treat nullable warnings as design feedback rather than suppressing them broadly.
- Use async APIs end-to-end for I/O and accept/propagate `CancellationToken` on request-driven operations.
- Keep controllers/endpoints thin: validate transport concerns, invoke an Application use case, and map the result to an HTTP response.
- Keep API contracts separate from domain entities. Do not expose persistence models or bind requests directly to domain objects.
- Put business invariants in Domain and orchestration in Application; avoid business logic in controllers, DI registration, or Infrastructure repositories.
- Use dependency injection and typed options for configuration. Never read secrets from source-controlled files or hard-code environment-specific endpoints.
- Return consistent, standards-based errors (prefer Problem Details), appropriate status codes, and no internal exception details.
- Preserve correlation IDs and structured logging. Do not log credentials, tokens, personal data, or complete sensitive request bodies.
- Make schema and external-contract changes backward compatible when practical; document intentional breaking changes.
- Remove template artifacts such as `WeatherForecast` and `Class1` when replacing them with real functionality rather than building production features around placeholders.

## Testing

- Mirror production namespaces and feature organization in the matching test project.
- Domain tests should exercise invariants without infrastructure.
- Application tests should cover use-case outcomes and mock external ports only.
- Infrastructure tests should verify adapters and persistence behavior against realistic boundaries where feasible.
- API tests should verify routing, validation, serialization, status codes, error shapes, and dependency wiring.
- Name tests to communicate the scenario and expected outcome; keep Arrange/Act/Assert easy to scan.

Run from `backend/`:

```powershell
dotnet restore XpSys.PublicWebsite.slnx
dotnet build XpSys.PublicWebsite.slnx --no-restore
dotnet test XpSys.PublicWebsite.slnx --no-build
```

For container-related changes, also verify that `Dockerfile` publishes the API successfully and that the service listens on port `8080` as configured.

## API boundary

- Coordinate contract changes with the Angular models/services and the Cloudflare `/api` routing behavior.
- Validate all untrusted input at the boundary and enforce authorization in the backend even if the frontend hides an action.
- For listing/search endpoints inspired by Help Me, define stable filtering, sorting, and pagination semantics; avoid returning unbounded collections.
