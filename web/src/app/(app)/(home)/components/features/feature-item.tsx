import { Box } from '@/components/ui/box'
import { ElementType } from 'react'

interface FeatureItemProps {
  icon: ElementType
  title: string
  description: string
}

export function FeatureItem({
  icon: Icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <Box spacing="icon">
        <Icon size={24} className="text-primary-300" />
      </Box>
      <div className="flex flex-col gap-3 leading-relaxed">
        <div className="text-lg font-semibold text-gray-50">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}
