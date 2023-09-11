'use client'

import * as Container from '@/components/ui/container'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { useState } from 'react'
import { BurguerButton } from './burguer-button'
import { Drawer } from './drawer'
import { Actions } from './actions'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const pathname = usePathname()

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 h-16 w-full bg-white shadow-md">
      {isMenuOpen && <Drawer onClick={handleMenuToggle} />}

      <Container.Content spacing="spaceless">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center h-16 gap-4 lg:gap-16">
            <Logo />
          </div>

          <nav className="hidden lg:flex gap-8">
            <NavItem label="Home" url="/" currentUrl={pathname} />
            <NavItem label="The Ymir" url="/about" currentUrl={pathname} />
            <NavItem label="Solutions" url="/solutions" currentUrl={pathname} />
            <NavItem label="Contact" url="/contact" currentUrl={pathname} />
          </nav>

          <Actions />

          <BurguerButton onClick={handleMenuToggle} />
        </div>
      </Container.Content>
    </header>
  )
}
