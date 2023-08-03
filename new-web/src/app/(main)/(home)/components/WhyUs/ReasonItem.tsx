import { Box } from '@/components/ui/Box'
import { ElementType } from 'react'

interface ReasonItemProps {
  icon: ElementType
  label: string
  description: string
}

export function ReasonItem({
  icon: Icon,
  label,
  description,
}: ReasonItemProps) {
  return (
    <Box color="default" spacing="larger" className="flex flex-col gap-4">
      <Box spacing="icon" color="light">
        <Icon className="text-primary-300 h-7 w-7" />
      </Box>

      <span className="text-gray-50 text-2xl font-semibold">{label}</span>

      <p className="text-gray-200">{description}</p>
    </Box>
  )
}
