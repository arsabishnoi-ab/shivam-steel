import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/projects",
    "/gallery",
    "/reviews",
    "/contact",
    "/privacy-policy",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.siteUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
