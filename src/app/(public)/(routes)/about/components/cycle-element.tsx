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
    <Box className="w-full py-8 flex flex-col " color="light">
      <div className="flex items-center gap-3">
        <Icon className="text-primary-300" />
        <span className="text-xl font-semibold mt-1 block">{title}</span>
      </div>

      <Text className="mt-2" variant="lowOpacity">
        {description}
      </Text>
    </Box>
  )
}
