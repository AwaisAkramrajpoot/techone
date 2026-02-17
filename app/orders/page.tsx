'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Calendar,
  Download,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';

const attendanceRecords = [
  {
    id: 1,
    employee: 'John Smith',
    department: 'Engineering',
    date: '2024-02-17',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    hours: '9.0',
    status: 'present',
  },
  {
    id: 2,
    employee: 'Sarah Johnson',
    department: 'Marketing',
    date: '2024-02-17',
    checkIn: '08:45 AM',
    checkOut: '05:45 PM',
    hours: '9.0',
    status: 'present',
  },
  {
    id: 3,
    employee: 'Michael Brown',
    department: 'Sales',
    date: '2024-02-17',
    checkIn: '09:15 AM',
    checkOut: '06:15 PM',
    hours: '9.0',
    status: 'late',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    department: 'HR',
    date: '2024-02-17',
    checkIn: '-',
    checkOut: '-',
    hours: '0',
    status: 'absent',
  },
  {
    id: 5,
    employee: 'David Wilson',
    department: 'Finance',
    date: '2024-02-17',
    checkIn: '09:00 AM',
    checkOut: '02:00 PM',
    hours: '5.0',
    status: 'half-day',
  },
  {
    id: 6,
    employee: 'Jessica Martinez',
    department: 'Design',
    date: '2024-02-17',
    checkIn: '08:30 AM',
    checkOut: '05:30 PM',
    hours: '9.0',
    status: 'present',
  },
  {
    id: 7,
    employee: 'James Taylor',
    department: 'Engineering',
    date: '2024-02-17',
    checkIn: '10:00 AM',
    checkOut: '07:00 PM',
    hours: '9.0',
    status: 'late',
  },
  {
    id: 8,
    employee: 'Linda Anderson',
    department: 'Marketing',
    date: '2024-02-17',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    hours: '9.0',
    status: 'present',
  },
];

export default function OrdersPage() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredRecords = attendanceRecords.filter((record) => {
    return filterStatus === 'all' || record.status === filterStatus;
  });

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecords = filteredRecords.slice(startIndex, endIndex);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'present':
        return {
          color: 'bg-green-500 hover:bg-green-600',
          icon: CheckCircle2,
        };
      case 'absent':
        return {
          color: 'bg-red-500 hover:bg-red-600',
          icon: XCircle,
        };
      case 'late':
        return {
          color: 'bg-amber-500 hover:bg-amber-600 text-white',
          icon: AlertCircle,
        };
      case 'half-day':
        return {
          color: 'bg-blue-500 hover:bg-blue-600',
          icon: Clock,
        };
      default:
        return {
          color: 'bg-slate-500 hover:bg-slate-600',
          icon: Clock,
        };
    }
  };

  const stats = [
    { label: 'Present', value: attendanceRecords.filter(r => r.status === 'present').length, color: 'text-green-600' },
    { label: 'Absent', value: attendanceRecords.filter(r => r.status === 'absent').length, color: 'text-red-600' },
    { label: 'Late', value: attendanceRecords.filter(r => r.status === 'late').length, color: 'text-amber-600' },
    { label: 'Half Day', value: attendanceRecords.filter(r => r.status === 'half-day').length, color: 'text-blue-600' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Attendance Records</h1>
            <p className="text-slate-600 mt-2">
              Track and manage employee attendance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="text-sm text-slate-600 mb-1">{stat.label}</div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Today's Attendance</CardTitle>
                  <CardDescription className="mt-1">
                    February 17, 2024 - {filteredRecords.length} records
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Select Date
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="present">Present</SelectItem>
                    <SelectItem value="absent">Absent</SelectItem>
                    <SelectItem value="late">Late</SelectItem>
                    <SelectItem value="half-day">Half Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Check In</TableHead>
                      <TableHead>Check Out</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentRecords.map((record) => {
                      const statusConfig = getStatusConfig(record.status);
                      const StatusIcon = statusConfig.icon;

                      return (
                        <TableRow key={record.id}>
                          <TableCell className="font-medium">
                            {record.employee}
                          </TableCell>
                          <TableCell>{record.department}</TableCell>
                          <TableCell className="text-slate-600">
                            {record.date}
                          </TableCell>
                          <TableCell>
                            <span className={record.checkIn === '-' ? 'text-slate-400' : ''}>
                              {record.checkIn}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={record.checkOut === '-' ? 'text-slate-400' : ''}>
                              {record.checkOut}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium">{record.hours}h</span>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="default"
                              className={`${statusConfig.color} flex items-center gap-1 w-fit`}
                            >
                              <StatusIcon className="h-3 w-3" />
                              {record.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                      {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i + 1}>
                          <PaginationLink
                            onClick={() => setCurrentPage(i + 1)}
                            isActive={currentPage === i + 1}
                            className="cursor-pointer"
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
