import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { CONTACTS, emailLink, whatsappLink } from "@/lib/contact";
import { Logo } from "./Logo";
import { NAV } from "./Header";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo showTagline />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Venda, aluguel e assistência técnica de impressoras térmicas e coletores de dados para
            logística, varejo e indústria.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Zebra", "Honeywell", "Argox", "Elgin"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Navegação</h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Atendimento</h3>
          <ul className="mt-5 space-y-3">
            {(["vendas", "tecnico"] as const).map((role) => (
              <li key={role}>
                <a
                  href={whatsappLink(role)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-primary/50"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      WhatsApp {CONTACTS[role].label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{CONTACTS[role].display}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ou por e-mail
          </p>
          <ul className="mt-3 space-y-2">
            {(["vendas", "tecnico"] as const).map((role) => (
              <li key={role}>
                <a
                  href={emailLink(role)}
                  className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-primary/50"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      E-mail {CONTACTS[role].label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{CONTACTS[role].email}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BRZ Technology. Todos os direitos reservados.</p>
          <p>Zebra, Honeywell, Argox e Elgin são marcas de seus respectivos proprietários.</p>
        </div>
      </div>
    </footer>
  );
}
