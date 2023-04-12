import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

import { Card } from "@/components/Card";
import CardGridLayout from "@/components/layouts/CardGridLayout";
import { supabase } from "@/lib/supabase/supabaseClient";
import Head from "next/head";

function capitalize(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export default function TypePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>
          Prakhar&apos;s garden | {capitalize(props.cardType?.type!)}
        </title>
      </Head>
      <div className="flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8">
        <h1 className="font-serif-variation font-serif text-6xl font-extralight text-neutral-900 md:text-8xl">
          {props.cardType?.type}.
        </h1>
        <p className="max-w-prose tracking-tight text-neutral-400">
          {props.cardType?.description}
        </p>
      </div>

      <CardGridLayout>
        {props.cards?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardGridLayout>
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const type = context.params?.type;

  // Guard: type is undefined.
  if (type === undefined) {
    return {
      notFound: true,
    };
  }

  const { data: cards, error: error_data } = await supabase
    .from("cards")
    .select("*")
    .ilike("type", `%${type}%`)
    .order("published_at", { ascending: false });

  const { data: cardType, error: error_type } = await supabase
    .from("card_types")
    .select("*")
    .ilike("type", `%${type}%`)
    .single();

  return {
    props: {
      cards,
      cardType,
    },
  };
}
