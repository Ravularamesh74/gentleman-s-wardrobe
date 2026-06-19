
// src/components/home/AnnouncementBar.tsx

import { Link } from "@tanstack/react-router";
import {
  Crown,
  Truck,
  Gift,
  Sparkles,
  ShieldCheck,
  Phone,
} from "lucide-react";

export function AnnouncementBar() {
  const announcements = [
    {
      icon: <Truck className="h-4 w-4" />,
      text: "FREE SHIPPING ABOVE ₹3999",
    },
    {
      icon: <Gift className="h-4 w-4" />,
      text: "FLAT 10% OFF • USE CODE STYLE10",
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      text: "NEW PREMIUM COLLECTION JUST DROPPED",
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      text: "100% SECURE PAYMENTS",
    },
    {
      icon: <Crown className="h-4 w-4" />,
      text: "ROYAL CLUB MEMBERS GET EXCLUSIVE OFFERS",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-black text-white">
      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]" />

      <div className="relative container mx-auto flex h-11 items-center justify-between px-4">
        {/* Left */}
        <div className="hidden items-center gap-2 lg:flex">
          <Crown className="h-4 w-4 text-yellow-400" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
            Style Daddy Premium
          </span>
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden">
          <div className="flex min-w-max animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap">
            {[...announcements, ...announcements].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs font-semibold tracking-wide"
              >
                <span className="text-yellow-400">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-1 text-xs transition hover:text-yellow-400"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 99999 99999
          </a>

          <Link
            to="/sale"
            className="rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-bold text-black transition hover:scale-105"
          >
            SHOP SALE
          </Link>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

