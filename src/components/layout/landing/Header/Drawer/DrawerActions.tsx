import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface DrawerActionsProps {
  onClick: () => void
}

export function DrawerActions({ onClick }: DrawerActionsProps) {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        <Link href="/login" prefetch={false} onClick={onClick}>
          <Button size="sm" color="light" className="w-auto">
            <Link
              prefetch={false}
              href="/login"
              onClick={onClick}
              className="text-lg font-medium"
            >
              Sign in
            </Link>
          </Button>
        </Link>

        <Link href="/register" onClick={onClick} prefetch={false}>
          <Button size="sm" color="dark" className="w-auto">
            <Link
              prefetch={false}
              href="/register"
              onClick={onClick}
              className="text-lg font-medium"
            >
              Sign up
            </Link>
          </Button>
        </Link>
      </ul>
    </div>
  )
}
