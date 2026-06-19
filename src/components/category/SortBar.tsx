// src/components/category/SortBar.tsx

import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  BadgePercent,
  Flame,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

export type SortOption =
  | "featured"
  | "popular"
  | "newest"
  | "price-low-high"
  | "price-high-low"
  | "rating"
  | "discount";

interface SortBarProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  productCount: number;
}

const SORT_OPTIONS: {
  value: SortOption;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "featured",
    label: "Featured",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    value: "popular",
    label: "Popularity",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    value: "newest",
    label: "Newest",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    value: "price-low-high",
    label: "Price: Low to High",
    icon: <ArrowUpWideNarrow className="h-4 w-4" />,
  },
  {
    value: "price-high-low",
    label: "Price: High to Low",
    icon: <ArrowDownWideNarrow className="h-4 w-4" />,
  },
  {
    value: "rating",
    label: "Top Rated",
    icon: <Star className="h-4 w-4" />,
  },
  {
    value: "discount",
    label: "Biggest Discount",
    icon: <BadgePercent className="h-4 w-4" />,
  },
];

export function SortBar({
  value,
  onChange,
  productCount,
}: SortBarProps) {
  return (
    <div className="mb-8 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-600">
            Style Daddy Collection
          </p>

          <h2 className="mt-2 text-2xl font-black text-zinc-900">
            {productCount.toLocaleString()} Products
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Explore premium menswear curated for every occasion.
          </p>
        </div>

        {/* Desktop Sort */}
        <div className="hidden lg:flex flex-wrap gap-3">
          {SORT_OPTIONS.map((option) => {
            const active = option.value === value;

            return (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:border-yellow-400 hover:bg-yellow-50"
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Select */}
        <div className="lg:hidden">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Sort By
          </label>

          <select
            value={value}
            onChange={(e) =>
              onChange(e.target.value as SortOption)
            }
            className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-yellow-500"
          >
            {SORT_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Sort Badge */}
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-5">
        <span className="text-sm text-zinc-500">
          Sorted by:
        </span>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700">
          {
            SORT_OPTIONS.find(
              (item) => item.value === value
            )?.label
          }
        </span>
      </div>
    </div>
  );
}