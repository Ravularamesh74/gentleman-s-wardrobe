import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Crown, Package, MapPin, Heart, LogOut, User } from "lucide-react";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — Style Daddy" }, { name: "description", content: "Your orders, profile and wishlist." }] }),
  component: AccountPage,
});

function AccountPage() {
  const { user, logout, wishlist } = useShop();
  const [tab, setTab] = useState<"orders" | "profile" | "addresses">("orders");

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <Crown className="w-14 h-14 mx-auto text-gold" />
        <h1 className="font-display text-3xl mt-4 tracking-wide">Sign In Required</h1>
        <p className="text-muted-foreground mt-2">Sign in to view your orders, wishlist, and royal rewards.</p>
        <Link to="/login" className="mt-6 inline-block bg-royal text-royal-foreground px-7 py-3 rounded-md font-semibold">Sign In</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-gradient-royal text-royal-foreground p-8 rounded-2xl flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-crown flex items-center justify-center"><User className="w-7 h-7 text-royal" /></div>
        <div className="flex-1">
          <p className="text-xs text-gold uppercase tracking-widest">Welcome back</p>
          <h1 className="font-display text-3xl tracking-wide">{user.name}</h1>
          <p className="text-sm text-white/70">{user.phone}</p>
        </div>
        <button onClick={logout} className="hidden sm:flex items-center gap-2 text-sm border border-white/30 px-4 py-2 rounded hover:bg-white/10">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      <div className="mt-8 grid lg:grid-cols-[240px_1fr] gap-6">
        <aside className="space-y-1">
          {[
            { k: "orders", label: "My Orders", icon: Package },
            { k: "addresses", label: "Addresses", icon: MapPin },
            { k: "profile", label: "Profile", icon: User },
          ].map(({ k, label, icon: I }) => (
            <button key={k} onClick={() => setTab(k as typeof tab)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium ${tab === k ? "bg-royal text-royal-foreground" : "hover:bg-secondary"}`}>
              <I className="w-4 h-4" /> {label}
            </button>
          ))}
          <Link to="/wishlist" className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium hover:bg-secondary">
            <Heart className="w-4 h-4" /> Wishlist ({wishlist.length})
          </Link>
          <button onClick={logout} className="sm:hidden w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium hover:bg-secondary text-destructive">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </aside>

        <div className="border rounded-lg p-6 bg-card">
          {tab === "orders" && (
            <div>
              <h2 className="font-display text-2xl tracking-wide mb-4">Order History</h2>
              {user.orders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-12 h-12 mx-auto text-muted-foreground" />
                  <p className="mt-3 text-muted-foreground">No orders yet.</p>
                  <Link to="/shop" className="text-accent underline text-sm">Start shopping →</Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {user.orders.map(o => (
                    <div key={o.id} className="border rounded-lg p-4">
                      <div className="flex flex-wrap justify-between gap-2 pb-3 border-b">
                        <div>
                          <p className="font-semibold">{o.id}</p>
                          <p className="text-xs text-muted-foreground">{new Date(o.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs px-2 py-1 bg-gold/20 text-gold-foreground rounded">{o.status}</span>
                          <p className="font-semibold mt-1">₹{o.total.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2 overflow-x-auto">
                        {o.items.map((it, i) => (
                          <img key={i} src={it.product.image} alt="" className="w-14 h-14 object-cover rounded shrink-0" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {tab === "addresses" && (
            <div>
              <h2 className="font-display text-2xl tracking-wide mb-4">Saved Addresses</h2>
              {user.addresses.length === 0 ? (
                <p className="text-muted-foreground text-sm">No addresses yet. Add one at checkout.</p>
              ) : (
                <ul className="space-y-3">{user.addresses.map((a, i) => <li key={i} className="border rounded p-3 text-sm">{a}</li>)}</ul>
              )}
            </div>
          )}
          {tab === "profile" && (
            <div>
              <h2 className="font-display text-2xl tracking-wide mb-4">Profile</h2>
              <div className="space-y-3 max-w-md">
                <Field label="Name" value={user.name} />
                <Field label="Phone" value={user.phone} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input defaultValue={value} className="mt-1 w-full border rounded px-3 py-2 bg-background" />
    </div>
  );
}
