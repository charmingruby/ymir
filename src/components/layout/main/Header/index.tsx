'use client'

import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { useState } from 'react'
import { BurguerButton } from './BurguerButton'
import { Drawer } from './Drawer'
import { Actions } from './Actions'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const pathname = usePathname()

  console.log(pathname)

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gray-500 bg-gray-900 shadow-lg">
      {isMenuOpen && <Drawer onClick={handleMenuToggle} />}

      <Container spacing="spaceless">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center h-16 gap-4 lg:gap-16">
            <Logo />

            <div className="hidden lg:flex">
              <nav className="flex gap-8">
                <NavItem
                  label="Features"
                  url="/features"
                  currentUrl={pathname}
                />
                <NavItem
                  label="Products"
                  url="/products"
                  currentUrl={pathname}
                />
                <NavItem label="Pricing" url="/pricing" currentUrl={pathname} />
                <NavItem label="The Ymir" url="/about" currentUrl={pathname} />
                <NavItem label="Team" url="/team" currentUrl={pathname} />
              </nav>
            </div>
          </div>

          <Actions />

          <BurguerButton onClick={handleMenuToggle} />
        </div>
      </Container>
    </header>
  )
}
