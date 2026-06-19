
import { Link } from "@tanstack/react-router";
import {
  Heart,
  Star,
  Eye,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { Product } from "@/lib/catalog";
import { useShop } from "@/lib/store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, "1", {} as any);
  };

  const discount =
    product.mrp > product.price
      ? Math.round(
          ((product.mrp - product.price) / product.mrp) * 100
        )
      : 0;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-2xl">
      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
          <Link
            to={"/product/$id" as any}
            params={{ id: product.id }}
          >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              NEW
            </span>
          )}

          {discount > 0 && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase text-white">
              {discount}% OFF
            </span>
          )}

          {discount >= 40 && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold text-black">
              HOT DEAL
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:scale-110 hover:bg-yellow-400 hover:text-black"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />
        </button>

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-6 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="rounded-full bg-white p-3 shadow-xl transition hover:bg-black hover:text-white"
          >
            <Eye className="h-5 w-5" />
          </Link>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="rounded-full bg-yellow-400 p-3 shadow-xl transition hover:scale-110"
          >
            <ShoppingBag className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-5">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-yellow-500" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
            {product.brand}
          </span>
        </div>

        {/* Name */}
          <Link
            to={"/product/$id" as any}
            params={{ id: product.id }}
          >
          <h3 className="line-clamp-2 text-lg font-bold transition group-hover:text-yellow-600">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">
              {product.rating.toFixed(1)}
            </span>
          </div>

          <span className="text-zinc-500">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-black">
            ₹{product.price.toLocaleString()}
          </span>

          {discount > 0 && (
            <>
              <span className="text-sm text-zinc-400 line-through">
                ₹{product.mrp.toLocaleString()}
              </span>

              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                SAVE {discount}%
              </span>
            </>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          className="mt-2 w-full rounded-2xl bg-black py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-yellow-400 hover:text-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

