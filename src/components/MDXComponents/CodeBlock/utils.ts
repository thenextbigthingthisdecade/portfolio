import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export function preToCodeBlock(props: { children?: ReactNode }) {
  const children = props.children as
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;

  if (children && children.props) {
    const { children: codeString, className = "", ...props } = children.props;

    const matches = className.match(/language-(?<lang>.*)/);
    return {
      className,
      codeString: codeString.trim(),
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    };
  }
}
