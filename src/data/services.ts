import type { FaqItem, Service } from "@/types/content";

function faq(question: string, answer: FaqItem["answer"]): FaqItem {
  return { question, answer };
}

/**
 * Service pages. Edit the copy here. The URL is /services/{slug}.
 * formValue must match an option in the quotation form.
 * image paths point at files in /public. Replace them with your own photographs.
 */
export const services: Service[] = [
  {
    slug: "stainless-steel-railings",
    name: "Stainless Steel Railings",
    formValue: "SS Railings",
    summary:
      "Handrails, balcony sections, and staircase runs in stainless steel, finished for indoor rooms or weather-exposed edges.",
    image: "/images/work/product-square-four.jpg",
    imageAlt: "Square pipe railing with four lines",
    h1: "Stainless Steel Railings in Bangalore",
    seoTitle: "Stainless Steel Railings in Bangalore",
    seoDescription:
      "Stainless steel railing fabrication and installation for homes, balconies, and commercial buildings in Bengaluru. Ask Shivam Steel Railing for a site quotation.",
    intro: [
      "Stainless steel is used where a railing needs a clean metal line and a finish that can live with Bengaluru weather. Shivam Steel Railing & Furniture fabricates and installs SS railings for houses, apartments, and commercial buildings from its workshop in Banashankari.",
      "The usual architectural grades are SS 304 for most indoor and covered positions, and SS 316 where the railing stays wet or is more exposed. Pipe size, wall thickness, and the choice of a brushed or mirror finish are confirmed at measurement, before anything is cut.",
    ],
    benefits: [
      {
        title: "A finish that suits the building",
        text: "Brushed, mirror, and matte surfaces read differently in daylight. The finish is chosen against the stone, wood, or paint already on site.",
      },
      {
        title: "Indoor and outdoor sections",
        text: "A covered stair and an open terrace do not need the same grade. That decision is made for the actual exposure, not from a single default.",
      },
      {
        title: "With or without glass",
        text: "A stainless handrail can stand with metal infill, or it can hold a glass panel where the view should stay open.",
      },
      {
        title: "Made to the measured run",
        text: "Posts, bends, and balcony lengths are fabricated from site sizes, including landings and changes of direction.",
      },
    ],
    applications: [
      {
        title: "Apartment balconies",
        text: "Edge railings fixed to the slab or parapet, with the height checked against the building drawing.",
      },
      {
        title: "Staircases",
        text: "Handrails that follow the pitch, with posts placed so the fixing has a sound surface.",
      },
      {
        title: "Lobbies and corridors",
        text: "Metal railings for voids, ramps, and circulation in commercial interiors.",
      },
    ],
    faqs: [
      faq("Which stainless grade is used?", [
        {
          kind: "text",
          value:
            "SS 304 is the common choice for interior and covered railings. SS 316 is discussed where the railing is more exposed to moisture. The grade is confirmed before fabrication, and it is not changed silently.",
        },
      ]),
      faq("Do you install SS railings in Bengaluru?", [
        {
          kind: "text",
          value:
            "Yes. Measurement, fabrication, and installation are handled for sites in Bengaluru. Share the location and a photograph to start a quotation.",
        },
      ]),
      faq("Can stainless steel be combined with glass?", [
        {
          kind: "text",
          value: "Yes. A stainless post and handrail can carry a glass infill. See ",
        },
        { kind: "link", href: "/services/glass-railings", label: "glass railings" },
        { kind: "text", value: " for the glass side of that specification." },
      ]),
    ],
    related: ["glass-railings", "staircase-railings", "balcony-railings"],
    galleryCategory: "ss",
  },
  {
    slug: "glass-railings",
    name: "Glass Railings",
    formValue: "Glass Railings",
    summary:
      "Glass balustrades for balconies and stairs, held by posts, clamps, or a base channel, specified for the span.",
    image: "/images/work/product-wood-glass.jpg",
    imageAlt: "Side-fitted railing with a wooden handrail on 10 mm glass",
    h1: "Glass Railings in Bangalore",
    seoTitle: "Glass Railings in Bangalore",
    seoDescription:
      "Glass balcony and staircase railings in Bengaluru, including post-supported and frameless-style balustrades. Request a measured quotation from Shivam Steel Railing.",
    intro: [
      "A glass railing is chosen when the edge protection should stay visually light. Shivam fabricates the metal holding work and installs glass balustrades for balconies, stairs, and terraces in Bengaluru.",
      "Toughened glass is the usual material for a balustrade. Thickness, whether a handrail is needed on top, and whether the glass sits on posts, clamps, or a bottom channel all follow the span and the structure it is fixed to. Those choices are written into the quotation rather than assumed.",
    ],
    benefits: [
      {
        title: "An open sightline",
        text: "Glass keeps the balcony or stair visually clear, which matters in smaller rooms and on terraces with a view.",
      },
      {
        title: "Several ways to hold the glass",
        text: "Posts, point clamps, and a base channel each change the look and the fixing. The method is picked from the slab or wall that is actually there.",
      },
      {
        title: "Paired with stainless steel",
        text: "A metal handrail or post line can sit with the glass when a grip, or a stronger rhythm of posts, is wanted.",
      },
      {
        title: "Specified per opening",
        text: "Glass thickness is not copied from a neighbouring building. It is discussed for this span and this fixing.",
      },
    ],
    applications: [
      {
        title: "Balconies and terraces",
        text: "Edge glass where the parapet height and the drainage of the balcony have to be respected.",
      },
      {
        title: "Internal stairs",
        text: "A glass side to a staircase, including landings, where the floor build-up allows the fixing.",
      },
      {
        title: "Commercial voids",
        text: "Glass around atrium edges and feature stairs, coordinated with the interior work.",
      },
    ],
    faqs: [
      faq("Is the glass toughened?", [
        {
          kind: "text",
          value:
            "Balustrade glass is specified as toughened, and laminated glass is discussed where the design calls for it. The exact thickness is part of the site specification, not a single number for every job.",
        },
      ]),
      faq("Will a glass railing block the view?", [
        {
          kind: "text",
          value:
            "Clear glass keeps the view open. Reflections and the metal posts are still visible. If a handrail is added, it reads as a line across the glass. We can walk through those options from a photograph of the opening.",
        },
      ]),
      faq("Can glass be used on a staircase?", [
        {
          kind: "text",
          value: "Yes. See ",
        },
        {
          kind: "link",
          href: "/services/staircase-railings",
          label: "staircase railings",
        },
        {
          kind: "text",
          value: " for how a flight, a turn, and a landing are measured together.",
        },
      ]),
    ],
    related: ["stainless-steel-railings", "balcony-railings", "modern-designer-railings"],
    galleryCategory: "glass",
  },
  {
    slug: "staircase-railings",
    name: "Staircase Railings",
    formValue: "Staircase Railings",
    summary:
      "Railings for straight, turning, and landing stairs, in stainless steel, glass, mild steel, or a mixed design.",
    image: "/images/work/product-bending-four.jpg",
    imageAlt: "Bending stainless railing with four lines",
    h1: "Staircase Railing Designs in Bangalore",
    seoTitle: "Staircase Railing Designs in Bangalore",
    seoDescription:
      "Staircase railing design, fabrication, and installation in Bengaluru for straight and turning stairs. Share your floor plan or photographs for a quotation.",
    intro: [
      "A staircase railing has to follow the pitch. Shivam measures the flight, the landing, and the change of direction, then fabricates a handrail that sits at a consistent height along that run.",
      "The design can be stainless steel, glass, painted mild steel, or a timber handrail on metal balusters. The material is a design choice. The measurement is not. A quotation for a staircase is based on the real geometry, including how many turns the stair makes.",
    ],
    benefits: [
      {
        title: "Measured to the flight",
        text: "Going, rise, and landing depth are taken on site so the handrail and the posts meet the stair that was built.",
      },
      {
        title: "Straight and turning stairs",
        text: "Dog-leg, L-shaped, and straight flights are set out separately. A bend is fabricated, not forced from a straight length.",
      },
      {
        title: "A handrail you can hold",
        text: "Profile and height are discussed so the rail is comfortable in the hand, not only satisfactory in a drawing.",
      },
      {
        title: "Choice of material",
        text: "Metal, glass, or a mixed handrail can be used on the same stair family if the fixing allows it.",
      },
    ],
    applications: [
      {
        title: "Duplex and villa stairs",
        text: "Internal stairs where the railing is part of the room, often in SS, glass, or wood and metal together.",
      },
      {
        title: "Apartment fire-escape and common stairs",
        text: "Hard-wearing metal railings for shared stairs, specified for the wear those stairs take.",
      },
      {
        title: "Feature stairs",
        text: "A single flight meant to be seen, where the railing design carries more of the architecture.",
      },
    ],
    faqs: [
      faq("Can you match an existing staircase?", [
        {
          kind: "text",
          value:
            "We measure the stair that is already built and design the railing to it. Share photographs of the flight and the landing when you enquire.",
        },
      ]),
      faq("Do you work on curved stairs?", [
        {
          kind: "text",
          value:
            "Curved and radial runs need a site template or a careful set of measurements. Tell us if the stair is curved when you ask for a visit, so the quotation allows for that fabrication.",
        },
      ]),
      faq("Which material should a staircase use?", [
        {
          kind: "text",
          value: "Homes often use ",
        },
        {
          kind: "link",
          href: "/services/stainless-steel-railings",
          label: "stainless steel",
        },
        { kind: "text", value: " or " },
        { kind: "link", href: "/services/glass-railings", label: "glass" },
        {
          kind: "text",
          value:
            ". Painted mild steel is used when a classic or darker metal look is wanted. We will say which one suits the fixing on your stair.",
        },
      ]),
    ],
    related: ["stainless-steel-railings", "glass-railings", "ms-iron-railings"],
    galleryCategory: "staircase",
  },
  {
    slug: "balcony-railings",
    name: "Balcony Railings",
    formValue: "Balcony Railings",
    summary:
      "Balcony and terrace railings in stainless steel, glass, or aluminium, fixed to the slab or wall that is on site.",
    image: "/images/work/product-balcony-glass.jpg",
    imageAlt: "Balcony glass 10 mm in 40 by 40 square pipe",
    h1: "Balcony Railings in Bangalore",
    seoTitle: "Balcony Railings in Bangalore",
    seoDescription:
      "Balcony and terrace railing fabrication in Bengaluru, in stainless steel, glass, and aluminium. Height and fixing are confirmed against your site.",
    intro: [
      "A balcony railing is a working edge, not only a facade line. Shivam fabricates balcony and terrace railings in Bengaluru and fixes them to the slab, beam, or wall that the building actually has.",
      "Height, the gap under the rail, and the strength of the fixing are taken from the site and from the building’s drawings where those drawings are available. An open terrace and a covered balcony are specified differently, because one stays in the weather and the other does not.",
    ],
    benefits: [
      {
        title: "Fixed to the real structure",
        text: "Chemical anchors, plates, or a side fix are chosen after the concrete or steel edge is seen. A fixing is not guessed from a photograph alone.",
      },
      {
        title: "Weather considered",
        text: "An exposed west-facing terrace and a recessed balcony do not need the same grade or coating. That is stated in the quotation.",
      },
      {
        title: "Glass or metal",
        text: "A glass balcony keeps the view. A stainless or aluminium railing gives a stronger metal rhythm. Both are made to the measured length.",
      },
      {
        title: "Aligned with the facade",
        text: "Posts and joints are set out so the balcony reads as one line, including corners and changes of level.",
      },
    ],
    applications: [
      {
        title: "Apartment balconies",
        text: "Replacement of an old grill, or a new railing on a finished slab, coordinated with the occupants.",
      },
      {
        title: "Terraces",
        text: "Longer runs on open roofs, with drainage and the parapet kept in mind.",
      },
      {
        title: "Commercial frontages",
        text: "Balcony edges on offices and mixed-use buildings, finished to match the facade metal.",
      },
    ],
    faqs: [
      faq("What height should a balcony railing be?", [
        {
          kind: "text",
          value:
            "Use the height in the building’s approved drawings and the local practice that applies to that building. We measure and fabricate to the height you confirm for the project. We do not replace the architect’s or the authority’s requirement with a shop standard.",
        },
      ]),
      faq("Can you replace an old balcony grill?", [
        {
          kind: "text",
          value:
            "Often, yes. The old fixing and the condition of the slab edge decide whether a new plate or a new anchor layout is required. That is checked before the old grill is removed.",
        },
      ]),
      faq("Is glass suitable on a high balcony?", [
        {
          kind: "text",
          value:
            "It can be, when the glass thickness, the handrail, and the fixing are specified for that height and span. See ",
        },
        { kind: "link", href: "/services/glass-railings", label: "glass railings" },
        { kind: "text", value: " for how those choices are made." },
      ]),
    ],
    related: ["stainless-steel-railings", "glass-railings", "aluminium-railings"],
    galleryCategory: "balcony",
  },
  {
    slug: "aluminium-railings",
    name: "Aluminium Railings",
    formValue: "Aluminium Railings",
    summary:
      "Lighter railing sections with a coated finish, for balconies and stairs where weight and colour matter.",
    image: "/images/work/product-square-four.jpg",
    imageAlt: "Square pipe railing with four lines",
    h1: "Aluminium Railings in Bangalore",
    seoTitle: "Aluminium Railings in Bangalore",
    seoDescription:
      "Aluminium balcony and staircase railings in Bengaluru, with coated finishes and sections sized to the opening. Ask for a measured quotation.",
    intro: [
      "Aluminium is used when the railing should stay lighter, or when a coated colour is part of the design. Shivam supplies aluminium railing sections for balconies and stairs in Bengaluru, sized to the opening rather than stretched past what the profile can span.",
      "A powder-coated finish holds the colour. The coating, the profile, and the post spacing are agreed before fabrication. Aluminium is not a substitute for every stainless steel detail. Where a long span or a heavier use needs steel, we will say so.",
    ],
    benefits: [
      {
        title: "A lighter section",
        text: "Useful on edges where the added weight of the railing should stay modest, subject to the structure.",
      },
      {
        title: "Colour from the coating",
        text: "The coating colour can sit closer to the window frames or the facade metal than a bare steel finish would.",
      },
      {
        title: "Balcony and stair use",
        text: "Profiles are selected for the run. A wide balcony and a short stair landing are not given the same section by default.",
      },
      {
        title: "An honest comparison with steel",
        text: "If stainless steel or mild steel is the sounder choice for that span, the quotation will say that rather than force an aluminium profile.",
      },
    ],
    applications: [
      {
        title: "Balcony edges",
        text: "Coated aluminium posts and rails along apartment and house balconies.",
      },
      {
        title: "Stair handrails",
        text: "Shorter flights and landings where an aluminium profile meets the design.",
      },
      {
        title: "Mixed facades",
        text: "Railings meant to sit with aluminium windows and a coated exterior palette.",
      },
    ],
    faqs: [
      faq("Is aluminium strong enough for a balcony?", [
        {
          kind: "text",
          value:
            "It can be, when the profile and the post spacing suit the length. It is not automatically right for every span. The section is chosen after the opening is measured.",
        },
      ]),
      faq("Can the colour match my windows?", [
        {
          kind: "text",
          value:
            "A coated finish can be chosen close to existing frames. Bring a sample or a clear photograph of the frame colour when we measure.",
        },
      ]),
      faq("How does this differ from stainless steel?", [
        {
          kind: "text",
          value: "Stainless steel is a bare or brushed metal. Aluminium is usually coated. Compare both on the ",
        },
        {
          kind: "link",
          href: "/services/stainless-steel-railings",
          label: "stainless steel railings",
        },
        { kind: "text", value: " page." },
      ]),
    ],
    related: ["balcony-railings", "stainless-steel-railings", "modern-designer-railings"],
    galleryCategory: "balcony",
  },
  {
    slug: "ms-iron-railings",
    name: "Mild Steel and Iron Railings",
    formValue: "MS Iron Railings",
    summary:
      "Painted mild steel and iron railings for classic grills, compound edges, and traditional staircase designs.",
    image: "/images/work/product-square-four.jpg",
    imageAlt: "Square pipe railing with four lines",
    h1: "Mild Steel and Iron Railings in Bangalore",
    seoTitle: "Mild Steel and Iron Railings in Bangalore",
    seoDescription:
      "Mild steel and iron railing fabrication in Bengaluru for grills, stairs, and classic designs, supplied with a primer and paint specification.",
    intro: [
      "Mild steel and iron are the materials for a classic grill, a patterned stair railing, or a compound-edge design that should be painted rather than left as bright metal. Shivam fabricates these railings in Bengaluru.",
      "Bare mild steel rusts. A job in MS includes a primer and a paint or enamel system, and the colour is agreed before the railing leaves the workshop. If the site is very exposed and a painted surface will be hard to maintain, stainless steel may be the calmer long-term choice. We will say which one fits.",
    ],
    benefits: [
      {
        title: "Classic and patterned work",
        text: "Scrolls, vertical bars, and traditional stair patterns are fabricated in mild steel or iron.",
      },
      {
        title: "A painted finish",
        text: "Colour is part of the design. The paint system is specified, because an unpainted section will not stay sound outdoors.",
      },
      {
        title: "Stairs and grills",
        text: "The same workshop can make a staircase railing and a straight grill, so the metal language can match.",
      },
      {
        title: "Maintenance stated up front",
        text: "Painted steel needs repainting over time, especially on an open terrace. That is part of the conversation, not a surprise later.",
      },
    ],
    applications: [
      {
        title: "Traditional staircases",
        text: "Painted balusters and a handrail on older or classic interiors.",
      },
      {
        title: "Balcony grills",
        text: "Vertical-bar and patterned grills where a metal screen is preferred to glass.",
      },
      {
        title: "Compound and entrance edges",
        text: "Low metal railings and gate-side sections in a painted finish.",
      },
    ],
    faqs: [
      faq("Will mild steel rust?", [
        {
          kind: "text",
          value:
            "It will, if it is left bare or if the paint fails. Outdoor MS is quoted with surface preparation and a coating. Ask us to include the paint specification in the quotation so it is not treated as an extra.",
        },
      ]),
      faq("Can you copy an old iron pattern?", [
        {
          kind: "text",
          value:
            "Bring a photograph and, if you have it, a piece of the old pattern. We will say whether it can be reproduced and what the fabrication involves.",
        },
      ]),
      faq("When is stainless steel the better metal?", [
        {
          kind: "text",
          value:
            "When you want a metal finish without a paint cycle, especially on an open balcony. Read the ",
        },
        {
          kind: "link",
          href: "/services/stainless-steel-railings",
          label: "stainless steel",
        },
        { kind: "text", value: " page and we can compare both on site." },
      ]),
    ],
    related: ["staircase-railings", "balcony-railings", "custom-railing-solutions"],
    galleryCategory: "staircase",
  },
  {
    slug: "modern-designer-railings",
    name: "Modern Designer Railings",
    formValue: "Modern Designer Railings",
    summary:
      "Contemporary railing compositions in stainless steel and glass, drawn for the architecture of a specific room or facade.",
    image: "/images/work/product-bending-four.jpg",
    imageAlt: "Bending stainless railing with four lines",
    h1: "Modern Railing Designs in Bangalore",
    seoTitle: "Modern Railing Designs in Bangalore",
    seoDescription:
      "Modern stainless steel and glass railing designs for homes and commercial interiors in Bengaluru. Each design is drawn from the measured site.",
    intro: [
      "A modern railing is a composition: the thickness of the handrail, the rhythm of the posts, and how much glass is left clear. Shivam designs and fabricates these railings for contemporary homes and commercial interiors in Bengaluru.",
      "There is no catalogue of finished sizes. A reference image is a starting point. The design is then drawn around the stair or balcony that exists, including the floor build-up, the edge detail, and the light in the room.",
    ],
    benefits: [
      {
        title: "Drawn for one space",
        text: "Post spacing, glass joints, and the handrail profile are set out for the opening, not pasted from a standard bay.",
      },
      {
        title: "Stainless steel and glass together",
        text: "The two materials are combined when the design needs both a metal line and a clear panel.",
      },
      {
        title: "Quiet detailing",
        text: "Joints, welds, and end caps are finished so the railing reads as one piece at eye level.",
      },
      {
        title: "Reference images welcome",
        text: "Send a photograph of a railing you like. We will say what can be made for your sizes, and what has to change.",
      },
    ],
    applications: [
      {
        title: "New houses",
        text: "Stairs and double-height voids in homes that are still being finished.",
      },
      {
        title: "Renovations",
        text: "Replacing a heavy grill with a slimmer metal or glass design, if the structure allows it.",
      },
      {
        title: "Offices and showrooms",
        text: "Feature stairs and mezzanine edges where the railing is part of the interior.",
      },
    ],
    faqs: [
      faq("Can you work from a picture I saved?", [
        {
          kind: "text",
          value:
            "Yes. The picture sets the direction. The dimensions still come from your site. Some details in a photograph depend on a structure you may not have, and we will point those out.",
        },
      ]),
      faq("Do modern railings have to be glass?", [
        {
          kind: "text",
          value:
            "No. A slim stainless steel design can be just as contemporary. Glass is one option, described on the ",
        },
        { kind: "link", href: "/services/glass-railings", label: "glass railings" },
        { kind: "text", value: " page." },
      ]),
      faq("How do I start a design?", [
        {
          kind: "text",
          value: "Send photographs and the location through the ",
        },
        { kind: "link", href: "/contact", label: "quotation form" },
        {
          kind: "text",
          value: ", or on WhatsApp. A site visit is how the design becomes a measured drawing.",
        },
      ]),
    ],
    related: ["glass-railings", "stainless-steel-railings", "custom-railing-solutions"],
    galleryCategory: "custom",
  },
  {
    slug: "custom-railing-solutions",
    name: "Custom Railing Solutions",
    formValue: "Custom Railing Designs",
    summary:
      "A railing designed around one opening, from the first conversation through measurement, fabrication, and installation.",
    image: "/images/work/product-wood-glass.jpg",
    imageAlt: "Side-fitted railing with a wooden handrail on 10 mm glass",
    h1: "Custom Railing Design in Bangalore",
    seoTitle: "Custom Railing Design in Bangalore",
    seoDescription:
      "Custom staircase, balcony, and glass railing design in Bengaluru. Shivam Steel Railing measures the site, then fabricates and installs the agreed design.",
    intro: [
      "Custom work is the ordinary path for a railing that has to fit a real building. Shivam talks through the use of the space, measures it, and fabricates the design that was agreed, rather than offering one standard bay.",
      "You do not need a finished drawing to begin. A location, a few photographs, and a material preference are enough for the first conversation. The quotation comes after the opening is understood. Prices are not published, because two balconies of the same length can still differ in fixing and finish.",
    ],
    benefits: [
      {
        title: "One sequence, clearly staged",
        text: "Enquiry, discussion, measurement, quotation, fabrication, installation, and a final look at the finished railing.",
      },
      {
        title: "Your material, if it suits the site",
        text: "Stainless steel, glass, aluminium, or mild steel. If a requested material is a poor fit, we will explain why before you commit.",
      },
      {
        title: "Residential or commercial",
        text: "The same process serves a house stair and a commercial balcony. The specification changes with the use.",
      },
      {
        title: "A written quotation",
        text: "You see the scope before fabrication starts. Changes after measurement are discussed, not absorbed silently.",
      },
    ],
    applications: [
      {
        title: "Unusual geometry",
        text: "Corners, level changes, curved flights, and balconies that are not a single straight run.",
      },
      {
        title: "Mixed materials",
        text: "Wood handrails on metal balusters, or glass held in a stainless steel frame.",
      },
      {
        title: "Replacement work",
        text: "A new railing in an occupied home, planned around access and the existing floor finish.",
      },
    ],
    faqs: [
      faq("What do you need from me at the start?", [
        {
          kind: "text",
          value:
            "The area of Bengaluru, photographs of the opening, whether it is a stair or a balcony, and any material you already prefer. Exact lengths can wait for the site visit.",
        },
      ]),
      faq("Do you publish a price list?", [
        {
          kind: "text",
          value:
            "No. A quotation follows the measurement. Length, glass thickness, steel grade, access, and finish all move the figure, so a public rate would not describe your job.",
        },
      ]),
      faq("Can I see earlier work?", [
        {
          kind: "text",
          value: "Yes. Use the ",
        },
        { kind: "link", href: "/gallery", label: "project gallery" },
        {
          kind: "text",
          value:
            ". Photographs marked as samples are temporary layout images, not completed Shivam projects.",
        },
      ]),
    ],
    related: ["modern-designer-railings", "staircase-railings", "glass-railings"],
    galleryCategory: "custom",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(slugs: string[]) {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}

export const enquiryServiceOptions = [
  "SS Railings",
  "Glass Railings",
  "Staircase Railings",
  "Balcony Railings",
  "Aluminium Railings",
  "MS Iron Railings",
  "Modern Designer Railings",
  "Custom Railing Designs",
  "Other",
] as const;

export type EnquiryService = (typeof enquiryServiceOptions)[number];
