export type TextPart =
  | { kind: "text"; value: string }
  | { kind: "link"; href: string; label: string };

export type FaqItem = {
  question: string;
  answer: TextPart[];
};

export type ProjectCategory =
  | "ss"
  | "glass"
  | "staircase"
  | "balcony"
  | "gate"
  | "residential"
  | "commercial"
  | "custom";

export type Project = {
  id: string;
  title: string;
  /** Public path, for example /images/projects/banashankari-balcony.jpg */
  image: string;
  alt: string;
  /** Further photographs of the same project. */
  images?: { src: string; alt: string }[];
  categories: ProjectCategory[];
  location: string;
  description: string;
  /** Display date you type yourself, such as "March 2026". */
  date?: string;
  /** True for temporary stock photographs. Real projects should omit this or set it to false. */
  isSample?: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  location: string;
  isSample: boolean;
};

export type VideoItem = {
  id: string;
  title: string;
  description?: string;
  /** YouTube video id only, not the full URL. */
  youtubeId?: string;
  /** Local file in /public, for example /videos/balcony-banashankari.mp4 */
  src?: string;
  poster?: string;
  /** Landscape 16:9 clip. Upright clips stay 9:16. */
  wide?: boolean;
};

export type ReviewSource = "manual" | "google";

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Display date, for example "12 March 2026". */
  date?: string;
  /** Local path or an https portrait URL you are allowed to show. */
  photo?: string;
  source: ReviewSource;
  /**
   * Set this only when the review was returned by the Google Places API.
   * Do not mark a hand-typed review as verified.
   */
  googleVerified?: boolean;
};

export type GoogleSummary = {
  rating: number;
  reviewCount: number;
};

export type Service = {
  slug: string;
  name: string;
  formValue: string;
  summary: string;
  image: string;
  imageAlt: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  applications: { title: string; text: string }[];
  faqs: FaqItem[];
  related: string[];
  galleryCategory: ProjectCategory;
};
