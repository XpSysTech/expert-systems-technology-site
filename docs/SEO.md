# Public-page SEO standard

## Purpose and scope

This document is the source of truth for technical and on-page SEO across the public Expert Systems Technology website. It applies to every indexable marketing, product, service, industry, company, insight, case-study, resource, and legal route.

These rules complement accessibility, content-accuracy, Angular, SSR, and prerendering requirements in `AGENTS.md` and `frontend/AGENTS.md`. They do not authorize claims that are unsupported by the approved company source material.

## Required page contract

Every public page must provide:

1. A unique, descriptive `<title>` that identifies the page and, where useful, the company.
2. A page-specific meta description that accurately summarizes the visible content and search intent.
3. One canonical URL using the configured public production origin and normalized route.
4. Exactly one clear primary `<h1>` describing the page's main subject.
5. Semantic landmarks and sectioning elements that communicate the document structure.
6. Descriptive internal links whose purpose is understandable without relying on nearby text.
7. Valid, page-relevant structured data when it materially helps search engines understand the visible content.
8. Prerendering for stable marketing and informational routes when compatible with the Angular rendering setup.

Do not publish placeholder metadata, duplicate canonicals, multiple competing primary headings, misleading schema, or indexable pages whose principal content is unavailable during server rendering.

## Titles and descriptions

- Define a unique title for every public route in `frontend/src/app/app.routes.ts` or through the established page-level SEO mechanism.
- Keep the title aligned with the visible `<h1>` while allowing concise brand context such as `| Expert Systems Technology`.
- Write descriptions for the specific page rather than reusing the site-wide company description.
- Keep titles and descriptions factual. Product-development pages must not imply that a product is generally available, and service metadata must reflect the services currently offered.
- Update title and description together when a page's primary purpose changes.

## Canonical URLs

- Emit exactly one `<link rel="canonical">` for each indexable public page.
- Build canonical URLs from a trusted, configured production origin and the normalized public route.
- Do not derive the production origin directly from `Host`, forwarded-host headers, or other untrusted request values.
- Remove tracking parameters, fragments, duplicate trailing slashes, and other non-content URL variants from the canonical.
- Redirect obsolete aliases where practical. If an alias must render, its canonical must point to the preferred route.
- Non-indexable error, preview, filtered, or user-specific states must not canonicalize to an unrelated public page.

## Headings and semantic structure

- Render exactly one primary `<h1>` per page.
- Use heading levels to represent hierarchy, not visual size. Do not skip levels solely for styling.
- Use `main` for the primary document content and appropriate `header`, `nav`, `section`, `article`, `aside`, and `footer` elements for meaningful structure.
- Give sections accessible names when the heading is not already sufficient.
- Keep important explanatory content in text, not only in images, CSS decoration, or client-only interactions.

## Internal links

- Prefer link text that names the destination or action, such as “Explore Managed Web Services” or “Read the healthcare case study.”
- Avoid ambiguous standalone text such as “click here,” “learn more,” or repeated “read more” links.
- When a concise repeated label is visually necessary, provide an accessible name that includes the destination subject.
- Use real Angular router links for navigable destinations. Do not use buttons, click handlers, or inert placeholders as substitutes for links.
- Keep important pages reachable through logical navigation and contextual links; do not rely only on the XML sitemap.

## Structured data

Add JSON-LD only when the schema accurately represents content visible on the page.

Appropriate types may include:

- `Organization` and `WebSite` for the primary site identity;
- `BreadcrumbList` for visible hierarchical navigation;
- `Article` or a more specific article type for published insight content;
- `Service` for an actually offered service;
- `Product` for a genuine product page, with development status represented truthfully and without unsupported `Offer` data; and
- `FAQPage` only when the corresponding questions and answers are visibly rendered and the schema remains appropriate under current search-engine policies.

Requirements:

- Structured data must match the rendered title, description, canonical URL, organization name, dates, authorship, availability, and page content.
- Do not invent reviews, ratings, prices, offers, availability, authors, dates, locations, or business identifiers.
- Use absolute URLs based on the configured public origin.
- Render deterministic JSON-LD during SSR/prerendering; do not depend on browser-only state.
- Add focused tests for schema generation and escaping when structured data is introduced or changed.

## Angular rendering and prerendering

- Keep stable public marketing and informational routes compatible with SSR and the configuration in `frontend/src/app/app.routes.server.ts`.
- Preserve deterministic output during prerendering. Guard access to `window`, `document`, storage, observers, and other browser-only APIs.
- Titles, descriptions, canonicals, primary content, and structured data must be present in the prerendered or server-rendered response rather than added only after client hydration.
- Routes that depend on user-specific or request-specific data may use a different render mode when justified.
- If a public marketing route cannot be prerendered, document the technical reason near the route configuration and preserve server rendering where possible.
- Run the production frontend build after route or rendering changes and confirm the expected stable routes are prerendered.

## Indexing controls and discovery

- Indexable pages should return a successful status and contain their principal content without requiring client interaction.
- Use `noindex` deliberately for pages that should not appear in search; do not use it to conceal broken or incomplete public pages.
- Keep `robots.txt`, XML sitemaps, canonical URLs, redirects, and route availability consistent when those files or systems are introduced or changed.
- Exclude internal search results, private views, temporary previews, and user-specific states from the sitemap.
- Do not block required CSS, JavaScript, images, or other assets needed to understand rendered public pages.

## Social metadata

SEO and social previews are related but distinct. For independently shareable public pages, provide accurate Open Graph and X metadata when supported:

- title and description consistent with the page;
- canonical public URL;
- an appropriate preview image with descriptive alternative text where the platform supports it; and
- article-specific metadata for published insight content when applicable.

Do not let social metadata contradict canonical SEO metadata or visible page content.

## Validation checklist

For every new or materially changed public page, verify:

- [ ] the route has a unique title;
- [ ] the meta description is present, unique, and accurate;
- [ ] exactly one canonical URL points to the preferred production route;
- [ ] exactly one clear `<h1>` is rendered;
- [ ] headings and semantic sections form a coherent document outline;
- [ ] internal links have descriptive visible text or accessible names;
- [ ] structured data, when present, is valid and matches visible content;
- [ ] metadata and primary content are available during SSR/prerendering;
- [ ] the route is included in prerender output when appropriate;
- [ ] aliases, redirects, robots directives, and sitemap entries remain consistent; and
- [ ] focused tests and the production frontend build pass.

## Exceptions

An exception must be narrowly scoped and documented with:

- the affected route;
- the requirement that cannot currently be met;
- the technical or product reason;
- the user and search impact; and
- the intended remediation or review condition.

Exceptions must not weaken the requirements for unrelated pages.
