import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'

export function Header() {
  return (
    <header className="">
      <Link href="/" prefetch={false} className="mb-2 flex">
        <div className="flex items-center gap-1 transition-colors hover:text-gray-50">
          <LuArrowLeft className="mb-0.5" />
          <span>Go back</span>
        </div>
      </Link>

      <div className="flex items-center justify-between">
        {/* Title */}
        <div className="space-x-3">
          <strong className="text-2xl font-medium text-gray-50">
            Select plan
          </strong>
          <span className="text-gray-200">
            Choose the plan that works better for you
          </span>
        </div>

        {/* Choose monthly or annually */}
        <div className="flex h-10 items-center rounded-md border border-gray-600">
          <div className="flex h-10 items-center rounded-l-md bg-gray-500 px-4">
            <span className="text-sm font-medium uppercase text-gray-100">
              Monthly
            </span>
          </div>

          <div className="h-10 w-px bg-gray-600" />

          <div className="flex h-10 items-center rounded-l-md px-4">
            <span className="text-sm font-medium uppercase text-gray-50">
              Annually (<span className="text-primary-300">Save up to 67%</span>
              )
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
