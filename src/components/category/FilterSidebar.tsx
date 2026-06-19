// src/components/category/EmptyState.tsx

import { Link } from "@tanstack/react-router";
import {
  SearchX,
  RotateCcw,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showReset?: boolean;
  onReset?: () => void;
}

export function EmptyState({
  title = "No Products Found",
  description = "We couldn't find any products matching your filters. Try adjusting your search or explore our latest collections.",
  showReset = true,
  onReset,
}: EmptyStateProps) {
  return (
    <section className="flex min-h-[550px] items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-xl">
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-black via-zinc-900 to-black px-8 py-12 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_40%)]" />

          <div className="relative">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400/15 backdrop-blur">
              <SearchX className="h-12 w-12 text-yellow-400" />
            </div>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
              <Sparkles className="h-3.5 w-3.5" />
              Style Daddy
            </span>

            <h2 className="mt-5 text-4xl font-black">
              {title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
              {description}
            </p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="grid gap-4 p-8 md:grid-cols-3">
          <Suggestion
            title="Clear Filters"
            text="Remove selected filters to see more products."
          />

          <Suggestion
            title="Browse Categories"
            text="Explore shirts, jeans, cargos, hoodies and more."
          />

          <Suggestion
            title="New Arrivals"
            text="Discover the latest premium menswear collection."
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-4 border-t bg-zinc-50 p-8 sm:flex-row">
          {showReset && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-6 py-3 font-semibold transition hover:border-yellow-500 hover:text-yellow-600"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Filters
            </button>
          )}

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>

          <Link
            to="/sale"
            className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            View New Arrivals
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface SuggestionProps {
  title: string;
  text: string;
}

function Suggestion({ title, text }: SuggestionProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {text}
      </p>
    </div>
  );
}