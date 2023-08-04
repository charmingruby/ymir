import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function GoBackButton() {
  return (
    <Link href="/" prefetch={false} className="mb-4 flex cursor-auto">
      <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-gray-50 text-gray-100">
        <ArrowLeft className="mb-0.5" size={18} />
        <span className="font-medium">Go back</span>
      </div>
    </Link>
  )
}
