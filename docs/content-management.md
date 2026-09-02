# Content management

This is the primary guide for routine portfolio updates. The repository is the
content-management system: edit typed content, add approved assets, preview,
validate, and commit.

## Before editing

1. Read `portfolio-source-of-truth.md`.
2. For project or professional claims, check the relevant evidence document under
   `docs/` or `research/project-notes/`.
3. Read `docs/privacy-and-publication.md`.
4. Start the local site:

   ```bash
   npm install
   npm run dev
   ```

5. Keep one focused content change per branch/commit where practical.

Do not “improve” a missing fact by inventing it. Keep uncertainty visible or
leave the claim out.

## Content ownership

| Content | File |
|---|---|
| Profile, contact, education, portrait, résumé, socials | `src/content/profile.ts` |
| Header navigation and homepage anchors | `src/content/navigation.ts` |
| Homepage narrative, experience, approach, foundation, footer | `src/content/home.ts` |
| Acknowledgement page copy, public display forms, privacy states, order | `src/content/acknowledgements.ts` |
| Project cards, ordering, status, visibility, technologies, deployment, integrations, case studies, media | `src/content/projects.ts` |
| Homepage card surface progression (positional red scale) | `src/content/project-surfaces.ts` |
| Global title, descriptions, availability | `src/content/site-settings.ts` |

Use these files instead of repeating a value in a component.

## Update the introduction

Edit `homeContent.hero` in `src/content/home.ts`:

```ts
hero: {
  kicker: "Islamabad · Data Science · Software systems",
  title: "I turn unclear problems into systems I can explain.",
  introduction: "a Data Science student ...",
  // ...
},
```

The component automatically prefixes the introduction with the `shortName` from
`profile.ts`. Do not add “I’m Umar” inside `introduction`, or the name will be
duplicated.

The current-role sentence is `hero.current`. Verify employer wording, dates, and
responsibilities before changing it.

## Change profile information

Edit `profile` in `src/content/profile.ts`:

```ts
export const profile = {
  name: "Muhammad Umar Nadeem",
  shortName: "Umar",
  location: "Islamabad, Pakistan",
  email: "umrndem@gmail.com",
  degree: "BS Data Science · FAST NUCES, Islamabad",
  graduation: "Expected June 2028",
  cgpa: "3.42 / 4.00",
  portrait: undefined,
  resumePath: undefined,
} satisfies Profile;
```

A change here updates the header/footer contact path, homepage education facts,
Open Graph name/location, and structured data where applicable.

Also update `portfolio-source-of-truth.md` only when the user has explicitly
corrected or approved the underlying fact.

## Update contact details

- Email: change `profile.email`.
- Availability label: change `siteSettings.availabilityLabel` in
  `src/content/site-settings.ts`.
- Footer opportunity sentence: change `homeContent.footer.availability`.
- Contact form labels/status copy: change `homeContent.footer.form`.
- Do not add the approved phone number to the primary site without a deliberate
  user decision; the current source of truth recommends résumé-only placement.

The footer contact form posts to `/api/contact`. Until a mail provider is wired
with server-only env vars (see `.env.example`), submissions are validated and
acknowledged in stub mode. Keep the direct `mailto:` fallback.

Search after changing contact data:

```bash
rg -n "old@example.com|old-handle" src
```

There should not be an independent hardcoded copy in a component.

## Add, remove, or reorder social links

Edit the `socialLinks` array in `src/content/profile.ts`:

```ts
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/umrndem" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umrndem/" },
] satisfies readonly SocialLink[];
```

- Reorder array entries to reorder footer links.
- Remove an entry to stop rendering it.
- Use an absolute `https://` URL.
- Labels must be unique.

The validator rejects malformed or duplicate social entries.

## Add, edit, anonymize, or remove an acknowledgement

Read `docs/acknowledgements.md` and `docs/privacy-and-publication.md` first.
Acknowledgements require explicit current approval; never infer them from private
notes, messages, contacts, repository history, or project collaboration.

Edit `acknowledgementsPage.entries` in
`src/content/acknowledgements.ts`:

- `publicDisplayName` is the only name/relationship wording rendered publicly;
- `relationshipLabel` gives concise public context without adding history;
- `acknowledgement` describes the approved support or influence;
- `privacy` is `public`, `limited`, or `anonymous` as defined in
  `docs/acknowledgements.md`;
