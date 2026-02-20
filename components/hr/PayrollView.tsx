"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  payrollDummyRows,
  type PayrollRow,
  type PayrollStatus,
} from "@/components/hr/data/payroll-data";
import { PayrollModal, type PayrollFormValues } from "@/components/hr/modals/PayrollModal";

const defaultFormValues: PayrollFormValues = {
  fullName: "",
  email: "",
  department: "",
  position: "",
  monthlySalary: "",
  startDate: "",
  paymentMethod: "",
  employmentStatus: "",
  notes: "",
};

export function PayrollView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<PayrollRow[]>(payrollDummyRows);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof PayrollFormValues, string>>>({});
  const [formValues, setFormValues] = useState<PayrollFormValues>(defaultFormValues);

  const statusClass = (status: PayrollStatus) => {
    if (status === "Processed") return "bg-[#DFF4FF] text-[#2EA8DF]";
    return "bg-[#FFD9EC] text-[#E11D8D]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.employee.toLowerCase().includes(term) ||
        row.department.toLowerCase().includes(term) ||
        row.paymentMethod.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof PayrollFormValues>(
    field: K,
    value: PayrollFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof PayrollFormValues, string>> = {};
    if (!formValues.fullName) nextErrors.fullName = "Please fill this field";
    if (!formValues.email) nextErrors.email = "Please fill this field";
    if (!formValues.department) nextErrors.department = "Please fill this field";
    if (!formValues.position) nextErrors.position = "Please fill this field";
    if (!formValues.monthlySalary) nextErrors.monthlySalary = "Please fill this field";
    if (!formValues.startDate) nextErrors.startDate = "Please fill this field";
    if (!formValues.paymentMethod) nextErrors.paymentMethod = "Please fill this field";
    if (!formValues.employmentStatus) nextErrors.employmentStatus = "Please fill this field";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const nextId = rows.length + 1;
    const status: PayrollStatus = formValues.employmentStatus === "Part Time" ? "Onhold" : "Processed";

    const newRow: PayrollRow = {
      id: nextId,
      employee: formValues.fullName,
      department: formValues.department,
      grossPay: formValues.monthlySalary,
      taxes: formValues.monthlySalary,
      deductions: formValues.monthlySalary,
      netPay: formValues.monthlySalary,
      paymentMethod: formValues.paymentMethod,
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
          <h1 className="text-2xl font-semibold text-[#0C4BA7]">Payroll Management</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Process payroll, manage employee payments, and track payroll expenses
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Payroll
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

      <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                <th className="px-3 py-3 font-semibold">Employee</th>
                <th className="px-3 py-3 font-semibold">Department</th>
                <th className="px-3 py-3 font-semibold">Gross Pay</th>
                <th className="px-3 py-3 font-semibold">Taxes</th>
                <th className="px-3 py-3 font-semibold">Deductions</th>
                <th className="px-3 py-3 font-semibold">Net Pay</th>
                <th className="px-3 py-3 font-semibold">Payment Method</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id} className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}>
                  <td className="px-3 py-3 text-[#374151]">{row.employee}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.department}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.grossPay}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.taxes}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.deductions}</td>
                  <td className="px-3 py-3 text-[#2EA8DF]">{row.netPay}</td>
                  <td className="px-3 py-3 text-[#374151]">{row.paymentMethod}</td>
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

      <PayrollModal
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


