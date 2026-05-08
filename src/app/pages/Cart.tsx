import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useStore, DELIVERY_FEE } from "../store";
import { formatIDR } from "../../lib/mockData";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { ProductImage } from "../components/ProductImage";
import { ArrowLeft01Icon, Delete02Icon, Location01Icon, MinusSignIcon, PlusSignIcon, ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "../components/Icon";
import rmeLogo from "../../assets/RME-logo.png";
import { DetailHeader } from "../components/DetailHeader";

export default function Cart() {
  const nav = useNavigate();
  const { cart, updateQty, removeFromCart, cartCount, cartSubtotal, addresses, selectedAddressId, setSelectedAddressId, notes, setNotes, placeOrder } = useStore();
  const [pickerOpen, setPickerOpen] = useState(false);
  const selected = addresses.find((a) => a.id === selectedAddressId);

  const submit = () => {
    if (!cart.length || !selected) return;
    nav("/checkout");
  };

  return (
    <div className="pb-4">
      <DetailHeader title="My Cart" />

      {cart.length === 0 ? (
        <div className="px-6 py-20 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <Icon icon={ShoppingCart01Icon} size={36} />
          </div>
          <h2 className="font-medium">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground">Browse the catalog to add fresh items to your order.</p>
          <Button asChild>
            <Link to="/catalog">Browse catalog</Link>
          </Button>
        </div>
      ) : (
        <div className="px-4 pt-4 space-y-5">
          <section className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Icon icon={Location01Icon} size={18} className="text-primary" />
                Delivery Address
              </div>
              <button onClick={() => setPickerOpen(true)} className="text-xs text-primary">
                Change
              </button>
            </div>
            {selected ? (
              <div className="text-sm">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium">{selected.label}</div>
                  <div className="text-right">
                    <div className="text-sm">{selected.contactName}</div>
                    <div className="text-xs text-muted-foreground">{selected.phone}</div>
                  </div>
                </div>
                <div className="text-muted-foreground">{selected.street}</div>
              </div>
            ) : (
              <Link to="/account/addresses" className="text-sm text-primary">
                + Add a delivery address
              </Link>
            )}
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-1">
              <h4 className="font-medium">Product</h4>
              <span className="text-muted-foreground text-sm">({cartCount})</span>
            </div>
            {cart.map(({ product, qty }) => (
              <div key={product.id} className="bg-card rounded-xl border border-border p-3 flex gap-3">
                <ProductImage category={product.category} className="w-16 h-16 rounded-lg shrink-0" size={28} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm leading-tight line-clamp-2">{product.name}</div>
                    <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive shrink-0">
                      <Icon icon={Delete02Icon} size={18} />
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {formatIDR(product.price)} / {product.unit}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(product.id, Math.max(product.minOrder, qty - 1))}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Icon icon={MinusSignIcon} size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{qty}</span>
                      <button
                        onClick={() => updateQty(product.id, qty + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Icon icon={PlusSignIcon} size={14} />
                      </button>
                    </div>
                    <div className="text-sm font-medium">{formatIDR(product.price * qty)}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section>
            <div className="text-sm mb-2">Order notes <span className="text-muted-foreground">(optional)</span></div>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Cut into 250g portions, deliver before 8am, etc." />
          </section>

          <section className="bg-card rounded-xl border border-border p-4 space-y-2 text-sm">
            <Row label="Subtotal" value={formatIDR(cartSubtotal)} />
            <Row label="Delivery fee" value={formatIDR(DELIVERY_FEE)} />
            <div className="border-t border-border pt-2 mt-1 flex justify-between font-medium">
              <span>Total</span>
              <span>{formatIDR(cartSubtotal + DELIVERY_FEE)}</span>
            </div>
          </section>

          <Button className="w-full" onClick={submit} disabled={!selected}>
            Place Order
          </Button>

          <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground pb-8">
            <span>Powered by</span>
            <img src={rmeLogo} alt="RME" className="w-[62px] h-[26px] object-cover" />
          </div>
        </div>
      )}

      <Sheet open={pickerOpen} onOpenChange={setPickerOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl">
          <SheetHeader>
            <SheetTitle>Choose delivery address</SheetTitle>
          </SheetHeader>
          <div className="space-y-2 mt-4">
            {addresses.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  setSelectedAddressId(a.id);
                  setPickerOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg border ${a.id === selectedAddressId ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
              >
                <div className="font-medium text-sm">{a.label}</div>
                <div className="text-xs text-muted-foreground">{a.street}</div>
              </button>
            ))}
            <Link to="/account/addresses" onClick={() => setPickerOpen(false)} className="block text-center text-sm text-primary py-2">
              Manage addresses
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}