- `order` controls display sequence and must remain unique and ascending.

To anonymize someone, replace identifying fields with approved indirect wording
and set `privacy: "anonymous"`. To remove someone, delete the entry and update
the acknowledgement source document. Do not add profiles, contact details,
workplaces, schools, photographs, or private conversations without separate
approval.

The homepage does not render acknowledgement names. The dedicated route is
`/acknowledgements`, linked quietly from the shared footer so the homepage
contact CTA remains the ending of the primary flow. Page hierarchy, faith-panel
role, list presentation, closing copy, and tone rules live in
`docs/acknowledgements.md`.

## Update the résumé

1. Confirm the PDF is approved for public download and contains no private
   address, unnecessary phone number, hidden metadata, or unsupported claims.
2. Name it with lowercase kebab-case, for example
   `muhammad-umar-nadeem-resume.pdf`.
3. Place it in `public/documents/`.
4. Set the path in `src/content/profile.ts`:

   ```ts
   resumePath: "/documents/muhammad-umar-nadeem-resume.pdf",
   ```

5. Run `npm run validate:content`.
6. Confirm the conditional “Résumé” footer link downloads the correct file.
7. Remove the replaced PDF so stale versions are not still publicly reachable.

Set `resumePath: undefined` to hide the link without deleting a draft stored
outside `public/`.

## Add a project

Follow `docs/project-content-guide.md` and
`docs/checklists/new-project.md`. In summary:

1. Confirm evidence and publication approval.
2. Add one object to `allProjects` in `src/content/projects.ts`.
3. Use a unique lowercase kebab-case `slug`.
4. Choose `display` and `visibility` deliberately.
5. Add approved media to `public/images/projects/` if available.
6. Run:

   ```bash
   npm run validate:content
   npm run dev
   ```

7. Check the card, `/work/<slug>`, next-project navigation, sitemap, both themes,
   and responsive layouts.

The route, card, metadata, sitemap entry, and next-project link are generated
from the same entry.

## Edit a project or case study

Find its object by `slug` in `src/content/projects.ts`.

- Card copy: `eyebrow`, `summary`, `context`, and `stage`.
- Technical tags: `technologies` (core), optional `deployment`, optional `integrations`.
- Infrastructure sentence: optional `infrastructureNote`.
- Evidence panel: `proof` and `limitation`.
- Case-study narrative: `sections`.
- Approved live preview action: `liveUrl`.
- Public repository action: `repositoryUrl`.
- Cover/gallery: `coverImage` and `gallery`.

Changing a slug changes the public URL. Treat that as a route migration and check
existing links before committing.

## Hide or unpublish a project

Set:

```ts
display: "hidden",
```

The entry remains editable but disappears from cards, generated routes, the
sitemap, and next-project navigation.

For material that must never publish, also set:

```ts
visibility: "confidential",
```

Validation requires confidential projects to be hidden. Do not rely on
`robots.txt` or an unlinked route for confidentiality.

## Reorder or feature projects

Project order is the order of objects in `allProjects`.

- Move an entire object to reorder cards and next-project navigation.
- Set `display: "featured"` for expanded featured-card treatment.
- Set `display: "supporting"` for the quieter card treatment.
- The first published card receives the strongest maroon treatment; ensure the
  first entry is intentionally the lead story.

Run the full project list after reordering to confirm the visual rhythm and
next-project sequence.

## Update experience

Edit `homeContent.experience` in `src/content/home.ts`:

- `period` and `duration`;
- `organization` and `role`;
- `summary`;
- `responsibilities`.

Responsibilities render in array order. Avoid invented outcomes and metrics.
Update the source of truth/evidence only when new facts are explicitly supplied.

## Update education and GPA

Edit `profile.degree`, `profile.graduation`, and `profile.cgpa` in
`src/content/profile.ts`. The homepage consumes these values directly.

The current academic year/semester conflict remains unresolved. Do not add either
until the user confirms it.

## Update skills, coursework, or technologies

The site intentionally has no proficiency bars or separate master skill list.

