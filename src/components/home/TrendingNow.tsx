// src/components/home/TrendingNow.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  TrendingUp,
  Eye,
  ShoppingBag,
} from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface TrendingNowProps {
  products: Product[];
}

export function TrendingNow({ products }: TrendingNowProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-red-500/10 blur-[140px]" />
      <div className="absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-5 py-2">
              <Flame className="h-4 w-4 text-red-500" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                HOT RIGHT NOW
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
              Trending Now
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              Explore the most popular pieces customers are buying this
              week. Updated daily based on demand and style trends.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            View All
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 backdrop-blur">
            <TrendingUp className="h-8 w-8 text-red-400" />

            <h3 className="mt-4 text-2xl font-black text-white">
              Trending Picks
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Selected from the fastest-selling collections.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 backdrop-blur">
            <Eye className="h-8 w-8 text-yellow-300" />

            <h3 className="mt-4 text-2xl font-black text-white">
              Most Viewed
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Styles attracting the highest customer interest.
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 backdrop-blur">
            <ShoppingBag className="h-8 w-8 text-green-400" />

            <h3 className="mt-4 text-2xl font-black text-white">
              Best Selling
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Customer favorites across premium menswear categories.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product, index) => (
            <div
              key={product.id}
              className="relative transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rank Badge */}
              <div className="absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 font-black text-white shadow-xl">
                #{index + 1}
              </div>

              {/* Trending Badge */}
              <div className="absolute right-3 top-3 z-20 rounded-full bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-yellow-300 backdrop-blur">
                Trending
              </div>

              <div className="rounded-[30px] bg-white p-2 shadow-2xl">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-12 text-center shadow-2xl">
          <Flame className="mx-auto h-14 w-14 text-white" />

          <h3 className="mt-6 text-4xl font-black text-white">
            Stay Ahead of the Trend
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Discover premium oversized T-shirts, shirts, cargos,
            jackets, denim, sneakers, and accessories that everyone is
            talking about.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop Trending
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}