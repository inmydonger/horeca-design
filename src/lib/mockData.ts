export type Stock = "in" | "low" | "out";

export type Product = {
  id: string;
  name: string;
  category: "Beef" | "Chicken" | "Sea Food" | "Other" | string;
  price: number;
  unit: string;
  minOrder: number;
  stock: Stock;
  description: string;
  image?: string;
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
  { id: "p1", name: "SHORT RIBS ECT A", category: "Fresh Meat", price: 109940, unit: "kg", minOrder: 2, stock: "in", description: "Premium bone-in beef short ribs, grade A, sourced from the plate and chuck section. Well-marbled with a rich fat cap that renders beautifully during slow cooking, resulting in deeply flavourful, fall-off-the-bone meat. Ideal for braising, Korean galbi, or low-and-slow BBQ. Supplied fresh and chilled.", image: "https://drive.google.com/thumbnail?id=1nCl7JHNATa3hdsmTnozjs9dXqyPgXfc_&sz=w800" },
  { id: "p2", name: "HEAD MEAT LOCKERVALLEY @27,2", category: "Fresh Meat", price: 110228, unit: "kg", minOrder: 2, stock: "in", description: "Tender, well-trimmed beef head meat from Locker Valley, known for its consistent quality and traceability. A versatile cut with a fine grain texture and mild beefy flavour, commonly used in deli preparations, slow-cooked stews, and traditional soups.", image: "https://drive.google.com/thumbnail?id=1fkH0cb74-cOoWzHX3CbnHI2Og47NnFYj&sz=w800" },
  { id: "p3", name: "BRISKET BONE PPCS ME 15", category: "Fresh Meat", price: 43049, unit: "kg", minOrder: 5, stock: "low", description: "Bone-in beef brisket, piece-packed (PPCS) to Middle East specification, grade 15. Sourced from the lower chest with natural fat cover intact for moisture retention during cooking. The collagen-rich connective tissue breaks down over extended cook times, producing an exceptionally tender result. Suitable for smoking, pressure cooking, and traditional slow-braise recipes.", image: "https://drive.google.com/thumbnail?id=19MQb87MHz425C0dpe6KRzzb5OGspAqXy&sz=w800" },
  { id: "p4", name: "TENDERLOIN ALLANA(31) @20", category: "Fresh Meat", price: 133563, unit: "kg", minOrder: 1, stock: "in", description: "Premium whole beef tenderloin from Allana, one of India's leading halal-certified meat exporters. Size 31 denotes a consistently portioned, full-muscle cut with minimal side muscle, yielding exceptional tenderness and a buttery texture.", image: "https://drive.google.com/thumbnail?id=1f-q4a3gh11rP5sSecAd3Htnf43PmPB4R&sz=w800" },
  { id: "p5", name: "DORI FILLET BL ISI 3 @10", category: "Fish", price: 63802, unit: "kg", minOrder: 1, stock: "in", description: "Skinless, boneless (BL) John Dory (Dori) fillet, individually sized (ISI) at grade 3. A delicate, white-fleshed fish prized for its mild flavour, firm texture, and clean appearance on the plate. Free of bones and skin for direct use in kitchen prep. Ideal for pan-frying, poaching, steaming, and fine-dining fish dishes.", image: "https://drive.google.com/thumbnail?id=1GFiMySDjXrIXAU3jxHUSIV-xmAofcKOl&sz=w800" },
  { id: "p6", name: "BRISKET BONE LOCKYEAR VALLEY", category: "Fresh Meat", price: 42000, unit: "kg", minOrder: 1, stock: "in", description: "Bone-in beef brisket from Lockyear Valley, a trusted supplier known for pasture-raised, grain-finished cattle. Natural fat marbling throughout the flat and point ensures rich flavour and juiciness after long cook times. An ideal cut for smoked brisket, pot roast, or traditional slow-cooked dishes. Supplied fresh and chilled, ready for butchery or direct use.", image: "https://drive.google.com/thumbnail?id=1lLWAcoYS8YmT-9w3dFhnAS_yINqiJSRu&sz=w800" },
];

export const initialOrders: Order[] = [
  {
    id: "o1",
    invoiceNo: "INV/2026/05/00231",
    date: "2026-05-04",
    status: "Request",
    addressId: "addr-1",
    items: [
      { productId: "p1", name: "SHORT RIBS ECT A", qty: 3, unit: "kg", price: 109940 },
    ],
    subtotal: 329820,
    deliveryFee: 150000,
    total: 479820,
  },
  {
    id: "o2",
    invoiceNo: "INV/2026/05/00231",
    date: "2026-05-04",
    status: "Processing",
    addressId: "addr-1",
    items: [
      { productId: "p1", name: "SHORT RIBS ECT A", qty: 3, unit: "kg", price: 109940 },
    ],
    subtotal: 329820,
    deliveryFee: 150000,
    total: 479820,
  },
  {
    id: "o3",
    invoiceNo: "INV/2026/04/00198",
    date: "2026-04-22",
    status: "Delivered",
    addressId: "addr-2",
    items: [
      { productId: "p6", name: "BRISKET BONE LOCKYEAR VALLEY", qty: 10, unit: "kg", price: 42000 },
      { productId: "p5", name: "DORI FILLET BL ISI 3 @10", qty: 6, unit: "kg", price: 63802 },
    ],
    subtotal: 802812,
    deliveryFee: 150000,
    total: 952812,
  },
  {
    id: "o4",
    invoiceNo: "INV/2026/04/00154",
    date: "2026-04-09",
    status: "Unpaid",
    addressId: "addr-1",
    items: [
      { productId: "p2", name: "HEAD MEAT LOCKERVALLEY @27,2", qty: 2, unit: "kg", price: 110228 },
    ],
    subtotal: 220456,
    deliveryFee: 150000,
    total: 370456,
  },
  {
    id: "o5",
    invoiceNo: "INV/2026/04/00154",
    date: "2026-04-09",
    status: "Paid",
    addressId: "addr-1",
    items: [
      { productId: "p2", name: "HEAD MEAT LOCKERVALLEY @27,2", qty: 2, unit: "kg", price: 110228 },
    ],
    subtotal: 220456,
    deliveryFee: 150000,
    total: 370456,
  },
];

export const formatIDR = (n: number) => "Rp " + n.toLocaleString("id-ID");

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
