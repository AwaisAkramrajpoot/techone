"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  incrementDummyRows,
  type IncrementRow,
  type IncrementStatus,
} from "@/components/hr/data/increment-data";
import { IncrementModal, type IncrementFormValues } from "@/components/hr/modals/IncrementModal";

const defaultFormValues: IncrementFormValues = {
  employee: "",
  incrementType: "",
  currentSalary: "",
  incrementPercentage: "",
  performanceRating: "",
  effectiveDate: "",
  calculationBasic: "",
  incrementReason: "",
  hodComments: "",
};

function formatDateLabel(input: string) {
  if (!input) return "Oct 15, 2023";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Oct 15, 2023";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function IncrementView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<IncrementRow[]>(incrementDummyRows);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof IncrementFormValues, string>>>({});
  const [formValues, setFormValues] = useState<IncrementFormValues>(defaultFormValues);

  const statusClass = (status: IncrementStatus) => {
    if (status === "Approved") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Pending") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#E8EEFF] text-[#4F73D9]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.employee.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term) ||
        row.effectiveDate.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof IncrementFormValues>(
    field: K,
    value: IncrementFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof IncrementFormValues, string>> = {};
    if (!formValues.employee) nextErrors.employee = "Please fill this field";
    if (!formValues.incrementType) nextErrors.incrementType = "Please fill this field";
    if (!formValues.currentSalary) nextErrors.currentSalary = "Please fill this field";
    if (!formValues.incrementPercentage) nextErrors.incrementPercentage = "Please fill this field";
    if (!formValues.performanceRating) nextErrors.performanceRating = "Please fill this field";
    if (!formValues.effectiveDate) nextErrors.effectiveDate = "Please fill this field";
    if (!formValues.calculationBasic) nextErrors.calculationBasic = "Please fill this field";
    if (!formValues.incrementReason) nextErrors.incrementReason = "Please fill this field";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const nextId = rows.length + 1;
    const percentage = formValues.incrementPercentage.includes("%")
      ? formValues.incrementPercentage
      : `${formValues.incrementPercentage}%`;
    const current = Number(formValues.currentSalary.replace(/,/g, "")) || 0;
    const percentValue = Number(formValues.incrementPercentage.replace("%", "")) || 0;
    const incrementAmount = ((current * percentValue) / 100).toFixed(0);
    const newSalary = (current + Number(incrementAmount)).toString();
    const status: IncrementStatus = formValues.incrementType === "Promotion" ? "Recommended" : "Approved";

    const newRow: IncrementRow = {
      id: nextId,
      employee: formValues.employee,
      currentSalary: formValues.currentSalary,
      newSalary,
      incrementAmount,
      incrementPercent: percentage,
      tenure: "3.0 year",
      effectiveDate: formatDateLabel(formValues.effectiveDate),
      status,
    };

    setRows((prev) => [...prev, newRow]);
    closeModal();
    hrLayout?.setShowInnerSidebar(false);
  };

  const handleClear = () => {
    setFormValues(defaultFormValues);
    setErrors({});
  };

  useEffect(() => {
    hrLayout?.setShowInnerSidebar(true);
  }, []);

  return (
    <section className="min-h-[560px] min-w-0 flex-1 font-[poppins]">
      {hrLayout && !hrLayout.showInnerSidebar && (
        <button
          type="button"
          onClick={() => hrLayout.setShowInnerSidebar(true)}
          className="mb-2 inline-flex items-center text-[#6B7280] hover:text-[#374151]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      <div className="flex flex-col gap-3 font-[poppins] md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold font-[inter] text-[#0C4BA7]">Salary Increment Management</h1>
          <p className="mt-1 text-sm  text-[#667085]">
            Manage salary increases, promotions, and compensation adjustments
          </p>
        </div>
        <div className="flex flex-nowrap gap-1">
          <Button
            className="h-8 px-2.5 text-xs shrink-0 bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Increment
          </Button>
          <Button
            className="h-8 px-2.5 text-xs shrink-0 bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/report.svg" alt="" width={18} height={18} />
            Report
          </Button>
          <Button
            className="h-8 px-2.5 text-xs shrink-0 bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/export.svg" alt="" width={18} height={18} />
            Export
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, user, licences..."
            className="h-11 border-[#EAECF0] bg-[#F8FAFC] pl-9"
          />
        </div>
      </div>

      <div className="mt-6 max-w-full rounded-lg border border-[#EEF1F6] bg-white p-3">
        <div className="w-full max-w-full overflow-x-auto pb-1">
          <table className="min-w-[1120px] whitespace-nowrap border-collapse text-sm">

            <thead>
              <tr className="bg-[#F8FAFC] font-[poppins] text-left text-[#111827]">
                <th className="px-3 py-3 font-semibold">Employee</th>
                <th className="px-3 py-3 font-semibold">Current Salary</th>
                <th className="px-3 py-3 font-semibold">New Salary</th>
                <th className="px-3 py-3 font-semibold">Increment Amount</th>
                <th className="px-3 py-3 font-semibold">Increment %</th>
                <th className="px-3 py-3 font-semibold">Tenure</th>
                <th className="px-3 py-3 font-semibold">Effective Date</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                  <td className="px-3 py-3 text-[#374151]">{row.employee}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.currentSalary}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.newSalary}</td>
                  <td className="px-3 py-3 text-[#0B63CE]">{row.incrementAmount}</td>
                  <td className="px-3 py-3 text-[#0B63CE]">{row.incrementPercent}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.tenure}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.effectiveDate}</td>
                  <td className="px-3 py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <Image src='/svgs/edit.svg' alt="" width={16} height={16} />
                        <Image src='/svgs/delete.svg' alt="" width={16} height={16} />
                        <Image src='/svgs/alert.svg' alt="" width={16} height={16} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <IncrementModal
        isOpen={isModalOpen}
        values={formValues}
        errors={errors}
        onFieldChange={handleFieldChange}
        onClose={closeModal}
        onSave={handleSave}
        onClear={handleClear}
      />
    </section>
  );
}








