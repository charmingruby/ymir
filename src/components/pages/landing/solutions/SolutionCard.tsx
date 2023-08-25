import { Box } from '@/components/ui/Box'
import { Building } from 'lucide-react'
import { Text } from '@/components/ui/Text'

export function SolutionCard() {
  return (
    <Box className="flex flex-col items-center py-8" color="light">
      <div className="bg-primary-300 p-5 rounded-md">
        <Building className="text-gray-50 h-8 w-8" />
      </div>

      <div className="mt-6">
        <strong className="text-primary-300 text-xl">
          Institutional Website
        </strong>
      </div>

      <Text variant="lowOpacity" className="text-center mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In mollitia
        architecto a quidem consectetur dolorum! Exercitationem, culpa ab nihil
        repellendus deleniti praesentium minus minima officia saepe corrupti
        laudantium temporibus hic.
      </Text>
    </Box>
  )
}
