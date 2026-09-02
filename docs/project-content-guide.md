# Project and case-study content guide

Projects are typed objects in `src/content/projects.ts`. One entry controls the
homepage card, `/work/<slug>` route, metadata, sitemap inclusion, case-study
sections, technical tags, media, and next-project order.

The canonical contract is `Project` in `src/content/types.ts`. This guide explains
the intent behind each field; the type remains authoritative for syntax.

## Field reference

| Field | Required | Purpose and rules |
|---|---:|---|
| `slug` | Yes | Unique lowercase kebab-case route segment. Changing it changes the URL. |
| `title` | Yes | Public project name. Use an approved generic name if the real private name cannot publish. |
| `eyebrow` | Yes | Short context/category line above the title. Do not inflate role or maturity. |
| `summary` | Yes | Concise card and metadata description grounded in demonstrated work. |
| `context` | Yes | Employer/public/academic/collaboration context. Qualify uncertainty. |
| `period` | Yes | Public month/year or range grounded in repository or user evidence. Use “Present” for active work; do not infer completion from the latest commit. |
| `stage` | Yes | Human-readable current state such as “Versioned releases available.” Never imply production without evidence. |
| `display` | Yes | `"featured"`, `"supporting"`, or `"hidden"`. Controls prominence/publication. |
| `visibility` | Yes | `"public"`, `"private-case-study"`, or `"confidential"`. Controls publication boundary. |
| `range` | Yes | Exact non-empty set of supported areas on the declared systems programming → people axis, listed once each in forward order. |
| `technologies` | Yes | Non-empty, unique core-stack labels actually demonstrated. Primary badge row. |
| `deployment` | No | Unique managed platforms and hosted services (for example Vercel, Neon, R2). Omit when none. |
| `integrations` | No | Unique security/third-party integrations (for example Turnstile). Omit when none. Never list Turnstile under deployment. |
| `homepageTechnologies` | No | Curated subset shown on the homepage card only. Every label must already exist in `technologies`, `deployment`, or `integrations`. Case-study pages always show the full stack. |
| `infrastructureNote` | No | One concise factual infrastructure sentence for the case-study technical notes. |
| `proof` | Yes | Supported evidence statement rendered in the evidence boundary. |
| `limitation` | Yes | Explicit claim boundary, unknown, or missing proof. |
| `sections` | Yes | Ordered case-study sections with unique titles and non-empty body copy. |
| `liveUrl` | No | Approved public HTTPS deployment or preview link. Omit when liveness or publication permission is unresolved. |
| `repositoryUrl` | No | Public HTTPS repository link. Omit for private/confidential repositories. |
| `coverImage` | No | Validated homepage cover asset with path, alt, width, height, optional caption. |
| `gallery` | No | Ordered validated case-study images. |

Do not add optional fields solely to make the schema look comprehensive. Add a
new field when content exists and a component will render it.

Projects without `deployment`, `integrations`, or `infrastructureNote` remain
valid. Keep core technologies visually primary; quieter secondary badges flow
inline after the core stack only when those optional lists are present.

## Stack categories

| Field | Public label | Examples | Rules |
|---|---|---|---|
| `technologies` | Core stack | Next.js, PostgreSQL, Express | Required; demonstrated application stack |
| `deployment` | Deployment & services | Vercel, Neon, Cloudflare R2, Railway, Aiven | Managed platforms, hosted databases, object storage |
| `integrations` | Security & integrations | Turnstile | Security/bot/form verification and similar integrations |

Labels must be unique across the three lists for a project. Prefer exact names
that already exist in `src/content/technology-icons.ts` when a logo is desired.

## Technical-area classification

The five range points classify demonstrated project work:

| Area | Include when the evidence shows |
|---|---|
| `systems programming` | Operating-system, IPC, concurrency, memory, or similarly low-level systems work |
| `data` | Structured operational records, ingestion, transformation, analytics, forecasting, computer-vision signals, or other substantive data handling |
| `databases` | Persistent data-store integration, relational modelling, queries, transactions, or database-side rules |
| `product` | A usable application, interface, or end-to-end workflow rather than only a library or isolated exercise |
| `people` | Direct human interaction, role-specific use, accessibility/control design, or stakeholder-facing workflows |

