export type AllowanceDeductionStatus = "Active" | "Expiring Soon" | "Expired";
export type AllowanceDeductionType = "Allowance" | "Deduction";

export type AllowanceDeductionRow = {
  id: number;
  type: AllowanceDeductionType;
  name: string;
  code: string;
  amount: string;
  description: string;
  status: AllowanceDeductionStatus;
};

export const allowanceDeductionDummyRows: AllowanceDeductionRow[] = [
  {
    id: 1,
    type: "Allowance",
    name: "Housing allowance",
    code: "HA-001",
    amount: "15%",
    description: "Monthly support",
    status: "Active",
  },
  {
    id: 2,
    type: "Allowance",
    name: "Tax Deduction",
    code: "HA-005",
    amount: "$10",
    description: "Federal Income tax",
    status: "Expiring Soon",
  },
  {
    id: 3,
    type: "Deduction",
    name: "Health Insurance",
    code: "HA-001",
    amount: "90%",
    description: "Daily meal subsidy",
    status: "Active",
  },
];
