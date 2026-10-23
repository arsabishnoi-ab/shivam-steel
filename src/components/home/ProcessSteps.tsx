import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-24 border-y border-line bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How a job proceeds" title="From the first call to the finished railing">
          The sequence can be adjusted to the site. These are the stages a typical railing follows.
        </SectionHeading>
        <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="bg-ivory p-6">
              <span className="font-serif text-3xl text-gold-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
