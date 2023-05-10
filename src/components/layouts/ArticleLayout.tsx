import classNames from "classnames";
import { PropsWithChildren } from "react";

export default function ArticleLayout({
  title,
  children,
  date,
}: PropsWithChildren & { title: string; date: string }) {
  return (
    <div
      className={classNames(
        "font-reading mt-12 md:mt-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl text-neutral-900 leading-[1.75]"
      )}
    >
      <div className="mb-10">
        <h1 className="-ml-1 font-serif font-serif-variation font-light text-6xl md:text-7xl">
          {title}
        </h1>
        <h3 className="text-article-note text-sm">{date}</h3>
      </div>
      {children}
    </div>
  );
}
