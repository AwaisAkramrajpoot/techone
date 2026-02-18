"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";

export type AdvancedFormValues = {
  applyDate: string;
  company: string;
  branch: string;
  department: string;
  employee: string;
  advanceType: string;
  advanceName: string;
  description: string;
  attachment: string;
  status: boolean;
};

type AdvancedModalProps = {
  isOpen: boolean;
  values: AdvancedFormValues;
  errors: Partial<Record<keyof AdvancedFormValues, string>>;
  onFieldChange: <K extends keyof AdvancedFormValues>(
    field: K,
    value: AdvancedFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function AdvancedModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: AdvancedModalProps) {
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Advance Data</h2>
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
            ["company", "Company", "Select company"],
            ["branch", "Branch", "Select branch"],
            ["department", "Department", "Select department"],
            ["employee", "Employee", "Select employee"],
            ["advanceType", "Advance Type", "Select Type"],
          ].map(([key, label, placeholder]) => (
            <div key={key}>
              <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
              <select
                value={values[key as keyof AdvancedFormValues] as string}
                onChange={(e) =>
                  onFieldChange(key as keyof AdvancedFormValues, e.target.value)
                }
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                  errors[key as keyof AdvancedFormValues] ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">{placeholder}</option>
                <option value="Option 1">Option 1</option>
              </select>
              {errors[key as keyof AdvancedFormValues] ? (
                <p className="mt-1 text-xs text-red-500">
                  {errors[key as keyof AdvancedFormValues]}
                </p>
              ) : null}
            </div>
          ))}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Advance Name</label>
            <Input
              value={values.advanceName}
              onChange={(e) => onFieldChange("advanceName", e.target.value)}
              placeholder="e.g. Morning Shift, Night Shift"
              className={`h-11 ${errors.advanceName ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.advanceName ? <p className="mt-1 text-xs text-red-500">{errors.advanceName}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Description</label>
            <Input
              value={values.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              placeholder="Enter description"
              className={`h-11 ${errors.description ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.description ? <p className="mt-1 text-xs text-red-500">{errors.description}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Attachment</label>
            <input
              ref={attachmentInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => onFieldChange("attachment", e.target.files?.[0]?.name ?? "")}
            />
            <button
              type="button"
              onClick={() => attachmentInputRef.current?.click()}
              className={`flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed ${
                errors.attachment ? "border-red-500" : "border-[#D0D5DD]"
              } text-[#98A2B3]`}
            >
              <Upload className="h-4 w-4" />
              <span className="mt-1 text-xs">
                {values.attachment || "Drag & drop reception or click to upload"}
              </span>
            </button>
            {errors.attachment ? <p className="mt-1 text-xs text-red-500">{errors.attachment}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Status</label>
            <button
              type="button"
              onClick={() => onFieldChange("status", !values.status)}
              className={`relative h-6 w-11 rounded-full transition ${
                values.status ? "bg-[#04499E]" : "bg-[#CBD5E1]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                  values.status ? "left-5" : "left-0.5"
                }`}
              />
            </button>
            <span className="ml-2 text-sm text-[#374151]">
              {values.status ? "Active" : "Inactive"}
            </span>
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