Classify from concrete implementation evidence, not the project’s subject or a
dependency alone. A project may select non-adjacent areas. The range line joins
adjacent selected points but leaves unsupported gaps neutral.

Example:

```ts
technologies: ["Next.js", "React", "Payload CMS", "PostgreSQL"],
deployment: ["Vercel", "Neon", "Cloudflare R2"],
integrations: ["Turnstile"],
homepageTechnologies: ["Next.js", "React", "Payload CMS", "PostgreSQL", "Cloudflare R2"],
infrastructureNote:
  "Deployed through Vercel with Neon PostgreSQL, Cloudflare R2 for media storage, and Cloudflare Turnstile protecting public form submissions.",
```

## Homepage card curation

The homepage card can be noisy if it lists the full stack plus every managed
service. Use `homepageTechnologies` to show a curated ~4–5 item subset:

- Select for importance to understanding the project and as evidence of a
  meaningful skill, not array order.
- Prefer primary language, primary framework, primary database, one meaningful
  library/architectural tool, and at most one deployment/infrastructure service
  when it materially strengthens the story.
- Avoid several services that communicate nearly the same thing (for example do
  not show Vercel, Neon, R2, and Turnstile together on one card).
- Every label must already exist in `technologies`, `deployment`, or
  `integrations`; validation enforces this. When omitted, the card shows the full
  stack. The case-study page always shows everything.

The card keeps the same visual hierarchy: curated core labels render first,
and curated deployment/integration labels follow inline in quieter styling on
the same badge line.

Evidence for deployment and integration claims should be tagged in
`portfolio-source-of-truth.md` / `docs/project-evidence-notes.md` as
repository-verified, user-verified, inferred, or unresolved. Do not claim live
availability, publish private URLs, or store secrets.

## Slugs and generated routes

For:

```ts
slug: "example-systems-tool",
```

the public route is `/work/example-systems-tool`.

`generateStaticParams()` reads the filtered `projects` export. The sitemap and
next-project sequence use the same export. Slugs must:

- use lowercase ASCII letters, digits, and single hyphens;
- be stable and descriptive;
- be unique;
- contain no company-internal identifiers.

If a published slug changes, search for inbound links and consider a redirect
before deployment. There is no redirect configuration today.

## Display status

### `featured`

Renders the expanded featured-card treatment. Use for the few projects that best
support the portfolio’s positioning. The first published object also receives the
strongest maroon lead-card treatment.

### `supporting`

Renders the quieter standard card. Supporting does not mean unimportant; it means
the project needs less homepage space.

### `hidden`

Keeps the object in the repository but removes it from cards, routes, sitemap, and
next-project navigation. Use while drafting, awaiting approval, or retiring a
project without deleting evidence.

## Visibility

### `public`

The project and linked materials are already suitable for public viewing. A
public project may have `repositoryUrl`.

### `private-case-study`

Only approved, sanitized, high-level material may render. Omit the private
repository URL. Use abstract diagrams or explicitly approved screenshots, never
internal source/data.

### `confidential`

Nothing about the project should publish. Validation requires
`display: "hidden"` and rejects a repository URL. Do not add “safe-looking”
summaries as a workaround.

## Private professional projects

ETS Website and Sentinel require all of the following:

- approved project naming and employer relationship;
- safe high-level architecture only;
- no employee, customer, candidate, medical, operational, or company records;
- no internal URLs, credentials, repository paths, infrastructure identifiers,
  database connection strings, Turnstile secrets, R2 credentials, bucket names,
  or service tokens;
- no exaggerated DevOps / cloud-architecture claims from managed-platform use;
  or security-sensitive implementation;
- no private source or copied internal documentation;
- no realistic fake records that could be mistaken for real company data;
- explicit proof and limitation statements;
- approval before publishing new screenshots, diagrams, or detailed workflows.

Read `docs/privacy-and-publication.md` before every professional-content change.

## Image fields

Image entries use:

```ts
{
  src: "/images/projects/project-slug-subject.webp",
  alt: "Meaningful description of the visible content",
  width: 1600,
  height: 1000,
  caption: "Optional public context.",
}
```

