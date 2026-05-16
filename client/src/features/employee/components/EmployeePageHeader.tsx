import { Plus } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

type EmployeePageHeaderProps = {
  onAddEmployee?: () => void
}

export function EmployeePageHeader({ onAddEmployee }: EmployeePageHeaderProps) {
  return (
    <div className="flex flex-col mx-4 items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-[#FAFAFA] lg:text-5xl">
          Employees
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
          Manage employee records, search profiles, and track status.
        </p>
      </div>

      <Button
        type="button"
        onClick={onAddEmployee}
        className="h-11 w-fit rounded-full bg-[#FAFAFA] px-5 text-[#09090B] hover:bg-[#FAFAFA]/90"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Employee
      </Button>
    </div>
  )
}
