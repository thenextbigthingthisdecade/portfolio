import { PropsWithChildren } from "react";

export function Kbd({ children }: PropsWithChildren) {
  return (
    <span className="inline-block shadow-inset-skeuo rounded px-1.5 font-mono tracking-tighter text-base font-light bg-neutral-50/90 text-neutral-900">
      {children}
    </span>
  );
}
