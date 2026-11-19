import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, CalendarClock, RefreshCw, Wallet, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList } from "@/components/site/FaqList";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/aluguel")({
  head: () => ({
    meta: [
      { title: "Aluguel de impressoras térmicas e coletores | BRZ Technology" },
      { name: "description", content: "Alugue impressoras térmicas e coletores de dados sem investimento inicial, com manutenção e suporte técnico." },
      { property: "og:title", content: "Aluguel de impressoras térmicas e coletores | BRZ Technology" },
      { property: "og:description", content: "Equipamentos sem investimento inicial, com manutenção e suporte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RentalPage,
});

const BENEFITS = [
  { icon: Wallet, title: "Sem investimento inicial", text: "Preserve seu caixa e pague só pelo uso." },
  { icon: Wrench, title: "Manutenção inclusa", text: "Nosso técnico cuida do equipamento para você." },
  { icon: RefreshCw, title: "Troca rápida", text: "Se der problema, providenciamos a substituição." },
  { icon: CalendarClock, title: "Flexível", text: "Ideal para picos de demanda ou uso contínuo." },
];

function RentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Aluguel"
        title={<>Equipamentos de ponta <span className="text-primary">sem imobilizar capital.</span></>}
        description="Alugue impressoras térmicas e coletores de dados com manutenção e suporte técnico inclusos."
        image={warehouseImg}
        imageAlt="Operação logística com coletor de dados"
      >
        <Button asChild variant="hero" size="xl">
          <a href={whatsappLink("vendas", "Olá, BRZ Technology! Quero saber mais sobre o aluguel de equipamentos.")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" /> Simular aluguel
          </a>
        </Button>
      </PageHero>
      <section className="py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Vantagens" title="Por que alugar com a BRZ" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card-hover h-full rounded-3xl border border-border bg-card p-7">
                  <b.icon className="size-8 text-primary" />
                  <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas sobre aluguel" />
          <Reveal className="mt-10">
            <FaqList
              items={[
                { q: "Qual o prazo mínimo de aluguel?", a: "Os prazos são combinados conforme sua necessidade. Fale com Vendas para montar a proposta." },
                { q: "A manutenção está inclusa?", a: "Sim, o suporte técnico faz parte do aluguel." },
                { q: "Posso alugar poucos equipamentos?", a: "Sim, atendemos desde uma unidade até operações maiores." },
              ]}
            />
          </Reveal>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="size-4 text-primary" /> Condições finais confirmadas na proposta.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
