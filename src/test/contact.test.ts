import { describe, expect, it } from "vitest";
import {
  buildQuoteMessage,
  CONTACTS,
  emailLink,
  productEmailLink,
  quoteEmailLink,
  RENTAL_MONTHS,
  whatsappLink,
  type QuoteRequest,
} from "@/lib/contact";

const quote: QuoteRequest = {
  mode: "alugar",
  category: "Impressora térmica de mesa",
  brand: "Zebra",
  quantity: 1,
};

describe("Rental quote duration", () => {
  it("offers only 6, 12, 24, 36 and 48 months", () => {
    expect(RENTAL_MONTHS).toEqual([6, 12, 24, 36, 48]);
  });

  it("defaults rental quotes to the minimum of 6 months", () => {
    expect(buildQuoteMessage(quote)).toContain("• Prazo de aluguel: 6 meses");
  });

  it.each(RENTAL_MONTHS)("includes a selected term of %i months", (rentalMonths) => {
    expect(buildQuoteMessage({ ...quote, rentalMonths })).toContain(`• Prazo de aluguel: ${rentalMonths} meses`);
  });

  it("does not send a rental term for purchases", () => {
    expect(buildQuoteMessage({ ...quote, mode: "comprar", rentalMonths: 48 })).not.toContain("Prazo de aluguel");
  });
});

describe("E-mail channel", () => {
  const emailShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it("gives both teams their own e-mail address", () => {
    expect(CONTACTS.vendas.email).toMatch(emailShape);
    expect(CONTACTS.tecnico.email).toMatch(emailShape);
    expect(CONTACTS.vendas.email).not.toBe(CONTACTS.tecnico.email);
  });

  it("uses the real addresses the owner gave: sales and technical support", () => {
    expect(CONTACTS.vendas.email).toBe("claudinei@brztechnology.com.br");
    expect(CONTACTS.tecnico.email).toBe("renato@brztechnology.com.br");
  });

  it("opens a mailto draft with a subject and a body", () => {
    const link = emailLink("vendas");
    expect(link.startsWith(`mailto:${CONTACTS.vendas.email}?subject=`)).toBe(true);
    expect(link).toContain("&body=");
  });

  it("percent-encodes spaces so mail clients show readable text", () => {
    const link = emailLink("tecnico", "Suporte técnico — BRZ Technology");
    expect(link).not.toContain("+");
    expect(link).toContain("Suporte%20t%C3%A9cnico");
  });

  it("sends the quote by e-mail with the same rental term as WhatsApp", () => {
    const request = { ...quote, rentalMonths: 24 } as const;
    const link = quoteEmailLink(request);
    expect(link.startsWith(`mailto:${CONTACTS.vendas.email}?subject=`)).toBe(true);
    expect(decodeURIComponent(link.split("&body=")[1] ?? "")).toContain("• Prazo de aluguel: 24 meses");
    expect(decodeURIComponent(link.split("&body=")[1] ?? "")).toBe(buildQuoteMessage(request));
  });

  it("keeps the two channels pointing at the same teams", () => {
    expect(whatsappLink("vendas")).toContain(CONTACTS.vendas.number);
    expect(emailLink("tecnico")).toContain(CONTACTS.tecnico.email);
    expect(productEmailLink("Zebra ZD621", "alugar").startsWith(`mailto:${CONTACTS.vendas.email}?subject=`)).toBe(true);
    expect(decodeURIComponent(productEmailLink("Zebra ZD621", "alugar"))).toContain("Zebra ZD621");
  });
});