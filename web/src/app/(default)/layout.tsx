import { Footer } from '@/components/layouts/default/Footer'
import { Header } from '@/components/layouts/default/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
