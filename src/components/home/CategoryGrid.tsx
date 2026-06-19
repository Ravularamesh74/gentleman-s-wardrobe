
// src/components/home/CategoryGrid.tsx

import { Link } from "@tanstack/react-router";
import { ArrowRight, Crown } from "lucide-react";

export interface CategoryItem {
  slug: string;
  name: string;
  image: string;
  productCount?: number;
  featured?: boolean;
}

interface CategoryGridProps {
  categories: CategoryItem[];
}

export function CategoryGrid({
  categories,
}: CategoryGridProps) {
  if (!categories.length) return null;

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
              <Crown className="h-4 w-4 text-yellow-600" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                SHOP BY CATEGORY
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black text-zinc-900 md:text-5xl">
              Discover Your Style
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-500">
              Explore premium collections crafted for the modern gentleman.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-2xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to="/category/$slug"
              params={{ slug: category.slug }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {category.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    Featured
                  </div>
                )}

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-black text-white">
                    {category.name}
                  </h3>

                  {category.productCount !== undefined && (
                    <p className="mt-1 text-sm text-zinc-200">
                      {category.productCount}+ Products
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-5">
                <span className="font-semibold text-zinc-900 transition group-hover:text-yellow-600">
                  Explore Collection
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-yellow-400">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[32px] bg-gradient-to-r from-black via-zinc-900 to-black p-10 text-center text-white">
          <h3 className="text-3xl font-black">
            Premium Menswear for Every Occasion
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            From oversized T-shirts and premium shirts to cargos, denim,
            jackets, and accessories — elevate your wardrobe with Style Daddy.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
