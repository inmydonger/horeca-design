import { useMemo, useState } from "react";
import { Link } from "react-router";
import { products } from "../../lib/mockData";
import { CategoryChips, Cat } from "../components/CategoryChips";
import { ProductCard } from "../components/ProductCard";
import { Search01Icon, ShoppingCart01Icon } from "hugeicons-react";
import image_logo_horeca from '@/imports/logo-horeca.png';
import { useStore } from "../store";

export default function Catalog() {
  const [cat, setCat] = useState<Cat>("All");
  const [q, setQ] = useState("");
  const { cartCount } = useStore();

  const list = useMemo(() => {
    let l = products;
    if (cat !== "All") l = l.filter((p) => p.category === cat);
    if (q.trim()) l = l.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    return [...l];
  }, [cat, q]);

  return (
    <div className="pb-24 flex flex-col bg-white min-h-screen">
      <header className="bg-white sticky top-0 z-20 border-b border-[#e0ddda] pt-12 pb-4 px-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <img src={image_logo_horeca} className="h-[32px] w-[76px] object-contain" alt="Horeca Logo" />
          <Link to="/cart" className="relative p-1">
            <ShoppingCart01Icon className="text-[#68625e]" size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#dc2626] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <div className="bg-[#f3f3f5] rounded-[8px] flex items-center px-3 h-[44px] gap-2">
          <Search01Icon size={20} className="text-[#68625e] opacity-60" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products"
            className="bg-transparent border-none outline-none text-[16px] text-[#68625e] w-full placeholder:text-[#68625e] placeholder:opacity-60"
          />
        </div>
      </header>

      <div className="px-6 mt-6 mb-2 sticky top-[156px] z-10 bg-white py-2">
        <CategoryChips value={cat} onChange={setCat} />
      </div>

      <section className="px-6 mt-2">
        <h2 className="font-['Inter',sans-serif] font-semibold text-[#13110f] text-[16px] mb-3">All Products</h2>
        
        {list.length === 0 ? (
          <div className="text-center text-[#68625e] py-12 text-sm">No products match your search.</div>
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {list.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
