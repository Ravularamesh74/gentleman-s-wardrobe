import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

type CartItem = { product: Product; size: string; color: string; qty: number };
type Order = { id: string; date: string; items: CartItem[]; total: number; status: string };
type User = { phone: string; name: string; addresses: string[]; orders: Order[] };

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  user: User | null;
  addToCart: (p: Product, size: string, color: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  login: (phone: string) => void;
  logout: () => void;
  updateUser: (u: Partial<User>) => void;
  placeOrder: () => Order | null;
};

const Ctx = createContext<ShopState | null>(null);

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(load("sd_cart", []));
    setWishlist(load("sd_wishlist", []));
    setUser(load<User | null>("sd_user", null));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem("sd_cart", JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem("sd_wishlist", JSON.stringify(wishlist)); }, [wishlist, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem("sd_user", JSON.stringify(user)); }, [user, hydrated]);

  const value: ShopState = {
    cart, wishlist, user,
    addToCart: (p, size, color, qty = 1) => setCart(c => {
      const ex = c.find(i => i.product.id === p.id && i.size === size && i.color === color);
      if (ex) return c.map(i => i === ex ? { ...i, qty: i.qty + qty } : i);
      return [...c, { product: p, size, color, qty }];
    }),
    removeFromCart: (id) => setCart(c => c.filter(i => i.product.id !== id)),
    updateQty: (id, qty) => setCart(c => c.map(i => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    toggleWishlist: (id) => setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]),
    login: (phone) => setUser({ phone, name: "Style King", addresses: [], orders: [] }),
    logout: () => setUser(null),
    updateUser: (u) => setUser(prev => prev ? { ...prev, ...u } : prev),
    placeOrder: () => {
      if (!user || cart.length === 0) return null;
      const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
      const order: Order = {
        id: `ORD${Date.now().toString().slice(-8)}`,
        date: new Date().toISOString(),
        items: cart, total, status: "Confirmed",
      };
      setUser({ ...user, orders: [order, ...user.orders] });
      setCart([]);
      return order;
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShop() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useShop outside provider");
  return c;
}
