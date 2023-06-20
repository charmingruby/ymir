import { ReactNode } from 'react'
import { DashboardSidebar } from '@/components/modules/dashboard/sidebar'
import { DashboardHeader } from '@/components/modules/dashboard/header'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row">
      {/* Left Side */}
      <DashboardSidebar />

      {/* Center */}
      <div className=" min-h-screen flex-1 bg-gray-900">
        <DashboardHeader />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  )
}
