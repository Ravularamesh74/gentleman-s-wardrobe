
// src/components/home/RewardsSection.tsx

import { Link } from "@tanstack/react-router";
import {
  Crown,
  Gift,
  Trophy,
  Star,
  Coins,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function RewardsSection() {
  const benefits = [
    {
      icon: Gift,
      title: "Welcome Reward",
      value: "500 Points",
      desc: "Earn bonus points instantly after joining.",
    },
    {
      icon: Coins,
      title: "Earn on Every Order",
      value: "5% Cashback",
      desc: "Collect Style Coins with every purchase.",
    },
    {
      icon: Trophy,
      title: "VIP Status",
      value: "Gold Tier",
      desc: "Unlock premium perks and early access.",
    },
    {
      icon: ShieldCheck,
      title: "Priority Support",
      value: "24×7",
      desc: "Dedicated assistance for members.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-amber-50" />

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4">
        {/* Hero Card */}
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-black via-zinc-900 to-black shadow-2xl">
          <div className="grid gap-12 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">
                <Crown className="h-4 w-4 text-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  STYLE DADDY REWARDS
                </span>
              </div>

              <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
                Join The Royal Club
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Earn points every time you shop. Unlock VIP access,
                birthday rewards, exclusive launches, and members-only
                discounts.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
                >
                  Join Free
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/account"
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  My Rewards
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[32px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-400 p-4">
                  <Star className="h-8 w-8 fill-black text-black" />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white">
                    Gold Member
                  </h3>

                  <p className="text-zinc-400">
                    Premium loyalty experience
                  </p>
                </div>
              </div>

              <div className="mt-8 h-4 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500" />
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-zinc-400">
                  7,500 Points
                </span>

                <span className="font-semibold text-yellow-300">
                  10,000 for Platinum
                </span>
              </div>

              <div className="mt-8 rounded-2xl bg-yellow-500/10 p-5">
                <p className="text-sm text-zinc-300">
                  Spend ₹1 and earn{" "}
                  <span className="font-bold text-yellow-300">
                    1 Style Coin
                  </span>
                  . Redeem coins for discounts, early access, and
                  exclusive merchandise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Icon className="h-8 w-8 text-yellow-600" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-zinc-900">
                  {item.value}
                </h3>

                <h4 className="mt-2 font-semibold text-zinc-800">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-[36px] bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 p-10 text-center shadow-2xl">
          <Sparkles className="mx-auto h-12 w-12 text-black" />

          <h3 className="mt-5 text-4xl font-black text-black">
            Start Earning Rewards Today
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-black/80">
            Membership is completely free. Shop premium menswear,
            collect Style Coins, and unlock exclusive benefits with
            every purchase.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Become a Member
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
