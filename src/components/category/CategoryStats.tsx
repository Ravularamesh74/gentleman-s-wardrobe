
// src/components/category/CategoryStats.tsx

import {
  Package,
  Star,
  Truck,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

interface CategoryStatsProps {
  productCount: number;
  averageRating?: number;
  customers?: string;
  freeShippingThreshold?: number;
}

export function CategoryStats({
  productCount,
  averageRating = 4.9,
  customers = "50K+",
  freeShippingThreshold = 999,
}: CategoryStatsProps) {
  const stats = [
    {
      icon: Package,
      value: `${productCount}+`,
      label: "Products",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Star,
      value: averageRating.toFixed(1),
      label: "Average Rating",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      icon: Users,
      value: customers,
      label: "Happy Customers",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Truck,
      value: `₹${freeShippingThreshold}+`,
      label: "Free Shipping",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Secure Payments",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: TrendingUp,
      value: "Trending",
      label: "Latest Collection",
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="my-8">
      <div className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
            Style Daddy Insights
          </span>

          <h2 className="mt-4 text-3xl font-black text-zinc-900">
            Premium Shopping Experience
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Trusted by thousands of fashion enthusiasts across India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-zinc-100 bg-gradient-to-b from-white to-zinc-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${item.bg}`}
                >
                  <Icon className={`h-7 w-7 ${item.color}`} />
                </div>

                <h3 className="mt-4 text-2xl font-black text-zinc-900">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-black via-zinc-900 to-black p-6 text-center text-white">
          <h3 className="text-xl font-bold">
            👑 Elevate Your Wardrobe
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            Discover premium menswear with luxury craftsmanship, modern fits,
            secure checkout, and fast delivery.
          </p>
        </div>
      </div>
    </section>
  );
}