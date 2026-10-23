/**
 * Business details for the whole website.
 * Edit this file when a phone number, address, link, or SEO default changes.
 * Leave a value empty rather than guessing. Empty optional fields are hidden.
 */

export type DayName =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type BusinessHour = {
  dayOfWeek: DayName[];
  /** 24-hour time, for example "09:00". */
  opens: string;
  /** 24-hour time, for example "18:30". */
  closes: string;
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const site = {
  name: "Shivam Steel Railing & Furniture",
  shortName: "Shivam",
  /** Optional logo file in /public. Leave empty to use the wordmark. */
  logoPath: "",
  proprietors: [
    {
      name: "Ram Lal",
      phoneDisplay: "+91 75681 75329",
      phoneTel: "+917568175329",
      whatsappDigits: "917568175329",
    },
    {
      name: "Ramesh",
      phoneDisplay: "+91 99864 34975",
      phoneTel: "+919986434975",
      whatsappDigits: "919986434975",
    },
  ],
  /** Used for the floating WhatsApp button and the header call link. */
  primaryContactName: "Ramesh",
  email: "sivamsteel17@gmail.com",
  address: {
    line1: "#1050, 2nd Block, 80 Feet Road",
    line2: "Banashankari 6th Stage, Kariyanapalya",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560062",
    postalDisplay: "560 062",
    country: "India",
    countryCode: "IN",
  },
  /** Areas you actually serve. Add a neighbourhood only when you work there. */
  serviceAreas: ["Bengaluru"],
  /**
   * Confirmed opening hours. Leave this empty until the hours are confirmed.
   * Example:
   * [{ dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" }]
   */
  hours: [] as BusinessHour[],
  /** Example: [{ label: "Instagram", href: "https://instagram.com/yourprofile" }] */
  social: [] as { label: string; href: string }[],
  /** The official "write a review" link from Google Business Profile. Leave empty if you do not have it. */
  googleReviewUrl: "",
  /**
   * The embed URL from Google Maps: Share → Embed a map → copy the src of the iframe.
   * Leave empty to show the address without a map.
   */
  googleMapsEmbedUrl: "",
  siteUrl,
  copyrightYear: 2026,
  whatsappMessage:
    "Hello, I am interested in your railing services in Bangalore. Please share more details and a quotation.",
  seo: {
    title: "Railing Manufacturers in Bangalore | Premium SS & Glass Railings",
    description:
      "Explore stainless steel, glass, staircase and balcony railing solutions in Bangalore. View our project gallery and contact us for a railing quotation.",
    titleTemplate: "%s | Shivam Steel Railing",
  },
};

export function primaryContact() {
  return (
    site.proprietors.find((person) => person.name === site.primaryContactName) ??
    site.proprietors[0]
  );
}

export function addressLines() {
  const { address } = site;
  return [
    address.line1,
    address.line2,
    `${address.city} - ${address.postalDisplay}`,
    address.region,
  ];
}

export function formatAddress() {
  return addressLines().join(", ");
}

export function safeHttpUrl(value: string) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function safeMapEmbedUrl(value: string) {
  const url = safeHttpUrl(value);
  if (!url) return null;
  const parsed = new URL(url);
  const allowed =
    parsed.hostname === "www.google.com" ||
    parsed.hostname === "maps.google.com" ||
    parsed.hostname === "www.google.co.in";
  if (!allowed || !parsed.pathname.includes("/maps")) return null;
  return parsed.toString();
}
