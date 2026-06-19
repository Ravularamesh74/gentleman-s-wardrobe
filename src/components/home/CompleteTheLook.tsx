
// src/components/home/CompleteTheLook.tsx

import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

interface CompleteTheLookProps {
  title?: string;
  outfitName?: string;
  products: Product[];
}

export function CompleteTheLook({
  title = "Complete The Look",
  outfitName = "Smart Casual Collection",
  products,
}: CompleteTheLookProps) {
  if (!products.length) return null;

  const totalPrice = products.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-yellow-50" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2">
            <Sparkles className="h-4 w-4 text-yellow-600" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
              STYLE STUDIO
            </span>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-zinc-900">
            {title}
          </h2>

          <p className="mt-4 text-zinc-600 text-lg">
            Our stylists paired these premium pieces to create the perfect
            outfit.
          </p>
        </div>

        {/* Outfit */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="flex items-center justify-center"
            >
              <div className="w-full">
                <ProductCard product={product} />
              </div>

              {index < Math.min(products.length, 4) - 1 && (
                <div className="hidden lg:flex items-center justify-center px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 rounded-[32px] bg-black p-8 text-white shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
                Curated Outfit
              </p>

              <h3 className="mt-3 text-3xl font-black">
                {outfitName}
              </h3>

              <p className="mt-3 max-w-2xl text-zinc-300">
                Get the complete look with perfectly matched premium pieces
                designed for modern style and everyday comfort.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-sm uppercase tracking-widest text-zinc-400">
                Complete Look Price
              </p>

              <h4 className="mt-2 text-5xl font-black text-yellow-400">
                ₹{totalPrice.toLocaleString()}
              </h4>

              <Link
                to="/cart"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Buy Complete Look
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
