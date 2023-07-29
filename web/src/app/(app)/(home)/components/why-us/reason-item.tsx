import { Box } from '@/components/ui/box'
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
    <Box color="transparent" spacing="larger" className="flex flex-col gap-4">
      <Box spacing="icon">
        <Icon size={24} className="text-primary-300" />
      </Box>

      <span className="text-2xl font-semibold text-gray-50">{reason}</span>

      <p className="leading-relaxed">{description}</p>
    </Box>
  )
}
