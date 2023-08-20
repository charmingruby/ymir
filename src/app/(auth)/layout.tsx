import { Header } from '@/components/layout/auth/Header'
import { Container } from '@/components/ui/Container'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex flex-col  bg-gray-50">
      <Header />
      <Container
        spacing="spaceless"
        className="flex flex-col max-w-xl w-full pt-8"
      >
        {children}
      </Container>
    </div>
  )
}
