import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Menswear — Style Daddy" },
      { name: "description", content: "Browse every product in the Style Daddy men's collection." },
      { property: "og:title", content: "Shop All — Style Daddy" },
      { property: "og:description", content: "Browse every product in the men's collection." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Catalog</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide">Shop All</h1>
        </div>
        <Link to="/sale" className="text-sm font-semibold text-accent hover:underline">View Sale →</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
