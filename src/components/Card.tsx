import classNames from "classnames";
import { motion } from "framer-motion";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/motionVariants";
import { CardProps } from "@/lib/types/cardTypes";
import { ProjectCard } from "./cards/ProjectCard";

export function Card(props: CardProps) {
  function renderSpecificCard() {
    if (props.type == "projects") {
      // @ts-ignore
      return <ProjectCard large={props.large} {...props.properties} />;
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
