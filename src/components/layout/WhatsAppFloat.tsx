"use client";

import { usePathname } from "next/navigation";
import { primaryContact } from "@/config/site";
import { defaultWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const href = defaultWhatsAppLink();
  const person = primaryContact();
  if (!href || !person || pathname === "/contact") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${person.name} about a railing quotation`}
      className="fixed bottom-4 right-4 z-30 flex size-14 items-center justify-center bg-charcoal text-ivory shadow-none"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
