import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACTS, whatsappLink } from "@/lib/contact";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/impressoras", label: "Impressoras" },
  { to: "/coletores", label: "Coletores" },
  { to: "/aluguel", label: "Aluguel" },
  { to: "/assistencia-tecnica", label: "Assistência" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "glass border-b border-border py-2.5" : "py-4",
      )}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <Link to="/" aria-label="BRZ Technology — página inicial" className="text-foreground">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <a href={whatsappLink("vendas")} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              Pedir orçamento
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" className="rounded-full lg:hidden" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-border bg-background p-0 sm:max-w-sm [&>button]:hidden">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border p-5">
                  <SheetTitle asChild>
                    <span>
                      <Logo />
                    </span>
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="glass" size="icon" className="rounded-full" aria-label="Fechar menu">
                      <X />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-3" aria-label="Menu móvel">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.to === "/" }}
                        className="flex items-center justify-between rounded-xl px-4 py-4 font-display text-xl font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        activeProps={{ className: "text-foreground bg-secondary" }}
                      >
                        {item.label}
                        <span className="text-primary">→</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t border-border p-5">
                  {(["vendas", "tecnico"] as const).map((role) => (
                    <a
                      key={role}
                      href={whatsappLink(role)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                    >
                      <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                        <WhatsAppIcon className="size-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold">{CONTACTS[role].title}</span>
                        <span className="text-xs text-muted-foreground">{CONTACTS[role].display}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
