import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Crown, Instagram } from "lucide-react";
import hero from "@/assets/hero-1.jpg";
import newArrivalsImg from "@/assets/product-1.jpg";
import bestSellersImg from "@/assets/product-2.jpg";
import limitedEditionImg from "@/assets/product-3.jpg";
import { PRODUCTS, CATEGORIES } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Daddy — Premium Menswear" },
      { name: "description", content: "Shop shirts, tees, jeans, jackets, suits, ethnic wear, footwear & accessories for men." },
      { property: "og:title", content: "Style Daddy — Premium Menswear" },
      { property: "og:description", content: "Royal aesthetics. Sharp tailoring. Built for the modern king." },
    ],
  }),
  component: Home,
});

function Home() {
  const trending = PRODUCTS.filter(p => p.isNew).slice(0, 8).map((product, index) =>
    index === 0 ? { ...product, image: newArrivalsImg } : product
  );
  const bestsellers = PRODUCTS.slice(20, 28).map((product, index) =>
    index === 0 ? { ...product, image: bestSellersImg } : product
  );
  const saleItems = PRODUCTS.filter(p => p.isSale).slice(0, 4).map((product, index) =>
    index === 0 ? { ...product, image: limitedEditionImg } : product
  );
  const featureCats = ["shirts", "t-shirts", "jeans", "jackets", "footwear", "accessories"];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-royal text-royal-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44 max-w-6xl">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-widest uppercase">
              <Crown className="w-3 h-3" /> Winter Drop 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 tracking-wide">
              DRESS LIKE<br />
              <span className="text-white">A KING</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-md">
              Premium menswear engineered for men who lead. From boardroom to streetwear, own every room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-gradient-crown text-royal font-semibold px-7 py-3.5 rounded-md hover:opacity-90 transition">
                Shop Collection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/sale" className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 rounded-md hover:bg-white hover:text-royal transition">
                View Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {([
            [Truck, "Free Shipping", "Above ₹2999"],
            [RotateCcw, "Easy Returns", "30-day window"],
            [ShieldCheck, "Secure Payments", "100% protected"],
            [Crown, "Royal Quality", "Premium fabrics"],
          ] as const).map(([Icon, t, s], i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold">{t}</p>
                <p className="text-xs text-muted-foreground">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <SectionHead title="Shop By Category" subtitle="From boardroom suits to weekend streetwear" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {featureCats.map((slug) => {
            const cat = CATEGORIES.find(c => c.slug === slug)!;
            const prod = PRODUCTS.find(p => p.category === slug);
            return (
              <Link key={slug} to="/category/$slug" params={{ slug }} className="group block">
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img src={prod?.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <p className="mt-2 text-center text-sm font-semibold">{cat.name}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero text-white p-10 md:p-16">
          <div className="relative z-10 max-w-xl">
            <p className="text-gold font-semibold tracking-widest text-xs uppercase">Limited Time</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">MEGA SALE — UP TO 70% OFF</h2>
            <p className="mt-3 text-white/80">Crown your wardrobe with royal savings on shirts, tees, jeans & more.</p>
            <Link to="/sale" className="mt-6 inline-flex items-center gap-2 bg-gold text-royal font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">
              Shop The Sale <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending New */}
      <section className="container mx-auto px-4 py-16">
        <SectionHead title="New Arrivals" subtitle="Fresh drops, just landed" link="/category/new-arrivals" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {trending.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <SectionHead title="Best Sellers" subtitle="Loved by kings worldwide" link="/shop" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Limited edition + sale */}
      <section className="container mx-auto px-4 py-16">
        <SectionHead title="Limited Edition" subtitle="Once they're gone, they're gone" link="/sale" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {saleItems.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="container mx-auto px-4 pb-16">
        <a href="https://www.instagram.com/_style_daddy_/" target="_blank" rel="noreferrer"
           className="block relative overflow-hidden rounded-2xl bg-gradient-royal text-white p-10 md:p-14 text-center hover:shadow-royal transition">
          <Instagram className="w-10 h-10 text-gold mx-auto" />
          <h3 className="font-display text-3xl md:text-5xl mt-4 tracking-wide">FOLLOW @_STYLE_DADDY_</h3>
          <p className="mt-3 text-white/70">Style inspiration, behind the scenes & exclusive drops on Instagram.</p>
        </a>
      </section>
    </div>
  );
}

function SectionHead({ title, subtitle, link }: { title: string; subtitle?: string; link?: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {link && <Link to={link} className="text-sm font-semibold text-accent hover:underline shrink-0">View All →</Link>}
    </div>
  );
}
