import { Link } from "react-router";
import { Product, formatIDR } from "../../lib/mockData";
import { ProductImage } from "./ProductImage";

import { useStore } from "../store";
import { toast } from "sonner";
import { MinusSignIcon, PlusSignIcon } from "hugeicons-react";

export function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, updateQty, removeFromCart } = useStore();
  
  const cartItem = cart.find(c => c.product.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;
  
  const disabled = product.stock === "out";

  const handleAdd = () => {
    addToCart(product, product.minOrder);
    toast.success(`${product.name} added`, { description: `${product.minOrder} ${product.unit}` });
  };

  const handleIncrement = () => {
    updateQty(product.id, qty + 1);
  };

  const handleDecrement = () => {
    if (qty - 1 >= product.minOrder) {
      updateQty(product.id, qty - 1);
    } else {
      removeFromCart(product.id);
      toast.info(`${product.name} removed from cart`);
    }
  };

  return (
    <div className="bg-white relative rounded-[14px] size-full overflow-hidden flex flex-col border border-[#e0ddda]">
      <Link to={`/catalog/${product.id}`} className="block relative w-full aspect-square">
        <ProductImage category={product.category} productId={product.id} src={product.image} className="absolute inset-0 size-full object-cover" />
      </Link>
      
      <div className="p-2 flex flex-col gap-1 flex-1 relative">

        <Link to={`/catalog/${product.id}`} className="font-['Inter',sans-serif] font-normal leading-[17.5px] text-[#13110f] text-[12px] line-clamp-2 mt-1">
          {product.name}
        </Link>
        
        <div className="font-['Inter',sans-serif] font-medium leading-[20px] text-[#13110f] text-[14px] mt-1 mb-2">
          {formatIDR(product.price)}
        </div>
        
        <div className="mt-auto pt-1">
          {qty > 0 ? (
            <div className="flex items-center justify-between w-full h-[32px]">
              <button 
                onClick={handleDecrement}
                className="bg-white flex items-center justify-center size-[32px] rounded-[9px] border border-[#dc2626] text-[#dc2626] hover:bg-red-50 transition-colors"
              >
                <MinusSignIcon size={14} />
              </button>
              <span className="font-semibold text-[14px] text-[#13110f] w-8 text-center">{qty}</span>
              <button 
                onClick={handleIncrement}
                className="bg-white flex items-center justify-center size-[32px] rounded-[9px] border border-[#dc2626] text-[#dc2626] hover:bg-red-50 transition-colors"
                disabled={disabled}
              >
                <PlusSignIcon size={14} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAdd}
              disabled={disabled}
              className="bg-[#dc2626] hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-[#dc2626] transition-colors h-[32px] w-full rounded-[8px] flex items-center justify-center text-white font-medium text-[14px]"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
