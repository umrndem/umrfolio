export type RangePoint =
  | "systems programming"
  | "data"
  | "databases"
  | "product"
  | "people";

export type ProjectDisplay = "featured" | "supporting" | "hidden";

export type ProjectVisibility =
  | "public"
  | "private-case-study"
  | "confidential";

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  period: string;
  stage: string;
  display: ProjectDisplay;
  visibility: ProjectVisibility;
  /** Exact ordered areas demonstrated by the project. */
  range: readonly [RangePoint, ...RangePoint[]];
  /** Core application stack shown as the primary technology row. */
  technologies: readonly string[];
  /** Managed platforms and hosted services (deployment, databases, storage). */
  deployment?: readonly string[];
  /** Security and third-party integrations (for example Turnstile). */
  integrations?: readonly string[];
  /**
   * Curated subset shown on the homepage card only. Each label must already
   * exist in `technologies`, `deployment`, or `integrations`. When omitted, the
   * homepage card falls back to the full stack. Case-study pages always show the
   * complete stack regardless of this field.
   */
  homepageTechnologies?: readonly string[];
  /** Optional concise infrastructure sentence for the case-study technical notes. */
  infrastructureNote?: string;
  proof: string;
  limitation: string;
  liveUrl?: string;
  repositoryUrl?: string;
  coverImage?: ImageAsset;
  gallery?: readonly ImageAsset[];
  sections: readonly ProjectSection[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: `/#${string}`;
};

export type AcknowledgementPrivacy = "public" | "limited" | "anonymous";

export type Acknowledgement = {
  id: string;
  publicDisplayName: string;
  relationshipLabel: string;
  acknowledgement: string;
  privacy: AcknowledgementPrivacy;
  order: number;
};

export type Profile = {
  name: string;
  shortName: string;
  location: string;
  email: string;
  degree: string;
  graduation: string;
  cgpa: string;
  portrait?: ImageAsset;
  resumePath?: `/documents/${string}`;
};
