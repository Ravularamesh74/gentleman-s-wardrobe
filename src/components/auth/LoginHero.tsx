// src/components/auth/LoginHero.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Gift,
  CheckCircle2,
} from "lucide-react";

interface LoginHeroProps {
  image?: string;
}

export function LoginHero({
  image = "/images/login-hero.jpg",
}: LoginHeroProps) {
  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "4.9★", label: "Customer Rating" },
    { value: "100K+", label: "Orders Delivered" },
  ];

  const benefits = [
    "Premium Quality Menswear",
    "Free Shipping Above ₹999",
    "Easy Returns & Exchanges",
    "Exclusive Member Discounts",
    "Secure Checkout Experience",
    "Early Access to New Drops",
  ];

  return (
    <section className="relative hidden h-screen overflow-hidden lg:flex">
      {/* Background Image */}
      <img
        src={image}
        alt="Style Daddy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />

      {/* Golden Glow */}
      <div className="absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative z-10 flex w-full flex-col justify-between p-16">
        {/* Top */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 backdrop-blur">
            <Crown className="h-4 w-4 text-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              STYLE DADDY
            </span>
          </div>

          <h1 className="mt-8 max-w-2xl text-6xl font-black leading-tight text-white">
            Elevate Your
            <br />
            Everyday Style.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Discover premium oversized T-shirts, shirts, cargos,
            denim, jackets, and accessories crafted for the
            modern gentleman.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Explore Collection
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Middle Benefits */}
        <div className="my-10 grid grid-cols-2 gap-4">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <CheckCircle2 className="h-5 w-5 text-green-400" />

              <span className="text-sm text-white">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid gap-5 xl:grid-cols-2">
          {/* Stats */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />

              <h3 className="text-2xl font-black text-white">
                Trusted Across India
              </h3>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <h4 className="text-3xl font-black text-yellow-400">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-wider text-zinc-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Member Card */}
          <div className="rounded-[30px] bg-gradient-to-br from-yellow-400 to-amber-500 p-[1px]">
            <div className="h-full rounded-[29px] bg-zinc-950 p-8">
              <div className="flex items-center gap-3">
                <Gift className="h-8 w-8 text-yellow-400" />

                <h3 className="text-2xl font-black text-white">
                  Royal Club
                </h3>
              </div>

              <p className="mt-5 leading-7 text-zinc-300">
                Sign in today and unlock exclusive offers, reward
                points, early access to collections, and VIP-only
                discounts.
              </p>

              <div className="mt-8 space-y-3">
                <Feature
                  icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
                  text="Exclusive launches"
                />

                <Feature
                  icon={<Truck className="h-5 w-5 text-green-400" />}
                  text="Priority delivery"
                />

                <Feature
                  icon={
                    <ShieldCheck className="h-5 w-5 text-blue-400" />
                  }
                  text="Secure shopping"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
      {icon}

      <span className="text-sm text-zinc-200">
        {text}
      </span>
    </div>
  );
}