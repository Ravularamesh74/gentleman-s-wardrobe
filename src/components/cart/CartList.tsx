
// src/components/cart/CartList.tsx

import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import { useShop } from "@/lib/store";

export function CartList() {
  const {
    cart,
    updateQty,
    removeFromCart,
    toggleWishlist,
  } = useShop();

  // Empty Cart
  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Shopping Bag
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          Premium Checkout
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-5">
        {cart.map((item) => (
          <CartItem
            key={`${item.product.id}-${item.size}-${item.color}`}
            item={item}
            updateQty={updateQty}
            removeFromCart={removeFromCart}
            moveToWishlist={toggleWishlist}
          />
        ))}
      </div>

      {/* Bottom Message */}
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-center">
        <p className="text-sm text-zinc-600">
          🚚 <strong>Free Shipping</strong> on orders above{" "}
          <span className="font-bold text-black">₹999</span>
        </p>

        <p className="mt-2 text-xs text-zinc-500">
          All orders are securely packed and delivered with easy returns.
        </p>
      </div>
    </div>
  );
}
