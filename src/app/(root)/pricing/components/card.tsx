import { Box } from '@/components/ui/Box'
import { Permission } from './permission'
import { Button } from '@/components/ui/Button'

export function PricingCard() {
  return (
    <Box spacing="larger">
      <div className="w-full">
        {/* Header */}
        <header className="mb-8 flex flex-col">
          <h3 className="mb-2 text-3xl font-semibold text-gray-50">Beta</h3>
          <span className="text-gray-200">All features available to test.</span>
        </header>

        {/* Permissions */}
        <div className="mb-12 flex flex-col gap-2">
          <Permission text="Unlimited permissions" permitted />
          <Permission
            text="Only until is oficially released."
            permitted={false}
          />
        </div>

        {/* Separator */}
        <div className="mb-12 h-0.5 w-full bg-gray-600" />

        {/* Pricing */}
        <div className="mb-12 flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            {/* Price */}
            <div>
              <span className="text-4xl font-semibold leading-3 text-primary-300">
                $0
              </span>
              <span className="leading-3 text-gray-100">/month</span>
            </div>

            {/* Sale
             <span className="leading-3 text-gray-200 line-through">
              $25 / month
            </span>
            */}
          </div>

          {/* Explanation 
          
          <p className="text-gray-200">Simple month-to-month pricing.</p>
          */}
        </div>

        {/* Sale code */}
        <div className="mb-12 w-full rounded-md bg-gray-600 p-3 leading-relaxed">
          Beta code is needed.
        </div>

        {/* Button */}
        <Button className="w-full px-24">
          <span className="text-base font-semibold">Select</span>
        </Button>
      </div>
    </Box>
  )
}
