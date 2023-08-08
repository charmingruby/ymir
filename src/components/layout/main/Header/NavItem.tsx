import Link from 'next/link'

interface NavItemProps {
  label: string
  url: string
  currentUrl: string
}

export function NavItem({ label, url, currentUrl }: NavItemProps) {
  const isTheCurrentUrl = url === currentUrl

  return (
    <Link prefetch={false} href={url} key={url}>
      <li
        className={`flex h-[3.75rem] cursor-pointer items-center  transition-colors group hover:text-gray-50
      ${
        isTheCurrentUrl
          ? 'border-b-2 border-primary-500 text-primary-500'
          : 'border-b-2 border-gray-900 text-gray-200'
      }
      `}
      >
        <span className="text-sm font-semibold group-hover:text-gray-50 transition-colors">
          {label}
        </span>
      </li>
    </Link>
  )
}
