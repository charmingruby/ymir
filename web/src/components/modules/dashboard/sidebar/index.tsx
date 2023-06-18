import { DashboardSidebarNavigation } from './components/navigation'
import { DashboardSidebarHeader } from './components/header'

export function DashboardSidebar() {
  return (
    <div className="relative flex h-screen w-full max-w-[300px] flex-col ">
      <DashboardSidebarHeader />
      <div className="flex-1 overflow-y-auto scroll-smooth border-r-2 border-gray-500 bg-gray-800 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
        <DashboardSidebarNavigation />
      </div>
    </div>
  )
}
