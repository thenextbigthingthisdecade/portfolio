// Converted automatically using ./tools/themeFromVsCode

type Language = string;

export type PrismThemeEntry = {
  color?: string;
  cursor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textShadow?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  opacity?: number;
};
export type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
};

const theme: PrismTheme = {
  plain: {
    color: "#171717",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#7d7d7d",
      },
    },
    {
      types: ["string", "number", "builtin", "variable"],
      style: {
        color: "#7d7d7d",
      },
    },
    {
      types: ["class-name", "function", "tag", "attr-name"],
      style: {
        color: "#171717",
      },
    },
  ],
};
export default theme;
