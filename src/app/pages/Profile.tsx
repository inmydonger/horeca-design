import { user } from "../../lib/mockData";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DetailHeader } from "../components/DetailHeader";

export default function Profile() {
  return (
    <div className="pb-4">
      <DetailHeader title="Profile" />
      <div className="p-6 space-y-4">
        <Field label="Name" value={user.name} />
        <Field label="Email" value={user.email} />
        <Field label="User ID" value={user.userId} />
        <Field label="Industry" value="Catering & Restaurants" />
        <Field label="Tax ID (NPWP)" value="01.234.567.8-901.000" />
        <p className="text-xs text-muted-foreground pt-2">
          Profile fields are read-only. Contact your account manager to update company details.
        </p>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} readOnly />
    </div>
  );
}
