import { notFound } from "next/navigation";
import { HrContentView } from "@/components/hr/HrContentView";
import { DepartmentView } from "@/components/hr/DepartmentView";
import { DesignationView } from "@/components/hr/DesignationView";
import { GradeView } from "@/components/hr/GradeView";
import { HolidayView } from "@/components/hr/HolidayView";
import { LeaveTypeView } from "@/components/hr/LeaveTypeView";
import { LeaveDetailsView } from "@/components/hr/LeaveDetailsView";
import { TimeShiftView } from "@/components/hr/TimeShiftView";
import { EmployeeInfoView } from "@/components/hr/EmployeeInfoView";
import { AllowanceDeductionView } from "@/components/hr/AllowanceDeductionView";
import { AdvancedView } from "@/components/hr/AdvancedView";
import { LoanView } from "@/components/hr/LoanView";
import { getHrTabBySlug } from "@/components/hr/hr-tabs";

type HrTabPageProps = {
  params: { tab: string } | Promise<{ tab: string }>;
};

export default async function HrTabPage({ params }: HrTabPageProps) {
  const resolvedParams = await params;
  const activeTab = getHrTabBySlug(resolvedParams.tab);

  if (!activeTab) {
    notFound();
  }

  if (activeTab.slug === "department") {
    return <DepartmentView />;
  }

  if (activeTab.slug === "designation") {
    return <DesignationView />;
  }

  if (activeTab.slug === "grade") {
    return <GradeView />;
  }

  if (activeTab.slug === "holidays") {
    return <HolidayView />;
  }

  if (activeTab.slug === "leave-type") {
    return <LeaveTypeView />;
  }

  if (activeTab.slug === "leave-details") {
    return <LeaveDetailsView />;
  }

  if (activeTab.slug === "time-shift") {
    return <TimeShiftView />;
  }

  if (activeTab.slug === "employee-info") {
    return <EmployeeInfoView />;
  }

  if (activeTab.slug === "allowance-deduction") {
    return <AllowanceDeductionView />;
  }

  if (activeTab.slug === "advanced") {
    return <AdvancedView />;
  }

  if (activeTab.slug === "loan") {
    return <LoanView />;
  }

  return <HrContentView title={activeTab.title} label={activeTab.label} />;
}
