"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  bonusDummyRows,
  type BonusRow,
  type BonusStatus,
} from "@/components/hr/data/bonus-data";
import { BonusModal, type BonusFormValues } from "@/components/hr/modals/BonusModal";

const defaultFormValues: BonusFormValues = {
  employee: "",
  bonusType: "",
  bonusAmount: "",
  percentage: "",
  performanceRating: "",
  paymentDate: "",
  calculationBasic: "",
  bonusReason: "",
};

function formatDateLabel(input: string) {
  if (!input) return "Oct 15, 2023";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Oct 15, 2023";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BonusView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<BonusRow[]>(bonusDummyRows);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof BonusFormValues, string>>>({});
  const [formValues, setFormValues] = useState<BonusFormValues>(defaultFormValues);

  const statusClass = (status: BonusStatus) => {
    if (status === "Paid") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Pending") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#E8EEFF] text-[#4F73D9]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.employee.toLowerCase().includes(term) ||
        row.bonusType.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof BonusFormValues>(
    field: K,
    value: BonusFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof BonusFormValues, string>> = {};
    if (!formValues.employee) nextErrors.employee = "Please fill this field";
    if (!formValues.bonusType) nextErrors.bonusType = "Please fill this field";
    if (!formValues.bonusAmount) nextErrors.bonusAmount = "Please fill this field";
    if (!formValues.percentage) nextErrors.percentage = "Please fill this field";
    if (!formValues.performanceRating) nextErrors.performanceRating = "Please fill this field";
    if (!formValues.paymentDate) nextErrors.paymentDate = "Please fill this field";
    if (!formValues.calculationBasic) nextErrors.calculationBasic = "Please fill this field";
    if (!formValues.bonusReason) nextErrors.bonusReason = "Please fill this field";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const nextId = rows.length + 1;
    const status: BonusStatus = formValues.performanceRating === "3.5/5.0" ? "Pending" : "Paid";
    const newRow: BonusRow = {
      id: nextId,
      employee: formValues.employee,
      bonusType: formValues.bonusType,
      performance: formValues.performanceRating,
      amount: formValues.bonusAmount,
      percentage: formValues.percentage.includes("%")
        ? formValues.percentage
        : `${formValues.percentage}%`,
      paymentDate: formatDateLabel(formValues.paymentDate),
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
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">Bonus Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Manage employee bonuses, incentives, and performance rewards
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87]"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Bonus
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
            Export
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
            Report
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
          <table className="w-full min-w-[1040px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                <th className="px-3 py-3 font-semibold">Employee</th>
                <th className="px-3 py-3 font-semibold">Bonus Type</th>
                <th className="px-3 py-3 font-semibold">Performance</th>
                <th className="px-3 py-3 font-semibold">Amount</th>
                <th className="px-3 py-3 font-semibold">Percentage</th>
                <th className="px-3 py-3 font-semibold">Payment Date</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                  <td className="px-3 py-3 text-[#374151]">{row.employee}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.bonusType}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.performance}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.amount}</td>
                  <td className="px-3 py-3 text-[#0B63CE]">{row.percentage}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.paymentDate}</td>
                  <td className="px-3 py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(row.status)}`}>
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

      <BonusModal
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
