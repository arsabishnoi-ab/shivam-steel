import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { quoteHref } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Railing work" title="Services for homes and commercial buildings">
          Stainless steel, glass, staircase, balcony, aluminium, and mild steel railings, fabricated
          in Banashankari and installed in Bengaluru.
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="flex h-full flex-col border border-line bg-paper">
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-serif text-[1.7rem] leading-tight text-charcoal">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.16em]">
                  <Link href={`/services/${service.slug}`} className="text-charcoal">
                    View service
                  </Link>
                  <Link href={quoteHref(service.formValue)} className="text-charcoal">
                    Enquire now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
