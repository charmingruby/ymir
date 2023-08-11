import Link from 'next/link'
import { DrawerItem } from './DrawerItem'

interface DrawerActionsProps {
  onClick: () => void
}

export function DrawerActions({ onClick }: DrawerActionsProps) {
  return (
    <div>
      <div className="mb-4 text-lg text-gray-50">
        <strong>Start using</strong>
      </div>
      <ul className="flex flex-col gap-3">
        <Link href="/login" prefetch={false} onClick={onClick}>
          <DrawerItem label="Sign in" onClick={onClick} url="/login" />
        </Link>

        <Link href="/register" onClick={onClick} prefetch={false}>
          <DrawerItem label="Sign up" onClick={onClick} url="/register" />
        </Link>
      </ul>
    </div>
  )
}
