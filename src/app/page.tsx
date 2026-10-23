import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { about } from "@/data/about";
import { faqs } from "@/data/faqs";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { videos } from "@/data/videos";
import { site } from "@/config/site";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { VideoGallery } from "@/components/gallery/VideoGallery";
import { ReviewBrowser } from "@/components/reviews/ReviewBrowser";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Review } from "@/types/content";

export const metadata = buildMetadata({
  title: site.seo.title,
  description: site.seo.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  const preview = projects.slice(0, 3);
  const hasSamples = preview.some((project) => project.isSample);

  return (
    <>
      <Hero />
      <ServiceGrid />
      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Photographs" title="A place for completed railing work">
            Real project photographs are added by the workshop. Until then, the pictures below are
            only samples of the layout.
          </SectionHeading>
          {hasSamples ? (
            <div className="mt-8">
              <SampleNotice />
            </div>
          ) : null}
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {preview.map((project) => (
              <li key={project.id}>
                <div className="relative aspect-[4/3] bg-paper">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/gallery"
            className="mt-8 inline-flex text-[11px] uppercase tracking-[0.16em] text-charcoal underline decoration-gold underline-offset-4"
          >
            Open the project gallery
          </Link>
        </Container>
      </section>
      <ProcessSteps />
      {videos.length > 0 ? (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Video" title="Railing work on film">
              Short films of completed railings, played only after you press play.
            </SectionHeading>
            <div className="mt-10">
              <VideoGallery videos={videos} />
            </div>
          </Container>
        </section>
      ) : null}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="The workshop" title="Railing fabrication in Banashankari">
              {about.intro[0]}
            </SectionHeading>
            <Link
              href="/about"
              className="mt-8 inline-flex text-[11px] uppercase tracking-[0.16em] text-charcoal underline decoration-gold underline-offset-4"
            >
              About the company
            </Link>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/work/product-balcony-glass.jpg"
              alt="Balcony glass 10 mm in 40 by 40 square pipe"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-ivory py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Reviews" title="What customers say">
              Only genuine reviews are shown. Nothing is added here until it comes from a real customer.
            </SectionHeading>
            <Link
              href="/reviews"
              className="text-[11px] uppercase tracking-[0.16em] text-charcoal underline decoration-gold underline-offset-4"
            >
              Read more reviews
            </Link>
          </div>
          <div className="mt-10">
            <Suspense fallback={<ReviewBrowser reviews={[]} summary={null} compact />}>
              <HomeReviews />
            </Suspense>
          </div>
        </Container>
      </section>
      <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading eyebrow="Questions" title="Before you ask for a quotation">
            Practical answers about materials, measurement, and how to share a project.
          </SectionHeading>
          <FaqList items={faqs} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

async function HomeReviews() {
  const google = await fetchGoogleReviews();
  const merged = mergeReviews(reviews, google?.reviews ?? []);
  return <ReviewBrowser reviews={merged} summary={google?.summary ?? null} compact />;
}

function mergeReviews(local: Review[], remote: Review[]) {
  const seen = new Set(remote.map((review) => `${review.name}::${review.text}`));
  return [...remote, ...local.filter((review) => !seen.has(`${review.name}::${review.text}`))];
}
