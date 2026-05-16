import api from "@/services/api"
import type {
    CreateEmployeePayload,
  Employee,
  EmployeeFormValues,
  GetEmployeesParams,
  PaginatedEmployeesResponse,
  UpdateEmployeePayload,
} from "../types/employee.types"

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

function buildQuery(params?: GetEmployeesParams) {
  const searchParams = new URLSearchParams()

  if (params?.page !== undefined) {
    searchParams.set("page", String(params.page))
  }

  if (params?.limit !== undefined) {
    searchParams.set("limit", String(params.limit))
  }

  if (params?.search) {
    searchParams.set("search", params.search)
  }

  if (params?.department && params.department !== "all") {
    searchParams.set("department", params.department)
  }

  if (params?.status && params.status !== "all") {
    searchParams.set("status", params.status)
  }

  const query = searchParams.toString()
  return query ? `?${query}` : ""
}

export async function getEmployees(
  params?: GetEmployeesParams
): Promise<PaginatedEmployeesResponse> {
  const response = await api.get<ApiResponse<PaginatedEmployeesResponse>>(
    `/employees${buildQuery(params)}`
  )

  return response.data.data
}

export async function getEmployeeById(id: string): Promise<Employee> {
  const response = await api.get<ApiResponse<Employee>>(`/employees/${id}`)
  return response.data.data
}

export async function createEmployee(
  payload: CreateEmployeePayload
): Promise<Employee> {
  const response = await api.post<ApiResponse<Employee>>("/employees", payload)
  return response.data.data
}

export async function updateEmployee(
  id: string,
  payload: UpdateEmployeePayload
): Promise<Employee> {
  const response = await api.patch<ApiResponse<Employee>>(
    `/employees/${id}`,
    payload
  )
  return response.data.data
}

export async function deleteEmployee(id: string): Promise<Employee> {
  const response = await api.delete<ApiResponse<Employee>>(`/employees/${id}`)
  return response.data.data
}