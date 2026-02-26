import * as React from "react";
import { cn } from "@/lib/utils";

function SectionTitle({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-lg font-medium mb-6", className)}
      {...props}
    />
  );
}

export { SectionTitle };
