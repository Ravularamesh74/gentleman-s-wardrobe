
// src/components/home/BestSellers.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  Flame,
  TrendingUp,
} from "lucide-react";

import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface BestSellersProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function BestSellers({
  products,
  title = "Best Sellers",
  subtitle = "The most-loved premium menswear chosen by thousands of Style Daddy customers.",
}: BestSellersProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-100" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
              <Flame className="h-4 w-4 text-yellow-600" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                Trending Collection
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black text-zinc-900 md:text-5xl">
              {title}
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-500">
              {subtitle}
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-2xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Highlight Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-500 p-6 text-black shadow-lg">
            <TrendingUp className="h-8 w-8" />

            <h3 className="mt-4 text-xl font-black">
              10,000+
            </h3>

            <p className="mt-1 text-sm font-medium">
              Products Sold
            </p>
          </div>

          <div className="rounded-3xl bg-black p-6 text-white shadow-lg">
            <Crown className="h-8 w-8 text-yellow-400" />

            <h3 className="mt-4 text-xl font-black">
              Premium Quality
            </h3>

            <p className="mt-1 text-sm text-zinc-300">
              Crafted with luxury fabrics and superior finishes.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-zinc-900">
              4.9★ Rating
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Trusted by thousands of happy customers across India.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="transition-all duration-300 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-[32px] bg-gradient-to-r from-black via-zinc-900 to-black p-10 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
              Customer Favorites
            </span>

            <h3 className="mt-5 text-4xl font-black">
              Discover Why Everyone Loves Style Daddy
            </h3>

            <p className="mt-4 text-zinc-300">
              Explore premium shirts, oversized tees, cargos,
              jackets, jeans, and accessories designed for the
              modern gentleman.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Shop Best Sellers
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
