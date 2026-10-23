"use client";

import { useState } from "react";
import Image from "next/image";
import type { VideoItem } from "@/types/content";

function VideoCard({
  video,
  active,
  onPlay,
}: {
  video: VideoItem;
  active: string | null;
  onPlay: (id: string) => void;
}) {
  const playing = active === video.id;
  return (
    <li className="border border-line bg-ivory">
      <div className={`relative bg-charcoal ${video.wide ? "aspect-video" : "aspect-[9/16]"}`}>
        {video.youtubeId && playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtubeId)}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        {video.src && !video.youtubeId ? (
          <video
            className="absolute inset-0 h-full w-full object-contain"
            controls
            preload="none"
            poster={video.poster}
            playsInline
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ) : null}
        {video.youtubeId && !playing ? (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => onPlay(video.id)}
          >
            {video.poster?.startsWith("/") ? (
              <Image src={video.poster} alt="" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            ) : (
              <span className="absolute inset-0 bg-charcoal" />
            )}
            <span className="relative border border-ivory bg-charcoal/70 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-ivory">
              Play video
            </span>
          </button>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-2xl text-charcoal">{video.title}</h3>
        {video.description ? <p className="mt-2 text-sm leading-relaxed text-muted">{video.description}</p> : null}
      </div>
    </li>
  );
}

export function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const wide = videos.filter((video) => video.wide);
  const tall = videos.filter((video) => !video.wide);

  if (videos.length === 0) {
    return (
      <p className="border border-line bg-ivory px-4 py-8 text-center text-base text-muted">
        Project videos will be added here.
      </p>
    );
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      {wide.length > 0 ? (
        <ul className="grid content-start gap-6">
          {wide.map((video) => (
            <VideoCard key={video.id} video={video} active={active} onPlay={setActive} />
          ))}
        </ul>
      ) : null}
      {tall.length > 0 ? (
        <ul className="grid content-start gap-6 sm:grid-cols-2">
          {tall.map((video) => (
            <VideoCard key={video.id} video={video} active={active} onPlay={setActive} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
