// src/components/category/SEOSection.tsx

import {
  Crown,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SEOSectionProps {
  categoryName: string;
  description?: string;
}

export function SEOSection({
  categoryName,
  description,
}: SEOSectionProps) {
  return (
    <section className="mt-20 overflow-hidden rounded-[36px] border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-yellow-50 shadow-sm">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-black via-zinc-900 to-black px-8 py-10 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-4 py-2">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
            STYLE DADDY PREMIUM
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black">
          Buy Premium {categoryName} Online in India
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-300">
          {description ??
            `Discover the latest collection of premium ${categoryName.toLowerCase()} at Style Daddy. Designed for modern men with luxury fabrics, exceptional craftsmanship, and timeless style. Shop confidently with fast delivery, secure payments, and hassle-free returns.`}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-10 px-8 py-10 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-zinc-900">
            Why Choose Style Daddy?
          </h3>

          <ul className="space-y-4">
            {[
              "Premium-quality fabrics and superior stitching.",
              "Modern fits designed for everyday comfort.",
              "Luxury-inspired styles for work, travel, and casual wear.",
              "Exclusive collections updated regularly.",
              "Trusted by thousands of fashion-conscious customers.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-zinc-600">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl bg-zinc-900 p-6 text-white">
            <div className="flex items-center gap-3">
              <Crown className="h-7 w-7 text-yellow-400" />

              <h4 className="text-xl font-bold">
                Luxury Menswear
              </h4>
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Every Style Daddy piece combines premium materials,
              tailored silhouettes, and contemporary fashion trends
              to elevate your wardrobe.
            </p>
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-zinc-900">
            Shop With Confidence
          </h3>

          <div className="space-y-4">
            <Feature
              icon={<Truck className="h-5 w-5 text-green-600" />}
              title="Fast Delivery"
              text="Quick dispatch and reliable shipping across India."
            />

            <Feature
              icon={<ShieldCheck className="h-5 w-5 text-blue-600" />}
              title="Secure Payments"
              text="Pay safely using UPI, Cards, Net Banking, and Wallets."
            />

            <Feature
              icon={<RefreshCcw className="h-5 w-5 text-purple-600" />}
              title="Easy Returns"
              text="Simple exchange and return process for eligible orders."
            />
          </div>

          {/* FAQ */}
          <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
            <h4 className="text-xl font-bold">
              Frequently Asked Questions
            </h4>

            <div className="mt-5 space-y-5">
              <div>
                <h5 className="font-semibold">
                  Are these products original?
                </h5>
                <p className="mt-1 text-sm text-zinc-600">
                  Yes. We focus on premium-quality products and
                  carefully curated collections.
                </p>
              </div>

              <div>
                <h5 className="font-semibold">
                  Do you offer free shipping?
                </h5>
                <p className="mt-1 text-sm text-zinc-600">
                  Yes, free shipping is available on qualifying
                  orders based on current promotional thresholds.
                </p>
              </div>

              <div>
                <h5 className="font-semibold">
                  Can I exchange the size?
                </h5>
                <p className="mt-1 text-sm text-zinc-600">
                  Yes, eligible items can be exchanged according to
                  our exchange policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div>
            <h3 className="text-2xl font-black text-zinc-900">
              Elevate Your Style with Style Daddy
            </h3>

            <p className="mt-2 text-zinc-600">
              Premium fashion. Exceptional quality. Designed for the
              modern gentleman.
            </p>
          </div>

          <div className="rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-yellow-400 shadow-lg">
            👑 Premium Menswear Collection
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Feature({
  icon,
  title,
  text,
}: FeatureProps) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-zinc-900">
          {title}
        </h4>

        <p className="mt-1 text-sm text-zinc-600">
          {text}
        </p>
      </div>
    </div>
  );
}