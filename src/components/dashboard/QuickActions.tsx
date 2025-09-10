import { Plus, FileText, Receipt, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Create Invoice",
    description: "Generate a new invoice",
    icon: FileText,
    href: "/invoices",
    color: "bg-primary hover:bg-primary/90",
  },
  {
    title: "Add Expense",
    description: "Record a new expense",
    icon: Receipt,
    href: "/expenses",
    color: "bg-destructive hover:bg-destructive/90",
  },
  {
    title: "New Client",
    description: "Add a new client",
    icon: Users,
    href: "/clients",
    color: "bg-success hover:bg-success/90",
  },
  {
    title: "View Reports",
    description: "Generate financial reports",
    icon: BarChart3,
    href: "/reports",
    color: "bg-pending hover:bg-pending/90",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-3 hover:shadow-md transition-all"
                asChild
              >
                <Link to={action.href}>
                  <div className={`p-3 rounded-lg ${action.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}