import { ChartAreaInteractive } from "@/features/dashboard/components/chart-area-interactive"
import { DataTable } from "@/features/dashboard/components/data-table"
import { SectionCards } from "@/features/dashboard/components/section-cards"

import data from "@/features/dashboard/data/data.json"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 rounded">
      <SectionCards />

      <div className="px-0 lg:px-0">
        <ChartAreaInteractive />
      </div>

      <DataTable data={data} />

      
    </div>
  )
}