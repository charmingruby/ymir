import Link from 'next/link'

interface DrawerItemProps {
  label: string
  url: string
  onClick: () => void
}

export function DrawerItem({ label, url, onClick }: DrawerItemProps) {
  return (
    <Link prefetch={false} href={url} key={url} onClick={onClick}>
      <li className="cursor-pointer text-gray-300 transition-colors hover:text-primary-300 active:text-primary-300 text-base font-medium">
        {label}
      </li>
    </Link>
  )
}
