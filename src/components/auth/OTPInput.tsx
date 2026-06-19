// src/components/auth/OTPInput.tsx

import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  disabled?: boolean;
}

export function OTPInput({
  value,
  onChange,
  length = 6,
  disabled = false,
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const digit = e.target.value.replace(/\D/g, "").slice(-1);

    const otp = value.split("");

    otp[index] = digit;

    const newValue = otp.join("").slice(0, length);

    onChange(newValue);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      const otp = value.split("");
      otp[index] = "";
      onChange(otp.join(""));
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(pasted);

    const nextIndex = Math.min(
      pasted.length,
      length - 1,
    );

    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-3">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            disabled={disabled}
            value={value[index] ?? ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="
              h-16
              w-14
              rounded-2xl
              border
              border-zinc-300
              bg-white
              text-center
              text-2xl
              font-black
              shadow-sm
              outline-none
              transition-all
              duration-300
              focus:border-yellow-500
              focus:ring-4
              focus:ring-yellow-200
              disabled:opacity-50
            "
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3">
        <ShieldCheck className="h-5 w-5 text-green-600" />

        <p className="text-sm font-medium text-green-700">
          Enter the verification code sent to your mobile number.
        </p>
      </div>
    </div>
  );
}