import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { Boxes } from 'lucide-react'

export function FeatureItem() {
  return (
    <Box color="light" className="flex flex-col justify-center py-8">
      <div className="h-16 w-16 bg-primary-300 flex items-center self-center justify-center rounded-md">
        <Boxes className="h-8 w-8 text-gray-50" />
      </div>

      <strong className="mt-6 text-center text-xl text-primary-300">
        Unlimited Projects
      </strong>

      <Text variant="lowOpacity" className="text-center mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In mollitia
        architecto a quidem consectetur dolorum! Exercitationem, culpa ab nihil
        repellendus deleniti praesentium minus minima officia saepe corrupti
        laudantium temporibus hic.
      </Text>
    </Box>
  )
}
