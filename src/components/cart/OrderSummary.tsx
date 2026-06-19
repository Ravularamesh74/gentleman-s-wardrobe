
// src/components/cart/OrderSummary.tsx

import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Tag,
  ArrowRight,
} from "lucide-react";

interface OrderSummaryProps {
  subtotal: number;
  shipping?: number;
  discount?: number;
  tax?: number;
  onCheckout?: () => void;
}

export function OrderSummary({
  subtotal,
  shipping = 0,
  discount = 0,
  tax = 0,
  onCheckout,
}: OrderSummaryProps) {
  const total = subtotal + shipping + tax - discount;

  return (
    <aside className="sticky top-24 h-fit overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-zinc-900 to-black p-6 text-white">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <p className="mt-1 text-sm text-zinc-300">
          Secure checkout with Style Daddy
        </p>
      </div>

      {/* Price Details */}
      <div className="space-y-4 p-6">
        <Row
          label="Subtotal"
          value={`₹${subtotal.toLocaleString()}`}
        />

        <Row
          label="Shipping"
          value={
            shipping === 0
              ? "FREE"
              : `₹${shipping.toLocaleString()}`
          }
          highlight={shipping === 0}
        />

        <Row
          label="Discount"
          value={`- ₹${discount.toLocaleString()}`}
          success={discount > 0}
        />

        <Row
          label="Tax / GST"
          value={`₹${tax.toLocaleString()}`}
        />

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              Grand Total
            </span>

            <span className="text-2xl font-black">
              ₹{total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          onClick={onCheckout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-yellow-500 hover:text-black"
        >
          Proceed to Checkout
          <ArrowRight className="h-4 w-4" />
        </button>

        {/* Continue Shopping */}
        <Link
          to="/shop"
          className="block text-center text-sm font-medium text-zinc-500 transition hover:text-black"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Benefits */}
      <div className="border-t bg-zinc-50 p-6">
        <div className="space-y-4 text-sm">
          <Benefit
            icon={<Truck className="h-5 w-5 text-yellow-500" />}
            title="Free Shipping"
            subtitle="On orders above ₹999"
          />

          <Benefit
            icon={<ShieldCheck className="h-5 w-5 text-green-600" />}
            title="Secure Payments"
            subtitle="100% protected checkout"
          />

          <Benefit
            icon={<CreditCard className="h-5 w-5 text-blue-600" />}
            title="Multiple Payment Options"
            subtitle="UPI, Cards & Net Banking"
          />

          <Benefit
            icon={<Tag className="h-5 w-5 text-red-500" />}
            title="Easy Returns"
            subtitle="7-day hassle-free returns"
          />
        </div>
      </div>
    </aside>
  );
}

interface RowProps {
  label: string;
  value: string;
  success?: boolean;
  highlight?: boolean;
}

function Row({
  label,
  value,
  success = false,
  highlight = false,
}: RowProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-zinc-600">{label}</span>

      <span
        className={`font-semibold ${
          success
            ? "text-green-600"
            : highlight
            ? "text-yellow-600"
            : "text-zinc-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function Benefit({
  icon,
  title,
  subtitle,
}: BenefitProps) {
  return (
    <div className="flex items-start gap-3">
      <div>{icon}</div>

      <div>
        <p className="font-semibold text-zinc-900">
          {title}
        </p>

        <p className="text-xs text-zinc-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
