"use client";

import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
  children: React.ReactNode;
  className?: string;
}

export function BackgroundLines({ children, className }: BackgroundLinesProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f40_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse-slow" />
        </div>
      </div>
      {children}
    </div>
  );
}