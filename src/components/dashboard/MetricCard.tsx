import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  type?: "revenue" | "expense" | "profit" | "pending";
}

export function MetricCard({ title, value, change, trend, type = "revenue" }: MetricCardProps) {
  const getTrendColor = () => {
    if (!trend) return "";
    return trend === "up" ? "text-success" : "text-destructive";
  };

  const getValueColor = () => {
    switch (type) {
      case "revenue":
        return "text-success";
      case "expense":
        return "text-destructive";
      case "profit":
        return "text-success";
      case "pending":
        return "text-pending";
      default:
        return "text-foreground";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${getValueColor()}`}>
            {value}
          </div>
          {change && trend && (
            <Badge 
              variant="secondary" 
              className={`${getTrendColor()} bg-transparent`}
            >
              {trend === "up" ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {change}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}