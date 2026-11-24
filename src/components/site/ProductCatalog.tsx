import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {["Todas", ...options].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          aria-pressed={value === opt}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
            value === opt
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))), [products]);
  const types = useMemo(() => Array.from(new Set(products.map((p) => p.type))), [products]);
  const [brand, setBrand] = useState("Todas");
  const [type, setType] = useState("Todas");

  const filtered = products.filter(
    (p) => (brand === "Todas" || p.brand === brand) && (type === "Todas" || p.type === type),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/60 p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <FilterGroup label="Marca" options={brands} value={brand} onChange={setBrand} />
          <FilterGroup label="Tipo" options={types} value={type} onChange={setType} />
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "modelo" : "modelos"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-border py-16 text-center">
          <SearchX className="size-10 text-muted-foreground" />
          <p className="mt-4 font-semibold">Nenhum modelo com esses filtros</p>
          <button
            type="button"
            onClick={() => {
              setBrand("Todas");
              setType("Todas");
            }}
            className="mt-3 text-sm font-medium text-primary hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
