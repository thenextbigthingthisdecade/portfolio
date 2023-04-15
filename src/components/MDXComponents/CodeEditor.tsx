import { PropsWithChildren } from "react";

export function CodeEditor({ children }: PropsWithChildren) {
  return (
    <pre className="text-sm mt-2 tracking-tight rounded-xl bg-neutral-100 px-2 py-1">
      {children}
    </pre>
  );
}
