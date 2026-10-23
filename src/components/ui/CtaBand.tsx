import { site } from "@/config/site";
import { defaultWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand({
  title = "Request a railing quotation",
  text = "Share the location and a few photographs of the staircase, balcony, or other opening. We will reply by phone or WhatsApp.",
}: {
  title?: string;
  text?: string;
}) {
  const whatsapp = defaultWhatsAppLink();
  const primary = site.proprietors.find((person) => person.name === site.primaryContactName);

  return (
    <section className="bg-charcoal text-ivory">
      <Container className="py-16 sm:py-24">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#d9d4cb]">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact">Get a Free Quote</Button>
          {whatsapp ? (
            <Button href={whatsapp} external variant="light">
              WhatsApp {primary?.name}
            </Button>
          ) : null}
          {primary ? (
            <Button href={`tel:${primary.phoneTel}`} variant="light">
              Call {primary.phoneDisplay}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
