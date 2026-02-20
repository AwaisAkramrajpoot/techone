"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Upload, X } from "lucide-react";

type EmployeeRegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    name: string;
    fatherName: string;
    cnic: string;
    address: string;
    phone: string;
  }) => void;
};

type EmployeeRegistrationFormValues = {
  fullName: string;
  fatherName: string;
  cnic: string;
  mobile: string;
  email: string;
  picture: string;
  cnicFront: string;
  cnicBack: string;
  permStreet: string;
  permCity: string;
  permProvince: string;
  permPostal: string;
  sameAsPermanent: boolean;
  resStreet: string;
  resCity: string;
  resProvince: string;
  resPostal: string;
  country: string;
  company: string;
  branch: string;
  department: string;
  shift: string;
  designation: string;
  biometricId: string;
  documentType: string;
  documentAttachment: string;
  remarks: string;
};

const defaultValues: EmployeeRegistrationFormValues = {
  fullName: "",
  fatherName: "",
  cnic: "",
  mobile: "",
  email: "",
  picture: "",
  cnicFront: "",
  cnicBack: "",
  permStreet: "",
  permCity: "",
  permProvince: "",
  permPostal: "",
  sameAsPermanent: false,
  resStreet: "",
  resCity: "",
  resProvince: "",
  resPostal: "",
  country: "",
  company: "",
  branch: "",
  department: "",
  shift: "",
  designation: "",
  biometricId: "",
  documentType: "",
  documentAttachment: "",
  remarks: "",
};

const steps = [
  { index: 1, label: "Personal Info", title: "Personal Information" },
  { index: 2, label: "CNIC Upload", title: "CNIC Upload" },
  { index: 3, label: "Address", title: "Address Information" },
  { index: 4, label: "Job Details", title: "Job Details" },
  { index: 5, label: "Documents", title: "Documents Upload" },
] as const;

