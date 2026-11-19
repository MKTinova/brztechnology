import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaBand({
  title = "Pronto para acelerar sua operação?",
  description = "Fale agora com nosso time e receba uma proposta sob medida para compra ou aluguel.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-10 text-primary-foreground md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full border-[40px] border-primary-foreground/10" />
          <div className="pointer-events-none absolute -bottom-24 right-40 size-56 rounded-full border-[24px] border-primary-foreground/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
              <p className="mt-4 text-base opacity-80 md:text-lg">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="ink" size="xl">
                <a href={whatsappLink("vendas")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Falar com Vendas
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                className="border border-primary-foreground/30 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/10"
              >
                <a href={whatsappLink("tecnico")} target="_blank" rel="noopener noreferrer">
                  Suporte Técnico
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
