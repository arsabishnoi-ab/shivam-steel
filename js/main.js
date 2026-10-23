/**
 * Confirmed figures only. Leave a value as "" until it is known.
 * Years in business, Google rating, Google review count, and days open
 * are not shown while they are blank.
 */
const stats = [
  { value: "", label: "Years in business" },
  { value: "", label: "Google rating" },
  { value: "", label: "Google reviews" },
  { value: "", label: "Days open" },
];

/**
 * Job films. wide is true when the clip is landscape.
 * { src, poster, title, text, wide }
 */
const videos = [
  {
    src: "assets/videos/video-01.mp4",
    poster: "assets/images/posters/video-01.jpg",
    title: "Glass stair with steel bars",
    text: "Stainless bars and glass along a wood stair.",
  },
  {
    src: "assets/videos/video-02.mp4",
    poster: "assets/images/posters/video-02.jpg",
    title: "Curved wood and glass",
    text: "A curved landing rail with a wood top on glass.",
  },
  {
    src: "assets/videos/video-03.mp4",
    poster: "assets/images/posters/video-03.jpg",
    title: "Wood handrail on glass",
    text: "A wood handrail running along glass panels.",
  },
  {
    src: "assets/videos/video-04.mp4",
    poster: "assets/images/posters/video-04.jpg",
    title: "Wood newel, glass stair",
    text: "A wood newel post with a glass stair rail.",
  },
  {
    src: "assets/videos/video-05.mp4",
    poster: "assets/images/posters/video-05.jpg",
    title: "Wood top, 10 mm glass",
    text: "Side fitting with a wood top on 10 mm glass.",
  },
  {
    src: "assets/videos/video-06.mp4",
    poster: "assets/images/posters/video-06.jpg",
    title: "Wood handrail, patterned glass",
    text: "A wood handrail beside a patterned glass panel.",
    wide: true,
  },
  {
    src: "assets/videos/video-07.mp4",
    poster: "assets/images/posters/video-07.jpg",
    title: "Balcony glass and grille",
    text: "Balcony glass above a metal grille.",
    wide: true,
  },
  {
    src: "assets/videos/video-08.mp4",
    poster: "assets/images/posters/video-08.jpg",
    title: "Black stone glass stair",
    text: "A glass railing on a black stone stair.",
  },
  {
    src: "assets/videos/video-09.mp4",
    poster: "assets/images/posters/video-09.jpg",
    title: "Wood handrail, fluted wall",
    text: "A wood handrail beside a fluted wood wall.",
  },
  {
    src: "assets/videos/video-10.mp4",
    poster: "assets/images/posters/video-10.jpg",
    title: "Main gate, floral band",
    text: "A wood and steel gate with a floral band.",
  },
  {
    src: "assets/videos/video-11.mp4",
    poster: "assets/images/posters/video-11.jpg",
    title: "Laser-cut wall panels",
    text: "Laser-cut steel panels on a wood wall.",
    wide: true,
  },
];

const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".header");

function closeMenu() {
  document.body.classList.remove("menu-open");
  if (!menuToggle) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  onHeaderScroll();
}

function openMenu() {
  document.body.classList.add("menu-open");
  menuToggle?.setAttribute("aria-expanded", "true");
  menuToggle?.setAttribute("aria-label", "Close menu");
  if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
  onHeaderScroll();
}

menuToggle?.addEventListener("click", () => {
  if (document.body.classList.contains("menu-open")) closeMenu();
  else openMenu();
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    closeMenu();
    if (!id || !id.startsWith("#")) return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 993) closeMenu();
});

function onHeaderScroll() {
  const show = window.scrollY > 40 || document.body.classList.contains("menu-open");
  header?.classList.toggle("is-shown", show);
  header?.classList.toggle("scrolled", show && window.scrollY > 12);
  if (!header) return;
  if (show) header.removeAttribute("inert");
  else header.setAttribute("inert", "");
}
onHeaderScroll();
window.addEventListener("scroll", onHeaderScroll, { passive: true });

function renderStats() {
  const root = document.getElementById("stats");
  if (!root) return;
  const ready = stats.filter((item) => String(item.value).trim() !== "");
  root.replaceChildren();
  if (!ready.length) {
    root.hidden = true;
    return;
  }
  root.hidden = false;
  ready.forEach((item) => {
    const box = document.createElement("article");
    box.className = "stat";
    const number = document.createElement("strong");
    number.textContent = String(item.value);
    const label = document.createElement("span");
    label.textContent = item.label;
    box.append(number, label);
    root.append(box);
  });
}

function videoCard(item) {
  const card = document.createElement("article");
  card.className = "video-card";
  const frame = document.createElement("div");
  frame.className = item.wide ? "video-frame is-wide" : "video-frame";
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  if (item.poster) video.poster = item.poster;
  const source = document.createElement("source");
  source.src = item.src;
  source.type = "video/mp4";
  video.append(source);
  frame.append(video);
  const body = document.createElement("div");
  body.className = "video-body";
  const title = document.createElement("h3");
  title.textContent = item.title || "";
  const text = document.createElement("p");
  text.textContent = item.text || "";
  body.append(title, text);
  card.append(frame, body);
  return card;
}

