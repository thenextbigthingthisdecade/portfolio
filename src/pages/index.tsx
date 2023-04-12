import { Card } from "@/components/Card";
import IntroCard from "@/components/cards/IntroCard";
import CardGridLayout from "@/components/layouts/CardGridLayout";
import { supabase } from "@/lib/supabase/supabaseClient";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>Prakhar&apos;s Garden</title>
        <meta name="description" content="My digital forest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <CardGridLayout>
        <IntroCard />
        {props.featured?.map(({ card }) =>
          card && !Array.isArray(card) ? <Card key={card.id} {...card} /> : null
        )}
      </CardGridLayout>
    </>
  );
}

export async function getStaticProps() {
  const { data: featured, error } = await supabase
    .from("featured")
    .select("ordering, card:cards(*)")
    .order("ordering");

  if (error) {
    console.log(error);
  }

  return {
    props: {
      featured,
    },
  };
}
