import { Text } from '@/components/ui/Text'
import { Check } from 'lucide-react'

export function FeatureItem() {
  return (
    <div className="flex flex-col gap-3 relative bg-gray-800 p-8 border border-gray-600 rounded-lg shadow-md">
      <div className="absolute -left-4 top-1/2 bg-primary-300 border border-gray-600 p-0.5 sm:p-1.5 rounded-full -translate-y-1/2">
        <Check className="text-gray-50" size={20} />
      </div>

      <div className="space-y-2">
        <span className="text-lg font-semibold">Smart Route Handling</span>
        <Text size="sm" color="lowOpacity">
          Streamline responses and routing, enhance adaptability, and elevate
          user experience.
        </Text>
      </div>
    </div>
  )
}
