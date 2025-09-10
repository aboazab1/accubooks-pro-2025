import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Building2, Calendar, Award } from "lucide-react";

/**
 * Profile Page Component
 * 
 * User profile management for AccuBooks Pro 2025
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
const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and account settings
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          AccuBooks Pro 2025
        </Badge>
      </div>

      <div className="grid gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value="Abdelrahman" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value="Adel Alazab" disabled />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value="abdelrahmanalazab4@gmail.com" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value="+966 57 353 2943" disabled />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value="Riyadh, Saudi Arabia" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Professional Information
            </CardTitle>
            <CardDescription>
              Your professional background and expertise
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Role</Label>
                <Input value="Full Stack Developer" disabled />
              </div>
              <div className="space-y-2">
                <Label>Experience</Label>
                <Input value="2+ Years" disabled />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Specialization</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Education & Certifications
            </CardTitle>
            <CardDescription>
              Your educational background and professional certifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-medium">B.Sc. Computer Science (Software Engineering)</h4>
                  <p className="text-sm text-muted-foreground">MSA University, Egypt & University of Greenwich, UK</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-medium">AWS Academy Graduate - Cloud Foundations</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services (2022)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact & Links
            </CardTitle>
            <CardDescription>
              Your professional contact information and social links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>GitHub</Label>
                <Input value="github.com/aboazab1" disabled />
              </div>
              <div className="space-y-2">
                <Label>LinkedIn</Label>
                <Input value="linkedin.com/in/abdelrahman-alazab-063251378" disabled />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © 2025 Abdelrahman Adel Alazab - All Rights Reserved
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" size="sm">
                  <Building2 className="h-4 w-4 mr-2" />
                  Portfolio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

