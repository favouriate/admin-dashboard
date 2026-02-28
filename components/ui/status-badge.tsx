import { cn } from "@/lib/utils";

export type PaymentStatus = "pending" | "processing" | "success" | "failed";

const statusClassMap: Record<PaymentStatus, string> = {
  pending: "bg-yellow-500/40 text-yellow-900 dark:text-yellow-100",
  processing: "bg-muted text-muted-foreground",
  success: "bg-green-500/40 text-green-900 dark:text-green-100",
  failed: "bg-destructive/90 text-destructive-foreground",
};

interface StatusBadgeProps {
  status: PaymentStatus | string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const normalizedStatus = status as PaymentStatus;
  const statusClasses =
    statusClassMap[normalizedStatus] ?? "bg-muted text-muted-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium w-max",
        statusClasses,
        className
      )}
    >
      {status}
    </span>
  );
}
