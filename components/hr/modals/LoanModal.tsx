"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type LoanFormValues = {
  applyDate: string;
  company: string;
  branch: string;
  department: string;
  employee: string;
  loanType: string;
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  status: string;
};

type LoanModalProps = {
  isOpen: boolean;
  values: LoanFormValues;
  errors: Partial<Record<keyof LoanFormValues, string>>;
  onFieldChange: <K extends keyof LoanFormValues>(
    field: K,
    value: LoanFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function LoanModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: LoanModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Loan</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Apply Date</label>
            <Input
              type="date"
              value={values.applyDate}
              onChange={(e) => onFieldChange("applyDate", e.target.value)}
              className={`h-11 ${errors.applyDate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.applyDate ? <p className="mt-1 text-xs text-red-500">{errors.applyDate}</p> : null}
          </div>

          {[
            ["company", "Company", "Select company", ["Tech Solutions", "Global Enterprise"]],
            ["branch", "Branch", "Select branch", ["Main Branch", "East Branch"]],
            ["department", "Department", "Select department", ["HR", "Finance"]],
            ["employee", "Employee", "Select employee", ["Kaleem", "Waseem"]],
            ["loanType", "Loan Type", "Select loan type", ["Personal Loan", "Business Loan", "Auto Loan"]],
            ["loanTerm", "Loan Term (months)", "36 months", ["36 months", "48 months", "60 months"]],
            ["status", "Status", "Pending", ["Approved", "Pending", "Active"]],
          ].map(([key, label, placeholder, options]) => (
            <div key={key}>
              <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
              <select
                value={values[key as keyof LoanFormValues] as string}
                onChange={(e) => onFieldChange(key as keyof LoanFormValues, e.target.value)}
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                  errors[key as keyof LoanFormValues] ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">{placeholder}</option>
                {(options as string[]).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors[key as keyof LoanFormValues] ? (
                <p className="mt-1 text-xs text-red-500">
                  {errors[key as keyof LoanFormValues]}
                </p>
              ) : null}
            </div>
          ))}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Loan Amount</label>
            <Input
              value={values.loanAmount}
              onChange={(e) => onFieldChange("loanAmount", e.target.value)}
              placeholder="Enter loan amount"
              className={`h-11 ${errors.loanAmount ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.loanAmount ? <p className="mt-1 text-xs text-red-500">{errors.loanAmount}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Interest Rate (%)</label>
            <Input
              value={values.interestRate}
              onChange={(e) => onFieldChange("interestRate", e.target.value)}
              placeholder="Enter interest rate"
              className={`h-11 ${errors.interestRate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.interestRate ? <p className="mt-1 text-xs text-red-500">{errors.interestRate}</p> : null}
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


