import { Button } from '@/components/ui/button'
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
      <Link href="/login" prefetch={false}>
        <Button size="sm" variant="secondary">
          Sign in
        </Button>
      </Link>

      <Link href="/register" prefetch={false}>
        <Button size="sm">Sign up</Button>
      </Link>
    </div>
  )
}
