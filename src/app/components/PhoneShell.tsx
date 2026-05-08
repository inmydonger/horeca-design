import { ReactNode } from "react";
import { Outlet, useLocation } from "react-router";
import { BottomNav } from "./BottomNav";

export function PhoneShell({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const hideNav = pathname === "/splash" || pathname === "/login" || pathname === "/cart" || /^\/catalog\/[^/]+$/.test(pathname) || pathname === "/checkout" || pathname === "/orders/confirmation";
  const showNav = !hideNav;
  return (
    <div className="min-h-dvh w-full flex items-stretch md:items-center justify-center bg-[#1C1917]">
      <div className="relative w-full max-w-[390px] h-dvh md:min-h-0 md:h-[844px] bg-background overflow-hidden md:rounded-[2.5rem] md:shadow-2xl md:border md:border-black/40 flex flex-col">
        <div className="flex-1 overflow-y-auto pt-[env(safe-area-inset-top)] flex flex-col">
          {children ?? <Outlet />}
        </div>
        {showNav && <BottomNav />}
      </div>
    </div>
  );
}