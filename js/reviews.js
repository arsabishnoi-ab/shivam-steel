/**
 * Layout preview reviews only.
 * Names, places, dates, and quotes are not real customers.
 * Do not add Review or AggregateRating schema for this list.
 */
const firstNames = [
  "Asha", "Ravi", "Meera", "Kiran", "Divya", "Suresh", "Pooja", "Arun",
  "Lakshmi", "Naveen", "Anita", "Harish", "Kavya", "Manoj", "Deepa", "Sanjay",
  "Rekha", "Vinod", "Shilpa", "Prakash", "Farhan", "Neha", "Imran", "Sowmya",
  "Karthik", "Bhavana", "Joseph", "Anitha", "Rahul", "Fathima", "Gopal", "Shruti",
  "Nandini", "Abhishek", "Preethi", "Mohammed", "Sneha", "Vikram", "Padma", "Arjun",
  "Keerthi", "Sunil", "Ayesha", "Raghav", "Chitra", "Nithin", "Lavanya", "Syed",
  "Meghana", "Dinesh",
];

const lastNames = [
  "Rao", "Shetty", "Reddy", "Gowda", "Iyer", "Nair", "Kulkarni", "Patil",
  "Hegde", "Jain", "Khan", "D'Souza", "Pinto", "Bhat", "Murthy", "Sharma",
  "Verma", "Singh", "Das", "Menon", "Pillai", "Naidu", "Chowdhury", "Banerjee",
  "Krishnan", "Subramanian", "Fernandes", "Lobo", "Ali", "Hussain", "Joshi", "Deshpande",
  "Kamath", "Pai", "Acharya", "Urs", "Setty", "Gupta", "Agarwal", "Thomas",
];

const places = [
  "Banashankari", "Jayanagar", "JP Nagar", "Uttarahalli", "Kumaraswamy Layout",
  "Basavanagudi", "Padmanabhanagar", "Kanakapura Road", "Rajarajeshwari Nagar", "Kengeri",
  "Vijayanagar", "Rajajinagar", "Malleswaram", "Indiranagar", "Koramangala",
  "HSR Layout", "BTM Layout", "Whitefield", "Marathahalli", "Electronic City",
  "Hebbal", "Yelahanka", "Yeshwanthpur", "Nagarbhavi", "Bannerghatta Road",
  "Arekere", "Hulimavu", "Gottigere", "Konanakunte", "Kathriguppe",
  "Girinagar", "Chamarajpet", "Shivajinagar", "Frazer Town", "Ulsoor",
  "Domlur", "Bellandur", "Sarjapur Road", "Hennur", "Kalyan Nagar",
  "Kammanahalli", "RT Nagar", "Sadashivanagar", "Seshadripuram", "Basaveshwaranagar",
  "Mahalakshmi Layout", "Nandini Layout", "Peenya", "Mathikere", "Sanjay Nagar",
  "New BEL Road", "Hanumanthanagar", "Banashankari 3rd Stage", "Banashankari 6th Stage", "ISRO Layout",
  "Vasanthapura", "Subramanyapura", "Chikkalasandra", "Anjanapura", "Begur",
  "Bommanahalli", "HSR Layout Sector 2", "Koramangala 4th Block", "Jayanagar 4th Block", "Jayanagar 9th Block",
  "JP Nagar 1st Phase", "JP Nagar 7th Phase", "BTM 2nd Stage", "Hosakerehalli", "Srinagar",
  "Attiguppe", "Chandra Layout", "Nagarbhavi 2nd Stage", "Kengeri Satellite Town", "Ullal",
  "Ideal Homes Township", "Nayandahalli", "Magadi Road", "Gandhi Nagar", "Majestic",
  "Cooke Town", "Cox Town", "Benson Town", "Richards Town", "Jayamahal",
  "Sahakara Nagar", "Jakkur", "Thanisandra", "Nagawara", "HBR Layout",
  "Banaswadi", "Ramamurthy Nagar", "Kasturi Nagar", "CV Raman Nagar", "KR Puram",
  "Hoodi", "Varthur", "Kadugodi", "Kundalahalli", "Brookefield",
];

