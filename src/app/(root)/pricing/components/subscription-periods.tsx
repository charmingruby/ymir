export function SubscriptionPeriods() {
  return (
    <div className="grid h-10 grid-cols-2 rounded-md border border-gray-600 sm:flex sm:items-center">
      {/* Monthly */}
      <div className="flex h-10 items-center justify-center rounded-l-md bg-gray-500 px-1 sm:px-4">
        <span className="text-sm font-medium uppercase text-gray-100">
          Monthly
        </span>
      </div>

      {/* Separator */}
      <div className="hidden h-10 w-px bg-gray-600 sm:flex" />

      {/* Annually */}
      <div className="flex h-10 flex-1 items-center justify-center rounded-l-md px-1 sm:px-4">
        <span className="text-sm font-medium uppercase text-gray-50">
          Annually{' '}
          <span className="hidden sm:inline-block">
            (<span className="text-primary-300">Save up to 67%</span>)
          </span>
        </span>
      </div>
    </div>
  )
}
