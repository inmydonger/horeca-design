import { useState } from "react";
import { useStore } from "../store";
import { Address } from "../../lib/mockData";
import { DetailHeader } from "../components/DetailHeader";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Badge } from "../components/ui/badge";
import { Icon } from "../components/Icon";
import { Delete02Icon, Edit02Icon, PlusSignIcon } from "@hugeicons/core-free-icons";

const empty: Omit<Address, "id"> = {
  label: "",
  street: "",
  postalCode: "",
  contactName: "",
  phone: "",
  isDefault: false,
};

export default function Addresses() {
  const { addresses, setAddresses, selectedAddressId, setSelectedAddressId } = useStore();
  const [editing, setEditing] = useState<Address | null>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(empty);

  const startAdd = () => {
    setEditing(null);
    setDraft(empty);
    setOpen(true);
  };
  const startEdit = (a: Address) => {
    setEditing(a);
    setDraft(a);
    setOpen(true);
  };
  const save = () => {
    if (!draft.label.trim() || !draft.street.trim()) return;
    let next: Address[];
    if (editing) {
      next = addresses.map((a) => (a.id === editing.id ? { ...editing, ...draft } : a));
    } else {
      const id = "addr-" + (addresses.length + 1) + "-" + Date.now();
      next = [...addresses, { ...draft, id }];
    }
    if (draft.isDefault) next = next.map((a) => ({ ...a, isDefault: a.id === (editing?.id ?? next[next.length - 1].id) }));
    setAddresses(next);
    setOpen(false);
  };
  const remove = (id: string) => {
    const next = addresses.filter((a) => a.id !== id);
    setAddresses(next);
    if (selectedAddressId === id && next[0]) setSelectedAddressId(next[0].id);
  };

  return (
    <div className="pb-4 min-h-screen bg-[#F7F7F7]">
      <DetailHeader title="Saved Addresses" />
      <div className="px-6 pt-6 space-y-4">
        {addresses.map((a) => (
          <div key={a.id} className="bg-white border border-[#E0DDDA] rounded-xl p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#111111] text-[15px]">{a.label}</span>
                {a.isDefault && <Badge className="bg-[#E8F5E9] text-[#2E7D32] border-transparent hover:bg-[#E8F5E9] rounded font-normal text-[11px] px-2 py-0">Default</Badge>}
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => startEdit(a)} className="p-1.5 text-muted-foreground hover:text-foreground">
                  <Icon icon={Edit02Icon} size={18} />
                </button>
                <button onClick={() => remove(a.id)} className="p-1.5 text-muted-foreground hover:text-destructive">
                  <Icon icon={Delete02Icon} size={18} />
                </button>
              </div>
            </div>
            <div className="text-[13px] text-muted-foreground mt-3">
              {a.contactName} · {a.phone}
            </div>
            <div className="text-[14px] text-[#111111] mt-1 leading-snug">
              {a.street}
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full h-10 border border-[#E0DDDA] text-[#111111] font-medium" onClick={startAdd}>
          <Icon icon={PlusSignIcon} size={18} className="mr-1" />
          Add New Address
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl max-h-[90dvh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{editing ? "Edit Address" : "New Address"}</SheetTitle>
          </SheetHeader>
          <div className="space-y-3 mt-4">
            <Field label="Label" value={draft.label} onChange={(v) => setDraft({ ...draft, label: v })} placeholder="Main Warehouse" />
            <Field label="Full Address" value={draft.street} onChange={(v) => setDraft({ ...draft, street: v })} placeholder="Street, district, city" />
            <Field label="Postal Code" value={draft.postalCode} onChange={(v) => setDraft({ ...draft, postalCode: v })} placeholder="12345" />
            <Field label="Contact Person" value={draft.contactName} onChange={(v) => setDraft({ ...draft, contactName: v })} placeholder="Name" />
            <Field label="Phone Number" value={draft.phone} onChange={(v) => setDraft({ ...draft, phone: v })} placeholder="+62 ..." />
            <label className="flex items-center gap-2 text-sm pt-2">
              <Checkbox checked={!!draft.isDefault} onCheckedChange={(c) => setDraft({ ...draft, isDefault: !!c })} />
              Set as default address
            </label>
            <Button className="w-full mt-2" onClick={save}>
              {editing ? "Save changes" : "Add address"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}
