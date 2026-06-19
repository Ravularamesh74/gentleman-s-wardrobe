// src/components/home/VideoBanner.tsx

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

interface VideoBannerProps {
  videoSrc: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function VideoBanner({
  videoSrc,
  poster,
  title = "Luxury Menswear Redefined",
  subtitle = "Experience premium craftsmanship, modern silhouettes, and timeless elegance with Style Daddy.",
  ctaText = "Shop Collection",
  ctaLink = "/shop",
}: VideoBannerProps) {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative overflow-hidden rounded-[40px] bg-black">
      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={poster}
        autoPlay
        loop
        muted={muted}
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

      {/* Gold Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

      {/* Content */}
      <div className="relative container mx-auto flex min-h-[650px] items-center px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 backdrop-blur">
            <Crown className="h-4 w-4 text-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              STYLE DADDY EXCLUSIVE
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            {title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="/new-in"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Sparkles className="h-5 w-5" />
              New Drop
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            <Stat value="50K+" label="Customers" />
            <Stat value="4.9★" label="Rating" />
            <Stat value="100K+" label="Orders" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={() => {
            const video = document.querySelector(
              "#styledaddy-video"
            ) as HTMLVideoElement | null;

            if (!video) return;

            if (playing) {
              video.pause();
            } else {
              video.play();
            }

            setPlaying(!playing);
          }}
          className="rounded-full bg-black/50 p-3 text-white backdrop-blur transition hover:bg-black/70"
        >
          {playing ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </button>

        <button
          onClick={() => setMuted(!muted)}
          className="rounded-full bg-black/50 p-3 text-white backdrop-blur transition hover:bg-black/70"
        >
          {muted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Hidden controlled video reference */}
      <video
        id="styledaddy-video"
        src={videoSrc}
        className="hidden"
      />
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <h3 className="text-3xl font-black text-yellow-400">
        {value}
      </h3>

      <p className="mt-1 text-sm text-zinc-300">
        {label}
      </p>
    </div>
  );
}