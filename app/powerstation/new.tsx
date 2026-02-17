'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { ArrowLeft } from 'lucide-react';

export default function NewDepartmentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    manager: '',
    budget: '',
    color: 'bg-blue-500',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/powerstation');
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => router.push('/powerstation')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Departments
          </Button>

          <div className="max-w-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">
                Create New Department
              </h1>
              <p className="text-slate-600 mt-2">
                Add a new department to your organization
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Department Information</CardTitle>
                <CardDescription>
                  Fill in the details for the new department
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Department Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Engineering"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of the department"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="manager">Department Manager</Label>
                    <Select
                      value={formData.manager}
                      onValueChange={(value) =>
                        setFormData({ ...formData, manager: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a manager" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Smith</SelectItem>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="michael">Michael Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Annual Budget</Label>
                    <Input
                      id="budget"
                      type="text"
                      placeholder="e.g., $1,000,000"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      Create Department
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.push('/powerstation')}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
            </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
