// src/components/home/TrustBadges.tsx

import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Lock,
  BadgeCheck,
  Headphones,
  CreditCard,
  Crown,
} from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "100% Authentic",
      description: "Premium quality products with trusted craftsmanship.",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999 across India.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free returns and exchanges on eligible orders.",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Protected checkout with trusted payment gateways.",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: CreditCard,
      title: "Safe Checkout",
      description: "UPI, Cards, Net Banking & Wallet payments supported.",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      icon: BadgeCheck,
      title: "Premium Quality",
      description: "Every product passes strict quality inspection.",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      icon: Headphones,
      title: "24×7 Support",
      description: "Friendly customer support whenever you need help.",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
    },
    {
      icon: Crown,
      title: "Royal Experience",
      description: "Luxury shopping experience curated by Style Daddy.",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-100 py-24">
      {/* Decorative Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="container relative mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black text-zinc-900">
            Shop With Confidence
          </h2>

          <p className="mt-5 text-lg text-zinc-500">
            Every purchase at Style Daddy is backed by premium quality,
            secure transactions, and exceptional customer service.
          </p>
        </div>

        {/* Badge Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div
                key={badge.title}
                className="group rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${badge.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${badge.color}`} />
                </div>

                <h3 className="mt-6 text-xl font-black text-zinc-900">
                  {badge.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Premium Banner */}
        <div className="mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-black via-zinc-900 to-black p-12 shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                STYLE DADDY GUARANTEE
              </span>

              <h3 className="mt-6 text-4xl font-black text-white">
                Premium Fashion. Trusted Experience.
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-300">
                We combine luxury-quality menswear with secure shopping,
                fast delivery, easy returns, and dedicated support so you
                can shop with complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <MiniCard value="50K+" label="Happy Customers" />
              <MiniCard value="4.9★" label="Average Rating" />
              <MiniCard value="100K+" label="Orders Delivered" />
              <MiniCard value="100%" label="Secure Checkout" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
      <h4 className="text-3xl font-black text-yellow-400">
        {value}
      </h4>

      <p className="mt-2 text-sm text-zinc-300">
        {label}
      </p>
    </div>
  );
}