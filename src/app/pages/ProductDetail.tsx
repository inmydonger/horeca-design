import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { products, formatIDR } from "../../lib/mockData";
import { ProductImage } from "../components/ProductImage";
import { Button } from "../components/ui/button";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { Icon } from "../components/Icon";
import { useStore } from "../store";
import { toast } from "sonner";
import { DetailHeader } from "../components/DetailHeader";

export default function ProductDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useStore();
  const [qty, setQty] = useState(product?.minOrder ?? 1);

  if (!product) {
    return (
      <div className="p-6 text-sm">
        Product not found.{" "}
        <button className="text-primary" onClick={() => nav(-1)}>
          Go back
        </button>
      </div>
    );
  }

  const disabled = product.stock === "out";
  const total = product.price * qty;

  return (
    <div className="product-detail-page">
      <DetailHeader title="Product Detail" />

      {/* Product Image */}
      <div className="product-detail-image-wrapper">
        <ProductImage category={product.category} className="product-detail-hero-img" size={80} />
      </div>

      {/* Scrollable Content */}
      <div className="product-detail-content">
        {/* Product Name & Price */}
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-price-block">
            <div className="product-detail-price">{formatIDR(product.price)}</div>
            <div className="product-detail-unit">/{product.unit}</div>
          </div>
        </div>

        {/* Product Detail Card */}
        <div className="product-detail-card">
          <div className="product-detail-card-header">
            <span className="product-detail-card-title">Product Detail</span>
          </div>
          <div className="product-detail-card-body">
            <div className="product-detail-card-row">
              <span className="product-detail-card-label">Category</span>
              <span className="product-detail-card-value">{product.category}</span>
            </div>
            <div className="product-detail-card-row">
              <span className="product-detail-card-label product-detail-card-label--blue">Min. order</span>
              <span className="product-detail-card-value product-detail-card-value--blue">
                {product.minOrder} {product.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="product-detail-description">
          <h2 className="product-detail-description-title">Product Description</h2>
          <p className="product-detail-description-text">{product.description}</p>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="product-detail-bottom-bar">
        <div className="product-detail-bottom-row">
          <div className="product-detail-total-section">
            <span className="product-detail-total-label">Total Price</span>
            <span className="product-detail-total-value">{formatIDR(total)}</span>
          </div>
          <div className="product-detail-qty-controls">
            <button
              onClick={() => setQty((q) => Math.max(product.minOrder, q - 1))}
              className="product-detail-qty-btn"
              disabled={qty <= product.minOrder}
            >
              <Icon icon={MinusSignIcon} size={16} />
            </button>
            <div className="product-detail-qty-value">{qty}</div>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="product-detail-qty-btn"
            >
              <Icon icon={PlusSignIcon} size={16} />
            </button>
          </div>
        </div>
        <Button
          className="product-detail-add-btn"
          disabled={disabled}
          onClick={() => {
            addToCart(product, qty);
            toast.success("Added to cart");
            nav("/cart");
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
