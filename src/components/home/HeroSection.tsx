// src/components/home/HeroSection.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Crown,
  Sparkles,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

interface HeroSectionProps {
  image: string;
}

export function HeroSection({ image }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={image}
        alt="Style Daddy Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />

      {/* Gold Glow */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative container mx-auto flex min-h-[100svh] items-center px-4">
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 backdrop-blur">
            <Crown className="h-4 w-4 text-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              STYLE DADDY PREMIUM
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-8xl">
            Wear
            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Discover premium oversized T-shirts, luxury shirts,
            cargos, denim, jackets and exclusive menswear designed
            for the modern gentleman.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 text-base font-bold text-black shadow-xl transition hover:scale-105"
            >
              Shop Collection
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/sale"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Play className="h-5 w-5" />
              New Arrivals
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            <Stat number="25K+" label="Happy Customers" />
            <Stat number="500+" label="Premium Products" />
            <Stat number="4.9★" label="Customer Rating" />
            <Stat number="24H" label="Fast Dispatch" />
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-green-400" />
              Free Shipping
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
              Secure Payments
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Premium Quality
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              Trusted Brand
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-yellow-400" />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <h3 className="text-3xl font-black text-yellow-400">
        {number}
      </h3>

      <p className="mt-2 text-sm text-zinc-300">
        {label}
      </p>
    </div>
  );
}