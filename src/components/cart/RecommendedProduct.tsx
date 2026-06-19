
// src/components/cart/RecommendedProducts.tsx

import { Link } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/catalog";
import { useShop } from "@/lib/store";

export function RecommendedProducts() {
  const { addToCart } = useShop();

  // Pick the first 4 featured products
  const products = PRODUCTS.slice(0, 4);

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-600">
            YOU MAY ALSO LIKE
          </p>

          <h2 className="mt-2 text-3xl font-black text-zinc-900">
            Recommended For You
          </h2>
        </div>

        <Link
          to="/shop"
          className="hidden items-center gap-2 text-sm font-semibold hover:text-yellow-600 md:flex"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const discount =
            product.mrp > product.price
              ? Math.round(
                  ((product.mrp - product.price) / product.mrp) * 100
                )
              : 0;

          return (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link
                to="/product/$id"
                params={{ id: product.id }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {discount > 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </Link>

              <div className="space-y-3 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {product.brand}
                </p>

                <Link
                  to="/product/$id"
                  params={{ id: product.id }}
                >
                  <h3 className="line-clamp-2 text-lg font-bold transition hover:text-yellow-600">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold">
                    ₹{product.price.toLocaleString()}
                  </span>

                  {product.mrp > product.price && (
                    <span className="text-sm text-zinc-400 line-through">
                      ₹{product.mrp.toLocaleString()}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product,"M","Black")}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
