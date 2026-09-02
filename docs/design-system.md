# Design system — Working Proof

The current visual identity is a clean leather-maroon editorial system. It is
visibly maroon-led while preserving neutral reading space, high contrast, and a
clear distinction between evidence, structure, and interaction.

All implementation tokens and component styles live in `src/app/globals.css`.
`docs/brand-identity.md` records the full palette values, ratios, rationale, and
color prohibitions.

## Design-token ownership

The light palette is declared on `:root`. Dark overrides are declared on
`:root[data-theme="dark"]`.

Components consume semantic custom properties:

```css
.example {
  border-color: var(--color-border);
  background: var(--color-surface-maroon);
  color: var(--color-text-primary);
}
```

Do not place arbitrary raw hex values in React components. The generated Open
Graph image and App Router favicon are the current exceptions because those
render outside normal document CSS; keep their palette values synchronized with
the canonical tokens when branding changes.

## Color roles

| Role | Representative tokens | Use |
|---|---|---|
| Page grounds | `--color-bg-primary`, `--color-bg-secondary` | Reading canvas and lifted neutral regions |
| Surfaces | `--color-surface`, `--color-surface-hover`, `--color-surface-maroon` | Cards, metadata, galleries, selected section climates |
| Text | `--color-text-primary`, `--color-text-secondary`, `--color-text-muted` | Hierarchical readable copy |
| Maroon identity | `--color-brand-primary`, `--color-brand-emphasis`, `--color-brand-deep`, `--color-brand-bright` | Major composition, labels, rules, progression, emphasis |
| Filled interaction | `--color-brand-fill`, `--color-brand-fill-hover`, `--color-on-brand` | Buttons, lead project, active chips |
| Structure | `--color-border`, `--color-border-emphasis`, `--color-structure` | Rules and near-black framework |
| Accessibility | `--color-focus`, `--color-selection`, status tokens | Focus, selection, non-brand availability state |
| Footer | `--color-footer-*` | Text and controls on deep maroon |

The main light values are clean off-white `#F8F5F6`, white, ink, primary maroon
`#7B1E3A`, rich maroon `#8C2344`, deep maroon `#5B1428`, bright maroon
`#A12D50`, and soft maroon `#F2E3E8`.

Dark mode uses neutral `#111113` / `#19191D` grounds, blackened maroon
`#241319`, rich fill `#8C2344`, and lighter maroon text values for accessible
contrast.

Color never communicates project publication, focus, or hierarchy by itself.
Labels, geometry, links, and heading structure carry the same meaning.

## Maroon composition

Strong maroon is concentrated in:

- the desktop hero book-spine panel;
- the lead project;
- primary actions;
- the footer;
- the acknowledgement praise rule (not the full page);
- selected labels and progression marks.

Soft/blackened maroon supports:

- the range section;
- the about section;
- featured/hovered project cards;
- case-study metadata and evidence boundaries.

Neutral space carries longer reading and prevents the brand color from becoming
harsh. Do not make every heading, border, or card red.

## Typography

- **Primary:** Manrope through `next/font/google`, emitted as a self-hosted font
  asset by the production build.
- **Utility:** JetBrains Mono through `next/font/google`, weights 400 and 500.
- **Brand lockup:** Bahnschrift bold semi-condensed, outlined as vector paths in
  `src/components/brand-logo-paths.ts`, `public/logo.svg`, and
  `src/app/icon.svg`. The header keeps U and N as fixed outlined glyphs and
  reveals outlined MR/DEM paths on hover while the slash collapses out.
- **CSS variables:** `--font-sans` and `--font-mono` are attached to `<html>` in
  `src/app/layout.tsx`. Shared mono eyebrow size is `--font-size-eyebrow`
  (`0.8rem`), used by kickers, section indexes, approach step numbers, about
  education labels, project-card/case-study meta labels, and case-study stack
  labels.
- **Fallbacks:** semantic fallback stacks are tokens in `globals.css`.
- **Display scale:** fluid `clamp()` values, reaching roughly 64–160px depending
  on the hero/case-study context.
- **Body measure:** long text is constrained to approximately 62–72 characters.
- **Wrapping:** headings use balanced wrapping; paragraphs and lists use pretty
  wrapping and safe overflow behavior.

Do not introduce a third typeface without a clear new content role. Monospace is
for metadata, labels, and technical structure—not every paragraph.

## Spacing and page geometry

Core layout variables:

```css
--page-edge: clamp(1.25rem, 4vw, 4.5rem);
--page-width: 90rem;
--section-space: clamp(6rem, 12vw, 11rem);
--section-space-tight: clamp(3rem, 6vw, 5.5rem);
--footer-space: clamp(5rem, 10vw, 9rem);
--header-offset: 5.75rem;
```

