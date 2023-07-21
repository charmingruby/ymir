export function NavigationItems() {
  const navItems = ['Home', 'About', 'Docs', 'Pricing', 'Cases']

  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="flex gap-8 text-sm font-bold text-gray-200 transition-colors">
          {navItems.map((item) => (
            <li
              key={item}
              className="flex h-[63px] cursor-pointer items-center border-b-2 border-gray-800 transition-colors hover:border-b-2 hover:border-primary-500 hover:text-gray-50"
            >
              <span className="text-base font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
