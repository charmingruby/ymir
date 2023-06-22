import { Button } from '@/components/shared/Button'
import { LuArrowRight } from 'react-icons/lu'

export function Actions() {
  return (
    <div className="flex justify-center gap-4">
      <Button variant="primary" className="rounded-full px-8">
        <span className="text-base font-medium">Start your App</span>
      </Button>

      <div className="flex cursor-pointer items-center gap-1 font-medium text-gray-50 transition-colors hover:text-gray-900">
        <span>Learn more</span>
        <LuArrowRight />
      </div>
    </div>
  )
}
