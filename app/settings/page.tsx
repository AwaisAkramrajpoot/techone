'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  User,
  Mail,
  Building2,
  Shield,
  Bell,
  Globe,
  Database,
  Key,
  Trash2,
  Camera,
} from 'lucide-react';

export default function SettingsPage() {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-2">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="max-w-4xl space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Information
                </CardTitle>
                <CardDescription>
                  Update your personal information and profile details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Profile Picture</h3>
                    <p className="text-sm text-slate-600">
                      JPG, PNG or GIF, max 5MB
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      defaultValue="John Doe"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@company.com"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administration</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security
                </CardTitle>
                <CardDescription>
                  Manage your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Key className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Password</p>
                      <p className="text-sm text-slate-600">
                        Last changed 3 months ago
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setChangePasswordOpen(true)}
                  >
                    Change Password
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg border-red-200 bg-red-50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Trash2 className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-red-900">Delete Account</p>
                      <p className="text-sm text-red-700">
                        Permanently delete your account and all data
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => setDeleteAccountOpen(true)}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Configure how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-slate-600">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-slate-600">
                      Receive push notifications on your device
                    </p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-slate-600">
                      Receive important alerts via SMS
                    </p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, sms: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Preferences
                </CardTitle>
                <CardDescription>
                  Customize your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Default View</Label>
                  <Select defaultValue="grid">
                    <SelectTrigger>
                      <SelectValue placeholder="Select view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid View</SelectItem>
                      <SelectItem value="list">List View</SelectItem>
                      <SelectItem value="compact">Compact View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                      <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                      <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                      <SelectItem value="cet">Central Europe (GMT+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Storage Usage
                </CardTitle>
                <CardDescription>
                  Monitor your storage usage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">4.2 GB used of 10 GB</span>
                    <span className="text-sm text-slate-600">42%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600">Documents</p>
                    <p className="font-medium">1.8 GB</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Images</p>
                    <p className="font-medium">1.2 GB</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Videos</p>
                    <p className="font-medium">0.9 GB</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Other</p>
                    <p className="font-medium">0.3 GB</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Manage Storage
                </Button>
            </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Dialog open={changePasswordOpen} onOpenChange={setChangePasswordOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Enter your current password and choose a new one
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm New Password</Label>
              <Input id="confirm" type="password" />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setChangePasswordOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setChangePasswordOpen(false)}>
              Update Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteAccountOpen} onOpenChange={setDeleteAccountOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove all your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setDeleteAccountOpen(false)}
            >
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
