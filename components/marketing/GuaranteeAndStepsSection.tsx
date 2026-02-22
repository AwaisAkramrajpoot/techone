import { ShieldCheck } from "lucide-react";

const setupSteps = [
  { id: 1, title: "Choose Plan", desc: "Select the plan that fits your team size." },
  { id: 2, title: "Import Data", desc: "Upload employees, departments and opening balances." },
  { id: 3, title: "Go Live", desc: "Start payroll, attendance and leave operations." },
];

export function GuaranteeAndStepsSection() {
  return (
    <section>
      <div className="bg-[#F6F8FB] px-4 py-16 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0F766E] text-white shadow-[0_0_0_8px_rgba(15,118,110,0.2)]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-[#15213B] sm:text-3xl">
            30-Day <span className="text-[#0F766E]">Money-Back Guarantee</span>
          </h3>
          <p className="mt-3 text-base text-[#5D6D84] sm:text-lg">Simple process. Full refund if platform is not fit for your workflow.</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-xl border border-[#A3E4C6] bg-white px-6 py-4 text-left">
              <p className="text-base text-center font-semibold text-[#1A243C]">Message Support</p>
              <p className="text-sm text-[#1BA86E]">WhatsApp or Email</p>
            </div> 
            <div className="rounded-xl border border-[#A3E4C6] bg-white px-6 py-4 text-left">
              <p className="text-base text-center font-semibold text-[#1A243C]">Refund Processed</p>
              <p className="text-sm text-[#1BA86E]">Clear and transparent</p>
            </div> 
            <div className="rounded-xl border border-[#A3E4C6] bg-white px-6 py-4 text-left">
              <p className="text-base text-center font-semibold text-[#1A243C]">Completed</p>
              <p className="text-sm text-[#1BA86E]">Fast turnaround</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EAF8F5] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#A8DDD2] bg-[#DDF6EF] px-5 py-2 text-xs font-semibold tracking-[0.14em] text-[#0F766E]">
            SIMPLE SETUP
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-[#111A38] sm:text-3xl">Up and Running in 3 Steps</h3>

          <div className="relative mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="absolute left-0 right-0 top-5 hidden h-1 bg-gradient-to-r from-[#0F766E] to-[#0891B2] sm:block" />
            {setupSteps.map((step) => (
              <div key={step.id} className="relative">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0F766E] text-lg font-semibold text-white">
                  {step.id}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-[#13203A]">{step.title}</h4>
                <p className="mt-2 text-sm text-[#5D6D84]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
