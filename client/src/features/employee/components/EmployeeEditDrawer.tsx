import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/shared/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/components/ui/drawer"
import type { Employee } from "@/features/employee/types/employee.types"
import { EmployeeForm } from "@/features/employee/components/EmployeeForm"
import type { EmployeeFormValues } from "@/features/employee/types/employee.types"

type EmployeeEditDrawerProps = {
  employee: Employee | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (updatedEmployee: EmployeeFormValues) => void | Promise<void>
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

export function EmployeeEditDrawer({
  employee,
  open,
  onOpenChange,
  onSave,
}: EmployeeEditDrawerProps) {
  const isMobile = useIsMobile()

    const initialValues: EmployeeFormValues = employee
    ? {
        fullName: employee.fullName,
        email: employee.email,
        phone: employee.phone ?? "",
        jobTitle: employee.jobTitle,
        department: employee.department,
        salary: employee.salary ? String(employee.salary) : "",
        employmentStatus: employee.employmentStatus,
        dateOfJoining: employee.dateOfJoining,
        address: employee.address ?? "",
        }
    : emptyValues

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction={isMobile ? "bottom" : "right"}
    >
      <DrawerContent className="border-white/10 bg-[#111113] text-[#FAFAFA] md:max-w-xl">
        <div className="flex h-full flex-col">
          <DrawerHeader className="border-b border-white/10 px-6 py-5">
            <DrawerTitle className="text-2xl">Edit Employee</DrawerTitle>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <EmployeeForm
              initialValues={initialValues}
              submitLabel="Save Changes"
              onSubmit={onSave}
              onCancel={() => onOpenChange(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}