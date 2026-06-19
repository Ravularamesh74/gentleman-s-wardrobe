// src/components/home/LimitedEdition.tsx

import { Link } from "@tanstack/react-router";
import {
  Crown,
  ArrowRight,
  Sparkles,
  Gem,
  ShieldCheck,
} from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface LimitedEditionProps {
  products: Product[];
  collectionName?: string;
}

export function LimitedEdition({
  products,
  collectionName = "Royal Signature Collection",
}: LimitedEditionProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Decorative Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">
            <Gem className="h-4 w-4 text-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              EXCLUSIVE DROP
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Limited Edition
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Crafted in small batches with premium fabrics and refined
            detailing. Once sold out, these styles may not return.
          </p>
        </div>

        {/* Collection Banner */}
        <div className="mt-12 overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 p-8 backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-yellow-400" />

                <h3 className="text-3xl font-black text-white">
                  {collectionName}
                </h3>
              </div>

              <p className="mt-4 max-w-2xl text-zinc-300">
                Premium craftsmanship, modern tailoring, and timeless
                silhouettes designed for those who appreciate exclusivity.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge text="Premium Fabric" />
                <Badge text="Limited Stock" />
                <Badge text="Luxury Finish" />
                <Badge text="Exclusive Design" />
              </div>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="relative transition duration-300 hover:-translate-y-2"
            >
              {/* Limited Badge */}
              <div className="absolute left-3 top-3 z-20 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-lg">
                Limited
              </div>

              <div className="rounded-[28px] bg-white p-2 shadow-2xl">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature
              icon={<Sparkles className="h-7 w-7 text-yellow-400" />}
              title="Exclusive Release"
              text="Small production runs ensure uniqueness."
            />

            <Feature
              icon={<Crown className="h-7 w-7 text-yellow-400" />}
              title="Luxury Craftsmanship"
              text="Designed with premium materials and attention to detail."
            />

            <Feature
              icon={<ShieldCheck className="h-7 w-7 text-green-400" />}
              title="Authentic Quality"
              text="Every piece is built for lasting style and comfort."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-300">
      {text}
    </span>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div>{icon}</div>

      <h4 className="mt-4 text-xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-7 text-zinc-400">
        {text}
      </p>
    </div>
  );
}