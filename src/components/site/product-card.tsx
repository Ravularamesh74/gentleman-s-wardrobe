import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { useShop } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist } = useShop();
  const fav = wishlist.includes(product.id);
  const off = Math.round((1 - product.price / product.mrp) * 100);

  return (
    <div className="group relative">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <span className="text-[10px] font-bold uppercase tracking-wider bg-royal text-royal-foreground px-2 py-1 rounded">New</span>}
            {off > 30 && <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 rounded">{off}% Off</span>}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className="absolute top-2 right-2 p-2 bg-background/90 backdrop-blur rounded-full hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${fav ? "fill-accent text-accent" : ""}`} />
          </button>
        </div>
        <div className="pt-3 space-y-1">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
          <h3 className="text-sm font-medium truncate">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="font-semibold">₹{product.price.toLocaleString()}</span>
            {off > 0 && (
              <>
                <span className="text-xs text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</span>
                <span className="text-xs font-semibold text-accent">{off}% OFF</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{product.rating.toFixed(1)}</span>
            <span>({product.reviews})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
