import { Feature } from '../../contents/features'
import { LuCheck } from 'react-icons/lu'

export function FeatureItem({ title, description }: Feature) {
  return (
    <div className="flex gap-3">
      {/* Icon */}
      <div className="mt-1">
        <LuCheck className="text-xl text-success-300" />
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div className="text-xl font-semibold text-gray-50 transition group-hover:text-primary-300 group-hover:underline">
          {title}
        </div>

        {/* Description */}
        <div className="leading-snug transition-colors group-hover:text-gray-50">
          {description}
        </div>
      </div>
    </div>
  )
}
