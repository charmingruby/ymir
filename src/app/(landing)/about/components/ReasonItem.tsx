import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'
import { Users } from 'lucide-react'

export function ReasonItem() {
  return (
    <Box className="relative">
      <Box spacing="icon" className="absolute -top-6">
        <Users className="text-primary-300" />
      </Box>

      <span className="text-xl font-semibold mt-4 block">Team Friendly</span>

      <Text className="mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
        consequuntur cupiditate earum impedit rerum enim minima, maxime
        voluptatibus. Cupiditate commodi obcaecati pariatur dignissimos a, earum
        inventore. Officiis veritatis reiciendis laudantium.
      </Text>
    </Box>
  )
}