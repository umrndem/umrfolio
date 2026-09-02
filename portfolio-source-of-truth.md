# Portfolio source of truth

Canonical human-provided identity and project facts for Muhammad Umar Nadeem’s
portfolio. Live content in `src/content/` must stay within these boundaries.
Do not invent missing details. Prefer recording uncertainty over assumption.

**Last updated:** 13 August 2026

## Evidence labels

Every non-trivial factual claim should be tagged with one of:

| Label | Meaning |
|---|---|
| **repository-verified** | Confirmed from inspected source, commits, or public repository structure |
| **user-verified** | Explicitly confirmed by Umar for portfolio use |
| **inferred** | Reasonable reading of evidence that is not independently proven |
| **unresolved** | Still open; do not resolve by assumption in public copy |

Agents and maintainers must not promote an inferred or unresolved item into a
confident public claim.

## Identity

| Fact | Value | Evidence |
|---|---|---|
| Full name | Muhammad Umar Nadeem | user-verified |
| Short name | Umar | user-verified |
| Location | Islamabad, Pakistan | user-verified |
| Email | umrndem@gmail.com | user-verified |
| Degree | BS Data Science, FAST NUCES Islamabad Campus | user-verified |
| Expected graduation | June 2028 | user-verified |
| CGPA | 3.42 / 4.00 | user-verified |
| Academic year/semester | Conflicting descriptions exist | unresolved |
| Phone on primary site | Prefer résumé-only if published at all | user-verified preference |

## Professional context

| Fact | Value | Evidence |
|---|---|---|
| Current role | Software Development Apprentice | user-verified |
| Organization | Eastern Testing Services | user-verified |
| Internship | IT Intern, June — August 2026 (eight weeks), completed | user-verified |
| Apprenticeship | Offered after the internship; August 2026 — present | user-verified |
| Work shape | Requirements gathering with stakeholders; continuing to expand and maintain Sentinel and the ETS Website | user-verified / repository-verified |
| AI assistance | Used throughout development; Umar owns problem framing, architecture, testing, and what ships | user-verified |
| Study status | Full-time BS Data Science student | user-verified |
| Research Assistant role | Current volunteer Research Assistant, Data Insight Lab at FAST-NUCES Islamabad Campus; public date shown as September 2026 — present (role confirmed active on 28 August 2026) | user-verified; lab name and affiliation externally verified |
| Research Assistant purpose | Learning AI & DS theory and research | user-verified |

## Positioning (restrained)

Umar is an early-career data-focused full-stack / applied data-systems developer.
Public copy may state:

> Umar has practical experience deploying projects through managed platforms and
> connecting hosted databases, object storage, and security integrations.

Do **not** claim: DevOps engineer, cloud architect, SRE, platform engineer,
enterprise infrastructure experience, advanced Cloudflare security expertise,
production scale, or current live availability unless separately verified.

## Selected projects and stack facts

### ETS Website — private case study

| Category | Items | Evidence |
|---|---|---|
| Core stack | Next.js, React, Payload CMS, PostgreSQL | repository-verified / user-verified |
| Deployment & services | Railway (app and managed PostgreSQL); private S3-compatible object storage for uploads | user-verified (31 July 2026) / repository-verified (commits migrating storage to S3-compatible bucket and optimizing Railway runtime; earlier Vercel + Neon + Cloudflare R2 configuration is superseded) |
| Security & integrations | Cloudflare Turnstile | user-verified |
| Infrastructure note | Runs on Railway with Railway-managed PostgreSQL and private S3-compatible object storage for uploads, with Cloudflare Turnstile protecting public form submissions. | user-verified / repository-verified |
| Public website URL | https://eastern-testing.com | user-verified (3 September 2026); approved for publication as a live preview |

Unresolved: whether dashboard screenshots are safe; whether any business outcomes
may be claimed; the object-storage provider name
(kept abstract as S3-compatible).

### Sentinel — private case study

