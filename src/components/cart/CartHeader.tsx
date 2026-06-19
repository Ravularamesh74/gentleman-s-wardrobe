
// src/components/cart/CartHeader.tsx

import { ShoppingBag, ShieldCheck, Truck, CreditCard } from "lucide-react";

interface CartHeaderProps {
  itemCount: number;
}

export function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-r from-black via-zinc-900 to-black p-8 text-white shadow-xl">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            <ShoppingBag className="h-3.5 w-3.5" />
            Shopping Cart
          </div>

          <h1 className="text-4xl font-black tracking-tight">
            Your Cart
          </h1>

          <p className="mt-2 text-zinc-300">
            {itemCount} {itemCount === 1 ? "item" : "items"} ready for checkout.
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
            <Truck className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
            <p className="text-xs text-zinc-300">Fast Delivery</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
            <ShieldCheck className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
            <p className="text-xs text-zinc-300">Secure</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
            <CreditCard className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
            <p className="text-xs text-zinc-300">Safe Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
