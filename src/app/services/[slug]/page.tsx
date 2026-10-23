import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, relatedServices, services } from "@/data/services";
import { projectsInCategory } from "@/data/projects";
import { buildWhatsAppLink, quoteHref, serviceWhatsAppMessage } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = relatedServices(service.related);
  const photographs = projectsInCategory(service.galleryCategory).slice(0, 3);
  const whatsapp = buildWhatsAppLink(serviceWhatsAppMessage(service.name));

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.seoDescription,
          path: `/services/${service.slug}`,
        })}
      />
      <PageHero
        eyebrow="Services"
        title={service.h1}
        lede={service.intro[0]}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink">
            {service.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Link
                href={quoteHref(service.formValue)}
                className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-[11px] uppercase tracking-[0.16em] text-charcoal"
              >
                Get a Free Quote
              </Link>
              {whatsapp ? (
                <a
                  href={whatsapp}
                  className="inline-flex min-h-12 items-center justify-center border border-charcoal px-6 text-[11px] uppercase tracking-[0.16em]"
                >
                  WhatsApp about {service.name}
                </a>
              ) : null}
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">{service.imageAlt}</figcaption>
          </figure>
        </Container>
      </section>
      <section className="border-y border-line bg-ivory py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-charcoal">Why this railing is specified this way</h2>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit.title} className="bg-ivory p-6">
                <h3 className="font-serif text-2xl text-charcoal">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-charcoal">Where it is used</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {service.applications.map((item) => (
              <li key={item.title} className="border border-line p-6">
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-charcoal">Related photographs</h2>
          <div className="mt-6">
            <SampleNotice />
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {photographs.map((project) => (
              <li key={project.id}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-serif text-xl text-charcoal">{project.title}</p>
              </li>
            ))}
          </ul>
          <Link href="/gallery" className="mt-8 inline-flex text-[11px] uppercase tracking-[0.16em] underline decoration-gold underline-offset-4">
            Open the full gallery
          </Link>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-serif text-4xl text-charcoal">Questions about {service.name}</h2>
          <FaqList items={service.faqs} />
        </Container>
      </section>
      <section className="border-t border-line py-16">
        <Container>
          <h2 className="font-serif text-3xl text-charcoal">Related services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="block border border-line p-5 hover:border-charcoal">
                  <span className="font-serif text-2xl text-charcoal">{item.name}</span>
                  <span className="mt-2 block text-sm text-muted">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand
        title={`Ask for a ${service.name.toLowerCase()} quotation`}
        text="Share the location and a photograph of the opening. The reply will be about this service."
      />
    </>
  );
}
