import * as React from "react"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import type {
  EmployeeFormValues,
  EmploymentStatus,
} from "@/features/employee/types/employee.types"

const EMPLOYMENT_STATUS_OPTIONS: EmploymentStatus[] = [
  "active",
  "inactive",
  "on_leave",
  "resigned",
  "terminated",
]

type EmployeeFormProps = {
  initialValues: EmployeeFormValues
  submitLabel: string
  onSubmit: (values: EmployeeFormValues) => void | Promise<void>
  onCancel: () => void
  isSubmitting?: boolean
}

export function EmployeeForm({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: EmployeeFormProps) {
  const [formData, setFormData] = React.useState<EmployeeFormValues>(initialValues)

  React.useEffect(() => {
    setFormData(initialValues)
  }, [initialValues])

  const updateField = <K extends keyof EmployeeFormValues>(
    key: K,
    value: EmployeeFormValues[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label className="text-[#A1A1AA]">Full Name</Label>
        <Input
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
          placeholder="Enter full name"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[#A1A1AA]">Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
          placeholder="Enter email"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[#A1A1AA]">Phone</Label>
        <Input
          value={formData.phone ?? ""}
          onChange={(e) => updateField("phone", e.target.value)}
          className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
          placeholder="Enter phone number"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-[#A1A1AA]">Department</Label>
          <Input
            value={formData.department}
            onChange={(e) => updateField("department", e.target.value)}
            className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
            placeholder="Department"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[#A1A1AA]">Role</Label>
          <Input
            value={formData.jobTitle}
            onChange={(e) => updateField("jobTitle", e.target.value)}
            className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
            placeholder="Job title"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-[#A1A1AA]">Salary</Label>
					<Input
					type="number"
					value={formData.salary}
					onChange={(e) => updateField("salary", e.target.value)}
					className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
					placeholder="Salary"
					/>
        </div>

        <div className="space-y-2">
          <Label className="text-[#A1A1AA]">Status</Label>
          <Select
            value={formData.employmentStatus}
            onValueChange={(value) =>
              updateField("employmentStatus", value as EmploymentStatus)
            }
          >
            <SelectTrigger className="border-white/10 bg-white/[0.03] text-[#FAFAFA]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {EMPLOYMENT_STATUS_OPTIONS.map((status) => (
                <SelectItem key={status} value={status}>
                  {status
                    .split("_")
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(" ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-[#A1A1AA]">Date of Joining</Label>
        <Input
          type="date"
          value={formData.dateOfJoining.slice(0, 10)}
          onChange={(e) =>
            updateField("dateOfJoining", new Date(e.target.value).toISOString())
          }
          className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[#A1A1AA]">Address</Label>
        <Input
          value={formData.address ?? ""}
          onChange={(e) => updateField("address", e.target.value)}
          className="border-white/10 bg-white/[0.03] text-[#FAFAFA]"
          placeholder="Address"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90"
        >
          {submitLabel}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="rounded-full border-white/10 bg-transparent text-[#FAFAFA] hover:bg-white/5"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
