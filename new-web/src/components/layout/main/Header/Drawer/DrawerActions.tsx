import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface DrawerActionsProps {
  onClick: () => void
}

export function DrawerActions({ onClick }: DrawerActionsProps) {
  return (
    <div>
      <div className="mb-4 text-lg text-gray-50">
        <strong>Start using</strong>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/dashboard" prefetch={false} onClick={onClick}>
          <Button color="secondary" size="sm" className="w-auto">
            <span className="">Sign in</span>
          </Button>
        </Link>

        <Link href="/dashboard" onClick={onClick} prefetch={false}>
          <Button color="primary" size="sm" className="w-auto">
            <span className="">Sign up</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
