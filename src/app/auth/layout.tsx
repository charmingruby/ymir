'use client'

import { Header } from '@/components/layout/auth/Header'
import * as Container from '@/components/ui/Container'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isRootRegisterUrl = pathname === '/auth/register'

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Container.Root className="flex flex-1">
        {isRootRegisterUrl ? (
          <Container.Content
            spacing="spaceless"
            className="flex flex-col flex-1 justify-center max-w-xl w-full"
          >
            {children}
          </Container.Content>
        ) : (
          <Container.Content
            spacing="spaceless"
            className="flex flex-col flex-1 pt-24 max-w-xl w-full"
          >
            {children}
          </Container.Content>
        )}
      </Container.Root>
    </div>
  )
}
