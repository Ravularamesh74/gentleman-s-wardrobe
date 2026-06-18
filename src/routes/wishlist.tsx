import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useShop } from "@/lib/store";
import { PRODUCTS } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Style Daddy" }, { name: "description", content: "Your saved royal pieces." }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useShop();
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-4xl tracking-wide">Wishlist</h1>
      <p className="text-sm text-muted-foreground mt-1">{items.length} item{items.length !== 1 && "s"} saved</p>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 mx-auto text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">No items saved yet.</p>
          <Link to="/shop" className="mt-6 inline-block bg-royal text-royal-foreground px-7 py-3 rounded-md font-semibold">Start Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
