export type LoanStatus = "Approved" | "Pending" | "Active";

export type LoanRow = {
  id: number;
  customer: string;
  loanId: string;
  type: string;
  amount: string;
  interestRate: string;
  term: string;
  appliedDate: string;
  status: LoanStatus;
};

export const loanDummyRows: LoanRow[] = [
  {
    id: 1,
    customer: "Kaleem",
    loanId: "LA-2343",
    type: "Personal Loan",
    amount: "25,000",
    interestRate: "7.5 %",
    term: "36 months",
    appliedDate: "Oct 15, 2023",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Waseem",
    loanId: "LA-2342",
    type: "Business Loan",
    amount: "20,000",
    interestRate: "3.5 %",
    term: "60 months",
    appliedDate: "Oct 18, 2023",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Amir",
    loanId: "LA-2323",
    type: "Auto Loan",
    amount: "12,000",
    interestRate: "7.9 %",
    term: "48 months",
    appliedDate: "Oct 12, 2023",
    status: "Active",
  },
];
