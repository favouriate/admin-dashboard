import * as React from "react";
import { cn } from "@/lib/utils";

type DashboardCardProps = React.ComponentProps<"div"> & {
  colSpan?: "default" | "wide";
};

function DashboardCard({
  className,
  colSpan = "default",
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-primary-foreground p-4 rounded-lg",
        colSpan === "wide" &&
          "lg:col-span-2 xl:col-span-1 2xl:col-span-2",
        className
      )}
      {...props}
    />
  );
}

export { DashboardCard };
