"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type QuickAddEmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    name: string;
    fatherName: string;
    cnic: string;
    address: string;
    phone: string;
    designation: string;
    picture: string;
  }) => void;
};

type QuickAddValues = {
  name: string;
  fatherName: string;
  cnic: string;
  phone: string;
  address: string;
  designation: string;
};

const initialValues: QuickAddValues = {
  name: "",
  fatherName: "",
  cnic: "",
  phone: "",
  address: "",
  designation: "",
};

const getDigitsValue = (value: string) => value.replace(/\D/g, "");

export function QuickAddEmployeeModal({
  isOpen,
  onClose,
  onSubmit,
}: QuickAddEmployeeModalProps) {
  const [values, setValues] = useState<QuickAddValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof QuickAddValues, string>>>({});

  useEffect(() => {
    if (!isOpen) return;
    setValues(initialValues);
    setErrors({});
  }, [isOpen]);

  if (!isOpen) return null;

  const setField = <K extends keyof QuickAddValues>(key: K, value: QuickAddValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof QuickAddValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Required";
    if (!values.fatherName.trim()) nextErrors.fatherName = "Required";
    if (!values.cnic.trim()) nextErrors.cnic = "Required";
    if (!values.phone.trim()) nextErrors.phone = "Required";
    if (!values.address.trim()) nextErrors.address = "Required";
    if (!values.designation.trim()) nextErrors.designation = "Required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit({
      name: values.name.trim(),
      fatherName: values.fatherName.trim(),
      cnic: values.cnic.trim(),
      address: values.address.trim(),
      phone: values.phone.trim(),
      designation: values.designation.trim(),
      picture: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="w-full max-w-xl rounded-md bg-white p-5 shadow-lg sm:p-6">
        <div className="relative mb-4">
          <h2 className="text-xl font-semibold text-[#1F2937]">Quick Add Employee</h2>
          <p className="mt-1 text-xs text-[#98A2B3]">
            Add required details in one step. You can update advanced details later.
          </p>
          <button type="button" onClick={onClose} className="absolute right-0 top-0 text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input
              placeholder="Employee Name"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <Input
              placeholder="Father/Guardian Name"
              value={values.fatherName}
              onChange={(e) => setField("fatherName", e.target.value)}
              className={errors.fatherName ? "border-red-500" : ""}
            />
            {errors.fatherName ? <p className="mt-1 text-xs text-red-500">{errors.fatherName}</p> : null}
          </div>
          <div>
            <Input
              placeholder="CNIC"
              value={values.cnic}
              onChange={(e) => setField("cnic", getDigitsValue(e.target.value))}
              className={errors.cnic ? "border-red-500" : ""}
            />
            {errors.cnic ? <p className="mt-1 text-xs text-red-500">{errors.cnic}</p> : null}
          </div>
          <div>
            <Input
              placeholder="Phone"
              value={values.phone}
              onChange={(e) => setField("phone", getDigitsValue(e.target.value))}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-500">{errors.phone}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <Input
              placeholder="Address"
              value={values.address}
              onChange={(e) => setField("address", e.target.value)}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address ? <p className="mt-1 text-xs text-red-500">{errors.address}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <Input
              placeholder="Designation"
              value={values.designation}
              onChange={(e) => setField("designation", e.target.value)}
              className={errors.designation ? "border-red-500" : ""}
            />
            {errors.designation ? <p className="mt-1 text-xs text-red-500">{errors.designation}</p> : null}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit} className="bg-[#04499E] text-white hover:bg-[#033E87]">
            Save Employee
          </Button>
        </div>
      </div>
    </div>
  );
}
