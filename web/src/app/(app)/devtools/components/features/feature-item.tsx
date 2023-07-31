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
    <Box animation="hover" spacing="larger">
      <div className="flex flex-col items-center gap-4">
        <Icon size={48} className="text-primary-300" />
        <strong className="text-xl uppercase text-primary-300">{title}</strong>
        <p className="text-center leading-relaxed">{description}</p>
      </div>
    </Box>
  )
}
