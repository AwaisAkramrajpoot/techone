import { featureCards } from "@/components/marketing/landing-data";

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-28 bg-transparent px-4 pb-24 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#BCD3E6] bg-[#E8F3FC] px-5 py-2 text-xs font-semibold tracking-[0.18em] text-[#1E5B87]">
            PLATFORM MODULES
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-[#111A38] sm:text-3xl">
            Core HR Workflows, Connected
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base text-[#5B6D8E] sm:text-lg">
            Built around real operations: employee lifecycle, payroll accuracy, attendance control and audit-ready records.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featureCards.map(({ title, description, icon: Icon, isCore, isNew }) => (
            <article key={title} className="flex items-start gap-4 rounded-2xl border border-[#D4DEEA] bg-white p-5">
              <div className="rounded-xl bg-[#EAF2F9] p-3 text-[#1E5B87]">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-[#1B2338]">{title}</h3>
                  {isCore ? (
                    <span className="rounded-md bg-[#E7F6EE] px-2 py-0.5 text-xs font-bold text-[#13795B]">CORE</span>
                  ) : null}
                  {isNew ? (
                    <span className="rounded-md bg-[#E8F3FC] px-2 py-0.5 text-xs font-bold text-[#1E5B87]">NEW</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-[#5C6E8E] sm:text-base">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
