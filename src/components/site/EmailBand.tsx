import { ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACTS, emailLink, type ContactRole } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * E-mail channel: one card per team, each opening a pre-filled draft in the
 * visitor's mail client.
 */
export function EmailBand({
  className,
  tone = "dark",
  eyebrow = "Atendimento por e-mail",
  title = "Prefere escrever?",
  description = "Descreva o que você precisa e a proposta ou o diagnóstico chega por e-mail. Se ajudar, anexe fotos do equipamento ou da etiqueta.",
}: {
  className?: string;
  tone?: "dark" | "paper";
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const paper = tone === "paper";
  return (
    <div className={cn("container-site", className)}>
      <SectionHeading tone={tone} eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {(["vendas", "tecnico"] as ContactRole[]).map((role, i) => {
          const c = CONTACTS[role];
          return (
            <Reveal key={role} delay={i * 120} className="h-full">
              <a
                href={emailLink(role)}
                className={cn(
                  "group flex h-full items-center gap-4 rounded-2xl border p-5 transition-colors md:p-6",
                  paper
                    ? "border-paper-border bg-paper-card hover:border-primary/50"
                    : "border-border bg-card hover:border-primary/50",
                )}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="size-6" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span
                    className={cn(
                      "text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
                      paper ? "text-primary-deep" : "text-primary",
                    )}
                  >
                    E-mail {c.label}
                  </span>
                  <span className="truncate font-display text-lg font-bold">{c.email}</span>
                  <span className={cn("mt-1 text-xs", paper ? "text-paper-muted" : "text-muted-foreground")}>
                    {c.title} — resposta no horário comercial
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
