import { Suspense } from "react";
import { reviews } from "@/data/reviews";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { buildMetadata } from "@/lib/seo";
import { ReviewBrowser } from "@/components/reviews/ReviewBrowser";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import type { Review } from "@/types/content";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description:
    "Customer reviews for Shivam Steel Railing & Furniture. Reviews appear here only when they are supplied or returned by an authorized Google integration.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Customer reviews"
        lede="Reviews are shown only when they are genuine. A Google rating appears only when it comes from the business’s own Google listing."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Suspense fallback={<ReviewBrowser reviews={[]} summary={null} />}>
            <ReviewContent />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

async function ReviewContent() {
  const google = await fetchGoogleReviews();
  return (
    <ReviewBrowser
      reviews={mergeReviews(reviews, google?.reviews ?? [])}
      summary={google?.summary ?? null}
    />
  );
}

function mergeReviews(local: Review[], remote: Review[]) {
  const seen = new Set(remote.map((review) => `${review.name}::${review.text}`));
  return [...remote, ...local.filter((review) => !seen.has(`${review.name}::${review.text}`))];
}
