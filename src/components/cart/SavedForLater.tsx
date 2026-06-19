
// src/components/cart/SavedForLater.tsx

import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

interface SavedItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  mrp?: number;
}

interface SavedForLaterProps {
  items: SavedItem[];
  onMoveToCart?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function SavedForLater({
  items,
  onMoveToCart,
  onRemove,
}: SavedForLaterProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-full bg-pink-100 p-3">
          <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Saved for Later
          </h2>

          <p className="text-sm text-zinc-500">
            Keep these items for your next purchase.
          </p>
        </div>
      </div>

      {/* Items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <Link
              to="/product/$id"
              params={{ id: item.id }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Details */}
            <div className="space-y-3 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                {item.brand}
              </p>

              <Link
                to="/product/$id"
                params={{ id: item.id }}
              >
                <h3 className="line-clamp-2 text-lg font-bold transition hover:text-yellow-600">
                  {item.name}
                </h3>
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold">
                  ₹{item.price.toLocaleString()}
                </span>

                {item.mrp && item.mrp > item.price && (
                  <span className="text-sm text-zinc-400 line-through">
                    ₹{item.mrp.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => onMoveToCart?.(item.id)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Move to Cart
                </button>

                <button
                  onClick={() => onRemove?.(item.id)}
                  className="rounded-2xl border border-red-200 p-3 text-red-600 transition hover:bg-red-50"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
