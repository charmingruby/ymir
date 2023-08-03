import Link from 'next/link'

interface DrawerItemProps {
  label: string
  url: string
  onClick: () => void
}

export function DrawerItem({ label, url, onClick }: DrawerItemProps) {
  return (
    <Link prefetch={false} href={url} key={url} onClick={onClick}>
      <li className="cursor-pointer font-medium text-gray-100 transition-colors hover:text-gray-50 active:text-gray-50">
        {label}
      </li>
    </Link>
  )
}
