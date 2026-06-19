// src/components/category/ProductGrid.tsx

import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/lib/catalog";
import { PackageSearch } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: 2 | 3 | 4 | 5;
}

export function ProductGrid({
  products,
  loading = false,
  columns = 4,
}: ProductGridProps) {
  const gridClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  }[columns];

  // Skeleton Loader
  if (loading) {
    return (
      <div className={`grid ${gridClass} gap-6`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="aspect-[3/4] animate-pulse bg-zinc-200" />

            <div className="space-y-3 p-4">
              <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
              <div className="h-5 w-full animate-pulse rounded bg-zinc-200" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200" />
              <div className="h-6 w-24 animate-pulse rounded bg-zinc-200" />
              <div className="h-10 animate-pulse rounded-xl bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty State
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center">
        <PackageSearch className="h-16 w-16 text-zinc-400" />

        <h2 className="mt-5 text-2xl font-bold text-zinc-900">
          No Products Found
        </h2>

        <p className="mt-2 max-w-md text-sm text-zinc-500">
          Try changing your filters or search criteria to discover more premium
          Style Daddy products.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Product Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-bold text-black">
            {products.length}
          </span>{" "}
          products
        </p>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700">
          Premium Collection
        </span>
      </div>

      {/* Product Grid */}
      <div className={`grid ${gridClass} gap-6`}>
        {products.map((product) => (
          <div
            key={product.id}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}