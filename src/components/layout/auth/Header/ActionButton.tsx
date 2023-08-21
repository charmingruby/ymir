'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ActionButton() {
  const pathname = usePathname()

  return (
    <div>
      {pathname === '/login' ? (
        <Link prefetch={false} href="/register">
          <Button size="sm" className="w-auto">
            Sign up
          </Button>
        </Link>
      ) : (
        <Link prefetch={false} href="/login">
          <Button size="sm" className="w-auto">
            Sign in
          </Button>
        </Link>
      )}
    </div>
  )
}
