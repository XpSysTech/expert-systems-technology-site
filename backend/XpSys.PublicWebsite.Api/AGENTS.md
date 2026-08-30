# API Layer Guide

## Scope and role

These rules apply to `XpSys.PublicWebsite.Api/**` and refine `backend/AGENTS.md`. The API is the ASP.NET Core transport and composition boundary: startup, dependency injection, HTTP endpoints/controllers, middleware, authentication and authorization composition, request/response mapping, Problem Details, OpenAPI, health checks, and transport-specific validation belong here.

Domain rules, use-case orchestration, persistence logic, and external-service implementations do not belong here.

## Endpoints and HTTP behavior

- Keep endpoints thin: parse transport input, obtain the authenticated caller from trusted server context, authorize, invoke one Application use case, then map its result to HTTP.
- Never access persistence directly from controllers, implement domain transitions in transport code, trust client-supplied identity/roles/ownership, or return persistence/domain entities as public responses.
- Use HTTP methods and status codes intentionally. Distinguish invalid requests (`400`), unauthenticated callers (`401`), forbidden access (`403`), absent or intentionally concealed resources (`404`), conflicts (`409`), and unexpected server failures (`5xx`).
- Use the established Problem Details shape. Do not expose stack traces, SQL/provider details, configuration, or internal exception messages.
- Bound and validate IDs, pagination, sorting/filtering fields, search terms, redirects/URLs, uploads, and request sizes. Frontend validation is not a security boundary.
- Keep OpenAPI-visible request, response, and status behavior accurate and assess compatibility before changing an existing contract.

## Security and operations

- Authentication establishes identity; authorization establishes permission. Enforce ownership and resource-level access server-side.
- CORS is not authentication. Avoid permissive production CORS and review CSRF if cookie authentication is introduced.
- Preserve intentional middleware order, especially exception handling, routing, CORS, authentication, authorization, and rate limiting.
- Use structured logs and correlation/request identifiers. Never log authorization headers, tokens, credentials, secrets, or sensitive request bodies.
- Consider existing rate/abuse controls for expensive, scrapeable, spam-prone, or brute-forceable endpoints without inventing unrelated infrastructure.

## Verification

Use API tests for routing, model binding, serialization, status codes, Problem Details, authentication/authorization, middleware, OpenAPI-critical behavior, and dependency wiring. Before completion, verify that transport code remains thin, input is bounded, authorization is server-enforced, errors are safe, and affected API tests pass.