- Desktop sections use a 12-column grid.
- The content maximum is 1440px (`90rem`).
- The homepage hero occupies at least the viewport below the sticky header and
  ends before the separately bordered “Currently” strip.
- Section spacing is intentionally generous and fluid.
- Where two full-space sections meet and the break would otherwise read as dead
  area, use `--section-space-tight` on the facing paddings instead of raising
  `--section-space`. Work→Experience and Experience→Approach already do this.
  A section whose top padding is tightened must also use the tight value in its
  negative `scroll-margin-top` (see anchor scrolling below).

### Anchor scrolling

`--header-offset` equals the sticky-header height (4.75rem desktop, 4rem at
700px) and is applied once through `scroll-padding-top` on `html`. Never add a
second offset through a global `[id]` rule.

Homepage navigation targets set a negative `scroll-margin-top` equal to their
own top padding (`--section-space`, or `--section-space-tight` for tightened
junctions such as Approach) so the jump skips the decorative padding entirely
and the heading's red border line lands flush under the header. The footer has
no internal line, so its own top edge aligns there instead. Add the same rule
for any new anchored section with generous internal padding.
- Common gaps are based on roughly 8px increments but may use fluid values.
- At 960px, major grids simplify while retaining multi-column hierarchy.
- At 700px, pages switch to four columns or a single content column with a
  20px edge.

Use existing variables and nearby spacing patterns before adding a one-off
number.

## Surfaces

- **Neutral page:** `--color-bg-primary`.
- **Lifted neutral:** `--color-bg-secondary` or `--color-surface`.
- **Selected maroon climate:** `--color-surface-maroon`.
- **Strong identity fill:** `--color-brand-fill`.
- **Deep closing surface:** `--color-brand-deep`.

### Selected Work project-card scale

Homepage project cards use a **positional** opacity scale of one lead red, not
project-name colors or separate shade hexes. Levels come from
`getProjectSurfaceAssignment(index, count)` in `src/content/project-surfaces.ts`
and are applied as `data-surface` / `data-ink` on each card.

Canonical stops (1 → solid lead red, 6 → lowest opacity over page ground):

| Level | Token | Mix |
|---:|---|---|
| 1 | `--project-surface-1` | `#c90f16` (solid) |
| 2 | `--project-surface-2` | 80% lead red over `--color-bg-primary` |
| 3 | `--project-surface-3` | 58% |
| 4 | `--project-surface-4` | 36% |
| 5 | `--project-surface-5` | 18% |
| 6 | `--project-surface-6` | 6% |

Rules:

- Card 1 is always solid lead red; only the final visible card uses stop 6.
- With six published projects the mapping is 1…6 in order. With fewer or more
  cards, indices spread across the same stops so intermediates stay distinct and
  only the last card is the lowest-opacity tint.
- Do not hardcode `nth-child` colors or project-name → color maps.
- Vary opacity of `--project-surface-1` only. Do not invent lighter/darker shade
  hexes that drift into salmon, peach, beige, brown, mauve, or purple.
- White / on-brand ink (`data-ink="on-brand"`) is used on stops 1–2 (solid and
  high-opacity red). Mid and pale stops use strong near-black card ink tokens
  (`--card-ink*`) instead of page-muted greys, so copy stays readable on every
  tint. Dark theme keeps light ink throughout.

Cards are editorial planes, not floating dashboard tiles. Shadows are avoided
except the full-bleed `100vmax` surface technique and small ring constructions.
Radii remain square for buttons/cards and circular only for points or status
indicators.

## Borders and dividers

- Ordinary dividers: 1px `--color-border`.
- Meaningful section/active boundaries: 1px `--color-brand-primary` or
  `--color-border-emphasis`.
- Case metadata uses a 3px maroon top rule.
- Evidence boundaries use a 3px inline-start maroon rule.

Do not use borders as decorative noise around every container.

## Buttons and links

### `.button-link`

Primary filled action using action tokens. It has a visible border, uppercase
mono label, minimum 48px height, and a restrained 1px hover lift.

### `.button-link--light`

High-contrast footer action for deep maroon. Its hover stays within the maroon
family.

### Live proof actions

The ETS homepage and case-study live-site actions use dedicated semantic tokens:
white with black text in light mode, and black with white text in dark mode. The
homepage action follows the compact height and typography rhythm of the other
project-card actions.

### `.text-link`

Underlined or clearly text-linked secondary action. Hover changes semantic link
color without removing the non-color affordance.

Ordinary navigation links receive a maroon underline/active response. Do not
remove link distinction solely for visual cleanliness.

## Focus and accessibility states

