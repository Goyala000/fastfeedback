import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

export default function DashboardPage() {
  const auth = useAuth();

  if (!auth) {
    return "Loading...";
  }
  return <EmptyState />;
}
