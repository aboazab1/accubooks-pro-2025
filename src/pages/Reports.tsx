import { useState } from "react";
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, FileText, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Reports Page Component
 * 
 * Generates comprehensive financial reports including profit/loss,
 * expense analysis, and tax reports for the AccuBooks Pro system
 * Created by: Abdelrahman Adel Alazab
 */

interface ReportData {
  period: string;
  revenue: number;
  expenses: number;
  profit: number;
  taxDeductible: number;
}

const mockReportData: ReportData[] = [
  { period: "2024-01", revenue: 45000, expenses: 12000, profit: 33000, taxDeductible: 8000 },
  { period: "2023-12", revenue: 42000, expenses: 15000, profit: 27000, taxDeductible: 9000 },
  { period: "2023-11", revenue: 38000, expenses: 11000, profit: 27000, taxDeductible: 7000 },
  { period: "2023-10", revenue: 41000, expenses: 13000, profit: 28000, taxDeductible: 8500 },
  { period: "2023-09", revenue: 35000, expenses: 10000, profit: 25000, taxDeductible: 6500 },
  { period: "2023-08", revenue: 39000, expenses: 14000, profit: 25000, taxDeductible: 9000 },
];

const expenseCategories = [
  { category: "Office Supplies", amount: 2500, percentage: 20.8 },
  { category: "Software Licenses", amount: 1800, percentage: 15.0 },
  { category: "Marketing", amount: 3200, percentage: 26.7 },
  { category: "Travel", amount: 1500, percentage: 12.5 },
  { category: "Utilities", amount: 2000, percentage: 16.7 },
  { category: "Professional Services", amount: 1000, percentage: 8.3 },
];

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024-01");
  const [reportType, setReportType] = useState("overview");

  const currentData = mockReportData.find(d => d.period === selectedPeriod) || mockReportData[0];

  const handleExportReport = (type: string) => {
    // In a real application, this would generate and download the report
    console.log(`Exporting ${type} report for ${selectedPeriod}`);
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-muted-foreground">
            Generate comprehensive financial reports and analytics.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {mockReportData.map((data) => (
                <SelectItem key={data.period} value={data.period}>
                  {new Date(data.period + "-01").toLocaleDateString("en-US", { 
                    year: "numeric", 
                    month: "long" 
                  })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => handleExportReport("pdf")}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentData.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentData.expenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              -8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentData.profit.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +22% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tax Deductible</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentData.taxDeductible.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((currentData.taxDeductible / currentData.expenses) * 100)}% of expenses
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Report Tabs */}
      <Tabs value={reportType} onValueChange={setReportType} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expense Analysis</TabsTrigger>
          <TabsTrigger value="tax">Tax Report</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profit & Loss Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-medium">${currentData.revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Expenses</span>
                    <span className="font-medium text-red-600">-${currentData.expenses.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Net Profit</span>
                    <span className="text-green-600">${currentData.profit.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profit Margin</span>
                      <span>{Math.round((currentData.profit / currentData.revenue) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(currentData.profit / currentData.revenue) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Expense Ratio</span>
                      <span>{Math.round((currentData.expenses / currentData.revenue) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-600 h-2 rounded-full" 
                        style={{ width: `${(currentData.expenses / currentData.revenue) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Tax Deductible</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseCategories.map((expense, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{expense.category}</TableCell>
                      <TableCell>${expense.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${expense.percentage}%` }}
                            ></div>
                          </div>
                          {expense.percentage}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {Math.random() > 0.3 ? "Yes" : "No"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Deduction Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Deductible Expenses</h4>
                    <div className="text-2xl font-bold text-green-600">
                      ${currentData.taxDeductible.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {Math.round((currentData.taxDeductible / currentData.expenses) * 100)}% of total expenses
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Estimated Tax Savings</h4>
                    <div className="text-2xl font-bold text-blue-600">
                      ${Math.round(currentData.taxDeductible * 0.25).toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on 25% tax rate
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>6-Month Financial Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Expenses</TableHead>
                    <TableHead>Profit</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockReportData.map((data, index) => {
                    const previousData = mockReportData[index + 1];
                    const growth = previousData 
                      ? Math.round(((data.profit - previousData.profit) / previousData.profit) * 100)
                      : 0;
                    
                    return (
                      <TableRow key={data.period}>
                        <TableCell className="font-medium">
                          {new Date(data.period + "-01").toLocaleDateString("en-US", { 
                            year: "numeric", 
                            month: "short" 
                          })}
                        </TableCell>
                        <TableCell>${data.revenue.toLocaleString()}</TableCell>
                        <TableCell>${data.expenses.toLocaleString()}</TableCell>
                        <TableCell>${data.profit.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={growth >= 0 ? "default" : "destructive"}>
                            {growth >= 0 ? "+" : ""}{growth}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


