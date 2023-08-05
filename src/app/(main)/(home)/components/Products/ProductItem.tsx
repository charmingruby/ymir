import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { ArrowRight, ArrowUpRight, Building } from 'lucide-react'

export function ProductItem() {
  return (
    <Box spacing="spaceless">
      <div className="px-4 sm:px-8 py-4 space-y-4">
        <Box spacing="icon">
          <Building className="text-primary-300" />
        </Box>

        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">Institutional website</h2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ea aperiam quos ut dolorum odio doloremque voluptate, dignissimos
            mollitia impedit placeat fugit dolores maiores! Labore laborum atque
            porro repellat quae.
          </Text>
        </div>
      </div>

      <div className="flex flex-col sm:px-8 px-4 py-4 rounded-b-lg border-t border-gray-600 sm:flex-row gap-2 bg-gray-700">
        <Button size="sm">
          <span>Demo</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
        <Button size="sm" color="uncolored">
          <span>View details</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Box>
  )
}
