import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

export const Route = createFileRoute("/sale")({
  head: () => ({
    meta: [
      { title: "Sale — Up to 70% Off Menswear | Style Daddy" },
      { name: "description", content: "Royal savings on premium menswear. Up to 70% off shirts, jeans, jackets and more." },
      { property: "og:title", content: "Mega Sale — Style Daddy" },
      { property: "og:description", content: "Up to 70% off premium menswear." },
    ],
  }),
  component: SalePage,
});

function SalePage() {
  const items = PRODUCTS.filter(p => p.isSale);
  return (
    <div>
      <section className="bg-gradient-hero text-white py-16 text-center">
        <p className="text-gold uppercase tracking-widest text-xs font-semibold">Limited Time</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3 tracking-wide">MEGA SALE</h1>
        <p className="mt-3 text-white/80">Up to 70% off — crown your wardrobe.</p>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No sale items right now. <Link to="/shop" className="text-accent underline">Shop full collection →</Link></p>
        )}
      </div>
    </div>
  );
}
