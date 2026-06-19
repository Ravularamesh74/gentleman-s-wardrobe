// src/components/home/NewArrivals.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Clock3,
  Crown,
} from "lucide-react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

interface NewArrivalsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function NewArrivals({
  products,
  title = "New Arrivals",
  subtitle = "Fresh drops crafted for the modern gentleman.",
}: NewArrivalsProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
              <Sparkles className="h-4 w-4 text-yellow-600" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                JUST DROPPED
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black text-zinc-900 md:text-5xl">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-zinc-500">
              {subtitle}
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:bg-yellow-400 hover:text-black"
          >
            Explore All
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Premium Info Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-500 p-6 text-black shadow-xl">
            <Zap className="h-8 w-8" />
            <h3 className="mt-4 text-2xl font-black">
              Weekly Drops
            </h3>
            <p className="mt-2 text-sm">
              New premium collections released every week.
            </p>
          </div>

          <div className="rounded-3xl bg-black p-6 text-white shadow-xl">
            <Clock3 className="h-8 w-8 text-yellow-400" />
            <h3 className="mt-4 text-2xl font-black">
              Limited Stock
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Fresh arrivals sell out quickly. Grab yours now.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-lg">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-2xl font-black">
              Premium Quality
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Crafted using luxury fabrics and modern tailoring.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="relative transition-all duration-300 hover:-translate-y-2"
            >
              {/* New Badge */}
              <div className="absolute left-3 top-3 z-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                NEW
              </div>

              <div className="rounded-[28px] bg-white p-2 shadow-lg">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-r from-black via-zinc-900 to-black p-10 text-center text-white shadow-2xl">
          <Sparkles className="mx-auto h-12 w-12 text-yellow-400" />

          <h3 className="mt-6 text-4xl font-black">
            Elevate Your Wardrobe
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-300">
            Discover the latest oversized T-shirts, premium shirts,
            cargos, denim, jackets, and accessories exclusively at
            Style Daddy.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop New Arrivals
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}