"use client";

import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const stats = [
  {
    title: "Total Employees",
    value: "248",
    note: "12 new this month",
    noteColor: "text-[#0FAF78]",
  },
  {
    title: "Present Today",
    value: "218",
    note: "87.9% attendance",
    noteColor: "text-[#111827]",
  },
  {
    title: "On Leave",
    value: "15",
    note: "3 pending approval",
    noteColor: "text-[#E11D48]",
  },
  {
    title: "Field Employees",
    value: "42",
    note: "38 active",
    noteColor: "text-[#111827]",
  },
];

const filters = ["All Features", "Core HR", "Payroll", "Attendance", "Reports"];

const featureCards = [
  {
    title: "User Authentication & Security",
    headingIcons: ["/svgs/firstlock.svg"],
    points: [
      "Secure login with email/phone number",
      "Optional Two-Factor Authentication (2FA).",
      "Role-Based Access Control for Admin, Manager, and Employee.",
    ],
    tags: ["Workflow"],
    workflow: [
      "Employee registration via company email/phone.",
      "Login with password and optional 2FA.",
      "Role-specific dashboard access.",
    ],
  },
  {
    title: "Employee Data Managment",
    headingIcons: [
      "/svgs/firstemployee.svg",
        
    ],
    points: [
      "Centralized database for contact info, job title, department, salary, and shifts.",
      "HR capability to create or import profiles.",
      "Manager capability to update department, role, or salary info.",
      "Self-service portal for personal details.",
    ],
    tags: ["248 Records"],
  },
  {
    title: "Attendance Tracking and Shift Management",
    headingIcons: [
      "/svgs/timeclock.svg",
        
    ],
    points: [
      "Biometric integration (ZKTeco) with auto-sync.",
      "GPS tracking for field employees.",
      "Multiple shift scheduling (e.g., 9-5, 5-1am).",
      "Shift-based rules, such as off-days after night.",
    ],
    tags: ["95% Active", "42 GPS Tracked"],
  },
  {
    title: "Leave Management",
    headingIcons: [
      "/svgs/leavemanage.svg",
        
    ],
    points: [
      "Support for Casual, Sick, Earned, and Short Leave.",
      "Request submission with duration.",
      "Manager approval/rejection workflow.",
      "Leave balance display and auto-accrual based on company policies.",
    ],
    tags: ["15 Pending Requests", "Avg Balance 12 days"],
  },
  {
    title: "Payroll Processing",
    headingIcons: [
      "/svgs/payroll1.svg",
        
    ],
    points: [
      "Automated payroll based on attendance, shifts, overtime, and deductions.",
      "Tax and compliance handling with local regulation integration.",
      "Digital payslip generation within the app.",
      "Integration with accounting software.",
    ],
    tags: ["Total Payable PKR 4.56M"],
  },
  {
    title: "Daily, Weekly, and Monthly Reports",
    headingIcons: [
      "/svgs/monthlyreport.svg",
        
    ],
    points: [
      "Real-time reports for daily attendance, late arrivals, and absences.",
      "Trend analysis via weekly and monthly aggregate reports.",
      "Exportable formats (PDF or Excel).",
      "Monthly Payslip/Leave Summary.",
    ],
    tags: ["24 Reports Generated"],
  },
  {
    title: "Performance Reviews and Appraisals",
    headingIcons: [
      "/svgs/Appraisals.svg",
        
    ],
    points: [
      "Role-based performance metrics.",
      "Quarterly or annual review cycles.",
      "Feedback and goal tracking.",
      "Performance bonus integration with payroll.",
    ],
    tags: ["34 Reviews Pending"],
  },
  {
    title: "Employee Self-Service Portal",
    headingIcons: [
      "/svgs/empinfo.svg",
        
    ],
    points: [
      "Update personal information.",
      "View attendance and download payslips.",
      "Request leave and view shift schedules.",
    ],
    tags: ["195 Active Users"],
  },
  {
    title: "Notifications & Alerts",
    headingIcons: [
      "/svgs/notificationbar.svg",
        
    ],

    points: [
      "Attendance alerts (late/missed punch).",
      "Leave request notifications.",
      "Payroll processed alerts.",
      "Shift reminders.",
    ],
    tags: ["18 New Alerts"],
  },
  {
    title: "Live Location Tracking",
    headingIcons: [
      "/svgs/locations.svg",
        
    ],
    points: [
      "Real-time GPS tracking for field employees.",
      "Location history logging.",
      "Geo-fencing alerts.",
    ],
    tags: ["36 Active Tracked", "0 Geo-fences"],
  },
  {
    title: "Branch Office User Management",
    headingIcons: [
      "/svgs/usermanage.svg",
        
    ],
    points: [
      "Multi-branch support with separate admin.",
      "Branch-wise employee listing.",
      "Cross-branch permissions.",
    ],
    tags: ["6 Branches", "Karachi-Lahore-Islamabad"],
  },
];

export default function DashboardPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F3F4F6] font-[inter]">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <div className="flex min-w-0 flex-1 flex-col transition-all duration-300 lg:ml-60">
        <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#E5E7EB] border-b-[4px] border-b-[#1abb9b] bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase text-[#7F8C8D]">
                  {item.title}
                </p>
                <p className="mt-1 text-4xl font-bold text-[#111827]">{item.value}</p>
                <p className={`mt-1 text-sm ${item.noteColor}`}>{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter, idx) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  idx === 0
                    ? "bg-[#04499E] text-white"
                    : "bg-[#E5E7EB] text-[#A0AFA8] hover:bg-[#D1D5DB]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 border-b  ] border-[#EEF1F6] pb-3">
                  <div className="bg-[#EDECF8] p-2 rounded-sm"> 
                  {card.headingIcons?.map((icon) => (
                    <Image key={icon} src={icon} alt="" width={20} height={20} />
                  ))}
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827]">{card.title}</h3>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-[#4B5563]">
                  {card.points.map((point) => (
                    <li key={point} className="border-b flex gap-1 border-[#F3F4F6] pb-1.5">
                      <Image src="/svgs/greentick.svg" alt="" width={12} height={12} />
                      {point}
                    </li>
                  ))}
                </ul>

                {card.workflow ? (
                  <div className="mt-3 rounded-xl border border-[#F8FAFD] bg-[#F8FAFD] p-3">
                    <p className="text-base font-semibold text-[#111827]">{card.tags[0]}:</p>
                    <ul className="mt-2 space-y-2 text-sm text-[#374151]">
                      {card.workflow.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <Image
                            src="/svgs/bluebadges.svg"
                            alt=""
                            width={12}
                            height={12}
                            className="mt-1 shrink-0"
                          />
                          <span className="mt-[1px] shrink-0 text-[#4B5563]">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {!card.workflow && card.tags.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#E8F5F0] px-2 py-1 text-[11px] font-medium text-[#20C375]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
