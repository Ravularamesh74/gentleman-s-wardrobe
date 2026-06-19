
// src/components/cart/ShippingProgress.tsx

import {
  Truck,
  CheckCircle2,
  Gift,
} from "lucide-react";

interface ShippingProgressProps {
  subtotal: number;
  freeShippingThreshold?: number;
}

export function ShippingProgress({
  subtotal,
  freeShippingThreshold = 999,
}: ShippingProgressProps) {
  const remaining = Math.max(
    freeShippingThreshold - subtotal,
    0
  );

  const percentage = Math.min(
    (subtotal / freeShippingThreshold) * 100,
    100
  );

  const unlocked = subtotal >= freeShippingThreshold;

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/30 p-2 backdrop-blur">
            {unlocked ? (
              <CheckCircle2 className="h-6 w-6 text-white" />
            ) : (
              <Truck className="h-6 w-6 text-white" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">
              {unlocked
                ? "Free Shipping Unlocked!"
                : "Unlock Free Shipping"}
            </h3>

            <p className="text-sm text-black/70">
              {unlocked
                ? "Congratulations! Your order qualifies for free delivery."
                : `Add ₹${remaining.toLocaleString()} more to get FREE shipping.`}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-600">
            Cart Progress
          </span>

          <span className="font-bold text-zinc-900">
            ₹{subtotal.toLocaleString()} / ₹
            {freeShippingThreshold.toLocaleString()}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        {!unlocked && (
          <p className="mt-4 text-sm text-zinc-500">
            You're only{" "}
            <span className="font-semibold text-black">
              ₹{remaining.toLocaleString()}
            </span>{" "}
            away from enjoying FREE shipping.
          </p>
        )}

        {unlocked && (
          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 p-3">
            <Gift className="h-5 w-5 text-green-600" />

            <span className="text-sm font-semibold text-green-700">
              Free shipping has been applied to your order.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
