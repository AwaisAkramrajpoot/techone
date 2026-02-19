"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  leaveDetailsDummyRows,
  type LeaveDetailsRow,
  type LeaveDetailsStatus,
} from "@/components/hr/data/leave-details-data";
import {
  LeaveDetailsModal,
  type LeaveDetailsFormValues,
} from "@/components/hr/modals/LeaveDetailsModal";

const defaultFormValues: LeaveDetailsFormValues = {
  department: "",
  employee: "",
  leaveType: "",
  startDate: "",
  endDate: "",
  days: "",
  reason: "",
  contact: "",
  handoverTo: "",
  attachmentName: "",
};

function formatDateValue(date: string) {
  if (!date) return "";
  const parts = date.split("-");
  if (parts.length !== 3) return date;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function LeaveDetailsView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<LeaveDetailsRow[]>([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof LeaveDetailsFormValues, string>>
  >({});
  const [formValues, setFormValues] = useState<LeaveDetailsFormValues>(
    defaultFormValues
  );

  const statusClass = (status: LeaveDetailsStatus) => {
    if (status === "Active") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Expiring Soon") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#FFD9EC] text-[#D63384]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.employee.toLowerCase().includes(term) ||
        row.leaveType.toLowerCase().includes(term) ||
        row.duration.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof LeaveDetailsFormValues>(
    field: K,
    value: LeaveDetailsFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof LeaveDetailsFormValues, string>> = {};
    if (!formValues.department) nextErrors.department = "Please fill this field";
    if (!formValues.employee) nextErrors.employee = "Please fill this field";
    if (!formValues.leaveType) nextErrors.leaveType = "Please fill this field";
    if (!formValues.startDate) nextErrors.startDate = "Please fill this field";
    if (!formValues.endDate) nextErrors.endDate = "Please fill this field";
    if (!formValues.days) nextErrors.days = "Please fill this field";
    if (!formValues.reason) nextErrors.reason = "Please fill this field";
    if (!formValues.contact) nextErrors.contact = "Please fill this field";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const seed = rows.length === 0 ? leaveDetailsDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;

    const newRow: LeaveDetailsRow = {
      id: nextId,
      employee: formValues.employee,
      leaveType: formValues.leaveType,
      duration: `${formValues.days} days`,
      attachmentLabel: formValues.attachmentName ? "View" : "View",
      dateRange: formatDateValue(formValues.startDate),
      status: "Active",
    };

    setRows([...seed, ...rows, newRow]);
    closeModal();
    hrLayout?.setShowInnerSidebar(false);
  };

  const handleClear = () => {
    setFormValues(defaultFormValues);
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
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">
            Leave Details Management
          </h1>
          <p className="mt-1 text-sm text-[#667085]">
            Track and manage employee leave requests and approvals
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Leave Details
          </Button>
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/report.svg" alt="" width={18} height={18} />
            Report
          </Button>
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
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

      {filteredRows.length === 0 ? (
        <div className="flex min-h-[360px] items-center justify-center">
          <div className="text-center">
                        <Image
              src="/svgs/warning.svg"
              alt=""
              width={88}
              height={88}
              className="mx-auto"
            />
            <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
              Add Company First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Employee</th>
                  <th className="px-3 py-3 font-semibold">Leave Type</th>
                  <th className="px-3 py-3 font-semibold">Duration</th>
                  <th className="px-3 py-3 font-semibold">Attachment</th>
                  <th className="px-3 py-3 font-semibold">Date Range</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}
                  >
                    <td className="px-3 py-3 text-[#374151]">{row.employee}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.leaveType}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.duration}</td>
                    <td className="px-3 py-3">
                      <button
                        type="button"
                        className="rounded border border-[#A4C4EA] px-2 py-0.5 text-xs text-[#0B63CE]"
                      >
                        {row.attachmentLabel}
                      </button>
                    </td>
                    <td className="px-3 py-3 text-[#374151]">{row.dateRange}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <Pencil className="h-4 w-4 cursor-pointer text-[#0B63CE]" />
                        <Trash2 className="h-4 w-4 cursor-pointer text-[#E11D48]" />
                        <Ban className="h-4 w-4 cursor-pointer text-[#2EA8DF]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <LeaveDetailsModal
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




