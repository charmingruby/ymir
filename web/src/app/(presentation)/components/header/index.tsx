'use client'

import { Container } from '@/components/ui/container'
import { Actions } from './actions'
import { Logo } from './logo'
import { NavigationItems } from './navigation/navigation-items'
import { Drawer } from './navigation/drawer'
import { useState } from 'react'
import { MenuToggleButton } from './navigation/menu-toggle-button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gray-500 bg-gray-800">
      {isMenuOpen && <Drawer />}
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-16">
            <Logo />

            {/* Separator */}
            <div className="h-8 w-px rounded-full bg-gray-200 lg:hidden" />

            <MenuToggleButton onClick={handleMenuToggle} />

            <NavigationItems />
          </div>

          <Actions />
        </div>
      </Container>
    </header>
  )
}
