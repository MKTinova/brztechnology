import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productMessage, whatsappLink } from "@/lib/contact";
import type { Product } from "@/lib/catalog";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-ink">
        <img
          src={product.image}
          alt={`${product.name} — ${product.kind === "coletor" ? "coletor de dados" : "impressora térmica"} ${product.type.toLowerCase()}`}
          loading="lazy"
          width={600}
          height={600}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
            {product.brand}
          </span>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {product.type}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <ul className="mt-4 space-y-2">
          {product.specs.map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-foreground/85">
              <Check className="size-4 shrink-0 text-primary" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <Button asChild variant="hero" size="pill">
            <a
              href={whatsappLink("vendas", productMessage(product.name, "comprar"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              Comprar
            </a>
          </Button>
          <Button asChild variant="glass" size="pill">
            <a
              href={whatsappLink("vendas", productMessage(product.name, "alugar"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Alugar
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
