import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CalendarClock,
  Factory,
  HeartPulse,
  PackageCheck,
  Printer,
  ScanBarcode,
  ShoppingBag,
  Store,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { ContactCards } from "@/components/site/ContactCards";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList, type Faq } from "@/components/site/FaqList";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteBuilder } from "@/components/site/QuoteBuilder";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { COLLECTORS, PRINTERS } from "@/lib/catalog";
import { whatsappLink } from "@/lib/contact";
import heroImg from "@/assets/hero-printer.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import collectorImg from "@/assets/collector.jpg";
import printerImg from "@/assets/printer-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRZ Technology | Venda e aluguel de impressoras térmicas e coletores" },
      {
        name: "description",
        content:
          "Impressoras térmicas Zebra, Honeywell, Argox e Elgin e coletores de dados para logística. Venda, aluguel e assistência técnica com atendimento rápido pelo WhatsApp.",
      },
      { property: "og:title", content: "BRZ Technology | Impressoras térmicas e coletores de dados" },
      {
        property: "og:description",
        content: "Venda, aluguel e assistência técnica de impressoras térmicas e coletores para logística.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SOLUTIONS = [
  {
    icon: ShoppingBag,
    title: "Venda",
    text: "Equipamentos novos das principais marcas, com orientação para escolher o modelo certo para sua operação.",
    to: "/impressoras" as const,
    cta: "Ver catálogo",
  },
  {
    icon: CalendarClock,
    title: "Aluguel",
    text: "Tenha impressoras e coletores sem investimento inicial, com manutenção inclusa e troca rápida.",
    to: "/aluguel" as const,
    cta: "Como funciona",
  },
  {
    icon: Wrench,
    title: "Assistência técnica",
    text: "Manutenção, configuração e instalação com técnico especializado direto no WhatsApp.",
    to: "/assistencia-tecnica" as const,
    cta: "Falar com técnico",
  },
];

const STEPS = [
  { title: "Conte sua necessidade", text: "Volume de etiquetas, ambiente e tipo de leitura." },
  { title: "Receba a indicação", text: "Sugerimos o modelo ideal para compra ou aluguel." },
  { title: "Instalação e configuração", text: "Entregamos o equipamento pronto para trabalhar." },
  { title: "Suporte contínuo", text: "Técnico dedicado sempre que você precisar." },
];

const SEGMENTS = [
  { icon: Truck, label: "Logística e transporte" },
  { icon: Boxes, label: "Centros de distribuição" },
  { icon: PackageCheck, label: "E-commerce" },
  { icon: Store, label: "Varejo" },
  { icon: Factory, label: "Indústria" },
  { icon: HeartPulse, label: "Saúde e laboratórios" },
];

