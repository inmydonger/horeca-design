import { Badge } from "./ui/badge";
import { Stock } from "../../lib/mockData";

export function StockBadge({ stock }: { stock: Stock }) {
  if (stock === "in")
    return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-transparent">In Stock</Badge>;
  if (stock === "low")
    return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-transparent">Low Stock</Badge>;
  return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/10 border-transparent">Out of Stock</Badge>;
}
