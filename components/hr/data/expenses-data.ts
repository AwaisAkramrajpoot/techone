export type ExpenseStatus = "Paid" | "Pending";
export type ExpenseCategory = "Office" | "Utilities" | "Software";

export type ExpenseRow = {
  id: number;
  description: string;
  category: ExpenseCategory;
  paymentMethod: string;
  amount: string;
  date: string;
  status: ExpenseStatus;
};

export const expensesDummyRows: ExpenseRow[] = [
  {
    id: 1,
    description: "Office Rent",
    category: "Office",
    paymentMethod: "Bank Transfer",
    amount: "25,000",
    date: "Oct 15, 2023",
    status: "Paid",
  },
  {
    id: 2,
    description: "Utilities Payment",
    category: "Utilities",
    paymentMethod: "Credit Card",
    amount: "20,000",
    date: "Oct 18, 2023",
    status: "Pending",
  },
  {
    id: 3,
    description: "Website Hosting",
    category: "Software",
    paymentMethod: "Credit Card",
    amount: "12,000",
    date: "Oct 12, 2023",
    status: "Paid",
  },
  {
    id: 4,
    description: "Office Furniture",
    category: "Office",
    paymentMethod: "Bank Transfer",
    amount: "45,000",
    date: "Oct 15, 2023",
    status: "Paid",
  },
];
