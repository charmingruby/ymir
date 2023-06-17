import { ReactNode } from 'react'
import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
