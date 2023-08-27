import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { ArrowUpRight, Building } from 'lucide-react'

export function SolutionItem() {
  return (
    <Box spacing="spaceless" color='light' className="px-4 sm:px-8 py-8 flex flex-col gap-4 items-center">
      <Box spacing="icon" className='bg-primary-300 border-none'>
        <Building className='text-white' />
      </Box>

      <div className="space-y-2 text-center">
        <h2 className="font-semibold text-2xl text-primary-300">
          Institutional website
        </h2>
        <Text variant='lowOpacity'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          ea aperiam quos ut dolorum odio doloremque voluptate, dignissimos
          mollitia impedit placeat fugit dolores maiores! Labore laborum atque
          porro repellat quae.
        </Text>
      </div>
    </Box>
  )
}
