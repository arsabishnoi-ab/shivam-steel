import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="border-b border-line bg-ivory">
      <Container className="py-14 sm:py-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-serif text-[2.15rem] font-semibold leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede ? <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</div> : null}
        {children}
      </Container>
    </section>
  );
}
