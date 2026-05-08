import { Link } from "react-router";
import banner1 from '@/imports/banner-1-1.png';
import banner2 from '@/imports/banner-2.png';
import banner3 from '@/imports/banner-3.png';
import image_logo_horeca from '@/imports/logo-horeca.png'
import { useState, useEffect, useRef, useMemo } from "react";
import { products } from "../../lib/mockData";
import { CategoryChips, Cat } from "../components/CategoryChips";
import { ProductCard } from "../components/ProductCard";
import { Search01Icon, ShoppingCart01Icon } from "hugeicons-react";
import { useStore } from "../store";

export default function Home() {
  const [cat, setCat] = useState<Cat>("All");
  const [q, setQ] = useState("");
  const { cartCount } = useStore();

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 351, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    let l = products;
    if (cat !== "All") l = l.filter((p) => p.category === cat);
    if (q.trim()) l = l.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    return [...l];
  }, [cat, q]);

  const popularProducts = products.slice(0, 5);

  return (
    <div className="pb-24 flex flex-col bg-white">
      <header className="bg-white sticky top-0 z-20 border-b border-[#e0ddda] pt-4 pb-4 px-6 flex flex-col gap-4">
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

      {!q.trim() && (
        <>
          <section className="mt-6">
            <div ref={carouselRef} className="flex gap-3 overflow-x-auto no-scrollbar snap-x pb-2 px-6">
              <img src={banner1} className="h-[129px] w-[339px] rounded-xl shrink-0 object-cover snap-center" alt="Banner 1" />
              <img src={banner2} className="h-[129px] w-[339px] rounded-xl shrink-0 object-cover snap-center" alt="Banner 2" />
              <img src={banner3} className="h-[129px] w-[339px] rounded-xl shrink-0 object-cover snap-center" alt="Banner 3" />
            </div>
          </section>



          <section className="mt-6">
            <h2 className="px-6 font-['Inter',sans-serif] font-semibold text-[#13110f] text-[16px] mb-3">Popular Products</h2>
            <div className="flex gap-[14px] overflow-x-auto px-6 no-scrollbar pb-2">
              {popularProducts.map((p) => (
                <div key={`pop-${p.id}`} className="w-[170px] shrink-0">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <div className="px-6 mb-2 sticky top-[124px] z-10 bg-white py-2">
        <CategoryChips value={cat} onChange={setCat} />
      </div>

      <section className="px-6 mt-2">
        <h2 className="font-['Inter',sans-serif] font-semibold text-[#13110f] text-[16px] mb-3">All Products</h2>
        {filtered.length === 0 ? (
          <div className="text-center text-[#68625e] py-12 text-sm">No products match your search.</div>
        ) : (
          <div className="grid grid-cols-2 gap-[14px]">
            {filtered.map((p) => (
              <div key={`all-${p.id}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
