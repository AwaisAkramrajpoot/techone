"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  overtimeDummyRows,
  type OvertimeRow,
  type OvertimeStatus,
} from "@/components/hr/data/overtime-data";
import { OvertimeModal, type OvertimeFormValues } from "@/components/hr/modals/OvertimeModal";

const defaultFormValues: OvertimeFormValues = {
  employee: "",
  startDate: "",
  startTime: "",
  endTime: "",
  overtimeType: "",
  hourlyRate: "",
  reason: "",
  description: "",
};

function formatDateLabel(input: string) {
  if (!input) return "Oct 15, 2023";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Oct 15, 2023";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function OvertimeView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<OvertimeRow[]>(overtimeDummyRows);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof OvertimeFormValues, string>>>({});
  const [formValues, setFormValues] = useState<OvertimeFormValues>(defaultFormValues);

  const statusClass = (status: OvertimeStatus) => {
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
        row.reason.toLowerCase().includes(term) ||
        row.type.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof OvertimeFormValues>(
    field: K,
    value: OvertimeFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof OvertimeFormValues, string>> = {};
    if (!formValues.employee) nextErrors.employee = "Please fill this field";
    if (!formValues.startDate) nextErrors.startDate = "Please fill this field";
    if (!formValues.startTime) nextErrors.startTime = "Please fill this field";
    if (!formValues.endTime) nextErrors.endTime = "Please fill this field";
    if (!formValues.overtimeType) nextErrors.overtimeType = "Please fill this field";
    if (!formValues.hourlyRate) nextErrors.hourlyRate = "Please fill this field";
    if (!formValues.reason) nextErrors.reason = "Please fill this field";
    if (!formValues.description) nextErrors.description = "Please fill this field";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const nextId = rows.length + 1;
    const newRow: OvertimeRow = {
      id: nextId,
      employee: formValues.employee,
      date: formatDateLabel(formValues.startDate),
      hours: "8 hrs",
      type: formValues.overtimeType,
      rr: `${formValues.hourlyRate}/hr`,
      otr: `${formValues.hourlyRate}/hr`,
      cost: "25,000",
      reason: formValues.reason,
      status: "Pending",
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
    <section className="min-h-[560px] flex-1">
      {hrLayout && !hrLayout.showInnerSidebar && (
        <button
          type="button"
          onClick={() => hrLayout.setShowInnerSidebar(true)}
          className="mb-2 inline-flex items-center text-[#6B7280] hover:text-[#374151]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#0C4BA7]">Overtime Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Track, approve, and manage employee overtime hours
          </p>
        </div>
        <div className="flex flex-nowrap gap-1">
          <Button
            className="h-8 px-2.5 text-xs shrink-0 bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Overtime
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

      <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                <th className="px-3 py-3 font-semibold">Employee</th>
                <th className="px-3 py-3 font-semibold">Date</th>
                <th className="px-3 py-3 font-semibold">Hours</th>
                <th className="px-3 py-3 font-semibold">Type</th>
                <th className="px-3 py-3 font-semibold">RR</th>
                <th className="px-3 py-3 font-semibold">OTR</th>
                <th className="px-3 py-3 font-semibold">Cost</th>
                <th className="px-3 py-3 font-semibold">Reason</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                  <td className="px-3 py-3 text-[#374151]">{row.employee}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.date}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.hours}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.type}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.rr}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.otr}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.cost}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.reason}</td>
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

      <OvertimeModal
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