export function EmployeeRegistrationModal({
  isOpen,
  onClose,
  onSubmit,
}: EmployeeRegistrationModalProps) {
  const pictureInputRef = useRef<HTMLInputElement>(null);
  const cnicFrontInputRef = useRef<HTMLInputElement>(null);
  const cnicBackInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState<EmployeeRegistrationFormValues>(
    defaultValues
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof EmployeeRegistrationFormValues, string>>
  >({});

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setValues(defaultValues);
      setErrors({});
    }
  }, [isOpen]);

  const progressPercent = useMemo(() => `${currentStep * 20}%`, [currentStep]);

  if (!isOpen) return null;

  const setField = <K extends keyof EmployeeRegistrationFormValues>(
    field: K,
    value: EmployeeRegistrationFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateCurrentStep = () => {
    const nextErrors: Partial<Record<keyof EmployeeRegistrationFormValues, string>> =
      {};

    if (currentStep === 1) {
      if (!values.fullName) nextErrors.fullName = "Please fill this field";
      if (!values.fatherName) nextErrors.fatherName = "Please fill this field";
      if (!values.cnic) nextErrors.cnic = "Please fill this field";
      if (!values.mobile) nextErrors.mobile = "Please fill this field";
      if (!values.email) nextErrors.email = "Please fill this field";
    }

    if (currentStep === 2) {
      if (!values.cnicFront) nextErrors.cnicFront = "Please fill this field";
      if (!values.cnicBack) nextErrors.cnicBack = "Please fill this field";
    }

    if (currentStep === 3) {
      if (!values.permStreet) nextErrors.permStreet = "Please fill this field";
      if (!values.permCity) nextErrors.permCity = "Please fill this field";
      if (!values.permProvince) nextErrors.permProvince = "Please fill this field";
      if (!values.permPostal) nextErrors.permPostal = "Please fill this field";
      if (!values.sameAsPermanent) {
        if (!values.resStreet) nextErrors.resStreet = "Please fill this field";
        if (!values.resCity) nextErrors.resCity = "Please fill this field";
        if (!values.resProvince) nextErrors.resProvince = "Please fill this field";
        if (!values.resPostal) nextErrors.resPostal = "Please fill this field";
      }
      if (!values.country) nextErrors.country = "Please fill this field";
    }

    if (currentStep === 4) {
      if (!values.company) nextErrors.company = "Please fill this field";
      if (!values.branch) nextErrors.branch = "Please fill this field";
      if (!values.department) nextErrors.department = "Please fill this field";
      if (!values.shift) nextErrors.shift = "Please fill this field";
      if (!values.designation) nextErrors.designation = "Please fill this field";
    }

    if (currentStep === 5) {
      if (!values.documentType) nextErrors.documentType = "Please fill this field";
      if (!values.documentAttachment)
        nextErrors.documentAttachment = "Please fill this field";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onNext = () => {
    if (!validateCurrentStep()) return;
    setCurrentStep((prev) => Math.min(5, prev + 1));
  };

  const onBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const onFinalSubmit = () => {
    if (!validateCurrentStep()) return;
    onSubmit({
      name: values.fullName,
      fatherName: values.fatherName,
      cnic: values.cnic,
      address: values.permStreet || values.resStreet,
      phone: values.mobile,
    });
  };

  const renderFieldError = (message?: string) =>
    message ? <p className="mt-1 text-xs text-red-500">{message}</p> : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] max-w-4xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="relative mb-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1F2937]">
              Employee Registration
            </h2>
            <p className="mt-1 text-xs text-[#98A2B3]">
              Complete your profile to join our team and unlock your potential
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-0 top-0 text-[#111827]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-xs text-[#6B7280]">
            <span>Step {currentStep} of 5</span>
            <span className="font-medium text-[#0B63CE]">{progressPercent} Complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#E5EEF9]">
            <div
              className="h-2 rounded-full bg-[#0B63CE] transition-all"
              style={{ width: progressPercent }}
            />
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {steps.map((step) => {
              const completed = step.index < currentStep;
              const active = step.index === currentStep;
              return (
                <div key={step.index} className="text-center">
                  <div
                    className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                      completed || active
                        ? "bg-[#0B63CE] text-white"
                        : "bg-[#E5EEF9] text-[#6B7280]"
                    }`}
                  >
                    {completed ? <Check className="h-3.5 w-3.5" /> : step.index}
                  </div>
                  <p className="mt-1 text-[10px] text-[#6B7280]">
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {currentStep === 1 && (
            <>
              <h3 className="text-lg font-semibold text-[#1F2937]">Personal Information</h3>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Full Name
                </label>
                <Input
                  value={values.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  className={`h-11 ${errors.fullName ? "border-red-500" : "border-[#E5E7EB]"}`}
                />
                {renderFieldError(errors.fullName)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Father Name
                </label>
                <Input
                  value={values.fatherName}
                  onChange={(e) => setField("fatherName", e.target.value)}
                  className={`h-11 ${errors.fatherName ? "border-red-500" : "border-[#E5E7EB]"}`}
                />
                {renderFieldError(errors.fatherName)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  CNIC Number
                </label>
                <Input
                  value={values.cnic}
                  onChange={(e) => setField("cnic", e.target.value)}
                  className={`h-11 ${errors.cnic ? "border-red-500" : "border-[#E5E7EB]"}`}
                />
                {renderFieldError(errors.cnic)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Mobile Number
                </label>
                <Input
                  value={values.mobile}
                  onChange={(e) => setField("mobile", e.target.value)}
                  className={`h-11 ${errors.mobile ? "border-red-500" : "border-[#E5E7EB]"}`}
                />
                {renderFieldError(errors.mobile)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Email Address
                </label>
                <Input
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={`h-11 ${errors.email ? "border-red-500" : "border-[#E5E7EB]"}`}
                />
                {renderFieldError(errors.email)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Picture
                </label>
                <input
                  ref={pictureInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setField("picture", e.target.files?.[0]?.name ?? "")
                  }
                />
                <button
                  type="button"
                  onClick={() => pictureInputRef.current?.click()}
                  className="flex h-11 items-center gap-2 rounded-md border border-[#D0D5DD] px-3 text-xs text-[#6B7280]"
                >
                  <Upload className="h-3.5 w-3.5" />
                  {values.picture || "Upload photo"}
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h3 className="text-lg font-semibold text-[#1F2937]">CNIC Upload</h3>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  CNIC Front Side
                </label>
                <input
                  ref={cnicFrontInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) =>
                    setField("cnicFront", e.target.files?.[0]?.name ?? "")
                  }
                />
                <button
                  type="button"
                  onClick={() => cnicFrontInputRef.current?.click()}
                  className={`flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed ${
                    errors.cnicFront ? "border-red-500" : "border-[#D0D5DD]"
                  } text-[#98A2B3]`}
                >
                  <Upload className="h-4 w-4" />
                  <span className="mt-1 text-xs">
                    {values.cnicFront || "Click to upload CNIC front side"}
                  </span>
                </button>
                {renderFieldError(errors.cnicFront)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  CNIC Back Side
                </label>
                <input
                  ref={cnicBackInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) =>
                    setField("cnicBack", e.target.files?.[0]?.name ?? "")
                  }
                />
                <button
                  type="button"
                  onClick={() => cnicBackInputRef.current?.click()}
                  className={`flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed ${
                    errors.cnicBack ? "border-red-500" : "border-[#D0D5DD]"
                  } text-[#98A2B3]`}
                >
                  <Upload className="h-4 w-4" />
                  <span className="mt-1 text-xs">
                    {values.cnicBack || "Click to upload CNIC back side"}
                  </span>
                </button>
                {renderFieldError(errors.cnicBack)}
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h3 className="text-lg font-semibold text-[#1F2937]">Address Information</h3>
              <p className="text-xs text-[#98A2B3]">Permanent Address</p>
              <Input
                placeholder="Street Address"
                value={values.permStreet}
                onChange={(e) => setField("permStreet", e.target.value)}
                className={errors.permStreet ? "border-red-500" : ""}
              />
              {renderFieldError(errors.permStreet)}
              <Input
                placeholder="City"
                value={values.permCity}
                onChange={(e) => setField("permCity", e.target.value)}
                className={errors.permCity ? "border-red-500" : ""}
              />
              {renderFieldError(errors.permCity)}
              <Input
                placeholder="Province"
                value={values.permProvince}
                onChange={(e) => setField("permProvince", e.target.value)}
                className={errors.permProvince ? "border-red-500" : ""}
              />
              {renderFieldError(errors.permProvince)}
              <Input
                placeholder="Postal Code"
                value={values.permPostal}
                onChange={(e) => setField("permPostal", e.target.value)}
                className={errors.permPostal ? "border-red-500" : ""}
              />
              {renderFieldError(errors.permPostal)}

              <label className="inline-flex items-center gap-2 text-xs text-[#374151]">
                <input
                  type="checkbox"
                  checked={values.sameAsPermanent}
                  onChange={(e) => setField("sameAsPermanent", e.target.checked)}
                />
                Residential address is same permanent address
              </label>

              {!values.sameAsPermanent && (
                <>
                  <p className="text-xs text-[#98A2B3]">Residential Address</p>
                  <Input
                    placeholder="Street Address"
                    value={values.resStreet}
                    onChange={(e) => setField("resStreet", e.target.value)}
                    className={errors.resStreet ? "border-red-500" : ""}
                  />
                  {renderFieldError(errors.resStreet)}
                  <Input
                    placeholder="City"
                    value={values.resCity}
                    onChange={(e) => setField("resCity", e.target.value)}
                    className={errors.resCity ? "border-red-500" : ""}
                  />
                  {renderFieldError(errors.resCity)}
                  <Input
                    placeholder="Province"
                    value={values.resProvince}
                    onChange={(e) => setField("resProvince", e.target.value)}
                    className={errors.resProvince ? "border-red-500" : ""}
                  />
                  {renderFieldError(errors.resProvince)}
                  <Input
                    placeholder="Postal Code"
                    value={values.resPostal}
                    onChange={(e) => setField("resPostal", e.target.value)}
                    className={errors.resPostal ? "border-red-500" : ""}
                  />
                  {renderFieldError(errors.resPostal)}
                </>
              )}

              <select
                value={values.country}
                onChange={(e) => setField("country", e.target.value)}
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                  errors.country ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">Select country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="UAE">UAE</option>
              </select>
              {renderFieldError(errors.country)}
            </>
          )}

          {currentStep === 4 && (
            <>
              <h3 className="text-lg font-semibold text-[#1F2937]">Job Details</h3>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Company
                </label>
                <select
                  value={values.company}
                  onChange={(e) => setField("company", e.target.value)}
                  className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                    errors.company ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                >
                  <option value="">Select company</option>
                  <option value="Tech Solutions Pvt Ltd">Tech Solutions Pvt Ltd</option>
                </select>
                {renderFieldError(errors.company)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Branch
                </label>
                <select
                  value={values.branch}
                  onChange={(e) => setField("branch", e.target.value)}
                  className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                    errors.branch ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                >
                  <option value="">Select branch</option>
                  <option value="Main">Main</option>
                </select>
                {renderFieldError(errors.branch)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Department
                </label>
                <select
                  value={values.department}
                  onChange={(e) => setField("department", e.target.value)}
                  className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                    errors.department ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                >
                  <option value="">Select department</option>
                  <option value="HR">HR</option>
                </select>
                {renderFieldError(errors.department)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Shift
                </label>
                <select
                  value={values.shift}
                  onChange={(e) => setField("shift", e.target.value)}
                  className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                    errors.shift ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                >
                  <option value="">Select shift</option>
                  <option value="Morning">Morning</option>
                </select>
                {renderFieldError(errors.shift)}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Designation
                </label>
                <select
                  value={values.designation}
                  onChange={(e) => setField("designation", e.target.value)}
                  className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                    errors.designation ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                >
                  <option value="">Select designation</option>
                  <option value="Manager">Manager</option>
                </select>
                {renderFieldError(errors.designation)}
              </div>
              <Input
                placeholder="Enter biometric ID (if available)"
                value={values.biometricId}
                onChange={(e) => setField("biometricId", e.target.value)}
              />
            </>
          )}

          {currentStep === 5 && (
            <>
              <h3 className="text-lg font-semibold text-[#1F2937]">Documents Upload</h3>
              <select
                value={values.documentType}
                onChange={(e) => setField("documentType", e.target.value)}
                className={`h-11 w-full rounded-md border px-3 text-sm outline-none ${
                  errors.documentType ? "border-red-500" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">Select document type</option>
                <option value="CV">CV</option>
                <option value="Degree">Degree</option>
              </select>
              {renderFieldError(errors.documentType)}

              <input
                ref={documentInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) =>
                  setField("documentAttachment", e.target.files?.[0]?.name ?? "")
                }
              />
              <button
                type="button"
                onClick={() => documentInputRef.current?.click()}
                className={`flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed ${
                  errors.documentAttachment ? "border-red-500" : "border-[#D0D5DD]"
                } text-[#98A2B3]`}
              >
                <Upload className="h-4 w-4" />
                <span className="mt-1 text-xs">
                  {values.documentAttachment || "Drag & drop receipt or click to upload"}
                </span>
              </button>
              {renderFieldError(errors.documentAttachment)}

              <Input
                placeholder="Additional Notes"
                value={values.remarks}
                onChange={(e) => setField("remarks", e.target.value)}
              />
            </>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3">
          <div>
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="border-[#8AAEDA] text-[#0B63CE]"
              >
                Previous
              </Button>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setValues(defaultValues);
                setErrors({});
              }}
              className="border-[#8AAEDA] bg-[#8AAEDA] text-white hover:bg-[#7A9ECB]"
            >
              Clear
            </Button>
            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={onNext}
                className="bg-[#04499E] text-white hover:bg-[#033E87]"
              >
                Next
              </Button>
            ) : (
              <Button
                type="button"
                onClick={onFinalSubmit}
                className="bg-[#04499E] text-white hover:bg-[#033E87]"
              >
                Submit Registration
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


