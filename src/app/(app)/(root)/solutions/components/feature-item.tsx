import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { ElementType } from 'react'

interface FeatureItemProps {
  icon: ElementType
  label: string
  description: string
}

export function FeatureItem({
  icon: Icon,
  label,
  description,
}: FeatureItemProps) {
  return (
    <Box color="light" className="flex flex-col justify-center py-8">
      <div className="h-16 w-16 bg-primary-300 flex items-center self-center justify-center rounded-md">
        <Icon className="h-8 w-8 text-gray-50" />
      </div>

      <strong className="mt-6 text-center text-xl text-primary-300">
        {label}
      </strong>

      <Text variant="lowOpacity" className="text-center mt-2">
        {description}
      </Text>
    </Box>
  )
}
