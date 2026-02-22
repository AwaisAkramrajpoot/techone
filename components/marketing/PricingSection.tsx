import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    employees: "Up to 15 Employees",
    admins: "3 Admin Users",
    price: "Rs 10,000",
    perEmployee: "Rs 667/employee for lifetime",
    saving: "Save Rs 62,000 vs 1-year monthly",
    features: ["2 GB Storage", "All 10 Modules & 130+ Features", "Payroll, Attendance & Leave", "EOBI & Tax Compliance"],
    highlighted: false,
    actionLabel: "Start Free Trial",
  },
  {
    name: "Growth",
    employees: "Up to 50 Employees",
    admins: "5 Admin Users",
    price: "Rs 25,000",
    perEmployee: "Rs 500/employee for lifetime",
    saving: "Save Rs 47,000 vs 1-year monthly",
    features: ["5 GB Storage", "All 10 Modules & 130+ Features", "Payroll, Attendance & Leave", "EOBI & Tax Compliance"],
    highlighted: true,
    actionLabel: "Buy Now - Growth",
  },
  {
    name: "Enterprise",
    employees: "Up to 150 Employees",
    admins: "10 Admin Users",
    price: "Rs 45,000",
    perEmployee: "Rs 300/employee for lifetime",
    saving: "Save Rs 27,000 vs 1-year monthly",
    features: ["10 GB Storage", "All 10 Modules & 130+ Features", "Payroll, Attendance & Leave", "EOBI & Tax Compliance"],
    highlighted: false,
    actionLabel: "Buy Now - Enterprise",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-[radial-gradient(circle_at_top,#16516A_0%,#123E54_55%,#0F3345_100%)] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#2D607A] bg-[#16445D] px-5 py-2 text-xs font-bold tracking-[0.16em] text-[#CDEBFA]">
            FLEXIBLE PRICING FOR HRMS
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">Choose a Plan for Your Team</h2>
          <p className="mt-4 text-base text-[#B7D5E8] sm:text-lg">All core HR modules included. Scale by employee count.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl bg-white p-7 ${
                plan.highlighted ? "border-2 border-[#0F766E] shadow-[0_20px_40px_rgba(15,118,110,0.22)]" : "border border-[#DCE3F5]"
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#0F766E] px-4 py-1 text-xs font-bold text-white">
                  MOST POPULAR
                </span>
              ) : null}

              <h3 className="text-center text-2xl font-semibold text-[#1A2340]">{plan.name}</h3>
              <p className="mt-3 text-center text-2xl font-semibold text-[#0F5BA8]">{plan.employees}</p>
              <p className="mt-1 text-center text-sm text-[#64748B]">{plan.admins}</p>
              <p className="mt-3 text-center text-4xl font-semibold text-[#0F766E]">{plan.price}</p>
              <p className="text-center text-sm text-[#64748B]">one-time payment</p>

              <p className="mx-auto mt-4 w-fit rounded-lg bg-[#E9EDFF] px-3 py-1 text-sm font-semibold text-[#4952DD]">
                {plan.perEmployee}
              </p>
              <p className="mx-auto mt-2 w-fit rounded-lg bg-[#DDF8EA] px-3 py-1 text-sm font-semibold text-[#149661]">
                {plan.saving}
              </p>

              <div className="mt-6 space-y-3 border-t border-[#E5EAF7] pt-5">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-start gap-2 text-sm text-[#44536E]">
                    <Check className="mt-1 h-4 w-4 text-[#0DAA6A]" />
                    <span>{feature}</span>
                  </p>
                ))}
              </div>

              <button
                className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[#0F766E] text-white hover:bg-[#0D6D64]"
                    : "border border-[#C8D5EA] bg-[#F8FAFC] text-[#123863] hover:bg-[#EFF4FA]"
                }`}
              >
                {plan.actionLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
