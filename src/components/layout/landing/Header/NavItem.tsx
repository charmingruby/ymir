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
        className={`flex h-[3.75rem] cursor-pointer items-center transition-colors group hover:text-primary-300
      ${
        isTheCurrentUrl
          ? 'border-b-2 border-primary-300 text-primary-300'
          : 'border-b-2 border-gray-50'
      }
      `}
      >
        <span className="text-base font-medium group-hover:text-primary-300 transition-colors">
          {label}
        </span>
      </li>
    </Link>
  )
}
