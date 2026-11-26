import { createFileRoute } from "@tanstack/react-router";
import { Cog, Mail, Printer, ScanBarcode, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CONTACTS, emailLink, whatsappLink } from "@/lib/contact";
import technicianImg from "@/assets/technician.jpg";

export const Route = createFileRoute("/assistencia-tecnica")({
  head: () => ({
    meta: [
      { title: "Assistência técnica em impressoras térmicas e coletores | BRZ Technology" },
      { name: "description", content: "Manutenção, configuração e instalação de impressoras térmicas e coletores de dados com técnico especializado." },
      { property: "og:title", content: "Assistência técnica | BRZ Technology" },
      { property: "og:description", content: "Manutenção e configuração de impressoras térmicas e coletores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportPage,
});

const SERVICES = [
  { icon: Printer, title: "Manutenção de impressoras", text: "Limpeza, troca de cabeça de impressão e roletes." },
  { icon: ScanBarcode, title: "Manutenção de coletores", text: "Diagnóstico, bateria, tela e leitor." },
  { icon: Settings2, title: "Configuração", text: "Drivers, layouts de etiqueta" },
  { icon: Cog, title: "Instalação", text: "Equipamento pronto para sua operação." },
];

function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistência técnica"
        title={<>Seu equipamento <span className="text-primary">de volta ao trabalho.</span></>}
        description={`Fale direto com nosso técnico pelo WhatsApp ${CONTACTS.tecnico.display} ou por e-mail ${CONTACTS.tecnico.email}.`}
        image={technicianImg}
        imageAlt="Técnico consertando impressora térmica"
      >
        <Button asChild variant="hero" size="xl">
          <a href={whatsappLink("tecnico")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" /> Chamar o técnico
          </a>
        </Button>
        <Button asChild variant="ink" size="xl" className="border border-border">
          <a href={emailLink("tecnico")}>
            <Mail className="size-5" /> Enviar e-mail
          </a>
        </Button>
      </PageHero>
      <section className="py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Serviços" title="O que o nosso técnico resolve" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card-hover h-full rounded-3xl border border-border bg-card p-7">
                  <s.icon className="size-8 text-primary" />
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Equipamento parado?" description="Chame o técnico agora e descreva o problema." />
    </>
  );
}
