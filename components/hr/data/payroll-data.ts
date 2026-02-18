export type PayrollStatus = "Processed" | "Onhold";

export type PayrollRow = {
  id: number;
  employee: string;
  department: string;
  grossPay: string;
  taxes: string;
  deductions: string;
  netPay: string;
  paymentMethod: string;
  status: PayrollStatus;
};

export const payrollDummyRows: PayrollRow[] = [
  {
    id: 1,
    employee: "Kaleem",
    department: "Engineering",
    grossPay: "25,000",
    taxes: "25,000",
    deductions: "25,000",
    netPay: "25,000",
    paymentMethod: "Bank Transfer",
    status: "Processed",
  },
  {
    id: 2,
    employee: "Amir",
    department: "Sales",
    grossPay: "20,000",
    taxes: "20,000",
    deductions: "20,000",
    netPay: "20,000",
    paymentMethod: "Credit Card",
    status: "Onhold",
  },
  {
    id: 3,
    employee: "waseem",
    department: "Marketing",
    grossPay: "12,000",
    taxes: "12,000",
    deductions: "12,000",
    netPay: "12,000",
    paymentMethod: "Credit Card",
    status: "Processed",
  },
  {
    id: 4,
    employee: "Amir",
    department: "Sales",
    grossPay: "45,000",
    taxes: "45,000",
    deductions: "45,000",
    netPay: "45,000",
    paymentMethod: "Bank Transfer",
    status: "Processed",
  },
];
