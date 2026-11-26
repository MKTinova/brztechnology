/**
 * BRZ Technology contacts.
 * Sales questions (buy / rent / quotes) go to the seller; maintenance and
 * support go to the technician. Both channels are available on every team:
 * WhatsApp (number stored in international format, 55 = Brazil, so wa.me
 * opens the right chat) and e-mail (mailto link with subject and body
 * pre-filled).
 */
export type ContactRole = "vendas" | "tecnico";

export const CONTACTS: Record<
  ContactRole,
  { number: string; display: string; email: string; label: string; title: string; description: string }
> = {
  vendas: {
    number: "5519987215847",
    display: "(19) 98721-5847",
    email: "vendas@brztechnology.com.br",
    label: "Vendas",
    title: "Falar com Vendas",
    description: "Compra, aluguel, orçamentos e indicação do equipamento ideal.",
  },
  tecnico: {
    number: "5519995793706",
    display: "(19) 99579-3706",
    email: "suporte@brztechnology.com.br",
    label: "Técnico",
    title: "Suporte Técnico",
    description: "Manutenção, configuração, instalação e dúvidas de uso.",
  },
};

export const DEFAULT_MESSAGES: Record<ContactRole, string> = {
  vendas: "Olá, BRZ Technology! Vim pelo site e gostaria de um orçamento.",
  tecnico: "Olá, BRZ Technology! Vim pelo site e preciso de suporte técnico.",
};

/** Subject lines used when a visitor opens a blank e-mail to one of the teams. */
export const EMAIL_SUBJECTS: Record<ContactRole, string> = {
  vendas: "Orçamento de equipamentos — BRZ Technology",
  tecnico: "Suporte técnico — BRZ Technology",
};

/** Body used when a visitor opens a blank e-mail to one of the teams. */
export const DEFAULT_EMAIL_BODIES: Record<ContactRole, string> = {
  vendas:
    "Olá, BRZ Technology!\n\nGostaria de um orçamento para compra ou aluguel de equipamentos.\n\n" +
    "• Equipamento:\n• Quantidade:\n• Prazo de aluguel (se for o caso):\n• Empresa / cidade:\n",
  tecnico:
    "Olá, BRZ Technology!\n\nPreciso de suporte técnico.\n\n" +
    "• Equipamento e marca:\n• O que está acontecendo:\n• Desde quando:\n",
};

export function whatsappLink(role: ContactRole, message?: string): string {
  const text = message ?? DEFAULT_MESSAGES[role];
  return `https://wa.me/${CONTACTS[role].number}?text=${encodeURIComponent(text)}`;
}

/**
 * mailto: link for one of the teams. Subject and body are pre-filled and
 * percent-encoded (spaces as %20, newlines as %0A) so mail clients open a
 * readable draft instead of a broken one.
 */
export function emailLink(role: ContactRole, subject?: string, body?: string): string {
  const parts = [`subject=${encodeURIComponent(subject ?? EMAIL_SUBJECTS[role])}`];
  const text = body ?? DEFAULT_EMAIL_BODIES[role];
  if (text.trim()) parts.push(`body=${encodeURIComponent(text)}`);
  return `mailto:${CONTACTS[role].email}?${parts.join("&")}`;
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

/** Subject for the e-mail version of a quote request. */
export function buildQuoteSubject(q: QuoteRequest): string {
  const mode = q.mode === "comprar" ? "Compra" : "Aluguel";
  return `Orçamento ${mode} — ${q.category} (${q.quantity}) — BRZ Technology`;
}

/**
 * mailto: link that sends the same quote the WhatsApp button sends, so the
 * visitor can choose the channel without losing any of the details.
 */
export function quoteEmailLink(q: QuoteRequest): string {
  return emailLink("vendas", buildQuoteSubject(q), buildQuoteMessage(q));
}

export function productMessage(productName: string, mode: "comprar" | "alugar"): string {
  return `Olá, BRZ Technology! Tenho interesse em ${mode === "comprar" ? "comprar" : "alugar"} o equipamento ${productName}. Pode me passar mais informações?`;
}

/** mailto: version of a product card's "interested" action. */
export function productEmailLink(productName: string, mode: "comprar" | "alugar"): string {
  const modeLabel = mode === "comprar" ? "Compra" : "Aluguel";
  return emailLink(
    "vendas",
    `Interesse em ${modeLabel} — ${productName} — BRZ Technology`,
    `Olá, BRZ Technology!\n\nTenho interesse em ${mode === "comprar" ? "comprar" : "alugar"} o equipamento ${productName}.\n\nPode me passar mais informações?\n`,
  );
}
