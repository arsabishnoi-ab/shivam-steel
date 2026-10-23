import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep">404</p>
        <h1 className="mt-4 font-serif text-5xl text-charcoal">This page is not on the site.</h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          The address may be mistyped. You can return home or go to the contact page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-[11px] uppercase tracking-[0.16em] text-charcoal">
            Home
          </Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-charcoal px-6 text-[11px] uppercase tracking-[0.16em]">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
