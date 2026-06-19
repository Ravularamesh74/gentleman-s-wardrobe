
import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  Crown,
  Sparkles,
  Clock3,
} from "lucide-react";
import { Logo } from "./logo";

const SHOP_LINKS = [
  ["New Arrivals", "/category/new-arrivals"],
  ["Oversized Tees", "/category/oversized"],
  ["Premium Shirts", "/category/shirts"],
  ["Cargo Pants", "/category/cargo"],
  ["Jeans", "/category/jeans"],
  ["Hoodies", "/category/hoodies"],
  ["Sneakers", "/category/sneakers"],
  ["Accessories", "/category/accessories"],
];

const COMPANY_LINKS = [
  ["About", "/about"],
  ["Our Story", "/story"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
  ["Stores", "/stores"],
];

const SUPPORT_LINKS = [
  ["Track Order", "/account"],
  ["Shipping", "/shipping"],
  ["Returns", "/returns"],
  ["FAQs", "/faq"],
  ["Size Guide", "/size-guide"],
  ["Help Center", "/support"],
];

const LEGAL_LINKS = [
  ["Privacy Policy", "/privacy"],
  ["Terms & Conditions", "/terms"],
  ["Refund Policy", "/refund"],
  ["Cookies", "/cookies"],
];

const STATS = [
  {
    value: "250K+",
    label: "Happy Customers",
  },
  {
    value: "10M+",
    label: "Orders Delivered",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
  {
    value: "24/7",
    label: "Premium Support",
  },
];

const SERVICES = [
  {
    icon: Truck,
    title: "Free Express Shipping",
    desc: "On orders above ₹2999",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7-day hassle-free exchange",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    desc: "Premium quality guaranteed",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Encrypted checkout protection",
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#050505] text-white">
      {/* Background Effects */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/5 blur-[120px]" />

      {/* Hero CTA */}
      <section className="relative border-b border-white/10">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="mb-5 flex justify-center">
            <div className="rounded-full border border-yellow-500/30 bg-yellow-500/10 p-4">
              <Crown className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <p className="mb-3 tracking-[0.45em] text-yellow-400 uppercase text-sm">
            STYLE DADDY EXCLUSIVE
          </p>

          <h2 className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            DRESS LIKE A KING
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Discover premium menswear crafted for confidence. Become a VIP
            member to unlock exclusive drops, rewards, luxury collections and
            early access.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl transition focus:border-yellow-400"
            />

            <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 px-8 py-4 font-bold text-black transition hover:scale-105">
              Join VIP
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 py-12 lg:grid-cols-4">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <h3 className="text-4xl font-black text-yellow-400">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="border-b border-white/10">
        <div className="container mx-auto grid gap-6 px-6 py-14 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-500/50"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-yellow-400/10 p-4">
                  <Icon className="h-8 w-8 text-yellow-400" />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Footer */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size={106} />

            <p className="mt-6 leading-8 text-zinc-400">
              Elevating modern menswear with luxury craftsmanship, timeless
              silhouettes and premium fabrics. Built for leaders. Designed for
              confidence.
            </p>

            <div className="mt-8 flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:scale-110 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 font-bold text-yellow-400">
              <Sparkles className="h-4 w-4" />
              Shop
            </h4>

            <ul className="space-y-3">
              {SHOP_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-zinc-400 transition hover:translate-x-1 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 font-bold text-yellow-400">Company</h4>

            <ul className="space-y-3">
              {COMPANY_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 font-bold text-yellow-400">Support</h4>

            <ul className="space-y-3">
              {SUPPORT_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 font-bold text-yellow-400">Legal</h4>

            <ul className="space-y-3">
              {LEGAL_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto grid gap-8 px-6 py-8 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-400" />
            <span className="text-white/70">
    7-26/3, Opposite CS Brothers, Sri Sai Nagar, New Raghavendra Nagar,
    Nacharam, Hyderabad, Telangana.
  </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-yellow-400" />
            <span className="text-zinc-300">+91 6309376811</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-yellow-400" />
            <span className="text-zinc-300">
              support@styledaddy123@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 className="text-yellow-400" />
            <span className="text-zinc-300">
              Mon - Sun • 10:00 AM - 10:00 PM
            </span>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Style Daddy. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>UPI</span>
          <span>Razorpay</span>
          <span>PhonePe</span>
          <span>Google Pay</span>
        </div>

        <p>Crafted with 👑 for the Modern King.</p>
      </section>
    </footer>
  );
}

