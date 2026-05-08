import { Link, useNavigate } from "react-router";
import { user } from "../../lib/mockData";
import { Icon } from "../components/Icon";
import { ArrowRight01Icon, BuildingIcon, InvoiceIcon, LockIcon, Location01Icon, Logout01Icon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { DetailHeader } from "../components/DetailHeader";

export default function Account() {
  const nav = useNavigate();
  const initials = user.company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  return (
    <div className="pb-4">
      <DetailHeader title="Account" hideBack />

      <div className="px-4 mt-2 flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="font-medium truncate">{user.company}</div>
          <div className="text-xs text-muted-foreground truncate">{user.email}</div>
          <div className="text-xs text-muted-foreground">ID: {user.userId}</div>
        </div>
      </div>

      <ul className="mt-6 mx-4 bg-card border border-border rounded-xl divide-y divide-border overflow-hidden">
        <Item to="/account/addresses" icon={Location01Icon} label="Saved Addresses" />
        <Item to="/account/profile" icon={BuildingIcon} label="Company Profile" />
        <Item to="/account/password" icon={LockIcon} label="Change Password" />
      </ul>

      <button
        onClick={() => nav("/login")}
        className="mt-6 mx-4 w-[calc(100%-2rem)] flex items-center justify-center gap-2 py-3 rounded-xl text-destructive border border-border bg-card text-sm"
      >
        <Icon icon={Logout01Icon} size={18} />
        Sign Out
      </button>
    </div>
  );
}

function Item({ to, icon, label }: { to: string; icon: IconSvgElement; label: string }) {
  return (
    <li>
      <Link to={to} className="flex items-center gap-3 px-4 py-3.5">
        <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground/70">
          <Icon icon={icon} size={18} />
        </span>
        <span className="flex-1 text-sm">{label}</span>
        <Icon icon={ArrowRight01Icon} size={18} className="text-muted-foreground" />
      </Link>
    </li>
  );
}
