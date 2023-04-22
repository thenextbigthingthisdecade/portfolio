import { PropsWithChildren } from "react";

// fix this component
export function CodeEditor({ children }: PropsWithChildren) {
  return (
    <pre className="text-sm mt-2 tracking-tight rounded-xl bg-neutral-100 px-2 py-1 mb-5 md:mb-7">
      {children}
    </pre>
  );
}

export function CodeInline({ children }: PropsWithChildren) {
  return (
    <code className="tracking-tight text-sm mx-[2px] word-spacing-reduced bg-neutral-200/50 px-1 py-[2px] rounded-md">
      {children}
    </code>
  );
}
