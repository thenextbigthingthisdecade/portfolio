import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/Card";
import IntroCard from "@/components/cards/IntroCard";
import CardGridLayout from "@/components/layouts/CardGridLayout";
import { supabase } from "@/lib/supabase/supabaseClient";
import Head from "next/head";

const DynamicCard = dynamic(() => import("@/components/Card"));

function Home({ featured }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(featured?.map(({ card }) => card).filter(Boolean));
  }, [featured]);

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
        {cards.map((card) => (
          <DynamicCard key={card.id} {...card} />
        ))}
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

export default Home;
