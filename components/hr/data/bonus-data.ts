export type BonusStatus = "Paid" | "Pending" | "Approved";

export type BonusRow = {
  id: number;
  employee: string;
  bonusType: string;
  performance: string;
  amount: string;
  percentage: string;
  paymentDate: string;
  status: BonusStatus;
};

export const bonusDummyRows: BonusRow[] = [
  {
    id: 1,
    employee: "Kaleem",
    bonusType: "Performance",
    performance: "4.5/5.0",
    amount: "25,000",
    percentage: "24.7%",
    paymentDate: "Oct 15, 2023",
    status: "Paid",
  },
  {
    id: 2,
    employee: "Amir",
    bonusType: "Retention",
    performance: "3.5/5.0",
    amount: "20,000",
    percentage: "25.6%",
    paymentDate: "Oct 18, 2023",
    status: "Pending",
  },
  {
    id: 3,
    employee: "waseem",
    bonusType: "Referral",
    performance: "4.9/5.0",
    amount: "12,000",
    percentage: "49.9%",
    paymentDate: "Oct 12, 2023",
    status: "Paid",
  },
  {
    id: 4,
    employee: "Amir",
    bonusType: "Holiday",
    performance: "3.1/5.0",
    amount: "45,000",
    percentage: "24.4%",
    paymentDate: "Oct 15, 2023",
    status: "Approved",
  },
];
