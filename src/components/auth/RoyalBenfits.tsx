// src/components/auth/RoyalBenefits.tsx

import {
  Crown,
  Gift,
  Sparkles,
  Truck,
  ShieldCheck,
  Coins,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const benefits = [
  {
    icon: Gift,
    title: "Welcome Reward",
    value: "₹500 Bonus",
    description:
      "Receive exclusive welcome rewards when you create your Style Daddy account.",
  },
  {
    icon: Coins,
    title: "Royal Points",
    value: "Earn 5%",
    description:
      "Collect Style Coins on every purchase and redeem them for future savings.",
  },
  {
    icon: Truck,
    title: "Priority Delivery",
    value: "Express",
    description:
      "Members enjoy faster shipping and early order processing.",
  },
  {
    icon: Sparkles,
    title: "Early Access",
    value: "24 Hours",
    description:
      "Shop new collections before everyone else with VIP access.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Support",
    value: "24×7",
    description:
      "Dedicated customer assistance whenever you need help.",
  },
  {
    icon: Crown,
    title: "Exclusive Drops",
    value: "Members Only",
    description:
      "Unlock limited-edition collections and invite-only releases.",
  },
];

export function RoyalBenefits() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-black via-zinc-900 to-black p-8 md:p-12">
      {/* Decorative glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">
            <Crown className="h-4 w-4 text-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              ROYAL MEMBERSHIP
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Unlock Premium Benefits
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Join the Style Daddy Royal Club and enjoy exclusive
            rewards, faster delivery, member-only offers, and a luxury
            shopping experience designed for modern gentlemen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
                  <Icon className="h-8 w-8 text-black" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  {item.value}
                </h3>

                <h4 className="mt-2 text-lg font-semibold text-yellow-300">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* VIP Card */}
        <div className="mt-14 overflow-hidden rounded-[32px] bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 p-[1px] shadow-2xl">
          <div className="rounded-[31px] bg-zinc-950 px-8 py-10 md:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />

                  <h3 className="text-3xl font-black text-white">
                    VIP Royal Club
                  </h3>
                </div>

                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  Become a premium member and receive priority
                  delivery, exclusive discounts, reward points, early
                  launches, and members-only collections.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    👑 Premium Access
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    🚚 Fast Shipping
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    🎁 Exclusive Rewards
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Zap className="h-10 w-10 text-yellow-400" />

                  <div>
                    <h4 className="text-2xl font-black text-white">
                      Join Free Today
                    </h4>

                    <p className="text-zinc-400">
                      No membership fee required.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <Stat value="50K+" label="Members" />
                  <Stat value="4.9★" label="Rating" />
                  <Stat value="₹500" label="Welcome Bonus" />
                  <Stat value="24×7" label="Support" />
                </div>

                <Link
                  to={("/register" as unknown) as any}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
                >
                  Become a Member
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="rounded-2xl bg-white/10 p-4 text-center">
      <h4 className="text-2xl font-black text-yellow-400">
        {value}
      </h4>

      <p className="mt-1 text-xs uppercase tracking-wider text-zinc-300">
        {label}
      </p>
    </div>
  );
}