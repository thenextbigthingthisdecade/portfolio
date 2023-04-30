import { PropsWithChildren } from "react";

export function Kbd({ children }: PropsWithChildren) {
  return (
    <span className="inline-block shadow-inset-skeuo rounded px-1.5 font-tag tracking-tighter text-base bg-neutral-50/90 text-neutral-600">
      {children}
    </span>
  );
}
