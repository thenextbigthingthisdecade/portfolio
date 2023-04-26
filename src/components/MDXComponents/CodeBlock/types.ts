export interface CodeBlockProps {
  codeString: string;
  language: string;
  metastring: string | null;
}

export interface HighlightedCodeTextProps {
  codeString: string;
  language: string;
  highlightLine?: (index: number) => boolean;
}
