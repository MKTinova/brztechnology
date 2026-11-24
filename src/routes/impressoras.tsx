import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { PRINTERS } from "@/lib/catalog";
import printerImg from "@/assets/printer-industrial.jpg";

export const Route = createFileRoute("/impressoras")({
  head: () => ({
    meta: [
      { title: "Impressoras térmicas Zebra, Honeywell, Argox e Elgin | BRZ Technology" },
      { name: "description", content: "Impressoras térmicas de mesa, industriais e portáteis Zebra, Honeywell, Argox e Elgin para venda e aluguel." },
      { property: "og:title", content: "Impressoras térmicas para venda e aluguel | BRZ Technology" },
      { property: "og:description", content: "Modelos de mesa, industriais e portáteis das principais marcas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrintersPage,
});

function PrintersPage() {
  return (
    <>
      <PageHero
        eyebrow="Impressoras térmicas"
        title={<>Etiquetas nítidas, <span className="text-primary">operação sem parar.</span></>}
        description="Modelos de mesa, industriais e portáteis Zebra, Honeywell, Argox e Elgin. Filtre, escolha e fale com Vendas para comprar ou alugar."
        image={printerImg}
        imageAlt="Impressora térmica industrial"
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <ProductCatalog products={PRINTERS} />
        </div>
      </section>
      <CtaBand title="Não sabe qual modelo escolher?" description="Conte seu volume de etiquetas e indicamos a impressora ideal." />
    </>
  );
}
