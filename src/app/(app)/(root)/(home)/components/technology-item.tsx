import { Box } from '@/components/ui/box'
import { ElementType } from 'react'

interface TechnologyItemProps {
  icon: ElementType
}

export function TechnologyItem({ icon: Icon }: TechnologyItemProps) {
  return (
    <Box className="flex items-center justify-center" color="light">
      <Icon className="w-12 h-12 fill-primary-300" />
    </Box>
  )
}
