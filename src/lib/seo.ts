import type { Metadata } from "next";
import { site } from "@/config/site";

const shareImage = {
  url: "/images/work/hero-wood-glass.jpg",
  width: 1280,
  height: 720,
  alt: "Side-fitted railing with a wooden handrail on 10 mm glass",
};

type MetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use for the homepage so the title template is not applied twice. */
  absolute?: boolean;
};

export function buildMetadata({ title, description, path, absolute }: MetaInput): Metadata {
  const url = new URL(path, site.siteUrl).toString();
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
