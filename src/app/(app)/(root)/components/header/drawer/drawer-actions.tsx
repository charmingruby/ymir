import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface DrawerActionsProps {
  onClick: () => void
}

export function DrawerActions({ onClick }: DrawerActionsProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link
        href="/login"
        prefetch={false}
        className="font-medium text-gray-300 hover:text-primary-300 transition-colors"
      >
        Sign in
      </Link>
      <Link href="/login" onClick={onClick} prefetch={false}>
        <Button size="sm" color="primary" className="w-auto font-medium">
          Sign up
        </Button>
      </Link>
    </div>
  )
}
