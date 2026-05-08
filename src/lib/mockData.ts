export type Stock = "in" | "low" | "out";

export type Product = {
  id: string;
  name: string;
  category: "Beef" | "Chicken" | "Sea Food" | "Other";
  price: number;
  unit: string;
  minOrder: number;
  stock: Stock;
  description: string;
};

export type Address = {
  id: string;
  label: string;
  street: string;
  postalCode: string;
  contactName: string;
  phone: string;
  isDefault?: boolean;
};

export type OrderItem = {
  productId: string;
  name: string;
  qty: number;
  unit: string;
  price: number;
};

export type OrderStatus = "Request" | "Processing" | "Delivered" | "Unpaid" | "Paid";

export type Order = {
  id: string;
  invoiceNo: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  addressId: string;
};

export const user = {
  name: "Dhani Ramadhana",
  company: "PT Maju Bersama Kuliner",
  email: "dhani@kuliner.co.id",
  userId: "MB-00123",
};

export const addresses: Address[] = [
  {
    id: "addr-1",
    label: "Main Warehouse",
    street: "Jl. Industri Raya No. 88, Cikarang Barat, Bekasi",
    postalCode: "17530",
    contactName: "Budi Santoso",
    phone: "+62 812-3456-7890",
    isDefault: true,
  },
  {
    id: "addr-2",
    label: "Resto Cabang Senopati",
    street: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
    postalCode: "12190",
    contactName: "Siti Rahayu",
    phone: "+62 813-9876-5432",
  },
];

export const products: Product[] = [
  { id: "p1", name: "Wagyu Sirloin MS4+", category: "Beef", price: 1250000, unit: "kg", minOrder: 2, stock: "in", description: "Marbling Score 4+ wagyu sirloin, frozen, sourced from Australia. Store at -18°C." },
  { id: "p2", name: "Beef Tenderloin A4", category: "Beef", price: 980000, unit: "kg", minOrder: 2, stock: "in", description: "Premium A4 grade tenderloin, vacuum sealed. Best served seared rare to medium-rare." },
  { id: "p3", name: "Beef Rib Eye", category: "Beef", price: 720000, unit: "kg", minOrder: 3, stock: "low", description: "USDA Choice rib eye, 2.5cm cut, generous marbling. Frozen, ships in insulated boxes." },
  { id: "p4", name: "Beef Brisket", category: "Beef", price: 285000, unit: "kg", minOrder: 5, stock: "in", description: "Whole packer brisket, ideal for slow smoking and braising. Average 5-7kg per piece." },
  { id: "p5", name: "Ground Beef Premium", category: "Beef", price: 165000, unit: "kg", minOrder: 5, stock: "in", description: "80/20 lean to fat ratio, freshly minted. Excellent for burger patties and bolognese." },
  { id: "p6", name: "Chicken Breast IQF", category: "Chicken", price: 78000, unit: "kg", minOrder: 5, stock: "in", description: "Individually quick frozen boneless skinless breast. Convenient portion-by-portion thawing." },
  { id: "p7", name: "Whole Chicken Fresh", category: "Chicken", price: 62000, unit: "ekor", minOrder: 5, stock: "in", description: "Farm-fresh whole chicken, ~1.2kg, halal certified. Delivered chilled within 24 hours." },
  { id: "p8", name: "Chicken Thigh Boneless", category: "Chicken", price: 72000, unit: "kg", minOrder: 5, stock: "low", description: "Skinless boneless thigh fillet, juicier alternative to breast. Frozen, IQF packed." },
  { id: "p9", name: "Chicken Wings", category: "Chicken", price: 68000, unit: "kg", minOrder: 5, stock: "in", description: "Whole wings split into drumette and flat. Perfect for fryers and Asian-style preparations." },
  { id: "p10", name: "Egg Omega-3", category: "Sea Food", price: 38000, unit: "tray (30 pcs)", minOrder: 2, stock: "in", description: "Free-range Omega-3 enriched eggs. Brown shell, large grade. Refrigerate after delivery." },
  { id: "p11", name: "Egg Kampung", category: "Sea Food", price: 56000, unit: "tray (30 pcs)", minOrder: 2, stock: "in", description: "Traditional village-raised chicken eggs, deeper yolk color and richer flavor." },
  { id: "p12", name: "Egg Pasteurized", category: "Sea Food", price: 42000, unit: "tray (30 pcs)", minOrder: 2, stock: "out", description: "In-shell pasteurized eggs, food-safety friendly for raw applications like mayonnaise." },
  { id: "p13", name: "Lamb Rack NZ", category: "Other", price: 690000, unit: "kg", minOrder: 2, stock: "low", description: "New Zealand lamb rack, frenched and ready to roast. Grass-fed, mild lamb flavor." },
  { id: "p14", name: "Duck Breast", category: "Other", price: 240000, unit: "kg", minOrder: 3, stock: "in", description: "Magret de canard style duck breast, score the fat and pan-sear skin-side down." },
];

