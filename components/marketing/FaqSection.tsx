"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is this subscription based or one-time?",
    a: "Plans are configured by package. You can choose one-time onboarding plans or extended support plans based on your business model.",
  },
  {
    q: "Can we migrate our current employee data?",
    a: "Yes. You can import employee data, departments, attendance and payroll references through bulk templates.",
  },
  {
    q: "Does it support payroll and compliance reporting?",
    a: "Yes. Payroll, tax handling, allowance/deduction and compliance-focused reporting are included in core workflows.",
  },
  {
    q: "Can we run multiple branches in one account?",
    a: "Yes. Branch-level management is supported with centralized visibility for HR and management teams.",
  },
  {
    q: "Is there role-based access control?",
    a: "Yes. You can control permissions by role and limit access to sensitive modules and records.",
  },
  {
    q: "How fast can we go live?",
    a: "Most teams can start with core modules quickly after data setup and initial policy configuration.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-transparent px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#BCD2E7] bg-[#E6F1FB] px-5 py-2 text-xs font-semibold tracking-[0.15em] text-[#1E5B87]">
            FAQ
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-[#111A38] sm:text-3xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`rounded-xl border bg-white p-4 transition ${
                  isOpen ? "border-[#0F766E]" : "border-[#D8E2EF]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <p className="text-base font-semibold text-[#111A38] sm:text-lg">{item.q}</p>
                  <ChevronDown
                    className={`h-5 w-5 text-[#0F766E] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? <p className="mt-3 text-sm leading-relaxed text-[#62738F] sm:text-base">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
