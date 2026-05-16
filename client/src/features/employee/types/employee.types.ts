import { type ColumnDef } from "@tanstack/react-table"

export type EmploymentStatus =
  | "active"
  | "inactive"
  | "on_leave"
  | "resigned"
  | "terminated"

export type Employee = {
  id: string
  fullName: string
  email: string
  phone?: string
  jobTitle: string
  department: string
  salary?: number
  employmentStatus: EmploymentStatus
  dateOfJoining: string
  address?: string
  createdAt: string
  updatedAt: string
}

export type EmployeeFormValues = {
  fullName: string
  email: string
  phone: string
  jobTitle: string
  department: string
  salary: string
  employmentStatus: EmploymentStatus
  dateOfJoining: string
  address: string
}

export type EmployeeFilterValues = {
  search?: string
  department?: string
  status?: EmploymentStatus | "all"
}

export type GetEmployeesParams = {
  page?: number
  limit?: number
  search?: string
  department?: string
  status?: EmploymentStatus | "all"
}

export type PaginatedEmployeesResponse = {
  data: Employee[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type EmployeeTableProps = {
  data: Employee[]
  onViewEmployee: (employee: Employee) => void
  onEditEmployee: (employee: Employee) => void
  onDeleteEmployee: (employee: Employee) => void
}

export type DataTableProps<TData extends { id: string }> = {
  columns: ColumnDef<TData>[]
  data: TData[]
}

export type CreateEmployeePayload = {
  fullName: string
  email: string
  phone?: string
  jobTitle: string
  department: string
  salary?: number
  employmentStatus: EmploymentStatus
  dateOfJoining: string
  address?: string
}

export type UpdateEmployeePayload = Partial<CreateEmployeePayload>