'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  ClipboardCheck,
  DollarSign,
  FileText,
  TrendingUp,
  UserPlus,
  FileBarChart,
  Calendar,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Employees',
    value: '1,234',
    change: '+12%',
    icon: Users,
    color: 'bg-blue-500',
    trend: 'up',
  },
  {
    title: 'Total Attendance',
    value: '98.5%',
    change: '+2.1%',
    icon: ClipboardCheck,
    color: 'bg-green-500',
    trend: 'up',
  },
  {
    title: 'Total Payroll',
    value: '$842,430',
    change: '+8%',
    icon: DollarSign,
    color: 'bg-amber-500',
    trend: 'up',
  },
  {
    title: 'Pending Leaves',
    value: '24',
    change: '-5%',
    icon: FileText,
    color: 'bg-red-500',
    trend: 'down',
  },
];

const recentActivities = [
  {
    id: 1,
    employee: 'John Smith',
    action: 'Applied for leave',
    department: 'Engineering',
    time: '2 hours ago',
    status: 'pending',
  },
  {
    id: 2,
    employee: 'Sarah Johnson',
    action: 'Checked in',
    department: 'Marketing',
    time: '3 hours ago',
    status: 'approved',
  },
  {
    id: 3,
    employee: 'Michael Brown',
    action: 'Submitted timesheet',
    department: 'Sales',
    time: '5 hours ago',
    status: 'approved',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    action: 'Requested overtime',
    department: 'HR',
    time: '1 day ago',
    status: 'pending',
  },
  {
    id: 5,
    employee: 'David Wilson',
    action: 'Updated profile',
    department: 'Finance',
    time: '2 days ago',
    status: 'completed',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-2">
              Welcome back! Here's what's happening with your organization today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`${stat.color} p-3 rounded-xl text-white shadow-md`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div
                        className={`flex items-center text-sm font-medium ${
                          stat.trend === 'up'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        <TrendingUp
                          className={`h-4 w-4 mr-1 ${
                            stat.trend === 'down' && 'rotate-180'
                          }`}
                        />
                        {stat.change}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-slate-600">{stat.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <Button
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <UserPlus className="h-8 w-8" />
              <span className="text-lg font-semibold">Add Employee</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <DollarSign className="h-8 w-8" />
              <span className="text-lg font-semibold">Generate Payroll</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <FileBarChart className="h-8 w-8" />
              <span className="text-lg font-semibold">View Reports</span>
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Recent Activities</CardTitle>
                  <CardDescription className="mt-1">
                    Latest updates from your organization
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">
                        {activity.employee}
                      </TableCell>
                      <TableCell>{activity.action}</TableCell>
                      <TableCell>{activity.department}</TableCell>
                      <TableCell className="text-slate-500">
                        {activity.time}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            activity.status === 'approved'
                              ? 'default'
                              : activity.status === 'pending'
                              ? 'secondary'
                              : 'outline'
                          }
                          className={
                            activity.status === 'approved'
                              ? 'bg-green-500 hover:bg-green-600'
                              : activity.status === 'pending'
                              ? 'bg-amber-500 hover:bg-amber-600 text-white'
                              : ''
                          }
                        >
                          {activity.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
