'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Users,
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  Plus,
  TrendingUp,
} from 'lucide-react';

const departments = [
  {
    id: 1,
    name: 'Engineering',
    description: 'Software development and technical operations',
    employeeCount: 45,
    manager: 'John Smith',
    budget: '$1.2M',
    status: 'active',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Marketing',
    description: 'Brand management and digital marketing',
    employeeCount: 28,
    manager: 'Sarah Johnson',
    budget: '$800K',
    status: 'active',
    color: 'bg-pink-500',
  },
  {
    id: 3,
    name: 'Sales',
    description: 'Business development and client relations',
    employeeCount: 35,
    manager: 'Michael Brown',
    budget: '$950K',
    status: 'active',
    color: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Human Resources',
    description: 'Talent management and employee relations',
    employeeCount: 12,
    manager: 'Emily Davis',
    budget: '$400K',
    status: 'active',
    color: 'bg-purple-500',
  },
  {
    id: 5,
    name: 'Finance',
    description: 'Financial planning and accounting',
    employeeCount: 18,
    manager: 'David Wilson',
    budget: '$600K',
    status: 'active',
    color: 'bg-amber-500',
  },
  {
    id: 6,
    name: 'Design',
    description: 'Product and UX/UI design',
    employeeCount: 15,
    manager: 'Jessica Martinez',
    budget: '$500K',
    status: 'active',
    color: 'bg-rose-500',
  },
];

export default function PowerStationPage() {
  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employeeCount, 0);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
  <div className="flex min-h-screen bg-slate-100">
    <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

    <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
      <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Departments</h1>
                <p className="text-slate-600 mt-2">
                  Manage organizational departments and teams
                </p>
              </div>
              <Button size="lg">
                <Plus className="h-5 w-5 mr-2" />
                Create Department
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Total Departments</p>
                    <p className="text-2xl font-bold text-slate-900">{departments.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Total Employees</p>
                    <p className="text-2xl font-bold text-slate-900">{totalEmployees}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Active Status</p>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <Card
                key={department.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`${department.color} h-12 w-12 rounded-xl flex items-center justify-center`}
                      >
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{department.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {department.employeeCount} employees
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    {department.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Manager</span>
                      <span className="font-medium text-slate-900">
                        {department.manager}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Budget</span>
                      <span className="font-medium text-slate-900">
                        {department.budget}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Status</span>
                      <Badge
                        variant="default"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        {department.status}
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    View Employees
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
