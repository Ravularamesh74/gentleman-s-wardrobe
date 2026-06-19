// src/components/category/PromoBanner.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  Gift,
  Sparkles,
  TicketPercent,
  Truck,
} from "lucide-react";

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  couponCode?: string;
  discount?: string;
  ctaLink?: string;
  ctaText?: string;
}

export function PromoBanner({
  title = "STYLE DADDY PREMIUM SALE",
  subtitle = "LIMITED TIME OFFER",
  description = "Upgrade your wardrobe with premium menswear. Enjoy exclusive discounts, fast delivery, and luxury quality.",
  couponCode = "STYLE10",
  discount = "UP TO 50% OFF",
  ctaLink = "/shop",
  ctaText = "Shop Now",
}: PromoBannerProps) {
  return (
    <section className="relative my-12 overflow-hidden rounded-[36px] bg-gradient-to-r from-black via-zinc-900 to-black text-white shadow-2xl">
      {/* Background Effects */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Decorative */}
      <div className="absolute right-6 top-6 opacity-10">
        <Crown className="h-40 w-40" />
      </div>

      <div className="relative z-10 grid gap-10 px-8 py-12 lg:grid-cols-[1fr_auto] lg:px-12">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
              {subtitle}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            {description}
          </p>

          {/* Offer */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-yellow-400 px-5 py-4 text-black">
              <p className="text-xs uppercase tracking-widest">
                Exclusive Offer
              </p>

              <h3 className="mt-1 text-2xl font-black">
                {discount}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <TicketPercent className="h-5 w-5 text-yellow-400" />

                <span className="text-sm font-semibold">
                  Use Code
                </span>
              </div>

              <p className="mt-2 text-2xl font-black tracking-widest text-yellow-300">
                {couponCode}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/sale"
              className="inline-flex items-center rounded-2xl border border-white/20 px-7 py-4 font-semibold transition hover:border-yellow-400 hover:bg-white/10"
            >
              View Deals
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center gap-5">
          <Feature
            icon={<Truck className="h-5 w-5 text-green-400" />}
            title="Free Shipping"
            text="On orders above ₹999"
          />

          <Feature
            icon={<Gift className="h-5 w-5 text-pink-400" />}
            title="Premium Packaging"
            text="Luxury gift-ready presentation"
          />

          <Feature
            icon={<Crown className="h-5 w-5 text-yellow-400" />}
            title="Royal Club Rewards"
            text="Earn points on every purchase"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Feature({
  icon,
  title,
  text,
}: FeatureProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div>{icon}</div>

        <div>
          <h4 className="font-bold">
            {title}
          </h4>

          <p className="mt-1 text-sm text-zinc-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}