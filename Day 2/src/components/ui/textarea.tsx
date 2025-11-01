import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea(props: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-[4rem] rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:bg-input/30",
        "md:text-sm",
        props.className
      )}
      {...props}
    />
  )
}

export { Textarea }
