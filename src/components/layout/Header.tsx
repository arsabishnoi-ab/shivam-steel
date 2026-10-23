"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { site } from "@/config/site";
import { defaultWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export type NavItem = { href: string; label: string };

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header({ services }: { services: NavItem[] }) {
  const pathname = usePathname();
  const menuId = useId();
  const servicesId = useId();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const servicesOpen = servicesPath === pathname;
  const primary = site.proprietors.find((person) => person.name === site.primaryContactName);
  const whatsapp = defaultWhatsAppLink();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0" aria-label={`${site.name}, home`}>
          <span className="block font-serif text-[1.7rem] leading-none tracking-[0.04em] text-charcoal">
            Shivam
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted">
            Steel Railing
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <Link href="/" className="nav-link" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link href="/about" className="nav-link" aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesPath(pathname)}
            onMouseLeave={() => setServicesPath(null)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setServicesPath(null);
              }
            }}
          >
            <button
              type="button"
              className="nav-link inline-flex items-center gap-1"
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesPath(servicesOpen ? null : pathname)}
            >
              Services
              <ChevronDown aria-hidden className="size-3.5" />
            </button>
            {servicesOpen ? (
              <div
                id={servicesId}
                className="absolute left-0 top-full z-20 w-72 border border-line bg-paper py-2 shadow-none"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-ink hover:bg-ivory hover:text-charcoal"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {primary ? (
            <a
              href={`tel:${primary.phoneTel}`}
              className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-charcoal md:inline-flex"
            >
              <Phone aria-hidden className="size-4 text-gold-deep" />
              <span className="hidden xl:inline">{primary.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>
          ) : null}
          <div className="hidden sm:block">
            <Button href="/contact">Get a Quote</Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-ivory lg:hidden">
          <nav className="flex flex-col px-4 py-6" aria-label="Mobile">
            {links.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-line py-4 font-serif text-3xl text-charcoal">
                {link.label}
              </Link>
            ))}
            <p className="pb-2 pt-6 text-[11px] uppercase tracking-[0.18em] text-muted">Services</p>
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="py-2.5 text-base text-ink">
                {service.label}
              </Link>
            ))}
            {links.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-line py-4 font-serif text-3xl text-charcoal">
                {link.label}
              </Link>
            ))}
            <div className="mt-6 grid gap-3 pb-10">
              <Button href="/contact">Get a Quote</Button>
              {site.proprietors.map((person) => (
                <a
                  key={person.phoneTel}
                  href={`tel:${person.phoneTel}`}
                  className="inline-flex min-h-12 items-center justify-center border border-charcoal px-4 text-[11px] uppercase tracking-[0.16em]"
                >
                  Call {person.name} · {person.phoneDisplay}
                </a>
              ))}
              {whatsapp ? (
                <a
                  href={whatsapp}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-charcoal px-4 text-[11px] uppercase tracking-[0.16em] text-ivory"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp {primary?.name}
                </a>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
