import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { COLLECTORS } from "@/lib/catalog";
import collectorImg from "@/assets/collector.jpg";

export const Route = createFileRoute("/coletores")({
  head: () => ({
    meta: [
      { title: "Coletores de dados para logística | BRZ Technology" },
      { name: "description", content: "Coletores de dados Zebra e Honeywell para inventário, picking e conferência. Venda e aluguel." },
      { property: "og:title", content: "Coletores de dados para logística | BRZ Technology" },
      { property: "og:description", content: "Coletores Android com touch ou teclado, para venda e aluguel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectorsPage,
});

function CollectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Coletores de dados"
        title={<>Leitura rápida em <span className="text-primary">cada etapa da logística.</span></>}
        description="Coletores Zebra e Honeywell para inventário, picking, conferência e expedição — com touch ou teclado físico."
        image={collectorImg}
        imageAlt="Coletor de dados com leitor de código de barras"
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <ProductCatalog products={COLLECTORS} />
        </div>
      </section>
      <CtaBand title="Precisa equipar sua equipe?" description="Alugue coletores para picos de demanda ou compre para uso contínuo." />
    </>
  );
}