- Project-specific core stack: edit `project.technologies`.
- Managed platforms / hosted services: edit optional `project.deployment`.
- Security integrations (for example Turnstile): edit optional `project.integrations`.
- Case-study infrastructure sentence: edit optional `project.infrastructureNote`.
- Homepage coursework: edit `homeContent.about.strongCoursework`.
- Technical range labels: edit `rangePoints` only if the conceptual axis itself
  changes; also update every project range. Project cards and case studies name
  the exact selected topics via `RangeLine` from each project’s ordered `range`
  list. Do not include an area merely because it sits between two selected
  points on the axis.
- Broader positioning: edit the about paragraphs only with evidence.
- Skills evidence and deployment framing: update `docs/skills-evidence-map.md`
  and `portfolio-source-of-truth.md` when Umar confirms facts.

Technologies and services should describe demonstrated project use, not every
dependency. Keep Turnstile under integrations, not deployment. Do not invent
live URLs or DevOps titles.

## Add screenshots or project images

1. Sanitize and optimize the file using `docs/assets-guide.md`.
2. Place it in `public/images/projects/<project-slug>-<subject>.<ext>`.
3. Add a cover:

   ```ts
   coverImage: {
     src: "/images/projects/example-system-cover.webp",
     alt: "Public dashboard showing an anonymized workflow overview",
     width: 1600,
     height: 1000,
     caption: "Approved public workflow overview.",
   },
   ```

4. Or add a gallery:

   ```ts
   gallery: [
     {
       src: "/images/projects/example-system-flow.webp",
       alt: "Diagram of the sanitized request and review flow",
       width: 1600,
       height: 1000,
     },
   ],
   ```

5. Run `npm run validate:content`; missing files, paths, dimensions, and alt text
   fail before build.

Never use realistic fake company records to make a private system look complete.

## Replace the profile image

1. Add an approved 4:5 image to `public/images/profile/`.
2. Set `profile.portrait`:

   ```ts
   portrait: {
     src: "/images/profile/umar-portrait.webp",
     alt: "Muhammad Umar Nadeem standing outdoors in Islamabad",
     width: 1600,
     height: 2000,
     caption: "Muhammad Umar Nadeem · Islamabad",
   },
   ```

3. Check the crop at 390px, 768px, and desktop width in both themes.
4. Remove the old public portrait after confirming it is unused.

Set `portrait: undefined` to restore the designed placeholder.

## Write captions and alt text

- `alt` describes the image’s meaningful visual content and context.
- Do not start with “image of” or repeat the adjacent caption.
- For screenshots, identify the page/workflow and the important visible state.
- For diagrams, explain the relationship the diagram communicates.
- `caption` is optional visible context: approval boundary, stage, date, or source.
- Do not put confidential data in alt text; alt text is public content.

## Update external URLs

- Social URLs live in `profile.ts`.
- Approved project preview URLs live in `projects.ts` under `liveUrl`.
- Project repository URLs live in `projects.ts`.
- The email address lives in `profile.ts`.
- The deployment origin lives in `getSiteUrl()` (`site-settings.ts`),
  overridable with `NEXT_PUBLIC_SITE_URL`.

Use HTTPS for public external URLs. Open each changed link from the rendered site;
validation proves shape, not that the destination still exists.

## Add downloadable documents

Only approved public PDFs belong in `public/documents/`. A file becomes publicly
reachable as soon as it is deployed, even if no page links to it. Prefer a stable
descriptive filename, remove replaced versions, and verify embedded document
metadata before publication.

The current UI exposes only the optional résumé path. Add another document type
only when there is a real rendering requirement; update `Profile`, validation,
assets documentation, and privacy checks together.

## Update metadata

- Global title/description: `src/content/site-settings.ts`.
- Global metadata composition: `src/app/layout.tsx`.
- Project titles/descriptions: derived from each project’s `title` and `summary`.
- Social image layout: `src/app/opengraph-image.tsx`.
- Production origin: `getSiteUrl()` default, overridable with
  `NEXT_PUBLIC_SITE_URL`.

See `docs/seo-and-metadata.md` for canonical URLs, JSON-LD, sitemap, robots, and
social-preview verification.

## Preview and verify

During editing:

```bash
npm run validate:content
npm run dev
```

Before commit:

```bash
npm run check
npm audit --omit=dev
git diff --check
git status --short
```

Manually inspect the affected route in light and dark themes, at mobile and
desktop widths, with keyboard focus. Complete
`docs/checklists/content-update.md`, inspect the diff for confidential material,
and update documentation if a workflow or model changed.
