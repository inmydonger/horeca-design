import { useState } from "react";
import { Link } from "react-router";
import { useStore } from "../store";
import { formatDate, formatIDR, OrderStatus } from "../../lib/mockData";
import { Badge } from "../components/ui/badge";
import { Icon } from "../components/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { DetailHeader } from "../components/DetailHeader";

const STATUS_FILTERS = ["All", "Request", "Processing", "Delivered", "Unpaid", "Paid"] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

export default function Orders() {
  const { orders } = useStore();
  const [filter, setFilter] = useState<StatusFilter>("All");

  const filteredOrders = filter === "All"
    ? orders
    : orders.filter((o) => o.status === filter);

  return (
    <div className="orders-page pb-4">
      <DetailHeader title="Orders & Invoices" hideBack />

      {/* Status filter chips */}
      <div className="orders-filters mt-4">
        {STATUS_FILTERS.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`orders-filter-chip ${filter === s ? "orders-filter-chip--active" : ""}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Order list */}
      <div className="px-4 space-y-3 mt-3">
        {filteredOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No orders found.
          </div>
        )}
        {filteredOrders.map((o) => (
          <Link
            key={o.id}
            to={`/orders/${o.id}`}
            className="orders-card"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="orders-card-invoice">{o.invoiceNo}</span>
                <StatusBadge status={o.status} />
              </div>
              <div className="orders-card-meta">
                {formatDate(o.date)} · {o.items.length} item{o.items.length > 1 ? "s" : ""}
              </div>
              <div className="orders-card-total">{formatIDR(o.total)}</div>
            </div>
            <Icon icon={ArrowRight01Icon} size={18} className="text-muted-foreground shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: OrderStatus }) {
  const styleMap: Record<OrderStatus, string> = {
    Request: "orders-badge--request",
    Processing: "orders-badge--processing",
    Delivered: "orders-badge--delivered",
    Unpaid: "orders-badge--unpaid",
    Paid: "orders-badge--paid",
  };

  return (
    <Badge className={`orders-badge ${styleMap[status]}`}>
      {status}
    </Badge>
  );
}
