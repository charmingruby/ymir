import { Box } from '@/components/ui/Box'
import { FeatureItem } from './FeatureItem'

import { ViewAllButton } from './ViewAllButton'

export function FeatureList() {
  return (
    <Box
      color="transparent"
      spacing="spaceless"
      className="mt-8 w-full flex flex-col"
    >
      <div className="flex justify-between gap-2 items-center bg-gray-800 rounded-t-lg w-full px-4 sm:px-8 py-4">
        <span className="text-sm font-semibold uppercase text-primary-300">
          Most loved features
        </span>
        <div className="hidden md:block">
          <ViewAllButton />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border-t border-gray-600 sm:px-8 py-4 sm:py-8 px-4">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>

      <div className="flex justify-center md:hidden sm:px-8 py-2 sm:py-4 px-4">
        <ViewAllButton />
      </div>
    </Box>
  )
}