const quotes = [
  "The staircase railing was fitted cleanly and the glass line looks straight.",
  "Balcony glass was fixed on the square pipe and it does not wobble.",
  "The four-line bending rail follows the curve of our stair.",
  "The wood top on the glass handrail feels solid when you hold it.",
  "They measured the opening before cutting the stainless pipe.",
  "The square-pipe rail matches the landing and the lower flight.",
  "Glass panels on the stair are even and the clamps sit tight.",
  "The main-gate frame was welded neatly and the leaf closes flush.",
  "Stainless posts on the wood stair line up with the steps.",
  "The balcony front rail gives a clear view and feels steady.",
  "The curved rail was bent to the stair and fixed without gaps.",
  "The side fitting for the wood top sits flush against the glass.",
  "They finished the railing after the granite steps were done.",
  "The four-line rail stays the same height all the way up.",
  "The glass and steel handrail is simple and easy to wipe.",
  "Pipe joints on the landing were ground smooth.",
  "The balcony rail was fixed to the slab the way we asked.",
  "The newel post and handrail line up with the turn of the stair.",
  "The stainless finish on the outdoor stair has stayed even.",
  "The crew cleared the fitting area before they left.",
  "Our duplex stair now has a glass rail that follows each turn.",
  "The balcony glass in the apartment was set without scratching the frame.",
  "They replaced the old pipe rail and matched the existing posts.",
  "The gate looks straight and the latch closes without a push.",
  "Handrail height is comfortable on both the stair and the landing.",
  "The gold-finish rail on the stair was fitted without marks on the wall.",
  "Name board letters are even and the plate sits flat on the wall.",
  "The pergola glass was set so rain does not drip onto the sit-out.",
  "Partition glass between the rooms was fixed plumb.",
  "The skylight glass was cleaned after the frame was sealed.",
  "They came back once to tighten a clamp we noticed on the landing.",
  "The outdoor rail has stayed firm through the rains.",
  "Welding on the balcony posts is neat and painted over.",
  "The stair rail was ready in the time they told us.",
  "Glass thickness feels right for a balcony with children at home.",
  "The wood handrail joint at the corner is smooth to the hand.",
];

const avatarColors = ["#1a73e8", "#d93025", "#f9ab00", "#188038", "#9334e6", "#e37400", "#007b83", "#a142f4", "#c5221f", "#1967d2"];

const ratings = [];
for (let index = 0; index < 55; index += 1) ratings.push(5);
for (let index = 0; index < 40; index += 1) ratings.push(4);
for (let index = 0; index < 5; index += 1) ratings.push(3);
let seed = 45;
function nextSeed() {
  seed = (seed * 17 + 11) % 10007;
  return seed;
}
for (let index = ratings.length - 1; index > 0; index -= 1) {
  const swap = nextSeed() % (index + 1);
  const current = ratings[index];
  ratings[index] = ratings[swap];
  ratings[swap] = current;
}

const quoteOrder = quotes.map((_, index) => index);
for (let index = quoteOrder.length - 1; index > 0; index -= 1) {
  const swap = nextSeed() % (index + 1);
  const current = quoteOrder[index];
  quoteOrder[index] = quoteOrder[swap];
  quoteOrder[swap] = current;
}

const reviews = Array.from({ length: 100 }, (_, index) => {
  const name = `${firstNames[index % firstNames.length]} ${lastNames[(index * 7 + 3) % lastNames.length]}`;
  const ageDays = 3 + ((index * 11 + 5) % 480);
  const day = new Date();
  day.setHours(12, 0, 0, 0);
  day.setDate(day.getDate() - ageDays);
  const date = day.toISOString().slice(0, 10);
  return {
    name,
    place: places[index],
    rating: ratings[index],
    date,
    quote: quotes[quoteOrder[index % quoteOrder.length]],
    color: avatarColors[index % avatarColors.length],
    sample: true,
  };
});

reviews.sort((a, b) => (a.date < b.date ? 1 : -1));

const REVIEWS_PAGE = 5;
let reviewsShown = REVIEWS_PAGE;

function relativeTime(value) {
  const then = new Date(`${value}T12:00:00`);
  const now = new Date();
  const days = Math.round((now - then) / 86400000);
  if (days <= 1) return "a day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "a week ago";
  if (days < 30) return `${Math.round(days / 7)} weeks ago`;
  if (days < 60) return "a month ago";
  if (days < 365) return `${Math.round(days / 30)} months ago`;
  if (days < 730) return "a year ago";
  return `${Math.round(days / 365)} years ago`;
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
  const score = document.createElement("div");
  score.className = "reviews-score";
  const averageLabel = document.createElement("span");
  averageLabel.className = "reviews-average";
  averageLabel.textContent = average.toFixed(1);
  const side = document.createElement("div");
  const count = document.createElement("span");
  count.className = "reviews-count";
  count.textContent = `${reviews.length} reviews`;
  side.append(starIcons(average), count);
  score.append(averageLabel, side);
  summary.append(score);

  reviews.slice(0, reviewsShown).forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";

    const top = document.createElement("div");
    top.className = "review-top";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.style.background = review.color;
    avatar.textContent = (review.name || "?").trim().charAt(0).toUpperCase();

    const who = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = review.name || "";
    const place = document.createElement("span");
    place.className = "review-place";
    place.textContent = review.place ? `${review.place}, Bengaluru` : "";
    who.append(name, place);
    top.append(avatar, who);

    const meta = document.createElement("div");
    meta.className = "review-meta";
    meta.append(starIcons(review.rating));
    if (review.date) {
      const time = document.createElement("time");
      time.dateTime = review.date;
      time.textContent = relativeTime(review.date);
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
