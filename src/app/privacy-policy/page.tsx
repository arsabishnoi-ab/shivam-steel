import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles enquiry details sent through this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede="This page explains what the website does with the details you send."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-8 text-base leading-relaxed text-ink">
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Who this policy is for</h2>
            <p className="mt-3">
              {site.name} uses this website to describe railing work and to receive enquiries. The
              workshop address is {site.address.line1}, {site.address.line2}, {site.address.city}.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">What the quotation form collects</h2>
            <p className="mt-3">
              If you submit the form, it sends your name, phone number, email address if you provide
              one, the service you select, the project location, a description of the work, and your
              preferred way to be contacted. A hidden field is used only to reject automated
              submissions. Do not put passwords or payment card numbers in the form.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">How an enquiry is delivered</h2>
            <p className="mt-3">
              When email delivery is configured, the enquiry is sent to the workshop email address
              through that provider. Until it is configured, a production visitor is asked to call or
              use WhatsApp instead, and the form does not pretend the message was emailed. On a
              development computer, an enquiry may be saved in a local file that is not part of the
              public website.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Calls and WhatsApp</h2>
            <p className="mt-3">
              Phone links open your dialler. WhatsApp links open WhatsApp with a short message
              already written. Those services have their own privacy terms. This website does not
              receive the contents of the WhatsApp chat after you leave the page.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Reviews</h2>
            <p className="mt-3">
              If a Google reviews connection is configured later, review text and the public reviewer
              name supplied by Google may be shown. Reviews typed in by the workshop are stored with
              the website content. The site does not invent reviews.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">What we do not do</h2>
            <p className="mt-3">
              Enquiry details are used to reply about railing work. They are not sold. This website
              does not run advertising trackers.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Contact</h2>
            <p className="mt-3">
              To ask about an enquiry you sent, email{" "}
              <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or call the numbers on the contact page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
