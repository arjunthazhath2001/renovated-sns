import React from "react";

interface DotBackgroundDemoProps {
  children: React.ReactNode;
}

export function DotBackgroundDemo({ children }: DotBackgroundDemoProps) {
  return (
    <div className="relative h-full w-full dark:bg-black bg-yellow-50 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-yellow-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Render children components inside */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
