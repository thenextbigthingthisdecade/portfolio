import { PropsWithChildren } from "react";

export function Highlight({ children }: PropsWithChildren) {
  return <span className="bg-article-blue">{children}</span>;
}
