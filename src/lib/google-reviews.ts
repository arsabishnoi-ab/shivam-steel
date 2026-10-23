import { cacheLife } from "next/cache";
import type { GoogleSummary, Review } from "@/types/content";
import { formatIsoDate } from "@/lib/dates";

type PlacesReview = {
  rating?: number;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

export type GoogleReviewResult = {
  reviews: Review[];
  summary: GoogleSummary | null;
};

/**
 * Official Google Places API (New), server-side only.
 * Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in the server environment.
 * Never use NEXT_PUBLIC_ for either value.
 * Google currently returns a small set of reviews, not the full listing.
 * If the variables are missing, or the request fails, the site uses src/data/reviews.ts.
 */
export async function fetchGoogleReviews(): Promise<GoogleReviewResult | null> {
  "use cache";
  cacheLife("hours");

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
      },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as PlacesResponse;
    const reviews = (data.reviews ?? [])
      .map((review, index): Review | null => {
        const text = review.text?.text || review.originalText?.text || "";
        const rating = review.rating;
        if (!text || rating == null || rating < 1 || rating > 5) return null;
        return {
          id: `google-${review.publishTime ?? index}`,
          name: review.authorAttribution?.displayName || "Google reviewer",
          text,
          rating: Math.round(rating) as Review["rating"],
          date: review.publishTime ? formatIsoDate(review.publishTime) : undefined,
          photo: review.authorAttribution?.photoUri,
          source: "google",
          googleVerified: true,
        };
      })
      .filter((review): review is Review => review !== null);

    const summary =
      typeof data.rating === "number" && typeof data.userRatingCount === "number"
        ? { rating: data.rating, reviewCount: data.userRatingCount }
        : null;

    return { reviews, summary };
  } catch {
    return null;
  }
}
