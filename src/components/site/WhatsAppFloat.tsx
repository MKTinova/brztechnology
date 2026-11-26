import { Mail, MessageCircle, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACTS, emailLink, whatsappLink, type ContactRole } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ROLES: ContactRole[] = ["vendas", "tecnico"];
const ICONS = { vendas: MessageCircle, tecnico: Wrench } as const;

/**
 * Floating WhatsApp button. Its label alternates between Vendas and Técnico,
 * and opening it lets the visitor choose which team to talk to.
 */
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3200);
    return () => window.clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current: ContactRole = ROLES[index] ?? "vendas";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        role="dialog"
        aria-label="Escolha o atendimento"
        aria-hidden={!open}
        className={cn(
          "w-[19rem] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0",
        )}
      >
        <div className="bg-brand-gradient p-4 text-primary-foreground">
          <p className="font-display text-base font-bold">Como podemos ajudar?</p>
          <p className="text-xs opacity-80">Escolha o atendimento ideal — resposta rápida.</p>
        </div>
        <ul className="space-y-2 p-3">
          {ROLES.map((role) => {
            const Icon = ICONS[role];
            return (
              <li key={role}>
                <a
                  href={whatsappLink(role)}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="group flex items-start gap-3 rounded-xl border border-border p-3 transition-all hover:border-primary/50 hover:bg-secondary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{CONTACTS[role].title}</span>
                    <span className="text-xs leading-snug text-muted-foreground">
                      {CONTACTS[role].description}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-border px-3 pb-3 pt-2">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
            Prefere e-mail?
          </p>
          <div className="mt-1.5 grid gap-1">
            {ROLES.map((role) => (
              <a
                key={role}
                href={emailLink(role)}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Mail className="size-3.5 shrink-0 text-primary" />
                <span className="truncate">{CONTACTS[role].email}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento via WhatsApp"}
        className="group relative flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-5 text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
      >
        {!open && (
          <span className="absolute left-2 top-2 size-11 rounded-full bg-primary animate-pulse-ring" />
        )}
        <span className="relative grid size-11 place-items-center rounded-full bg-ink text-primary">
          {open ? <X className="size-5" /> : <WhatsAppIcon className="size-6" />}
        </span>
        <span className="relative flex flex-col items-start leading-tight">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider opacity-70">
            {open ? "Fechar" : "WhatsApp"}
          </span>
          <span key={current + String(open)} className="font-display text-sm font-bold animate-in fade-in slide-in-from-bottom-1 duration-500">
            {open ? "Atendimento" : CONTACTS[current].title}
          </span>
        </span>
      </button>
    </div>
  );
}
