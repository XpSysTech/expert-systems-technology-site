# Frontend Guide

## Architecture

This directory contains an Angular 22 standalone application using SCSS, Vitest, and static output with an SSR entry point. Organize product work by feature under `src/app/features/`; shared, reusable UI belongs in `src/shared/components/` or the established shared area nearest its consumers, while application-wide services, interceptors, models, directives, and pipes belong under `src/app/core/`, `src/app/models/`, and `src/app/shared/`.

Use `src/app/features/products/help-me/` as the feature-shape reference:

- Put route-level views in `pages/<page-name>/`.
- Put feature-only reusable UI in `components/<component-name>/`.
- Colocate `<name>.ts`, `<name>.html`, `<name>.scss`, and `<name>.spec.ts`.
- Keep product-specific content and behavior inside the product feature; promote code to shared only after it has a genuine cross-feature use.

## Angular conventions

- Use standalone components and list template dependencies explicitly in `imports`.
- Follow the repository naming style: kebab-case paths, concise class names, `app-` selectors, `templateUrl`, and `styleUrl`.
- Prefer typed inputs, outputs, models, and service responses. Avoid `any`; narrow `unknown` at boundaries.
- Keep components presentation-focused. Put API access and cross-page state in injectable services.
- Prefer Angular signals and derived state for local reactive UI where they simplify the code; use RxJS for asynchronous streams and cancellation.
- Add routes through the established route configuration and lazy-load feature/page code where practical.
- Preserve static-rendering compatibility. Guard access to `window`, `document`, storage, observers, and other browser-only APIs.
- Use semantic HTML, keyboard-operable controls, visible focus states, associated labels, useful alt text, and sufficient color contrast.
- Reuse existing design tokens and shared components before adding one-off styling. Keep component SCSS scoped and within configured style budgets.
- Do not duplicate source trees or create parallel shared-component conventions; follow the closest established structure and consolidate only as a deliberate refactor.

## Tests and validation

- Keep a colocated Vitest spec for every component, service, pipe, directive, and interceptor with behavior worth testing.
- Test observable behavior and contracts rather than private implementation details. Include loading, empty, error, and accessibility-relevant states when applicable.
- Use Angular TestBed for Angular units and mock only external boundaries.
- Run from this directory:

```powershell
npm test -- --watch=false
npm run build
```

For visual changes, inspect representative desktop and mobile layouts and check that static rendering completes without hydration/browser-global errors.

## Content and API changes

- Keep product terminology consistent with existing Help Me and other product pages.
- Put shared API behavior in `src/app/core/services/` and interceptors; do not scatter base URLs, headers, or error mapping across components.
- Update TypeScript models whenever backend request or response contracts change, and cover serialization assumptions in tests.
