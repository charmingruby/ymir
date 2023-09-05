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
        <Button size="sm">Start project</Button>
      </Link>
    </div>
  )
}
