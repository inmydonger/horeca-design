import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "./Icon";

export interface DetailHeaderProps {
  title: string;
  right?: ReactNode;
  onBack?: () => void;
  hideBack?: boolean;
}

export function DetailHeader({ title, right, onBack, hideBack }: DetailHeaderProps) {
  const nav = useNavigate();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      nav(-1);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E0DDDA] h-14 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {!hideBack && (
          <button 
            onClick={handleBack} 
            className="-ml-1 p-1.5 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
          >
            <Icon icon={ArrowLeft01Icon} size={24} />
          </button>
        )}
        <h1 className="text-[17px] font-medium text-foreground">{title}</h1>
      </div>
      {right && <div>{right}</div>}
    </header>
  );
}
