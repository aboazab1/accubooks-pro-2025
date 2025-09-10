import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Building2, User, Mail, Phone, MapPin, Globe, Save } from "lucide-react";

/**
 * Settings Page Component
 * 
 * Company and user configuration settings for AccuBooks Pro 2025
 * 
 * Created by: Abdelrahman Adel Alazab
 * Email: abdelrahmanalazab4@gmail.com
 * Phone: 0573532943
 * Location: Riyadh, Saudi Arabia
 * GitHub: github.com/aboazab1
 * LinkedIn: linkedin.com/in/abdelrahman-alazab-063251378
 * 
 * © 2025 AccuBooks Pro - All Rights Reserved
 */
const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your company information and application preferences
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          AccuBooks Pro 2025
        </Badge>
      </div>

      <div className="grid gap-6">
        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Company Information
            </CardTitle>
            <CardDescription>
              Update your company details and business information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-type">Business Type</Label>
                <Input id="business-type" placeholder="e.g., LLC, Corporation" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company-address">Business Address</Label>
              <Input id="company-address" placeholder="Enter business address" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tax-id">Tax ID</Label>
                <Input id="tax-id" placeholder="Enter tax identification number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              User Profile
            </CardTitle>
            <CardDescription>
              Manage your personal account settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="user-email">Email Address</Label>
              <Input id="user-email" type="email" placeholder="Enter email address" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="user-phone">Phone Number</Label>
              <Input id="user-phone" placeholder="Enter phone number" />
            </div>
          </CardContent>
        </Card>

        {/* Application Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Application Settings
            </CardTitle>
            <CardDescription>
              Configure application preferences and defaults
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Input id="currency" placeholder="USD" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" placeholder="UTC" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Input id="date-format" placeholder="MM/DD/YYYY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoice-prefix">Invoice Prefix</Label>
                <Input id="invoice-prefix" placeholder="INV-" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Developer Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Developer Information
            </CardTitle>
            <CardDescription>
              AccuBooks Pro 2025 - Created by Abdelrahman Adel Alazab
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Developer</Label>
                <Input value="Abdelrahman Adel Alazab" disabled />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value="Riyadh, Saudi Arabia" disabled />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value="abdelrahmanalazab4@gmail.com" disabled />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input value="+966 57 353 2943" disabled />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © 2025 AccuBooks Pro - All Rights Reserved
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
