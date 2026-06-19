
// src/components/home/SEOContent.tsx

import {
  CheckCircle2,
  Crown,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
} from "lucide-react";

interface SEOContentProps {
  title?: string;
}

export function SEOContent({
  title = "Premium Men's Fashion by Style Daddy",
}: SEOContentProps) {
  return (
    <section className="relative py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-zinc-200 bg-white shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-black via-zinc-900 to-black p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-5 py-2">
              <Crown className="h-4 w-4 text-yellow-400" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                STYLE DADDY
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black text-white">
              {title}
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
              Style Daddy is a destination for premium men's fashion,
              offering oversized T-shirts, luxury shirts, denim,
              cargos, jackets, footwear, and accessories designed for
              confidence, comfort, and timeless style.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:p-14">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-black text-zinc-900">
                Why Choose Style Daddy?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Premium quality fabrics and superior craftsmanship",
                  "Modern fits tailored for today's lifestyle",
                  "Exclusive collections updated regularly",
                  "Affordable luxury with outstanding value",
                  "Trusted by thousands of customers across India",
                  "Fast shipping and secure online payments",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />

                    <span className="text-zinc-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-yellow-50 p-6">
                <h4 className="text-2xl font-bold text-zinc-900">
                  Shop Premium Menswear Online
                </h4>

                <p className="mt-4 leading-7 text-zinc-600">
                  Whether you're looking for casual everyday outfits,
                  office-ready shirts, statement oversized tees, or
                  elevated streetwear, Style Daddy delivers a curated
                  collection designed to suit every occasion.
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-3xl font-black text-zinc-900">
                Customer Commitment
              </h3>

              <div className="mt-8 grid gap-5">
                <InfoCard
                  icon={<Truck className="h-7 w-7 text-green-600" />}
                  title="Fast Delivery"
                  description="Reliable shipping with quick order processing across India."
                />

                <InfoCard
                  icon={
                    <ShieldCheck className="h-7 w-7 text-blue-600" />
                  }
                  title="Secure Checkout"
                  description="Protected payments with trusted payment gateways."
                />

                <InfoCard
                  icon={
                    <RotateCcw className="h-7 w-7 text-purple-600" />
                  }
                  title="Easy Returns"
                  description="Simple exchange and return process for eligible orders."
                />

                <InfoCard
                  icon={<Award className="h-7 w-7 text-yellow-600" />}
                  title="Premium Quality"
                  description="Every collection is crafted with attention to detail and lasting comfort."
                />
              </div>
            </div>
          </div>

          {/* SEO Paragraph */}
          <div className="border-t border-zinc-200 bg-zinc-50 p-10 lg:p-14">
            <h3 className="text-3xl font-black text-zinc-900">
              Explore Style Daddy Collections
            </h3>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-zinc-600">
              <p>
                Explore premium oversized T-shirts, polos, printed
                shirts, cargos, denim jeans, jackets, hoodies,
                co-ord sets, and accessories designed for modern men.
                Every product combines contemporary styling with
                comfort-focused materials.
              </p>

              <p>
                From everyday essentials to statement fashion pieces,
                Style Daddy focuses on quality, fit, and versatility.
                Customers can browse curated collections for work,
                travel, parties, and casual wear while enjoying a
                premium shopping experience.
              </p>

              <p>
                With secure payments, responsive customer support,
                regular new arrivals, and exclusive promotions,
                Style Daddy continues to be a trusted destination for
                stylish menswear enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div>{icon}</div>

      <h4 className="mt-4 text-xl font-bold text-zinc-900">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}
