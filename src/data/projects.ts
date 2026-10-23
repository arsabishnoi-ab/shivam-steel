import type { Project, ProjectCategory, GalleryImage } from "@/types/content";
import { balconyProjects } from "@/data/balcony-projects";
import { gateProjects } from "@/data/gate-projects";
import { stairProjects } from "@/data/stair-projects";

export const categoryLabels: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "staircase", label: "Staircases" },
  { id: "balcony", label: "Balcony Glass" },
  { id: "gate", label: "Main Gate" },
  { id: "residential", label: "Residential Projects" },
  { id: "commercial", label: "Commercial Projects" },
  { id: "custom", label: "Custom Designs" },
];

/**
 * Project photographs.
 * Add a completed job by appending an object and putting the file in
 * /public/images/work. Set isSample only for a picture that is not this firm's work.
 */
export const projects: Project[] = [
  {
    id: "wood-glass-side-fitting",
    title: "Side fitting, 2×2 wood top, 10 mm glass",
    image: "/images/work/product-wood-glass.jpg",
    alt: "Side-fitted railing with a wooden handrail on 10 mm glass",
    categories: ["glass", "staircase", "residential"],
    location: "Bengaluru",
    description: "Side fitting with a 2×2 wood top on 10 mm glass.",
  },
  {
    id: "balcony-glass-pipe",
    title: "Balcony glass, 10 mm, 40×40 pipe",
    image: "/images/work/product-balcony-glass.jpg",
    alt: "Balcony glass 10 mm in 40 by 40 square pipe",
    categories: ["glass", "balcony", "ss", "residential"],
    location: "Bengaluru",
    description: "Balcony glass, 10 mm, held in 40×40 square pipe.",
  },
  {
    id: "bending-four-line",
    title: "Bending railing, four line",
    image: "/images/work/product-bending-four.jpg",
    alt: "Bending stainless railing with four lines",
    categories: ["ss", "staircase", "custom", "residential"],
    location: "Bengaluru",
    description: "A curved stainless railing with four lines.",
  },
  {
    id: "square-pipe-four-line",
    title: "Square pipe, four line",
    image: "/images/work/product-square-four.jpg",
    alt: "Square pipe railing with four lines",
    categories: ["ss", "staircase", "residential"],
    location: "Bengaluru",
    description: "Square pipe railing with four horizontal lines.",
  },
  ...stairProjects,
  ...balconyProjects,
  ...gateProjects,
];

export function flattenGallery(items: Project[] = projects): GalleryImage[] {
  return items.flatMap((project) => {
    const cover: GalleryImage = {
      id: project.id,
      src: project.image,
      alt: project.alt,
      title: project.title,
      description: project.description,
      categories: project.categories,
      location: project.location,
      isSample: Boolean(project.isSample),
    };
    const extras = (project.images ?? []).map((image, index) => ({
      id: `${project.id}-${index + 1}`,
      src: image.src,
      alt: image.alt,
      title: project.title,
      description: project.description,
      categories: project.categories,
      location: project.location,
      isSample: Boolean(project.isSample),
    }));
    return [cover, ...extras];
  });
}

export function projectsInCategory(category: ProjectCategory) {
  return projects.filter((project) => project.categories.includes(category));
}
