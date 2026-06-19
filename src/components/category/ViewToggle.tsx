// src/components/category/ViewToggle.tsx

import {
  LayoutGrid,
  Rows3,
  GalleryVertical,
} from "lucide-react";

export type ViewMode = "grid-2" | "grid-3" | "grid-4" | "list";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (view: ViewMode) => void;
}

const OPTIONS: {
  value: ViewMode;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "grid-2",
    label: "2 Columns",
    icon: <GalleryVertical className="h-4 w-4" />,
  },
  {
    value: "grid-3",
    label: "3 Columns",
    icon: <LayoutGrid className="h-4 w-4" />,
  },
  {
    value: "grid-4",
    label: "4 Columns",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    value: "list",
    label: "List",
    icon: <Rows3 className="h-4 w-4" />,
  },
];

export function ViewToggle({
  value,
  onChange,
}: ViewToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-sm font-medium text-zinc-500 md:block">
        View
      </span>

      <div className="flex overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        {OPTIONS.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              title={option.label}
              className={`
                flex items-center justify-center
                px-4 py-3
                transition-all duration-300
                ${
                  active
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black"
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-black"
                }
              `}
            >
              {option.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}