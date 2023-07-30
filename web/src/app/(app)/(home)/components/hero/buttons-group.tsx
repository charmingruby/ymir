import { Button } from '@/components/ui/button'
import { HiOutlineBookOpen } from 'react-icons/hi'

export function HeroButtonsGroup() {
  return (
    <div className="mb-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
      <Button className="px-8">
        <span className="text-base">Start your app</span>
      </Button>
      <Button className="px-8" color="uncolored">
        <div className="flex items-center">
          <span className="mr-1 text-base">Documentation</span>
          <HiOutlineBookOpen />
        </div>
      </Button>
    </div>
  )
}
