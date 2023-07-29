import { ElementType } from 'react'

interface ReasonItemProps {
  icon: ElementType
  reason: string
  description: string
}

export function ReasonItem({
  icon: Icon,
  reason,
  description,
}: ReasonItemProps) {
  return (
    <div className="flex flex-col gap-3 border border-gray-700 px-6 py-8 hover:border-primary-300">
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700">
        <Icon size={24} className="text-primary-300" />
      </div>

      {/* Reason */}
      <span className="text-2xl font-semibold text-gray-50">{reason}</span>

      {/* Description */}
      <p className="leading-relaxed">{description}</p>
    </div>
  )
}
