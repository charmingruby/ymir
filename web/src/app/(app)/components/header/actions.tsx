import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="flex items-center gap-2">
      {/* Sign in */}
      <Link href="/sign-in" prefetch={false}>
        <div className="group flex h-8 cursor-pointer items-center gap-1 rounded-full px-4 text-gray-50 transition-colors hover:bg-gray-700 hover:text-primary-100">
          <span className="text-sm font-semibold">Sign in</span>
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
