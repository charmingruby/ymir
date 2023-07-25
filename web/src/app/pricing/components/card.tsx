import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Permission } from './permission'

export function PricingCard() {
  return (
    <Box spacing="lg">
      <div className="w-full">
        {/* Header */}
        <header className="mb-8 flex flex-col">
          <h3 className="mb-2 text-3xl font-semibold text-gray-50">
            Developer
          </h3>
          <span className="text-gray-200">The basics for individuals.</span>
        </header>

        {/* Permissions */}
        <div className="mb-16 flex flex-col gap-2">
          <Permission text="Unlimited local projects" permitted />
          <Permission text="Unlimited local projects" permitted={false} />
          <Permission text="Unlimited local projects" permitted />
        </div>

        {/* Separator */}
        <div className="mb-16 h-0.5 w-full bg-gray-600" />

        {/* Pricing */}
        <div className="mb-12 flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            {/* Price */}
            <div>
              <span className="text-4xl font-semibold leading-3 text-primary-300">
                $5
              </span>
              <span className="leading-3 text-gray-100">/month</span>
            </div>

            {/* Sale */}
            <span className="leading-3 text-gray-200 line-through">
              $25 / month
            </span>
          </div>

          {/* Explanation */}
          <p className="text-gray-200">Simple month-to-month pricing.</p>
        </div>

        {/* Sale code */}
        <div className="mb-12 w-full rounded-md bg-gray-600 p-3 leading-relaxed">
          Use the TEAM25 promo code to activate the discount.
        </div>

        {/* Button */}
        <Button className="w-full px-24">
          <span className="text-base font-semibold">Select</span>
        </Button>
      </div>
    </Box>
  )
}
