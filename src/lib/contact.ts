/**
 * BRZ Technology WhatsApp contacts.
 * Sales questions (buy / rent / quotes) go to the seller; maintenance and
 * support go to the technician. Numbers are stored in international format
 * (55 = Brazil) so wa.me opens the right chat.
 */
export type ContactRole = "vendas" | "tecnico";

export const CONTACTS: Record<
  ContactRole,
  { number: string; display: string; label: string; title: string; description: string }
> = {
  vendas: {
    number: "5519987215847",
    display: "(19) 98721-5847",
    label: "Vendas",
    title: "Falar com Vendas",
    description: "Compra, aluguel, orçamentos e indicação do equipamento ideal.",
  },
  tecnico: {
    number: "5519995793706",
    display: "(19) 99579-3706",
    label: "Técnico",
    title: "Suporte Técnico",
    description: "Manutenção, configuração, instalação e dúvidas de uso.",
  },
};

export const DEFAULT_MESSAGES: Record<ContactRole, string> = {
  vendas: "Olá, BRZ Technology! Vim pelo site e gostaria de um orçamento.",
  tecnico: "Olá, BRZ Technology! Vim pelo site e preciso de suporte técnico.",
};

export function whatsappLink(role: ContactRole, message?: string): string {
  const text = message ?? DEFAULT_MESSAGES[role];
  return `https://wa.me/${CONTACTS[role].number}?text=${encodeURIComponent(text)}`;
}

export const RENTAL_MONTHS = [6, 12, 24, 36, 48] as const;
export type RentalMonths = (typeof RENTAL_MONTHS)[number];

export type QuoteRequest = {
  mode: "comprar" | "alugar";
  rentalMonths?: RentalMonths;
  category: string;
  brand: string;
  quantity: number;
  name?: string;
  company?: string;
  city?: string;
  notes?: string;
};

/** Builds the pre-filled WhatsApp message sent to the seller from the quote builder. */
export function buildQuoteMessage(q: QuoteRequest): string {
  const lines = [
    "Olá, BRZ Technology! Gostaria de um orçamento:",
    "",
    `• Interesse: ${q.mode === "comprar" ? "Compra" : "Aluguel"}`,
    `• Equipamento: ${q.category}`,
    `• Marca: ${q.brand}`,
    `• Quantidade: ${q.quantity}`,
  ];
  if (q.mode === "alugar") lines.push(`• Prazo de aluguel: ${q.rentalMonths ?? RENTAL_MONTHS[0]} meses`);
  if (q.name?.trim()) lines.push(`• Nome: ${q.name.trim()}`);
  if (q.company?.trim()) lines.push(`• Empresa: ${q.company.trim()}`);
  if (q.city?.trim()) lines.push(`• Cidade: ${q.city.trim()}`);
  if (q.notes?.trim()) lines.push("", `Observações: ${q.notes.trim()}`);
  return lines.join("\n");
}

export function productMessage(productName: string, mode: "comprar" | "alugar"): string {
  return `Olá, BRZ Technology! Tenho interesse em ${mode === "comprar" ? "comprar" : "alugar"} o equipamento ${productName}. Pode me passar mais informações?`;
}
