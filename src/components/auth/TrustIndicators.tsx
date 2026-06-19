// src/components/auth/TrustIndicators.tsx

import {
  ShieldCheck,
  Lock,
  Truck,
  RotateCcw,
  CreditCard,
  BadgeCheck,
  Star,
  Users,
  CheckCircle2,
  Award,
} from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description: "Enterprise-grade encryption protects your account.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Lock,
    title: "Private & Safe",
    description: "Your personal information stays confidential.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description: "UPI, Cards & Net Banking with secure checkout.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping across India.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Simple returns on eligible orders.",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "Curated collections with exceptional craftsmanship.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
];

export function TrustIndicators() {
  return (
    <section className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-black via-zinc-900 to-black shadow-2xl">
      {/* Header */}
      <div className="border-b border-white/10 p-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-5 py-2">
          <Award className="h-4 w-4 text-yellow-400" />

          <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
            TRUST & SECURITY
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black text-white">
          Shop With Confidence
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Style Daddy delivers premium menswear with secure payments,
          reliable service, and a trusted shopping experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-3">
        {indicators.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={`h-8 w-8 ${item.color}`} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Stats */}
      <div className="border-t border-white/10 bg-white/5 p-8">
        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={<Users className="h-6 w-6 text-yellow-400" />}
            value="50K+"
            label="Happy Customers"
          />

          <Stat
            icon={<Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />}
            value="4.9★"
            label="Customer Rating"
          />

          <Stat
            icon={<CheckCircle2 className="h-6 w-6 text-green-400" />}
            value="100K+"
            label="Orders Delivered"
          />

          <Stat
            icon={<ShieldCheck className="h-6 w-6 text-blue-400" />}
            value="100%"
            label="Secure Checkout"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 flex justify-center">{icon}</div>

      <h3 className="text-3xl font-black text-yellow-400">
        {value}
      </h3>

      <p className="mt-2 text-sm text-zinc-300">
        {label}
      </p>
    </div>
  );
}