
// src/components/home/AIRecommendations.tsx

import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  Brain,
  TrendingUp,
} from "lucide-react";

import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface AIRecommendationsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function AIRecommendations({
  products,
  title = "AI Picks For You",
  subtitle = "Curated from trending styles, best sellers, and premium collections.",
}: AIRecommendationsProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2">
              <Brain className="h-4 w-4 text-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                SMART RECOMMENDATIONS
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
              {title}
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-300">
              {subtitle}
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Explore Collection
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* AI Info Card */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">
                Personalized Picks
              </span>
            </div>

            <div className="hidden h-6 w-px bg-white/20 md:block" />

            <div className="flex items-center gap-2 text-green-400">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">
                Updated Daily
              </span>
            </div>

            <div className="hidden h-6 w-px bg-white/20 md:block" />

            <p className="text-sm text-zinc-300">
              Based on popular products, new arrivals, and customer favorites.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-white p-2 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[28px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 p-8 text-center">
          <h3 className="text-3xl font-black text-white">
            Discover Your Next Signature Look
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            Explore premium shirts, oversized tees, cargos, jackets, jeans,
            footwear, and accessories selected to complement your style.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop New Arrivals
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
