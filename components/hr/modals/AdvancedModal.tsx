"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";

const getDecimalValue = (value: string) => {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  if (parts.length <= 1) return parts[0];
  return `${parts[0]}.${parts.slice(1).join("")}`;
};

export type AdvancedFormValues = {
  applyDate: string;
  company: string;
  branch: string;
  department: string;
  employee: string;
  advanceType: string;
  advanceName: string;
  description: string;
  returnAmount: string;
  approvalStatus: string;
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
  const selectFields: Array<{
    key: "company" | "branch" | "department" | "employee";
    label: string;
    placeholder: string;
    options: string[];
  }> = [
    {
      key: "company",
      label: "Company",
      placeholder: "Select company",
      options: ["Tech Solutions", "Global Enterprise"],
    },
    {
      key: "branch",
      label: "Branch",
      placeholder: "Select branch",
      options: ["Main Branch", "East Branch"],
    },
    {
      key: "department",
      label: "Department",
      placeholder: "Select department",
      options: ["HR", "Finance", "Operations"],
    },
    {
      key: "employee",
      label: "Employee",
      placeholder: "Select employee",
      options: ["Kaleem", "Aleem", "Amir"],
    },
  ];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] [&_select]:w-full [&_select]:min-w-0 [&_select]:max-w-full [&_select]:pr-9 [&_select]:overflow-hidden [&_select]:text-ellipsis [&_select]:whitespace-nowrap [&_option]:max-w-full [&_option]:whitespace-normal [&_option]:break-words max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
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

          {selectFields.map(({ key, label, placeholder, options }) => (
            <div key={key}>
              <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
              <select
                value={values[key]}
                onChange={(e) => onFieldChange(key, e.target.value)}
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                  errors[key] ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[key] ? <p className="mt-1 text-xs text-red-500">{errors[key]}</p> : null}
            </div>
          ))}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Advance Type</label>
            <select
              value={values.advanceType}
              onChange={(e) => onFieldChange("advanceType", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.advanceType ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Type</option>
              <option value="Salary Advance">Salary Advance</option>
              <option value="Emergency Advance">Emergency Advance</option>
              <option value="Festival Advance">Festival Advance</option>
              <option value="Medical Advance">Medical Advance</option>
              <option value="Other">Other</option>
            </select>
            {errors.advanceType ? <p className="mt-1 text-xs text-red-500">{errors.advanceType}</p> : null}
          </div>

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
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Return Amount (Current Month)
            </label>
            <Input
              value={values.returnAmount}
              onChange={(e) => onFieldChange("returnAmount", getDecimalValue(e.target.value))}
              placeholder="Enter return amount"
              className={`h-11 ${errors.returnAmount ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.returnAmount ? <p className="mt-1 text-xs text-red-500">{errors.returnAmount}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Approval Status</label>
            <select
              value={values.approvalStatus}
              onChange={(e) => onFieldChange("approvalStatus", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.approvalStatus ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select approval status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            {errors.approvalStatus ? <p className="mt-1 text-xs text-red-500">{errors.approvalStatus}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Attachment</label>
            <a
              href="/templates/advance-request-template.txt"
              download
              className="mb-2 inline-block text-xs font-medium text-[#0B63CE] hover:underline"
            >
              Download Dummy Template
            </a>
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





