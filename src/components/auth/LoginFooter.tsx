// src/components/auth/LoginFooter.tsx

import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Truck,
  RotateCcw,
  Crown,
  Mail,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

export function LoginFooter() {
  return (
    <footer className="mt-12 w-full">
      {/* Trust Badges */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TrustCard
          icon={<ShieldCheck className="h-6 w-6 text-green-500" />}
          title="100% Secure"
          subtitle="Protected Login"
        />

        <TrustCard
          icon={<Lock className="h-6 w-6 text-blue-500" />}
          title="Privacy First"
          subtitle="Your data is safe"
        />

        <TrustCard
          icon={<Truck className="h-6 w-6 text-orange-500" />}
          title="Fast Shipping"
          subtitle="Across India"
        />

        <TrustCard
          icon={<RotateCcw className="h-6 w-6 text-purple-500" />}
          title="Easy Returns"
          subtitle="Hassle-free exchange"
        />
      </div>

      {/* Main Footer */}
      <div className="mt-8 overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-black via-zinc-900 to-black shadow-2xl">
        <div className="grid gap-10 p-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 p-3">
                <Crown className="h-6 w-6 text-black" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  STYLE DADDY
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
                  Premium Menswear
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Elevating men's fashion with premium fabrics,
              luxury craftsmanship, and timeless style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/shop"
                className="text-zinc-400 transition hover:text-yellow-300"
              >
                Shop
              </Link>

              <Link
                to="/shop"
                className="text-zinc-400 transition hover:text-yellow-300"
              >
                New Arrivals
              </Link>

              <Link
                to="/sale"
                className="text-zinc-400 transition hover:text-yellow-300"
              >
                Sale
              </Link>

              <Link
                to="/account"
                className="text-zinc-400 transition hover:text-yellow-300"
              >
                My Account
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>support@styledaddy.in</span>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/_style_daddy_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-yellow-400 hover:text-black"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-yellow-400 hover:text-black"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 bg-black/30 px-6 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Style Daddy. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="hover:text-yellow-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="hover:text-yellow-300"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/"
                className="hover:text-yellow-300"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-center">{icon}</div>

      <h4 className="mt-3 font-bold text-zinc-900">
        {title}
      </h4>

      <p className="mt-1 text-sm text-zinc-500">
        {subtitle}
      </p>
    </div>
  );
}