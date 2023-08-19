import { Header } from '@/components/layout/landing/Header'
import { Container } from '@/components/ui/Container'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <Header />
      <Container
        spacing="spaceless"
        className="flex flex-col max-w-xl w-full pt-28"
      >
        {children}
      </Container>
    </div>
  )
}
