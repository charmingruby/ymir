import Link from 'next/link'
import { LinkProps } from './InternalLinkList'

interface LinkItem extends LinkProps {
  isTheLast: boolean
}

export function InternalLinkItem({ label, url, isTheLast }: LinkItem) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="group flex cursor-auto items-center gap-4"
    >
      <span className="cursor-pointer text-sm text-gray-300 transition-all group-hover:text-primary-700 group-hover:underline">
        {label}
      </span>
      {!isTheLast && (
        <div className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
      )}
    </Link>
  )
}
