import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  Clock3,
  FileText,
  Landmark,
  MapPin,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

export type ProblemCard = {
  title: string;
  before: string;
  after: string;
  result: string;
  icon: LucideIcon;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  isCore?: boolean;
  isNew?: boolean;
};

export const problemCards: ProblemCard[] = [
  {
    title: "Disconnected HR Tools and Manual Files",
    before: "Data spread in sheets, chats and notebooks causes delays and errors.",
    after: "Single HRMS with payroll, leave, attendance and employee records in one flow.",
    result: "One system. One source of truth.",
    icon: BarChart3,
  },
  {
    title: "Approval Process Without Traceability",
    before: "Approvals in chat and verbal updates make audits difficult.",
    after: "Track every request with statuses, history and role-based access.",
    result: "Clear approvals with full visibility.",
    icon: MessagesSquare,
  },
  {
    title: "Too Much Weekly Admin Work",
    before: "Teams spend hours on attendance checks, payroll prep and leave balance.",
    after: "Automated calculations reduce repetitive effort every week.",
    result: "Less admin. More decision time.",
    icon: Clock3,
  },
  {
    title: "Costly Payroll and Compliance Rework",
    before: "Manual tax, EOBI and payroll corrections increase monthly cost.",
    after: "Standardized workflows lower rework and improve accuracy.",
    result: "Predictable operations and lower rework cost.",
    icon: Landmark,
  },
  {
    title: "Growth Without Process Structure",
    before: "As team size grows, manual process quality drops quickly.",
    after: "Use consistent modules across branches, teams and shifts.",
    result: "Scale operations with confidence.",
    icon: Rocket,
  },
  {
    title: "Compliance Pressure and Audit Stress",
    before: "Missing records and delayed reports create compliance risk.",
    after: "Centralized reporting helps you stay ready for internal and external reviews.",
    result: "Compliance-ready reporting.",
    icon: ShieldCheck,
  },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Payroll & Salary",
    description: "Payroll, tax and monthly salary processing",
    icon: WalletCards,
    isCore: true,
  },
  {
    title: "Time & Shift",
    description: "Shift setup, overtime and attendance controls",
    icon: Clock3,
    isCore: true,
  },
  {
    title: "Employee Management",
    description: "Employee profiles, status, and onboarding details",
    icon: Users,
  },
  {
    title: "Leave Management",
    description: "Leave types, leave details and holiday planning",
    icon: CalendarDays,
  },
  {
    title: "Department & Designation",
    description: "Structure organization by department and roles",
    icon: ClipboardList,
  },
  {
    title: "Expenses & Loan",
    description: "Track expenses, advances and employee loans",
    icon: BriefcaseBusiness,
  },
  {
    title: "Increment & Bonus",
    description: "Manage increments, bonuses and allowances",
    icon: ClipboardList,
  },
  {
    title: "Branch Operations",
    description: "Branch-wise records and multi-location support",
    icon: FileText,
  },
  {
    title: "Recruitment Pipeline",
    description: "Candidate tracking and hiring workflow support",
    icon: Smartphone,
  },
  {
    title: "Document & Compliance",
    description: "Store records and generate compliance reports",
    icon: FileText,
  },
  {
    title: "Import / Export",
    description: "Bulk import and export for operational data",
    icon: MapPin,
    isNew: true,
  },
  {
    title: "Advanced Reporting",
    description: "Operational insights with customizable dashboards",
    icon: Sparkles,
  },
];
