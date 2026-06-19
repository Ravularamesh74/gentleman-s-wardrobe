
// src/components/cart/PriceRow.tsx

import clsx from "clsx";

interface PriceRowProps {
  label: string;
  value: string | number;
  highlight?: boolean;
  success?: boolean;
  danger?: boolean;
  bold?: boolean;
  className?: string;
}

export function PriceRow({
  label,
  value,
  highlight = false,
  success = false,
  danger = false,
  bold = false,
  className,
}: PriceRowProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between py-2 text-sm",
        bold && "text-base font-bold",
        className
      )}
    >
      <span
        className={clsx(
          "text-zinc-600",
          bold && "text-zinc-900 font-semibold"
        )}
      >
        {label}
      </span>

      <span
        className={clsx(
          "font-medium text-zinc-900",
          highlight && "text-yellow-600",
          success && "text-green-600",
          danger && "text-red-600",
          bold && "text-xl font-extrabold"
        )}
      >
        {typeof value === "number"
          ? `₹${value.toLocaleString()}`
          : value}
      </span>
    </div>
  );
}
