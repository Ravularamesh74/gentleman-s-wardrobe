// src/components/category/InfiniteLoader.tsx

import { Loader2 } from "lucide-react";

interface InfiniteLoaderProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  loadedCount?: number;
  totalCount?: number;
}

export function InfiniteLoader({
  loading,
  hasMore,
  onLoadMore,
  loadedCount = 0,
  totalCount = 0,
}: InfiniteLoaderProps) {
  return (
    <section className="mt-12">
      {/* Progress Info */}
      <div className="mb-6 flex flex-col items-center justify-center">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-semibold text-black">
            {loadedCount}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-black">
            {totalCount}
          </span>{" "}
          products
        </p>

        {totalCount > 0 && (
          <div className="mt-3 h-2 w-full max-w-md overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 transition-all duration-500"
              style={{
                width: `${Math.min(
                  (loadedCount / totalCount) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-3xl border bg-white shadow-sm"
            >
              <div className="aspect-[3/4] bg-zinc-200" />

              <div className="space-y-3 p-4">
                <div className="h-3 w-20 rounded bg-zinc-200" />

                <div className="h-5 w-full rounded bg-zinc-200" />

                <div className="h-5 w-3/4 rounded bg-zinc-200" />

                <div className="h-6 w-24 rounded bg-zinc-200" />

                <div className="h-10 rounded-xl bg-zinc-200" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {!loading && hasMore && (
        <div className="flex justify-center">
          <button
            onClick={onLoadMore}
            className="inline-flex items-center gap-3 rounded-2xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
          >
            <Loader2 className="h-5 w-5" />
            Load More Products
          </button>
        </div>
      )}

      {/* End State */}
      {!loading && !hasMore && (
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-zinc-100 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <span className="text-2xl">🎉</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold text-zinc-900">
            You've Reached the End
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            You've explored all available products in this collection.
            Check back soon for fresh arrivals and exclusive drops.
          </p>
        </div>
      )}
    </section>
  );
}