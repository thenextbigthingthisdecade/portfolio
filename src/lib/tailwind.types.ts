export const tailwindColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export type TailwindColor = typeof tailwindColors[number];
