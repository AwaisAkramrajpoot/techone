"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  loanDummyRows,
  type LoanRow,
  type LoanStatus,
} from "@/components/hr/data/loan-data";
import { LoanModal, type LoanFormValues } from "@/components/hr/modals/LoanModal";

const defaultFormValues: LoanFormValues = {
  applyDate: "",
  company: "",
  branch: "",
  department: "",
  employee: "",
  loanType: "",
  loanAmount: "",
  interestRate: "",
  loanTerm: "",
  status: "",
};

function formatDateLabel(input: string) {
  if (!input) return "Oct 15, 2023";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Oct 15, 2023";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function LoanView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<LoanRow[]>([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LoanFormValues, string>>>({});
  const [formValues, setFormValues] = useState<LoanFormValues>(defaultFormValues);

  const statusClass = (status: LoanStatus) => {
    if (status === "Approved") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Pending") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#DFF4FF] text-[#2EA8DF]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.customer.toLowerCase().includes(term) ||
        row.loanId.toLowerCase().includes(term) ||
        row.type.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof LoanFormValues>(
    field: K,
    value: LoanFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof LoanFormValues, string>> = {};
    if (!formValues.applyDate) nextErrors.applyDate = "Please fill this field";
    if (!formValues.company) nextErrors.company = "Please fill this field";
    if (!formValues.branch) nextErrors.branch = "Please fill this field";
    if (!formValues.department) nextErrors.department = "Please fill this field";
    if (!formValues.employee) nextErrors.employee = "Please fill this field";
    if (!formValues.loanType) nextErrors.loanType = "Please fill this field";
    if (!formValues.loanAmount) nextErrors.loanAmount = "Please fill this field";
    if (!formValues.interestRate) nextErrors.interestRate = "Please fill this field";
    if (!formValues.loanTerm) nextErrors.loanTerm = "Please fill this field";
    if (!formValues.status) nextErrors.status = "Please fill this field";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const seed = rows.length === 0 ? loanDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;
    const loanStatus =
      formValues.status === "Approved" || formValues.status === "Pending" || formValues.status === "Active"
        ? formValues.status
        : "Pending";

    const newRow: LoanRow = {
      id: nextId,
      customer: formValues.employee,
      loanId: `LA-${2300 + nextId}`,
      type: formValues.loanType,
      amount: formValues.loanAmount,
      interestRate: `${formValues.interestRate} %`,
      term: formValues.loanTerm,
      appliedDate: formatDateLabel(formValues.applyDate),
      status: loanStatus,
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
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">Loan Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Manage loans, track repayments, and monitor performance
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87]"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Loan
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

      {filteredRows.length === 0 ? (
        <div className="flex min-h-[360px] items-center justify-center">
          <div className="text-center">
            <p className="text-3xl text-[#D0D5DD]">!</p>
            <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
              Add Company First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Customer</th>
                  <th className="px-3 py-3 font-semibold">Loan ID</th>
                  <th className="px-3 py-3 font-semibold">Type</th>
                  <th className="px-3 py-3 font-semibold">Amount</th>
                  <th className="px-3 py-3 font-semibold">Interest R</th>
                  <th className="px-3 py-3 font-semibold">Term</th>
                  <th className="px-3 py-3 font-semibold">Applied Date</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                    <td className="px-3 py-3 text-[#374151]">{row.customer}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.loanId}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.type}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.amount}</td>
                    <td className="px-3 py-3 text-[#0B63CE]">{row.interestRate}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.term}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.appliedDate}</td>
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
      )}

      <LoanModal
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
