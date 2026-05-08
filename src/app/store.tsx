import { createContext, useContext, useState, ReactNode } from "react";
import { addresses as initAddresses, initialOrders, Address, Order, OrderItem, Product } from "../lib/mockData";

type CartItem = { product: Product; qty: number };

type Store = {
  cart: CartItem[];
  addToCart: (p: Product, qty?: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  notes: string;
  setNotes: (s: string) => void;
  addresses: Address[];
  setAddresses: (a: Address[]) => void;
  selectedAddressId: string;
  setSelectedAddressId: (id: string) => void;
  orders: Order[];
  placeOrder: () => Order;
};

const Ctx = createContext<Store | null>(null);

export const DELIVERY_FEE = 150000;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notes, setNotes] = useState("");
  const [addresses, setAddresses] = useState<Address[]>(initAddresses);
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    initAddresses.find((a) => a.isDefault)?.id ?? initAddresses[0].id,
  );
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const addToCart = (p: Product, qty = p.minOrder) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.product.id === p.id);
      if (ex) return prev.map((c) => (c.product.id === p.id ? { ...c, qty: c.qty + qty } : c));
      return [...prev, { product: p, qty }];
    });
  };
  const updateQty = (id: string, qty: number) =>
    setCart((prev) => prev.map((c) => (c.product.id === id ? { ...c, qty } : c)));
  const removeFromCart = (id: string) => setCart((prev) => prev.filter((c) => c.product.id !== id));
  const clearCart = () => {
    setCart([]);
    setNotes("");
  };

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const cartSubtotal = cart.reduce((s, c) => s + c.qty * c.product.price, 0);

  const placeOrder = (): Order => {
    const items: OrderItem[] = cart.map((c) => ({
      productId: c.product.id,
      name: c.product.name,
      qty: c.qty,
      unit: c.product.unit,
      price: c.product.price,
    }));
    const seq = String(232 + orders.length).padStart(5, "0");
    const now = new Date();
    const order: Order = {
      id: "o" + (orders.length + 1),
      invoiceNo: `INV/${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${seq}`,
      date: now.toISOString().slice(0, 10),
      status: "Request",
      addressId: selectedAddressId,
      items,
      subtotal: cartSubtotal,
      deliveryFee: DELIVERY_FEE,
      total: cartSubtotal + DELIVERY_FEE,
    };
    setOrders((p) => [order, ...p]);
    clearCart();
    return order;
  };

  return (
    <Ctx.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        notes,
        setNotes,
        addresses,
        setAddresses,
        selectedAddressId,
        setSelectedAddressId,
        orders,
        placeOrder,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("StoreProvider missing");
  return c;
};
