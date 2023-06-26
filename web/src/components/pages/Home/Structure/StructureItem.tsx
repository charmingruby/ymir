import { ContentCard } from '@/components/shared/ContentCard'
import { ReactNode } from 'react'

interface StructureItemProps {
  icon: ReactNode
  title: string
  description: string
}
export function StructureItem({
  icon,
  title,
  description,
}: StructureItemProps) {
  return (
    <ContentCard>
      <div className="space-y-4">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 text-2xl transition-colors group-hover:bg-gray-600 group-hover:text-primary-300">
          {icon}
        </div>

        {/* Title */}
        <div className="text-lg font-semibold text-gray-50 transition group-hover:text-primary-300 group-hover:underline">
          {title}
        </div>

        {/* Description */}
        <div className="leading-snug transition-colors group-hover:text-gray-50">
          {description}
        </div>
      </div>
    </ContentCard>
  )
}
