import { HobbyProperties } from "@/lib/types/cardTypes";
import { ImageAndTextCard, ImageCard, TextCard } from "./hobbies";

type HobbyCardProps = HobbyProperties & {
  large?: boolean;
};

export function HobbyCard(props: HobbyCardProps) {
  if (props.cardStyle === "image") {
    return (
      // @ts-ignore
      <ImageCard
        label={props.label}
        large={props.large}
        {...props.properties}
      />
    );
  } else if (props.cardStyle === "text") {
    return (
      // @ts-ignore
      <TextCard label={props.label} large={props.large} {...props.properties} />
    );
  } else if (props.cardStyle === "image_and_text") {
    {
      console.log("image_and_text card props:" + props);
    }
    return (
      // @ts-ignore
      <ImageAndTextCard
        label={props.label}
        large={props.large}
        {...props.properties}
      />
    );
  } else {
    return null;
  }
}
