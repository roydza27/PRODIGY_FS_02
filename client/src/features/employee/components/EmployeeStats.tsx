import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card"

type EmployeeStatsProps = {
  total: number
  active: number
  onLeave: number
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string
  value: string
  description: string
}) {
  return (
    <Card className="border-white/10 bg-transparent text-[#FAFAFA] shadow-none">
      <CardHeader className="space-y-2 p-5">
        <CardDescription className="text-[#A1A1AA]">{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
        <p className="text-sm text-[#A1A1AA]">{description}</p>
      </CardHeader>
    </Card>
  )
}

export function EmployeeStats({ total, active, onLeave }: EmployeeStatsProps) {
  return (
    <div className="mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Total Employees"
        value={String(total)}
        description="All records currently stored in the system."
      />
      <StatCard
        title="Active Employees"
        value={String(active)}
        description="Employees marked as active right now."
      />
      <StatCard
        title="On Leave"
        value={String(onLeave)}
        description="Employees currently on leave."
      />
    </div>
  )
}
