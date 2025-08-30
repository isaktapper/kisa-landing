import { cn } from "@/lib/utils";
import React from "react";

interface DotBackgroundProps {
  children: React.ReactNode;
  className?: string;
  dotSize?: string;
  dotColor?: string;
  backgroundColor?: string;
}

export function DotBackground({
  children,
  className,
  dotSize = "20px",
  dotColor,
  backgroundColor,
}: DotBackgroundProps) {
  return (
    <div className={cn("relative w-full", backgroundColor, className)}>
      {/* Dot pattern background */}
      <div
        className={cn(
          "absolute inset-0",
          `[background-size:${dotSize}_${dotSize}]`,
          dotColor || "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay for faded effect */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}