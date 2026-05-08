import { Link, useSearchParams } from "react-router";
import { useStore } from "../store";
import { formatIDR } from "../../lib/mockData";
import { Button } from "../components/ui/button";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { Icon } from "../components/Icon";
import { DetailHeader } from "../components/DetailHeader";

export default function OrderConfirmation() {
  const [params] = useSearchParams();
  const { orders, addresses } = useStore();
  const order = orders.find((o) => o.id === params.get("id")) ?? orders[0];
  const address = addresses.find((a) => a.id === order?.addressId);

  if (!order) return null;

  return (
    <div className="min-h-dvh bg-[#FBFAF9] flex flex-col pb-6">
      <DetailHeader title="Confirmation Order" hideBack />

      <div className="px-6 pt-6 flex flex-col flex-1">
        <div className="flex flex-col items-center text-center gap-[16px]">
          <div className="text-primary mt-2">
            <Icon icon={CheckmarkCircle02Icon} size={88} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[28px] tracking-[-0.7px] leading-[42px] font-medium text-[#13110F]">
              Order Placed!
            </h1>
            <div className="text-[14px] text-[#68625E]">Invoice {order.invoiceNo}</div>
          </div>
        </div>

        <div className="bg-white border border-[#E0DDDA] rounded-[14px] p-[16.67px] mt-[24px] flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="text-[12px] text-[#68625E] mb-1">Delivery address</div>
            <div className="text-[14px] font-medium text-[#13110F]">{address?.label}</div>
            <div className="text-[12px] text-[#68625E] mt-1">{address?.street}</div>
          </div>
          
          <div className="flex justify-between items-center border-t border-[#E0DDDA] pt-3">
            <span className="text-[14px] text-[#68625E]">Items</span>
            <span className="text-[14px] text-[#13110F]">{order.items.reduce((s, i) => s + i.qty, 0)} pcs · {order.items.length} products</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-medium text-[#13110F]">Total</span>
            <span className="text-[14px] font-medium text-[#13110F]">{formatIDR(order.total)}</span>
          </div>
        </div>

        <div className="bg-[#F0EEEB]/60 rounded-[10px] p-3 mt-4">
          <p className="text-[12px] text-[#68625E] leading-[19.5px]">
            An invoice has been generated. Payment details will be communicated separately by your account manager.
          </p>
        </div>

        <div className="mt-[32px] flex flex-col gap-2">
          <Button asChild className="w-full h-9 rounded-lg text-[14px] font-medium">
            <Link to={`/orders/${order.id}`}>View Invoice</Link>
          </Button>
          <Button asChild variant="outline" className="w-full h-9 rounded-lg text-[14px] font-medium border-[#E0DDDA] bg-[#FBFAF9] text-[#13110F] hover:bg-[#F0EEEB]">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
