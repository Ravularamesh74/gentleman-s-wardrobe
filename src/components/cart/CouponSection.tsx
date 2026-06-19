
// src/components/cart/CouponSection.tsx

import { useMemo, useState } from "react";
import {
  TicketPercent,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

interface CouponSectionProps {
  subtotal: number;
  onApply?: (code: string, discount: number) => void;
}

const COUPONS = {
  STYLE10: {
    discount: 10,
    type: "percent",
  },
  KING20: {
    discount: 20,
    type: "percent",
  },
  SAVE500: {
    discount: 500,
    type: "flat",
  },
} as const;

export function CouponSection({
  subtotal,
  onApply,
}: CouponSectionProps) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState("");
  const [message, setMessage] = useState("");

  const savings = useMemo(() => {
    if (!applied) return 0;

    const coupon =
      COUPONS[applied as keyof typeof COUPONS];

    if (!coupon) return 0;

    if (coupon.type === "percent") {
      return Math.round(
        (subtotal * coupon.discount) / 100
      );
    }

    return coupon.discount;
  }, [subtotal, applied]);

  const applyCoupon = () => {
    const normalized = code.trim().toUpperCase();

    const coupon =
      COUPONS[normalized as keyof typeof COUPONS];

    if (!coupon) {
      setApplied("");
      setMessage("Invalid coupon code.");
      return;
    }

    let discount = 0;

    if (coupon.type === "percent") {
      discount = Math.round(
        (subtotal * coupon.discount) / 100
      );
    } else {
      discount = coupon.discount;
    }

    setApplied(normalized);
    setMessage("Coupon applied successfully!");

    onApply?.(normalized, discount);
  };

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-full bg-yellow-100 p-2">
          <TicketPercent className="h-5 w-5 text-yellow-700" />
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Apply Coupon
          </h3>

          <p className="text-sm text-zinc-500">
            Save more with exclusive offers.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          placeholder="Enter coupon code"
          className="flex-1 rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-yellow-500"
        />

        <button
          onClick={applyCoupon}
          className="rounded-2xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
        >
          Apply
        </button>
      </div>

      {/* Status */}
      {message && (
        <div
          className={`mt-4 flex items-center gap-2 rounded-xl p-3 text-sm ${
            applied
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {applied ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <XCircle className="h-4 w-4" />
          )}

          {message}
        </div>
      )}

      {/* Savings */}
      {applied && (
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50 p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-600" />

            <span className="font-semibold">
              {applied} Applied
            </span>
          </div>

          <p className="mt-2 text-sm text-zinc-600">
            You saved
            <span className="ml-1 font-bold text-green-700">
              ₹{savings.toLocaleString()}
            </span>
            on this order.
          </p>
        </div>
      )}

      {/* Available Coupons */}
      <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
        <h4 className="mb-3 text-sm font-semibold">
          Available Coupons
        </h4>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>STYLE10</span>
            <span className="font-medium">
              10% OFF
            </span>
          </div>

          <div className="flex justify-between">
            <span>KING20</span>
            <span className="font-medium">
              20% OFF
            </span>
          </div>

          <div className="flex justify-between">
            <span>SAVE500</span>
            <span className="font-medium">
              ₹500 OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}