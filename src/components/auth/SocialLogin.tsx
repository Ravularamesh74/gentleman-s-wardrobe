// src/components/auth/SocialLogin.tsx

import { Chrome, Apple, Facebook, ArrowRight } from "lucide-react";

interface SocialLoginProps {
  onGoogle?: () => void;
  onApple?: () => void;
  onFacebook?: () => void;
}

export function SocialLogin({
  onGoogle,
  onApple,
  onFacebook,
}: SocialLoginProps) {
  return (
    <div className="space-y-6">
      {/* Divider */}
      <div className="relative">
        <div className="border-t border-zinc-300" />

        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Or Continue With
        </span>
      </div>

      {/* Buttons */}
      <div className="grid gap-4">
        {/* Google */}
        <button
          type="button"
          onClick={onGoogle}
          className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-red-50 p-3">
              <Chrome className="h-6 w-6 text-red-500" />
            </div>

            <div className="text-left">
              <p className="font-bold text-zinc-900">
                Continue with Google
              </p>

              <p className="text-xs text-zinc-500">
                Fast & secure sign in
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-1" />
        </button>

        {/* Apple */}
        <button
          type="button"
          onClick={onApple}
          className="group flex w-full items-center justify-between rounded-2xl bg-black px-5 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <Apple className="h-6 w-6" />
            </div>

            <div className="text-left">
              <p className="font-bold">
                Continue with Apple
              </p>

              <p className="text-xs text-zinc-400">
                Privacy-focused login
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-1" />
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={onFacebook}
          className="group flex w-full items-center justify-between rounded-2xl bg-[#1877F2] px-5 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <Facebook className="h-6 w-6" />
            </div>

            <div className="text-left">
              <p className="font-bold">
                Continue with Facebook
              </p>

              <p className="text-xs text-blue-100">
                One-click authentication
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-white/80 transition group-hover:translate-x-1" />
        </button>
      </div>

      {/* Footer Note */}
      <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 p-4 text-center">
        <p className="text-sm text-zinc-700">
          🔒 Your login is protected with secure authentication.
          We never post anything without your permission.
        </p>
      </div>
    </div>
  );
}