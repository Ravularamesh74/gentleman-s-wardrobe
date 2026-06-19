// src/components/category/ProductList.tsx

import { Link } from "@tanstack/react-router";
import {
  Heart,
  ShoppingBag,
  Star,
  Eye,
  Truck,
  ShieldCheck,
} from "lucide-react";
import type { Product } from "@/lib/catalog";
import { useShop } from "@/lib/store";

interface ProductListProps {
  products: Product[];
}

export function ProductList({
  products,
}: ProductListProps) {
  const {
    addToCart,
    toggleWishlist,
    wishlist,
  } = useShop();

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 py-20 text-center">
        <ShoppingBag className="mx-auto h-14 w-14 text-zinc-400" />
        <h2 className="mt-4 text-2xl font-bold">
          No Products Found
        </h2>
        <p className="mt-2 text-zinc-500">
          Try changing your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {products.map((product) => {
        const isFav = wishlist.includes(product.id);

        const discount =
          product.mrp > product.price
            ? Math.round(
                ((product.mrp - product.price) /
                  product.mrp) *
                  100
              )
            : 0;

        return (
          <div
            key={product.id}
            className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid gap-6 md:grid-cols-[280px_1fr]">
              {/* Image */}
              <Link
                to="/product/$id"
                params={{ id: product.id }}
                className="relative overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {discount > 0 && (
                  <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                    {discount}% OFF
                  </span>
                )}

                {product.isNew && (
                  <span className="absolute right-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                    NEW
                  </span>
                )}
              </Link>

              {/* Content */}
              <div className="flex flex-col justify-between p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    {product.brand}
                  </p>

                  <Link
                    to="/product/$id"
                    params={{ id: product.id }}
                  >
                    <h2 className="mt-2 text-3xl font-black transition hover:text-yellow-600">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="mt-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold">
                      {product.rating.toFixed(1)}
                    </span>

                    <span className="text-zinc-500">
                      ({product.reviews} Reviews)
                    </span>
                  </div>

                  <p className="mt-5 line-clamp-3 text-sm leading-7 text-zinc-600">
                    Premium craftsmanship meets modern
                    styling. Designed for everyday
                    comfort with luxury finishes and
                    tailored silhouettes.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                      Premium Cotton
                    </span>

                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                      Regular Fit
                    </span>

                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                      Easy Care
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-3xl font-black">
                      ₹
                      {product.price.toLocaleString()}
                    </span>

                    {product.mrp >
                      product.price && (
                      <span className="text-lg text-zinc-400 line-through">
                        ₹
                        {product.mrp.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        addToCart(product, "1", product.id)
                      }
                      className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </button>

                    <button
                      onClick={() =>
                        toggleWishlist(
                          product.id
                        )
                      }
                      className={`rounded-2xl border p-3 transition ${
                        isFav
                          ? "border-red-500 bg-red-50 text-red-500"
                          : "hover:border-yellow-500"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFav
                            ? "fill-current"
                            : ""
                        }`}
                      />
                    </button>

                    <Link
                      to="/product/$id"
                      params={{
                        id: product.id,
                      }}
                      className="rounded-2xl border p-3 transition hover:border-yellow-500"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Truck className="h-4 w-4 text-green-600" />
                      Fast Delivery
                    </span>

                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                      Secure Purchase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}