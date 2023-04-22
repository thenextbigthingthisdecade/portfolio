import { Tag } from "@/lib/types/isTag";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import { StatusTag } from "../StatusTag";

interface VariantTypes {
  variant: "note" | "question" | "warning";
  tags: Tag[];
}

export function Aside({
  variant,
  tags,
  children,
}: VariantTypes & PropsWithChildren) {
  return (
    <aside
      className={classNames(
        //   special rules and animations
        "[&_*]:pb-0 transition-all duration-200 ease-linear flex-col",
        //   base styling
        "p-2 rounded-md mb-5 md:mb-7 bg-neutral-50/10",
        // hover
        "hover:bg-neutral-100"
      )}
    >
      <div className="flex gap-1 mb-2">
        {tags.map((tag, index) => (
          <StatusTag key={index} status={tag.label} color={tag.color} />
        ))}
      </div>
      <div>{children}</div>
    </aside>
  );
}
