import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { ElementType } from 'react'

interface PlanItemProps {
  icon: ElementType
  name: string
  description: string
}

export function PlanItem({ icon: Icon, name, description }: PlanItemProps) {
  return (
    <Box className="flex flex-col" color="light">
      <div className="sm:px-8 px-4 py-8 flex flex-col items-center">
        <div className="w-12 h-12 items-center flex justify-center">
          <Icon className="text-primary-300" size={32} />
        </div>

        <strong className="font-semibold text-2xl mt-6 text-primary-300">
          {name}
        </strong>
        <Text className="mt-2 text-center" variant="lowOpacity">
          {description}
        </Text>
      </div>
    </Box>
  )
}
