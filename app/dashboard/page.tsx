'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ClipboardCheck, DollarSign, FileBarChart, FileText, Users } from 'lucide-react';

const overviewCards = [
  {
    title: 'Total Employees',
    value: '5',
    subtitle: 'Currently hired',
    icon: Users,
  },
  {
    title: 'Present Today',
    value: '0',
    subtitle: 'Out of 5',
    icon: ClipboardCheck,
  },
  {
    title: 'On Leave',
    value: '1',
    subtitle: 'Currently away',
    icon: FileText,
  },
  {
    title: 'Overtime Hours',
    value: '0',
    subtitle: "Today's total",
    icon: DollarSign,
  },
  {
    title: 'Upcoming Holidays',
    value: '0',
    subtitle: 'This year',
    icon: Calendar,
  },
  {
    title: 'Pending applications',
    value: '1',
    subtitle: 'Awaiting approval',
    icon: FileBarChart,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Employee Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Welcome back! Here&apos;s what&apos;s happening at your workplace today.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {overviewCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className="relative overflow-hidden border-0 bg-white shadow-sm"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          {card.title}
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-slate-900">
                          {card.value}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {card.subtitle}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F5FFF]/10 text-[#0F5FFF]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 border-0 bg-white shadow-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-semibold text-slate-900 sm:text-lg">
                    March 2021
                  </CardTitle>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Company calendar
                  </p>
                </div>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
                  Today
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[560px]">
                  <div className="grid grid-cols-7 text-center text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>
                  <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-slate-700">
                    {[27, 28].map((day) => (
                      <div
                        key={`prev-${day}`}
                        className="flex h-10 items-center justify-center rounded-md text-slate-300"
                      >
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className="flex h-10 items-center justify-center rounded-md border border-transparent text-slate-700 hover:border-[#0F5FFF]/40 hover:bg-[#0F5FFF]/5"
                      >
                        {day}
                      </div>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                      <div
                        key={`next-${day}`}
                        className="flex h-10 items-center justify-center rounded-md text-slate-300"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

