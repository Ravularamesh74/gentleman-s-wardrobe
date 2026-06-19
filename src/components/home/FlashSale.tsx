
// src/components/home/FlashSale.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock3,
  Flame,
  Zap,
  BadgePercent,
} from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";

interface FlashSaleProps {
  products: Product[];
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function FlashSale({
  products,
  hours = 12,
  minutes = 45,
  seconds = 30,
}: FlashSaleProps) {
  if (!products.length) return null;

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-orange-950" />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2">
              <Flame className="h-4 w-4 text-red-400" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                LIMITED TIME
              </span>
            </div>

            <h2 className="mt-5 text-5xl font-black text-white">
              ⚡ Flash Sale
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-300">
              Grab premium menswear at unbeatable prices before the timer runs
              out.
            </p>
          </div>

          {/* Countdown */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="mb-3 flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-yellow-400" />

              <span className="text-sm font-semibold text-white">
                Ends In
              </span>
            </div>

            <div className="flex gap-3">
              <TimeBox value={hours} label="Hours" />
              <TimeBox value={minutes} label="Minutes" />
              <TimeBox value={seconds} label="Seconds" />
            </div>
          </div>
        </div>

        {/* Offer Banner */}
        <div className="mt-10 rounded-[28px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <BadgePercent className="h-10 w-10 text-yellow-400" />

              <div>
                <h3 className="text-2xl font-black text-white">
                  Up to 70% OFF
                </h3>

                <p className="text-zinc-300">
                  Use coupon{" "}
                  <span className="font-bold text-yellow-300">
                    FLASH70
                  </span>{" "}
                  for additional savings.
                </p>
              </div>
            </div>

            <Link
              to="/sale"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Shop Sale
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="relative transition duration-300 hover:-translate-y-2"
            >
              {/* Flash badge */}
              <div className="absolute left-3 top-3 z-20 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                FLASH
              </div>

              <div className="rounded-3xl bg-white p-2 shadow-xl">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 rounded-[32px] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-10 text-center text-black shadow-2xl">
          <Zap className="mx-auto h-12 w-12" />

          <h3 className="mt-5 text-4xl font-black">
            Hurry Before It's Gone!
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Flash Sale items are available only for a limited time and while
            stocks last.
          </p>

          <Link
            to="/sale"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Explore Flash Deals
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface TimeBoxProps {
  value: number;
  label: string;
}

function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <div className="min-w-[72px] rounded-2xl bg-black/50 p-3 text-center">
      <div className="text-3xl font-black text-yellow-400">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-300">
        {label}
      </div>
    </div>
  );
}
