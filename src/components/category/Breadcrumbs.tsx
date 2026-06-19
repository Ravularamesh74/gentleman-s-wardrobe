
// src/components/category/Breadcrumbs.tsx

import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 overflow-x-auto"
    >
      <ol className="flex min-w-max items-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        {/* Home */}
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-zinc-500 transition hover:bg-yellow-50 hover:text-yellow-600"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 text-zinc-400" />

              {isLast || !item.href ? (
                <span className="rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="rounded-lg px-2 py-1 text-sm font-medium text-zinc-500 transition hover:bg-yellow-50 hover:text-yellow-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
