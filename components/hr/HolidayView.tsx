"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  holidayDummyRows,
  type HolidayRow,
  type HolidayStatus,
} from "@/components/hr/data/holiday-data";
import {
  HolidayModal,
  type HolidayFormValues,
} from "@/components/hr/modals/HolidayModal";

const defaultFormValues: HolidayFormValues = {
  holidayName: "",
  holidayCode: "",
  startDate: "",
  endDate: "",
  daysCount: "",
  isActive: true,
};

function formatDateValue(date: string) {
  if (!date) return "";
  const parts = date.split("-");
  if (parts.length !== 3) return date;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function HolidayView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<HolidayRow[]>([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof HolidayFormValues, string>>
  >({});
  const [formValues, setFormValues] = useState<HolidayFormValues>(defaultFormValues);

  const statusClass = (status: HolidayStatus) => {
    if (status === "Active") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Expiring Soon") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#FFD9EC] text-[#D63384]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.holidayName.toLowerCase().includes(term) ||
        row.holidayCode.toLowerCase().includes(term) ||
        row.startDate.toLowerCase().includes(term) ||
        row.endDate.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof HolidayFormValues>(
    field: K,
    value: HolidayFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof HolidayFormValues, string>> = {};
    if (!formValues.holidayName) nextErrors.holidayName = "Please fill this field";
    if (!formValues.holidayCode) nextErrors.holidayCode = "Please fill this field";
    if (!formValues.startDate) nextErrors.startDate = "Please fill this field";
    if (!formValues.endDate) nextErrors.endDate = "Please fill this field";
    if (!formValues.daysCount) nextErrors.daysCount = "Please fill this field";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const seed = rows.length === 0 ? holidayDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;

    const newRow: HolidayRow = {
      id: nextId,
      holidayName: formValues.holidayName,
      holidayCode: formValues.holidayCode,
      startDate: formatDateValue(formValues.startDate),
      endDate: formatDateValue(formValues.endDate),
      daysCount: `#${formValues.daysCount}`,
      status: formValues.isActive ? "Active" : "Expired",
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
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">Holiday Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Manage official holidays with clarity and ease
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Holiday
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
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Holiday Name</th>
                  <th className="px-3 py-3 font-semibold">Holiday Abbre...</th>
                  <th className="px-3 py-3 font-semibold">Start Date</th>
                  <th className="px-3 py-3 font-semibold">End Date</th>
                  <th className="px-3 py-3 font-semibold">No Of Days</th>
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
                    <td className="px-3 py-3 text-[#374151]">{row.holidayName}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.holidayCode}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.startDate}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.endDate}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.daysCount}</td>
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
      )}

      <HolidayModal
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






