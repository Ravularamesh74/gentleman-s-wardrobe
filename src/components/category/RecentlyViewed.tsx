// src/components/category/RecentlyViewed.tsx

import { Link } from "@tanstack/react-router";
import { Clock3, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

interface RecentlyViewedProps {
  products: Product[];
  title?: string;
}

export function RecentlyViewed({
  products,
  title = "Recently Viewed",
}: RecentlyViewedProps) {
  if (!products.length) return null;

  return (
    <section className="my-14">
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b bg-gradient-to-r from-zinc-950 via-zinc-900 to-black px-8 py-6 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1">
              <Clock3 className="h-4 w-4 text-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                Continue Shopping
              </span>
            </div>

            <h2 className="text-3xl font-black">
              {title}
            </h2>

            <p className="mt-2 text-sm text-zinc-300">
              Pick up where you left off and rediscover your favorite styles.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Browse All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-zinc-50 px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-zinc-500">
              Showing your last{" "}
              <span className="font-semibold text-zinc-900">
                {Math.min(products.length, 5)}
              </span>{" "}
              recently viewed products.
            </p>

            <button
              type="button"
              className="text-sm font-semibold text-yellow-600 transition hover:text-yellow-700"
            >
              Clear History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}