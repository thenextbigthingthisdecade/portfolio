import { Tag } from "@/lib/types/isTag";
import { Link } from "@/lib/types/linkType";
import { CardHeader } from "../../CardHeader";
import { StatusTag } from "../../StatusTag";

export type TextCardProperties = {
  tags: Tag[];
  heading: string;
  subheading: string;
  body: string;
  link?: Link;
};

type TextCardProps = TextCardProperties & {
  label: string;
  large?: boolean;
};

export function TextCard(props: TextCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader type="Hobbies" label={props.label} />

      <div className="p-5">
        <div className="flex gap-2">
          {props.tags.map((tag, index) => (
            <StatusTag key={index} status={tag.label} color={tag.color} />
          ))}
        </div>
        <h3 className="font-serif-variation mt-3 mb-5 font-serif text-4xl font-light md:text-5xl lg:text-6xl">
          {props.heading}
        </h3>
        <p className="text-neutral-400">
          <span>{props.subheading}</span>
        </p>
        <p className="text-neutral-700 line-clamp-1">{props.body}</p>
      </div>
    </div>
  );
}
