"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type AllowanceDeductionFormValues = {
  type: "Allowance" | "Deduction" | "";
  name: string;
  amount: string;
  code: string;
  description: string;
};

type AllowanceDeductionModalProps = {
  isOpen: boolean;
  values: AllowanceDeductionFormValues;
  errors: Partial<Record<keyof AllowanceDeductionFormValues, string>>;
  onFieldChange: <K extends keyof AllowanceDeductionFormValues>(
    field: K,
    value: AllowanceDeductionFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function AllowanceDeductionModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: AllowanceDeductionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Add New Allowance/Deduction
          </h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Type
            </label>
            <select
              value={values.type}
              onChange={(e) =>
                onFieldChange("type", e.target.value as AllowanceDeductionFormValues["type"])
              }
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.type ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select type</option>
              <option value="Allowance">Allowance</option>
              <option value="Deduction">Deduction</option>
            </select>
            {errors.type ? <p className="mt-1 text-xs text-red-500">{errors.type}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Name
            </label>
            <Input
              value={values.name}
              onChange={(e) => onFieldChange("name", e.target.value)}
              placeholder="e.g., Housing Allowance, Tax"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.name ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Amount/Percentage
            </label>
            <Input
              value={values.amount}
              onChange={(e) => onFieldChange("amount", e.target.value)}
              placeholder="e.g., 500 or 5%"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.amount ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.amount ? <p className="mt-1 text-xs text-red-500">{errors.amount}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Code
            </label>
            <Input
              value={values.code}
              onChange={(e) => onFieldChange("code", e.target.value)}
              placeholder="e.g., HA-001, TD-005"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.code ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.code ? <p className="mt-1 text-xs text-red-500">{errors.code}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Description
            </label>
            <Input
              value={values.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              placeholder="Enter description"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.description ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.description ? (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
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

