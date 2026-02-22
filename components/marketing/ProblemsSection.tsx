import { problemCards } from "@/components/marketing/landing-data";

export function ProblemsSection() {
  return (
    <section className="bg-transparent pb-16 pt-0">
      <div className="bg-[linear-gradient(90deg,#10344C_0%,#12445F_50%,#10344C_100%)] px-4 py-14 text-center sm:px-6 lg:px-10">
        <p className="mx-auto inline-flex rounded-full border border-[#2D7A92] bg-[#184E67] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4EFFF]">
          Common HR Bottlenecks
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
          Is Your Team Losing Time <span className="text-[#7DE6E4]">on Manual Work?</span>
        </h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        {problemCards.map(({ title, before, after, result, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-[#D2E5ED] bg-white/95 p-6 shadow-[0_6px_20px_rgba(12,46,59,0.08)]">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#E6F6FA] p-3 text-[#0E647A]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#182235] sm:text-2xl">{title}</h3>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-[#5A6882] sm:text-base">
              <p className="rounded-lg border-l-4 border-[#F4B6B6] bg-[#FAFAFA] px-4 py-3">{before}</p>
              <p className="rounded-lg border-l-4 border-[#1FC27B] bg-[#F1F8F4] px-4 py-3">{after}</p>
            </div>

            <p className="mt-4 text-base font-semibold text-[#0F766E] sm:text-lg">{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
