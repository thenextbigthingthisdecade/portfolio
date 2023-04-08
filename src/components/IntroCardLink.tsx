import { Tooltip } from "@/components/Tooltip";
import classNames from "classnames";
import Link from "next/link";

interface IntroCardLinkProps {
  side: "left" | "top" | "right" | "bottom";
  content: string;
  link_text: string;
}

export default function IntroCardLink({
  side = "top",
  content,
  link_text,
}: IntroCardLinkProps) {
  return (
    <Tooltip side={side} content={content}>
      <Link
        href={"/hobbies"}
        //   target="_blank"
        className={classNames(
          "rounded transition-all duration-200 ease-linear text-neutral-900",
          // State: focus
          "focus-visible:ring-4 focus-visible:ring-blue-200"
          // State: hover
        )}
      >
        {link_text}
      </Link>
    </Tooltip>
  );
}
