import { NavLink } from "react-router";
import { Home01Icon, GridViewIcon, Package01Icon, UserIcon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Icon } from "./Icon";

const tabs: { to: string; label: string; icon: IconSvgElement }[] = [
  { to: "/", label: "Home", icon: Home01Icon },
  { to: "/catalog", label: "Products", icon: GridViewIcon },
  { to: "/orders", label: "Orders", icon: Package01Icon },
  { to: "/account", label: "Account", icon: UserIcon },
];

export function BottomNav() {
  return (
    <nav className="bg-card border-t border-border pb-[env(safe-area-inset-bottom)] z-50">
      <ul className="flex items-stretch justify-around h-16">
        {tabs.map((t) => (
          <li key={t.to} className="flex-1">
            <NavLink
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                `h-full flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <div className="relative">
                <Icon icon={t.icon} size={22} />
              </div>
              <span>{t.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
