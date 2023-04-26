import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";
import { preToCodeBlock } from "./utils";

export function Code(props: { children?: ReactNode }) {
  const codeBlockProps = preToCodeBlock(props);
  if (props) {
    return <CodeBlock {...codeBlockProps} />;
  }
  return null;
}
