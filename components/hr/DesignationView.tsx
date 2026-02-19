"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  designationDummyRows,
  type DesignationRow,
  type DesignationStatus,
} from "@/components/hr/data/designation-data";
import {
  DesignationModal,
  type DesignationFormValues,
} from "@/components/hr/modals/DesignationModal";

const defaultFormValues: DesignationFormValues = {
  company: "",
  branch: "",
  department: "",
  designationName: "",
  isActive: true,
};

export function DesignationView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<DesignationRow[]>([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof DesignationFormValues, string>>
  >({});
  const [formValues, setFormValues] =
    useState<DesignationFormValues>(defaultFormValues);

  const statusClass = (status: DesignationStatus) => {
    if (status === "Active") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Expiring Soon") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#FFD9EC] text-[#D63384]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.company.toLowerCase().includes(term) ||
        row.branch.toLowerCase().includes(term) ||
        row.designation.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues(defaultFormValues);
    setErrors({});
  };

  const handleFieldChange = <K extends keyof DesignationFormValues>(
    field: K,
    value: DesignationFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<keyof DesignationFormValues, string>> = {};
    if (!formValues.company) nextErrors.company = "Please fill this field";
    if (!formValues.branch) nextErrors.branch = "Please fill this field";
    if (!formValues.department)
      nextErrors.department = "Please fill this field";
    if (!formValues.designationName)
      nextErrors.designationName = "Please fill this field";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const seed = rows.length === 0 ? designationDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;

    const newRow: DesignationRow = {
      id: nextId,
      company: formValues.company,
      branch: formValues.branch,
      designation: formValues.designationName,
      status: formValues.isActive ? "Active" : "Expired",
    };

    setRows([...seed, ...rows, newRow]);
    closeModal();
    hrLayout?.setShowInnerSidebar(false);
  };

  useEffect(() => {
    hrLayout?.setShowInnerSidebar(true);
  }, []);

  return (
    <section className="min-h-[560px] flex-1">
      {hrLayout && !hrLayout.showInnerSidebar && (
        <button
          type="button"
          onClick={() => hrLayout.setShowInnerSidebar(true)}
          className="mb-2 inline-flex items-center text-[#6B7280] hover:text-[#374151]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">
            Designation Management
          </h1>
          <p className="mt-1 text-sm text-[#667085]">
            Organize titles for clarity and structure
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87]"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Designation
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
            Report
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
            Export
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, user, licences..."
            className="h-11 border-[#EAECF0] bg-[#F8FAFC] pl-9"
          />
        </div>
      </div>

      {filteredRows.length === 0 ? (
        <div className="flex min-h-[360px] items-center justify-center">
          <div className="text-center">
            <p className="text-3xl text-[#D0D5DD]">!</p>
            <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
              Add Company First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Company name</th>
                  <th className="px-3 py-3 font-semibold">Branch Name</th>
                  <th className="px-3 py-3 font-semibold">Designation Name</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}
                  >
                    <td className="px-3 py-3 text-[#374151]">{row.company}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.branch}</td>
                    <td className="px-3 py-3 text-[#374151]">
                      {row.designation}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <Pencil className="h-4 w-4 cursor-pointer text-[#0B63CE]" />
                        <Trash2 className="h-4 w-4 cursor-pointer text-[#E11D48]" />
                        <Ban className="h-4 w-4 cursor-pointer text-[#2EA8DF]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <DesignationModal
        isOpen={isModalOpen}
        values={formValues}
        errors={errors}
        onFieldChange={handleFieldChange}
        onClose={closeModal}
        onSave={handleSave}
      />
    </section>
  );
}
