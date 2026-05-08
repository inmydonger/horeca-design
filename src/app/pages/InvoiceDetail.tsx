import { useNavigate, useParams } from "react-router";
import { useStore } from "../store";
import { formatDate, formatIDR, user } from "../../lib/mockData";
import { Download01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "../components/Icon";
import { DetailHeader } from "../components/DetailHeader";
import { StatusBadge } from "./Orders";
import logo from "../../assets/horeca-logo.png";

export default function InvoiceDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { orders, addresses } = useStore();
  const order = orders.find((o) => o.id === id);
  const address = addresses.find((a) => a.id === order?.addressId);

  if (!order) return <div className="p-6 bg-[#fbfaf9] min-h-screen">Invoice not found.</div>;

  return (
    <div className="bg-[#fbfaf9] min-h-screen flex flex-col">
      <DetailHeader
        title="Invoice"
        right={<StatusBadge status={order.status} />}
      />

      <div className="flex-1 px-6 pt-6 pb-8 flex flex-col gap-6">
        {/* Header row with logo and invoice info */}
        <div className="flex items-start justify-between">
          <div className="h-10 w-[95px]">
            <img src={logo} alt="The Horeca" className="w-full h-full object-contain object-left" />
          </div>
          <div className="text-right flex flex-col gap-[3px]">
            <div className="text-xs text-[#68625e]">Invoice</div>
            <div className="text-sm font-medium text-[#13110f]">{order.invoiceNo}</div>
            <div className="text-xs text-[#68625e]">{formatDate(order.date)}</div>
          </div>
        </div>

        {/* Bill To & Deliver To */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-[3px]">
            <div className="text-xs text-[#68625e]">Bill to</div>
            <div className="text-sm font-medium text-[#13110f]">{user.company}</div>
            <div className="text-xs text-[#68625e]">{user.email}</div>
          </div>
          <div className="flex-1 flex flex-col gap-[3px] text-right">
            <div className="text-xs text-[#68625e]">Deliver to</div>
            <div className="text-sm font-medium text-[#13110f]">{address?.label || "Main Warehouse"}</div>
            <div className="text-xs text-[#68625e]">{address?.street || "Jl. Industri Raya No. 88, Cikarang Barat, Bekasi"}</div>
          </div>
        </div>

        {/* Items Table */}
        <div className="border border-[#e0ddda] rounded-[14px] overflow-hidden flex flex-col bg-white">
          <div className="bg-[#f0eeeb] flex items-center px-[11px] py-[8px]">
            <div className="flex-1 text-xs text-[#68625e]">Item</div>
            <div className="w-[53px] text-xs text-[#68625e] text-right">Qty</div>
            <div className="w-[107px] text-xs text-[#68625e] text-right">Total</div>
          </div>
          {order.items.map((it) => (
            <div key={it.productId} className="border-t border-[#e0ddda] flex items-center px-[12px] py-[12px]">
              <div className="flex-1 flex flex-col gap-1 pr-2">
                <div className="text-sm text-[#13110f] leading-snug">{it.name}</div>
                <div className="text-xs text-[#68625e]">{formatIDR(it.price)} / {it.unit}</div>
              </div>
              <div className="w-[53px] text-sm text-[#13110f] text-right">{it.qty}</div>
              <div className="w-[107px] text-sm text-[#13110f] text-right">{formatIDR(it.price * it.qty)}</div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#68625e]">Subtotal</span>
            <span className="text-[#13110f]">{formatIDR(order.subtotal)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#68625e]">Delivery fee</span>
            <span className="text-[#13110f]">{formatIDR(order.deliveryFee)}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-medium pt-2 border-t border-[#e0ddda] mt-1">
            <span className="text-[#13110f]">Total Due</span>
            <span className="text-[#13110f]">{formatIDR(order.total)}</span>
          </div>
        </div>

        {/* Payment Info */}
        <div className="border border-dashed border-[#e0ddda] rounded-[10px] px-3 py-[13px] flex items-center justify-center">
          <p className="text-xs text-[#68625e] leading-[1.6] text-center max-w-[322px]">
            Payment is processed outside this platform. Bank transfer details have been sent to {user.email}.
          </p>
        </div>

        {/* Download Button */}
        <button className="border border-[#e0ddda] bg-[#fbfaf9] hover:bg-[#f0eeeb] transition-colors rounded-lg py-2 flex items-center justify-center gap-2 mt-auto">
          <Icon icon={Download01Icon} size={16} className="text-[#13110f]" />
          <span className="text-sm font-medium text-[#13110f]">Download PDF</span>
        </button>
      </div>
    </div>
  );
}
