
// src/components/cart/CartItem.tsx

import { Link } from "@tanstack/react-router";
import {
  Minus,
  Plus,
  Trash2,
  Heart,
  Star,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
}

interface CartItemType {
  product: Product;
  qty: number;
  size: string;
  color: string;
}

interface CartItemProps {
  item: CartItemType;
  updateQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  moveToWishlist?: (productId: string) => void;
}

export function CartItem({
  item,
  updateQty,
  removeFromCart,
  moveToWishlist,
}: CartItemProps) {
  const subtotal = item.product.price * item.qty;

  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-5 md:flex-row">
        {/* Product Image */}
        <Link
          to="/product/$id"
          params={{ id: item.product.id }}
          className="shrink-0"
        >
          <img
            src={item.product.image}
            alt={item.product.name}
            className="h-40 w-32 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              {item.product.brand}
            </p>

            <Link
              to="/product/$id"
              params={{ id: item.product.id }}
            >
              <h3 className="mt-2 text-xl font-bold transition hover:text-yellow-600">
                {item.product.name}
              </h3>
            </Link>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>
                Size:
                <strong className="ml-1 text-zinc-900">
                  {item.size}
                </strong>
              </span>

              <span>
                Color:
                <strong className="ml-1 text-zinc-900">
                  {item.color}
                </strong>
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium">
                {item.product.rating.toFixed(1)}
              </span>

              <span className="text-sm text-zinc-500">
                ({item.product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-full border">
              <button
                onClick={() =>
                  updateQty(item.product.id, item.qty - 1)
                }
                className="p-3 transition hover:bg-zinc-100"
              >
                <Minus className="h-4 w-4" />
              </button>

              <span className="min-w-[40px] text-center font-semibold">
                {item.qty}
              </span>

              <button
                onClick={() =>
                  updateQty(item.product.id, item.qty + 1)
                }
                className="p-3 transition hover:bg-zinc-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Wishlist */}
            {moveToWishlist && (
              <button
                onClick={() =>
                  moveToWishlist(item.product.id)
                }
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:border-yellow-500 hover:text-yellow-600"
              >
                <Heart className="h-4 w-4" />
                Save
              </button>
            )}

            {/* Remove */}
            <button
              onClick={() =>
                removeFromCart(item.product.id)
              }
              className="flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              Remove
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="flex min-w-[170px] flex-col items-end justify-between">
          <div className="text-right">
            <p className="text-sm text-zinc-500">
              ₹{item.product.price.toLocaleString()} × {item.qty}
            </p>

            <h4 className="mt-1 text-2xl font-black text-zinc-900">
              ₹{subtotal.toLocaleString()}
            </h4>

            {item.product.mrp > item.product.price && (
              <p className="text-sm text-zinc-400 line-through">
                ₹
                {(
                  item.product.mrp * item.qty
                ).toLocaleString()}
              </p>
            )}
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            In Stock
          </span>
        </div>
      </div>
    </div>
  );
}
