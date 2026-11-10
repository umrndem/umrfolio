# Acknowledgements source and privacy guide

This document records the approved public representation for
`/acknowledgements`. It is the publication gate for acknowledgement content,
not a place to infer new relationships from private notes.

## Page hierarchy

1. **Editorial hero** — full-viewport landing with breadcrumb, eyebrow,
   headline, and introduction.
2. **Faith foundation** — deep maroon panel with light text; praise to Allah
   precedes every person entry and is not modelled as a person row.
3. **Continuous acknowledgement list** — one uniform row layout for every
   person (marker, context label, name, acknowledgement).
4. **Closing panel** — quiet surface-maroon statement and return link to work.
5. **Standard site footer** — unchanged contact CTA.

## Approved entries

| Order | Public display | Context label | Privacy | Evidence |
|---:|---|---|---|---|
| 1 | My parents | Raising and values | limited | user-verified, 25 July 2026 |
| 2 | My sister | Closest support | limited | user-verified, 25 July 2026 |
| 3 | My brother | Someone to rise for | limited | user-verified, 25 July 2026 |
| 4 | Ammaar Ahmed | Technical anchor | public | user-verified, 25 July 2026 |
| 5 | Abdullah Khan | Identity design | public | user-verified, 25 July 2026 |

## Privacy meanings

- `public` — the displayed name and concise acknowledgement are explicitly
  approved for this public page.
- `limited` — publish only the approved relationship label; do not add a name,
  workplace, school, profile, photograph, or identifying history.
- `anonymous` — use only indirect public wording approved for publication.

## List presentation

Every person uses the same columns, type sizes, colours, and spacing. Keep only
quiet row separators and small red markers. Do not introduce category headings,
edge ribbons, dotted timelines, alternating layouts, phrase highlights, or
decorative variation between entries.

## Copy tone

Keep entries specific, concise, and natural. Personal supporters must not read
as project collaborators unless they actually contributed.

## Closing

The closing panel completes the page. It must not add another contact CTA.
Return link targets `/#work` (“Back to the work”).

## Safe maintenance

1. Obtain current, explicit approval before adding a person or expanding their
   identification.
2. Edit `src/content/acknowledgements.ts`; `order` controls sequence and must
   remain unique and ascending.
3. Use the narrowest privacy state supported by the approval.
4. Keep personal support distinct from professional authorship or project
   contribution.
5. To anonymize an entry, replace its public display/context with approved
   indirect wording and set `privacy: "anonymous"`.
6. To remove someone, delete the public entry and update this record.
7. Run `npm run validate:content` and `npm run check`.

Acknowledgements must not be generated automatically from repository history,
private conversations, contacts, project collaborators, or research notes.

## Copy maintenance — 10 November 2026

The site-wide copy cleanup shortened the introduction and closing. Approved
names, relationship labels, individual thanks, and praise remain unchanged.
