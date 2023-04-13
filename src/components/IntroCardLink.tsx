import classNames from "classnames";
import Link from "next/link";

interface IntroCardLinkProps {
  //   side: "left" | "top" | "right" | "bottom";
  //   content: string;
  link_text: string;
  link: string;
}

export default function IntroCardLink({
  //   side = "top",
  //   content,
  link_text,
  link,
}: IntroCardLinkProps) {
  return (
    // <Tooltip side={side} content={content}>
    <Link
      href={link}
      //   target="_blank"
      className={classNames(
        "transition-all duration-200 ease-linear hover:text-neutral-900 underline underline-offset-2 decoration-neutral-200 decoration-1 hover:decoration-neutral-700",
        // State: focus
        "focus-visible:ring-4 focus-visible:ring-blue-200"
        // State: hover
      )}
    >
      {link_text}
    </Link>
    // </Tooltip>
  );
}