- Global `:focus-visible`: 3px `--color-focus`, 3px offset.
- The main landmark uses an inset focus boundary after skip navigation.
- The theme control retains a minimum 44 × 44px target.
- Lead-card focus adapts to white against the maroon fill.
- Selection colors are mode-specific semantic tokens.
- Forced-colors adjustments preserve the few identity/status shapes that require
  explicit treatment.

Never use `outline: none` without an equally visible replacement. Test keyboard
focus in both themes.

## Motion

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

- Common hover transitions: 180ms.
- Theme/surface transitions: 240ms.
- Theme-disc rotation: 320ms.
- Range reveal: 560ms, gated by IntersectionObserver so lines animate when
  scrolled into view rather than on initial page load.
- Section headings and approach steps use a one-shot `Reveal` entrance
  (opacity + slight rise). Approach steps may stagger lightly; project cards
  do not.
- Project-card hover lifts the tile slightly, softens a brand-tinted shadow,
  nudges the case-study arrow, and scales cover media slightly. No card
  entrance choreography.
- The multiline hero headline types on once, character by character, without
  changing its final layout. Supporting labels remain static.

Motion is limited to opacity/color/transform-like feedback and the range
progression. There is no animation library. The
`prefers-reduced-motion: reduce` block disables smooth scrolling, collapses
animation/transition durations, removes the button lift, and forces reveal /
  range / card-hover transforms into their final resting state.

Do not add bounce, red flashes, glowing sweeps, parallax, sticky scrub
scenes, 3D marquees, or decorative motion that competes with reading.

## Responsive behavior

### Above 960px

- 12-column homepage/case-study composition.
- Desktop hero includes the strong maroon right panel.
- Header uses mark, centered navigation, and right actions.
- Case-study title and metadata sit side by side.

### 701–960px

- Major grids reduce span complexity.
- Availability label hides before navigation becomes crowded.
- Project bodies stack internally.

### 700px and below

- Four-column/mobile composition and 20px edges.
- Theme control becomes icon-only but retains its touch target.
- Hero portrait becomes full-width with a maroon frame.
- Range labels and section layouts stack.
- Project facts/actions, footer, case metadata, gallery, and narrative become
  single-column.

Test at 390 × 844, 768 × 1024, and 1440 × 1000 after visible changes.

## Component variants

| Component | Variants |
|---|---|
| `ProjectCard` | featured/supporting from content; first published card is the strong lead treatment; optional cover |
| `RangeLine` | full and compact; optional active start/end; right-aligned span caption |
| `ProfilePortrait` | approved image or designed placeholder |
| `ContentImage` | project cover/gallery class and optional caption |
| `button-link` | default and light-on-footer |
| `ThemeToggle` | root light/dark state |

Do not create generic variant systems for one use. Add a typed variant only when
multiple real content instances need it.

## Acknowledgements page

`/acknowledgements` is a restrained editorial route, not a card grid or credits
roll. Its hierarchy uses:

- a full-viewport landing hero below the sticky header (same logic as the
  homepage), so breadcrumb, eyebrow, title, and introduction stay visible
  without scrolling; height-aware type and spacing keep the block from clipping;
- a deep-maroon faith foundation with light text;
- one continuous, uniform acknowledgement list (small marker, context label,
  name, copy) with quiet row separators — no category headings, layout
  variants, edge ribbons, or dotted timeline decoration;
- a quiet closing panel with a return link to `/#work`, then the
  standard footer;
- the existing one-shot `Reveal` motion, with reduced-motion final states.

The homepage and contact CTA remain unchanged. Do not promote the
Acknowledgements link into primary navigation or introduce portraits, profile
cards, sentimental illustration, or decorative animation.

## Change branding safely

1. Change semantic values in both token blocks in `globals.css`.
2. Preserve token names where the role is unchanged.
3. Update matching raw palette values in:
   - `src/app/icon.svg`;
   - `src/app/opengraph-image.tsx`;
   - light/dark `themeColor` metadata in `src/app/layout.tsx`.
4. Update `docs/brand-identity.md`.
5. Check contrast for text, focus, actions, lead card, range section, and footer.
6. Inspect the full homepage and one case study in both themes and all three
   target widths.
7. Run `npm run check`.

## Prohibited use

- muddy brown-red, rust, brick, dried-blood, or brown burgundy;
- arbitrary raw hex values inside components;
- neon/scarlet red, red glow, light sweeps, or harsh saturated fields;
- metallic, carbon-fibre, automotive, racing, or gaming treatment;
- red filters over every image;
- all-red headings/cards/borders without hierarchy;
- color-only state or evidence;
- generic dashboard cards, pill overload, or ornamental gradients unrelated to
  the current identity.
