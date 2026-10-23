import { Suspense } from "react";
import { site, addressLines, safeMapEmbedUrl } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = buildMetadata({
  title: "Contact a Railing Contractor in Bangalore",
  description:
    "Call, WhatsApp, or send a quotation request to Shivam Steel Railing & Furniture in Banashankari, Bengaluru.",
  path: "/contact",
});

export default function ContactPage({ searchParams }: PageProps<"/contact">) {
  const map = safeMapEmbedUrl(site.googleMapsEmbedUrl);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask for a railing quotation"
        lede="Call either proprietor, send a WhatsApp message, or use the form. A price is prepared after the opening is understood."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Workshop</h2>
            <address className="mt-4 space-y-1 text-base not-italic leading-relaxed text-ink">
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ul className="mt-8 space-y-5">
              {site.proprietors.map((person) => (
                <li key={person.phoneTel} className="border-t border-line pt-5">
                  <p className="font-serif text-2xl text-charcoal">{person.name}</p>
                  <a href={`tel:${person.phoneTel}`} className="mt-2 block text-ink">
                    Call {person.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${person.whatsappDigits}?text=${encodeURIComponent(site.whatsappMessage)}`}
                    className="mt-1 block text-ink underline decoration-gold underline-offset-4"
                  >
                    WhatsApp {person.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <a href={`mailto:${site.email}`} className="break-all text-ink">
                {site.email}
              </a>
            </p>
            {site.hours.length > 0 ? (
              <div className="mt-8">
                <h2 className="font-serif text-2xl text-charcoal">Hours</h2>
                <ul className="mt-3 space-y-2 text-sm text-ink">
                  {site.hours.map((hour) => (
                    <li key={`${hour.dayOfWeek.join("-")}-${hour.opens}`}>
                      {hour.dayOfWeek.join(", ")} · {hour.opens}–{hour.closes}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Serving {site.serviceAreas.join(", ")}.
            </p>
            {map ? (
              <iframe
                title={`Map showing ${site.name}`}
                src={map}
                className="mt-8 h-64 w-full border border-line"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : null}
          </div>
          <Suspense fallback={<ContactForm />}>
            <ContactFormLoader searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

async function ContactFormLoader({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const value = params.service;
  const service = Array.isArray(value) ? value[0] : value ?? "";
  return <ContactForm defaultService={service} />;
}