| Category | Items | Evidence |
|---|---|---|
| Core stack | Next.js, TypeScript, PostgreSQL, Drizzle, Zod | repository-verified / user-verified |
| Scope | HSEQ reporting (RIR workflow), employee medical records, operations wellsite jobs, ICT system administration with activity log | repository-verified (31 July 2026 local inspection) |
| Deployment & services | Railway (app service and managed PostgreSQL); private S3-compatible object storage behind an authenticated in-app proxy | repository-verified (change log records the migration off Vercel Blob/Neon; earlier Vercel + Neon + Cloudflare R2 configuration is superseded) |
| Security & integrations | Cloudflare Turnstile on sign-in; hardened sessions and security headers | repository-verified / user-verified |
| Infrastructure note | Runs on Railway with Railway-managed PostgreSQL and private S3-compatible object storage served only through an authenticated in-app proxy, with Cloudflare Turnstile protecting sign-in. | repository-verified |
| Status | Deployed internally with live operational data (rollout notes, imported historical archive); under active development | repository-verified |

Unresolved: publishable URLs; safe screenshots; business outcomes; the object-storage
provider name (kept abstract as S3-compatible); automated-test coverage
(no committed tests as of 31 July 2026 inspection).

### DataPulse — public supporting project

| Category | Items | Evidence |
|---|---|---|
| Core stack | Python, Pandas, Streamlit, Plotly, Prophet | repository-verified / user-verified |
| Deployment & services | Streamlit Community Cloud, Supabase | user-verified |
| Infrastructure note | Deployed through Streamlit Community Cloud with Supabase-backed services. | user-verified |

Unresolved: whether the deployment remains live; publishable demo URL; forecast
quality; role-enforcement depth.

### RideFlow — public supporting project

| Category | Items | Evidence |
|---|---|---|
| Core stack | Express, JavaScript, MySQL | repository-verified / user-verified |
| Deployment & services | Railway, Aiven MySQL | user-verified |
| Infrastructure note | Previously deployed through Railway with Aiven-managed MySQL. Hosted demo not currently active; repo still supports a fresh MySQL bootstrap and a new local or hosted instance. | user-verified / repository-verified |
| Contributor | Muhammad Rafay Mir Khattak | user-verified; public attribution explicitly approved |

Unresolved: contribution split with Muhammad Rafay Mir Khattak; course context; whether any specific demo URL may be republished. Hosted-demo inactivity is user-verified; the fresh-start database/init path is repository-verified from the public README and SQL setup files.

### Other published projects

| Project | Notes | Evidence |
|---|---|---|
| Snakinesis | Public CV-controlled Snake; collaborator credited; contribution split unresolved | repository-verified |
| Financial Tick Data Pipeline | C++ IPC/concurrency pipeline; academic context unresolved | repository-verified |

## Practical deployment experience (approved framing)

Represent as practical experience with:

- deploying applications on managed platforms;
- connecting hosted databases;
- configuring object storage;
- managing environment configuration;
- navigating deployment dashboards;
- integrating Cloudflare Turnstile for bot protection or form verification;
- troubleshooting service integrations.

Never commit environment values, database URLs, API keys, Turnstile secrets, R2
credentials, private deployment URLs, bucket identifiers, or service tokens.

## Publication boundaries

- ETS Website and Sentinel stay abstract private case studies until further
  approval for media or deeper detail.
- Matootoo relationship/archive material remains excluded by default.
- No metrics, users, impact, awards, or production-scale claims without evidence.

## Acknowledgements

The dedicated public acknowledgement page and the following display forms were
explicitly approved by Umar on 25 July 2026:

- praise and gratitude to Allah must lead the page as a foundation panel;
- parents: relationship label only, no names;
- sister: relationship label only, no name;
- brother: relationship label only, no name;
- Ammaar Ahmed: full name approved as the main technical anchor, with brotherly guidance;
- Abdullah Khan: full name approved for designing the U/N logo / identity mark.

These acknowledgements describe personal support and influence. They must not
imply project authorship, employment, formal mentorship, or technical
contribution beyond the approved wording. See `docs/acknowledgements.md` for the
public display and privacy states.

## Portfolio set / homepage order

Published Selected Work order (also recorded in `docs/project-selection.md`):

1. ETS Website
2. Sentinel
3. Snakinesis
4. RideFlow
5. DataPulse
6. Financial Tick Data Pipeline

RideFlow sits after Snakinesis because Snakinesis is the stronger public
demonstration; RideFlow continues the public web/database/deployment thread
before analytics and systems notes.

## Related documents

- Live content: `src/content/`
- Evidence map: `docs/skills-evidence-map.md`
- Catalogue: `docs/project-catalogue.md`
- Evidence notes: `docs/project-evidence-notes.md`
- Uncertainties: `docs/uncertainties-and-questions.md`
- Privacy gate: `docs/privacy-and-publication.md`