export const initialOrders: Order[] = [
  {
    id: "o1",
    invoiceNo: "INV/2026/05/00231",
    date: "2026-05-04",
    status: "Request",
    addressId: "addr-1",
    items: [
      { productId: "p1", name: "Wagyu Sirloin MS4+", qty: 3, unit: "kg", price: 1250000 },
      { productId: "p10", name: "Egg Omega-3", qty: 4, unit: "tray (30 pcs)", price: 38000 },
    ],
    subtotal: 3902000,
    deliveryFee: 150000,
    total: 4052000,
  },
  {
    id: "o2",
    invoiceNo: "INV/2026/05/00231",
    date: "2026-05-04",
    status: "Processing",
    addressId: "addr-1",
    items: [
      { productId: "p1", name: "Wagyu Sirloin MS4+", qty: 3, unit: "kg", price: 1250000 },
      { productId: "p10", name: "Egg Omega-3", qty: 4, unit: "tray (30 pcs)", price: 38000 },
    ],
    subtotal: 3902000,
    deliveryFee: 150000,
    total: 4052000,
  },
  {
    id: "o3",
    invoiceNo: "INV/2026/04/00198",
    date: "2026-04-22",
    status: "Delivered",
    addressId: "addr-2",
    items: [
      { productId: "p6", name: "Chicken Breast IQF", qty: 10, unit: "kg", price: 78000 },
      { productId: "p9", name: "Chicken Wings", qty: 8, unit: "kg", price: 68000 },
      { productId: "p5", name: "Ground Beef Premium", qty: 6, unit: "kg", price: 165000 },
    ],
    subtotal: 2314000,
    deliveryFee: 150000,
    total: 2464000,
  },
  {
    id: "o4",
    invoiceNo: "INV/2026/04/00154",
    date: "2026-04-09",
    status: "Unpaid",
    addressId: "addr-1",
    items: [
      { productId: "p2", name: "Beef Tenderloin A4", qty: 2, unit: "kg", price: 980000 },
      { productId: "p13", name: "Lamb Rack NZ", qty: 2, unit: "kg", price: 690000 },
    ],
    subtotal: 3340000,
    deliveryFee: 150000,
    total: 3490000,
  },
  {
    id: "o5",
    invoiceNo: "INV/2026/04/00154",
    date: "2026-04-09",
    status: "Paid",
    addressId: "addr-1",
    items: [
      { productId: "p2", name: "Beef Tenderloin A4", qty: 2, unit: "kg", price: 980000 },
      { productId: "p13", name: "Lamb Rack NZ", qty: 2, unit: "kg", price: 690000 },
    ],
    subtotal: 3340000,
    deliveryFee: 150000,
    total: 3490000,
  },
];

export const formatIDR = (n: number) => "Rp " + n.toLocaleString("id-ID");

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
