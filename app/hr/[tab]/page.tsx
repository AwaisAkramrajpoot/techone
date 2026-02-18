import { notFound } from "next/navigation";
import { HrContentView } from "@/components/hr/HrContentView";
import { DepartmentView } from "@/components/hr/DepartmentView";
import { DesignationView } from "@/components/hr/DesignationView";
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

  return <HrContentView title={activeTab.title} label={activeTab.label} />;
}