function renderVideos() {
  const grid = document.getElementById("videos-grid");
  const sub = document.getElementById("videos-sub");
  if (!grid || !sub) return;
  grid.replaceChildren();
  if (!videos.length) {
    sub.textContent = "Upright films of finished railing work will be added here.";
    return;
  }
  sub.textContent = "Films of staircase, balcony, and gate work.";
  const wide = document.createElement("div");
  wide.className = "videos-side videos-wide";
  const tall = document.createElement("div");
  tall.className = "videos-side videos-tall";
  videos.forEach((item) => {
    (item.wide ? wide : tall).append(videoCard(item));
  });
  if (wide.childElementCount) grid.append(wide);
  if (tall.childElementCount) grid.append(tall);
}

function setFilter(name) {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === name);
  });
  const seen = {};
  let shown = 0;
  document.querySelectorAll(".product").forEach((card) => {
    const category = card.dataset.category || "";
    const inCategory = name === "all" || category === name;
    let visible = inCategory;
    if (name === "all" && inCategory) {
      seen[category] = (seen[category] || 0) + 1;
      visible = seen[category] <= 10;
    }
    card.classList.toggle("is-hidden", !visible);
    if (visible) shown += 1;
  });
  const empty = document.getElementById("gallery-empty");
  if (empty) empty.hidden = shown > 0;
}

document.querySelectorAll(".filters [data-filter]").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelectorAll(".dropdown [data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
    closeMenu();
    window.requestAnimationFrame(() => {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

document.querySelectorAll("[data-show-all]").forEach((link) => {
  link.addEventListener("click", () => setFilter("all"));
});

setFilter("all");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  if (lightboxImg) lightboxImg.removeAttribute("src");
}

let lightboxIndex = 0;

function galleryCards() {
  return [...document.querySelectorAll(".product:not(.is-hidden)")];
}

function openLightbox(src, name) {
  if (!lightbox || !lightboxImg || !lightboxCaption) return;
  const cards = galleryCards();
  const match = cards.findIndex((card) => {
    const image = card.querySelector("img");
    return image && (image.src === src || card.dataset.name === name);
  });
  if (match >= 0) lightboxIndex = match;
  lightboxImg.src = src;
  lightboxImg.alt = name;
  lightboxCaption.textContent = name;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
}

function stepLightbox(delta) {
  const cards = galleryCards();
  if (!cards.length || !lightbox || lightbox.hidden) return;
  lightboxIndex = (lightboxIndex + delta + cards.length) % cards.length;
  const card = cards[lightboxIndex];
  const image = card.querySelector("img");
  if (!image) return;
  lightboxImg.src = image.src;
  lightboxImg.alt = card.dataset.name || image.alt || "";
  lightboxCaption.textContent = card.dataset.name || image.alt || "";
}

document.querySelectorAll(".product").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    if (!image) return;
    openLightbox(image.src, card.dataset.name || image.alt || "");
  });
});

lightbox?.addEventListener("click", (event) => {
  if (event.target.closest(".lightbox-nav.prev")) {
    stepLightbox(-1);
    return;
  }
  if (event.target.closest(".lightbox-nav.next")) {
    stepLightbox(1);
    return;
  }
  if (event.target === lightbox || event.target.closest(".lightbox-close")) closeLightbox();
});

function watchSwipe(element, onSwipe) {
  if (!element) return;
  let startX = 0;
  let startY = 0;
  element.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  }, { passive: true });
  element.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    onSwipe(dx < 0 ? 1 : -1);
  }, { passive: true });
}

watchSwipe(lightbox, (direction) => stepLightbox(direction));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeMenu();
  }
  if (event.key === "ArrowRight" && lightbox && !lightbox.hidden) stepLightbox(1);
  if (event.key === "ArrowLeft" && lightbox && !lightbox.hidden) stepLightbox(-1);
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dots button")];
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
let heroIndex = 0;
let heroTimer;

function showSlide(next) {
  if (!slides.length) return;
  heroIndex = (next + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    const active = index === heroIndex;
    slide.classList.toggle("active", active);
    slide.setAttribute("aria-hidden", active ? "false" : "true");
  });
  dots.forEach((dot, index) => {
    const active = index === heroIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
  const slide = slides[heroIndex];
  if (heroTitle && slide.dataset.title) heroTitle.textContent = slide.dataset.title;
  if (heroText && slide.dataset.text) heroText.textContent = slide.dataset.text;
}

function startHero() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showSlide(heroIndex + 1), 6000);
}

document.querySelector(".hero-arrow.next")?.addEventListener("click", () => {
  showSlide(heroIndex + 1);
  startHero();
});

document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => {
  showSlide(heroIndex - 1);
  startHero();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    startHero();
  });
});

watchSwipe(document.querySelector(".hero"), (direction) => {
  showSlide(heroIndex + direction);
  startHero();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) window.clearInterval(heroTimer);
  else startHero();
});

renderStats();
renderVideos();
startHero();
