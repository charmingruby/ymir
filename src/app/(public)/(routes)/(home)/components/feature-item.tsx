import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Check } from 'lucide-react'

interface FeatureItemProps {
  title: string
  description: string
}

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <Box color="light" className="flex flex-col gap-3 relative p-8">
      <div className="absolute -left-4 top-1/2 bg-primary-300 border-6 border-primary-100 p-0.5 sm:p-1 rounded-full -translate-y-1/2">
        <Check className="text-gray-50" size={18} />
      </div>

      <div className="space-y-2">
        <span className="text-lg font-semibold">{title}</span>
        <Text size="sm" variant="lowOpacity">
          {description}
        </Text>
      </div>
    </Box>
  )
}
