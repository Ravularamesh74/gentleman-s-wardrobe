
// src/components/home/Newsletter.tsx

import { useState } from "react";
import {
  Mail,
  Sparkles,
  Crown,
  Gift,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO: Replace with your API call
    console.log("Newsletter Email:", email);

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-5 py-2">
                <Sparkles className="h-4 w-4 text-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  EXCLUSIVE ACCESS
                </span>
              </div>

              <h2 className="mt-6 text-5xl font-black text-white">
                Join The Royal Club
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Subscribe to receive early access to new collections,
                exclusive discounts, flash sales, and premium style
                inspiration.
              </p>

              <div className="mt-10 space-y-4">
                <Feature text="🎁 10% OFF your first order" />
                <Feature text="🚀 Early access to new drops" />
                <Feature text="👑 Members-only collections" />
                <Feature text="⚡ Flash sale notifications" />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center p-10 lg:p-16">
              <div className="w-full rounded-[32px] bg-white p-8 shadow-xl">
                <div className="flex justify-center">
                  <div className="rounded-full bg-yellow-100 p-5">
                    <Mail className="h-10 w-10 text-yellow-600" />
                  </div>
                </div>

                <h3 className="mt-6 text-center text-3xl font-black text-zinc-900">
                  Subscribe Now
                </h3>

                <p className="mt-3 text-center text-zinc-500">
                  Unlock premium offers and fashion updates.
                </p>

                {subscribed ? (
                  <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />

                    <h4 className="mt-3 text-xl font-bold text-green-700">
                      Welcome to Style Daddy!
                    </h4>

                    <p className="mt-2 text-sm text-green-600">
                      Your subscription was successful.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                  >
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />

                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="w-full rounded-2xl border border-zinc-300 py-4 pl-12 pr-4 outline-none transition focus:border-yellow-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 font-bold text-black transition hover:scale-[1.02]"
                    >
                      Subscribe
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                )}

                <div className="mt-8 flex justify-center gap-6 text-center">
                  <MiniStat
                    icon={<Gift className="h-5 w-5" />}
                    value="10%"
                    label="Welcome Off"
                  />

                  <MiniStat
                    icon={<Crown className="h-5 w-5" />}
                    value="VIP"
                    label="Member Access"
                  />
                </div>

                <p className="mt-6 text-center text-xs text-zinc-400">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
      <span className="text-zinc-200">{text}</span>
    </div>
  );
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
        {icon}
      </div>

      <h4 className="mt-2 font-black text-zinc-900">
        {value}
      </h4>

      <p className="text-xs text-zinc-500">
        {label}
      </p>
    </div>
  );
}
