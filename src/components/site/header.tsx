import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORIES } from "@/lib/catalog";
import { useShop } from "@/lib/store";
import { Logo } from "./logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart, wishlist } = useShop();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const mainCats = CATEGORIES.slice(0, 12);

  return (
    <>
      {/* Promo strip */}
      <div className="bg-gradient-royal text-royal-foreground text-xs overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 px-6">
              <span>👑 FREE SHIPPING ON ORDERS ABOVE ₹999</span>
              <span>✨ FLAT 40% OFF ON NEW ARRIVALS</span>
              <span>🦁 USE CODE: <strong>KING40</strong> FOR EXTRA 10% OFF</span>
              <span>📦 EASY 30-DAY RETURNS</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b" : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center gap-4 h-16 lg:h-20">
          <button className="lg:hidden -ml-2 p-2" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>

          <Logo size={scrolled ? 40 : 48} />

          <nav className="hidden lg:flex items-center gap-1 ml-6 flex-1">
            {mainCats.map((cat) => (
              <div key={cat.slug} className="relative group">
                <Link
                  to="/category/$slug"
                  params={{ slug: cat.slug }}
                  className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                >
                  {cat.name}
                  {cat.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {cat.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-card border shadow-royal rounded-lg p-3 min-w-[220px]">
                      {cat.children.map((c) => (
                        <Link
                          key={c.slug}
                          to="/category/$slug"
                          params={{ slug: `${cat.slug}-${c.slug}` }}
                          className="block px-3 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1 ml-auto">
            <button className="p-2 hover:text-accent" onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/wishlist" className="p-2 hover:text-accent relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/account" className="p-2 hover:text-accent" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:text-accent relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo size={40} />
              <button onClick={() => setMobileOpen(false)} className="p-2"><X className="w-5 h-5" /></button>
            </div>
            <nav className="p-4 space-y-1">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium border-b border-border/50"
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md p-6" onClick={() => setSearchOpen(false)}>
          <div className="max-w-2xl mx-auto mt-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b-2 border-foreground pb-3">
              <Search className="w-6 h-6" />
              <input
                autoFocus
                placeholder="Search for shirts, jeans, jackets..."
                className="flex-1 bg-transparent text-xl outline-none"
              />
              <button onClick={() => setSearchOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Trending</p>
              <div className="flex flex-wrap gap-2">
                {["Linen shirts", "Oversized tees", "Bomber jackets", "Royal kurtas", "Sneakers", "Watches"].map(t => (
                  <Link key={t} to="/shop" onClick={() => setSearchOpen(false)} className="px-3 py-1.5 border rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition">{t}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