- `src` must point inside `/images/projects/`.
- Supported validated extensions are AVIF, JPEG/JPG, PNG, and WebP.
- `width` and `height` are the intrinsic pixel dimensions, not CSS sizes.
- `alt` is mandatory and public.
- `caption` is optional and rendered visibly.
- Keep covers near a consistent 16:10 composition where practical.
- Keep gallery images internally consistent within one case study.

See `docs/assets-guide.md` for preparation and naming.

## Recommended case-study structure

Three to five sections are usually enough:

1. **Problem or context** — the real constraint, without theatrical framing.
2. **System or decision** — architecture, interaction, model, or workflow.
3. **Evidence** — what the repository or approved artifact demonstrates.
4. **Tradeoff or boundary** — what was deliberately limited.
5. **Next proof** — the honest next validation step, if useful.

Use titles specific to the project. Write section bodies, proof, limitation,
and infrastructure notes in first person (“I …”). Avoid third-person exposé
phrasing such as “The implementation separates…” or “The repository includes…”
when the claim is about your own work. The current routes render one paragraph
per section; add richer section types only when real content requires them.

## Complete example

This public Snakinesis entry matches the current `Project` type and claim
boundaries:

```ts
{
  slug: "snakinesis",
  title: "Snakinesis",
  eyebrow: "Computer vision · Interaction",
  summary:
    "A hands-free Snake game controlled by deliberate head movement through an ordinary webcam.",
  context: "Public project · collaborator credited",
  period: "May 2026",
  stage: "Versioned releases available",
  display: "supporting",
  visibility: "public",
  range: ["data", "people"],
  technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pillow"],
  proof:
    "Calibration, smoothed face-center ratios, neutral re-arm behavior, fallback controls, release tags, and focused tests are present in the public repository.",
  limitation:
    "The exact contribution split with Shifa Zeeshan still requires confirmation; no sole-authorship claim is made.",
  repositoryUrl: "https://github.com/umrndem/snakinesis",
  sections: [
    {
      title: "The interaction problem",
      body:
        "Early eye-gaze control was too jittery for reliable play. The useful shift was to treat control as a deliberate gesture system with calibration, thresholds, and a return to neutral before another command.",
    },
    {
      title: "The control loop",
      body:
        "OpenCV captures frames, MediaPipe provides face landmarks, and the controller converts smoothed relative movement into one-shot directions. Keyboard input remains available as an accessible fallback.",
    },
    {
      title: "Evidence",
      body:
        "The repository includes tests around face-loss prompts, direction selection, gesture gating, timing, and game behavior, plus tagged releases from the initial version through later fixes.",
    },
    {
      title: "Before final copy",
      body:
        "A safe demo video and a confirmed collaborator contribution split are needed. The portfolio should present the control decision—not merely the retro game surface.",
    },
  ],
},
```

It intentionally omits `coverImage` and `gallery` until approved assets exist.

## Collaboration and AI assistance

- Name collaborators when approved and known.
- Do not claim sole authorship while contribution division is unresolved.
- State the type of responsibility supported by evidence: problem framing,
  architecture, implementation, testing, review, documentation, or deployment.
- If AI generated substantial code, do not imply manual line-by-line authorship.
- AI assistance does not justify vague “led everything” language. Describe the
  decisions Umar can defend in an interview.
- Never fabricate a neat contribution percentage.

## Unsupported claims

Do not publish a metric, performance result, user count, business outcome,
production claim, security guarantee, model quality, award, or responsibility
unless the source of truth or evidence explicitly supports it.

Use `proof` for demonstrated evidence and `limitation` for the known boundary.
Both are required so a polished case-study surface cannot silently erase
uncertainty.

## Validation and preview

```bash
npm run validate:content
npm run dev
```

Check:

- homepage order and visual prominence;
- `/work/<slug>`;
- metadata title and description;
- optional cover/gallery and alt text;
- repository link;
- next-project sequence;
- `/sitemap.xml`;
- light/dark and mobile/desktop;
- privacy checklist.

Finish with `npm run check`.
