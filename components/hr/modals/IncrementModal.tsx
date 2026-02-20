"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type IncrementFormValues = {
  employee: string;
  incrementType: string;
  currentSalary: string;
  incrementPercentage: string;
  performanceRating: string;
  effectiveDate: string;
  calculationBasic: string;
  incrementReason: string;
  hodComments: string;
};

type IncrementModalProps = {
  isOpen: boolean;
  values: IncrementFormValues;
  errors: Partial<Record<keyof IncrementFormValues, string>>;
  onFieldChange: <K extends keyof IncrementFormValues>(
    field: K,
    value: IncrementFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function IncrementModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: IncrementModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Salary Increment</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Employee</label>
            <select
              value={values.employee}
              onChange={(e) => onFieldChange("employee", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.employee ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select employee</option>
              <option value="Kaleem">Kaleem</option>
              <option value="Amir">Amir</option>
              <option value="waseem">waseem</option>
            </select>
            {errors.employee ? <p className="mt-1 text-xs text-red-500">{errors.employee}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Increment Type</label>
            <select
              value={values.incrementType}
              onChange={(e) => onFieldChange("incrementType", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.incrementType ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Type</option>
              <option value="Annual">Annual</option>
              <option value="Promotion">Promotion</option>
              <option value="Adjustment">Adjustment</option>
            </select>
            {errors.incrementType ? (
              <p className="mt-1 text-xs text-red-500">{errors.incrementType}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Current Salary</label>
            <Input
              value={values.currentSalary}
              onChange={(e) => onFieldChange("currentSalary", e.target.value)}
              placeholder="Enter current salary"
              className={`h-11 ${errors.currentSalary ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.currentSalary ? (
              <p className="mt-1 text-xs text-red-500">{errors.currentSalary}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Increment Percentage</label>
            <Input
              value={values.incrementPercentage}
              onChange={(e) => onFieldChange("incrementPercentage", e.target.value)}
              placeholder="Enter increment percentage"
              className={`h-11 ${errors.incrementPercentage ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.incrementPercentage ? (
              <p className="mt-1 text-xs text-red-500">{errors.incrementPercentage}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Performance Rating (1-5)</label>
            <select
              value={values.performanceRating}
              onChange={(e) => onFieldChange("performanceRating", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.performanceRating ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select rating</option>
              <option value="3.5/5.0">3 - Meets Expectations</option>
              <option value="4.0/5.0">4 - Exceeds Expectations</option>
              <option value="4.5/5.0">4.5 - High Performance</option>
              <option value="4.9/5.0">5 - Outstanding</option>
            </select>
            {errors.performanceRating ? (
              <p className="mt-1 text-xs text-red-500">{errors.performanceRating}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Effective Date</label>
            <Input
              type="date"
              value={values.effectiveDate}
              onChange={(e) => onFieldChange("effectiveDate", e.target.value)}
              className={`h-11 ${errors.effectiveDate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.effectiveDate ? <p className="mt-1 text-xs text-red-500">{errors.effectiveDate}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Calculation Basic</label>
            <select
              value={values.calculationBasic}
              onChange={(e) => onFieldChange("calculationBasic", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.calculationBasic ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select basic</option>
              <option value="Gross Salary">Gross Salary</option>
              <option value="Net Salary">Net Salary</option>
            </select>
            {errors.calculationBasic ? (
              <p className="mt-1 text-xs text-red-500">{errors.calculationBasic}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Increment Reason</label>
            <textarea
              value={values.incrementReason}
              onChange={(e) => onFieldChange("incrementReason", e.target.value)}
              placeholder="Explain the reason for this increment"
              className={`min-h-[84px] w-full rounded-md border p-3 text-sm outline-none focus:border-[#04499E] ${
                errors.incrementReason ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.incrementReason ? (
              <p className="mt-1 text-xs text-red-500">{errors.incrementReason}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">HOD Comments</label>
            <textarea
              value={values.hodComments}
              onChange={(e) => onFieldChange("hodComments", e.target.value)}
              placeholder="Manager feedback and comments"
              className="min-h-[84px] w-full rounded-md border border-[#E5E7EB] p-3 text-sm outline-none focus:border-[#04499E]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button onClick={onSave} className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]">
            Add Bonus
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

