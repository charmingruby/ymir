import { LuUser } from 'react-icons/lu'
import { Button } from '@/components/shared/Button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex cursor-pointer items-center gap-1 text-gray-50">
        <LuUser
          size={18}
          className="transition-colors hover:text-primary-300 lg:text-primary-300"
        />
        <span className="hidden text-sm font-medium lg:block">Sign in</span>
      </div>
      <Link href="/dashboard">
        <Button variant="secondary" className="h-8">
          <span className="">Start app</span>
        </Button>
      </Link>
    </div>
  )
}
