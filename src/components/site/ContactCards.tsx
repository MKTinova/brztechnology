import { ArrowUpRight, MessageCircle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACTS, whatsappLink, type ContactRole } from "@/lib/contact";
import { Reveal } from "./Reveal";

const ICONS = { vendas: MessageCircle, tecnico: Wrench } as const;

export function ContactCards({ className, tone = "dark" }: { className?: string; tone?: "dark" | "paper" }) {
  return (
    <div className={cn("grid gap-5 md:grid-cols-2", className)}>
      {(["vendas", "tecnico"] as ContactRole[]).map((role, i) => {
        const Icon = ICONS[role];
        const c = CONTACTS[role];
        return (
          <Reveal key={role} delay={i * 120}>
            <a
              href={whatsappLink(role)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 md:p-9",
                tone === "paper"
                  ? "border-paper-border bg-paper-card text-paper-foreground"
                  : "border-border bg-card text-foreground",
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
                  tone === "paper" ? "text-primary-deep" : "text-primary",
                )}
              >
                {c.label}
              </span>
              <span className="relative mt-2 font-display text-2xl font-bold md:text-3xl">{c.title}</span>
              <span
                className={cn(
                  "relative mt-3 text-sm leading-relaxed",
                  tone === "paper" ? "text-paper-muted" : "text-muted-foreground",
                )}
              >
                {c.description}
              </span>
              <span className="relative mt-8 inline-flex items-center gap-2 font-display text-lg font-semibold">
                {c.display}
              </span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
