import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function MetricCard({ title, value, trend, trendUp, className }: MetricCardProps) {
  return (
    <Card className={cn("bg-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground font-mono tracking-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-mono tracking-tight">{value}</div>
        {trend && (
          <p className={cn("text-xs mt-1 font-mono flex items-center gap-1", trendUp ? "text-emerald-500" : "text-red-500")}>
            {trendUp ? "↗" : "↘"} {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
