// src/components/category/MobileFilter.tsx

import { SlidersHorizontal, X } from "lucide-react";
import { ReactNode } from "react";

interface MobileFilterProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
  activeFilters?: number;
}

export function MobileFilter({
  open,
  onOpen,
  onClose,
  children,
  activeFilters = 0,
}: MobileFilterProps) {
  return (
    <>
      {/* Floating Filter Button */}
      <button
        onClick={onOpen}
        className="
          fixed bottom-6 left-1/2 z-40
          flex -translate-x-1/2 items-center gap-2
          rounded-full bg-black px-6 py-3
          text-sm font-semibold text-white
          shadow-2xl transition-all
          hover:scale-105 hover:bg-zinc-900
          lg:hidden
        "
      >
        <SlidersHorizontal className="h-5 w-5" />

        Filters

        {activeFilters > 0 && (
          <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-yellow-400 px-2 text-xs font-bold text-black">
            {activeFilters}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open
            ? "pointer-events-auto bg-black/50 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      >
        {/* Drawer */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 left-0 right-0 max-h-[92vh] overflow-hidden rounded-t-[32px] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Handle */}
          <div className="flex justify-center pt-3">
            <div className="h-1.5 w-14 rounded-full bg-zinc-300" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h2 className="text-xl font-bold">
                Filter Products
              </h2>

              <p className="text-sm text-zinc-500">
                Refine your search
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-zinc-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[calc(92vh-140px)] overflow-y-auto p-5">
            {children}
          </div>

          {/* Footer */}
          <div className="flex gap-3 border-t bg-white p-5">
            <button
              onClick={onClose}
              className="flex-1 rounded-2xl border border-zinc-300 py-3 font-semibold transition hover:bg-zinc-50"
            >
              Cancel
            </button>

            <button
              onClick={onClose}
              className="flex-1 rounded-2xl bg-black py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}