import type { FaqItem } from "@/types/content";

/** Questions shown on the homepage. Service pages have their own questions. */
export const faqs: FaqItem[] = [
  {
    question: "Which type of railing is best for a modern home?",
    answer: [
      {
        kind: "text",
        value:
          "A modern home often uses stainless steel, glass, or a combination of the two, because the sections stay slim and the view stays open. The better choice still depends on the opening, whether it is indoors or exposed to weather, and how the fixing surface is built. We look at that on site before recommending a design. See ",
      },
      {
        kind: "link",
        href: "/services/modern-designer-railings",
        label: "modern designer railings",
      },
      { kind: "text", value: " and " },
      {
        kind: "link",
        href: "/services/glass-railings",
        label: "glass railings",
      },
      { kind: "text", value: "." },
    ],
  },
  {
    question: "What is the difference between SS and glass railings?",
    answer: [
      {
        kind: "text",
        value:
          "Stainless steel railings are metal sections: posts, pipes, and a handrail, sometimes with a glass infill. A glass railing uses toughened glass as the main barrier, held by posts, clamps, or a channel. Glass keeps the sightline clearer. Stainless steel can feel more substantial and is often used where a metal finish is preferred. Both are described on the ",
      },
      {
        kind: "link",
        href: "/services/stainless-steel-railings",
        label: "stainless steel",
      },
      { kind: "text", value: " and " },
      {
        kind: "link",
        href: "/services/glass-railings",
        label: "glass railing",
      },
      { kind: "text", value: " pages." },
    ],
  },
  {
    question: "Do you provide staircase railing installation in Bangalore?",
    answer: [
      {
        kind: "text",
        value:
          "Yes. Staircase railings are measured, fabricated, and installed for homes and other buildings in Bengaluru. Straight, turning, and landing runs are all discussed from the actual stair. Details are on the ",
      },
      {
        kind: "link",
        href: "/services/staircase-railings",
        label: "staircase railings",
      },
      { kind: "text", value: " page." },
    ],
  },
  {
    question: "Can I request a custom railing design?",
    answer: [
      {
        kind: "text",
        value:
          "Yes. Bring a photograph of a design you like, or describe the material and the space. The final drawing follows the measured opening, not a catalogue size. Read how a custom job is handled on the ",
      },
      {
        kind: "link",
        href: "/services/custom-railing-solutions",
        label: "custom railing",
      },
      { kind: "text", value: " page." },
    ],
  },
  {
    question: "How do I get a quotation for a railing project?",
    answer: [
      {
        kind: "text",
        value:
          "Call, send a WhatsApp message, or use the quotation form. Share the location, a few photographs, and whether the work is a staircase, balcony, or another opening. A price is given after the requirement is clear. Standard rates are not listed, because length, fixing, and finish change the work. Start from the ",
      },
      { kind: "link", href: "/contact", label: "contact page" },
      { kind: "text", value: "." },
    ],
  },
  {
    question: "What information is required for a railing estimate?",
    answer: [
      {
        kind: "text",
        value:
          "The property location in or around Bengaluru, the type of railing, indoor or outdoor use, approximate length, number of floors or flights, and photographs of the opening. Access for installation, such as an occupied home or a site still under construction, is useful as well.",
      },
    ],
  },
  {
    question: "Do you handle residential and commercial projects?",
    answer: [
      {
        kind: "text",
        value:
          "Yes. The workshop fabricates railings for houses, apartments, and commercial interiors. Tell us how the space is used so the section and fixing suit that building. You can browse the ",
      },
      { kind: "link", href: "/gallery", label: "project gallery" },
      { kind: "text", value: " as photographs are added." },
    ],
  },
  {
    question: "How can I view your previous railing projects?",
    answer: [
      {
        kind: "text",
        value:
          "Open ",
      },
      { kind: "link", href: "/projects", label: "Our Projects" },
      { kind: "text", value: " and the " },
      { kind: "link", href: "/gallery", label: "project gallery" },
      {
        kind: "text",
        value:
          ". Photographs and videos are added by the workshop as jobs are completed. Until then, any picture marked as a sample is only there to show the page layout.",
      },
    ],
  },
];
