import { ComponentProps, PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="font-reading text-2xl">{children}</h1>;
}
export function H2(props: ComponentProps<"h2">) {
  return <h2 className="font-reading">{props.children}</h2>;
}
export function H3() {
  return <></>;
}
export function H4() {
  return <></>;
}
export function H5() {
  return <></>;
}
export function H6() {
  return <></>;
}
