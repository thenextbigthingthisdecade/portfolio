import { Tag } from "@/lib/types/isTag";
import classNames from "classnames";
import { PropsWithChildren } from "react";

interface VariantTypes {
  tags: Tag[];
}

export function Aside({ tags, children }: VariantTypes & PropsWithChildren) {
  return (
    <aside
      className={classNames(
        //   special rules and animations
        "[&_*]:pb-0 [&_p]:text-article-primary/70 transition-all duration-200 ease-linear flex-col blur-sm",
        //   base styling
        "p-2 rounded-md mb-5 md:mb-7",
        // hover
        "hover:blur-none"
      )}
    >
      {/* <div className="flex gap-1 mb-2">
        {tags.map((tag, index) => (
          <StatusTag key={index} status={tag.label} color={tag.color} />
        ))}
      </div> */}
      <div>{children}</div>
    </aside>
  );
}
