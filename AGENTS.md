# Repository Guide

## Scope and precedence

This file applies to the whole repository. More specific instructions in `frontend/AGENTS.md` and `backend/AGENTS.md` take precedence for files in those directories.

## Repository map

- `frontend/` — Angular 22 standalone application, statically rendered for production.
- `backend/` — ASP.NET Core 10 API organized into Domain, Application, Infrastructure, and Api projects.
- `cloudflare/` — Cloudflare Worker entry point that serves frontend assets and handles/proxies `/api` traffic.
- `wrangler.jsonc` — Cloudflare deployment, asset, route, and observability configuration.
- `package.json` — repository-level build, test, preview, and deployment commands.

The Help Me services listing in `frontend/src/app/features/products/help-me/` is the reference for feature organization: group code by business capability, keep pages explicit, and colocate each component's TypeScript, HTML, SCSS, and test files.

## Working agreements

- Make the smallest coherent change and preserve unrelated work in the tree.
- Follow the existing architecture before introducing a new abstraction, package, or directory convention.
- Keep contracts synchronized across the Angular client, Worker boundary, and ASP.NET API.
- Never commit secrets. Treat `.dev.vars`, local appsettings overrides, tokens, and production identifiers as sensitive.
- Do not edit generated output or dependencies: `node_modules/`, `frontend/dist/`, `bin/`, `obj/`, coverage output, or generated lockfiles unless dependency changes require them.
- Update tests with behavior changes. Prefer focused tests during development and the full relevant suite before handoff.
- Keep user-facing content accessible, responsive, and suitable for static rendering; do not assume browser globals are available during SSR/build-time rendering.

## Common commands

Run these from the repository root:

```powershell
npm run build
npm test
npm run build:frontend
npm run test:frontend
npm run build:backend
npm run test:worker
npm run preview
```

When changing only one area, run its focused checks first. Before completing a cross-cutting change, run the root build and test commands that exist and report any pre-existing or unrelated failures clearly.

## Definition of done

- The affected project builds without new warnings or errors.
- Relevant automated tests pass and new behavior has meaningful coverage.
- Public/API contract changes are reflected on both sides of the boundary.
- Configuration and documentation are updated when commands, environment variables, routes, or deployment behavior change.
- No secrets, generated artifacts, debugging code, or placeholder implementations were added accidentally.