const FAQS: Faq[] = [
  {
    q: "Vocês trabalham com quais marcas?",
    a: "Trabalhamos com impressoras térmicas Zebra, Honeywell, Argox e Elgin, além de coletores de dados Zebra e Honeywell. Se você precisa de outra marca, fale com nosso time de vendas.",
  },
  {
    q: "É melhor comprar ou alugar?",
    a: "Depende do seu volume e do tempo de uso. O aluguel evita investimento inicial e inclui manutenção; a compra costuma compensar no uso de longo prazo. Nosso time te ajuda a comparar.",
  },
  {
    q: "Vocês fazem manutenção em equipamentos que não compraram com vocês?",
    a: "Sim. Nosso técnico atende impressoras térmicas e coletores das marcas que trabalhamos. Envie uma mensagem para o WhatsApp do técnico contando o problema.",
  },
  {
    q: "Como peço um orçamento?",
    a: "Use o montador de orçamento nesta página ou fale direto com Vendas pelo WhatsApp. Você recebe a proposta pela própria conversa.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-28 md:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-site relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:pb-24">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Tecnologia em automação de dados
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl">
              Impressoras térmicas e coletores para uma{" "}
              <span className="text-brand-gradient">logística sem pausas.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Venda e aluguel de equipamentos Zebra, Honeywell, Argox e Elgin, com assistência técnica
              especializada e atendimento direto pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={whatsappLink("vendas")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Pedir orçamento
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/impressoras">
                  Ver equipamentos
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["4", "marcas líderes"],
                ["2", "formas de ter: compra ou aluguel"],
                ["1", "técnico dedicado no WhatsApp"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-extrabold text-primary">{n}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
              <img
                src={heroImg}
                alt="Impressora térmica industrial imprimindo etiquetas com código de barras"
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover object-right"
              />
              <div className="pointer-events-none absolute inset-x-[30%] h-0.5 bg-primary shadow-glow animate-scan motion-reduce:hidden" />
            </div>
            <div className="glass absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border p-4 shadow-card animate-float sm:left-[-1.5rem]">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <ScanBarcode className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Leitura e impressão</p>
                <p className="text-xs text-muted-foreground">Prontos para sua operação</p>
              </div>
            </div>
            <div className="glass absolute -top-5 right-4 hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold sm:flex">
              <BadgeCheck className="size-4 text-primary" />
              Manutenção inclusa no aluguel
            </div>
          </Reveal>
        </div>
      </section>

      <BrandMarquee />

      {/* SOLUTIONS */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="O que fazemos"
            title={
              <>
                Uma parceira completa para{" "}
                <span className="text-primary">identificação e coleta de dados</span>
              </>
            }
            description="Do primeiro orçamento ao suporte do dia a dia, cuidamos dos equipamentos para sua equipe focar no que importa."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link
                  to={s.to}
                  className="group card-hover flex h-full flex-col rounded-3xl border border-border bg-card p-8"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-8 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {s.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — paper section */}
      <section className="relative bg-paper py-20 text-paper-foreground md:py-28">
        <div className="bg-grid-paper pointer-events-none absolute inset-0" />
        <div className="container-site relative">
          <SectionHeading
            tone="paper"
            eyebrow="Linhas de produtos"
            title="Escolha a linha certa para sua operação"
            description="Impressoras para etiquetas de produtos, expedição e rastreabilidade. Coletores para inventário, picking e conferência."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                to: "/impressoras" as const,
                img: printerImg,
                icon: Printer,
                title: "Impressoras térmicas",
                text: "Modelos de mesa, industriais e portáteis.",
                count: `${PRINTERS.length} modelos`,
                alt: "Impressora térmica industrial",
              },
              {
                to: "/coletores" as const,
                img: collectorImg,
                icon: ScanBarcode,
                title: "Coletores de dados",
                text: "Android, touch ou teclado, para todo tipo de ambiente.",
                count: `${COLLECTORS.length} modelos`,
                alt: "Coletor de dados com leitor de código de barras",
              },
            ].map((c, i) => (
              <Reveal key={c.to} delay={i * 120}>
                <Link
                  to={c.to}
                  className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-8 text-foreground md:p-10"
                >
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <div className="relative flex items-end justify-between gap-6">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        <c.icon className="size-3.5" />
                        {c.count}
                      </span>
                      <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">{c.title}</h3>
                      <p className="mt-2 text-muted-foreground">{c.text}</p>
                    </div>
                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-foreground text-ink transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="size-5 transition-transform group-hover:-rotate-45" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Mais procurados"
              title="Destaques do catálogo"
              description="Clique em Comprar ou Alugar e fale direto com Vendas sobre o modelo."
            />
            <Button asChild variant="glass" size="pill">
              <Link to="/impressoras">
                Ver todas as impressoras <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[PRINTERS[0], PRINTERS[1], PRINTERS[5], COLLECTORS[0]].filter((p): p is (typeof PRINTERS)[number] => Boolean(p)).map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + STEPS */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={warehouseImg}
                alt="Operadora de armazém lendo código de barras com coletor de dados"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5]"
              />
            </div>
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl border border-border p-5">
              <p className="font-display text-lg font-bold">Menos parada, mais produtividade.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Equipamento certo + suporte rápido = operação rodando.
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Como funciona"
              title="Do pedido à operação em 4 passos"
            />
            <ol className="mt-10 space-y-4">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 90}>
                  <div className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                    <span className="font-display text-3xl font-extrabold text-primary/40 transition-colors group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="border-y border-border bg-ink py-16">
        <div className="container-site">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Soluções para diversos segmentos
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {SEGMENTS.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border p-5 text-center transition-colors hover:border-primary/40">
                  <s.icon className="size-7 text-primary" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="orcamento" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Orçamento em 1 minuto"
            title="Monte seu pedido e envie pelo WhatsApp"
            description="Selecione as opções, veja a mensagem pronta e envie direto para o nosso time de vendas."
          />
          <Reveal className="mt-12">
            <QuoteBuilder />
          </Reveal>
        </div>
      </section>

      {/* CONTACT + FAQ */}
      <section className="bg-paper py-20 text-paper-foreground md:py-28">
        <div className="container-site">
          <SectionHeading
            tone="paper"
            align="center"
            eyebrow="Atendimento"
            title="Fale com a pessoa certa"
            description="Dois canais diretos no WhatsApp: um para vendas e outro para suporte técnico."
          />
          <ContactCards tone="paper" className="mx-auto mt-12 max-w-4xl" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title="Perguntas que sempre recebemos"
              description="Não encontrou sua resposta? Chame no WhatsApp."
            />
          </div>
          <Reveal className="lg:col-span-3">
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
