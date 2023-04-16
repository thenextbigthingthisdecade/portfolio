import { WritingProperties } from "@/lib/types/cardTypes";

import { CardHeader } from "../CardHeader";

type WritingCardProps = WritingProperties & {
  large?: boolean;
};

export function WritingCard(props: WritingCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader
        type="Writing"
        label={props.type}
        link={{
          url: props.url,
          tooltipLabel: "Read full blog post",
        }}
      />

      <div className="p-5">
        <h3 className="font-serif font-serif-variation md:font-extralight font-light !tracking-tight md:text-5xl text-3xl">
          {props.title}
        </h3>
        <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
          {props.publishedOn}
        </span>
        <p className="font-reading line-clamp-3 md:line-clamp-4 text-article-note">
          {props.contentPreview}
        </p>
      </div>
    </div>
  );
}
