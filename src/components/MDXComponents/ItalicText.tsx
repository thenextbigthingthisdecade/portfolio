import { PropsWithChildren } from "react";

export function ItalicText({ children }: PropsWithChildren) {
  return <i className="font-italic">{children}</i>;
}
