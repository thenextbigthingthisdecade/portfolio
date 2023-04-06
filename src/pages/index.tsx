import IntroCard from "@/components/cards/IntroCard";
import CardGridLayout from "@/components/layouts/CardGridLayout";
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
      </CardGridLayout>
    </>
  );
}
