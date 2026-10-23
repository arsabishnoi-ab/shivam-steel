import { flattenGallery, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";

export const metadata = buildMetadata({
  title: "Railing Project Gallery",
  description:
    "Filter photographs of stainless steel, glass, staircase, and balcony railings. Sample images stay labelled until Shivam Steel Railing adds its own work.",
  path: "/gallery",
});

export default function GalleryPage() {
  const images = flattenGallery(projects);
  const hasSamples = images.some((image) => image.isSample);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Project gallery"
        lede="Filter by railing type or by residential and commercial work. Open a photograph to read its caption, and use the arrow keys to move through the set."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          {hasSamples ? (
            <div className="mb-8">
              <SampleNotice />
            </div>
          ) : null}
          <GalleryExplorer images={images} />
        </Container>
      </section>
    </>
  );
}
