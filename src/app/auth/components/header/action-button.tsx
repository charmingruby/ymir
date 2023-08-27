'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ActionButton() {
  const pathname = usePathname()

  return (
    <div>
      {pathname === '/auth/login' ? (
        <Link prefetch={false} href="/auth/register">
          <Button size="sm" className="w-auto">
            Sign up
          </Button>
        </Link>
      ) : (
        <Link prefetch={false} href="/auth/login">
          <Button size="sm" className="w-auto">
            Sign in
          </Button>
        </Link>
      )}
    </div>
  )
}
