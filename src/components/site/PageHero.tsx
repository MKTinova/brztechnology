import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      {image && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img src={image} alt={imageAlt ?? ""} className="size-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      )}
      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current" />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
