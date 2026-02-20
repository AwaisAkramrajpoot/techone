"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type BonusFormValues = {
  employee: string;
  bonusType: string;
  bonusAmount: string;
  percentage: string;
  performanceRating: string;
  paymentDate: string;
  calculationBasic: string;
  bonusReason: string;
};

type BonusModalProps = {
  isOpen: boolean;
  values: BonusFormValues;
  errors: Partial<Record<keyof BonusFormValues, string>>;
  onFieldChange: <K extends keyof BonusFormValues>(
    field: K,
    value: BonusFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function BonusModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: BonusModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Bonus</h2>
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
            <label className="mb-2 block text-sm font-medium text-[#374151]">Bonus Type</label>
            <select
              value={values.bonusType}
              onChange={(e) => onFieldChange("bonusType", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.bonusType ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Type</option>
              <option value="Performance">Performance</option>
              <option value="Retention">Retention</option>
              <option value="Referral">Referral</option>
              <option value="Holiday">Holiday</option>
            </select>
            {errors.bonusType ? <p className="mt-1 text-xs text-red-500">{errors.bonusType}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Bonus Amount</label>
            <Input
              value={values.bonusAmount}
              onChange={(e) => onFieldChange("bonusAmount", e.target.value)}
              placeholder="Enter bonus amount"
              className={`h-11 ${errors.bonusAmount ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.bonusAmount ? <p className="mt-1 text-xs text-red-500">{errors.bonusAmount}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Percentage of Salary (%)</label>
            <Input
              value={values.percentage}
              onChange={(e) => onFieldChange("percentage", e.target.value)}
              placeholder="Enter percentage"
              className={`h-11 ${errors.percentage ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.percentage ? <p className="mt-1 text-xs text-red-500">{errors.percentage}</p> : null}
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
              <option value="4.0/5.0">4 - Expectations</option>
              <option value="4.5/5.0">4.5 - Exceeds Expectations</option>
              <option value="4.9/5.0">5 - Outstanding</option>
            </select>
            {errors.performanceRating ? (
              <p className="mt-1 text-xs text-red-500">{errors.performanceRating}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Payment Date</label>
            <Input
              type="date"
              value={values.paymentDate}
              onChange={(e) => onFieldChange("paymentDate", e.target.value)}
              className={`h-11 ${errors.paymentDate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.paymentDate ? <p className="mt-1 text-xs text-red-500">{errors.paymentDate}</p> : null}
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
            <label className="mb-2 block text-sm font-medium text-[#374151]">Bonus Reason</label>
            <textarea
              value={values.bonusReason}
              onChange={(e) => onFieldChange("bonusReason", e.target.value)}
              placeholder="Explain the reason for this bonus"
              className={`min-h-[84px] w-full rounded-md border p-3 text-sm outline-none focus:border-[#04499E] ${
                errors.bonusReason ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.bonusReason ? <p className="mt-1 text-xs text-red-500">{errors.bonusReason}</p> : null}
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


