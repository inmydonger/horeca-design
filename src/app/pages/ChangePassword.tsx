import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DetailHeader } from "../components/DetailHeader";
import { toast } from "sonner";

export default function ChangePassword() {
  const [cur, setCur] = useState("");
  const [n, setN] = useState("");
  const [c, setC] = useState("");

  return (
    <div className="min-h-screen bg-white pb-4">
      <DetailHeader title="Change Password" />
      <form
        className="px-4 pt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!n || n !== c) {
            toast.error("Passwords don't match");
            return;
          }
          toast.success("Password updated");
          setCur(""); setN(""); setC("");
        }}
      >
        <Field label="Current Password" value={cur} onChange={setCur} />
        <Field label="New Password" value={n} onChange={setN} />
        <Field label="Confirm New Password" value={c} onChange={setC} />
        <Button type="submit" className="w-full mt-2">Update Password</Button>
      </form>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm">{label}</Label>
      <Input type="password" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
