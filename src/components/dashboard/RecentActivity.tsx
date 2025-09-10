import { FileText, Receipt, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ActivityItem {
  id: string;
  type: "invoice_paid" | "expense_added" | "client_added" | "invoice_created";
  title: string;
  subtitle: string;
  amount?: string;
  time: string;
  status?: "paid" | "pending" | "overdue";
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "invoice_paid",
    title: "Invoice #INV-001 paid",
    subtitle: "ABC Corporation",
    amount: "$2,500.00",
    time: "2 hours ago",
    status: "paid",
  },
  {
    id: "2",
    type: "expense_added",
    title: "Office supplies expense",
    subtitle: "Staples Inc.",
    amount: "$149.99",
    time: "4 hours ago",
  },
  {
    id: "3",
    type: "client_added",
    title: "New client added",
    subtitle: "XYZ Technologies",
    time: "1 day ago",
  },
  {
    id: "4",
    type: "invoice_created",
    title: "Invoice #INV-002 created",
    subtitle: "Smith & Associates",
    amount: "$1,850.00",
    time: "2 days ago",
    status: "pending",
  },
];

export function RecentActivity() {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "invoice_paid":
      case "invoice_created":
        return FileText;
      case "expense_added":
        return Receipt;
      case "client_added":
        return Users;
      default:
        return DollarSign;
    }
  };

  const getActivityColor = (type: ActivityItem["type"]) => {
    switch (type) {
      case "invoice_paid":
        return "bg-success text-success-foreground";
      case "expense_added":
        return "bg-destructive text-destructive-foreground";
      case "client_added":
        return "bg-primary text-primary-foreground";
      case "invoice_created":
        return "bg-pending text-pending-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    
    const variants = {
      paid: "bg-success/10 text-success",
      pending: "bg-pending/10 text-pending",
      overdue: "bg-destructive/10 text-destructive",
    };

    return (
      <Badge 
        variant="secondary" 
        className={variants[status as keyof typeof variants] || ""}
      >
        {status}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar className={`h-10 w-10 ${getActivityColor(activity.type)}`}>
                  <AvatarFallback className="bg-transparent">
                    <Icon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">
                      {activity.title}
                    </p>
                    {activity.amount && (
                      <span className="text-sm font-medium text-foreground">
                        {activity.amount}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground">
                      {activity.subtitle}
                    </p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}