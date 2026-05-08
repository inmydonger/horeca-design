import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

export function Icon({
  icon,
  size = 20,
  className,
  strokeWidth = 1.75,
}: {
  icon: IconSvgElement;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return <HugeiconsIcon icon={icon} size={size} strokeWidth={strokeWidth} className={className} />;
}
