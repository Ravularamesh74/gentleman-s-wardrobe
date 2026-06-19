
// src/components/cart/CartEmpty.tsx

import { Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
} from "lucide-react";

export function CartEmpty() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg">
          <ShoppingBag className="h-12 w-12 text-black" />
        </div>

        {/* Heading */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-600">
          Style Daddy
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-900">
          Your Cart is Empty
        </h1>

        <p className="mx-auto mt-4 max-w-md text-zinc-500">
          Looks like you haven't added anything yet. Explore our premium
          menswear collection and discover your next favorite outfit.
        </p>

        {/* Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border p-4">
            <Truck className="mx-auto mb-2 h-6 w-6 text-yellow-500" />
            <p className="text-sm font-medium">Fast Delivery</p>
          </div>

          <div className="rounded-2xl border p-4">
            <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-yellow-500" />
            <p className="text-sm font-medium">Secure Checkout</p>
          </div>

          <div className="rounded-2xl border p-4">
            <Sparkles className="mx-auto mb-2 h-6 w-6 text-yellow-500" />
            <p className="text-sm font-medium">Premium Quality</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-8 py-3 font-semibold text-white transition hover:bg-zinc-800"
          >
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/sale"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 px-8 py-3 font-semibold transition hover:border-yellow-500 hover:text-yellow-600"
          >
            Explore New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
}
