import { Button } from '@/components/ui/button'
import { LuArrowRight } from 'react-icons/lu'

export function Actions() {
  return (
    <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:justify-center">
      <Button color="primary" className="px-8">
        <span className="text-base">Start your App</span>
      </Button>

      <div className="flex w-full cursor-pointer items-center justify-center gap-1 font-medium text-gray-50 transition-colors hover:text-primary-700 md:w-auto">
        <span>Learn more</span>
        <LuArrowRight />
      </div>
    </div>
  )
}
