"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  expensesDummyRows,
  type ExpenseRow,
  type ExpenseStatus,
  type ExpenseCategory,
} from "@/components/hr/data/expenses-data";
import { ExpensesModal, type ExpensesFormValues } from "@/components/hr/modals/ExpensesModal";

const defaultFormValues: ExpensesFormValues = {
  company: "",
  branch: "",
  department: "",
  date: "",
  category: "",
  amount: "",
  description: "",
  paymentMethod: "",
  status: "",
  notes: "",
};

function formatDateLabel(input: string) {
  if (!input) return "Oct 15, 2023";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Oct 15, 2023";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function ExpensesView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<ExpenseRow[]>([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof ExpensesFormValues, string>>>({});
  const [formValues, setFormValues] = useState<ExpensesFormValues>(defaultFormValues);

  const statusClass = (status: ExpenseStatus) => {
    return status === "Paid"
      ? "bg-[#DFF4FF] text-[#2EA8DF]"
      : "bg-[#FFE8CC] text-[#FF8A00]";
  };

  const categoryClass = (category: ExpenseCategory) => {
    if (category === "Office") return "bg-[#E8EEFF] text-[#4F73D9]";
    if (category === "Utilities") return "bg-[#FFD9EC] text-[#D63384]";
    return "bg-[#DFF4FF] text-[#2EA8DF]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.description.toLowerCase().includes(term) ||
        row.category.toLowerCase().includes(term) ||
        row.paymentMethod.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof ExpensesFormValues>(
    field: K,
    value: ExpensesFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof ExpensesFormValues, string>> = {};
    if (!formValues.company) nextErrors.company = "Please fill this field";
    if (!formValues.branch) nextErrors.branch = "Please fill this field";
    if (!formValues.department) nextErrors.department = "Please fill this field";
    if (!formValues.date) nextErrors.date = "Please fill this field";
    if (!formValues.category) nextErrors.category = "Please fill this field";
    if (!formValues.amount) nextErrors.amount = "Please fill this field";
    if (!formValues.description) nextErrors.description = "Please fill this field";
    if (!formValues.paymentMethod) nextErrors.paymentMethod = "Please fill this field";
    if (!formValues.status) nextErrors.status = "Please fill this field";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const seed = rows.length === 0 ? expensesDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;
    const parsedCategory =
      formValues.category === "Office" ||
      formValues.category === "Utilities" ||
      formValues.category === "Software"
        ? formValues.category
        : "Office";
    const parsedStatus =
      formValues.status === "Paid" || formValues.status === "Pending"
        ? formValues.status
        : "Pending";

    const newRow: ExpenseRow = {
      id: nextId,
      description: formValues.description,
      category: parsedCategory,
      paymentMethod: formValues.paymentMethod,
      amount: formValues.amount,
      date: formatDateLabel(formValues.date),
      status: parsedStatus,
    };

    setRows([...seed, ...rows, newRow]);
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
    <section className="min-h-[560px] flex-1 font-[poppins]">
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
          <h1 className="text-2xl font-semibold text-[#0C4BA7] font-[inter]">Expenses Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Track, analyze, and manage your expenses in one place
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Expenses
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
            <p className="mt-2 text-2xl font-sm text-[#D0D5DD]">
              Add Expenses First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Description</th>
                  <th className="px-3 py-3 font-semibold">Category</th>
                  <th className="px-3 py-3 font-semibold">Payment Method</th>
                  <th className="px-3 py-3 font-semibold">Amount</th>
                  <th className="px-3 py-3 font-semibold">Date</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                    <td className="px-3 py-3 text-[#374151]">{row.description}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${categoryClass(row.category)}`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[#374151]">{row.paymentMethod}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.amount}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.date}</td>
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
      )}

      <ExpensesModal
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







