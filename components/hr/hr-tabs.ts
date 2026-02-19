import {
  Briefcase,
  Coins,
  FileText,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Timer,
  Wallet,
} from "lucide-react";

export const hrTabs = [
  {
    slug: "department",
    label: "Department",
    title: "Department Management",
    icon: "/svgs/department.svg",
  },
  {
    slug: "designation",
    label: "Designation",
    title: "Designation Management",
    icon: "/svgs/designation.svg",
  },
  { slug: "grade", label: "Grade", title: "Grade Management", icon: "/svgs/grade.svg" },
  { slug: "holidays", label: "Holidays", title: "Holiday Management", icon: "/svgs/holiday1.svg" },
  {
    slug: "leave-type",
    label: "Leave Type",
    title: "Leave Type Management",
    icon: "/svgs/leave1.svg",
  },
  {
    slug: "leave-details",
    label: "Leave Details",
    title: "Leave Details",
    icon: "/svgs/leavedetail.svg",
  },
  {
    slug: "time-shift",
    label: "Time & Shift",
    title: "Time & Shift Management",
    icon: "/svgs/timedate.svg",
  },
  {
    slug: "employee-info",
    label: "Employee Info",
    title: "Employee Information",
    icon: "/svgs/employeeinfo.svg",
  },
  {
    slug: "allowance-deduction",
    label: "Allowance & Deduction",
    title: "Allowance & Deduction",
    icon: "/svgs/allownce.svg",
  },
  { slug: "advanced", label: "Advanced", title: "Advanced Settings", icon: "/svgs/advance.svg" },
  { slug: "loan", label: "Loan", title: "Loan Management", icon: "/svgs/loans.svg" },
  { slug: "expenses", label: "Expenses", title: "Expense Management", icon: "/svgs/expance.svg" },
  { slug: "payroll", label: "Payroll", title: "Payroll Management", icon: "/svgs/payroll.svg" },
  { slug: "overtime", label: "Overtime", title: "Overtime Management", icon: "/svgs/overtimes.svg" },
  { slug: "bonus", label: "Bonus", title: "Bonus Management", icon: "/svgs/bonus.svg" },
  { slug: "increment", label: "Increment", title: "Increment Management", icon: "/svgs/increment.svg" },
] as const;

export type HrTab = (typeof hrTabs)[number];

export function getHrTabBySlug(slug: string): HrTab | undefined {
  return hrTabs.find((tab) => tab.slug === slug);
}
