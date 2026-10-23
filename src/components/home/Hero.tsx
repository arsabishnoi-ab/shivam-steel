import Image from "next/image";
import { site } from "@/config/site";
import { defaultWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

const points = ["Quality Craftsmanship", "Elegant Designs", "Professional Installation"];

export function Hero() {
  const whatsapp = defaultWhatsAppLink();

  return (
    <section className="grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
      <div className="relative order-1 min-h-[68vw] max-h-[560px] lg:order-2 lg:max-h-none lg:min-h-full">
        <Image
          src="/images/work/hero-wood-glass.jpg"
          alt="Side-fitted railing with a wooden handrail on 10 mm glass"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="order-2 flex flex-col justify-center bg-ivory px-4 py-14 sm:px-8 lg:order-1 lg:px-14 xl:px-16">
        <p className="rise text-[11px] uppercase tracking-[0.22em] text-gold-deep">
          {site.address.city}
        </p>
        <h1 className="rise rise-delay-1 mt-4 max-w-xl font-serif text-[2.35rem] font-semibold leading-[1.08] text-charcoal sm:text-6xl xl:text-[4.4rem]">
          Exceptional Railing Designs. Crafted to Last.
        </h1>
        <p className="rise rise-delay-2 mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Discover premium stainless steel, glass, staircase, and balcony railing solutions for
          residential and commercial spaces in Bangalore.
        </p>
        <div className="rise rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/projects" className="w-full sm:w-auto">
            Explore Our Projects
          </Button>
          <Button href="/contact" variant="charcoal" className="w-full sm:w-auto">
            Get a Free Quote
          </Button>
        </div>
        {whatsapp ? (
          <a
            href={whatsapp}
            className="rise rise-delay-3 mt-4 inline-flex text-[11px] uppercase tracking-[0.16em] text-charcoal underline decoration-gold underline-offset-4"
          >
            WhatsApp an enquiry
          </a>
        ) : null}
        <ul className="rise rise-delay-4 mt-8 flex flex-col gap-2 text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:flex-wrap sm:gap-x-5">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
