import { ReactNode } from 'react'
import { Sidebar } from '@/components/pages/Dashboard/Sidebar'
import { Header } from '@/components/pages/Dashboard/Header'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row">
      {/* Left Side */}
      <Sidebar />

      {/* Center */}
      <div className=" min-h-screen flex-1 bg-gray-900">
        <Header />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  )
}
