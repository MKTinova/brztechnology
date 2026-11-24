import { Minus, Plus, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { buildQuoteMessage, whatsappLink, RENTAL_MONTHS, type QuoteRequest } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const MODES: Array<{ value: QuoteRequest["mode"]; label: string; hint: string }> = [
  { value: "alugar", label: "Alugar", hint: "Sem investimento inicial" },
  { value: "comprar", label: "Comprar", hint: "Equipamento é seu" },
];
const CATEGORIES = [
  "Impressora térmica de mesa",
  "Impressora térmica industrial",
  "Impressora térmica portátil",
  "Coletor de dados",
  "Etiquetas e ribbons",
];
const BRAND_OPTIONS = ["Zebra", "Honeywell", "Argox", "Elgin", "Me indiquem a melhor"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200",
        active
          ? "border-primary bg-primary/12 text-foreground ring-1 ring-primary"
          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-3">
      <legend className="mb-3 flex items-center gap-3 font-display text-sm font-semibold">
        <span className="grid size-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {n}
        </span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function QuoteBuilder() {
  const [q, setQ] = useState<QuoteRequest>({
    mode: "alugar",
    rentalMonths: RENTAL_MONTHS[0],
    category: CATEGORIES[0] ?? "Impressora térmica de mesa",
    brand: BRAND_OPTIONS[4] ?? "Me indiquem a melhor",
    quantity: 1,
    name: "",
    company: "",
    city: "",
    notes: "",
  });
  const set = <K extends keyof QuoteRequest>(k: K, v: QuoteRequest[K]) => setQ((p) => ({ ...p, [k]: v }));
  const message = buildQuoteMessage(q);

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-5">
      <form
        className="space-y-8 p-6 md:p-10 lg:col-span-3"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappLink("vendas", message), "_blank", "noopener,noreferrer");
        }}
      >
        <Step n={1} title="Você quer comprar ou alugar?">
          <div className="grid grid-cols-2 gap-3">
            {MODES.map((m) => (
              <Chip key={m.value} active={q.mode === m.value} onClick={() => set("mode", m.value)}>
                <span className="block font-display text-base font-semibold">{m.label}</span>
                <span className="block text-xs text-muted-foreground">{m.hint}</span>
              </Chip>
            ))}
          </div>
          {q.mode === "alugar" && (
            <div className="space-y-1.5">
              <Label htmlFor="q-rental-months">Prazo de aluguel</Label>
              <Select
                value={String(q.rentalMonths ?? RENTAL_MONTHS[0])}
                onValueChange={(value) => {
                  const months = RENTAL_MONTHS.find((option) => String(option) === value);
                  if (months !== undefined) set("rentalMonths", months);
                }}
              >
                <SelectTrigger id="q-rental-months" className="h-11 sm:max-w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RENTAL_MONTHS.map((months) => (
                    <SelectItem key={months} value={String(months)}>{months} meses</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </Step>

        <Step n={2} title="Qual equipamento?">
          <div className="grid gap-3 sm:grid-cols-2">
            {CATEGORIES.map((c) => (
              <Chip key={c} active={q.category === c} onClick={() => set("category", c)}>
                {c}
              </Chip>
            ))}
          </div>
        </Step>

        <Step n={3} title="Marca de preferência">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {BRAND_OPTIONS.map((b) => (
              <Chip key={b} active={q.brand === b} onClick={() => set("brand", b)}>
                {b}
              </Chip>
            ))}
          </div>
        </Step>

        <Step n={4} title="Quantidade e seus dados">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Quantidade</span>
            <div className="flex items-center rounded-full border border-border">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => set("quantity", Math.max(1, q.quantity - 1))}
                className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-display font-semibold" aria-live="polite">
                {q.quantity}
              </span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => set("quantity", Math.min(999, q.quantity + 1))}
                className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="q-name">Nome</Label>
              <Input id="q-name" maxLength={80} value={q.name} onChange={(e) => set("name", e.target.value)} placeholder="Seu nome" className="h-11 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="q-company">Empresa</Label>
              <Input id="q-company" maxLength={80} value={q.company} onChange={(e) => set("company", e.target.value)} placeholder="Opcional" className="h-11 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="q-city">Cidade</Label>
              <Input id="q-city" maxLength={60} value={q.city} onChange={(e) => set("city", e.target.value)} placeholder="Opcional" className="h-11 rounded-xl" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="q-notes">Observações</Label>
            <Textarea id="q-notes" maxLength={400} value={q.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Ex.: período de aluguel, tamanho da etiqueta, volume diário…" className="min-h-24 rounded-xl" />
          </div>
        </Step>

        <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
          <WhatsAppIcon className="size-5" />
          Enviar pedido pelo WhatsApp
        </Button>
      </form>

      <aside className="relative flex flex-col border-t border-border bg-ink p-6 md:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative">
          <p className="eyebrow">Prévia da mensagem</p>
          <p className="mt-2 text-sm text-muted-foreground">
            É isso que nosso time de vendas vai receber no WhatsApp.
          </p>
        </div>
        <div className="relative mt-8 flex-1">
          <div className="ml-auto max-w-[95%] rounded-2xl rounded-tr-sm bg-primary/15 p-4 text-sm leading-relaxed text-foreground ring-1 ring-primary/25">
            <pre className="whitespace-pre-wrap font-sans">{message}</pre>
          </div>
          <p className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <Send className="size-3" /> Para: Vendas BRZ
          </p>
        </div>
      </aside>
    </div>
  );
}
