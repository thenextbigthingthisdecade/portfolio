import { PropsWithChildren } from "react";

export function CodeInline({ children }: PropsWithChildren) {
  return (
    <code className="tracking-tight text-sm mx-[2px] word-spacing-reduced bg-neutral-200/50 px-1.5 py- rounded-md">
      {children}
    </code>
  );
}
