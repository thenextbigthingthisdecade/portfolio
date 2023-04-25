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
        color: "#666",
      },
    },
    {
      types: ["builtin"],
      style: {
        color: "#c01b5d",
      },
    },
    {
      types: ["number", "variable", "inserted"],
      style: {
        color: "rgb(9, 134, 88)",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(0, 0, 0)",
      },
    },
    {
      types: ["constant", "char"],
      style: {
        color: "rgb(129, 31, 63)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(128, 0, 0)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 0, 0)",
      },
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "#067a6e",
      },
    },
    {
      types: ["changed", "punctuation"],
      style: {
        color: "rgb(4, 81, 165)",
      },
    },
    {
      types: ["function", "keyword"],
      style: {
        color: "#c01b5d",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(38, 127, 153)",
      },
    },
  ],
};
export default theme;
