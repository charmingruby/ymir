import { DashboardSearchForm } from './components/search-form'
import { DashboardNavigation } from './components/navigation'

export function DashboardHeader() {
  return (
    <>
      {/* Content */}
      <div className="flex h-24 w-full items-center justify-between px-8">
        <DashboardSearchForm />
        <DashboardNavigation />
      </div>
    </>
  )
}
