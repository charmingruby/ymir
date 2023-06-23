import { ReactNode } from 'react'
import { Sidebar } from '@/components/pages/Dashboard/Sidebar'
import { Header } from '@/components/pages/Dashboard/Header'
import { NavigationMenu } from '@/components/pages/Dashboard/NavigationMenu'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="dashboard-max-size flex flex-row">
        {/* Left Side */}
        <Sidebar />

        {/* Center */}
        <div className="dashboard-max-size flex-1 overflow-auto scroll-smooth bg-gray-900 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
          <div className="p-8">
            <NavigationMenu />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
