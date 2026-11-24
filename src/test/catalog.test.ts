import { describe, expect, it } from "vitest";

import { COLLECTORS, PRINTERS } from "@/lib/catalog";

const printerIds = PRINTERS.map((p) => p.id);
const collectorIds = COLLECTORS.map((c) => c.id);

describe("catálogo de impressoras", () => {
  it("tem as impressoras desktop Zebra ZD220, ZD230 e ZD621", () => {
    for (const model of ["ZD220", "ZD230", "ZD621"]) {
      const printer = PRINTERS.find((p) => p.name === `Zebra ${model}`);
      expect(printer, `falta a impressora Zebra ${model}`).toBeDefined();
      expect(printer?.brand).toBe("Zebra");
      expect(printer?.type).toBe("Desktop");
    }
  });

  it("tem a impressora portátil Zebra ZQ630", () => {
    const printer = PRINTERS.find((p) => p.name === "Zebra ZQ630");
    expect(printer, "falta a impressora Zebra ZQ630").toBeDefined();
    expect(printer?.brand).toBe("Zebra");
    expect(printer?.type).toBe("Portátil");
  });
});

describe("catálogo de coletores", () => {
  it("tem os coletores Zebra MC34, TC22 e TC52", () => {
    for (const model of ["MC34", "TC22", "TC52"]) {
      expect(
        COLLECTORS.some((c) => c.name === `Zebra ${model}` && c.brand === "Zebra"),
        `falta o coletor Zebra ${model}`,
      ).toBe(true);
    }
  });

  it("tem os coletores Honeywell CK62 e EDA52", () => {
    for (const model of ["CK62", "EDA52"]) {
      expect(
        COLLECTORS.some((c) => c.name === `Honeywell ${model}` && c.brand === "Honeywell"),
        `falta o coletor Honeywell ${model}`,
      ).toBe(true);
    }
  });

  it("não tem mais o Honeywell CK65", () => {
    expect(COLLECTORS.some((c) => c.name.includes("CK65"))).toBe(false);
    expect(collectorIds).not.toContain("honeywell-ck65");
  });

  it("não repete ids de produtos", () => {
    const all = [...printerIds, ...collectorIds];
    expect(new Set(all).size).toBe(all.length);
  });
});
