// PremiumHeader.tsx
// 🚀 GOD-LEVEL LUXURY HEADER FOR STYLE DADDY
// React + TanStack Router + Tailwind CSS + Lucide React

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Truck,
  Crown,
  Sparkles,
  Phone,
} from "lucide-react";

import { Logo } from "./logo";
import { CATEGORIES } from "@/lib/catalog";
import { useShop } from "@/lib/store";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart, wishlist } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}

      <div className="bg-black text-white text-xs border-b border-yellow-500/20">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between">

          <div className="hidden lg:flex items-center gap-6">

            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-yellow-400" />
              Delivering to Hyderabad
            </span>

            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-yellow-400" />
              +91 6309376811
            </span>

          </div>

          <div className="flex-1 text-center overflow-hidden whitespace-nowrap">

            <div className="animate-marquee inline-flex gap-16">

              <span>🚚 FREE SHIPPING ABOVE ₹2999</span>

              <span>🔥 FLAT 40% OFF TODAY</span>

              <span>👑 STYLE DADDY PREMIUM COLLECTION</span>

              <span>✨ USE CODE KING10</span>

              <span>💎 EASY RETURNS</span>

            </div>

          </div>

          <div className="hidden lg:flex items-center gap-2">

            <Truck className="w-4 h-4 text-yellow-400" />

            <span>Express Delivery</span>

          </div>

        </div>
      </div>

      {/* ========================= */}
      {/* MAIN HEADER */}
      {/* ========================= */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/90 shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center">

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden mr-3"
          >
            <Menu className="w-7 h-7" />
          </button>

          {/* Logo */}

          <Logo size={52} />

          {/* Navigation */}

          <nav className="hidden lg:flex items-center ml-10 gap-2">

            {CATEGORIES.slice(0, 8).map((cat) => (

              <div
                key={cat.slug}
                className="relative group"
              >
                <Link
                  to="/category/$slug"
                  params={{ slug: cat.slug }}
                  className="flex items-center gap-1 px-4 py-7 text-sm font-semibold hover:text-yellow-600 transition"
                >
                  {cat.name}

                  {cat.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {cat.children && (

                  <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">

                    <div className="w-72 rounded-2xl bg-white shadow-2xl border mt-3 p-5">

                      <p className="font-bold mb-3">
                        Shop {cat.name}
                      </p>

                      <div className="space-y-2">

                        {cat.children.map((item) => (

                          <Link
                            key={item.slug}
                            to="/category/$slug"
                            params={{
                              slug: `${cat.slug}-${item.slug}`,
                            }}
                            className="block rounded-lg px-3 py-2 hover:bg-zinc-100"
                          >
                            {item.name}
                          </Link>

                        ))}

                      </div>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </nav>

          {/* Search */}

          <div className="hidden xl:flex ml-auto mr-6">

            <div className="flex items-center rounded-full border px-4 h-11 w-[330px]">

              <Search className="w-4 h-4 text-zinc-400" />

              <input
                placeholder="Search premium menswear..."
                className="flex-1 bg-transparent outline-none px-3 text-sm"
              />

            </div>

          </div>

          {/* Icons */}

          <div className="flex items-center gap-2 ml-auto">

            <button
              className="xl:hidden p-2"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/wishlist"
              className="relative p-2 rounded-full hover:bg-zinc-100"
            >
              <Heart className="w-5 h-5" />

              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <div className="relative">

              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="p-2 rounded-full hover:bg-zinc-100"
              >
                <User className="w-5 h-5" />
              </button>

              {accountOpen && (

                <div className="absolute right-0 top-full mt-3 w-56 rounded-2xl bg-white border shadow-2xl p-3">

                  <Link
                    to="/login"
                    className="block rounded-lg p-3 hover:bg-zinc-100"
                  >
                    Login
                  </Link>

                  <Link
                    to="/login"
                    className="block rounded-lg p-3 hover:bg-zinc-100"
                  >
                    Register
                  </Link>

                  <Link
                    to="/account"
                    className="block rounded-lg p-3 hover:bg-zinc-100"
                  >
                    My Orders
                  </Link>

                </div>

              )}

            </div>

            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-zinc-100"
            >
              <ShoppingBag className="w-5 h-5" />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-500 text-black text-[10px] flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

          </div>

        </div>

        {/* Category Strip */}

        <div className="hidden lg:block border-t bg-zinc-50">

          <div className="container mx-auto h-12 flex items-center justify-center gap-8 text-sm font-medium">

            <Link
              to="/category/$slug"
              params={{ slug: "new-arrivals" }}
              className="hover:text-yellow-600"
            >
              ✨ New Arrivals
            </Link>

            <Link to="/sale" className="text-red-600">
              🔥 Sale
            </Link>

            <Link to="/category/$slug" params={{ slug: "oversized" }}>
              Oversized
            </Link>

            <Link to="/category/$slug" params={{ slug: "shirts" }}>
              Shirts
            </Link>

            <Link to="/category/$slug" params={{ slug: "jeans" }}>
              Jeans
            </Link>

            <Link to="/category/$slug" params={{ slug: "cargo" }}>
              Cargo
            </Link>

            <Link to="/category/$slug" params={{ slug: "hoodies" }}>
              Hoodies
            </Link>

            <Link
              to="/category/$slug"
              params={{ slug: "premium" }}
              className="flex items-center gap-1"
            >

              <Crown className="w-4 h-4 text-yellow-500" />

              Premium

            </Link>

          </div>

        </div>

      </header>

      {/* ========================= */}
      {/* SEARCH MODAL */}
      {/* ========================= */}

      {searchOpen && (

        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md">

          <div className="bg-white max-w-3xl mx-auto mt-20 rounded-3xl p-8">

            <div className="flex items-center gap-3 border-b pb-4">

              <Search className="w-6 h-6" />

              <input
                autoFocus
                className="flex-1 outline-none text-lg"
                placeholder="Search products..."
              />

              <button onClick={() => setSearchOpen(false)}>
                <X />
              </button>

            </div>

            <div className="mt-6">

              <p className="font-semibold mb-3">
                Trending Searches
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "Oversized",
                  "Cargo",
                  "Premium Shirt",
                  "Sneakers",
                  "Jeans",
                  "Hoodie",
                  "Linen",
                  "Co-Ord Set",
                ].map((item) => (

                  <button
                    key={item}
                    className="rounded-full border px-4 py-2 hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ========================= */}
      {/* MOBILE DRAWER */}
      {/* ========================= */}

      {mobileOpen && (

        <div className="fixed inset-0 z-[120]">

          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">

            <div className="flex justify-between items-center p-5 border-b">

              <Logo size={42} />

              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>

            </div>

            <div className="p-5 space-y-1">

              {CATEGORIES.map((cat) => (

                <Link
                  key={cat.slug}
                  to="/category/$slug"
                  params={{ slug: cat.slug }}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl p-3 hover:bg-zinc-100"
                >
                  {cat.name}
                </Link>

              ))}

            </div>

            <div className="border-t p-5">

              <Link
                to="/account"
                className="block py-3"
              >
                My Account
              </Link>

              <Link
                to="/wishlist"
                className="block py-3"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="block py-3"
              >
                Cart
              </Link>

            </div>

          </div>

        </div>

      )}
    </>
  );
}