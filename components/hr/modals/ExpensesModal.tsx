"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type ExpensesFormValues = {
  company: string;
  branch: string;
  department: string;
  date: string;
  category: string;
  amount: string;
  description: string;
  paymentMethod: string;
  status: string;
  notes: string;
};

type ExpensesModalProps = {
  isOpen: boolean;
  values: ExpensesFormValues;
  errors: Partial<Record<keyof ExpensesFormValues, string>>;
  onFieldChange: <K extends keyof ExpensesFormValues>(
    field: K,
    value: ExpensesFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function ExpensesModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: ExpensesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Expenses</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          {[
            ["company", "Company", "Select company", ["Tech Solutions", "Global Enterprise"]],
            ["branch", "Branch", "Select branch", ["Main Branch", "East Branch"]],
            ["department", "Department", "Select department", ["HR", "Finance"]],
          ].map(([key, label, placeholder, options]) => (
            <div key={key}>
              <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
              <select
                value={values[key as keyof ExpensesFormValues] as string}
                onChange={(e) => onFieldChange(key as keyof ExpensesFormValues, e.target.value)}
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                  errors[key as keyof ExpensesFormValues] ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">{placeholder}</option>
                {(options as string[]).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors[key as keyof ExpensesFormValues] ? (
                <p className="mt-1 text-xs text-red-500">
                  {errors[key as keyof ExpensesFormValues]}
                </p>
              ) : null}
            </div>
          ))}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Date</label>
            <Input
              type="date"
              value={values.date}
              onChange={(e) => onFieldChange("date", e.target.value)}
              className={`h-11 ${errors.date ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.date ? <p className="mt-1 text-xs text-red-500">{errors.date}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Category</label>
            <select
              value={values.category}
              onChange={(e) => onFieldChange("category", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.category ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Category</option>
              <option value="Office">Office</option>
              <option value="Utilities">Utilities</option>
              <option value="Software">Software</option>
            </select>
            {errors.category ? <p className="mt-1 text-xs text-red-500">{errors.category}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Amount</label>
            <Input
              value={values.amount}
              onChange={(e) => onFieldChange("amount", e.target.value)}
              placeholder="Enter amount"
              className={`h-11 ${errors.amount ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.amount ? <p className="mt-1 text-xs text-red-500">{errors.amount}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Description</label>
            <Input
              value={values.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              placeholder="Enter expense description"
              className={`h-11 ${errors.description ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.description ? (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            ) : null}
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
              <option value="Cash">Cash</option>
            </select>
            {errors.paymentMethod ? (
              <p className="mt-1 text-xs text-red-500">{errors.paymentMethod}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Status</label>
            <select
              value={values.status}
              onChange={(e) => onFieldChange("status", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.status ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.status ? <p className="mt-1 text-xs text-red-500">{errors.status}</p> : null}
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
            Save Entry
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
