// src/components/home/ShopByOccasion.tsx

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Coffee,
  Plane,
  PartyPopper,
  Dumbbell,
  Crown,
} from "lucide-react";

export function ShopByOccasion() {
  const occasions = [
    {
      title: "Office Wear",
      subtitle: "Professional & Elegant",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=900&q=80",
      icon: Briefcase,
      slug: "shirts",
      color: "from-slate-900/80 to-black/40",
    },
    {
      title: "Casual Weekend",
      subtitle: "Relaxed Everyday Style",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
      icon: Coffee,
      slug: "t-shirts",
      color: "from-amber-900/70 to-black/40",
    },
    {
      title: "Travel Ready",
      subtitle: "Comfort Meets Style",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=900&q=80",
      icon: Plane,
      slug: "jackets",
      color: "from-blue-900/70 to-black/40",
    },
    {
      title: "Party Night",
      subtitle: "Bold & Premium Looks",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
      icon: PartyPopper,
      slug: "shirts",
      color: "from-purple-900/70 to-black/40",
    },
    {
      title: "Gym & Active",
      subtitle: "Move With Confidence",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
      icon: Dumbbell,
      slug: "t-shirts",
      color: "from-green-900/70 to-black/40",
    },
    {
      title: "Wedding & Festive",
      subtitle: "Royal Collection",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
      icon: Crown,
      slug: "ethnic",
      color: "from-yellow-900/70 to-black/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-700">
            STYLE GUIDE
          </span>

          <h2 className="mt-6 text-5xl font-black text-zinc-900">
            Shop By Occasion
          </h2>

          <p className="mt-5 text-lg text-zinc-500">
            Discover curated outfits for every moment—from office
            meetings to weekend adventures and special celebrations.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {occasions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={"/category/$slug" as any}
                params={{ slug: item.slug } as any}
                className="group relative overflow-hidden rounded-[32px] shadow-xl"
              >
                {/* Background */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color}`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                    <Icon className="h-8 w-8 text-yellow-300" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-4xl font-black text-white">
                      {item.title}
                    </h3>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition group-hover:bg-yellow-400">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[40px] bg-gradient-to-r from-black via-zinc-900 to-black p-12 text-center shadow-2xl">
          <h3 className="text-4xl font-black text-white">
            Dress Right For Every Occasion
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-300">
            Style Daddy brings together premium shirts, oversized
            T-shirts, cargos, jackets, denim, and accessories to help
            you create the perfect look wherever you go.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop All Collections
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}