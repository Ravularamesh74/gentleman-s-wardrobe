// src/components/home/InstagramGallery.tsx

import { Instagram, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface InstagramPost {
  id: number;
  image: string;
  likes: string;
  comments: string;
}

interface InstagramGalleryProps {
  posts: InstagramPost[];
  username?: string;
}

export function InstagramGallery({
  posts,
  username = "_style_daddy_",
}: InstagramGalleryProps) {
  if (!posts.length) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-900 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2">
            <Instagram className="h-4 w-4 text-pink-400" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-300">
              FOLLOW US
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black text-white">
            Shop Our Instagram
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Get inspired by real looks, exclusive drops, and premium
            menswear styling from the Style Daddy community.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {posts.slice(0, 8).map((post) => (
            <a
              key={post.id}
              href={`https://www.instagram.com/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[28px]"
            >
              <img
                src={post.image}
                alt="Instagram Post"
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-1">
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    <span className="font-semibold">
                      {post.likes}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">
                      {post.comments}
                    </span>
                  </div>
                </div>

                <div className="mt-5 rounded-full bg-white p-3">
                  <Instagram className="h-6 w-6 text-black" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[36px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <Instagram className="mx-auto h-12 w-12 text-pink-400" />

          <h3 className="mt-5 text-4xl font-black text-white">
            @{username}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Tag us in your outfits and get featured on our official
            page. Join thousands of fashion enthusiasts wearing
            Style Daddy.
          </p>

          <a
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Visit Instagram
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}