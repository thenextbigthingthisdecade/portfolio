import { PropsWithChildren } from "react";

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="mb-7">{children}</p>;
}
