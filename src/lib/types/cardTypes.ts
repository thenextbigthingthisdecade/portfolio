import { Tag } from "./isTag";
import { Link } from "./linkType";

export type ProjectProperties = {
  name: string;
  imageUrl: string;
  link?: Link;
};

export type WritingProperties = {
  title: string;
  type: "Blog";
  url: string;
  publishedOn: string;
  contentPreview: string;
};

const readingTypes = ["Books"] as const;
type ReadingType = typeof readingTypes[number];

export type ReadingProperties = {
  type: ReadingType;
  title: string;
  author: string;
  tags: Tag[];
  imageUrl: string;
  link: Link;
};

const cardStyles = ["image", "text", "image_and_text"] as const;
type CardStyle = typeof cardStyles[number];

export type HobbyProperties = {
  label: string;
  cardStyle: CardStyle;
  properties: Record<string, any>;
};
