
// src/components/category/CategoryHero.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
} from "lucide-react";

interface CategoryHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  productCount?: number;
}

export function CategoryHero({
  title,
  subtitle = "STYLE DADDY PREMIUM COLLECTION",
  description = "Discover premium menswear crafted for confidence. Shop trending styles, timeless essentials, and exclusive drops.",
  image,
  productCount = 0,
}: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative grid items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-12 lg:py-16">
        {/* Left Content */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
              {subtitle}
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              👕 {productCount}+ Products
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              ⭐ 4.9 Customer Rating
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              🚚 Free Shipping ₹999+
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              Shop Collection
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/sale"
              className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 font-semibold transition hover:border-yellow-400 hover:bg-white/10"
            >
              New Arrivals
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <Truck className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
              <p className="text-xs">Fast Delivery</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <ShieldCheck className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
              <p className="text-xs">Secure Payment</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <Star className="mx-auto mb-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
              <p className="text-xs">Premium Quality</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {image ? (
            <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <img
                src={image}
                alt={title}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border border-dashed border-white/20 bg-white/5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">
                  STYLE DADDY
                </h3>
                <p className="mt-2 text-zinc-400">
                  Premium Menswear Collection
                </p>
              </div>
            </div>
          )}

          {/* Floating Discount Card */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 text-black shadow-2xl">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Limited Offer
            </p>
            <h3 className="mt-1 text-3xl font-black text-red-600">
              50% OFF
            </h3>
            <p className="text-sm text-zinc-600">
              Selected Styles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
