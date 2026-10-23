import Link from "next/link";
import { site, addressLines, safeHttpUrl } from "@/config/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory pb-24">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl text-charcoal">Shivam</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted">Steel Railing</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Stainless steel, glass, staircase, and balcony railings, fabricated and installed in
            Bengaluru.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gold-deep">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-ink hover:text-charcoal">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gold-deep">Visit</p>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ink">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          {site.serviceAreas.length > 0 ? (
            <p className="mt-4 text-sm text-muted">Serving {site.serviceAreas.join(", ")}.</p>
          ) : null}
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/gallery" className="hover:text-charcoal">
                Project gallery
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-charcoal">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gold-deep">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.proprietors.map((person) => (
              <li key={person.phoneTel}>
                <p className="text-muted">{person.name}</p>
                <a href={`tel:${person.phoneTel}`} className="text-charcoal">
                  {person.phoneDisplay}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-charcoal">
                {site.email}
              </a>
            </li>
          </ul>
          {site.social.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm">
              {site.social.map((item) => {
                const href = safeHttpUrl(item.href);
                if (!href) return null;
                return (
                  <li key={item.label}>
                    <a href={href} className="hover:text-charcoal" target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-muted">
          © {site.copyrightYear} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
