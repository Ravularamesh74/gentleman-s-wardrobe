// src/components/auth/PhoneInput.tsx

import { Phone, CheckCircle2 } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  countryCode?: string;
  label?: string;
}

export function PhoneInput({
  value,
  onChange,
  disabled = false,
  countryCode = "+91",
  label = "Mobile Number",
}: PhoneInputProps) {
  const isValid = value.length === 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    onChange(cleaned);
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <label className="block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      {/* Input */}
      <div
        className={`
          group flex items-center overflow-hidden rounded-2xl
          border bg-white shadow-sm transition-all duration-300
          ${
            isValid
              ? "border-green-500 ring-2 ring-green-100"
              : "border-zinc-300 focus-within:border-yellow-500 focus-within:ring-4 focus-within:ring-yellow-100"
          }
        `}
      >
        {/* Phone Icon */}
        <div className="flex items-center gap-2 border-r border-zinc-200 px-4 py-4 bg-zinc-50">
          <Phone className="h-5 w-5 text-zinc-500" />
          <span className="font-semibold text-zinc-700">
            {countryCode}
          </span>
        </div>

        {/* Number */}
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          placeholder="9876543210"
          className="
            flex-1
            bg-transparent
            px-4
            py-4
            text-lg
            font-semibold
            tracking-wider
            outline-none
            placeholder:text-zinc-400
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        />

        {/* Validation */}
        {isValid && (
          <div className="px-4">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          </div>
        )}
      </div>

      {/* Helper Text */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-zinc-500">
          Enter your 10-digit mobile number
        </span>

        <span
          className={
            isValid
              ? "font-medium text-green-600"
              : "text-zinc-400"
          }
        >
          {value.length}/10
        </span>
      </div>
    </div>
  );
}