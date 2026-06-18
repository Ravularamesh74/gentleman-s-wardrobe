import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, getByCategory } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";
import { SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  head: ({ params }) => {
    const cat = CATEGORIES.find(c => c.slug === params.slug || params.slug.startsWith(c.slug + "-"));
    const name = cat?.name ?? "Shop";
    return {
      meta: [
        { title: `${name} for Men — Style Daddy` },
        { name: "description", content: `Shop premium men's ${name.toLowerCase()} at Style Daddy. Royal style, modern fit, free shipping above ₹999.` },
        { property: "og:title", content: `${name} for Men — Style Daddy` },
        { property: "og:description", content: `Premium men's ${name.toLowerCase()}.` },
      ],
    };
  },
});

function CategoryPage() {
  const { slug } = useParams({ from: "/category/$slug" });
  const baseSlug = CATEGORIES.find(c => c.slug === slug)?.slug
    ?? CATEGORIES.find(c => slug.startsWith(c.slug + "-"))?.slug
    ?? slug;
  const cat = CATEGORIES.find(c => c.slug === baseSlug);
  const products = getByCategory(baseSlug);
  const [sort, setSort] = useState("popular");
  const [open, setOpen] = useState(false);

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "discount") return (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp;
    return b.reviews - a.reviews;
  });

  return (
    <div>
      <div className="bg-secondary/40 border-b">
        <div className="container mx-auto px-4 py-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Men's Collection</p>
          <h1 className="font-display text-4xl md:text-5xl mt-2 tracking-wide">{cat?.name ?? "Shop"}</h1>
          <p className="text-sm text-muted-foreground mt-2">{products.length} products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Filters */}
        <aside className={`${open ? "fixed inset-0 z-50 bg-background p-4 overflow-y-auto" : "hidden"} lg:block lg:static lg:w-64 shrink-0`}>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h3 className="font-semibold">Filters</h3>
            <button onClick={() => setOpen(false)} className="text-sm">Close</button>
          </div>
          <FilterGroup title="Price">
            {["Under ₹1000", "₹1000 - ₹2500", "₹2500 - ₹5000", "Above ₹5000"].map(p => (
              <label key={p} className="flex items-center gap-2 text-sm py-1"><input type="checkbox" /> {p}</label>
            ))}
          </FilterGroup>
          <FilterGroup title="Size">
            <div className="flex flex-wrap gap-2 mt-1">
              {["S", "M", "L", "XL", "XXL"].map(s => (
                <button key={s} className="w-9 h-9 border rounded text-sm hover:border-accent">{s}</button>
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Color">
            <div className="flex flex-wrap gap-2 mt-1">
              {["#0a1230", "#000", "#fff", "#5c4033", "#7a1f1f", "#3a3a3a", "#e8d5b0", "#3949ab"].map(c => (
                <button key={c} style={{ background: c }} className="w-7 h-7 rounded-full border-2 border-border hover:border-accent" />
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Brand">
            {["Style Daddy", "Royal Crown", "Urban Lion", "Maison Noir"].map(b => (
              <label key={b} className="flex items-center gap-2 text-sm py-1"><input type="checkbox" /> {b}</label>
            ))}
          </FilterGroup>
          <FilterGroup title="Discount">
            {["10% & above", "30% & above", "50% & above", "70% & above"].map(b => (
              <label key={b} className="flex items-center gap-2 text-sm py-1"><input type="radio" name="disc" /> {b}</label>
            ))}
          </FilterGroup>
          <FilterGroup title="Rating">
            {["4★ & above", "3★ & above"].map(b => (
              <label key={b} className="flex items-center gap-2 text-sm py-1"><input type="radio" name="rate" /> {b}</label>
            ))}
          </FilterGroup>
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <button onClick={() => setOpen(true)} className="lg:hidden flex items-center gap-2 px-3 py-2 border rounded text-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="ml-auto flex items-center gap-2">
              <label className="text-sm text-muted-foreground">Sort:</label>
              <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-3 py-2 text-sm bg-background">
                <option value="popular">Popularity</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Best Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>

          {sorted.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No products yet. Check back soon — royal pieces drop weekly.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {sorted.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b py-4">
      <h4 className="font-semibold text-sm mb-2">{title}</h4>
      {children}
    </div>
  );
}
