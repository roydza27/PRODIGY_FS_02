import * as React from "react"
import { Mail, Phone, Building2, BriefcaseBusiness, CalendarDays, BadgeCheck } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/components/ui/drawer"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"

type EmployeeData = {
  id: string
  fullName: string
  email: string
  phone?: string
  jobTitle: string
  department: string
  salary?: number
  employmentStatus: "active" | "inactive" | "on_leave" | "resigned" | "terminated"
  dateOfJoining: string
  address?: string
  createdAt: string
  updatedAt: string
}

type EmployeeDetailsDrawerProps = {
  employee: EmployeeData | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit?: (employee: EmployeeData) => void
  onDelete?: (employee: EmployeeData) => void
  canManage?:boolean
}

const statusStyles: Record<EmployeeData["employmentStatus"], string> = {
  active: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  inactive: "bg-zinc-500/15 text-zinc-300 border-zinc-500/20",
  on_leave: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  resigned: "bg-sky-500/15 text-sky-300 border-sky-500/20",
  terminated: "bg-rose-500/15 text-rose-300 border-rose-500/20",
}

const statusLabel: Record<EmployeeData["employmentStatus"], string> = {
  active: "Active",
  inactive: "Inactive",
  on_leave: "On Leave",
  resigned: "Resigned",
  terminated: "Terminated",
}

function formatDate(value?: string) {
  if (!value) return "—"

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value))
}

function formatCurrency(value?: number) {
  if (typeof value !== "number") return "—"

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function EmployeeDetailsDrawer({
  employee,
  open,
  onOpenChange,
  onEdit,
  onDelete,
  canManage = false,
}: EmployeeDetailsDrawerProps) {
  const isMobile = useIsMobile()

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction={isMobile ? "bottom" : "right"}>
      <DrawerContent className="border-white/10 bg-[#111113] text-[#FAFAFA] md:max-w-xl">
        {employee ? (
          <div className="flex h-full flex-col">
            <DrawerHeader className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-4">
                <Avatar className="size-14 border border-white/10 bg-white/5">
                  <AvatarFallback className="bg-transparent text-sm text-[#FAFAFA]">
                    {getInitials(employee.fullName)}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                  <DrawerTitle className="text-2xl">{employee.fullName}</DrawerTitle>
                  <DrawerDescription className="text-[#A1A1AA]">
                    {employee.jobTitle} • {employee.department}
                  </DrawerDescription>
                </div>
              </div>

              <div className="mt-4">
                <Badge className={`w-fit rounded-full border px-3 py-1 ${statusStyles[employee.employmentStatus]}`}>
                  {statusLabel[employee.employmentStatus]}
                </Badge>
              </div>
            </DrawerHeader>

            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <InfoCard icon={<Mail className="h-4 w-4" />} label="Email" value={employee.email} />
                <InfoCard icon={<Phone className="h-4 w-4" />} label="Phone" value={employee.phone || "—"} />
                <InfoCard icon={<Building2 className="h-4 w-4" />} label="Department" value={employee.department} />
                <InfoCard icon={<BriefcaseBusiness className="h-4 w-4" />} label="Salary" value={formatCurrency(employee.salary)} />
                <InfoCard icon={<CalendarDays className="h-4 w-4" />} label="Joined" value={formatDate(employee.dateOfJoining)} />
                <InfoCard icon={<BadgeCheck className="h-4 w-4" />} label="Status" value={statusLabel[employee.employmentStatus]} />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-sm font-medium text-[#FAFAFA]">Address</p>
                <p className="text-sm leading-relaxed text-[#A1A1AA]">{employee.address || "—"}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#A1A1AA]">Created At</p>
                  <p className="mt-2 text-sm text-[#FAFAFA]">{formatDate(employee.createdAt)}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#A1A1AA]">Updated At</p>
                  <p className="mt-2 text-sm text-[#FAFAFA]">{formatDate(employee.updatedAt)}</p>
                </div>
              </div>
            </div>

            {canManage && employee ? (
              <DrawerFooter className="border-t border-white/10 px-6 py-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="rounded-full bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90"
                    onClick={() => onEdit?.(employee)}
                  >
                    Edit Employee
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/10 bg-transparent text-[#FAFAFA] hover:bg-white/5"
                    onClick={() => onDelete?.(employee)}
                  >
                    Delete Employee
                  </Button>
                </div>
              </DrawerFooter>
            ) : (
              <DrawerFooter className="border-t border-white/10 px-6 py-4">
                <Button
                  variant="outline"
                  className="rounded-full border-white/10 bg-transparent text-[#FAFAFA] hover:bg-white/5"
                  onClick={() => onOpenChange(false)}
                >
                  Close
                </Button>
              </DrawerFooter>
            )}
          </div>
        ) : null}
      </DrawerContent>
    </Drawer>
  )
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-[#A1A1AA]">
        {icon}
        {label}
      </div>
      <p className="break-words text-sm text-[#FAFAFA]">{value}</p>
    </div>
  )
}
