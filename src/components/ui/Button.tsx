import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  gold: "bg-gold text-charcoal hover:bg-gold-hover",
  charcoal: "bg-charcoal text-ivory hover:bg-ink",
  ghost: "border border-charcoal bg-transparent text-charcoal hover:border-gold",
  light: "border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:text-gold",
};

type Common = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonProps = Common &
  (
    | { href: string; external?: boolean }
    | { type?: "button" | "submit"; disabled?: boolean }
  );

export function Button(props: ButtonProps) {
  const className = [
    "inline-flex min-h-12 items-center justify-center px-6 text-center text-[11px] font-medium uppercase tracking-[0.16em] transition-colors",
    variants[props.variant ?? "gold"],
    props.className ?? "",
  ].join(" ");

  if ("href" in props) {
    if (props.external) {
      return (
        <a href={props.href} className={className} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={className} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
