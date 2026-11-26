import zebra from "@/assets/brands/zebra.svg";
import honeywell from "@/assets/brands/honeywell.svg";
import argox from "@/assets/brands/argox.png";
import elgin from "@/assets/brands/elgin.png";

const LOGOS = [
  { name: "Zebra", src: zebra, label: false, cls: "" },
  { name: "Honeywell", src: honeywell, label: true, cls: "max-h-8" },
  { name: "Argox", src: argox, label: false, cls: "scale-[2.2]" },
  { name: "Elgin", src: elgin, label: true, cls: "max-h-10" },
];

export function BrandMarquee() {
  const row = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-8">
      <p className="container-site mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Marcas que trabalhamos
      </p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-6 motion-reduce:animate-none">
        {row.map((logo, i) => (
          <div
            key={i}
            className="grid h-20 w-52 shrink-0 place-items-center rounded-2xl border border-border bg-foreground px-6 py-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-full w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap">
              <img src={logo.src} alt={`Logo ${logo.name}`} loading="lazy" className={`max-h-12 object-contain ${logo.label ? "w-auto" : "w-full"} ${logo.cls}`} />
              {logo.label && <span className="font-display text-lg font-extrabold text-background">{logo.name}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
