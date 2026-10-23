import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-[2.1rem] leading-[1.12] sm:text-5xl ${invert ? "text-ivory" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {children ? (
        <div className={`mt-5 text-base leading-relaxed sm:text-lg ${invert ? "text-[#d9d4cb]" : "text-muted"}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
