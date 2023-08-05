import { Clock } from 'lucide-react'

export function Pin() {
  return (
    <div className="mb-8 gap-2 border flex items-center border-gray-600 pl-1.5 pr-4 shadow-md py-1.5 rounded-full">
      <div className="bg-primary-300  shadow-md py-1 px-4 rounded-full text-sm">
        Hey guest
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-200">Beta will release soon</span>
        <Clock className="text-gray-200" size={16} />
      </div>
    </div>
  )
}
