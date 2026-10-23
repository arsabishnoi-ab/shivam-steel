import { primaryContact, site } from "@/config/site";

export function serviceWhatsAppMessage(serviceName: string) {
  return `Hello, I am interested in ${serviceName} in Bangalore. Please share more details and a quotation.`;
}

export function buildWhatsAppLink(message: string, digits = primaryContact()?.whatsappDigits) {
  const cleaned = (digits ?? "").replace(/\D/g, "");
  if (!cleaned) return null;
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

export function quoteHref(service?: string) {
  if (!service) return "/contact";
  return `/contact?service=${encodeURIComponent(service)}`;
}

export function defaultWhatsAppLink() {
  return buildWhatsAppLink(site.whatsappMessage);
}
