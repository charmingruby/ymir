import Link from 'next/link'

interface NavItemProps {
  label: string
  url: string
}

export function NavItem({ label, url }: NavItemProps) {
  return (
    <Link prefetch={false} href={url} key={url}>
      <li className="flex h-[3.75rem] cursor-pointer items-center border-b-2 border-gray-800 transition-colors hover:border-b-2 hover:border-primary-500 hover:text-gray-50">
        <span className="text-base font-medium">{label}</span>
      </li>
    </Link>
  )
}