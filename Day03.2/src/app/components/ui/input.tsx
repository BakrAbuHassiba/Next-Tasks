import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "w-full rounded-lg border bg-transparent px-4 py-2 text-base shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
