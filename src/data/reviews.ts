import type { Review } from "@/types/content";

/**
 * Genuine customer reviews.
 *
 * Leave this array empty until you have a real review to add.
 * Do not invent names, star ratings, or review text.
 *
 * Hand-typed example (delete the slashes and put it inside the array):
 *
 * {
 *   id: "review-1",
 *   name: "Name the person agreed to publish",
 *   text: "Paste the review without rewriting the meaning.",
 *   rating: 5,
 *   date: "12 March 2026",
 *   source: "manual",
 * }
 *
 * If you are copying words from your Google listing yourself, keep
 * source as "manual", or use source: "google" and do not set
 * googleVerified. A verification label is added only for reviews
 * returned by the Google Places integration in src/lib/google-reviews.ts.
 *
 * The official review link belongs in googleReviewUrl in src/config/site.ts.
 * Do not paste a guessed Google Place ID anywhere in this file.
 */
export const reviews: Review[] = [];
