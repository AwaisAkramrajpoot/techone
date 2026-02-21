export type AdvancedStatus = "Active" | "Expiring Soon" | "Expired";
export type AdvancedType =
  | "Salary Advance"
  | "Emergency Advance"
  | "Festival Advance"
  | "Medical Advance"
  | "Other";

export type AdvancedRow = {
  id: number;
  code: string;
  name: string;
  createdDate: string;
  type: AdvancedType;
  status: AdvancedStatus;
};

export const advancedDummyRows: AdvancedRow[] = [
  {
    id: 1,
    code: "#0001",
    name: "Salary Support",
    createdDate: "Oct 15, 2023",
    type: "Salary Advance",
    status: "Active",
  },
  {
    id: 2,
    code: "#0002",
    name: "Emergency Help",
    createdDate: "Oct 18, 2023",
    type: "Emergency Advance",
    status: "Expiring Soon",
  },
  {
    id: 3,
    code: "#0003",
    name: "Medical Relief",
    createdDate: "Oct 12, 2023",
    type: "Medical Advance",
    status: "Active",
  },
];
