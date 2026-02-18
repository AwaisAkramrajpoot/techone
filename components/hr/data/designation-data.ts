export type DesignationStatus = "Active" | "Expiring Soon" | "Expired";

export type DesignationRow = {
  id: number;
  company: string;
  branch: string;
  designation: string;
  status: DesignationStatus;
};

export const designationDummyRows: DesignationRow[] = [
  {
    id: 1,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - Main",
    designation: "Senior Developer",
    status: "Active",
  },
  {
    id: 2,
    company: "Global Enterprises",
    branch: "Global Enterprise",
    designation: "Operations Manager",
    status: "Expiring Soon",
  },
  {
    id: 3,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - East",
    designation: "Finance Analyst",
    status: "Active",
  },
];
