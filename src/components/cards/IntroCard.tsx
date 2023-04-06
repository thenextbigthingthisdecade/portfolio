import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/motionVariants";
import { motion } from "framer-motion";

export default function IntroCard() {
  return (
    <motion.div
      className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <div className="h-full w-full p-4 sm:p-8">
        <div className="font-serif font-serif-variation text-2xl md:text-3xl lg:text-4xl font-light text-neutral-400">
          Heya, I&apos;m <span className="text-neutral-900">Prakhar </span>
          👋🏻 This is my{" "}
        </div>
      </div>
    </motion.div>
  );
}
