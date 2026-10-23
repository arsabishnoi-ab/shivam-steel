import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = buildMetadata({
  title: about.seoTitle,
  description: about.seoDescription,
  path: "/about",
});

export default function AboutPage() {
  const { credentials } = about;
  const showCredentials =
    credentials.foundedYear ||
    credentials.projectsCompleted ||
    credentials.teamSize ||
    credentials.certifications.length > 0 ||
    credentials.warranty;

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A railing workshop in Banashankari"
        lede={about.intro[0]}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink">
            {about.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{about.railingTypes}</p>
            <h2 className="pt-4 font-serif text-4xl text-charcoal">Design approach</h2>
            {about.designApproach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="relative min-h-80">
            <Image
              src="/images/work/product-bending-four.jpg"
              alt="Bending stainless railing with four lines"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
      <section className="border-y border-line bg-ivory py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-charcoal">Materials</h2>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {about.materials.map((material) => (
              <li key={material.title} className="bg-ivory p-6">
                <h3 className="font-serif text-2xl text-charcoal">{material.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{material.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ProcessSteps />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-charcoal">Where the work is done</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The workshop is in {site.address.line2}, {site.address.city}. Service is currently
              listed for {site.serviceAreas.join(", ")}. Add other areas in the site configuration
              only when the workshop actually covers them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Proprietors: {site.proprietors.map((person) => person.name).join(" and ")}.
            </p>
          </div>
          {showCredentials ? (
            <dl className="grid gap-4 border border-line p-6">
              {credentials.foundedYear ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Established</dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">{credentials.foundedYear}</dd>
                </div>
              ) : null}
              {credentials.projectsCompleted ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Projects noted</dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">{credentials.projectsCompleted}</dd>
                </div>
              ) : null}
              {credentials.teamSize ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Team</dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">{credentials.teamSize}</dd>
                </div>
              ) : null}
              {credentials.certifications.length > 0 ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Certifications</dt>
                  <dd className="mt-1 text-ink">{credentials.certifications.join(", ")}</dd>
                </div>
              ) : null}
              {credentials.warranty ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">After installation</dt>
                  <dd className="mt-1 text-ink">{credentials.warranty}</dd>
                </div>
              ) : null}
            </dl>
          ) : (
            <p className="border border-line p-6 text-sm leading-relaxed text-muted">
              Years in business, project totals, team size, certifications, and warranty terms are
              not shown until the workshop confirms them.
            </p>
          )}
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <Link href="/gallery" className="text-[11px] uppercase tracking-[0.16em] underline decoration-gold underline-offset-4">
            View the project gallery
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
