import { Plus } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

type EmployeePageHeaderProps = {
  onAddEmployee?: () => void
  canAdd?: boolean
}

export function EmployeePageHeader({
  onAddEmployee,
  canAdd = false,
}: EmployeePageHeaderProps) {
  return (
    <div className="mx-4 flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-[#FAFAFA] lg:text-5xl">
          Employees
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
          Manage employee records, search profiles, and track status.
        </p>
      </div>

      {canAdd ? (
        <Button
          type="button"
          onClick={onAddEmployee}
          className="h-11 w-fit rounded-full bg-[#FAFAFA] px-5 text-[#09090B] hover:bg-[#FAFAFA]/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      ) : null}
    </div>
  )
}