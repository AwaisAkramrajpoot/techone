export type AdvancedStatus = "Active" | "Expiring Soon" | "Expired";
export type AdvancedType = "Analytics" | "Transaction" | "Log";

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
    name: "Tech Solutions...",
    createdDate: "Oct 15, 2023",
    type: "Analytics",
    status: "Active",
  },
  {
    id: 2,
    code: "#0002",
    name: "Global Enterprise",
    createdDate: "Oct 18, 2023",
    type: "Transaction",
    status: "Expiring Soon",
  },
  {
    id: 3,
    code: "#0003",
    name: "Tech Solutions...",
    createdDate: "Oct 12, 2023",
    type: "Analytics",
    status: "Active",
  },
];
