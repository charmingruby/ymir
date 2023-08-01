import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="flex items-center gap-2">
      {/* Sign in */}
      <Link href="/sign-in" prefetch={false}>
        <Button color="transparent" size="sm">
          Sign in
        </Button>
      </Link>

      {/* Sign up  */}
      <Link href="/sign-up" prefetch={false}>
        <Button color="secondary" size="sm">
          Sign up
        </Button>
      </Link>
    </div>
  )
}
