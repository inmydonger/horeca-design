import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "./Icon";

export function PageHeader({ title, right, back = true }: { title: string; right?: ReactNode; back?: boolean }) {
  const nav = useNavigate();
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-4 h-14 flex items-center gap-3">
      {back && (
        <button onClick={() => nav(-1)} className="-ml-2 p-2 rounded-full hover:bg-muted">
          <Icon icon={ArrowLeft01Icon} size={22} />
        </button>
      )}
      <h1 className="flex-1 truncate">{title}</h1>
      {right}
    </header>
  );
}
