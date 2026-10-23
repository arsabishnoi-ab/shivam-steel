import { site, type BusinessHour } from "@/config/site";
import { safeHttpUrl } from "@/config/site";

const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  };
}

function openingHours(hours: BusinessHour[]) {
  return hours
    .filter(
      (hour) =>
        hour.dayOfWeek.length > 0 &&
        timePattern.test(hour.opens) &&
        timePattern.test(hour.closes),
    )
    .map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.dayOfWeek.map((day) => `https://schema.org/${day}`),
      opens: hour.opens,
      closes: hour.closes,
    }));
}

export function businessJsonLd() {
  const hours = openingHours(site.hours);
  const sameAs = site.social
    .map((item) => safeHttpUrl(item.href))
    .filter((item): item is string => Boolean(item));

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.siteUrl}/#business`,
    name: site.name,
    url: site.siteUrl,
    email: site.email,
    telephone: site.proprietors[0]?.phoneTel,
    address: postalAddress(),
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    contactPoint: site.proprietors.map((person) => ({
      "@type": "ContactPoint",
      telephone: person.phoneTel,
      contactType: "customer service",
      name: person.name,
    })),
    ...(hours.length > 0 ? { openingHoursSpecification: hours } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.siteUrl}/#organization`,
    name: site.name,
    url: site.siteUrl,
    email: site.email,
    telephone: site.proprietors.map((person) => person.phoneTel),
    address: postalAddress(),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.name,
    url: site.siteUrl,
    publisher: { "@id": `${site.siteUrl}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.siteUrl).toString(),
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, site.siteUrl).toString(),
    areaServed: { "@type": "City", name: "Bengaluru" },
    provider: { "@id": `${site.siteUrl}/#business` },
  };
}
