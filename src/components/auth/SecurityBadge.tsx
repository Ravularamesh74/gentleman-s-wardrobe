// src/components/auth/SecurityBadge.tsx

import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Fingerprint,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

interface SecurityBadgeProps {
  compact?: boolean;
}

export function SecurityBadge({
  compact = false,
}: SecurityBadgeProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-600" />
          <span className="text-sm font-semibold text-green-700">
            100% Secure
          </span>
        </div>

        <span className="hidden text-zinc-300 sm:block">•</span>

        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-semibold text-zinc-700">
            Encrypted Login
          </span>
        </div>

        <span className="hidden text-zinc-300 sm:block">•</span>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-yellow-600" />
          <span className="text-sm font-semibold text-zinc-700">
            Trusted Platform
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-black via-zinc-900 to-black shadow-2xl">
      {/* Header */}
      <div className="border-b border-white/10 px-8 py-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-yellow-400" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
            SECURITY & TRUST
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-black text-white">
          Shop With Complete Confidence
        </h3>

        <p className="mt-3 max-w-2xl text-zinc-300">
          Your personal information, login credentials, and payments
          are protected using modern security practices.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-6 p-8 md:grid-cols-2">
        <Card
          icon={<Lock className="h-7 w-7 text-blue-500" />}
          title="Encrypted Login"
          description="Your authentication details are securely protected."
        />

        <Card
          icon={<Fingerprint className="h-7 w-7 text-purple-500" />}
          title="Identity Protection"
          description="Verification helps keep your account safe."
        />

        <Card
          icon={<CreditCard className="h-7 w-7 text-green-500" />}
          title="Secure Payments"
          description="Checkout supports trusted and encrypted payment methods."
        />

        <Card
          icon={<BadgeCheck className="h-7 w-7 text-yellow-500" />}
          title="Trusted Shopping"
          description="Premium service with reliable customer support and order protection."
        />
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-white/5 px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          <div>
            <h4 className="text-2xl font-black text-yellow-400">
              100%
            </h4>
            <p className="text-xs uppercase tracking-wider text-zinc-300">
              Secure Login
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-yellow-400">
              24×7
            </h4>
            <p className="text-xs uppercase tracking-wider text-zinc-300">
              Customer Support
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-yellow-400">
              50K+
            </h4>
            <p className="text-xs uppercase tracking-wider text-zinc-300">
              Happy Customers
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-yellow-400">
              4.9★
            </h4>
            <p className="text-xs uppercase tracking-wider text-zinc-300">
              Customer Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-bold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-7 text-zinc-300">
        {description}
      </p>
    </div>
  );
}