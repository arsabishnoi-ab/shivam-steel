/**
 * Sample reviews for a layout preview only.
 * These names, places, dates, and quotes are not real customers.
 * Do not describe them as Google reviews.
 * Replace this list with copied customer reviews before the site is treated as live.
 */
const firstNames = [
  "Asha", "Ravi", "Meera", "Kiran", "Divya", "Suresh", "Pooja", "Arun", "Lakshmi", "Naveen",
  "Anita", "Harish", "Kavya", "Manoj", "Deepa", "Sanjay", "Rekha", "Vinod", "Shilpa", "Prakash",
];
const lastNames = ["Rao", "Shetty", "Reddy", "Gowda", "Iyer"];
const places = [
  "Banashankari", "Jayanagar", "JP Nagar", "Uttarahalli", "Kumaraswamy Layout",
  "Basavanagudi", "Padmanabhanagar", "Kanakapura Road", "RR Nagar", "Kengeri",
];
const quotes = [
  "The staircase railing was fitted cleanly and the glass line looks straight.",
  "Balcony glass was fixed on the square pipe without a wobble.",
  "Four-line bending rail follows the curve of our stair.",
  "Wood top on the glass handrail feels solid when you hold it.",
  "They measured the opening before cutting the stainless pipe.",
  "The square-pipe rail matches the landing and the lower flight.",
  "Glass panels on the stair are even and the clamps sit tight.",
  "Main-gate frame was welded neatly and the leaf closes flush.",
  "Stainless posts on the wood stair were aligned with the steps.",
  "Balcony front rail gives a clear view and feels steady.",
  "The curved rail was bent to the stair and fixed without gaps.",
  "Side fitting for the wood top sits flush against the glass.",
  "They finished the railing after the granite steps were done.",
  "The four-line rail is the same height all the way up.",
  "Glass and steel handrail looks simple and is easy to wipe.",
  "Pipe joints on the landing were ground smooth.",
  "The balcony rail was fixed to the slab the way we asked.",
  "Newel post and handrail line up with the turn of the stair.",
  "Stainless finish on the outdoor stair has stayed even.",
  "The crew cleared the fitting area before they left.",
];

const ratings = [];
for (let index = 0; index < 55; index += 1) ratings.push(5);
for (let index = 0; index < 40; index += 1) ratings.push(4);
for (let index = 0; index < 5; index += 1) ratings.push(3);
let seed = 45;
for (let index = ratings.length - 1; index > 0; index -= 1) {
  seed = (seed * 17 + 11) % 10007;
  const swap = seed % (index + 1);
  const current = ratings[index];
  ratings[index] = ratings[swap];
  ratings[swap] = current;
}

const reviews = Array.from({ length: 100 }, (_, index) => {
  const day = new Date(Date.UTC(2025, 2, 4 + index * 3));
  const date = day.toISOString().slice(0, 10);
  return {
    name: `${firstNames[index % firstNames.length]} ${lastNames[Math.floor(index / firstNames.length)]}`,
    place: places[index % places.length],
    rating: ratings[index],
    date,
    quote: quotes[index % quotes.length],
    sample: true,
  };
});

const REVIEWS_PAGE = 5;
let reviewsShown = REVIEWS_PAGE;

const reviewMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatReviewDate(value) {
  if (!value) return "";
  const parts = String(value).split("-");
  if (parts.length !== 3) return String(value);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (!month || month < 1 || month > 12 || !day) return String(value);
  return `${day} ${reviewMonths[month - 1]} ${parts[0]}`;
}

function starIcons(rating) {
  const wrap = document.createElement("span");
  wrap.className = "stars";
  const safe = Math.max(0, Math.min(5, Number(rating) || 0));
  wrap.setAttribute("aria-label", `${safe} out of 5`);
  for (let step = 1; step <= 5; step += 1) {
    const icon = document.createElement("i");
    const filled = safe - (step - 1);
    icon.setAttribute("aria-hidden", "true");
    if (filled >= 1) icon.className = "fa-solid fa-star";
    else if (filled >= 0.5) icon.className = "fa-solid fa-star-half-stroke";
    else icon.className = "fa-regular fa-star";
    wrap.append(icon);
  }
  return wrap;
}

function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  const empty = document.getElementById("reviews-empty");
  const more = document.getElementById("view-more");
  const summary = document.getElementById("reviews-summary");
  if (!grid || !empty || !more || !summary) return;

  grid.replaceChildren();
  summary.replaceChildren();

  if (!reviews.length) {
    empty.hidden = false;
    more.hidden = true;
    return;
  }

  empty.hidden = true;
  const total = reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  const average = total / reviews.length;
  const averageLabel = document.createElement("span");
  averageLabel.className = "reviews-average";
  averageLabel.textContent = average.toFixed(1);
  summary.append(averageLabel, starIcons(average));

  reviews.slice(0, reviewsShown).forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";

    const top = document.createElement("div");
    top.className = "review-top";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = (review.name || "?").trim().charAt(0).toUpperCase();

    const who = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = review.name || "";
    const place = document.createElement("span");
    place.className = "review-place";
    place.textContent = review.place || "";
    who.append(name, place);
    top.append(avatar, who);

    const meta = document.createElement("div");
    meta.className = "review-meta";
    meta.append(starIcons(review.rating));
    if (review.date) {
      const time = document.createElement("time");
      time.dateTime = review.date;
      time.textContent = formatReviewDate(review.date);
      meta.append(time);
    }

    const quote = document.createElement("p");
    quote.className = "quote";
    quote.textContent = review.quote || "";

    card.append(top, meta, quote);
    grid.append(card);
  });

  more.hidden = reviewsShown >= reviews.length;
}

document.getElementById("view-more")?.addEventListener("click", () => {
  reviewsShown += REVIEWS_PAGE;
  renderReviews();
});

renderReviews();
