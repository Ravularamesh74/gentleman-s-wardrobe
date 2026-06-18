import { createFileRoute, Link, useParams, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, ShoppingBag, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProduct, PRODUCTS } from "@/lib/catalog";
import { useShop } from "@/lib/store";
import { ProductCard } from "@/components/site/product-card";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  head: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) return { meta: [{ title: "Product — Style Daddy" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.brand} | Style Daddy` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — Style Daddy` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
      ],
    };
  },
});

function ProductPage() {
  const { id } = useParams({ from: "/product/$id" });
  const p = getProduct(id);
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(p?.colors[0] ?? "");

  const galleryImages = p
    ? Array.from(new Set([p.image, ...(p.images ?? [])]))
    : [];
  const [img, setImg] = useState(galleryImages[0] ?? "");

  if (!p) {
    return <div className="container mx-auto px-4 py-20 text-center"><p>Product not found.</p><Link to="/shop" className="text-accent">Back to shop</Link></div>;
  }
  const fav = wishlist.includes(p.id);
  const off = Math.round((1 - p.price / p.mrp) * 100);
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
            <img src={img} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {galleryImages.map((src, i) => (
              <button key={i} onClick={() => setImg(src)} className={`aspect-square rounded overflow-hidden border-2 ${img === src ? "border-accent" : "border-transparent"}`}>
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.brand}</p>
          <h1 className="font-display text-3xl md:text-4xl mt-1 tracking-wide">{p.name}</h1>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-medium">{p.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({p.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3 mt-5">
            <span className="text-3xl font-bold">₹{p.price.toLocaleString()}</span>
            {off > 0 && <>
              <span className="text-muted-foreground line-through">₹{p.mrp.toLocaleString()}</span>
              <span className="text-accent font-semibold">{off}% OFF</span>
            </>}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</p>

          <div className="mt-6">
            <p className="text-sm font-semibold mb-2">Color: <span className="font-normal text-muted-foreground">{color}</span></p>
            <div className="flex gap-2">
              {p.colors.map(c => (
                <button key={c} onClick={() => setColor(c)}
                        className={`px-3 py-1.5 border rounded text-sm ${color === c ? "border-foreground bg-foreground text-background" : "hover:border-foreground"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Size: <span className="font-normal text-muted-foreground">{size}</span></p>
              <button className="text-xs text-accent underline">Size Guide</button>
            </div>
            <div className="flex gap-2">
              {p.sizes.map(s => (
                <button key={s} onClick={() => setSize(s)}
                        className={`w-12 h-12 border rounded text-sm font-medium ${size === s ? "border-foreground bg-foreground text-background" : "hover:border-foreground"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex gap-3">
            <button onClick={() => { addToCart(p, size, color); navigate({ to: "/cart" }); }}
                    className="flex-1 bg-royal text-royal-foreground py-3.5 rounded-md font-semibold hover:bg-gradient-royal transition flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </button>
            <button onClick={() => toggleWishlist(p.id)}
                    className={`px-4 border rounded-md transition ${fav ? "border-accent text-accent" : "hover:border-accent hover:text-accent"}`}>
              <Heart className={`w-5 h-5 ${fav ? "fill-current" : ""}`} />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            {([[Truck, "Free Shipping"], [RotateCcw, "30-day Returns"], [ShieldCheck, "Secure Payment"]] as const).map(([I, t], i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-secondary/50 rounded"><I className="w-4 h-4 text-accent" /> {t}</div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary/50 rounded text-sm">
            <div className="flex gap-3">
              <input placeholder="Enter PIN code" className="flex-1 bg-background border rounded px-3 py-2 text-sm" />
              <button className="px-4 bg-foreground text-background rounded text-sm font-semibold">Check</button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Delivery estimate available after entering PIN.</p>
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <h3 className="font-display text-lg tracking-wide">Description</h3>
              <p className="text-muted-foreground mt-2">{p.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <Spec label="Fabric" value={p.fabric} />
              <Spec label="Fit" value={p.fit} />
              <Spec label="Pattern" value="Solid" />
              <Spec label="Wash Care" value="Machine Wash Cold" />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-wide">Complete The Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            {related.map(r => <ProductCard key={r.id} product={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="text-sm font-medium mt-0.5">{value}</p>
    </div>
  );
}
