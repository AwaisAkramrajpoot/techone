'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Search,
  UserPlus,
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  Filter,
  Download,
} from 'lucide-react';

const employees = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    role: 'Software Engineer',
    department: 'Engineering',
    status: 'active',
    avatar: '',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Marketing Manager',
    department: 'Marketing',
    status: 'active',
    avatar: '',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@company.com',
    role: 'Sales Executive',
    department: 'Sales',
    status: 'active',
    avatar: '',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    role: 'HR Specialist',
    department: 'HR',
    status: 'on-leave',
    avatar: '',
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    role: 'Financial Analyst',
    department: 'Finance',
    status: 'active',
    avatar: '',
  },
  {
    id: 6,
    name: 'Jessica Martinez',
    email: 'jessica.martinez@company.com',
    role: 'Product Designer',
    department: 'Design',
    status: 'active',
    avatar: '',
  },
  {
    id: 7,
    name: 'James Taylor',
    email: 'james.taylor@company.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    status: 'inactive',
    avatar: '',
  },
  {
    id: 8,
    name: 'Linda Anderson',
    email: 'linda.anderson@company.com',
    role: 'Content Writer',
    department: 'Marketing',
    status: 'active',
    avatar: '',
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole =
      filterRole === 'all' || employee.department === filterRole;
    return matchesSearch && matchesRole;
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 hover:bg-green-600';
      case 'on-leave':
        return 'bg-amber-500 hover:bg-amber-600 text-white';
      case 'inactive':
        return 'bg-slate-500 hover:bg-slate-600';
      default:
        return 'bg-slate-500 hover:bg-slate-600';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Employees</h1>
            <p className="text-slate-600 mt-2">
              Manage your organization's employee records
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Employee Directory</CardTitle>
                  <CardDescription className="mt-1">
                    {filteredEmployees.length} total employees
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Employee
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search employees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredEmployees.length > 0 ? (
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEmployees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={employee.avatar} />
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                                  {getInitials(employee.name)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{employee.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-600">
                            {employee.email}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{employee.role}</Badge>
                          </TableCell>
                          <TableCell>{employee.department}</TableCell>
                          <TableCell>
                            <Badge
                              variant="default"
                              className={getStatusColor(employee.status)}
                            >
                              {employee.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
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
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <Search className="h-12 w-12 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    No employees found
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button variant="outline" onClick={() => { setSearchQuery(''); setFilterRole('all'); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
