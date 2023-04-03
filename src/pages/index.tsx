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
      <main className="font-serif font-serif-variation text-2xl md:text-3xl lg:text-4xl font-light text-neutral-400">
        Hey there, I&apos;m <span className="text-neutral-900">Prakhar</span>.
      </main>
    </>
  );
}
