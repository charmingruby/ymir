import { Button } from '@/components/ui/Button'
import { HiOutlineBookOpen } from 'react-icons/hi'

export function HeroButtonsGroup() {
  return (
    <div className="mb-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
      <Button className="px-8">
        <span className="text-base font-medium">Start your app</span>
      </Button>
      <Button className="px-8" variant="uncolored">
        <div className="flex items-center">
          <span className="mr-1 text-base font-medium">Documentation</span>
          <HiOutlineBookOpen />
        </div>
      </Button>
    </div>
  )
}
