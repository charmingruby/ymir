import { HiPlusSm } from 'react-icons/hi'

export function DashboardNavigation() {
  return (
    <div className="flex items-center gap-4">
      {/* Documention */}
      <div>
        <span className="font-medium text-gray-50">Documentation</span>
      </div>

      {/* Redirect to support contact */}
      <div>
        <span className="font-medium text-gray-50">Support</span>
      </div>

      {/* New project button */}
      <div className="flex items-center rounded-md bg-primary-500 px-2 py-2 text-gray-50">
        <HiPlusSm />
        <span>New project</span>
      </div>
    </div>
  )
}
