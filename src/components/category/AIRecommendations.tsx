
// src/components/category/AIRecommendations.tsx

import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface AIRecommendationsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function AIRecommendations({
  products,
  title = "Recommended For You",
  subtitle = "Picked based on trending styles and your shopping interests.",
}: AIRecommendationsProps) {
  if (!products.length) return null;

  return (
    <section className="relative mt-16 overflow-hidden rounded-[32px] border border-yellow-400/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 text-white shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
              AI PICKS
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            {title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            {subtitle}
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
        >
          Explore More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="rounded-3xl bg-white p-2 text-black transition duration-300 hover:-translate-y-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
        <div>
          <p className="font-semibold text-yellow-300">
            💡 Smart Style Suggestions
          </p>
          <p className="text-sm text-zinc-300">
            Updated automatically based on trending collections and customer
            favorites.
          </p>
        </div>

        <span className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
          Premium Picks
        </span>
      </div>
    </section>
  );
}