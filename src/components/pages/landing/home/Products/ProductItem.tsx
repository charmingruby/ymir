import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { ArrowRight, ArrowUpRight, Building } from 'lucide-react'
import Link from 'next/link'

export function ProductItem() {
  return (
    <Box spacing="spaceless" className="bg-gray-800">
      <div className="px-4 sm:px-8 py-4 space-y-4">
        <Box spacing="icon">
          <Building className="text-terciary-300" />
        </Box>

        <div className="space-y-2">
          <h2 className="font-semibold text-2xl text-gray-50">
            Institutional website
          </h2>
          <Text className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ea aperiam quos ut dolorum odio doloremque voluptate, dignissimos
            mollitia impedit placeat fugit dolores maiores! Labore laborum atque
            porro repellat quae.
          </Text>
        </div>
      </div>

      <div className="flex sm:px-8 px-4 py-4 rounded-b-lg border-t border-gray-500 sm:flex-row gap-4 bg-gray-700">
        <Button size="sm" color="terciary" className="flex-1 md:flex-none">
          <span>Demo</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>

        <Link
          href="/"
          prefetch={false}
          className="text-gray-100 justify-center flex items-center gap-2 hover:text-terciary-300 cursor-pointer transition-colors"
        >
          <span className="">Get plan</span>
          <ArrowRight className="" size={16} />
        </Link>
      </div>
    </Box>
  )
}
