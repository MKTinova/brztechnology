import industrial from "@/assets/printer-industrial.jpg";
import desktop from "@/assets/printer-desktop.jpg";
import mobile from "@/assets/printer-mobile.jpg";
import collector from "@/assets/collector.jpg";

export type Brand = "Zebra" | "Honeywell" | "Argox" | "Elgin";
export type ProductKind = "impressora" | "coletor";

export type Product = {
  id: string;
  name: string;
  brand: Brand;
  kind: ProductKind;
  type: string;
  image: string;
  summary: string;
  specs: string[];
  modes: Array<"comprar" | "alugar">;
};

export const BRANDS: Brand[] = ["Zebra", "Honeywell", "Argox", "Elgin"];

export const PRINTERS: Product[] = [
  {
    id: "zebra-zt411",
    name: "Zebra ZT411",
    brand: "Zebra",
    kind: "impressora",
    type: "Industrial",
    image: industrial,
    summary: "Robusta para operação contínua em centros de distribuição e indústrias.",
    specs: ["Uso industrial 24/7", "Transferência térmica", "Rede e USB"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "zebra-zd421",
    name: "Zebra ZD421",
    brand: "Zebra",
    kind: "impressora",
    type: "Desktop",
    image: desktop,
    summary: "Compacta e versátil para expedição, varejo e e-commerce.",
    specs: ["Térmica direta e transferência", "Até 4\" de largura", "USB e opção de rede"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "zebra-zq521",
    name: "Zebra ZQ521",
    brand: "Zebra",
    kind: "impressora",
    type: "Portátil",
    image: mobile,
    summary: "Impressão em movimento para picking, inventário e entregas.",
    specs: ["Térmica direta", "Bluetooth / Wi-Fi", "Resistente a quedas"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-pm45",
    name: "Honeywell PM45",
    brand: "Honeywell",
    kind: "impressora",
    type: "Industrial",
    image: industrial,
    summary: "Alto volume de etiquetas com tela touch e configuração simples.",
    specs: ["Uso industrial", "Tela touch colorida", "Rede e USB"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-pc42t",
    name: "Honeywell PC42t",
    brand: "Honeywell",
    kind: "impressora",
    type: "Desktop",
    image: desktop,
    summary: "Ótimo custo-benefício para etiquetas de produtos e envios.",
    specs: ["Transferência térmica", "203 dpi", "USB"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-rp4",
    name: "Honeywell RP4",
    brand: "Honeywell",
    kind: "impressora",
    type: "Portátil",
    image: mobile,
    summary: "Portátil e resistente para equipes de campo e armazéns.",
    specs: ["Térmica direta", "Bluetooth", "Bateria de longa duração"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "argox-ix4-250",
    name: "Argox iX4-250",
    brand: "Argox",
    kind: "impressora",
    type: "Industrial",
    image: industrial,
    summary: "Industrial com ótimo custo para linhas de produção e logística.",
    specs: ["Uso industrial", "Transferência térmica", "Rede e USB"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "argox-os214-plus",
    name: "Argox OS-214 Plus",
    brand: "Argox",
    kind: "impressora",
    type: "Desktop",
    image: desktop,
    summary: "Clássica de mesa, econômica e confiável para o dia a dia.",
    specs: ["Transferência térmica", "203 dpi", "USB"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "elgin-l42-pro",
    name: "Elgin L42 Pro",
    brand: "Elgin",
    kind: "impressora",
    type: "Desktop",
    image: desktop,
    summary: "Nacional, econômica e fácil de configurar para etiquetas e envios.",
    specs: ["Térmica direta e transferência", "203 dpi", "USB, serial e rede"],
    modes: ["comprar", "alugar"],
  },
];

export const COLLECTORS: Product[] = [
  {
    id: "zebra-mc3300",
    name: "Zebra MC3300",
    brand: "Zebra",
    kind: "coletor",
    type: "Com teclado",
    image: collector,
    summary: "Coletor Android com teclado físico para leitura intensa no armazém.",
    specs: ["Android", "Teclado físico", "Leitor 1D/2D"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "zebra-tc21",
    name: "Zebra TC21",
    brand: "Zebra",
    kind: "coletor",
    type: "Touch",
    image: collector,
    summary: "Formato smartphone, leve e intuitivo para varejo e expedição.",
    specs: ["Android", "Tela touch", "Leitor 2D"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-ct40",
    name: "Honeywell CT40",
    brand: "Honeywell",
    kind: "coletor",
    type: "Touch",
    image: collector,
    summary: "Coletor corporativo resistente para operação o dia inteiro.",
    specs: ["Android", "Tela touch", "Bateria substituível"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-eda51",
    name: "Honeywell EDA51",
    brand: "Honeywell",
    kind: "coletor",
    type: "Touch",
    image: collector,
    summary: "Custo-benefício para inventário, conferência e picking.",
    specs: ["Android", "Leitor 2D", "Wi-Fi e 4G"],
    modes: ["comprar", "alugar"],
  },
  {
    id: "honeywell-ck65",
    name: "Honeywell CK65",
    brand: "Honeywell",
    kind: "coletor",
    type: "Com teclado",
    image: collector,
    summary: "Ultra-robusto para câmaras frias e ambientes severos.",
    specs: ["Android", "Teclado físico", "Leitura de longo alcance"],
    modes: ["comprar", "alugar"],
  },
];
