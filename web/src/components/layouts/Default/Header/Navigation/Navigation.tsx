import { MenuButton } from './MenuButton'

export function Navigation() {
  const navItems = [
    'About',
    'Organizations',
    'Projects',
    'Developers',
    'Docs',
    'Pricing',
  ]

  return (
    <>
      <MenuButton />
      <nav className="hidden lg:flex">
        <ul className="flex gap-8 text-sm font-bold text-gray-200 transition-colors">
          {navItems.map((item) => (
            <li
              key={item}
              className="flex h-16 cursor-pointer items-center border-b border-gray-500 hover:border-b-2 hover:border-primary-500 hover:text-gray-50"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
