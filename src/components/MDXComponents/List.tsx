import { PropsWithChildren } from "react";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

export function UnorderedList({ children }: PropsWithChildren) {
  return <ul className="mb-5 md:mb-7 list-none">{children}</ul>;
}

export function OrderedList({ children }: PropsWithChildren) {
  return <ol className="mb-5 md:mb-7 list-item">{children}</ol>;
}

export function ListElement({ children }: PropsWithChildren) {
  return (
    <li className="mb-1">
      <ArrowRightIcon className="inline mr-2 text-neutral-500" />
      {children}
    </li>
  );
}
