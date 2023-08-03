import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="lg:flex items-center gap-2 hidden">
      <Link href="/sign-in" prefetch={false}>
        <Button size="sm" color="dark">
          Sign in
        </Button>
      </Link>

      <Link href="sign-up" prefetch={false}>
        <Button size="sm" color="primary">
          Sign up
        </Button>
      </Link>
    </div>
  )
}
