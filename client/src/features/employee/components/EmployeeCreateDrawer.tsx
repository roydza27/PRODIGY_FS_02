import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/shared/components/ui/drawer"
import { EmployeeForm } from "@/features/employee/components/EmployeeForm"
import type { Employee, EmployeeFormValues } from "@/features/employee/types/employee.types"

type EmployeeCreateDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreate: (employee: EmployeeFormValues) => void | Promise<void>
}
const emptyValues: EmployeeFormValues = {
  fullName: "",
  email: "",
  phone: "",
  jobTitle: "",
  department: "",
  salary: "",
  employmentStatus: "active",
  dateOfJoining: new Date().toISOString(),
  address: "",
}

export function EmployeeCreateDrawer({
  open,
  onOpenChange,
  onCreate,
}: EmployeeCreateDrawerProps) {
  const isMobile = useIsMobile()

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction={isMobile ? "bottom" : "right"}
    >
      <DrawerContent className="border-white/10 bg-[#111113] text-[#FAFAFA] md:max-w-xl">
        <div className="flex h-full flex-col">
          <DrawerHeader className="border-b border-white/10 px-6 py-5">
            <DrawerTitle className="text-2xl">Add Employee</DrawerTitle>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <EmployeeForm
              initialValues={emptyValues}
              submitLabel="Create Employee"
              onSubmit={onCreate}
              onCancel={() => onOpenChange(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}