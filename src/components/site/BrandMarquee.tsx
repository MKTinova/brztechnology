const ITEMS = [
  "Zebra",
  "Honeywell",
  "Argox",
  "Impressoras térmicas",
  "Coletores de dados",
  "Etiquetas e ribbons",
  "Assistência técnica",
];

export function BrandMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span
              className={
                i % ITEMS.length < 3
                  ? "font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
                  : "font-display text-lg font-medium text-muted-foreground md:text-xl"
              }
            >
              {item}
            </span>
            <span className="size-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
