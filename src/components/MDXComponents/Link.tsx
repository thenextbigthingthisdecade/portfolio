import Link from "next/link";
import { ComponentProps } from "react";

export function MarkdownLink(props: ComponentProps<"a">) {
  return (
    <Link
      target="_blank"
      className="transition-all duration-200 ease-linear hover:text-article-primary underline underline-offset-2 decoration-neutral-200 decoration-1 hover:decoration-article-primary focus-visible:ring-4 focus-visible:ring-blue-200"
      href={props.href!}
    >
      {props.children}
    </Link>
  );
}
