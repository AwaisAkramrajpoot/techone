import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

type HrContentViewProps = {
  title: string;
  label: string;
};

export function HrContentView({ title, label }: HrContentViewProps) {
  return (
    <section className="min-h-[560px] flex-1">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">{title}</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Organize teams for clarity and efficiency
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button className="bg-[#0F5FFF] hover:bg-[#0A4BD1]">
            <Plus className="mr-1.5 h-4 w-4" />
            Add {label}
          </Button>
          <Button
            variant="outline"
            className="border-[#0F5FFF] text-[#0F5FFF] hover:bg-[#F0F5FF]"
          >
            Report
          </Button>
          <Button
            variant="outline"
            className="border-[#0F5FFF] text-[#0F5FFF] hover:bg-[#F0F5FF]"
          >
            Export
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
          <Input
            placeholder="Search companies, user, licences..."
            className="h-11 border-[#EAECF0] bg-[#F8FAFC] pl-9"
          />
        </div>
      </div>

      <div className="flex min-h-[360px] items-center justify-center">
        <div className="text-center">
          <p className="text-3xl text-[#D0D5DD]">!</p>
          <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
            Add Company First!
          </p>
        </div>
      </div>
    </section>
  );
}
