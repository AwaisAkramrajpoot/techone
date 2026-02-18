import {
  Briefcase,
  Building2,
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
    icon: Building2,
  },
  {
    slug: "designation",
    label: "Designation",
    title: "Designation Management",
    icon: Briefcase,
  },
  { slug: "grade", label: "Grade", title: "Grade Management", icon: GraduationCap },
  { slug: "holidays", label: "Holidays", title: "Holiday Management", icon: Landmark },
  {
    slug: "leave-type",
    label: "Leave Type",
    title: "Leave Type Management",
    icon: FileText,
  },
  {
    slug: "leave-details",
    label: "Leave Details",
    title: "Leave Details",
    icon: FileText,
  },
  {
    slug: "time-shift",
    label: "Time & Shift",
    title: "Time & Shift Management",
    icon: Timer,
  },
  {
    slug: "employee-info",
    label: "Employee Info",
    title: "Employee Information",
    icon: ShieldCheck,
  },
  {
    slug: "allowance-deduction",
    label: "Allowance & Deduction",
    title: "Allowance & Deduction",
    icon: Coins,
  },
  { slug: "advanced", label: "Advanced", title: "Advanced Settings", icon: FileText },
  { slug: "loan", label: "Loan", title: "Loan Management", icon: Wallet },
  { slug: "expenses", label: "Expenses", title: "Expense Management", icon: Wallet },
  { slug: "payroll", label: "Payroll", title: "Payroll Management", icon: Coins },
  { slug: "overtime", label: "Overtime", title: "Overtime Management", icon: Timer },
  { slug: "bonus", label: "Bonus", title: "Bonus Management", icon: Coins },
  { slug: "increment", label: "Increment", title: "Increment Management", icon: Coins },
] as const;

export type HrTab = (typeof hrTabs)[number];

export function getHrTabBySlug(slug: string): HrTab | undefined {
  return hrTabs.find((tab) => tab.slug === slug);
}
