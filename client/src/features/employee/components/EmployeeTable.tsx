import type { ColumnDef } from "@tanstack/react-table"

import {
  DragHandleDots2Icon,
} from "@radix-ui/react-icons"

import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { Checkbox } from "@/shared/components/ui/checkbox"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"

import { DataTable } from "./data-table"

import type {
  Employee,
  EmployeeTableProps,
} from "../types/employee.types"

const statusStyles: Record<Employee["employmentStatus"], string> = {
  active:
    "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",

  inactive:
    "bg-zinc-500/15 text-zinc-300 border-zinc-500/20",

  on_leave:
    "bg-amber-500/15 text-amber-300 border-amber-500/20",

  resigned:
    "bg-sky-500/15 text-sky-300 border-sky-500/20",

  terminated:
    "bg-rose-500/15 text-rose-300 border-rose-500/20",
}

const statusLabel: Record<Employee["employmentStatus"], string> = {
  active: "Active",
  inactive: "Inactive",
  on_leave: "On Leave",
  resigned: "Resigned",
  terminated: "Terminated",
}

function DragHandle() {
  return (
    <div className="flex size-7 items-center justify-center rounded-md text-[#A1A1AA] hover:bg-white/5">
      <DragHandleDots2Icon className="size-4" />
    </div>
  )
}

export function EmployeeTable({
  data,
  onViewEmployee,
  onEditEmployee,
  onDeleteEmployee
}: EmployeeTableProps) {
  const columns: ColumnDef<Employee>[] = [
    {
      id: "drag",
      header: () => null,
      cell: () => <DragHandle />,
    },

    {
      id: "select",

      header: ({ table }) => (
        <div className="flex items-center justify-start pl-2">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),

      cell: ({ row }) => (
        <div className="flex items-center justify-start pl-2">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) =>
              row.toggleSelected(!!value)
            }
            aria-label="Select row"
          />
        </div>
      ),

      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "fullName",

      header: "Name",

      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => onViewEmployee(row.original)}
          className="w-full text-left font-medium text-[#FAFAFA] hover:text-[#FAFAFA]/80"
        >
          {row.original.fullName}
        </button>
      ),

      enableHiding: false,
    },

    {
      accessorKey: "email",

      header: "Email",

      cell: ({ row }) => (
        <div className="text-left text-[#A1A1AA]">
          {row.original.email}
        </div>
      ),
    },

    {
      accessorKey: "department",

      header: "Department",

      cell: ({ row }) => (
        <div className="text-left text-[#FAFAFA]">
          {row.original.department}
        </div>
      ),
    },

    {
      accessorKey: "jobTitle",

      header: "Role",

      cell: ({ row }) => (
        <div className="text-left text-[#FAFAFA]">
          {row.original.jobTitle}
        </div>
      ),
    },

    {
      accessorKey: "employmentStatus",

      header: "Status",

      cell: ({ row }) => {
        const status = row.original.employmentStatus

        return (
          <div className="text-left">
            <Badge
              className={`rounded-full border px-2 py-0.5 font-normal ${statusStyles[status]}`}
            >
              {statusLabel[status]}
            </Badge>
          </div>
        )
      },
    },

    {
      id: "actions",

      cell: ({ row }) => (
        <div className="flex justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex size-8 text-[#A1A1AA] data-[state=open]:bg-[#18181B]"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-40"
            >
              <DropdownMenuItem
                onClick={() => onViewEmployee(row.original)}
              >
                View Employee
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => onEditEmployee(row.original)}
              >
                Edit Employee
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem variant="destructive"
                onClick={() => onDeleteEmployee(row.original)}
              >
                Delete Employee
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ]

  return <DataTable columns={columns} data={data} />
}