import { ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}
export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="cursor-pointer rounded border-2 border-gray-600 bg-gray-700 p-4 shadow-sm transition-shadow hover:shadow-lg">
      <div className="space-y-4">
        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-600 text-2xl text-primary-300 transition-colors group-hover:bg-gray-600 group-hover:text-primary-300">
          {icon}
        </div>

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
