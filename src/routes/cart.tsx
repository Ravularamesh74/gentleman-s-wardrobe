import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Style Daddy" }, { name: "description", content: "Review your cart and checkout." }] }),
  component: CartPage,
});

function CartPage() {
  const { cart, updateQty, removeFromCart, user, placeOrder } = useShop();
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground" />
        <h1 className="font-display text-3xl mt-4 tracking-wide">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Add royal pieces worthy of a king.</p>
        <Link to="/shop" className="mt-6 inline-block bg-royal text-royal-foreground px-7 py-3 rounded-md font-semibold">Continue Shopping</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!user) { window.location.href = "/login?redirect=/cart"; return; }
    const order = placeOrder();
    if (order) { alert(`Order ${order.id} placed!`); window.location.href = "/account"; }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-4xl tracking-wide">Your Cart</h1>
      <p className="text-sm text-muted-foreground mt-1">{cart.length} item{cart.length !== 1 && "s"}</p>

      <div className="mt-8 grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.product.id + item.size + item.color} className="flex gap-4 p-4 border rounded-lg">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-32 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.product.brand}</p>
                <Link to={"/product/$id" as any} params={{ id: item.product.id }} className="font-medium hover:text-accent">{item.product.name}</Link>
                <p className="text-xs text-muted-foreground mt-1">Size: {item.size} · Color: {item.color}</p>
                <p className="font-semibold mt-2">₹{(item.product.price * item.qty).toLocaleString()}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center border rounded">
                  <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="p-1.5"><Minus className="w-3 h-3" /></button>
                  <span className="px-3 text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="p-1.5"><Plus className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit border rounded-lg p-6 bg-secondary/30 sticky top-24">
          <h3 className="font-display text-2xl tracking-wide">Order Summary</h3>
          <div className="space-y-2 mt-4 text-sm">
            <Row label="Subtotal" value={`₹${subtotal.toLocaleString()}`} />
            <Row label="Shipping" value={shipping === 0 ? "FREE" : `₹${shipping}`} />
            <Row label="Tax" value="Included" />
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span><span>₹{total.toLocaleString()}</span>
          </div>
          <button onClick={handleCheckout} className="w-full mt-6 bg-gradient-crown text-royal py-3.5 rounded-md font-semibold hover:opacity-90 transition">
            Checkout
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">Secure checkout · Easy returns</p>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>;
}
