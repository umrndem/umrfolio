# Maintainer handoff

**Last reviewed:** 24 July 2026

## What this site is

Muhammad Umar Nadeem’s evidence-backed personal portfolio. It presents six
selected software/data projects through problems, systems, proof, and explicit
claim boundaries.

It is a Next.js App Router application maintained directly through the
repository. There is no CMS, database, admin panel, authentication, analytics,
or remote content service.

## What is complete

- Responsive homepage with introduction, technical range, selected work,
  experience, approach, education, and contact.
- Six statically generated project case-study routes.
- Dedicated privacy-gated `/acknowledgements` route linked quietly from the
  shared footer base.
- Typed content split by editing responsibility, including optional project
  `deployment`, `integrations`, and `infrastructureNote` fields.
- Explicit featured/supporting/hidden and
  public/private-case-study/confidential project states.
- Conditional profile portrait, résumé link, project covers, and project
  galleries.
- Content validation for required fields, slugs, visibility rules, URLs, ranges,
  alt text, dimensions, referenced files, and mapped technology icon files.
- Clean leather-maroon light/dark system with saved preference and pre-paint
  initialization.
- Restrained scroll motion: IntersectionObserver-gated range fills, one-shot
  section/approach reveals, and light project-card hover feedback.
- Global/project metadata, generated Open Graph image, favicon, Person JSON-LD,
  sitemap, and robots route.
- Linting, strict type checking, content-integrity tests, production build, and
  dependency audit workflow.
- Maintenance, privacy, troubleshooting, and release documentation.

## Where content lives

| Content | File |
|---|---|
| Profile, education, email, socials, portrait, résumé | `src/content/profile.ts` |
| Approved acknowledgement copy, privacy states, order | `src/content/acknowledgements.ts` |
| Navigation and homepage section IDs | `src/content/navigation.ts` |
| Homepage introduction, experience, approach, foundation, footer / contact form copy | `src/content/home.ts` |
| Project list, order, case studies, periods, publication status, technologies, deployment, integrations, media | `src/content/projects.ts` |
| Technology logo map | `src/content/technology-icons.ts` |
| Global titles, descriptions, availability | `src/content/site-settings.ts` |
| Shared content types | `src/content/types.ts` |
| Content/publication validation | `src/content/validation.ts` |

`portfolio-source-of-truth.md` remains the canonical human-provided factual
profile. Content files are the current public rendering model, not permission to
expand claims.

## Where styles live

All semantic tokens, layouts, component styles, responsive rules, focus, and
motion are in:

```text
src/app/globals.css
```

Light tokens use `:root`; dark values override the same roles under
`:root[data-theme="dark"]`.

Read `docs/design-system.md`, `docs/brand-identity.md`, and
`docs/theme-maintenance.md` before changing visuals.

## Where the project listing is controlled

`allProjects` in `src/content/projects.ts` controls:

- homepage order;
- featured/supporting treatment;
- visibility/publication;
- card copy;
- next-project sequence.

The filtered `projects` export excludes hidden/confidential entries. Homepage,
routes, sitemap, and next-project navigation must use that filtered export.

The first published project receives the strongest maroon lead treatment through
the positional surface scale (`data-surface="1"`), not because of its name.
Keep the intended lead project first in `allProjects`. Card colors spread across
six opacity stops of one lead red so only the final visible card is the lowest tint.

## Where case studies live

Case-study content is the `sections` array inside each project entry.

The shared renderer is:

```text
src/app/work/[slug]/page.tsx
```

Adding a published project object automatically adds `/work/<slug>` through
`generateStaticParams()`.

## How themes work

`src/systems/theme.ts` contains the storage key and pre-paint bootstrap.
`src/components/ThemeToggle.tsx` controls manual selection. `layout.tsx` injects
the bootstrap in `<head>`, and `globals.css` supplies both palettes.

First visit follows system preference. A manual choice is saved in localStorage
and wins on later loads. Live OS preference changes are not observed while the
page is already open.

## How deployment works

The site is live on Cloudflare Workers at `https://umrndem.com` (Worker name
`umrfolio`; `umrfolio.umrndem.workers.dev` remains a secondary URL) via the
OpenNext adapter (`wrangler.jsonc`, `open-next.config.ts`, `public/_headers`).
Workers Builds deploys every push to `main` using
`npx opennextjs-cloudflare build` + `npx wrangler deploy` (build command set in
the Cloudflare dashboard). The build contract is:

