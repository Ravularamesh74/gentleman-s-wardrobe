// src/components/home/Testimonials.tsx

import {
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    city: "Hyderabad",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "The oversized T-shirts are incredible. Premium fabric, perfect fit, and the quality feels much more expensive than the price.",
  },
  {
    id: 2,
    name: "Arjun Reddy",
    role: "Entrepreneur",
    city: "Bengaluru",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "Style Daddy has become my go-to menswear brand. The shirts and cargos look premium and always receive compliments.",
  },
  {
    id: 3,
    name: "Karan Mehta",
    role: "Digital Creator",
    city: "Mumbai",
    avatar: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review:
      "Fast delivery, secure packaging, and outstanding customer support. The fit and styling exceeded my expectations.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-100" />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-600" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-700">
              TRUSTED BY THOUSANDS
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black text-zinc-900">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg text-zinc-500">
            Thousands of men across India trust Style Daddy for premium
            fashion, quality fabrics, and modern styling.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Stat value="50K+" label="Happy Customers" />
          <Stat value="4.9★" label="Average Rating" />
          <Stat value="100K+" label="Orders Delivered" />
          <Stat value="98%" label="Repeat Buyers" />
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group rounded-[32px] border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <Quote className="h-10 w-10 text-yellow-500 opacity-70" />

                <div className="flex">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 leading-8 text-zinc-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-zinc-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-zinc-500">
                    {item.role}
                  </p>

                  <p className="text-xs uppercase tracking-wider text-yellow-700">
                    {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[40px] bg-gradient-to-r from-black via-zinc-900 to-black p-12 text-center shadow-2xl">
          <h3 className="text-4xl font-black text-white">
            Join Thousands of Happy Customers
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-300">
            Upgrade your wardrobe with premium oversized T-shirts,
            shirts, cargos, denim, jackets, and accessories from
            Style Daddy.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
      <h3 className="text-4xl font-black text-yellow-500">
        {value}
      </h3>

      <p className="mt-3 text-sm font-medium text-zinc-500">
        {label}
      </p>
    </div>
  );
}