import { RxMagnifyingGlass } from 'react-icons/rx'

export function DashboardSearchForm() {
  return (
    <div className="group flex w-2/3 cursor-pointer rounded-md border-2 border-gray-500 bg-gray-600 py-2 shadow-sm transition-shadow hover:border-primary-700 hover:shadow-md">
      <RxMagnifyingGlass className="mx-2 text-gray-400" size={24} />
      <input
        type="text"
        placeholder="Search projects..."
        className="flex-1 placeholder-gray-400"
      />
    </div>
  )
}
