import { PropsWithChildren } from "react";

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="pb-5 md:pb-7">{children}</p>;
}
