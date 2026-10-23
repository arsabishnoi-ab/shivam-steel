"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { site, safeHttpUrl } from "@/config/site";
import type { GoogleSummary, Review } from "@/types/content";

const PAGE_SIZE = 8;

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden
          className={`size-4 ${index < rounded ? "fill-gold-deep text-gold-deep" : "text-line"}`}
        />
      ))}
    </span>
  );
}

function sourceLabel(review: Review) {
  if (review.source === "google" && review.googleVerified) return "Google";
  if (review.source === "google") return "Entered from a Google review";
  return "Customer review";
}

function avatar(review: Review) {
  if (!review.photo) return null;
  if (review.photo.startsWith("/")) {
    return (
      <Image
        src={review.photo}
        alt=""
        width={40}
        height={40}
        className="size-10 object-cover"
      />
    );
  }
  try {
    if (new URL(review.photo).hostname === "lh3.googleusercontent.com") {
      return (
        <Image src={review.photo} alt="" width={40} height={40} className="size-10 object-cover" />
      );
    }
  } catch {
    return null;
  }
  return null;
}

export function ReviewBrowser({
  reviews,
  summary,
  compact = false,
}: {
  reviews: Review[];
  summary: GoogleSummary | null;
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState<number | "all">("all");
  const [visible, setVisible] = useState(compact ? 3 : PAGE_SIZE);
  const reviewUrl = safeHttpUrl(site.googleReviewUrl);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return reviews.filter((review) => {
      const matchesRating = rating === "all" || review.rating === rating;
      const matchesQuery =
        needle.length === 0 ||
        review.name.toLowerCase().includes(needle) ||
        review.text.toLowerCase().includes(needle);
      return matchesRating && matchesQuery;
    });
  }, [query, rating, reviews]);

  if (reviews.length === 0) {
    return (
      <div className="border border-line bg-paper px-5 py-10 text-center">
        <p className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">Customer reviews will be added here.</p>
        {reviewUrl ? (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center bg-gold px-6 text-[11px] uppercase tracking-[0.16em] text-charcoal"
          >
            Write a Google Review
          </a>
        ) : null}
      </div>
    );
  }

  const shown = filtered.slice(0, compact ? 3 : visible);

  return (
    <div>
      <div className="flex flex-col gap-4 border border-line bg-paper p-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {summary ? (
            <>
              <p className="font-serif text-5xl text-charcoal">{summary.rating.toFixed(1)}</p>
              <Stars rating={summary.rating} />
              <p className="mt-2 text-sm text-muted">
                Google rating from {summary.reviewCount} reviews
              </p>
            </>
          ) : (
            <>
              <p className="font-serif text-4xl text-charcoal">{reviews.length}</p>
              <p className="mt-1 text-sm text-muted">
                {reviews.length === 1 ? "Review" : "Reviews"} shown on this website
              </p>
            </>
          )}
        </div>
        {reviewUrl ? (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-[11px] uppercase tracking-[0.16em] text-charcoal"
          >
            Write a Google Review
          </a>
        ) : null}
      </div>

      {compact ? null : (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="flex-1 text-sm">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-muted">Search reviews</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisible(PAGE_SIZE);
              }}
              className="w-full border border-line bg-paper px-3 py-3 text-base"
              type="search"
            />
          </label>
          <label className="sm:w-40 text-sm">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-muted">Rating</span>
            <select
              value={String(rating)}
              onChange={(event) => {
                const value = event.target.value;
                setRating(value === "all" ? "all" : Number(value));
                setVisible(PAGE_SIZE);
              }}
              className="w-full border border-line bg-paper px-3 py-3 text-base"
            >
              <option value="all">All</option>
              {[5, 4, 3, 2, 1].map((value) => (
                <option key={value} value={value}>
                  {value} stars
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {shown.length === 0 ? (
        <p className="mt-8 text-muted">No reviews match that search.</p>
      ) : (
        <ul className="mt-6 grid gap-4">
          {shown.map((review) => (
            <li key={review.id} className="border border-line bg-paper p-5">
              <div className="flex items-start gap-3">
                {avatar(review) ?? (
                  <span className="grid size-10 shrink-0 place-items-center bg-ivory font-serif text-lg text-charcoal">
                    {review.name.slice(0, 1)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="font-medium text-charcoal">{review.name}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Stars rating={review.rating} />
                    {review.date ? <span className="text-sm text-muted">{review.date}</span> : null}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink">{review.text}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">{sourceLabel(review)}</p>
            </li>
          ))}
        </ul>
      )}

      {!compact && visible < filtered.length ? (
        <button
          type="button"
          className="mt-8 min-h-12 border border-charcoal px-6 text-[11px] uppercase tracking-[0.16em]"
          onClick={() => setVisible((count) => count + PAGE_SIZE)}
        >
          Load more reviews
        </button>
      ) : null}
    </div>
  );
}
