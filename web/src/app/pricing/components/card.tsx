import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

import { LuCheckCircle2 } from 'react-icons/lu'

export function PricingCard() {
  return (
    <Box spacing="lg">
      <div>
        {/* Header */}
        <header className="flex flex-col">
          <h3 className="text-lg font-medium text-gray-50">Developer</h3>
          <span className="">The basics for individuals.</span>
        </header>

        {/* Permissions */}
        <div>
          <LuCheckCircle2 className="text-2xl text-success-300" />
        </div>

        {/* Separator */}
        <div />

        {/* Pricing */}
        <div></div>

        {/* Button */}
        <Button small className="px-16">
          <span className="text-base font-semibold">Select</span>
        </Button>
      </div>
    </Box>
  )
}
