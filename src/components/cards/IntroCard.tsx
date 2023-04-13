import { Tooltip } from "@/components/Tooltip";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/motionVariants";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import IntroCardLink from "../IntroCardLink";
import { Kbd } from "../Kbd";

export default function IntroCard() {
  return (
    <motion.div
      className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <div className="h-full w-full p-4 sm:p-8">
        <h1 className="text-xl !tracking-tighter font-light text-neutral-400">
          <span className="text-6xl text-neutral-900 md:text-8xl font-serif font-serif-variation">
            hey.
          </span>
          <br />
          <br />
          I&apos;m <span className="text-neutral-900">Prakhar Nagpal. </span>
          Welcome to my{" "}
          <Tooltip
            side="top"
            content="A Brief History & Ethos of the Digital Garden | Maggie Appleton"
          >
            <Link
              href={"https://maggieappleton.com/garden-history"}
              target="_blank"
              className={classNames(
                "rounded transition-all ease-linear duration-200 cursor-alias",
                // State: focus
                "focus-visible:ring-4 focus-visible:ring-blue-200",
                // State: hover
                "hover:text-neutral-900 underline underline-offset-2 decoration-neutral-200 decoration-1 hover:decoration-neutral-700"
              )}
            >
              digital garden
            </Link>
          </Tooltip>{" "}
          🪴 I like building stuff, and{" "}
          <Tooltip
            side="top"
            content="Everything I'm learning right now | My library"
          >
            <Link
              href={"#"}
              //   target="_blank"
              className={classNames(
                "rounded transition-all duration-200",
                // State: focus
                "focus-visible:ring-4 focus-visible:ring-blue-200",
                // State: hover
                "hover:text-neutral-900 underline underline-offset-2 decoration-neutral-200 decoration-1 hover:decoration-neutral-700"
              )}
            >
              learning anything
            </Link>
          </Tooltip>{" "}
          I can.
          <br />
          <br />
          In my free time, I enjoy{" "}
          <IntroCardLink
            // side={"top"}
            // content={"Hobbies | Cooking"}
            link_text={"cooking"}
            link={"/hobbies"}
          />{" "}
          (a lot of Indian), playing{" "}
          <IntroCardLink
            // side={"top"}
            // content={"Hobbies | Badminton"}
            link_text={"badminton"}
            link={"/hobbies"}
          />{" "}
          and{" "}
          <IntroCardLink
            // side={"top"}
            // content={"Hobbies | Interior Design"}
            link_text={"re-decorating"}
            link={"/hobbies"}
          />{" "}
          my room. I&apos;ve also been{" "}
          <IntroCardLink
            // side={"top"}
            // content={"Prakhar's garden | Reading"}
            link_text={"reading"}
            link="/reading"
          />{" "}
          and{" "}
          <IntroCardLink
            // side={"top"}
            // content={"Prakhar's garden | Writing"}
            link_text={"writing"}
            link="/writing"
          />{" "}
          as much as I can, although I have been focusing on CS for a while now,
          so that&apos;s something I&apos;m trying to fix.
          <br />
          <br />
          Music is a pretty big part of my life, so I made sure to add some of
          my favorite tracks here! Press{" "}
          <span className="inline-flex gap-1 items-center justify-center">
            {["ctrl+P"].map((elem, index) => (
              <Kbd key={index}>{elem}</Kbd>
            ))}
          </span>{" "}
          to pause,{" "}
          <span className="inline-flex gap-1 items-center justify-center">
            {["option+right", "option+left"].map((elem, index) => (
              <Kbd key={index}>{elem}</Kbd>
            ))}
          </span>{" "}
          to change tracks,{" "}
          <span className="inline-flex gap-1 items-center justify-center">
            {["option+up", "option+down"].map((elem, index) => (
              <Kbd key={index}>{elem}</Kbd>
            ))}
          </span>{" "}
          to reduce/increase volume.
        </h1>
      </div>
    </motion.div>
  );
}
