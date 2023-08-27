import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface DrawerActionsProps {
  onClick: () => void
}

export function DrawerActions({ onClick }: DrawerActionsProps) {
  return (
    <ul className="flex flex-col items-center gap-3">
      <Link href="/auth/register" onClick={onClick} prefetch={false}>
        <Button size="sm" color="primary" className="w-auto">
          <Link
            prefetch={false}
            href="/register"
            onClick={onClick}
            className="font-medium"
          >
            Sign up
          </Link>
        </Button>
      </Link>
    </ul>
  )
}
