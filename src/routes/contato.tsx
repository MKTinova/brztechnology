import { createFileRoute } from "@tanstack/react-router";
import { ContactCards } from "@/components/site/ContactCards";
import { PageHero } from "@/components/site/PageHero";
import { QuoteBuilder } from "@/components/site/QuoteBuilder";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e orçamento | BRZ Technology" },
      { name: "description", content: "Fale com Vendas ou com o Suporte Técnico da BRZ Technology pelo WhatsApp e peça seu orçamento." },
      { property: "og:title", content: "Contato e orçamento | BRZ Technology" },
      { property: "og:description", content: "WhatsApp de Vendas e Suporte Técnico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Fale com a <span className="text-primary">pessoa certa.</span></>}
        description="Vendas para compra, aluguel e orçamentos. Técnico para manutenção e suporte."
      />
      <section className="pb-16">
        <div className="container-site">
          <ContactCards />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-site">
          <SectionHeading eyebrow="Orçamento" title="Monte seu pedido" />
          <Reveal className="mt-10">
            <QuoteBuilder />
          </Reveal>
        </div>
      </section>
    </>
  );
}