```bash
npm install
npm run check
npm run preview   # Worker bundle served locally in workerd
npm run deploy    # only with explicit user authorization
```

The canonical origin is the default inside `getSiteUrl()`
(`src/content/site-settings.ts`); `NEXT_PUBLIC_SITE_URL` overrides it when a
different origin is needed for audits. Read `docs/deployment.md` for rollback
and domain procedures.

Do not push or deploy without user permission — pushes to `main` deploy to
production automatically.

## What remains unfinished

Content/approval:

- approved real profile photograph;
- approved final résumé PDF;
- approved sanitized ETS/Sentinel media;
- final lead choice between ETS Website and Sentinel;
- academic year/semester conflict;
- contribution split confirmation for collaborative work;
- safe Snakinesis demo media;
- whether Sentinel and DataPulse deployments remain live / which URLs may publish;

Product/craft:

- review final portrait crop when supplied;
- evaluate route-level social images only after approved media exists;
- validate final voice/project emphasis with Umar;
- reassess whether the technical range reads as an axis rather than a skill
  score.

## Known technical debt and deliberate limits

- Automated tests cover content/asset integrity and documentation paths only;
  there is no unit, integration, visual-regression, or end-to-end suite.
- `next/font/google` may require network access on an uncached production build.
- No redirect map exists for changed project slugs.
- Project sections support a title plus one body paragraph; richer blocks should
  be added only when real case-study content needs them.
- System theme changes are read at load, not subscribed live.
- Unused public assets require manual review; validation catches missing
  referenced assets but does not guess whether an unreferenced file is safe to
  delete.
- The strongest project-card treatment remains tied to first published order,
  which is documented but should be reconsidered if project ordering becomes
  more dynamic.

These are not reasons to introduce a CMS or large framework.

## Important privacy constraints

- ETS Website and Sentinel are private professional work.
- Sentinel includes HSEQ/medical workflow concepts and requires the strictest
  sanitization.
- Never expose private source, credentials, internal URLs, employee/company/
  customer/medical records, realistic internal sample data, or security-sensitive
  detail.
- Everything under `public/` is anonymously reachable after deployment.
- Matootoo relationship content, private media, archive/corpus, and analysis are
  excluded.
- Acknowledgements must follow `docs/acknowledgements.md`; do not infer names,
  relationships, or wording from private material or repository history.
- Never invent metrics, outcomes, roles, contribution splits, or production
  claims.
- New professional assets/content require Umar’s explicit approval.

Use `docs/privacy-and-publication.md` as the mandatory publication gate.

## First five files to read

1. `README.md` — commands and navigation.
2. `portfolio-source-of-truth.md` — canonical human facts and boundaries.
3. `docs/privacy-and-publication.md` — mandatory publication rules.
4. `docs/architecture.md` — how content reaches routes/assets/metadata.
5. `docs/content-management.md` — normal update procedures.

Then use `docs/file-map.md` and the task map in `AGENTS.md`.

## First takeover commands

```bash
git status --short
git log -5 --oneline
npm install
npm run check
npm audit --omit=dev
```

Start the local site with `npm run dev`, then inspect the homepage and one
public/private-sanitized project route in both themes.

## Documentation index

- Architecture: `docs/architecture.md`
- File map: `docs/file-map.md`
- Content updates: `docs/content-management.md`
- Project model: `docs/project-content-guide.md`
- Assets: `docs/assets-guide.md`
- Design: `docs/design-system.md`
- Theme: `docs/theme-maintenance.md`
- SEO/metadata: `docs/seo-and-metadata.md`
- Development workflow: `docs/development-workflow.md`
- Deployment: `docs/deployment.md`
- Privacy: `docs/privacy-and-publication.md`
- Acknowledgements: `docs/acknowledgements.md`
- Troubleshooting: `docs/troubleshooting.md`
- Decisions: `docs/decisions.md`
- Checklists: `docs/checklists/`

Historical discovery/evidence documents remain useful inputs, but they do not
override the source of truth or this live implementation map.
