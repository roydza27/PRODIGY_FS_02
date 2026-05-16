// import { Outlet } from "react-router-dom"
import { AppSidebar } from "@/features/dashboard/components/app-sidebar"
// import { DashboardHeader } from "@/features/dashboard/components/dashboard-header"
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar"
import { TooltipProvider } from "@/shared/components/ui/tooltip"

// export default function DashboardLayout() {
//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     sessionStorage.removeItem("token")
//     window.location.replace("/login")
//   }

//   return (
//     <TooltipProvider delayDuration={0}>
//       <SidebarProvider
//         style={
//           {
//             "--sidebar-width": "18rem",
//             "--header-height": "4rem",
//           } as React.CSSProperties
//         }
//       >
//         <AppSidebar onLogout={handleLogout} />
//         <SidebarInset className="flex min-h-screen flex-col bg-slate-950 text-white">
//           <DashboardHeader onLogout={handleLogout} />
//           <main className="flex-1 overflow-y-auto">
//             <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 p-4 md:p-6">
//               <Outlet />
//             </div>
//           </main>
//         </SidebarInset>
//       </SidebarProvider>
//     </TooltipProvider>
//   )
// }

import { ChartAreaInteractive } from "@/features/dashboard/components/chart-area-interactive"
import { DataTable } from "@/features/dashboard/components/data-table"
import { SectionCards } from "@/features/dashboard/components/section-cards"
import { SiteHeader } from "@/features/dashboard/components/site-header"

import data from "@/features/dashboard/data/data.json"

export default function DashboardLayout() {

  const handleLogout = () => {
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")
    window.location.replace("/login")
  }
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar  onLogout={handleLogout} variant="inset" />
        <SidebarInset className="text-[#FAFAFA] min-h-screen rounded">
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6 pt-4 pb-2">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-[#FAFAFA]">Platform Overview</h2>
                  <p className="text-sm text-[#A1A1AA] mt-1">Welcome back, John. Here's what's happening across your workspaces today.</p>
                </div>
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
