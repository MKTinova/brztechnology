import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type Faq = { q: string; a: string };

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="divide-y divide-border rounded-3xl border border-border bg-card px-6">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-none">
          <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline md:text-lg [&>svg]:text-primary">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
