import { SubscriptionPeriods } from './subscription-periods'
import { GoBackButton } from './go-back-button'

export function Header() {
  return (
    <header className="">
      <GoBackButton />

      <div className="flex flex-col justify-between gap-y-4 lg:flex-row lg:items-center">
        {/* Title */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-3">
          <strong className="text-2xl font-medium leading-6 text-gray-50">
            Select plan
          </strong>
          <span className="leading-6 text-gray-200">
            Choose the plan that works better for you
          </span>
        </div>

        <SubscriptionPeriods />
      </div>
    </header>
  )
}
