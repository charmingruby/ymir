'use client'

import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { useState } from 'react'
import { BurguerButton } from './BurguerButton'
import { Drawer } from './Drawer'
import { Actions } from './Actions'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

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
                <NavItem label="Features" url="/features" />
                <NavItem label="Products" url="/products" />
                <NavItem label="Pricing" url="/pricing" />
                <NavItem label="Team" url="/team" />
                <NavItem label="Docs" url="/docs" />
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
