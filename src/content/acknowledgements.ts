import type { Acknowledgement } from "./types";

export const acknowledgementsPage = {
  eyebrow: "Acknowledgements",
  /** Fixed display lines for the hero heading. */
  titleLines: ["The people", "I carry", "with me."],
  introduction:
    "I’m grateful to the people whose care, friendship, and guidance have helped me learn and keep going.",
  praiseKicker: "First and foremost",
  praiseTitle: "All praise belongs to Allah.",
  praise:
    "Alhamdulillah. Every ability, every opportunity, and every good that comes from this work are gifts from Allah. All praise and gratitude belong to Him.",
  entries: [
    {
      id: "parents",
      publicDisplayName: "My parents",
      relationshipLabel: "Raising and values",
      acknowledgement:
        "For raising me with the care, values, and support that made me capable of doing this work.",
      privacy: "limited",
      order: 1,
    },
    {
      id: "sister",
      publicDisplayName: "My sister",
      relationshipLabel: "Closest support",
      acknowledgement:
        "For being my best friend and strongest supporter for as long as I can remember.",
      privacy: "limited",
      order: 2,
    },
    {
      id: "brother",
      publicDisplayName: "My brother",
      relationshipLabel: "Someone to rise for",
      acknowledgement:
        "For giving me someone to inspire, make proud, and become worthy of looking up to.",
      privacy: "limited",
      order: 3,
    },
    {
      id: "ammaar-ahmed",
      publicDisplayName: "Ammaar Ahmed",
      relationshipLabel: "Technical anchor",
      acknowledgement:
        "For being my main technical anchor, offering honest judgment and steady, brotherly guidance throughout.",
      privacy: "public",
      order: 4,
    },
    {
      id: "abdullah-khan",
      publicDisplayName: "Abdullah Khan",
      relationshipLabel: "Identity design",
      acknowledgement:
        "For giving this portfolio its visual mark by designing the U/N identity that carries my name across the site.",
      privacy: "public",
      order: 5,
    },
  ] satisfies readonly Acknowledgement[],
  closing:
    "Thank you for being part of my life and work.",
  returnLabel: "Back to the work",
  returnHref: "/#work" as const,
} as const;
