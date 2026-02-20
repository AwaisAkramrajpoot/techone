"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type PayrollFormValues = {
  fullName: string;
  email: string;
  department: string;
  position: string;
  monthlySalary: string;
  startDate: string;
  paymentMethod: string;
  employmentStatus: string;
  notes: string;
};

type PayrollModalProps = {
  isOpen: boolean;
  values: PayrollFormValues;
  errors: Partial<Record<keyof PayrollFormValues, string>>;
  onFieldChange: <K extends keyof PayrollFormValues>(
    field: K,
    value: PayrollFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function PayrollModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: PayrollModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] [&_select]:w-full [&_select]:min-w-0 [&_select]:max-w-full [&_select]:pr-9 [&_select]:overflow-hidden [&_select]:text-ellipsis [&_select]:whitespace-nowrap [&_option]:max-w-full [&_option]:whitespace-normal [&_option]:break-words max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Employee</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Full Name</label>
            <Input
              value={values.fullName}
              onChange={(e) => onFieldChange("fullName", e.target.value)}
              placeholder="Enter employee name"
              className={`h-11 ${errors.fullName ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.fullName ? <p className="mt-1 text-xs text-red-500">{errors.fullName}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Email Address</label>
            <Input
              value={values.email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              placeholder="Enter email address"
              className={`h-11 ${errors.email ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Department</label>
            <select
              value={values.department}
              onChange={(e) => onFieldChange("department", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.department ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select department</option>
              <option value="Engineering">Engineering</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
            {errors.department ? <p className="mt-1 text-xs text-red-500">{errors.department}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Position</label>
            <Input
              value={values.position}
              onChange={(e) => onFieldChange("position", e.target.value)}
              placeholder="Enter position"
              className={`h-11 ${errors.position ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.position ? <p className="mt-1 text-xs text-red-500">{errors.position}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Monthly Salary ($)</label>
            <Input
              value={values.monthlySalary}
              onChange={(e) => onFieldChange("monthlySalary", e.target.value)}
              placeholder="Enter monthly salary"
              className={`h-11 ${errors.monthlySalary ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.monthlySalary ? (
              <p className="mt-1 text-xs text-red-500">{errors.monthlySalary}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Start Date</label>
            <Input
              type="date"
              value={values.startDate}
              onChange={(e) => onFieldChange("startDate", e.target.value)}
              className={`h-11 ${errors.startDate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.startDate ? <p className="mt-1 text-xs text-red-500">{errors.startDate}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Payment Method</label>
            <select
              value={values.paymentMethod}
              onChange={(e) => onFieldChange("paymentMethod", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.paymentMethod ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select payment method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            {errors.paymentMethod ? (
              <p className="mt-1 text-xs text-red-500">{errors.paymentMethod}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Employment Status</label>
            <select
              value={values.employmentStatus}
              onChange={(e) => onFieldChange("employmentStatus", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.employmentStatus ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select status</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            {errors.employmentStatus ? (
              <p className="mt-1 text-xs text-red-500">{errors.employmentStatus}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Notes</label>
            <textarea
              value={values.notes}
              onChange={(e) => onFieldChange("notes", e.target.value)}
              placeholder="Additional Notes"
              className="min-h-[84px] w-full rounded-md border border-[#E5E7EB] p-3 text-sm outline-none focus:border-[#04499E]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button onClick={onSave} className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]">
            Add Employee
          </Button>
          <Button
            variant="outline"
            onClick={onClear}
            className="h-11 border-[#8AAEDA] bg-[#8AAEDA] text-white hover:bg-[#7A9ECB]"
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}





