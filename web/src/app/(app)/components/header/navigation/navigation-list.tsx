import Link from 'next/link'

export const navItems = ['Features', 'Products', 'Pricing', 'Team', 'Docs']

export function NavigationList() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-8 text-sm font-bold text-gray-200 transition-colors">
        {navItems.map((item) => (
          <Link
            prefetch={false}
            href={`/${
              item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
            }`}
            key={item}
          >
            <li className="flex h-[3.75rem] cursor-pointer items-center border-b-2 border-gray-800 transition-colors hover:border-b-2 hover:border-primary-500 hover:text-gray-50">
              <span className="text-base font-medium">{item}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
