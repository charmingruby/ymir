import { LuUser } from 'react-icons/lu'
import { Button } from '../../button'

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-gray-50">
        <LuUser size={16} className="text-primary-300" />
        <span className="text-sm font-medium">Sign in</span>
      </div>

      <Button variant="primary" className="h-7">
        <span>Start your app</span>
      </Button>
    </div>
  )
}
