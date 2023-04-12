import classNames from "classnames";
import { motion } from "framer-motion";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/motionVariants";
import { Database } from "@/lib/supabase/database.types";
import { HobbyCard } from "./cards/HobbyCard";
import { ProjectCard } from "./cards/ProjectCard";
import { ReadingCard } from "./cards/ReadingCard";
import { WritingCard } from "./cards/WritingCard";

type CardProps = Database["public"]["Tables"]["cards"]["Row"];

export function Card(props: CardProps) {
  function renderSpecificCard() {
    if (props.type == "projects") {
      // @ts-ignore
      return <ProjectCard large={props.large} {...props.properties} />;
    } else if (props.type == "writing") {
      // @ts-ignore
      return <WritingCard large={props.large} {...props.properties} />;
    } else if (props.type === "reading") {
      // @ts-ignore
      return <ReadingCard large={props.large} {...props.properties} />;
    } else if (props.type === "hobbies") {
      // @ts-ignore
      return <HobbyCard large={props.large} {...props.properties} />;
    } else {
      return null;
    }
  }

  return (
    <div
      className={classNames(
        props.large ? "aspect-[2] sm:col-span-2" : "aspect-square",
        "px-1 pb-2"
      )}
    >
      <motion.div
        className={classNames(
          "group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors",
          // State: focus
          "focus-within:bg-neutral-100",
          // State: hover
          "hover:bg-neutral-100"
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {renderSpecificCard()}
      </motion.div>
    </div>
  );
}
