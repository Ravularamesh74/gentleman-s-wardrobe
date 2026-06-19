
// src/components/home/BrandMarquee.tsx

import {
  Crown,
  Sparkles,
  Shirt,
  Gem,
  ShieldCheck,
  Truck,
} from "lucide-react";

interface BrandMarqueeProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  "PREMIUM MENSWEAR",
  "100% AUTHENTIC",
  "FREE SHIPPING ₹999+",
  "LUXURY FABRICS",
  "NEW ARRIVALS",
  "OVERSIZED TEES",
  "PREMIUM SHIRTS",
  "DENIM COLLECTION",
  "ROYAL CLUB",
  "EASY RETURNS",
  "STYLE DADDY",
];

export function BrandMarquee({
  items = DEFAULT_ITEMS,
}: BrandMarqueeProps) {
  const marqueeItems = [...items, ...items];

  const getIcon = (index: number) => {
    const icons = [
      Crown,
      Sparkles,
      Shirt,
      Gem,
      ShieldCheck,
      Truck,
    ];

    const Icon = icons[index % icons.length];
    return <Icon className="h-5 w-5 text-yellow-400" />;
  };

  return (
    <section className="relative overflow-hidden border-y border-yellow-500/10 bg-black py-5">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_70%)]" />

      {/* Top border */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-[brandMarquee_35s_linear_infinite] items-center">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-8 flex items-center gap-3 whitespace-nowrap"
            >
              {getIcon(index)}

              <span className="text-sm font-bold uppercase tracking-[0.28em] text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandMarquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
