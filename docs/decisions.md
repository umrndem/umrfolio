# Architectural decisions

This is a concise record of decisions that materially affect future maintenance.
Add an entry when a change alters content ownership, routing, privacy enforcement,
deployment, or a major technical boundary. Visual rationale belongs in the
design documents instead.

## 001 — The repository is the content-management system

**Status:** accepted
**Date:** 24 July 2026

Portfolio content is maintained through reviewed repository changes. The site
does not use a database, CMS, admin panel, authentication, or remote content API.
Typed TypeScript remains readable for a developer and integrates directly with
the build.

## 002 — Content is split by editing responsibility

**Status:** accepted
**Date:** 24 July 2026

Profile/socials, navigation, homepage narrative, projects, and global site
settings use separate modules under `src/content/`. Shared types and validation
remain adjacent. This removes common duplicate sources while avoiding one file
per sentence or a generic content framework.

## 003 — Publication safety is part of the project model

**Status:** accepted
**Date:** 24 July 2026

Projects declare both display prominence and visibility. Hidden and confidential
entries are excluded from cards, generated routes, sitemap entries, and
next-project navigation. Confidential entries must also be hidden, and validation
rejects unsafe combinations.

## 004 — Validation is lightweight and build-adjacent

**Status:** accepted
**Date:** 24 July 2026

A small TypeScript validator checks content invariants, URL safety, alt text,
asset paths, and file existence. It runs through `npm test` and `npm run check`.
The project uses `tsx` only to execute this maintenance script; a schema framework
would add more indirection than value at the current scale.

## 005 — Search metadata derives from the same public model

**Status:** accepted
**Date:** 24 July 2026

Global metadata comes from `site-settings.ts`, project metadata comes from the
project model, and sitemap routes come from the filtered published-project
export. This prevents hidden or confidential work from leaking through a
separate route list.

## 006 — Project stack is split into core, deployment, and integrations

**Status:** accepted
**Date:** 24 July 2026

Projects keep a required `technologies` core-stack list and may optionally
declare `deployment` (managed platforms / hosted databases / object storage)
and `integrations` (for example Turnstile). Homepage cards flow all badges on
one line, rendering deployment/integration badges in quieter styling after the
core stack when present. Case studies label the
three categories and may include a concise `infrastructureNote`. This keeps
managed-service facts visible without merging them into the application stack
or inventing DevOps expertise.

## 007 — Selected Work card surfaces are positional

**Status:** accepted
**Date:** 24 July 2026

Homepage project-card backgrounds use a six-stop opacity scale of one lead red
(`#c90f16`) over the page ground, driven by each card’s index and the published
project count (`src/content/project-surfaces.ts`, `data-surface` / `data-ink`).
Colors are not keyed to project names. The first card is solid lead red; only
the final visible card uses the lowest-opacity stop. Intermediate cards stay
visibly red-tinted and mutually distinguishable by opacity alone — no separate
shade hexes that drift into salmon, peach, beige, brown, mauve, or purple.

## 008 — Contact form lives in the footer with a stub mail API

**Status:** accepted
**Date:** 25 July 2026

The Contact navigation target remains `#contact` on the deep-maroon footer. A
client form posts to `/api/contact`, which validates input and currently returns
stub success without sending mail. A honeypot field discourages trivial bots.
When a custom domain is live, wire a server-only mail provider through
non-public environment variables. Keep the direct `mailto:` fallback.

## 009 — Scroll motion stays one-shot and explanatory

**Status:** accepted
**Date:** 25 July 2026

Homepage motion uses IntersectionObserver for range-line fills and restrained
section/approach reveals. Prefer final-state-first behavior under
`prefers-reduced-motion`. Do not port ETS Website scroll engines (sticky SVG
morph, Three.js scrub, coverflow, deck flip, 3D marquee, snap sections, peel
hero, or evidence count-ups).

## 010 — Acknowledgements are a separate privacy-gated route

**Status:** accepted
**Date:** 25 July 2026

Acknowledgements live in a dedicated typed module and render at
`/acknowledgements`. The shared footer exposes a quiet utility link; the page is
not part of primary navigation and does not interrupt the homepage or contact
CTA. Public display forms and privacy states require explicit approval recorded
in `docs/acknowledgements.md`. The content validator enforces unique IDs and
ascending order, while privacy review—not inference—controls identification.

The page sequence is editorial hero → faith foundation panel → continuous
uniform acknowledgement list → closing panel → standard footer.

## 011 — Project range values identify exact areas

**Status:** accepted
**Date:** 27 July 2026

A project’s `range` is an ordered non-empty list of the exact areas supported by
its evidence, not a start/end interval. `RangeLine` marks only those listed
waypoints, so selecting data and people does not silently claim databases or
product. Adjacent selected waypoints share an active line segment; unsupported
gaps remain neutral. Validation enforces uniqueness and the shared axis order.

## 012 — The site targets Cloudflare Workers through OpenNext

**Status:** accepted
**Date:** 31 July 2026

The repository is configured for Cloudflare Workers using
`@opennextjs/cloudflare` (build/deploy tooling in `devDependencies`, so
`npm audit --omit=dev` reflects only shipped runtime code). `wrangler.jsonc`
defines the Worker (`nodejs_compat`, assets binding); `open-next.config.ts`
uses the read-only static-assets incremental cache with cache interception
because every route is prerendered — the prerendered `/work/<slug>` pages 404
on Workers without it. `public/_headers` marks `/_next/static/*` immutable.
Adding ISR/revalidation later requires a writable cache (R2/KV) and a queue
per the OpenNext caching guide. Configuration is verified locally in `workerd`
via `npm run preview`.

## 013 — Production runs on Workers Builds with the origin baked into code

**Status:** accepted
**Date:** 31 July 2026
**Updated:** 6 August 2026

The site is live at `https://umrndem.com` on Worker `umrfolio` (repository
`umrndem/umrfolio`); `https://umrfolio.umrndem.workers.dev` remains a secondary
Workers URL. Workers Builds deploys every push to `main` with
`npx opennextjs-cloudflare build` + `npx wrangler deploy`; the build command
is dashboard configuration, not repository code. The canonical origin is the
hardcoded default inside `getSiteUrl()` rather than a dashboard build
variable, so metadata, sitemap, and robots stay correct with zero platform
configuration; `NEXT_PUBLIC_SITE_URL` remains an override for audits or
temporary alternate hosts. `next.config.ts` calls
`initOpenNextCloudflareForDev()` so `next dev` resolves the Cloudflare
context the same way the deployed Worker does.

## 10 November 2026 — Keep claim-review notes out of public copy

At Umar’s request, case studies show a factual overview instead of an evidence
boundary panel. The existing required `limitation` field stays in the content
model for maintainer review and validation, without rendering it in the public
interface. Relevant availability and collaboration facts stay in project status,
context, or narrative. Publication filters and factual boundaries are unchanged.
