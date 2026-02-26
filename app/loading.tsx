import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
      <Skeleton className="h-[280px] rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2" />
      <Skeleton className="h-[280px] rounded-lg" />
      <Skeleton className="h-[280px] rounded-lg" />
      <Skeleton className="h-[280px] rounded-lg" />
      <Skeleton className="h-[280px] rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2" />
      <Skeleton className="h-[280px] rounded-lg" />
    </div>
  );
}
