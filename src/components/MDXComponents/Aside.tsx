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
        "[&_*]:pb-0 [&_p]:text-article-primary/70 transition-all duration-150 ease-linear flex-col blur-sm",
        //   base styling
        "py-2 rounded-md mb-5 md:mb-7 mx-auto w-3/4",
        // hover
        "hover:blur-none"
      )}
    >
      <div>{children}</div>
    </aside>
  );
}
