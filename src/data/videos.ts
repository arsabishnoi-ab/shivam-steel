import type { VideoItem } from "@/types/content";

/**
 * Project videos.
 *
 * Add an object to the array. Use either a YouTube id or a file in /public/videos.
 * Do not autoplay. The page loads a YouTube player only after a visitor presses play.
 *
 * YouTube example:
 * {
 *   id: "stair-banashankari",
 *   title: "Staircase railing, Banashankari",
 *   description: "SS handrail fitted on a duplex stair.",
 *   youtubeId: "the_id_from_the_watch_url",
 *   poster: "/images/projects/stair-cover.jpg",
 * }
 *
 * Local file example:
 * {
 *   id: "balcony-clip",
 *   title: "Balcony railing installation",
 *   src: "/videos/balcony.mp4",
 *   poster: "/images/projects/balcony-cover.jpg",
 * }
 *
 * youtubeId is the short id only, not the full https://youtube.com/watch?v= link.
 */
export const videos: VideoItem[] = [
  {
    id: "video-01",
    title: "Glass stair with steel bars",
    description: "Stainless bars and glass along a wood stair.",
    src: "/videos/video-01.mp4",
    poster: "/images/work/posters/video-01.jpg",
  },
  {
    id: "video-02",
    title: "Curved wood and glass",
    description: "A curved landing rail with a wood top on glass.",
    src: "/videos/video-02.mp4",
    poster: "/images/work/posters/video-02.jpg",
  },
  {
    id: "video-03",
    title: "Wood handrail on glass",
    description: "A wood handrail running along glass panels.",
    src: "/videos/video-03.mp4",
    poster: "/images/work/posters/video-03.jpg",
  },
  {
    id: "video-04",
    title: "Wood newel, glass stair",
    description: "A wood newel post with a glass stair rail.",
    src: "/videos/video-04.mp4",
    poster: "/images/work/posters/video-04.jpg",
  },
  {
    id: "video-05",
    title: "Wood top, 10 mm glass",
    description: "Side fitting with a wood top on 10 mm glass.",
    src: "/videos/video-05.mp4",
    poster: "/images/work/posters/video-05.jpg",
  },
  {
    id: "video-06",
    title: "Wood handrail, patterned glass",
    description: "A wood handrail beside a patterned glass panel.",
    src: "/videos/video-06.mp4",
    poster: "/images/work/posters/video-06.jpg",
    wide: true,
  },
  {
    id: "video-07",
    title: "Balcony glass and grille",
    description: "Balcony glass above a metal grille.",
    src: "/videos/video-07.mp4",
    poster: "/images/work/posters/video-07.jpg",
    wide: true,
  },
  {
    id: "video-08",
    title: "Black stone glass stair",
    description: "A glass railing on a black stone stair.",
    src: "/videos/video-08.mp4",
    poster: "/images/work/posters/video-08.jpg",
  },
  {
    id: "video-09",
    title: "Wood handrail, fluted wall",
    description: "A wood handrail beside a fluted wood wall.",
    src: "/videos/video-09.mp4",
    poster: "/images/work/posters/video-09.jpg",
  },
  {
    id: "video-10",
    title: "Main gate, floral band",
    description: "A wood and steel gate with a floral band.",
    src: "/videos/video-10.mp4",
    poster: "/images/work/posters/video-10.jpg",
  },
  {
    id: "video-11",
    title: "Laser-cut wall panels",
    description: "Laser-cut steel panels on a wood wall.",
    src: "/videos/video-11.mp4",
    poster: "/images/work/posters/video-11.jpg",
    wide: true,
  },
];
