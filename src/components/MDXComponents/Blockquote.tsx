import { PropsWithChildren } from "react";

export function BlockQuote({ children }: PropsWithChildren) {
  return (
    <blockquote className="pl-4 border-l-2 border-l-article-grey-8 text-article-grey-10 italic">
      {children}
    </blockquote>
  );
}
