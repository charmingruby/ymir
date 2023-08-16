import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { Check } from 'lucide-react'

export function FeatureItem() {
  return (
    <Box color="light" className="flex flex-col gap-3 relative p-8">
      <div className="absolute -left-4 top-1/2 bg-primary-300 border-6 border-primary-100 p-0.5 sm:p-1 rounded-full -translate-y-1/2">
        <Check className="text-gray-50" size={18} />
      </div>

      <div className="space-y-2">
        <span className="text-lg font-semibold">Smart Route Handling</span>
        <Text size="sm" color="lowOpacity">
          Streamline responses and routing, enhance adaptability, and elevate
          user experience.
        </Text>
      </div>
    </Box>
  )
}
