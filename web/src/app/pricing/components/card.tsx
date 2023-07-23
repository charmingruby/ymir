import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'

export function PricingCard() {
  return (
    <Box>
      <div>
        {/* Header */}
        <header className="flex flex-col gap-1">
          <h3 className="text-gray-50">Developer</h3>
          <p className="">The basics for individuals.</p>
        </header>

        {/* Permissions */}
        <div></div>

        {/* Separator */}
        <div />

        {/* Pricing */}
        <div></div>

        {/* Button */}
        <Button className="px-16">
          <span className="text-base font-semibold">Select</span>
        </Button>
      </div>
    </Box>
  )
}
