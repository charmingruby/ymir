import { Box } from '@/components/ui/Box'
import { ElementType } from 'react'

interface MissionItemProps {
  icon: ElementType
  label: string
  description: string
}

export function MissionItem({
  icon: Icon,
  label,
  description,
}: MissionItemProps) {
  return (
    <Box color="light" spacing="larger" className="flex flex-col gap-4">
      <Box spacing="icon" color="light">
        <Icon className="text-primary-300 h-7 w-7" />
      </Box>

      <span className="text-2xl font-semibold">{label}</span>

      <p className="text-gray-600">{description}</p>
    </Box>
  )
}
