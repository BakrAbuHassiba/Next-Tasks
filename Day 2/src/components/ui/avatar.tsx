import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: any) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-200",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ src }: { src?: string }) {
  return src ? <img src={src} alt="User" className="h-full w-full rounded-full" /> : null;
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}
