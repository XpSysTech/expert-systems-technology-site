# Backend Tests Guide

## Scope and purpose

These rules apply to `backend/tests/**` and refine `backend/AGENTS.md`. Tests provide evidence for specified behavior; a green suite alone is not a security or production-readiness claim.

Choose the lowest test layer that proves the risk without mocking the boundary under test:

| Risk or behavior | Preferred evidence |
| --- | --- |
| Entity invariant or lifecycle transition | Domain unit test |
| Use-case orchestration, validation, permission, or result mapping | Application unit test |
| Persistence adapter, relational constraint, query translation, transaction, or migration | Infrastructure/integration test using the real relational provider when relevant |
| Routing, model binding, serialization, Problem Details, authentication, authorization, or DI | API integration/functional test |
| Dependency direction | Architecture test |

## Test design

- Mirror production feature namespaces and keep tests in the matching test project.
- Name tests by scenario and expected outcome. Keep Arrange/Act/Assert clear and test observable behavior rather than private implementation details.
- For defects, first add the smallest practical regression test, confirm it fails for the intended reason, implement the fix, then run surrounding risk-appropriate suites.
- Cover positive, negative, boundary, and authorization cases. Resource access needs cross-user/ownership denial tests where applicable.
- Do not delete, skip, loosen assertions, over-mock, or change production security merely to make a test pass.
- Do not use EF Core InMemory as evidence for relational constraints, transactions, migrations, SQL translation, or provider-specific behavior.
- Use synthetic identities and isolated disposable data. Never use real personal data, production credentials, tokens, or payment details.
- Keep tests deterministic: inject clocks/randomness/external adapters, avoid arbitrary sleeps and test ordering, bound eventual-consistency polling, and clean up only data owned by the test.
- Mock external boundaries in unit tests, not the behavior being proved. Integration tests should exercise the real boundary appropriate to their risk.

## Verification

Run the narrowest affected test project first, then broader tests when risk warrants it:

```powershell
dotnet test tests/XpSys.PublicWebsite.Domain.Tests/XpSys.PublicWebsite.Domain.Tests.csproj
dotnet test tests/XpSys.PublicWebsite.Application.Tests/XpSys.PublicWebsite.Application.Tests.csproj
dotnet test tests/XpSys.PublicWebsite.Infrastructure.Tests/XpSys.PublicWebsite.Infrastructure.Tests.csproj
dotnet test tests/XpSys.PublicWebsite.Api.Tests/XpSys.PublicWebsite.Api.Tests.csproj
dotnet test XpSys.PublicWebsite.slnx
```

Report commands not run, environmental blockers, flaky behavior, and remaining coverage risks honestly.
