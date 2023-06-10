import { LuUser } from 'react-icons/lu'
import { Button } from '../../button'

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-gray-50">
        <LuUser size={16} className="text-primary-500" />
        <span className="text-base font-medium">Sign in</span>
      </div>

      <Button variant="primary">
        <span className="text-base">Start your app</span>
      </Button>
    </div>
  )
}
