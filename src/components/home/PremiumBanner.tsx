
// src/components/home/PremiumBanner.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  Sparkles,
  ShieldCheck,
  Truck,
  Gem,
  Star,
} from "lucide-react";

interface PremiumBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function PremiumBanner({
  title = "Experience Luxury Menswear",
  subtitle = "Discover premium fabrics, tailored fits, timeless elegance, and exclusive collections crafted for the modern gentleman.",
  buttonText = "Explore Collection",
  buttonLink = "/shop",
}: PremiumBannerProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black" />

      {/* Animated Glow */}
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4">
        <div className="overflow-hidden rounded-[40px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl shadow-2xl">

          {/* Top */}
          <div className="grid gap-12 p-10 lg:grid-cols-2 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">
                <Crown className="h-4 w-4 text-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  STYLE DADDY EXCLUSIVE
                </span>
              </div>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={buttonLink}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
                >
                  {buttonText}
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/sale"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  New Arrivals
                </Link>
              </div>
            </div>

            {/* Premium Card */}
            <div className="flex items-center">
              <div className="w-full rounded-[32px] bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-[1px] shadow-[0_0_60px_rgba(250,204,21,0.25)]">
                <div className="rounded-[31px] bg-zinc-950 p-8">
                  <div className="flex items-center gap-3">
                    <Gem className="h-10 w-10 text-yellow-400" />

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        Royal Membership
                      </h3>

                      <p className="text-sm text-zinc-400">
                        Premium shopping experience
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <Benefit
                      icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
                      title="Exclusive Collections"
                    />

                    <Benefit
                      icon={<Truck className="h-5 w-5 text-green-400" />}
                      title="Free Express Shipping"
                    />

                    <Benefit
                      icon={<ShieldCheck className="h-5 w-5 text-blue-400" />}
                      title="100% Secure Payments"
                    />

                    <Benefit
                      icon={<Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />}
                      title="VIP Customer Support"
                    />
                  </div>

                  <div className="mt-8 rounded-2xl bg-yellow-400/10 p-5">
                    <p className="text-sm text-zinc-300">
                      Join thousands of customers who trust
                      <span className="font-bold text-yellow-300">
                        {" "}Style Daddy{" "}
                      </span>
                      for premium fashion and luxury menswear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="border-t border-white/10 bg-black/40 px-8 py-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <Stat value="50K+" label="Happy Customers" />
              <Stat value="4.9★" label="Average Rating" />
              <Stat value="2,500+" label="Premium Products" />
              <Stat value="100K+" label="Orders Delivered" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      {icon}

      <span className="font-medium text-white">
        {title}
      </span>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-black text-yellow-400">
        {value}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}