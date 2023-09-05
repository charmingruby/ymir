import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { ElementType } from 'react'

interface CycleElementProps {
  icon: ElementType
  title: string
  description: string
}

export function CycleElement({
  icon: Icon,
  title,
  description,
}: CycleElementProps) {
  return (
    <Box className="w-full py-8 flex flex-col items-center" color="light">
      <Box spacing="icon" className="bg-primary-300 border-none">
        <Icon className="text-gray-50" />
      </Box>

      <span className="text-xl font-semibold mt-4 block">{title}</span>

      <Text className="mt-2" variant="lowOpacity">
        {description}
      </Text>
    </Box>
  )
}
