import { DashboardContent } from '@/components/modules/dashboard/content'
import { DashboardSidebar } from '@/components/modules/dashboard/sidebar'

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      {/* Left Side */}
      <DashboardSidebar />

      {/* Center */}
      <div className=" min-h-screen flex-1 bg-gray-900">
        <DashboardContent />
      </div>
    </div>
  )
}
