// src/components/auth/LoginCard.tsx

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Crown,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  RefreshCcw,
  Lock,
} from "lucide-react";
import { useShop } from "@/lib/store";

export function LoginCard() {
  const { login } = useShop();
  const navigate = useNavigate();

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOTP = () => {
    if (phone.length !== 10) return;
    setStep("otp");
  };

  const verifyOTP = () => {
    if (otp.length !== 6) return;

    login("+91" + phone);

    navigate({
      to: "/account",
    });
  };

  return (
    <div className="w-full max-w-md overflow-hidden rounded-[36px] border border-yellow-500/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-zinc-900 to-black p-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-xl">
          <Crown className="h-10 w-10 text-black" />
        </div>

        <h2 className="mt-5 text-4xl font-black text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-zinc-300">
          Sign in to your Style Daddy account.
        </p>
      </div>

      <div className="space-y-8 p-8">
        {step === "phone" ? (
          <>
            <div>
              <label className="mb-3 block text-sm font-semibold text-zinc-700">
                Mobile Number
              </label>

              <div className="flex items-center overflow-hidden rounded-2xl border bg-white">
                <div className="flex items-center gap-2 border-r px-4 py-4">
                  <Phone className="h-5 w-5 text-zinc-500" />
                  <span className="font-semibold">+91</span>
                </div>

                <input
                  type="tel"
                  value={phone}
                  maxLength={10}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  placeholder="Enter mobile number"
                  className="flex-1 bg-transparent px-4 py-4 outline-none"
                />
              </div>
            </div>

            <button
              disabled={phone.length !== 10}
              onClick={sendOTP}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send OTP
              <ArrowRight className="h-5 w-5" />
            </button>
          </>
        ) : (
          <>
            <div>
              <label className="mb-4 block text-sm font-semibold text-zinc-700">
                Enter 6 Digit OTP
              </label>

              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="123456"
                className="w-full rounded-2xl border bg-white px-5 py-5 text-center text-3xl font-bold tracking-[0.8em] outline-none focus:border-yellow-500"
              />

              <button
                onClick={() => setStep("phone")}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-yellow-700"
              >
                <RefreshCcw className="h-4 w-4" />
                Change Number
              </button>
            </div>

            <button
              disabled={otp.length !== 6}
              onClick={verifyOTP}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 font-bold text-black transition hover:scale-[1.02] disabled:opacity-50"
            >
              Verify OTP
              <ShieldCheck className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Divider */}
        <div className="relative">
          <div className="border-t" />

          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs uppercase tracking-widest text-zinc-500">
            Benefits
          </span>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <Benefit text="Exclusive member-only collections" />
          <Benefit text="Early access to new arrivals" />
          <Benefit text="Fast and secure checkout" />
          <Benefit text="Track orders & earn rewards" />
        </div>

        {/* Security */}
        <div className="rounded-2xl bg-zinc-50 p-5">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-green-600" />

            <div>
              <p className="font-semibold">
                100% Secure Login
              </p>

              <p className="text-xs text-zinc-500">
                Your phone number is protected and never
                shared.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-zinc-500">
          By continuing you agree to our Terms &
          Conditions and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4">
      <Sparkles className="h-5 w-5 text-yellow-500" />

      <span className="text-sm font-medium text-zinc-700">
        {text}
      </span>
    </div>
  );
}