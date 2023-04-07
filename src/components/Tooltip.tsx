import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classNames from "classnames";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
} & Pick<
  React.ComponentProps<typeof TooltipPrimitive.Content>,
  "side" | "align"
>;

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {props.children}
      </TooltipPrimitive.Trigger>

      {typeof window !== "undefined" && (
        <TooltipPrimitive.Portal
          container={document.getElementsByTagName("main")[0]}
        >
          <TooltipPrimitive.Content
            side={props.side}
            align={props.align}
            className={classNames(
              // Layout
              "rounded-lg bg-white px-2.5 py-1.5 drop-shadow-lg shadow-gray-600",
              // Typography
              "font-sans text-sm text-gray-700",
              // Animation
              "will-change-auto data-delayed-open:animate-in data-closed:animate-out fade-in-50",
              // Animation: opacity
              "[--tw-enter-opacity:0] [--tw-exit-opacity:0]",
              // Animation: translate
              //   "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50"
              "data-[side=bottom]:[--tw-enter-translate-y:-4px]",
              "data-[side=bottom]:[--tw-exit-translate-y:-4px]",
              "data-[side=top]:[--tw-enter-translate-y:4px]",
              "data-[side=top]:[--tw-exit-translate-y:4px]",
              "data-[side=left]:[--tw-enter-translate-x:4px]",
              "data-[side=left]:[--tw-exit-translate-x:4px]",
              "data-[side=right]:[--tw-enter-translate-x:-4px]",
              "data-[side=right]:[--tw-exit-translate-x:-4px]"
            )}
            sideOffset={8}
          >
            {props.content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      )}
    </TooltipPrimitive.Root>
  );
}