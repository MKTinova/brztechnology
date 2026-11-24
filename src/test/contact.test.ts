import { describe, expect, it } from "vitest";
import { buildQuoteMessage, RENTAL_MONTHS, type QuoteRequest } from "@/lib/contact";

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