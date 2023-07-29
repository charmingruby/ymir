import { LuUser } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      {/* Sign in */}
      <Link href="/dashboard" prefetch={false}>
        <div className="group flex h-8 cursor-pointer items-center gap-1 rounded-md px-2 text-gray-50 transition-colors hover:bg-gray-700 hover:text-primary-100">
          <LuUser
            size={18}
            className="transition-colors hover:text-primary-300 lg:text-primary-300"
          />
          <span className="hidden text-sm font-medium lg:block">Sign in</span>
        </div>
      </Link>

      {/* Sign up  */}
      <Link href="/sign-up" prefetch={false}>
        <Button color="secondary" className="h-8">
          <span className="">Sign up</span>
        </Button>
      </Link>
    </div>
  )
}
