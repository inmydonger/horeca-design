import { useNavigate, Link } from "react-router";
import { useStore, DELIVERY_FEE } from "../store";
import { formatIDR } from "../../lib/mockData";
import { Button } from "../components/ui/button";
import { ProductImage } from "../components/ProductImage";
import { Location01Icon, ShoppingBag01Icon, CheckmarkCircle02Icon, Note01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "../components/Icon";
import { DetailHeader } from "../components/DetailHeader";

export default function PreCheckout() {
  const nav = useNavigate();
  const { cart, cartSubtotal, addresses, selectedAddressId, notes, placeOrder } = useStore();
  const selected = addresses.find((a) => a.id === selectedAddressId);

  const confirm = () => {
    if (!cart.length || !selected) return;
    const o = placeOrder();
    nav(`/orders/confirmation?id=${o.id}`);
  };

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-[#FBFAF9] pb-6 flex flex-col">
        <DetailHeader title="Order Review" />
        <div className="px-6 py-20 flex flex-col items-center text-center gap-4 flex-1">
          <div className="w-20 h-20 rounded-full bg-[#f0eeeb] flex items-center justify-center text-[#68625e]">
            <Icon icon={ShoppingBag01Icon} size={36} />
          </div>
          <h2 className="font-medium text-[#13110f]">Nothing to review</h2>
          <p className="text-sm text-[#68625e]">Your cart is empty. Add items before proceeding.</p>
          <Button asChild className="bg-[#dc2626] hover:bg-[#dc2626]/90 text-white rounded-lg">
            <Link to="/cart">Back to cart</Link>
          </Button>
        </div>
      </div>
    );
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#FBFAF9] pb-6">
      <DetailHeader title="Order Review" />

      <div className="px-4 pt-5 space-y-4">
        {/* Delivery Address */}
        <section className="bg-white rounded-[14px] border border-[#e0ddda] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-medium text-[14px] text-[#13110f]">
              <Icon icon={Location01Icon} size={18} className="text-[#dc2626]" />
              Delivery Address
            </div>
            <Link to="/account/addresses" className="text-[#dc2626] text-[12px] font-medium">
              Change
            </Link>
          </div>
          
          <div className="pl-[26px]">
            {selected ? (
              <div className="flex flex-col gap-0.5">
                <div className="flex items-start justify-between">
                  <div className="font-medium text-[14px] text-[#13110f]">{selected.label}</div>
                  <div className="text-right text-[12px] text-[#68625e]">
                    <div>{selected.contactName}</div>
                    <div>{selected.phone}</div>
                  </div>
                </div>
                <div className="text-[14px] text-[#68625e] leading-[20px] mt-1">
                  {selected.street}
                </div>
              </div>
            ) : (
              <Link to="/account/addresses" className="text-[14px] text-[#dc2626]">
                + Add a delivery address
              </Link>
            )}
          </div>
        </section>

        {/* Order Items */}
        <section className="bg-white rounded-[14px] border border-[#e0ddda] overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between border-b border-[#e0ddda] text-[14px] font-medium text-[#13110f]">
            <span>Order Items</span>
            <span>{cart.length} products</span>
          </div>
          <div className="divide-y divide-[#e0ddda]">
            {cart.map(({ product, qty }) => (
              <div key={product.id} className="px-4 py-3 flex gap-3 items-center">
                <div className="w-12 h-12 bg-[#f0eeeb] rounded-[10px] flex items-center justify-center shrink-0">
                  <ProductImage category={product.category} className="w-5 h-5 text-[#68625e]" size={22} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="text-[14px] text-[#13110f] leading-tight truncate">{product.name}</div>
                  <div className="text-[12px] text-[#68625e] mt-1">
                    {formatIDR(product.price)} / {product.unit}
                  </div>
                </div>
                <div className="text-right shrink-0 flex flex-col justify-center">
                  <div className="text-[12px] text-[#68625e] mb-1">{qty} {product.unit}</div>
                  <div className="text-[14px] font-medium text-[#13110f]">{formatIDR(product.price * qty)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Order Notes */}
        {notes ? (
          <section className="bg-white rounded-[14px] border border-[#e0ddda] p-4 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[12px] text-[#68625e]">
              <Icon icon={Note01Icon} size={16} />
              Order notes
            </div>
            <div className="text-[14px] text-[#13110f] mt-0.5">{notes}</div>
          </section>
        ) : null}

        {/* Price Summary */}
        <section className="bg-white rounded-[14px] border border-[#e0ddda] p-4 flex flex-col gap-3">
          <div className="text-[14px] font-medium text-[#13110f] mb-1">Price Summary</div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-[#68625e]">Subtotal ({totalItems} items)</span>
            <span className="text-[#13110f]">{formatIDR(cartSubtotal)}</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-[#68625e]">Delivery fee</span>
            <span className="text-[#13110f]">{formatIDR(DELIVERY_FEE)}</span>
          </div>
          <div className="border-t border-[#e0ddda] pt-3 flex justify-between items-center text-[14px] font-medium mt-1">
            <span className="text-[#13110f]">Total</span>
            <span className="text-[#dc2626]">{formatIDR(cartSubtotal + DELIVERY_FEE)}</span>
          </div>
        </section>

        {/* Payment note */}
        <div className="bg-[#f0eeeb]/60 rounded-[10px] p-3 text-[12px] text-[#68625e] leading-relaxed mt-2">
          Payment details will be communicated separately by your account manager after the order is placed.
        </div>

        {/* Confirm CTA */}
        <Button
          className="w-full gap-2 bg-[#dc2626] hover:bg-[#dc2626]/90 text-white rounded-lg h-12 mt-2"
          onClick={confirm}
          disabled={!selected || !cart.length}
        >
          <Icon icon={CheckmarkCircle02Icon} size={18} />
          <span className="text-[14px] font-medium">Confirm & Place Order</span>
        </Button>
      </div>
    </div>
  );
}
