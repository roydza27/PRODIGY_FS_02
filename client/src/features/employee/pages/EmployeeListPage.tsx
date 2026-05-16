import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog"

import { EmployeePageHeader } from "@/features/employee/components/EmployeePageHeader"
import { EmployeeStats } from "@/features/employee/components/EmployeeStats"
import { EmployeeFilters } from "@/features/employee/components/EmployeeFilters"
import { EmployeeTable } from "@/features/employee/components/EmployeeTable"
import { EmployeeDetailsDrawer } from "@/features/employee/components/EmployeeDetailsDrawer"
import { EmployeeEditDrawer } from "@/features/employee/components/EmployeeEditDrawer"
import { EmployeeCreateDrawer } from "@/features/employee/components/EmployeeCreateDrawer"

import {
  deleteEmployee,
  getEmployees,
  updateEmployee,
  createEmployee
} from "@/features/employee/services/employee.service"

import type {
  Employee,
  EmploymentStatus,
  EmployeeFormValues,
  GetEmployeesParams,
  CreateEmployeePayload
} from "@/features/employee/types/employee.types"

import axios from "axios"

const EmployeeListPage = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const [search, setSearch] = React.useState("")
  const [department, setDepartment] = React.useState("all")
  const [status, setStatus] = React.useState<EmploymentStatus | "all">("all")

  const [page, setPage] = React.useState(1)
  const [limit, setLimit] = React.useState(10)
  const [total, setTotal] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(0)

  const [selectedEmployee, setSelectedEmployee] = React.useState<Employee | null>(null)
  const [employeeToEdit, setEmployeeToEdit] = React.useState<Employee | null>(null)
  const [employeeToDelete, setEmployeeToDelete] = React.useState<Employee | null>(null)
  const [employeeToCreate, setEmployeeToCreate] = React.useState(false)

  const loadEmployees = React.useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params: GetEmployeesParams = {
        page,
        limit,
        search,
        department,
        status,
      }

      const result = await getEmployees(params)

      setEmployees(result.data)
      setTotal(result.total)
      setTotalPages(result.totalPages)
     } catch (error) {
      console.error("Load employees failed:", error)

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            `Request failed with status ${error.response?.status}`
        )
      } else {
        setError("Failed to load employees")
      }
    } finally {
      setLoading(false)
    }
  }, [page, limit, search, department, status])

  React.useEffect(() => {
    loadEmployees()
  }, [loadEmployees])

  const handleApplyFilters = () => {
    setPage(1)
    loadEmployees()
  }

  const handleSaveEmployee = async (values: EmployeeFormValues) => {
    if (!employeeToEdit) return

    const payload = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone || undefined,
      jobTitle: values.jobTitle,
      department: values.department,
      salary: values.salary ? Number(values.salary) : undefined,
      employmentStatus: values.employmentStatus,
      dateOfJoining: values.dateOfJoining,
      address: values.address || undefined,
    }

    const saved = await updateEmployee(employeeToEdit.id, payload)

    setEmployees((current) =>
      current.map((employee) => (employee.id === saved.id ? saved : employee))
    )
    setEmployeeToEdit(null)
  }

  const handleCreateEmployee = async (values: EmployeeFormValues) => {
    try {
      const payload: CreateEmployeePayload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone || undefined,
        jobTitle: values.jobTitle,
        department: values.department,
        salary: values.salary ? Number(values.salary) : undefined,
        employmentStatus: values.employmentStatus,
        dateOfJoining: values.dateOfJoining,
        address: values.address || undefined,
      }

      const created = await createEmployee(payload)

      setEmployees((current) => [created, ...current])
      setEmployeeToCreate(false)
      setError(null)
    } catch (error) {
      console.error("Create employee failed:", error)
      setError("Failed to create employee")
    }
  }

  const handleDeleteEmployee = async () => {
    if (!employeeToDelete) return

    try {
      await deleteEmployee(employeeToDelete.id)
      setEmployees((current) =>
        current.filter((employee) => employee.id !== employeeToDelete.id)
      )
      setEmployeeToDelete(null)
      loadEmployees()
    } catch {
      setError("Failed to delete employee")
    }
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#111113]/95 text-[#FAFAFA]">
      <div className="flex flex-col gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <EmployeePageHeader onAddEmployee={() => setEmployeeToCreate(true)} />

        <EmployeeStats
          total={total}
          active={employees.filter((employee) => employee.employmentStatus === "active").length}
          onLeave={employees.filter((employee) => employee.employmentStatus === "on_leave").length}
        />

        <EmployeeFilters
          search={search}
          setSearch={setSearch}
          department={department}
          setDepartment={setDepartment}
          status={status}
          setStatus={setStatus}
          onApply={handleApplyFilters}
        />

        {error ? (
          <div className="mx-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="mx-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-10 text-center text-[#A1A1AA]">
            Loading employees...
          </div>
        ) : (
          <EmployeeTable
            data={employees}
            onViewEmployee={setSelectedEmployee}
            onEditEmployee={setEmployeeToEdit}
            onDeleteEmployee={setEmployeeToDelete}
          />
        )}
      </div>

      <EmployeeDetailsDrawer
        employee={selectedEmployee}
        open={Boolean(selectedEmployee)}
        onOpenChange={(open) => {
          if (!open) setSelectedEmployee(null)
        }}
        onEdit={(employee) => {
          setSelectedEmployee(null)
          setEmployeeToEdit(employee)
        }}
        onDelete={(employee) => {
          setSelectedEmployee(null)
          setEmployeeToDelete(employee)
        }}
      />

      <EmployeeCreateDrawer
        open={employeeToCreate}
        onOpenChange={setEmployeeToCreate}
        onCreate={handleCreateEmployee}
      />

      <EmployeeEditDrawer
        employee={employeeToEdit}
        open={Boolean(employeeToEdit)}
        onOpenChange={(open) => {
          if (!open) setEmployeeToEdit(null)
        }}
        onSave={handleSaveEmployee}
      />

      <AlertDialog
        open={Boolean(employeeToDelete)}
        onOpenChange={(open) => {
          if (!open) setEmployeeToDelete(null)
        }}
      >
        <AlertDialogContent className="border-white/10 bg-[#111113] text-[#FAFAFA]">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete employee?</AlertDialogTitle>
            <AlertDialogDescription className="text-[#A1A1AA]">
              This will permanently remove{" "}
              <span className="text-[#FAFAFA]">
                {employeeToDelete?.fullName}
              </span>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/10 bg-transparent text-[#FAFAFA] hover:bg-white/5">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-500"
              onClick={handleDeleteEmployee}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="px-4 pb-6 text-sm text-[#A1A1AA] lg:px-6">
        Page {page} of {totalPages || 1}
      </div>
    </div>
  )
}

export default EmployeeListPage