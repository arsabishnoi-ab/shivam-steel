import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { videos } from "@/data/videos";
import { buildMetadata } from "@/lib/seo";
import { VideoGallery } from "@/components/gallery/VideoGallery";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";

export const metadata = buildMetadata({
  title: "Railing Projects",
  description:
    "Photographs and videos of railing work prepared for Shivam Steel Railing & Furniture in Bengaluru. Sample images are labelled until real projects are added.",
  path: "/projects",
});

export default function ProjectsPage() {
  const hasSamples = projects.some((project) => project.isSample);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Railing work, shown plainly"
        lede="Each project can carry a title, a location, a description, and its photographs. Real jobs replace the samples below."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          {hasSamples ? <SampleNotice /> : null}
          <ul className="mt-10 space-y-16">
            {projects.map((project, index) => (
              <li key={project.id} className="grid items-center gap-6 lg:grid-cols-2">
                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{project.location}</p>
                  <h2 className="mt-3 font-serif text-4xl text-charcoal">{project.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>
                  {project.date ? <p className="mt-3 text-sm text-ink">{project.date}</p> : null}
                </div>
              </li>
            ))}
          </ul>
          <Link href="/gallery" className="mt-12 inline-flex text-[11px] uppercase tracking-[0.16em] underline decoration-gold underline-offset-4">
            Filter all photographs
          </Link>
        </Container>
      </section>
      <section className="border-t border-line bg-ivory py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-charcoal">Project videos</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Films of finished railings can be added as a YouTube link or as an MP4 file. Nothing plays until you press play.
          </p>
          <div className="mt-8">
            <VideoGallery videos={videos} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
