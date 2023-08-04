import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Actions() {
  const isAuthenticated = false

  if (isAuthenticated) {
    return (
      <Link href="/dashboard" prefetch={false}>
        <Button size="sm" color="dark">
          Dashboard
        </Button>
      </Link>
    )
  }

  return (
    <div className="lg:flex items-center gap-2 hidden">
      <Link
        href="/contact"
        prefetch={false}
        className="text-base text-gray-200 transition-colors hover:text-gray-50"
      >
        Contact
      </Link>

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
