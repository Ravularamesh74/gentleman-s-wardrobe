
// src/components/cart/SecureCheckout.tsx

import {
  ShieldCheck,
  Lock,
  Truck,
  RotateCcw,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

export function SecureCheckout() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-full bg-green-100 p-3">
          <ShieldCheck className="h-6 w-6 text-green-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-zinc-900">
            Secure Checkout
          </h3>

          <p className="text-sm text-zinc-500">
            Shop with confidence. Your payment and personal data are protected.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <Feature
          icon={<Lock className="h-5 w-5 text-green-600" />}
          title="256-bit SSL Encryption"
          description="Your payment information is encrypted and secure."
        />

        <Feature
          icon={<CreditCard className="h-5 w-5 text-blue-600" />}
          title="Multiple Payment Options"
          description="UPI, Credit Card, Debit Card, Net Banking & Wallets."
        />

        <Feature
          icon={<Truck className="h-5 w-5 text-yellow-600" />}
          title="Fast & Reliable Delivery"
          description="Express shipping available across India."
        />

        <Feature
          icon={<RotateCcw className="h-5 w-5 text-purple-600" />}
          title="Easy Returns"
          description="7-day hassle-free return and exchange policy."
        />

        <Feature
          icon={<BadgeCheck className="h-5 w-5 text-emerald-600" />}
          title="100% Genuine Products"
          description="Every Style Daddy product is quality checked."
        />
      </div>

      {/* Payment Methods */}
      <div className="mt-8 rounded-2xl bg-zinc-50 p-4">
        <p className="mb-3 text-sm font-semibold text-zinc-700">
          Accepted Payment Methods
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Visa",
            "Mastercard",
            "RuPay",
            "UPI",
            "PhonePe",
            "Google Pay",
            "Paytm",
            "Razorpay",
          ].map((method) => (
            <span
              key={method}
              className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-center">
        <p className="font-semibold text-green-700">
          🔒 Your transaction is protected by industry-standard security.
        </p>

        <p className="mt-1 text-sm text-green-600">
          Trusted by thousands of customers across India.
        </p>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({
  icon,
  title,
  description,
}: FeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-zinc-100 p-2">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-zinc-900">
          {title}
        </h4>

        <p className="text-sm text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
