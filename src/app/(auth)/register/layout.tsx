'use client'

import { Header } from '@/app/(auth)/components/header'
import * as Container from '@/components/ui/container'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Container.Root className="flex flex-1">
        <Container.Content
          spacing="spaceless"
          className="flex flex-col flex-1 pt-24 pb-16 max-w-xl w-full"
        >
          {children}
        </Container.Content>
      </Container.Root>
    </div>
  )
}
