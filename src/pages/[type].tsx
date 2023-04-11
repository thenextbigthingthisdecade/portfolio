// eslint-disable-next-line @next/next/no-document-import-in-page

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function TypePage() {
  return (
    <>
      {/* <Head title={capitalize(props.cardType?.type ?? "")} />

      <div className="flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8">
        <h1 className="font-serif-variation font-serif text-6xl font-extralight text-neutral-900 md:text-8xl">
          {props.cardType?.type}.
        </h1>
        <p className="max-w-prose tracking-tight text-neutral-400">
          {props.cardType?.description}
        </p>
      </div>

      <CardGridLayout>
        {props.cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardGridLayout> */}
    </>
  );
}
