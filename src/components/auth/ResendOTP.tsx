// src/components/auth/ResendOTP.tsx

import { useEffect, useState } from "react";
import {
  RefreshCw,
  Clock3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ResendOTPProps {
  /** Called when user clicks resend */
  onResend: () => void | Promise<void>;

  /** Countdown in seconds */
  initialSeconds?: number;
}

export function ResendOTP({
  onResend,
  initialSeconds = 30,
}: ResendOTPProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = window.setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  async function handleResend() {
    if (loading || seconds > 0) return;

    setLoading(true);

    try {
      await onResend();
      setSeconds(initialSeconds);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg">
          <Sparkles className="h-6 w-6 text-black" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-zinc-900">
            Didn't receive the OTP?
          </h3>

          <p className="mt-1 text-sm text-zinc-600">
            Wait for the countdown to finish or request a new
            verification code.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {seconds > 0 ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Clock3 className="h-4 w-4 text-yellow-600" />

                <span className="text-sm font-semibold text-zinc-700">
                  Resend in{" "}
                  <span className="text-yellow-600">
                    {seconds}s
                  </span>
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-semibold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    loading ? "animate-spin" : ""
                  }`}
                />

                {loading
                  ? "Sending..."
                  : "Resend OTP"}
              </button>
            )}

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />

              <span className="text-sm font-medium text-green-700">
                Secure verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}