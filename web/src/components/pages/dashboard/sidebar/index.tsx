import { DashboardSidebarNavigation } from './components/navigation'
import { DashboardSidebarHeader } from './components/header'
import { DashboardSidebarProjects } from './components/projects'

export function DashboardSidebar() {
  return (
    <div className="relative flex h-screen w-72  flex-col ">
      <DashboardSidebarHeader />
      <div className="flex-1 overflow-y-auto scroll-smooth border-r-2 border-gray-500 bg-gray-800 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
        <DashboardSidebarNavigation />
        <DashboardSidebarProjects />
      </div>
    </div>
  )
}
