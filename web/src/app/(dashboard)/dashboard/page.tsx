import { DashboardHeader } from '@/components/modules/dashboard/header'
import { DashboardSidebar } from '@/components/modules/dashboard/sidebar'
import { Separator } from '@/components/shared/separator'

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      {/* Right Side */}
      <DashboardSidebar />

      {/* Left Side */}
      <div className=" min-h-screen flex-1 bg-gray-700">
        <DashboardHeader />
        <Separator />
      </div>
    </div>
  )
}
