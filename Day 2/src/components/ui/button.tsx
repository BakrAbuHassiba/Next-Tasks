import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-black via-red-900 to-red-700 text-red-100 hover:brightness-110 active:brightness-90 shadow-md hover:shadow-lg",
        destructive:
          "bg-red-800 text-red-100 hover:bg-red-900 active:bg-red-950 shadow-md hover:shadow-lg",
        outline:
          "border border-red-700 bg-transparent text-red-100 hover:bg-red-800 hover:text-red-50",
        secondary:
          "bg-red-900 text-red-200 hover:bg-red-800 shadow-sm hover:shadow-md",
        ghost:
          "bg-transparent text-red-200 hover:bg-red-900 hover:text-red-50",
        link:
          "text-red-400 underline-offset-4 hover:underline hover:text-red-200",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
