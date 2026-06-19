// src/components/home/HeroStats.tsx

import {
  Users,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  Crown,
} from "lucide-react";

interface HeroStatsProps {
  customers?: string;
  products?: string;
  rating?: string;
  deliveries?: string;
}

export function HeroStats({
  customers = "25K+",
  products = "2,500+",
  rating = "4.9★",
  deliveries = "100K+",
}: HeroStatsProps) {
  const stats = [
    {
      icon: Users,
      value: customers,
      label: "Happy Customers",
      color: "text-blue-500",
    },
    {
      icon: ShoppingBag,
      value: products,
      label: "Premium Products",
      color: "text-purple-500",
    },
    {
      icon: Star,
      value: rating,
      label: "Average Rating",
      color: "text-yellow-500",
    },
    {
      icon: Truck,
      value: deliveries,
      label: "Orders Delivered",
      color: "text-green-500",
    },
  ];

  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[36px] border border-yellow-400/20 bg-white/90 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-200">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="group relative p-8 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-yellow-400/5" />
                  </div>

                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 transition group-hover:scale-110 group-hover:bg-yellow-100">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-zinc-900">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Premium Strip */}
          <div className="border-t border-zinc-200 bg-gradient-to-r from-black via-zinc-900 to-black px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-yellow-400">
                <Crown className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Premium Menswear
                </span>
              </div>

              <div className="flex items-center gap-2 text-green-400">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Secure Payments
                </span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Fast Delivery Across India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}