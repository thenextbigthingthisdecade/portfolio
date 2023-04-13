import { WritingProperties } from "@/lib/types/cardTypes";
import classNames from 'classnames'

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
        <h3 className={classNames(
        (() => {
          if (props.large) {
            return "text-4.5xl/10"
            }
            else {
                return "text-4xl"
              }
        })(),
        "font-display font-light !tracking-tight"
        )}>
          {props.title}
        </h3>
        <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
          {props.publishedOn}
        </span>
        <p className="leading-relaxed text-neutral-700 line-clamp-3 md:line-clamp-4">
          {props.contentPreview}
        </p>
      </div>
    </div>
  );
}
