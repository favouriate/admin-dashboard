import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-6 text-center">
      <p className="text-6xl font-bold text-muted-foreground/50 tracking-tight">
        404
      </p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground max-w-sm">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center gap-2">
          <Home className="h-4 w-4" />
          Back to dashboard
        </Link>
      </Button>
    </div>
  );
}
