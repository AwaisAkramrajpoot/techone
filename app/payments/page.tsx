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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DollarSign,
  Download,
  Filter,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const payrollData = [
  {
    id: 1,
    employee: 'John Smith',
    department: 'Engineering',
    position: 'Senior Developer',
    basicSalary: '$8,500',
    bonus: '$1,200',
    deductions: '$850',
    netSalary: '$8,850',
    status: 'paid',
    date: '2024-02-01',
  },
  {
    id: 2,
    employee: 'Sarah Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    basicSalary: '$7,200',
    bonus: '$900',
    deductions: '$720',
    netSalary: '$7,380',
    status: 'paid',
    date: '2024-02-01',
  },
  {
    id: 3,
    employee: 'Michael Brown',
    department: 'Sales',
    position: 'Sales Executive',
    basicSalary: '$6,800',
    bonus: '$1,500',
    deductions: '$680',
    netSalary: '$7,620',
    status: 'pending',
    date: '2024-02-01',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    department: 'HR',
    position: 'HR Specialist',
    basicSalary: '$5,500',
    bonus: '$400',
    deductions: '$550',
    netSalary: '$5,350',
    status: 'paid',
    date: '2024-02-01',
  },
  {
    id: 5,
    employee: 'David Wilson',
    department: 'Finance',
    position: 'Financial Analyst',
    basicSalary: '$7,800',
    bonus: '$800',
    deductions: '$780',
    netSalary: '$7,820',
    status: 'pending',
    date: '2024-02-01',
  },
  {
    id: 6,
    employee: 'Jessica Martinez',
    department: 'Design',
    position: 'Product Designer',
    basicSalary: '$6,500',
    bonus: '$600',
    deductions: '$650',
    netSalary: '$6,450',
    status: 'paid',
    date: '2024-02-01',
  },
];

export default function PaymentsPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const totalPayroll = payrollData.reduce((sum, item) => {
    const netSalary = parseFloat(item.netSalary.replace(/[$,]/g, ''));
    return sum + netSalary;
  }, 0);

  const paidCount = payrollData.filter((item) => item.status === 'paid').length;
  const pendingCount = payrollData.filter(
    (item) => item.status === 'pending'
  ).length;

  return (
    <div className="">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Payroll Management</h1>
            <p className="text-slate-600 mt-2">
              Manage employee salaries and payment records
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-500 p-3 rounded-xl text-white shadow-md">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="flex items-center text-sm font-medium text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +8%
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  ${(totalPayroll / 1000).toFixed(1)}K
                </h3>
                <p className="text-sm text-slate-600">Total Payroll</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-500 p-3 rounded-xl text-white shadow-md">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {paidCount}
                </h3>
                <p className="text-sm text-slate-600">Payments Completed</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-amber-500 p-3 rounded-xl text-white shadow-md">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {pendingCount}
                </h3>
                <p className="text-sm text-slate-600">Pending Payments</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-500 p-3 rounded-xl text-white shadow-md">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {payrollData.length}
                </h3>
                <p className="text-sm text-slate-600">Total Employees</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Salary Records</CardTitle>
                  <CardDescription className="mt-1">
                    February 2024 - {payrollData.length} employees
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select defaultValue="february">
                    <SelectTrigger className="w-[180px]">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="february">February 2024</SelectItem>
                      <SelectItem value="january">January 2024</SelectItem>
                      <SelectItem value="december">December 2023</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Basic Salary</TableHead>
                      <TableHead>Bonus</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Salary</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payrollData.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">
                          {record.employee}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {record.position}
                        </TableCell>
                        <TableCell>{record.department}</TableCell>
                        <TableCell className="font-medium">
                          {record.basicSalary}
                        </TableCell>
                        <TableCell className="text-green-600">
                          {record.bonus}
                        </TableCell>
                        <TableCell className="text-red-600">
                          {record.deductions}
                        </TableCell>
                        <TableCell className="font-bold">
                          {record.netSalary}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="default"
                            className={
                              record.status === 'paid'
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-amber-500 hover:bg-amber-600 text-white'
                            }
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between mt-6 p-4 bg-slate-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-slate-600" />
                  <span className="font-medium text-slate-900">Total Net Payroll:</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  ${totalPayroll.toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
