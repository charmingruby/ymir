import { LuUser } from 'react-icons/lu'
import { Button } from '../../Button'

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-gray-50">
        <LuUser size={18} className="lg:text-primary-300" />
        <span className="hidden text-sm font-medium lg:block">Sign in</span>
      </div>

      <Button variant="secondary" className="h-8">
        <span className="">Start your app</span>
      </Button>
    </div>
  )
}
