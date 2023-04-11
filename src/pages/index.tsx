import { Card } from "@/components/Card";
import IntroCard from "@/components/cards/IntroCard";
import CardGridLayout from "@/components/layouts/CardGridLayout";
import { featuredCards } from "@/lib/data/cards";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prakhar&apos;s Forest</title>
        <meta name="description" content="My digital forest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <CardGridLayout>
        <IntroCard />

        {featuredCards.map((card) =>
          card ? <Card key={card.id} {...card} /> : null
        )}
      </CardGridLayout>
    </>
  );
}
