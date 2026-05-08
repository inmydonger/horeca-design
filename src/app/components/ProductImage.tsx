import imgProductThumbnail from "figma:asset/3f24caa86d163166e3e50b974b18892c9e04c7ff.png";
import imgProductThumbnail1 from "figma:asset/db96b90413ba7af008e057d5afd0c505795a9705.png";
import imgProductThumbnail2 from "figma:asset/948dae67e3ec8c88489b2f3ba3b90190af903f90.png";
import imgProductThumbnail3 from "figma:asset/01cceb4990ac37a01e4f39499a8746504d1cefc4.png";
import imgProductThumbnail4 from "figma:asset/f11473d57a032ff79a6b67a3383f85b24e7566f1.png";
import imgProductThumbnail5 from "figma:asset/884fad76efbfb0f6b32a62abf1d8d882cdfa3462.png";
import imgProductThumbnail6 from "figma:asset/70b35e5fccd3940570cfb8364a24f0d9edb8d825.png";

const thumbnails = [
  imgProductThumbnail,
  imgProductThumbnail1,
  imgProductThumbnail2,
  imgProductThumbnail3,
  imgProductThumbnail4,
  imgProductThumbnail5,
  imgProductThumbnail6,
];

export function ProductImage({ category, className = "", size = 36, productId }: { category: string; className?: string; size?: number; productId?: string }) {
  // Simple hash function to pick a consistent image for a product
  let hash = 0;
  if (productId) {
    for (let i = 0; i < productId.length; i++) {
      hash = productId.charCodeAt(i) + ((hash << 5) - hash);
    }
  }
  
  const index = Math.abs(hash) % thumbnails.length;
  const src = thumbnails[index];

  return (
    <div className={`bg-muted flex items-center justify-center overflow-hidden ${className}`}>
      <img src={src} className="w-full h-full object-cover" alt={`${category} product`} />
    </div>
  );
}
