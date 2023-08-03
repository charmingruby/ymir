import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ViewAllButton() {
  return (
    <Link
      href="/features"
      prefetch={false}
      className="flex hover:text-primary-300 transition-colors text-gray-300 items-center gap-1"
    >
      <span className="text-sm">View all</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
