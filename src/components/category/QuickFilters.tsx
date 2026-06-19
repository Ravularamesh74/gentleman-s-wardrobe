// src/components/category/QuickFilters.tsx

import {
  Flame,
  Sparkles,
  Crown,
  Shirt,
  BadgePercent,
  Star,
  Zap,
} from "lucide-react";

export interface QuickFilter {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface QuickFiltersProps {
  selected: string;
  onChange: (value: string) => void;
}

const FILTERS: QuickFilter[] = [
  {
    id: "all",
    label: "All",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    id: "new",
    label: "New Arrivals",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "trending",
    label: "Trending",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    id: "premium",
    label: "Premium",
    icon: <Crown className="h-4 w-4" />,
  },
  {
    id: "shirts",
    label: "Shirts",
    icon: <Shirt className="h-4 w-4" />,
  },
  {
    id: "bestseller",
    label: "Best Seller",
    icon: <Star className="h-4 w-4" />,
  },
  {
    id: "sale",
    label: "Sale",
    icon: <BadgePercent className="h-4 w-4" />,
  },
];

export function QuickFilters({
  selected,
  onChange,
}: QuickFiltersProps) {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-zinc-900">
            Quick Filters
          </h2>

          <p className="text-sm text-zinc-500">
            Discover collections instantly.
          </p>
        </div>

        <button
          onClick={() => onChange("all")}
          className="text-sm font-semibold text-yellow-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Chips */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {FILTERS.map((filter) => {
          const active = selected === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => onChange(filter.id)}
              className={`
                flex shrink-0 items-center gap-2 rounded-full
                border px-5 py-3 text-sm font-semibold
                transition-all duration-300
                ${
                  active
                    ? "border-yellow-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-yellow-400 hover:bg-yellow-50"
                }
              `}
            >
              {filter.icon}
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Active Filter */}
      {selected !== "all" && (
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-yellow-50 p-4">
          <Sparkles className="h-5 w-5 text-yellow-600" />

          <p className="text-sm text-zinc-700">
            Showing results for{" "}
            <span className="font-bold capitalize text-black">
              {selected}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}