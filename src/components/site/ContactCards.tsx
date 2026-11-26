import { ArrowUpRight, Mail, MessageCircle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACTS, emailLink, whatsappLink, type ContactRole } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ICONS = { vendas: MessageCircle, tecnico: Wrench } as const;

/**
 * One card per team. Both channels are offered side by side: WhatsApp opens a
 * conversation, e-mail opens a pre-filled draft.
 */
export function ContactCards({ className, tone = "dark" }: { className?: string; tone?: "dark" | "paper" }) {
  const paper = tone === "paper";
  return (
    <div className={cn("grid gap-5 md:grid-cols-2", className)}>
      {(["vendas", "tecnico"] as ContactRole[]).map((role, i) => {
        const Icon = ICONS[role];
        const c = CONTACTS[role];
        return (
          <Reveal key={role} delay={i * 120} className="h-full">
            <div
              className={cn(
                "group card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 md:p-9",
                paper ? "border-paper-border bg-paper-card text-paper-foreground" : "border-border bg-card text-foreground",
              )}
            >
              <span className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60" />
              <div className="relative flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <ArrowUpRight className="size-6 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <span
                className={cn(
                  "relative mt-8 text-xs font-semibold uppercase tracking-[0.2em]",
                  paper ? "text-primary-deep" : "text-primary",
                )}
              >
                {c.label}
              </span>
              <span className="relative mt-2 font-display text-2xl font-bold md:text-3xl">{c.title}</span>
              <span
                className={cn(
                  "relative mt-3 text-sm leading-relaxed",
                  paper ? "text-paper-muted" : "text-muted-foreground",
                )}
              >
                {c.description}
              </span>

              <div className="relative mt-8 space-y-3">
                <a
                  href={whatsappLink(role)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors",
                    paper
                      ? "border-paper-border bg-paper hover:border-primary/50"
                      : "border-border bg-background/60 hover:border-primary/50",
                  )}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="truncate font-display text-base font-semibold">{c.display}</span>
                  </span>
                </a>
                <a
                  href={emailLink(role)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors",
                    paper
                      ? "border-paper-border bg-paper hover:border-primary/50"
                      : "border-border bg-background/60 hover:border-primary/50",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full",
                      paper ? "bg-primary/15 text-primary-deep" : "bg-primary/15 text-primary",
                    )}
                  >
                    <Mail className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      E-mail
                    </span>
                    <span className="truncate font-display text-base font-semibold">{c.email}</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
