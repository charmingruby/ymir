import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { ArrowRightLeft } from 'lucide-react'

export function FeatureItem() {
  return (
    <div className="flex flex-col gap-4">
      <Box spacing="icon">
        <ArrowRightLeft className="text-primary-300" />
      </Box>

      <span className="text-lg font-semibold">Smart Route Handling</span>
      <Text size="sm" color="lowOpacity">
        Streamline responses and routing, enhance adaptability, and elevate user
        experience.
      </Text>
    </div>
  )
}
