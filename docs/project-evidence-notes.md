# Project evidence notes

Concise evidence notes for portfolio claims. Prefer
`portfolio-source-of-truth.md` for approved facts and
`docs/github-inventory.md` for repository inspection detail.

Evidence labels: **repository-verified**, **user-verified**, **inferred**,
**unresolved**.

## ETS Website

- Repository history begins in June 2026 and remains active: repository-verified.
- Core stack (Next.js, React, Payload CMS, PostgreSQL): repository-verified;
  confirmed for portfolio wording as user-verified.
- Deployment shifted completely to Railway (app and managed PostgreSQL) with
  private S3-compatible object storage for uploads: user-verified
  (31 July 2026) and repository-verified from local inspection ("Migrate upload
  storage to private S3-compatible bucket", "Optimize Railway runtime usage",
  "Use DATABASE_URL for shared Postgres"). The earlier Vercel + Neon +
  Cloudflare R2 configuration is superseded. The specific S3-compatible
  provider is deliberately not recorded; keep it abstract.
- Cloudflare Turnstile on public forms: user-verified.
- Scroll-driven public interaction layer (entrance reveals, pinned section
  sequences, selective heavier 3D moments): repository-verified from local
  project inspection; described abstractly only.
- `https://eastern-testing.com` is user-verified as live and approved for
  publication as direct proof of the visitor-facing work (3 September 2026).
  Dashboard screenshots and business outcomes remain unresolved.
- Public treatment remains a sanitized private case study.

## Sentinel

- Repository history begins in July 2026 and remains active: repository-verified
  (last local inspection 31 July 2026, ~106 commits).
- Core stack (Next.js, TypeScript, PostgreSQL, Drizzle, Zod): repository-verified;
  confirmed for portfolio wording as user-verified.
- Scope grew from HSEQ RIR reporting + medical records to an internal management
  information system that also covers operations wellsite jobs (lifecycle stages,
  progress updates, per-job audit timeline) and a separate ICT system-administration
  authority with an activity log: repository-verified (architecture doc, README,
  change log).
- Self-service employee profiles with paginated personal RIR history over an
  imported read-only historical archive: repository-verified.
- Session/sign-in hardening (edge route gating, database-backed sessions,
  stay-signed-in vs. idle expiry, throttling, security headers): repository-verified.
- Deployment migrated to Railway (app service and managed PostgreSQL) with private
  S3-compatible object storage behind the authenticated in-app proxy:
  repository-verified from the change log and maintenance docs. The earlier
  Vercel + Neon + Cloudflare R2 configuration is superseded (storage passed
  through a brief Vercel Blob stage first). The specific S3-compatible provider
  is deliberately not recorded; keep it abstract.
- Turnstile on sign-in: user-verified / repository-verified.
- Deployed internally with live operational data: repository-verified (rollout
  notes and archive import in the change log). Production scale, live URL
  publication, and quantified impact: unresolved — do not claim.
- Automated tests: none committed as of the 31 July 2026 inspection (no test
  files or test script).

## DataPulse

- GitHub creation and latest observed repository activity both fall in May 2026:
  repository-verified.
- Analytics workflow and core Python stack: repository-verified.
- Streamlit Community Cloud deployment and Supabase-backed services: user-verified.
- Forecast evaluation quality and role-enforcement depth: unresolved.
- Whether the deployed app remains live / which URL may be published: unresolved.

## RideFlow

- GitHub creation and latest observed repository activity both fall in May 2026:
  repository-verified.
- Express, JavaScript, and MySQL simulation surface: repository-verified.
- Railway deployment with Aiven-managed MySQL: user-verified.
- Hosted demo not currently active: user-verified.
- Muhammad Rafay Mir Khattak is an approved named contributor: user-verified.
- Fresh-start path remains in the public repo (schema / logic / bootstrap SQL and
  `npm run db:init` against a configured MySQL database, then run the Express
  app locally or on a new host): repository-verified.
- Contribution split with Muhammad Rafay Mir Khattak and course/assessment
  context: unresolved.
- Whether any specific public demo URL may be republished: unresolved.

## Snakinesis

- GitHub creation and latest observed repository activity both fall in May 2026:
  repository-verified.
- Gesture-control implementation and tests: repository-verified.
- Collaborator credit exists; exact contribution split: unresolved.

## Financial Tick Data Pipeline

- GitHub creation and latest observed repository activity both fall in May 2026:
  repository-verified.
- Process/IPC/concurrency implementation: repository-verified.
- Course context and benchmarks: unresolved.

## Secrets and identifiers

Do not record or commit credentials, `.env` values, database URLs, Turnstile
secrets, R2 keys, bucket names, private deployment URLs, or service tokens in
this file or in live content.
