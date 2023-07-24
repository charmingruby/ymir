import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'

export function GoBackButton() {
  return (
    <Link href="/" prefetch={false} className="mb-4 flex cursor-auto">
      <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-gray-50">
        <LuArrowLeft className="mb-0.5" />
        <span className="font-medium">Go back</span>
      </div>
    </Link>
  )
}
